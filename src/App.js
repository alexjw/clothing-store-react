import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import ShopPage from "./pages/shop";
import HomePage from "./pages/homepage";
import Header from "./components/header";
import Sign from "./components/sign";
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { connect } from 'react-redux'
import { setCurrentUser } from "./redux/user-actions";

class App extends React.Component{

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
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
        })
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
            </Switch>
        </div>
  );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => {

    let result = {
        setCurrentUser: (user) => dispatch(setCurrentUser(user))
    };
    console.log('mapDispatchToProps:');
    console.log(result);
    console.log('result.setCurrentUser');
    console.log(result.setCurrentUser);
    console.log('setCurrentUser');
    console.log(setCurrentUser);
    return result
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
