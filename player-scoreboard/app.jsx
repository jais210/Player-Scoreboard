let players = [
  // arreglo de objetos
	{
		name: "Jim Hoskins",
		score: 31,
		id: 1,
	},
	{
		name: "Andree Hoskins",
		score: 35,
		id: 2,
	},
	{
		name: "Alena Hoskins",
		score: 42,
		id: 3,
	},
];

function score (){
  // recorro el arreglo para sacar de cada objeto solo su score
	return players.map((player) =>{
		return (player.score);
	});
}

function addScore (){
  // recorro cada objeto para coger su score y devolver la suma total
	let scores = score(players);
	return scores.reduce((back,now) =>{
		return back+ now;
	},0);
}

function show (){
  return players.map((player, index)=>{
	return (
		<div className="player">
			<div className="player-name">
				<center><strong>{player.name}</strong></center> 
			</div>
			<div className="player-score counter">
				<div className="counter-action decrement">
					-
				</div>
				<div className="counter-score">
					{player.score}
				</div>
				<div className=" counter-action increment">
					+
				</div>
			</div>
		</div>
	);
  });
}
// etiquetas

const Header = (props) => {
  	return(
		<div className="header">
			<div className="stats">
				<table>
					<tr>
						<td>Player: </td>
						<td className="letter"><strong>{props.players.length}</strong></td>
					</tr>
					<tr>
						<td>Total Points: </td>
						<td className="letter"><strong>{addScore(props.players)}</strong></td>
					</tr>
				</table>
			</div>
			<h1><strong>{props.title}</strong></h1>
			<div className="stopwatch">
				<h2>STOPWATCH</h2>
				<div className="stopwatch-time">
					0
				</div>
				<div>
					<button><strong>START</strong></button>
					<button><strong>RESET</strong></button>
				</div>
			</div>
		</div>
  	);
} 

const List = (props) => {
  return (
	  <div>{show(props.players)}</div> 
  );
}

const Form = (props) => {
  return (
	<div className="add-player-form">
		<form>
			<input type="text"placeholder="ENTER A NAME"/>
			<input type="submit" value="ADD PLAYER"/>
		</form>
	</div>
  );
}

// creo la etiqueta que contiene las demás etiquetas
const TableroScore = ({title, players}) => {
   return (
	 <div className="scoreboard">
		<Header players={players} title={title}/>
		<List players={players}/>
		<Form />
	  </div>      
   );
}

ReactDOM.render(<TableroScore title="Scoreboard" players = {players}/>, document.getElementById('container'));