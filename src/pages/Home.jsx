import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Welcome to online Library </h1>
      <div className="home-list">
        <h2>Book Categories</h2>
        <ul>
          <li>
            <Link to="books/category/Fiction" className="link">
              Fiction
            </Link>
          </li>
          <li>
            <Link to="books/category/Non-Fiction" className="link">
              Non Fiction
            </Link>
          </li>
          <li>
            <Link to="books/category/Sci-Fi" className="link">
              Sci Fi
            </Link>
          </li>
        </ul>
        <h2>Popular Books</h2>
        <ul>
          <li>
            <Link to="books/id/1" className="link">
              Book 1
            </Link>
          </li>
          <li>
            <Link to="books/id/2" className="link">
              Book2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
