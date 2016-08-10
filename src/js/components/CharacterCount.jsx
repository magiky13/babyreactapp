var React = require('react');

var CharacterCount = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    };
  },
  handleChange: function(event) {
    this.setState({ 
        text: event.target.value 
    });
  },
  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"onChange={this.handleChange}>
        </textarea>
        <br/>
        <span>{this.state.text.length}</span>
        <button className="btn btn-primary pull-right">French Button</button>
      </div>
    );
  }
});

module.exports = CharacterCount;