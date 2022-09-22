import netflix1 from './images/netflix-1.png';
import netflix2 from './images/netflix-2.png';
import netflix3 from './images/netflix-3.png';
import netflix4 from './images/netflix-4.png';
import netflix5 from './images/netflix-5.png';
// import bbc1 from './images/bbc-1.png';
// import bbc2 from './images/bbc-2.png';
// import bbc3 from './images/bbc-3.png';
// import bbc4 from './images/bbc-4.png';
// import airbnb1 from './images/airbnb-1.png';
// import airbnb2 from './images/airbnb-2.png';
// import airbnb3 from './images/airbnb-3.png';
// import airbnb4 from './images/airbnb-4.png';
import './App.css';

function App() {
  return (
    <div id="container">
      <Movie movieName="The Witcher" movieImage={netflix1} movieDescription="Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts." />
      <Movie movieName="The Queen's Gambit" movieImage={netflix2} movieDescription="Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price." />
      <Movie movieName="Outside The Wire" movieImage={netflix3} movieDescription="In the near future, a drone pilot sent into a war zone finds himself paired with a top-secret android officer on a mission to stop a nuclear attack." />
      <Movie movieName="Fate: The Winx Saga" movieImage={netflix4} movieDescription="A live-action adaptation of Nickelodeon's Winx Club (2004). It follows Bloom as she adjusts to life in the Otherworld, where she must learn to control her dangerous magical powers." />
      <Movie movieName="Star Trek: Discovery" movieImage={netflix5} movieDescription="Ten years before Kirk, Spock, and the Enterprise, the USS Discovery discovers new worlds and lifeforms as one Starfleet officer learns to understand all things alien." />
    </div>
  )
}

const Movie = (props) => {
  return (
    <div className="movie-box">
      <h1>{props.movieName}</h1>
      <img src={props.movieImage} alt="" />
      <MovieDescription movieDescription={props.movieDescription} />
    </div>
  )
}

const MovieDescription = (props) => {
  return (
    <p id="desc">{props.movieDescription}</p>
  )
}
export default App;