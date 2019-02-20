import { observable, decorate, action } from 'mobx';


export class CounterStore {

	/**
	 * @type {number}
	 */

	counter = 0;
	/**
	 * @type {RootStore}
	 */
	rootReducer;

	/**
	 * @param rootReducer {RootStore}
	 */
	constructor(rootReducer) {
		this.rootReducer = rootReducer;
	}

	/**
	 * @returns {void}
	 */
	increment() {
		this.counter++
	}

	/**
	 * @returns {void}
	 */
	decrement() {
		this.counter--;
	}

	/**
	 * @returns {void}
	 */
	reset() {
		this.counter = 0;
	}
}

decorate(CounterStore, {
	counter: observable,
	increment: action,
	decrement: action,
	reset: action
});