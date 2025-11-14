import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <Hero />
        <Services />
        <Gallery />
        <Footer />
      </ReduxProvider>
    </>
  );
}

export default App;
