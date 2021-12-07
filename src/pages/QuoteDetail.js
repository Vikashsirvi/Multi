import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const QuoteId = useParams();
  return (
    <div>
      <h1>Quote Detail Page</h1>
      <p>{QuoteId.quoteId}</p>
      <Routes>
        <Route path="/comments" element={<Comments />}></Route>
      </Routes>
    </div>
  );
};
export default QuoteDetail;
