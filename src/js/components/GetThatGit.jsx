var React = require('react');
var $ = require('jquery');

var GetThatGit = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {};
    },
    fetchData: function() {
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
    componentDidMount: function() {
        this.fetchData() ;
        this.componentDidUpdate();
    },
    componentDidUpdate: function(something){
        if(something.username !== this.props.username) {
            this.fetchData();
        }
    },
    render: function() {
        if (!this.state.user) {
            return <div>LOADING INFO...</div>;
            
        }
        else {
        
        var user = this.state.user;
        
        return ( 

        <div class="github-user">
            <img src={this.state.user.avatar_url} />
             <div class="github-user__info">
                <p>{this.props.user}</p>
                <p>{this.state.user.bio ? <p>Bio: {this.state.user.bio}</p>: <p> No Bio for {this.props.user}</p> }</p>
            </div>
        </div> );
        }
    }
});

module.exports = GetThatGit;

