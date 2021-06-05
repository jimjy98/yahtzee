import { Game } from "types";
import firebase from "firebase";

const db = firebase.firestore();

// create that shit
async function createNewGame(game: Game) {
  const gameDoc = {
    title: game,
    date: game.date.toISOString(),
    description: game.description,
    users: game.users,
    scores: game.scores,
  };

  try {
    await db.collection("games").add(gameDoc);
    console.log("Game created successfully!");
  } catch (err) {
    console.error(err);
  }
}

// reading data for live shit
async function getGame(id: string, onSnapshot: (game: Game) => void) {
  db.collection("games")
    .doc(id)
    .onSnapshot((doc) => {
      const data = doc.data() as Game;
      onSnapshot(data);
    });
}

// update that shit
async function updateGameData(
  id: string,
  updatedGame: Game
): Promise<Game | void> {
  const gameDocToUpdate = db.collection("games").doc(id);
  try {
    await gameDocToUpdate.update({
      scores: updatedGame.scores,
    });

    console.log("Game updated");
    return updatedGame;
  } catch (err) {
    console.error(err);
  }
}
