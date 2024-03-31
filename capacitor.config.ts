import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gabrielapuerta.dev',
  appName: 'miAplicacion',
  webDir: 'www/miAplicacion',
  server: {
    androidScheme: 'https'
  }
};

export default config;
