import React, { useState } from "react";
import { useRouter } from 'next/router'
import Chip from "@material-ui/core/Chip";
import { Game } from "types";

import { createNewGame } from "../api/newGame";

export default function NewGame() {
  const [users, setUsers] = useState<string[]>([]);
  const [inputUsers, setInputUsers] = useState<string>("");
  const [gameId, setGameId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const router = useRouter();

  function handleCreateGame() {
    var game: Game = {
      title: title,
      description: description,
      date: Date.now().toString(),
      scores: {
        aces: {},
        twos: {},
        threes: {},
        fours: {},
        fives: {},
        sixes: {},
        threeOfAKind: {},
        fourOfAKind: {},
        fullHouse: {},
        shortStraight: {},
        longStraight: {},
        yahtzee: {},
        chance: {},
      },
      users: users,
    };

    createNewGame(game).then((docId) => {
      if (docId) {
        router.push(`/game/${docId}`);
      }
    });

  }

  function handleDelete(clickedUser: string) {
    const newUsers: string[] = users.filter((user) => {
      return user !== clickedUser;
    });
    setUsers(newUsers);
  }

  function onKeyUp(event: any) {
    if (event.key === " ") {
      console.log("space pressed");
      if (event.target.value.length) {
        setUsers([...users, event.target.value]);
        setInputUsers("");
      }
    }
  }
  console.log(users);
  return (
    <div className="container">
      <form id="contact" onSubmit={e => e.preventDefault()}>
        <h3>Create new game</h3>
        <h4>Please fill in the following fields</h4>
        <input
          placeholder="Title"
          type="text"
          tabIndex={1}
          required
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          placeholder="Description"
          type="text"
          tabIndex={2}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          id="addUser"
          placeholder="Users"
          tabIndex={3}
          value={inputUsers}
          onChange={(e) => setInputUsers(e.target.value)}
          onKeyUp={onKeyUp}
        ></input>
        {users.map((user: string) => {
          return <Chip label={user} onDelete={() => handleDelete(user)} />;
        })}
        <button
          type="submit"
          id="contact-submit"
          onClick={handleCreateGame}
        >
          Create Game
        </button>
      </form>
    </div>
  );
}
