import React, { Component } from 'react';

class SvgIcon extends Component {

	static defaultProps = {
		width: 50,
		height: 50,
		asGroup: false,
		cached: false,
		iconsData: []
	};

	render() {

		const { asGroup, cached, type, width, height, iconsData } = this.props;
		const iconData = iconsData[type];

		if(cached) {
			return (
				<svg width={width} height={height} viewBox={iconData.viewBox}>
					<use xlinkHref={`#${type}`}></use>
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
			<svg width={width} height={height} viewBox={iconData.viewBox}>
				{iconData.paths}
			</svg>
		);

	}
}

export default SvgIcon;
