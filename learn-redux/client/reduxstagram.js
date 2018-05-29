import  React  from 'react';
import { render } from 'react-dom';

//css
import css from './styles/style.styl';

//components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// //router
import { Router, Route, IndexRoute} from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store.js'; 

const router = (
    //refactor for react-router v4 new nested routes once demo is over
    <Provider store={store}r>
        <Router history={history} >
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
