import { BrowserRouter } from "react-router-dom";
import Header from "./elements/Header";
import "./styles/App.css";
import Banner from "./elements/Banner";
import Partners from "./elements/Partners";
import Heading from "./components/Heading";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Banner />
        <Partners />
        <Heading bubbleColor="#8613A5" className="top">
          Live Auctions
        </Heading>
      </BrowserRouter>
    </div>
  );
}

export default App;
