var React = require('react');

function numberGenerator() {
    return Math.floor(Math.random()*100);
}

var randomNumber = numberGenerator();

var GuessTheNumber = React.createClass({
    
    checkGuess: function() {

        var userGuess = this.refs.userGuess.value;

        if (userGuess > randomNumber) {
            alert("iz too high, ese!");
        }

        else if (userGuess < randomNumber) {
            alert("iz too low, ese!");
        }

        else if (userGuess === randomNumber) {
            alert("iz correct, ese!");
        }
    },
    render: function (userGuess) {
        return(
            <div class="GuessTheNumber">
              <main>
                  <div className="well clearfix">
                      This is the guessing game, ese...
                      Type yo #<br/>
                      <input type="number" ref="userGuess"/>
                      <br/>
                      <button className="btn btn-primary"onClick={this.checkGuess}>Lez play, ese!</button>
                  </div>
              </main>
              <footer>  
              </footer>
            </div>
        );
    }
});

module.exports = GuessTheNumber;