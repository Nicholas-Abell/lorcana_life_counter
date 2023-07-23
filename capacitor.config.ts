import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "lorcana_counter",
  webDir: "out",
  server: {
    androidScheme: "https",
    // url: "https://192.168.x.xx:3000",
    // cleartext: true,
  },
};

export default config;
