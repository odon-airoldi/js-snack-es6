/*
Snack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {
        teams_name: 'Juventus',
        scored: 0,
        fouls_suffered: 0
    },
    {
        teams_name: 'Milan',
        scored: 0,
        fouls_suffered: 0
    },
    {
        teams_name: 'Inter',
        scored: 0,
        fouls_suffered: 0
    }
]

const teams_fouls_suffered = []

for(i = 0; i < teams.length; i++) {

    team = teams[i]

    team.scored = Math.floor(Math.random() * 100) + 1;
    team.fouls_suffered = Math.floor(Math.random() * 20) + 1;

    teams_fouls_suffered.push(team.teams_name, team.fouls_suffered )

}

console.log(teams_fouls_suffered)


