import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const Navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === "completed") {
        Navigate("/quotes");
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [status, Navigate]);
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};
export default NewQuote;
