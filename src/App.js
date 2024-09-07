import "./App.css";
import Homepage from "../Homepage";
import { Route } from "react-router-dom";
import Chatpage from "../Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
