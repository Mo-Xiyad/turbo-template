import { ConfigContext, ExpoConfig } from "expo/config";

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY =
  "pk_test_bm90YWJsZS1veC05OS5jbGVyay5hY2NvdW50cy5kZXYk";
const config = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "exp",
  slug: "exp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    [
      "expo-router",
      {
        root: "./src/app",
      },
    ],
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
  ],
  extra: {
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
  experiments: {
    typedRoutes: true,
  },
});
export default config;
