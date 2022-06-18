const { Encurtador } = require('./Encurtador')

const token = "<token de acesso>";
const url = "<link>";

(async () => {
	console.log(await Encurtador.Encurtar(token, url))
})();