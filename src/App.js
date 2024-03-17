import logo from './logo.svg';
import './App.css';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from './Reducer';
import { Toaster } from 'react-hot-toast';
const store = configureStore({
  reducer: rootReducer,
})
function App() {
  console.log("asdfasdf",process.env.NODE_ENV )
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
        <Toaster />
      </Provider>
    </div>
  );
}

export default App;
