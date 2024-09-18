import "./App.scss";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Header from "./components/Header/Header";
import TextDisplay from "./components/TextDisplay/TextDisplay";
import CardsDisplay from "./components/CardsDisplay/CardsDisplay";
function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <CardsDisplay />
      <TextDisplay />
    </>
  );
}

export default App;
