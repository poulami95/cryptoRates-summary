import "./App.css";
import Header from "./components/contents/Header/Header";
import { useEffect } from "react";
/* import CurrencyCards from "./components/contents/CurrencyCards"; */
import CardGenerators from "./components/contents/CardGenerators";
import Footer from "./components/contents/Footer/Footer";

function App() {
  useEffect(() => {
    document.title = "CC Exchange rates";
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <CardGenerators/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
