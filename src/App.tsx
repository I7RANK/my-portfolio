import { BackgroundDecoration } from "./components/BackgroundDecoration";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuoteSection } from "./components/QuoteSection";
import { Skills } from "./components/Skills";

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
          <QuoteSection />
          <Skills />
        </main>
      </div>
    </>
  );
}

export default App;
