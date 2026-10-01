import { BackgroundDecoration } from "./components/BackgroundDecoration";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <BackgroundDecoration />
        <header>
          <Navbar />
        </header>
      </div>
    </>
  );
}

export default App;
