import { clone, indexOf } from 'lodash';

export default (state = { cached: [], data: null }, action) => {

	let cached = clone(state.cached);

	switch (action.type) {
		case 'ADD_ICONS':
			return {
				cached,
				data: action.icons
			}
		case 'ADD_TO_CACHE':
			cached.push(action.iconType);
			return {
				cached,
				data: state.data
			};
		case 'REMOVE_FROM_CACHE':
			if(indexOf(cached, action.iconType) !== -1)
				cached.splice(indexOf(cached, action.iconType), 1);
			return {
				cached,
				data: state.data
			};
		default:
			return state;
	}
};
