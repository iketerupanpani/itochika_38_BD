import React from 'react';
import Mask from './components/Mask';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  const masks = ['keanarichmask', 'basemakingmask', 'medianswer'];
  return (
    <BrowserRouter>
      <div>
        <h1>Happy Birthday</h1>
        <ul>
          <li><Link to='/keanarichmask'>keanarichmaskのマスク</Link></li>
          <li><Link to='/basemakingmask'>basemakingmaskのマスク</Link></li>
          <li><Link to='/medianswer'>medianswerのマスク</Link></li>
        </ul>
        <hr/>
        <Route exact path='/' />
        <Route path='/keanarichmask' render={props => <Mask mask={masks[0]} />} />
        <Route path='/basemakingmask' render={props => <Mask mask={masks[1]} />} />
        <Route path='/medianswer' render={props => <Mask mask={masks[2]} />} />
      </div>
    </BrowserRouter>
    );
}

export default App;
