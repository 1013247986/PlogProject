import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import routes from "@/routes/routes"
class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    {routes.map((page, index) => page.component?<Route key={index} exact path={page.path} component={page.component}/> : "")}
                </Switch>
            </HashRouter>
        )
    }
}

export default AppRouter;