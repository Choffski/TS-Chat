import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect} from 'react-router';

import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Main from '../main/AppContainer';

class Routing extends React.Component<any, any> {

render(){

  return(
      <Router history={hashHistory} >
        <Route path="/login" component={Login}> </Route>
        <Route path="/signup" component={Signup}> </Route>
        <Route path="/main" component={Main}>

        </Route>

        <Redirect from="/" to="/login"/>
      </Router>
  )
}

}

export default Routing;
