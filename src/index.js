import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 function props(key){
  var propos={mot:'Ali',cle:'Saleh',key:key}
  return <App props1={propos}/>
}
const props1=[
  props(0),
  props(1),
  props(2),
  props(3)
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*{[...props1]}*/}
<App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
