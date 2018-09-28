import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container/Container"
import cards from "./cards.json";
import './App.css';

function shuffle(array) {
  for (let i=array.length-1; i>0; i--) {
    const j= Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  
  state = {
    cards,
    score: 0,
    highScore: 0,
    guess: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({clicked: this.state.clicked.concat(id)});
    }
    else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      guess: ""
    });
    if (newScore >= this.state.highScore) {
      this.setState({
        highScore:newScore,
        guess: "You guessed correctly!"
      });
    }
    else if (newScore === 18) {
      this.setState({guess: "You win!"});
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      guess: "Sorry, you lost!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffled = shuffle(cards);
    this.setState({cards: shuffled});
  };

  render() {
    return (
      <Wrapper>
        <Header 
          title="MemoryGame"
          guess={this.state.guess}
          score={this.state.score}
          highScore={this.state.highScore}
        />

        <Container>
          {this.state.cards.map(card =>(
              <Card
              key={card.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={card.id}
              image={card.image}
              />
          ))}
        </Container>
      </Wrapper>
    );
  }
};

export default App;
