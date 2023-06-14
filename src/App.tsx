import Header from "../src/components/header/Header.tsx";
import Phasen from "./Phasen";

function App() {
  return (
    <div className="p-7 min-h-screen h-fit bg-amber-400 flex-1">
      <Header />
      <Phasen />
    </div>
  );
}

export default App;
