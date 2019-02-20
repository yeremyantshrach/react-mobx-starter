import { RouterStore } from 'mobx-react-router';

import { CounterStore } from './counter/CounterStore'

export class RootStore {
	/**
	 * @type {CounterStore}
	 */
	counter;
	/**
	 * @type {RouterStore}
	 */
	routing;

	constructor() {
		this.routing = new RouterStore();
		this.counter = new CounterStore(this);
	}
}

export const stores = new RootStore();