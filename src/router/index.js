import React from 'react';
import { Switch, Route, IndexRoute} from 'react-router-dom';
import Home from '../pages/home/index'
import Coach from '../pages/coach/index'
import Worry from '../pages/wrong/index'
import Work from '../pages/work/index'
// import MainMenu from '../components/menu';

const MainRouter = () => (
  <main>
    <Switch>
<<<<<<< HEAD
      <Route exact path='/' component={Home}/>
      <Route path='/coach/:number' component={Coach}/>
      <Route path='/worry' component={Worry}/>
      <Route path='/work' component={Work}/>
=======
      <Route exact path='/teacher/home' component={Home}/>
      <Route path='/teacher/coach/:number' component={Coach}/>
      <Route path='/teacher/wrong' component={Worry}/>
      <Route path='/teacher/work' component={Work}/>
>>>>>>> 0478d7a30210ce5e8062fb1643e0b8b8447aa228
    </Switch>
  </main>
)

export default MainRouter