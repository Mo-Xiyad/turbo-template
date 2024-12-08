import Constants from "expo-constants";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { TRPCProvider } from "@/trpc/api";
import { tokenCache } from "@/utils/cache-tocken";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import "react-native-reanimated";
import "../styles.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const publicKey = Constants.expoConfig?.extra
    ?.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

  if (!publicKey) {
    throw new Error("ExpoClerkPublicKey not found");
  }
  return (
    <ClerkProvider publishableKey={publicKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <TRPCProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
              <StatusBar style="auto" />
            </Stack>
          </ThemeProvider>
        </TRPCProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
