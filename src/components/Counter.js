import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increamentHandler = () => {
    dispatch({ type: "increament", value: 5 });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", value: 5 });
  };
  const decreamentHandler = () => {
    dispatch({ type: "decreament" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decreament</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";
class Counter extends Component {
  increamentHandler() {
    this.props.increament();
  }
  decreamentHandler() {
    this.props.decreament();
  }
  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.increamentHandler.bind(this)}>
            Increament
          </button>
          <button onClick={this.decreamentHandler.bind(this)}>
            Decreament
          </button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increament: () => dispatch({ type: "increament" }),
    decreament: () => dispatch({ type: "decreament" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
