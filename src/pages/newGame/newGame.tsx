import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { Game, Scores } from 'types';

// import firebase from "firebase";
// const db = firebase.firestore();

import createNewGame from "../api/newGame";

export default function Home() {    

  const [users, setUsers] = useState<string[]>([]);
  const [inputUsers, setInputUsers] = useState<string>('');
  const [gameId, setGameId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  function handleCreateGame() {
    var game: Game = {
      title: title,
      description: description,
      date: Date.now().toString(),
      scores: {}, 
      users: users
    };
    
    var gameId = createNewGame(game);
    setGameId(gameId);
    // pass gameid to next page
    // routing
  }

  function handleDelete(clickedUser: string) {
    const newUsers: string[] = users.filter((user) => {
        return user !== clickedUser
    });
    setUsers(newUsers);
  }

  function onKeyUp(event: any) {
    if (event.key === ' ') {
      console.log("space pressed");
      if (event.target.value.length) {
        setUsers([...users, event.target.value]);
        setInputUsers('');
      }
    }
  }
  console.log(users);
    return (

        <div className="container">  
  <form id="contact" action="" method="post">
    <h3>Create new game</h3>
    <h4>Please fill in the following fields</h4>
    <fieldset>
            <input placeholder="Title" type="text" tabIndex={1} required autoFocus value={title} onChange={e => setTitle(e.target.value)}></input>
    </fieldset>
    <fieldset>
      <input placeholder="Description" type="text" tabIndex={2} required value={description} onChange={e => setDescription(e.target.value)}></input>
    </fieldset>
    <fieldset>
      <input id="addUser" placeholder="Users" type="tel" tabIndex={3} required value={inputUsers} onChange={e => setInputUsers(e.target.value)} onKeyUp={onKeyUp}></input>
    </fieldset>
    {users.map((user: string) => {
      return <Chip label={user} onDelete={() => handleDelete(user)}/>;
    })}
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={createNewGame}>Create Game</button>
    </fieldset>
  </form>
</div>  
    );
  }