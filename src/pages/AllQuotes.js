import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Vikash", text: "Learning Javascript is fun" },
//   { id: "q2", author: "Papito", text: "Learning React is fun" },
// ];
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: LoadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!LoadedQuotes || LoadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={LoadedQuotes} />;
};
export default AllQuotes;
