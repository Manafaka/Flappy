import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, AsyncStorage } from 'react-native';

export default class FlappyBirdGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birdBottom: 350, // Position initiale de l'oiseau
      gravity: 3, // Gravité qui attire l'oiseau vers le bas
      gap: 200, // Espacement entre les tuyaux
      pipeLeft: 800,// this.screenWidth, // Position initiale des tuyaux
      score: 0, // Score du jeu
      bestScore: 6, // Meilleur score initialisé à 0
    };

    this.gameLoopInterval = null;
  }

  componentDidMount() {
    // Charger le meilleur score enregistré
    this.loadBestScore();
    // Lancer la boucle de jeu
    this.gameLoopInterval = setInterval(this.gameLoop, 30);
  }

  componentWillUnmount() {
    clearInterval(this.gameLoopInterval);
  }

  gameLoop = () => {
    // Déplacer les tuyaux vers la gauche
    this.setState((prevState) => ({ pipeLeft: prevState.pipeLeft - 5 }));

    // Déplacer l'oiseau vers le bas à cause de la gravité
    this.setState((prevState) => ({ birdBottom: prevState.birdBottom - prevState.gravity }));

    // Vérifier la collision avec les tuyaux ou le sol
    this.checkCollision();
  };

  checkCollision = () => {
    // Vérifier la collision avec les tuyaux
    if (
      this.state.birdBottom <= 0 || // L'oiseau touche le sol
      (this.state.birdBottom >= this.screenHeight - 30) || // L'oiseau touche le haut
      (this.state.pipeLeft < 60 && this.state.pipeLeft > 0 && // L'oiseau touche le tuyau
        (this.state.birdBottom < this.state.pipeHeight - 30 ||
          this.state.birdBottom > this.state.pipeHeight + this.state.gap - 20))
    ) {
      clearInterval(this.gameLoopInterval); // Arrêter la boucle de jeu
      alert('Game Over!'); // Afficher le message de fin de jeu
      // Mettre à jour le meilleur score s'il est battu
      if (this.state.score > this.state.bestScore) {
        this.setState({ bestScore: this.state.score });
        // Sauvegarder le meilleur score
        this.saveBestScore();
      }
    }

    // Vérifier si le tuyau a été passé et mettre à jour le score
    if (this.state.pipeLeft === -60) {
      this.setState((prevState) => ({
        pipeLeft: 800,//this.screenWidth,
        pipeHeight: Math.random() * 300 + 20,
        score: prevState.score + 1,
      }));
    }
  };

  jump = () => {
    // Déplacer l'oiseau vers le haut lorsqu'il est tapé
    this.setState({ birdBottom: this.state.birdBottom + 50 });
  };

  // Charger le meilleur score à partir du stockage local
  loadBestScore = async () => {
    try {
      const bestScore = await AsyncStorage.getItem('bestScore');
      if (bestScore !== null) {
        this.setState({ bestScore: parseInt(bestScore) });
      }
    } catch (error) {
      console.log("Error loading best score: ", error);
    }
  };

  // Sauvegarder le meilleur score dans le stockage local
  saveBestScore = async () => {
    try {
      await AsyncStorage.setItem('bestScore', this.state.bestScore.toString());
    } catch (error) {
      console.log("Error saving best score: ", error);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.jump}>
        <View style={styles.container}>
          {/* Tuyaux */}
          <View
            style={[
              styles.pipe,
              { left: this.state.pipeLeft, height: this.state.pipeHeight },
            ]}
          />
          <View
            style={[
              styles.pipe,
              {
                left: this.state.pipeLeft,
                height: this.screenHeight - this.state.pipeHeight - this.state.gap,
                top: this.state.pipeHeight + this.state.gap,
              },
            ]}
          />
          {/* Oiseau */}
          <Image source={require('../assets/Walk (8).png')} style={[styles.bird, { bottom: this.state.birdBottom }]}/>
          {/* Score */}
          <Text style={styles.scoreText}>Score: {this.state.score}</Text>
          {/* Meilleur score */}
          <Text style={styles.bestScoreText}>Best Score: {this.state.bestScore}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    position: 'relative',
  },
  bird: {
    position: 'absolute',
    backgroundColor: 'yellow',
    width: 30,
    height: 30,
    borderRadius: 15,
    left: 50,
  },
  pipe: {
    position: 'absolute',
    backgroundColor: 'green',
    width: 60,
    bottom: 0,
    top: 350,
   // height:40,
  },
  scoreText: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  bestScoreText: {
    position: 'absolute',
    top: 50,
    right: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
