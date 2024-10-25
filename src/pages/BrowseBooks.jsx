import { useParams } from "react-router-dom";
import BookList from "../components/BookList";
import { useState } from "react";
import "./BrowseBooks.css";

function BrowseBooks() {
  const { category } = useParams();
  const [searchIteam, setSearchIteam] = useState("");
  const handleSearchChange = (e) => {
    setSearchIteam(e.target.value);
  };
  return (
    <div>
      <h1>Browse Book {category ? `in ${category}` : " "}</h1>
      <div className="list-1">
        <input
          type="text"
          value={searchIteam}
          onChange={handleSearchChange}
          placeholder="Search Book title or author name"
          className="search"
        />
        <BookList category={category} searchIteam={searchIteam} />
      </div>
    </div>
  );
}
export default BrowseBooks;
