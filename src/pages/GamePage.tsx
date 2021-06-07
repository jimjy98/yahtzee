import "tailwindcss/tailwind.css";
import {getUsers} from 'api/newGame';

export interface Props {
  gameId: string,
}

export default function GamePage(props: Props) {
  
  const generateUserColumns = (gameId: string) => {
    var columns = ``;
    getUsers(gameId).then((users: string[]) => {
      users.forEach(u => {
        columns += `<th>` + u + `</th>`;
      });
    })
    // var users = getUsers(gameId);
    return columns;
  }



  return (
    <div className="yahtzee">
      <p></p>
  <h1 className="yahtzee__heading">Yahtzee</h1>
  <div className="yahtzee__score-card">
    <table>
      <tbody className="upper">
        <tr className="head">
          <th>Upper Section</th>
          <th>How to Score</th>
          {generateUserColumns(props.gameId)}
        </tr>
        <tr> 
          <th> 
            <div className="desc">
              <div className="primary">Aces </div>
              <div className="die">&#x2680;</div>
            </div>
          </th>
          <th className="how-to-score">Count and Add<br />Only Aces</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th> 
            <div className="desc">
              <div className="primary">Twos </div>
              <div className="die">&#x2681;</div>
            </div>
          </th>
          <th className="how-to-score">Count and Add<br />Only Twos</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th> 
            <div className="desc">
              <div className="primary">Threes </div>
              <div className="die">&#x2682;</div>
            </div>
          </th>
          <th className="how-to-score">Count and Add<br />Only Threes</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th> 
            <div className="desc">
              <div className="primary">Fours </div>
              <div className="die">&#x2683;</div>
            </div>
          </th>
          <th className="how-to-score">Count and Add<br />Only Fours</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th> 
            <div className="desc">
              <div className="primary">Fives </div>
              <div className="die">&#x2684;</div>
            </div>
          </th>
          <th className="how-to-score">Count and Add<br />Only Fives</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th> 
            <div className="desc">
              <div className="primary">Sixes </div>
              <div className="die">&#x2685;</div>
            </div>
          </th>
          <th className="how-to-score">Count and Add<br />Only Sixes</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr className="foot">
          <th> 
            <div className="desc">
              <div className="primary">Total Score</div>
            </div>
          </th>
          <th className="how-to-score"></th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr className="foot">
          <th> 
            <div className="desc">
              <div className="primary">Bonus</div>
              <div className="alt">If total score is 63 or over.</div>
            </div>
          </th>
          <th className="how-to-score">Score 35</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr className="foot">
          <th> 
            <div className="desc">
              <div className="primary">Total</div>
              <div className="alt">Of Upper Section</div>
            </div>
          </th>
          <th className="how-to-score"></th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
      </tbody>
      <tbody className="lower">
        <tr className="head">
          <th colSpan={8}>Lower Section</th>
        </tr>
        <tr>
          <th> 
            <div className="desc">
              <div className="primary">3 of a kind</div>
            </div>
          </th>
          <th className="how-to-score">Total of all dice </th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th> 
            <div className="desc"> 
              <div className="primary">4 of a kind </div>
            </div>
          </th>
          <th className="how-to-score">Total of all dice</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th>
            <div className="desc"> 
              <div className="primary">Full House </div>
            </div>
          </th>
          <th className="how-to-score">Score 25</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th>
            <div className="desc"> 
              <div className="primary">Sm. Straight </div>
              <div className="alt">Sequence of four</div>
            </div>
          </th>
          <th className="how-to-score">Score 30</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th>
            <div className="desc"> 
              <div className="primary">Lg. Straight </div>
              <div className="alt">Sequence of five</div>
            </div>
          </th>
          <th className="how-to-score">Score 40</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input></td>
        </tr>
        <tr> 
          <th>
            <div className="desc"> 
              <div className="primary">YAHTZEE </div>
              <div className="alt">Five of a kind</div>
            </div>
          </th>
          <th className="how-to-score">Score 50</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input> </td>
        </tr>
        <tr> 
          <th>
            <div className="desc"> 
              <div className="primary">Chance </div>
            </div>
          </th>
          <th className="how-to-score">Total of all dice</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input> </td>
        </tr>
        <tr> 
          <th rowSpan={2}>
            <div className="desc"> 
              <div className="primary">YAHTZEE Bonus</div>
            </div>
          </th>
          <th className="how-to-score">&#x2714; for<br />each bonus</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input> </td>
        </tr>
        <tr>
          <th className="how-to-score">Score 100<br />per &#x2714;</th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input> </td>
        </tr>
        <tr className="foot">
          <th> 
            <div className="desc">
              <div className="primary">Total</div>
              <div className="alt">Of Lower Section</div>
            </div>
          </th>
          <th className="how-to-score"></th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input> </td>
        </tr>
        <tr className="foot">
          <th> 
            <div className="desc">
              <div className="primary">Total</div>
              <div className="alt">Of Upper Section          </div>
            </div>
          </th>
          <th className="how-to-score"></th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input> </td>
        </tr>
        <tr className="foot">
          <th> 
            <div className="desc">
              <div className="primary">Grand Total</div>
            </div>
          </th>
          <th className="how-to-score"></th>
          <td><input className='t' tabIndex={1}></input></td>
          <td><input className='t' tabIndex={2}></input></td>
          <td><input className='t' tabIndex={3}></input></td>
          <td><input className='t' tabIndex={4}></input></td>
          <td><input className='t' tabIndex={5}></input></td>
          <td><input className='t' tabIndex={6}></input> </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  );
}
