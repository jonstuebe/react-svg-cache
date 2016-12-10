import React, { Component } from 'react';
import { connect } from 'react-redux';

import SvgIcon from './SvgIcon';

class IconsCache extends Component {
	render() {
		return (
			<svg style={{ display: 'none' }}>
				{this.props.cached.map((icon, index) => {
					return (
						<SvgIcon
							key={`icon-cache-${index}`}
							asGroup={true}
							type={icon}
							iconsData={this.props.iconsData}
						/>
					);
				})}
			</svg>
		);
	}
}

const mapStateToProps = (state) => {
  return { cached: state.icons.cached, iconsData: state.icons.data };
}

export default connect(
  mapStateToProps
)(IconsCache);
