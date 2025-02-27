import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  incrementIfOdd = () => {
    let changeby = 0;
    if (this.props.count % 2 > 0 || this.props.count <= 0) {
      changeby = 1;
    }
    this.props.increment(changeby);
  };

  incrementAsync = changeby => {
    setTimeout(() => {
      this.props.increment(changeby);
    }, 1000);
  };

  render() {
    // Fill in the two button onClick methods
    // Upon clicking these buttons, the count
    // should decrement or increment accordingly
    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={() => this.props.increment(1)}>+</button>
        <button
          onClick={() => {
            this.props.decrement(1);
          }}
        >
          -
        </button>
        <button onClick={() => this.incrementIfOdd(1)}>Increment if odd</button>
        <button onClick={() => this.incrementAsync(1)}>Increment async</button>
        <button
          onClick={() => {
            this.props.increment(2);
          }}
        >
          Increment by 2
        </button>
        <button onClick={() => this.props.decrement(2)}>Decrement by 2</button>
      </p>
    );
  }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
