var React = require('react');

var CharacterLimit = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },
  render: function() {
    return (
      <div className="well clearfix">
        <textarea maxLength="15"className="form-control"onChange={this.handleChange}></textarea>
        <br/>
        <span>You have {15 - this.state.text.length} characters left</span>
        <button className="btn btn-primary pull-right"disabled={this.state.text.length === 0}>Try and reach my limit</button>
      </div>
    );
  }
});

module.exports = CharacterLimit;