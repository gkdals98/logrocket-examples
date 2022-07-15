# React - Firebase Chat Room Example

This Example is copy of this article - <https://blog.logrocket.com/how-to-build-chatroom-app-react-firebase/>

## For What?

For learning basic of firebase and how to use firebase authentication.

## To Start

For init this kind of project, exec bellow

```sh
npx create-react-app chat-room
cd chat-room
npm i firebase react-router-dom
```

For start this project, exec bellow

```sh
npm install
npm run dev
```

## Firebase guide

For configure this project, we need to make firebase project.
To do this, you need to follow guide bellow.

### Create project

1. Make Google account.
2. Enter firebase site and click **create a project** or **add project**.
3. enter **Chat Room** as project name and click continue.
4. Off google analytics and click create project

### Initialize Firebase Project and init it in your react project

1. click Get **started by adding firebase to your app**
2. enter **Chat Room** in the **App nickname** field
3. Click **Register app** and copy code initializeApp.
4. make ./src/services/firebase.js in your react app and paste code.
5. click **move to console** in firebase site.

### Add Firebase Authentication

1. Click **Authentication**.
2. Click **Get Started**
3. Click **Google** in Sing-in method tab.
4. Toggle enable.
5. Select Project support email.
6. Click **Save**
7. Add code bellow in your firebase.js.

```javascript
// ...

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

// ... your firebase authentication code.

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export { loginWithGoogle };
```

### Create Database

1. Click Cloute Firestore menu in build menu.
2. Click create database.
3. Select start in test mode.
4. Select cloud location near by tou, and click user config

### Init Collection

This project didn't initialize collection by firebase console. We will use addDoc Function to init firestore. See this in firebase.js in our project.
