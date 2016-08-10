var React = require("react");

var YouClicked = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  handleButton: function(event) {
    this.setState({ count: this.state.count + 1 });
  },
  render: function() {
    return (
        <div className="well clearfix">
        <span>{this.state.count}</span>
        <button className="btn btn-primary pull-right"onClick={this.handleButton}>To the moon</button>
        </div>
    );
  }
});

module.exports = YouClicked;