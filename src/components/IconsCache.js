import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty, uniq } from 'lodash';

import * as ActionCreators from '../actions/icons';

import SvgIcon from './SvgIcon';

class IconsCache extends Component {

	componentWillMount() {
		this.props.addIcons(this.props.children);
	}

	render() {
		if(this.props.cached.length === 0 || isEmpty(this.props.iconsData) === 0)
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
	mapDispatchToProps
)(IconsCache);
