import NavScroll from "./components/Nav/nav";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
        <div className="d-flex flex-column min-vh-100">
          <NavScroll />

          <main className="container nt-4 flex-grow-1">
            <h1 className="text-center mt-4">Welcome to PolitWeb</h1>
            <p className="text-center">Your source for political information and voting guidance.</p>
          </main>

        <Footer />
      </div>
    </>
  )
}
export default App;
