import React from 'react';
import CardCont from "./component/card-container/card-container";
import Sidebar from './component/sidebar/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from "./container/Detail/detail";
import AdminCard from "./component/adminPage/adminCard.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <Sidebar component={<CardCont />} />} />
          <Route exact path="/detail" component={() => <Sidebar component={<Search />} />} />
          <Route exact path="/adminPage" component={() => <Sidebar component={<AdminCard />} />} />
          <Sidebar />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
