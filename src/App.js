import React, {Component} from 'react';
import ApolloClient  from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from './views/Post';
import Posts from './views/Posts';
import './App.css';

const client =  new ApolloClient({
  uri: "http://34.217.248.38:4000/"
});

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" component={Posts} />
              <Switch>
                <Route exact path="/post/:id/" component={Post} />
              </Switch>
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}


export default App;
