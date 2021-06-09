import { useState, useEffect } from "react";
import { getGame, updateGameData } from "api/newGame";
import { useRouter } from "next/router";
import { Game as GameType } from "types";

import { Paper, Typography, Divider } from "@material-ui/core";
import InputCell from "components/InputCell";
import { rowGuides } from "api/guide";

export default function Game() {
  const router = useRouter();
  const { myGame } = router.query;

  const [game, setGame] = useState<GameType | null>(null);
  const [users, setUsers] = useState<string[] | null>([]);

  useEffect(() => {
    if (!myGame) return;

    const tempGame = getGame(myGame as string, (data) => {
      setGame(data);
      users && setUsers(data.users);
    });
  }, [myGame]);

  return (
    <Paper style={{ padding: 24 }}>
      <Typography variant="h3">Yahtzee</Typography>
      <Typography variant="h6"> {game?.title || 'Game'}</Typography>
      <Typography variant="h6"> {game?.description || 'Description'} </Typography>

      <Divider style={{ margin: '24px 0' }} />

      <div className="yahtzee__score-card">
        <table>
          <tbody className="upper">
            <tr className="head">
              <th>Upper Section</th>
              <th>How to Score</th>
              {users?.map((u) => (
                <th key={u}>{u}</th>
              ))}
            </tr>

            {rowGuides.map(({ key, title, description, getResult }) => (
              <tr key={key}>
                <th>{title}</th>
                <th className="how-to-score">{description}</th>
                {/* @ts-ignore */}
                {users?.map((u, i) => (
                  <InputCell
                    value={
                      // @ts-ignore
                      key ? game.scores[key][u] : getResult(game.scores, u)
                    }
                    setValue={(e) => {
                      if (!key) return;

                      const tempGame = { ...game };
                      //   @ts-ignore
                      tempGame.scores[key][u] = e.target.value;
                      //@ts-ignore
                      updateGameData(myGame, tempGame);
                    }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Paper>
  );
}
