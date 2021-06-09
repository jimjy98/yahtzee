import { Game } from "types";
import { getDb } from 'api/init';

const db = getDb();

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
    return docId.id;
  } catch (err) {
    console.error(err);
  }
}

export async function getGame(id: string, onSnapshot: (game: Game) => void) {
  db.collection("games")
    .doc(id)
    .onSnapshot((doc) => {
      const data = doc.data() as Game;
      onSnapshot(data);
    });
}

export async function updateGameData(
  id: string,
  updatedGame: Game
): Promise<Game | void> {
  const gameDocToUpdate = db.collection("games").doc(id);
  try {
    await gameDocToUpdate.update({
      scores: updatedGame.scores,
    });
    return updatedGame;
  } catch (err) {
    console.error(err);
  }
}