import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/booksSlice";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...bookData, id: Date.now().toString() }));
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="  Title"
        value={bookData.title}
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="  Author"
        value={bookData.author}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="  Category"
        value={bookData.category}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder=" Description"
        value={bookData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="  Rating"
        value={bookData.rating}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
