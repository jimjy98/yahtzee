import { Game } from "types";
import {db} from 'pages/index';


// create that shit
export async function createNewGame(game: Game) {

  const gameDoc = {
    title: game.title,
    date: game.date,
    description: game.description,
    users: game.users,
    scores: game.scores,
  };

  try {
    const docId = await db.collection("games").add(gameDoc);
    console.log("Game created successfully! Game id: " + docId);
    return docId.id;
  } catch (err) {
    console.error(err);
  }
}

// reading data for live shit
export async function getGame(id: string, onSnapshot: (game: Game) => void) {
  db.collection("games")
    .doc(id)
    .onSnapshot((doc) => {
      const data = doc.data() as Game;
      onSnapshot(data);
    });
}

// update that shit
export async function updateGameData(
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