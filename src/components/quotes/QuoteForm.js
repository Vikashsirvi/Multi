import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const navigate = useNavigate();
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [submit, setSubmit] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    setSubmit(true);
  }

  useEffect(() => {
    if (submit) {
      navigate("/quotes", { replace: false });
    }
  }, [submit, navigate]);

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
