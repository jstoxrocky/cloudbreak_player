import React from 'react';
import { connect } from "react-redux";
import SearchGroup from './search-group'

@connect(({search, nav}) => {
	return {
		currentPage: nav.currentPage,
		availableTracks: search.availableTracks,
	};
})
export default class Search extends React.Component {

	handleStreamClick(trackHash) {
		this.props.dispatch(stream(trackHash));
	}

	render() {
		const {currentPage, availableTracks} = this.props;
		const onSearchPage = currentPage == 'SEARCH';
		let hasResults = availableTracks.length > 0;
		return (
			(onSearchPage && hasResults) ? <SearchGroup /> : <div></div>
		)
	}
};
