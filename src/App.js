import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />}></Route>
          <Route path="/quotes" element={<AllQuotes />}></Route>
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}></Route>
          <Route path="/new-quote" element={<NewQuote />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
