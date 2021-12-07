import { Route, Routes } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Routes>
        <Route path="/new-user" element={<p>Welcome new user</p>}></Route>
      </Routes>
    </section>
  );
};

export default Welcome;
