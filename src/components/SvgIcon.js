import React, { Component } from 'react';
import { filter, head } from 'lodash';

class SvgIcon extends Component {

	static defaultProps = {
		width: 50,
		asGroup: false,
		cached: false,
		iconsData: []
	};

	getRatio(iconData) {
		return iconData.props.width / iconData.props.height;
	}

	getHeight(width, iconData) {
		return width / this.getRatio(iconData);
	}

	getIconData(iconsData) {
		return head(filter(iconsData, (icon) => {
			return icon.props.name === this.props.type;
		}));
	}

	render() {

		const { asGroup, attrs, cached, sibling, width, height, iconsData, innerData, style, type } = this.props;
		const iconData = this.getIconData(iconsData);

		if(!iconData)
			return null;

		let size = { width, height };
		if(size.width && !size.height) {
			size.height = this.getHeight(size.width, iconData);
		}

		if(cached) {
			return (
				<svg width={size.width} height={size.height} viewBox={iconData.props.viewBox} className={`icon-${type}`} style={style}>
					<use xlinkHref={`#${type}`} {...attrs}>{(innerData) ? innerData({ iconData }) : null}</use>
					{(sibling) ? sibling({ iconData }) : null}
				</svg>
			);
		}

		if(asGroup) {
			return (
				<g id={type}>
					{iconData.props.children}
				</g>
			)
		}

	}
}

export default SvgIcon;
