import { BackgroundDecoration } from "./components/BackgroundDecoration";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuoteSection } from "./components/QuoteSection";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact, Footer } from "./components/Contact";
import { SocialSidebar } from "./components/SocialSideBar";

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
          <Experience />
          <Contact />
        </main>

        <SocialSidebar />

        <Footer />
      </div>
    </>
  );
}

export default App;
