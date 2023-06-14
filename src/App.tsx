import Header from "../src/components/header/Header.tsx";
import Intro from "./components/intro/Intro.tsx";
import useStore from "./stores/useStore.ts";
import Phasen from "./components/phasen/Phasen.tsx";

function App() {
  const activeIndex = useStore((state) => state.activeIndex);
  const phases = useStore((state) => state.phases);

  return (
    <div className="p-7 min-h-screen h-fit bg-amber-400 flex-1">
      <Header />
      <Intro index={activeIndex} />
      <Phasen />
    </div>
  );
}

export default App;
