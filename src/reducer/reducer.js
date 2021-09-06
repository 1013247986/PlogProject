import React from "react";

const myContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const states = {
    count: 0
};

export { reducer, myContext, states };