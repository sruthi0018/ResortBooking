import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminBookingListPage from "./pages/AdminBookingListPage";

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminBookingListPage />} />
        </Routes>

        <Footer />
      </Router>
    </ReduxProvider>
  );
}

export default App;
