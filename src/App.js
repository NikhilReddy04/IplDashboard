import './App.css'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
