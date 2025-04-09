# Redux Store Setup Guide

This project uses Redux Toolkit with the following structure inside the `src/` folder:

```
src/
└── store/
    ├── app/
    │   └── store.js          # Redux store setup
    └── features/
        └── featureName/
            └── featureSlice.js   # Feature-specific slice
```

---

## 🛠️ Installation

Install required packages:

```bash
npm install @reduxjs/toolkit react-redux
```

---

## ⚙️ Setup Steps

### 1. Create the Redux Store

**`src/store/app/store.js`**

```js
import { configureStore } from "@reduxjs/toolkit";
import featureReducer from "../features/featureName/featureSlice";

export const store = configureStore({
    reducer: {
        feature: featureReducer,
        // add more features here
    },
});
```

---

### 2. Provide the Store

Wrap your app with the `Provider`:

```js
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    <StrictMode/>
);
```

---

### 3. Create a Slice

**`src/store/features/featureName/featureSlice.js`**

```js
import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
    name: "feature",
    initialState: {},
    reducers: {
        yourAction: (state, action) => {
            // reducer logic here
        },
    },
});

export const { yourAction } = featureSlice.actions;
export default featureSlice.reducer;
```

---

### ✅ Done
