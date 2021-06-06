import { Game } from "types";
import firebase from "firebase";

const db = firebase.firestore();

// create that shit
export default async function createNewGame(game: Game) {

  const gameDoc = {
    title: game,
    date: game.date.toISOString(),
    description: game.description,
    users: game.users,
    scores: game.scores,
  };

  try {
    const docId = await db.collection("games").add(gameDoc);
    console.log("Game created successfully! Game id: " + docId);
    return docId;
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

// get dem players
export default async function getUsers(id: string) {
  var gameDoc = await db.collection('games').doc(id);
  var users: string[] = [];
  gameDoc.get().then(doc => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      users = doc.data()?.users;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((err) => {
    console.error(err);
  })
  return users;
}