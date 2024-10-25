import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = ({ bookId }) => {
  const book = useSelector((state) =>
    state.books.list.find((book) => book.id === bookId)
  );
  if (!book) {
    return <p>Book Not Found</p>;
  }
  return (
    <div>
      <h1>it is a book details page</h1>
      <h1>{book.title}</h1>
      <div className="bookDetails-2">
        <p>
          <strong> Author :</strong> {book.author}
        </p>
        <p>
          <strong> Category :</strong> {book.category}
        </p>
        <p>
          <strong> Description :</strong> {book.description}
        </p>
        <p>
          <strong> Rating:</strong> {book.rating}
        </p>
        <Link to="/books" className="back">
          Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
