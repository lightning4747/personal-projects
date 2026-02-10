import Header from "./components/Header";
import ParticleBlast from "./components/Particles";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)]">
      <Header />
      <ParticleBlast />
      
      <main>
        {/* Landing Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif text-[var(--foreground)] leading-tight">
            Creative <br /> <span className="text-[var(--primary)]">Intelligence.</span>
          </h1>
          <p className="mt-6 text-[var(--muted-foreground)] font-sans tracking-wide uppercase text-sm">
            Scroll to explore projects
          </p>
        </section>

        <Projects />
      </main>

      <footer className="py-20 text-center text-[var(--muted-foreground)] border-t border-[var(--border)]">
        <p className="font-mono text-xs">© 2026 — Built with React + Vite + TS</p>
      </footer>
    </div>
  );
}

export default App;