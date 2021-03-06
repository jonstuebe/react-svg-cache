export function addToCache(iconType) {
	return {
		type: 'ADD_TO_CACHE',
		iconType
	}
}

export function removeFromCache(iconType) {
	return {
		type: 'REMOVE_FROM_CACHE',
		iconType
	}
}

export function addIcons(icons) {
	return {
		type: 'ADD_ICONS',
		icons
	}
}
