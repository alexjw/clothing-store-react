import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import ShopPage from "./pages/shop";
import HomePage from "./pages/homepage";
import Header from "./components/header";
import Sign from "./components/sign";
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { connect } from 'react-redux'
import {checkUserSession, setCurrentUser} from "./redux/user-actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/selectors";
import checkoutPage from "./pages/checkout";

class App extends React.Component{

    unsubscribeFromAuth = null;

    componentDidMount() {

        this.props.checkUserSession();

        /*this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot( snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            }
            else {
                setCurrentUser(null);
            }
        });*/ // deprecated to saga
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render = () => (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/signin' render={ () => this.props.currentUser ? <Redirect to={'/'}/> : <Sign/> }/>
                <Route exact path='/checkout' component={checkoutPage}/>
            </Switch>
        </div>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => (
    { checkUserSession: () => dispatch(checkUserSession()) }
    /*let result = {
        setCurrentUser: (user) => dispatch(setCurrentUser(user))
    };*/
    /*console.log('mapDispatchToProps:');
    console.log(result);
    console.log('result.setCurrentUser');
    console.log(result.setCurrentUser);
    console.log('setCurrentUser');
    console.log(setCurrentUser);*/
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
