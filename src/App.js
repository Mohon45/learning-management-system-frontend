import "./Assets/style.css";
import CommonRoute from "./Routes/CommonRoute";
import Notify from "./Shared/Notify/Notify";

function App() {
  return (
    <div className="App">
      <CommonRoute />
      <Notify />
    </div>
  );
}

export default App;
