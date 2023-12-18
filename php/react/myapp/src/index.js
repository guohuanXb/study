import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//App 是App.js导出的函数
//App()是调用App函数
//<App />虚拟DOM的内容，等价于调用了App函数
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  {/* 严格模式  会不兼容淘汰的语法*/ }
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
