import "./App.css";
import SearchParams from "./SearchParams";
import StoredParams from "./StoredParams";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <SearchParams />
        <StoredParams />
      </div>
    </Provider>
  );
}

export default App;
