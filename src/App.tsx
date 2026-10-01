import { BackgroundDecoration } from "./components/BackgroundDecoration";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <BackgroundDecoration />
        <header>
          <Navbar />
        </header>

        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
