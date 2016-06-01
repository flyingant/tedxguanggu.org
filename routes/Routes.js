/**
 * Created by FlyingAnt on 12/18/15.
 */
import { Router, Route } from 'react-router'
import {createRouteHandler} from './RouteHandler'

//actions
import AppActions from '../actions/AppActions'
import RouteActions from '../actions/RouteActions'

import App from '../components/App';

import HomeContainer from '../components/HomeContainer'
import AboutContainer from '../components/AboutContainer'
import EventContainer from '../components/EventContainer'
import GuestContainer from '../components/GuestContainer'
import NewsContainer from '../components/NewsContainer'
import VolunteerContainer from '../components/VolunteerContainer'
import ContactContainer from '../components/ContactContainer'

const routes = {
    "^\/$"(dispatch, state) {
        dispatch(AppActions.Actions.InitializeApp()).then(() => dispatch(RouteActions.Actions.RedirectPath("/home"))); //when listening the router changed, this action will automatically dispatched
    },

    "^\/home$"(dispatch, state, location) {
        console.log("Query params:", location.query.index);
    },
}

export function createRouter(history, store) {
    createRouteHandler(routes, history, store);
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="home" component={HomeContainer}/>
                <Route path="event" component={EventContainer}/>
                <Route path="guest" component={GuestContainer}/>
                <Route path="news" component={NewsContainer}/>
                <Route path="about" component={AboutContainer}/>
                <Route path="volunteer" component={VolunteerContainer}/>
                <Route path="contact" component={ContactContainer}/>
            </Route>
        </Router>
    )
}