# ReactNative

npm i
npm run start # o usa la tarea "Expo start (tunnel)"

for ios:
second port
npx expo start --tunnel




**** plugins de app.json antes de borrar para que no tenga en cuenta router:
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],