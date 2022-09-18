import "./Assets/style.css";
import Layout from "./HOC/Layout";
import AuthorizationRoute from "./Routes/AuthorizationRoute";

function App() {
  return (
    <div className="App">
      <AuthorizationRoute />
      <Layout />
    </div>
  );
}

export default App;
