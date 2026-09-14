# StoryTeller App

A React Native mobile application for discovering and reading stories.

## 📱 Project Overview

StoryTeller App is a mobile application built using React Native. Users will be able to explore different stories, browse categories, and read story details.

Currently, the application backend will be used only for user authentication:

* Login
* Signup

The remaining application features will initially use frontend UI and local dummy data.

---

## 🚀 Phase 1 Completed

The following features have been completed in Phase 1:

* React Native project setup
* Project folder structure setup
* React Navigation configuration
* Bottom Tab Navigation
* Home Screen
* Stories Screen
* Categories Screen
* Profile Screen

---

## 📂 Project Structure

```text
StoryTellerApp/
│
├── android/
├── ios/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │
│   ├── data/
│   │
│   ├── navigation/
│   │   ├── AppNavigator.jsx
│   │   └── MainNavigator.jsx
│   │
│   ├── screens/
│   │   ├── home/
│   │   │   └── HomeScreen.jsx
│   │   │
│   │   ├── story/
│   │   │   └── StoryListScreen.jsx
│   │   │
│   │   ├── category/
│   │   │   └── CategoryScreen.jsx
│   │   │
│   │   └── profile/
│   │       └── ProfileScreen.jsx
│   │
│   ├── services/
│   ├── styles/
│   └── utils/
│
├── App.jsx
├── package.json
└── README.md
```

---

## 🧭 Navigation Structure

```text
App
 │
 └── NavigationContainer
      │
      └── Bottom Tab Navigator
           │
           ├── Home
           ├── Stories
           ├── Categories
           └── Profile
```

---

## 📱 Available Screens

### 🏠 Home

Displays the main application home screen.

### 📚 Stories

Displays the list of available stories.

### 🗂 Categories

Displays different story categories.

### 👤 Profile

Displays the user's profile information.

---

## 🛠 Technologies Used

* React Native
* React Navigation
* React Native CLI
* JavaScript

---

## 📦 Installed Packages

```bash
@react-navigation/native
@react-navigation/native-stack
@react-navigation/bottom-tabs
react-native-screens
react-native-safe-area-context
react-native-vector-icons
```

---

## ▶️ Run the Project

### Start Metro Server

```bash
npx react-native start
```

### Run on Android

Open another terminal and run:

```bash
npx react-native run-android
```

---


### Phase 2 – Authentication UI (Completed)

* Login Screen
* Signup Screen
* Reusable Input Field
* Reusable Button


## 🔮 Upcoming Development Phases

### Phase 3 – Authentication Backend

* Login API Integration
* Signup API Integration
* Authentication Handling

### Phase 4 – Story UI

* Story Cards
* Featured Stories
* Story Listing
* Story Details

### Phase 5 – Categories and Local Data

* Category UI
* Local Dummy Data
* Story Filtering

### Phase 6 – UI Polish

* Loading States
* Error Handling
* Better UI/UX
* Animations
* Responsive Design

---

## 👨‍💻 Development Status

**Current Phase:** Phase 1 Completed ✅

**Next Phase:** Phase 2 – Authentication UI 🚀
