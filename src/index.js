import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import GetStarted from './views/get-started'
import ContactUs from './views/contact-us'
import InPersonPrograms from './views/in-person-programs'
import Story from './views/story'
import InPersonClasses from './views/in-person-classes'
import Page from './views/page'
import Sponsors from './views/sponsors'
import Impact from './views/impact'
import Team from './views/team'
import Mission from './views/mission'
import OnlinePrograms from './views/online-programs'
import Home from './views/home'
import GetStartedStudentSubselection from './views/get-started-student-subselection'
import Workshop from './views/workshop'
import ZoomClasses from './views/zoom-classes'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={GetStarted} exact path="/get-started" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={InPersonPrograms} exact path="/in-person-programs" />
        <Route component={Story} exact path="/story" />
        <Route component={InPersonClasses} exact path="/in-person-classes" />
        <Route component={Page} path="**" />
        <Route component={Sponsors} exact path="/sponsors" />
        <Route component={Impact} exact path="/impact" />
        <Route component={Team} exact path="/team" />
        <Route component={Mission} exact path="/mission" />
        <Route component={OnlinePrograms} exact path="/online-programs" />
        <Route component={Home} exact path="/" />
        <Route
          component={GetStartedStudentSubselection}
          exact
          path="/get-started-student"
        />
        <Route component={Workshop} exact path="/workshop" />
        <Route component={ZoomClasses} exact path="/zoom-classes" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
