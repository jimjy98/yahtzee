import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { getGame, updateGameData } from "api/newGame";
import { useRouter } from "next/router";
import { Game as GameType } from "types";

import { Paper } from "@material-ui/core";
import InputCell from 'components/InputCell';
import { rowGuides } from './guide';

export default function Game() {
  const router = useRouter();
  const { myGame } = router.query;

  const [game, setGame] = useState<GameType | null>(null);
  const [users, setUsers] = useState<string[] | null>([]);

  console.log(game);

  useEffect(() => {
    if (!myGame) return;
    const tempGame = getGame(myGame as string, (data) => {
      setGame(data);
      if (users) {
        setUsers(data.users);
      }
    });
  }, [myGame]);

  return (
    <Paper elevation={2}>
          <div className="yahtzee">
        <h1 className="yahtzee__heading">Yahtzee</h1>
        <h2> {game?.title} </h2>
        <h3> {game?.description} </h3>
        <div className="yahtzee__score-card">
          <table>
            <tbody className="upper">
              <tr className="head">
                <th>Upper Section</th>
                <th>How to Score</th>
                {users?.map(u => <th key={u}>{u}</th>)}
              </tr>

              {rowGuides.map(({ key, title, description, getResult }) => (
                <tr key={title}>
                  <th>
                    {title}
                  </th>
                  <th className="how-to-score">
                    {description}
                      </th>
                  {users?.map((u, i) => <InputCell value={key ? game.scores[key][u] : getResult(game.scores, u)} setValue={(e) => {
                    if (!key) return;

                    const tempGame = {...game};
                    tempGame.scores[key][u] = e.target.value;
                    updateGameData(myGame, tempGame);
                  }} />)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Paper>
  );
}
