import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CourseMemo from "./components/CourseMemo";
import PrintChapter from "./components/PrintChapter";
import DigitalChapter from "./components/DigitalChapter";
import CheatSheet from "./components/CheatSheet";
import Footer from "./components/Footer";
import CursorFX from "./components/CursorFX";
import FloatingTop from "./components/FloatingTop";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Nav />
      <main>
        <Hero />
        <CourseMemo />
        <PrintChapter />
        <DigitalChapter />
        <CheatSheet />
      </main>
      <Footer />
      <div className="grain" aria-hidden />
      <CursorFX />
      <FloatingTop />
    </div>
  );
}
