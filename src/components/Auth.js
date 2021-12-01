import { useDispatch, useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store";
import { Fragment } from "react";
const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const formSubmitHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <Fragment>
      {!auth && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={formSubmitHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default Auth;
