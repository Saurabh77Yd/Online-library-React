import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookList.css";

function BookList(props) {
  const books = useSelector((state) => state.books.list);

  const filteredBooks = books.filter((book) => {
    // Check if category matches
    const matchesCategory = props.category
      ? book.category === props.category
      : true;

    // Check if search term matches title or author
    const matchesSearch = props.searchIteam
      ? book.title.toLowerCase().includes(props.searchIteam.toLowerCase()) ||
        book.author.toLowerCase().includes(props.searchIteam.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.id} className="details-1">
            <h3>Title : {book.title}</h3>
            <p>Author: {book.author}</p>
            <Link to={`/books/id/${book.id}`} className="details-btn">
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </>
  );
}

export default BookList;
