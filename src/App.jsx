/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Message from "./components/Message";
import Ion from "./components/Ionstick";
import Rice from "./components/Keanaricemask";
import Base from "./components/Basemakingmask";
import Medi from "./components/Medianswer";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>　🎂　🎉　❤️</h1>
        <ul>
          <li>
            <Link to="/">2021年誕生日メッセージ</Link>
          </li>
          <li>
            <Link to="/ionstick">Ion Stick</Link>
          </li>
          <li>
            <Link to="/keanarichmask">毛穴撫子</Link>
          </li>
          <li>
            <Link to="/basemakingmask">
              リフターナ　ベースメイキングマスク　白肌
            </Link>
          </li>
          <li>
            <Link to="/medianswer">Real Skin Fit Collagen Mask -ABOUT ME-</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Message} />
        <Route path="/ionstick" component={Ion} />
        <Route path="/keanarichmask" component={Rice} />
        <Route path="/basemakingmask" component={Base} />
        <Route path="/medianswer" component={Medi} />
      </div>
    </BrowserRouter>
  );
};

export default App;
