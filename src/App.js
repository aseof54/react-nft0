import { BrowserRouter } from "react-router-dom";
import Header from "./elements/Header";
import "./styles/App.css";
import Banner from "./elements/Banner";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Banner />
      </BrowserRouter>
    </div>
  );
}

export default App;
