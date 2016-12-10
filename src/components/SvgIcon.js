import React, { Component } from 'react';

class SvgIcon extends Component {

	static defaultProps = {
		width: 50,
		asGroup: false,
		cached: false,
		iconsData: []
	};

	getRatio(iconData) {
		return iconData.width / iconData.height;
	}

	getHeight(width, iconData) {
		return width / this.getRatio(iconData);
	}

	render() {

		const { asGroup, cached, type, width, height, iconsData, svgStyle, style } = this.props;
		const iconData = iconsData[type];

		if(!iconData)
			return null;

		let size = { width, height };
		if(size.width && !size.height) {
			size.height = this.getHeight(size.width, iconData);
		}

		if(cached) {
			return (
				<svg width={size.width} height={size.height} viewBox={iconData.viewBox} className={`icon-${type}`} style={style}>
					<use xlinkHref={`#${type}`} {...svgStyle}></use>
				</svg>
			);
		}

		if(asGroup) {
			return (
				<g id={type}>
					{iconData.paths}
				</g>
			)
		}

		return (
			<svg width={size.width} height={size.height} viewBox={iconData.viewBox} className={`icon-${type}`}>
				{iconData.paths}
			</svg>
		);

	}
}

export default SvgIcon;
