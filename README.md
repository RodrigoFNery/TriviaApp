# Trivia App - G2i

## General information

The app was implemented using **`React-Native (0.69.5)`** with **`Typescript (4.6.3)`** and **`Expo CLI (46.0.9)`** 

## Some of the packages used

- **`@react-navigation/native`** and **`@react-navigation/native-stack`**<br>
    The app react-navigation packages to handle navigation among the screens.
    
- **`i18n-js`** <br>
    There is no hardcoded strings within the code. All strings are translated according to the devices's language using the content of the files en-US.ts (English) and pt-BR.ts (Portuguese). English is used as default for other device's languages.

- **`react-redux`** <br>
    All the communication between screens are done via **`Redux`**.


- **`html-entities`** <br>
    Uset to decode HTML special characters that come from the API

## How to run the app

- **`Requirements`** <br>

    Expo CLI uses Metro during **`npx expo start`** to bundle your JavaScript code and assets, so you need to have Node.js and NPM installed in your machine.

    Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

- **`Steps to start the app`** <br>

    - create a TriviaApp folder and unzip the project in it.
    - Open the terminal (or command prompt) and type the following commands 
        - cd \<path to Trivia App folder\>
        - npm start
    - Star the Expo Go app in your device and select **`Scan QR code`** 
    - Scan the QR code shown in your machine's terminal and the app will open in your device
    
    









