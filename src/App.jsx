import "./App.css"
import "./App2.css"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <header>
      <Nav />
      </header>
      <main>
      <Home />
      <Footer />
      </main>
    </div>
  )
}

export default App
