const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnabry',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5,
    },
  };

  const players1 = game.players[0];
  const players2 = game.players[1];
  

  const [gk, ...fieldPlayers] = players1;
  

  const allPlayers = [...players1, ...players2];
  

  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  

  const { team1, draw, team2 } = game.odds;
  
  function printGoals(...players) {
    console.log(`${players.length} goals were scored`);
    for (const player of players) {
      console.log(player);
    }
  }

  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

  
 
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');
  