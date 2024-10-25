import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: "1",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Fiction",
      description:
        "A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book,",
      rating: 4.5,
    },
    {
      id: "2",
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      category: "Non-Fiction",
      description:
        "The Diary of a Young Girl, commonly referred to as The Diary of Anne Frank, is a book of the writings from the Dutch-language",
      rating: 4.0,
    },
    {
      id: "3",
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description:
        "Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelazny's This Immortal for the Hugo Award for Best Novel and won the inaugural Nebula Award for Best Novel in 1966. ",
      rating: 4.2,
    },
    {
      id: "4",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description:
        "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in July 1960 and became instantly successful.",
      rating: 4.5,
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      state.list.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
