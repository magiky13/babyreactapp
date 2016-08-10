var React = require('react');

function numberGenerator() {
    return Math.floor(Math.random()*100);
}

var randomNumber = numberGenerator();

var NumberGuessing = React.createClass({
    
    getInitialState: function() {
        return {
            numberToGuess: "",
            guesses: [],
            numberOfTries: 0,
            userGuess: 0,
            randomNumber: numberGenerator()
        };
    },
      _startGame: function() {
        this.setState({
            numberToGuess: randomNumber,
            guesses: [],
            numberOfTries: 0
        });
    },
    checkGuess: function() {
        var userGuess = 0;
        userGuess = this.refs.userGuess.value;
        
        this.setState({ 
            guesses: this.state.guesses.concat([userGuess]),
            userGuess: userGuess
        });
        console.log('state', this.state);
    },
    
    renderWinner: function() {
        if (this.state.numberOfTries < 5 && this.state.userGuess > this.state.randomNumber) {
            return (
                <p> TOO HIGH </p>
            );
        }

        else if (this.state.numberOfTries < 5 && this.state.userGuess < this.state.randomNumber) {
            return (
                <p> TOO LOW </p>
            );
        }

        else if (this.state.numberOfTries < 5 && this.state.userGuess === this.state.randomNumber) {
            return (
                <p> NICE </p>
            );
        }
        else {
            return (<div></div>)
        }
    },
    
    _handleTries: function(){
        this.setState({ numberOfTries: this.state.numberOfTries + 1 });
        // this.setState({userGuess: this.refs.userGuess.value});
        this.checkGuess();
    },
    render: function (userGuess) {
        return(
            <div class="GuessTheNumber">
              <main>
                  <div className="well clearfix">
                      This is the NEW guessing game, ese...
                      Guess between 1 & 100<br/>
                      <span> Your guesses: {this.state.guesses} </span>
                      
                      <br/>
                        {this.renderWinner()}
                      <br/>
                      <input type="number" ref="userGuess"/>
                      <br/>
                      <button className="btn btn-primary"onClick={this._handleTries}>Lez play, ese!</button>
                      <button className="btn btn-primary"onClick={this._startGame}>Restart</button>
                  </div>
              </main>
              <footer>  
              </footer>
            </div>
        );
    }
});

module.exports = NumberGuessing;

//guesses.concat(this.userGuess)
