import { sendFriendRequest , getFriendsDetailed , discoverUsers } from "./friend.service.js";

export async function sendRequest(req, res) {
  try {
    const senderId = req.user.id;
    const { receiverId } = req.body;

    const result = await sendFriendRequest(senderId, receiverId);
    
    io.to(receiverId).emit("friend_request_received" , result);

    const receiver = await prisma.user.findUnique({
      where:{id:receiverId},
      select:{
        pushToken:true
      }
    })

    if(receiver.pushToken){
      await sendFriendRequestNotification(
         receiver.pushToken,
        req.user.name || req.user.username || "Someone",
        req.user.avatar || req.user.profilePicture || null,
        result.id
      )
    }

    return res.json(result);
  } catch (error) {
    return res
      .status(400)
      .json({ message: err.message || "Failed to send request" });
  }
}

export async function listFriends(req, res) {
  try {
    const userId = req.user.id;
    const data = await getFriendsDetailed(userId);

    return res.json(data);
  } catch (error) {
    return res
      .status(400)
      .json({ message: err.message || "Failed to list friends" });
  }
}

export async function discover(req, res) {
  try {
    const userId = req.user.id;
    const search = req.query.search;

    const data = await discoverUsers(userId, search);

    return res.json(data);
  } catch (err) {
    return res
      .status(400)
      .json({ message: err.message || "Failed to discover users" });
  }
}