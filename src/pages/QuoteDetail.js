import { useEffect } from "react";
import { Link, Route, Routes, useMatch, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Vikash", text: "Learning Javascript is fun" },
//   { id: "q2", author: "Papito", text: "Learning React is fun" },
// ];
const QuoteDetail = () => {
  const commentStatus = useMatch("/quotes/:quoteId/comments");
  console.log(commentStatus);
  const QuoteId = useParams();
  const { quoteId } = QuoteId;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p className="centered">No quote found</p>;
  }
  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
