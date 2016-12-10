import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uniq } from 'lodash';

import SvgIcon from './SvgIcon';

class IconsCache extends Component {
	render() {
		if(this.props.cached.length === 0)
			return null;

		return (
			<svg style={{ display: 'none' }}>
				<defs>
					{uniq(this.props.cached).map((icon, index) => {
						return (
							<SvgIcon
								key={`icon-cache-${index}`}
								asGroup={true}
								type={icon}
								iconsData={this.props.iconsData}
							/>
						);
					})}
				</defs>
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
