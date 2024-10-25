import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-iteam">
          {" "}
          Home{" "}
        </Link>

        <Link to="/books" className="nav-iteam">
          {" "}
          Browse Books{" "}
        </Link>

        <Link to="/add-book" className="nav-iteam">
          {" "}
          Add Book
        </Link>
      </nav>
    </>
  );
}
export default Navbar;
