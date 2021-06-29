import Index from './Redux-store/Index'
import store from "./Redux-store/Store";
import { Provider } from "react-redux";
import './App.css'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Index />
      </Provider>
    </div>
  );
}

export default App;
