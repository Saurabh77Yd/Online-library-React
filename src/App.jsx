// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AddBook from "./pages/AddBook";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetailsPage from "./pages/BookDetailsPage";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/category/:category" element={<BrowseBooks />} />
          <Route path="books/id/:id" element={<BookDetailsPage />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
