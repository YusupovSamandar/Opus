import React from 'react';
import CardCont from "./component/card-container/card-container";
import Sidebar from './component/sidebar/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from "./container/Detail/detail";
import CardGroup2 from './component/CardsGroup/CardGroup2';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <Sidebar component={<CardCont />} />} />
          <Route exact path="/detail" component={() => <Sidebar component={<Search />} />} />
          <Route exact path="/cardsgroup" component={() => <Sidebar component={<CardGroup2 />} />} />
          <Sidebar />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
