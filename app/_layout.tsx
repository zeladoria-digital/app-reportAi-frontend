import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "@/src/context/AuthContext";

function RootLayoutContent() {
  const { isLoggedIn } = useAuth();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      {showSplash ? (
        // Splash Screen
        <Stack.Screen name="splash" />
      ) : !isLoggedIn ? (
        // Auth Stack
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="cadastro" />
        </>
      ) : (
        // App Stack
        <>
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}
