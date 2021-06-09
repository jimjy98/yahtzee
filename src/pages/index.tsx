import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Chip,
  TextField,
  Typography,
  Button,
  Paper,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Game } from "types";
import { createNewGame } from "api/newGame";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    padding: 24,
    width: '60%',
  },
  input: {
    margin: '4px 0',
  },
  createGame: {
    display: 'block',
    float: 'right',
    marginTop: 8
  }
}));

export default function NewGame() {

  const [users, setUsers] = useState<string[]>([]);
  const [inputUsers, setInputUsers] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const router = useRouter();
  const classes = useStyles();

  const handleCreateGame = () => {
    const game: Game = {
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

    createNewGame(game).then((docId) =>
      docId ? router.push(`/game/${docId}`) : null
    );
  };

  const deleteUser = (clickedUser: string) => {
    const newUsers = users.filter((user) => user !== clickedUser);
    setUsers(newUsers);
  }

  const onKeyUp = (e: any) => {
    if (e.key === " " && e.target.value.length) {
      setUsers([...users, e.target.value]);
      setInputUsers("");
    }
  }

  return (
    <Box className={classes.background}>
      <Paper className={classes.paper} elevation={2}>
          <Typography variant="h5">Create a new game</Typography>
          <Typography color="textSecondary" variant="body2">
            Fill the following fields game share the url with your friends
          </Typography>

          <br />

          <TextField
            className={classes.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            placeholder="Ex: your current location"
            label="Title"
            autoFocus
            fullWidth
          />
          <TextField
            className={classes.input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            fullWidth
            label="Description"
            placeholder="Ex: something memorable that happened"
          />
          <TextField
            className={classes.input}
            value={inputUsers}
            onChange={(e) => setInputUsers(e.target.value)}
            variant="outlined"
            label="Users"
            fullWidth
            placeholder="Press space to add user"
            onKeyUp={onKeyUp}
          />

          <Box>
            {users.map((user: string) => (
              <Chip label={user} onDelete={() => deleteUser(user)} />
            ))}
          </Box>
          
          <Button className={classes.createGame} variant="contained" color="primary">
            Create Game
          </Button>
      </Paper>
    </Box>
  );
}
