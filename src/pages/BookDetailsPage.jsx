import { useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";
function BookDetailsPage() {
  const { id } = useParams();
  return (
    <>
      <BookDetails bookId={id} />
    </>
  );
}
export default BookDetailsPage;
