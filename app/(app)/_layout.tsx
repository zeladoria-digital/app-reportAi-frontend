import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      {/* Home Tabs */}
      <Stack.Screen name="home-tabs" />

      {/* Report Flow */}
      <Stack.Screen name="new-report" />
      <Stack.Screen name="camera" />
      <Stack.Screen name="category" />
      <Stack.Screen name="location" />
      <Stack.Screen name="description" />
      <Stack.Screen name="confirmation" />
    </Stack>
  );
}
