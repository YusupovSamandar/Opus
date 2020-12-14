import React from 'react';
import CardCont from "./component/card-container/card-container";
import Sidebar from './component/sidebar/sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from "./container/Detail/detail";
import Registeration from "./container/Registration/Register";
import CardGroup2 from './component/CardsGroup/CardGroup2';
import Grouplist from './component/Grouplist/Grouplist';
import TeachersContainer from './component/TeachersPanel/TeachersPanel';
import AddToGroup from './component/addToGroup/category';
import ReportsContainer from './component/ReportsPage/ReportsContainer';
import TeachersReg from './container/teachers-reges/teacher-reges';
import Rekvizits from './container/Rekvizits/Rekvizit';
import Adverts from './container/reportsContracts/Advert';
import AdminPanel from './component/AdminPanel/AdminContainer';
import Teachers from './component/Teachers-page/Teachers';
import TeacherFees from "./container/Teacher-fees/teacher-fees";
import GroupJournal from './component/GroupJournal/GroupJournal';
import AddNewEmployee from './container/AddNewEmployee/AddNewEmployee';
import Contracts from './container/reportsContracts/rContracts'
import { StudentProvider } from "./component/Student-datail-context";
import { TempStudentProvider } from "./component/Student-datail-context";
import { ThemeProvider } from "./component/Student-datail-context";
import Archive from "./component/ReportsInside/Archive/Archive1";
import ReportsPayment from './component/Reportes-payments/Reports-table';


function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={() => <Sidebar component={<CardCont />} />} />
              <Route exact path="/detail" component={() => <TempStudentProvider><Sidebar component={<Search />} /></TempStudentProvider>} />
              <Route exact path="/register" component={() => <Sidebar component={<Registeration />} />} />
              <Route exact path="/cardsgroup" component={() => <Sidebar component={<CardGroup2 />} />} />
              <Route exact path="/cardsgroup/grouplist" component={() => <Sidebar component={<Grouplist />} />} />
              <Route exact path="/Teacherscontainer" component={() => <Sidebar component={<TeachersContainer />} />} />
              <Route exact path="/Teacherscontainer/groupjournal" component={() => <Sidebar component={<GroupJournal />} />} />
              <Route exact path="/add" component={() => <Sidebar component={<AddToGroup />} />} />
              <Route exact path="/reports" component={() => <Sidebar component={<ReportsContainer />} />} />
              <Route exact path="/reports/reportpayment" component={() => <Sidebar component={<ReportsPayment />} />} />
              <Route exact path="/reports/Archive" component={() => <Sidebar component={<Archive />} />} />
              <Route exact path="/adverts" component={() => <Sidebar component={<Adverts />} />} />
              <Route exact path="/teachersreg" component={() => <Sidebar component={<TeachersReg />} />} />
              <Route exact path="/rekvizits" component={() => <Sidebar component={<Rekvizits />} />} />
              <Route exact path="/adminpanel" component={() => <Sidebar component={<AdminPanel />} />} />
              <Route exact path="/teachers" component={() => <Sidebar component={<Teachers />} />} />
              <Route exact path="/contracts" component={() => <Sidebar component={<Contracts />} />} />
              <Route exact path="/teachers-fees" component={() => <Sidebar component={<TeacherFees />} />} />
              <Route exact path="/addnewemployee" component={() => <Sidebar component={<AddNewEmployee />} />} />
              <Sidebar />
            </Switch>
          </div>
        </Router>
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;
