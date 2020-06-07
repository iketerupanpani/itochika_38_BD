import React from 'react';
import Mask from './components/Mask';
import Message from './components/Message';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  const masks = ['ionstick', 'keanarichmask', 'basemakingmask', 'medianswer'];
  return (
    <BrowserRouter>
      <div>
        <h1>Happy Birthday</h1>
        <ul>
          <li><Link to='/'>メッセージ</Link></li>
          <li><Link to='/ionstick'>プレゼント１</Link></li>
          <li><Link to='/keanarichmask'>プレゼント２</Link></li>
          <li><Link to='/basemakingmask'>プレゼント３</Link></li>
          <li><Link to='/medianswer'>プレゼント４</Link></li>
        </ul>
        <hr/>
        <Route exact path='/' component={Message} />
        <Route path='/ionstick' render={props => <Mask mask={masks[0]} />} />
        <Route path='/keanarichmask' render={props => <Mask mask={masks[1]} />} />
        <Route path='/basemakingmask' render={props => <Mask mask={masks[2]} />} />
        <Route path='/medianswer' render={props => <Mask mask={masks[3]} />} />
      </div>
    </BrowserRouter>
    );
}

export default App;
