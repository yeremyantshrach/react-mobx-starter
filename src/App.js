import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { observer, inject } from 'mobx-react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	static propTypes = {
		stores: PropTypes.object
	};

	constructor(props) {
		super(props);
		this.onIncrementHandler = this.onIncrementHandler.bind(this);
		this.onDecrementHandler = this.onDecrementHandler.bind(this);
		this.onResetHandler = this.onResetHandler.bind(this);
	}

	onIncrementHandler(e) {
		e.preventDefault();
		this.props.stores.counter.increment();
	}

	onDecrementHandler(e) {
		e.preventDefault();
		this.props.stores.counter.decrement();
	}

	onResetHandler(e) {
		e.preventDefault();
		this.props.stores.counter.reset();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						React-redux starter
					</p>
					<p>
						<code>{this.props.stores.counter.counter}</code>
					</p>
					<div>
						<button type={'button'} onClick={this.onIncrementHandler}>Increment</button>
					</div>
					<div>
						<button type={'button'} onClick={this.onDecrementHandler}>Decrement</button>
					</div>
					<div>
						<button type={'button'} onClick={this.onResetHandler}>Reset</button>
					</div>
				</header>
			</div>
		);
	}
}

export default inject('stores')(observer(App));
