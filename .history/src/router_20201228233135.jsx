import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';


const AppRouter = (props) =>{
    const [init, setInit] = useState(false);
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                {<Login/>}
            </Route>
            <Route></Route>
            </Switch>
        </Router>
        );
      
}
            


export default AppRouter;