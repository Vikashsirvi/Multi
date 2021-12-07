import { Routes, Route, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Navigate to="/quotes" />}></Route>
        <Route path="/quotes" element={<AllQuotes />}></Route>
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}></Route>
        <Route path="/new-quote" element={<NewQuote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
