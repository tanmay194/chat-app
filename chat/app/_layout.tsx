import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "@/contexts/auth-context";
import { Text, View } from "react-native";

function Layout() {
  const { user, isLoading } = useAuth();
  
  console.log("Layout:", { user, isLoading });

  if (isLoading) {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading...</Text>
    </View>;
  }

  const isLoggedIn = !!user;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}