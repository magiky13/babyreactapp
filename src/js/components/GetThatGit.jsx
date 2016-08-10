var React = require('react');
var $ = require('jquery');

var GetThatGit = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        var url = `https://api.github.com/users/${this.props.username}`;
        
        var that = this;
        
        $.getJSON(url).then(
            function(response) {
                that.setState({
                    user: response
                });
            }
        );
    },
    render: function() {
        if (!this.state.user) {
            return <div>LOADING INFO...</div>;
        }
        
        var user = this.state.user;
        
        return ( 

        <div class="github-user">
            <img src={user.avatar_url} />
             <div class="github-user__info">
                <p>{user.name}</p>
                <p>{user.bio}</p>
            </div>
        </div> );
    }
});

module.exports = GetThatGit;

