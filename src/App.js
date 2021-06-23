import { Provider, useSelector } from "react-redux";
import "./App.css";
import Cakes from "./Components/Cakes";

import BreadContainer from "./Components/BreadContainer";
import MyBooks from "./Components/MyBooks"
import store from "./Redux/Store";

function App() {
 
  return (
    <Provider store={store}>
      <div className="App">
        <Cakes/>
        <BreadContainer/>
        <MyBooks/>
      </div>
    </Provider>
  );
}

export default App;
