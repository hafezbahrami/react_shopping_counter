/// Multi-Component in Sync

// Display the number of counters in the NavBar
// Lifting the state={..} up

// Parent-Child relationship between Counters and Counter:
//     ** In the Counters, we had a list of counters that we passed the id and value to the child-component, i.e. Counter
//     ** There is no parnet/Child relationship between NavBar component and Counters component
//     ** HOw can we display the total # of counters in the NavBar, then?
//        >> Situation like this, that there is no parent/Child relationship, but we want to share
//           data between then (and have them in synched) ==> We need to lift the state up
//        >> We shoud lift the state={..} in the COunters up to the App component ==> Then, now,
//           both counters and NavBar can recieve the data/info from App component via props

// Method:
// (1) in the counters, we remove the state={..}, as well as the methods that modify or mutate
//     the state, such as all the handle methods, ... ==> Move all of these to the parent component (App component)
// (2) In the counters, remove all the reference "this.handleReset" or other handlers.
// (3) Implement the event handler in the most-parent component, App.js: onINcrement, onDelete,
//      ** in App.js, where in the render() we have <myComponents/>, we will give all the reuired props, such as:
//         onReset={this....}, on onDelete={this....},onIncrement={this..}
//      ** Consequently, in the counters21.jsx component, we should change all the onReset={this....},
//         on onDelete={this....},onIncrement={this..}, to get it from props. In other words, from its parent component:
//         onReset={this.props.onReset}, on onDelete={this.props.onDelete},onIncrement={this.props.onINcrement}
//      ** Since we do not have state={..} in the counters21.jsx anymore, we need to change "this.state.myCounters" to
//         have access via props from parent component "this.state.myCounters"

// counters component is entirely acontrolled component (by its parent), since:
// (1) It does not have any state ==> It receives data from "list_of_myCounters={this.state.myCounters}"
//     and methods to modify the data:             onReset={this.handleReset}
//                                                 onIncrement={this.handleIncrement}
//                                                 onDelete={this.handleDelete}

import React, { Component } from "react";

class MyComp extends Component {
  my_styles = {
    fontSize: 12,
    fontWeight: "bold"
  };

  render() {
    let my_attr_classes = this.getBadgeClasses();
    console.log("props", this.props);

    return (
      <div>
        <span style={this.my_styles} className={my_attr_classes}>
          {this.MyFunction()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.eachCounter)}
          style={{ fontSize: 12 }}
          className="btn btn-secondary btn-sm"
        >
          MyButton
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.eachCounter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let my_attr_classes = " badge m-2 badge-";
    my_attr_classes +=
      this.props.eachCounter.value === 0 ? "warning" : "primary";
    return my_attr_classes;
  }

  MyFunction() {
    const { value: count } = this.props.eachCounter;
    return count === 0 ? "Zero" : count;
  }
}

export default MyComp;
