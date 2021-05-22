import "./App.css";
import Header from "./components/contents/Header/Header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "CC Exchange rates";
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
