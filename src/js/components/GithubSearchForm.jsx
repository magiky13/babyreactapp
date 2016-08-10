var React = require('react');

var GithubSearchForm = React.createClass({
      // proptype: {
      //   onSearch: React.PropTypes.func.isRequired;
      // },
      _handleSubmit: function(event) {
          event.preventDefault();
          var inputValue = this.refs.userInput.value;
          this.props.onSearch(inputValue);
      },
    
      render: function() {
        return (
          <div>
            <p>Enter a GitHub username:</p>
            <input type="text" ref="userInput" />
            <button onClick={this._handleSubmit}>Go!</button>
          </div>
    );
  }
});

module.exports = GithubSearchForm; 