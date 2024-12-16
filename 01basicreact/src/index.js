import React from 'react'; // it is a core foundational library which is used for taken refrences.
import ReactDOM from 'react-dom/client'; // reactDom is a implementation of react on WEB like REact Native is a implementation of react on the mobile Application.
/*both thoese two files react and react-dom is used for manipulate WEB'S DOM.
React also creates it's own DOM. which is called virtual DOM. after this it's compare to the virtual DOM and main DOM (which is making on the browser) and after replace all the elements/data which is required for complete the process.
In this ReactDom there is a method which name is createRoot. it is a single Page application (SPA)
ReactJs is a library of javascript.
DOM :- DOM is a nothing it is just like a tree structured (elements, tags) which we study in DSA.
Document Object Model - DOM
React provide a power which is called JSX. it means we run our html elements through the Javascript. and JSX also look like HTML. 
In react Js  we create our own tags. like <App>
Note :- Browser main Dom  render the HTML's page (using root.render) 
*/
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
