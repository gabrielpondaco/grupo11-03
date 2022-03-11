import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Login from './components/Login';
// import Characters from './components/Characters';
// import CharacterDetails from './components/CharactersDetails';
// import Episode from './components/Episode';
// import EpisodeDetails from './components/EpisodeDetails';
// import About from './components/About';
// import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <main>
        <p>Monitoria do Douglas</p>
        <BrowserRouter>
            <Switch>
              {/* <Route exact path="/" component={ Login } />
              <Route path="/characters" component={ Characters } />
              <Route path="/characters/:id" component={ CharacterDetails } />
              <Route path="/episodes" component={ Episode } />
              <Route path="/episodes/:id" component={ EpisodeDetails } />
              <Route path="/about" component={ About } />
              <Route path="*" component={ NotFound } /> */}
            </Switch>
          </BrowserRouter>

      </main>
    );
  }
}

export default App;
