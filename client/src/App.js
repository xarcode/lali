import { useLocation, useOutlet } from "react-router-dom";

import routes from "./routes";

import "./App.css";

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <div className="App">
      <div ref={nodeRef} className="App-container" style={{ height: "100vh" }}>
        {currentOutlet}
      </div>
    </div>
  );
}

export default App;
