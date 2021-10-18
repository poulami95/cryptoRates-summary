import "./App.css";
import Header from "./components/contents/Header/Header";
import { useEffect } from "react";
import CurrencyCards from "./components/contents/CurrencyCards";

function App() {
  useEffect(() => {
    document.title = "CC Exchange rates";
  }, []);
  return (
    <div className="App">
      <Header />
      <CurrencyCards/>
    </div>
  );
}

export default App;
