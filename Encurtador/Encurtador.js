class Encurtador
{
	static async Encurtar(access_token, url = "https://www.github.com/smokeeaasd")
	{
		const BitlyClient = require('bitly').BitlyClient;

		const bitly = new BitlyClient(access_token);
		const response = await bitly.shorten(url);
		return response.link;
	}
}

module.exports = { Encurtador }