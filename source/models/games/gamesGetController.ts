export module gamesGetController {

    export async function getGames(req, res) {
        var path = require('path');
        res.header("Content-Type", 'application/json');
        res.sendFile(path.resolve('source/models/games/games.json'));
    }

}