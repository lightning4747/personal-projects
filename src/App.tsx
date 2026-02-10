import './App.css'
import Header from './components/Header'
import Particles from './components/Particles'
import Projects from './components/Projects';
function App() {
  return (
    <div className="app-wrapper" style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <Particles />
      
      {/* Hero / Landing View */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--foreground)' }}>
          Creative Intelligence
        </h1>
      </section>

      {/* Projects appear on scroll */}
      <Projects />
      
      {/* Footer or extra space */}
      <footer style={{ height: '20vh' }} />
    </div>
  );
}

export default App
