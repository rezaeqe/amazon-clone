import React, { createContext, useReducer, useContext } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialstate, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialstate)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);