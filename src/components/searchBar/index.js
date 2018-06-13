import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { translate } from 'react-i18next';
import { searchSuggestions } from './../../actions/search';
import AutoSuggest from './../autoSuggest';
import routes from './../../constants/routes';
import styles from './searchBar.css';

class Search extends React.Component {
  shouldShowSearchBarOnMobile() {
    const { pathname } = this.props.location;
    return pathname.includes('explorer') && !pathname.includes(`${routes.explorer.path}${routes.search.path}`);
  }

  render() {
    return (<div className={`${styles.searchBar} search-bar-input ${this.shouldShowSearchBarOnMobile() ? styles.show : null}`}>
      <AutoSuggest
        history={this.props.history}
        t={this.props.t}
        results={this.props.suggestions}
        activePeer={this.props.activePeer}
        searchSuggestions={this.props.searchSuggestions}
      />
    </div>);
  }
}

const mapStateToProps = state => ({
  suggestions: state.search.suggestions,
  activePeer: state.peers.data,
});
const mapDispatchToProps = dispatch => ({
  searchSuggestions: data => dispatch(searchSuggestions(data)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate()(Search)));
