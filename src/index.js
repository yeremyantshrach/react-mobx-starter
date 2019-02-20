import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';

import App from './App';

import { stores } from './store/RootStore';
import * as serviceWorker from './serviceWorker';

import './index.css';
import { Provider } from 'mobx-react';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href'),
	browserHistory = createBrowserHistory({basename: baseUrl}),
	history = syncHistoryWithStore(browserHistory, stores.routing);

ReactDOM.render(
	<Provider stores={stores}>
		<Router history={history}>
			<Switch>
				<Route exact component={App} path={'/'} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
