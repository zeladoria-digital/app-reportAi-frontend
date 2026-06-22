import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "@/src/context/AuthContext";
// Importamos o nosso cofre global de denúncias
// (Verifique se o nome da pasta no seu PC é 'context' ou 'contexts')
import { ReportProvider } from "../src/contexts/reportContext"; 

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
      {/* O cofre global abraça o conteúdo logo após a validação de usuário */}
      <ReportProvider>
        <RootLayoutContent />
      </ReportProvider>
    </AuthProvider>
  );
}