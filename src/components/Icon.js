import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { includes } from 'lodash';

import * as ActionCreators from '../actions/icons';

import SvgIcon from './SvgIcon';

class Icon extends Component {

	static defaultProps = {
		type: null
	};

	componentWillMount() {

		const { type } = this.props;

		if(type !== null) {
			this.props.addToCache(type);
		}

	}

	componentWillUnmount() {

		if(includes(this.props.cached, this.props.type)) {
			this.props.removeFromCache(this.props.type);
		}

	}

	render() {

		const { attrs, children, width, filter, height, iconsData, style, type } = this.props;

		if(type === null)
			return null;

		const cached = (includes(this.props.cached, type)) ? true : false;

		return (
			<SvgIcon
				type={type}
				cached={cached}
				width={width}
				height={height}
				filter={filter}
				iconsData={iconsData}
				style={style}
				attrs={attrs}
				innerData={children}
			/>
		);

	}

}

const mapStateToProps = (state) => {
  return {
    cached: state.icons.cached,
		iconsData: state.icons.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Icon);
