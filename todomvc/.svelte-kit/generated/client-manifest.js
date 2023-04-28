export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/page2": [3],
	"/page3": [4],
	"/page4567": [5],
	"/page8": [6],
	"/page9": [7]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};