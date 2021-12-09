import { Link, Route, Routes, useMatch, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Vikash", text: "Learning Javascript is fun" },
  { id: "q2", author: "Papito", text: "Learning React is fun" },
];
const QuoteDetail = () => {
  const commentStatus = useMatch("/quotes/:quoteId/comments");
  console.log(commentStatus);
  const QuoteId = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === QuoteId.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {!commentStatus && (
        <div className="centered">
          <Link className="btn--flat" to="comments">
            Loads Comments
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/comments" element={<Comments />}></Route>
      </Routes>
    </div>
  );
};
export default QuoteDetail;
