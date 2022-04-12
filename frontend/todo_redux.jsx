import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the Console");
  const store = configureStore();
  window.store = store;
  // ReactDOM.render(document.getElementById("content"));
});