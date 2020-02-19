import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import ShopPage from "./pages/shop";
import HomePage from "./pages/homepage";
import Header from "./components/header";
import Sign from "./components/sign";
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'

class App extends React.Component{

    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot( snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, () => {console.log(this.state)})
                });
            }
            else {
                this.setState({ currentUser: null })
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render = () => (
        <div>
            <Header currentUser={ this.state.currentUser }/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={Sign}/>
            </Switch>
        </div>
  );
}

export default App;
