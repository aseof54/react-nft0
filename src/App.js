import { BrowserRouter } from "react-router-dom";
import Header from "./elements/Header";
import Banner from "./elements/Banner";
import Partners from "./elements/Partners";
import Auctions from "./elements/Auctions";
import '@mantine/core/styles.css';
import "@mantine/carousel/styles.css";
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Banner />
        <Partners />
        <Auctions />
      </BrowserRouter>
    </div>
  );
}

export default App;
