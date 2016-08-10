var React = require('react');
var ImageCaption = require('./ImageCaption.jsx');
var Layout = require('./Layout.jsx');
var GuessTheNumber = require('./GuessTheNumber.jsx');
var CharacterCount = require('./CharacterCount.jsx');
var YouClicked = require('./YouClicked.jsx');
var CharacterLimit = require('./CharacterLimit');
var NumberGuessing = require('./NumberGuessing');
var GetThatGit = require('./GetThatGit.jsx');
var GithubSearch = require('./GithubSearch.jsx');


var imagelist = [
    {id: 1, source:"http://cdn.pigeonsandplanes.com/wp-content/uploads/2015/05/mia-gun.jpg", text: "Thats MIA :)"},
    {id: 2, source:"http://www.laut.de/M.I.A.-UK/mia-uk-166304.jpg", text: "Also MIA!!"},
    {id: 3, source:"http://c.directlyrics.com/img/upload/mia-new-photoshoot-only-1-u-new-song.jpg", text: "Guess what...MIA!!!"}
];


var App = React.createClass({
  renderImage: function(imagelist) {
      return(
          <div>
            {imagelist.map(function(imageInput){
                return <ImageCaption key={imageInput.id} source={imageInput.source} text={imageInput.text}/>;
            })}
            </div>
        );
  },    
  render: function() {
    return (
      <main>
        <h1>Sri Lankan Queen</h1>
        <h2>LEGEND STATUS WAS ACQUIRED BEFORE CITIZENSHIP</h2>
        <GuessTheNumber />
        <br/>
        <CharacterCount /> 
        <br/>
        <YouClicked />
        <br/>
        <CharacterLimit />
        <br/>
        <NumberGuessing />
        <div>
        {this.renderImage(imagelist)}
        </div>
        <br/>
        <GithubSearch/>
        <GetThatGit username={"ziad-saab"}/>
        <h2> Layout test </h2>
        <Layout>
        <h2>About MIA</h2>
        <p>Get your pop culture fix on <a href="http://www.cnn.com">political</a> issues.</p>
        </Layout>
      </main>
      );
  }
});

module.exports = App;

