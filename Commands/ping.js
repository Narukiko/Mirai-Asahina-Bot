module.exports = function (e, client) {
	const pingpong = [
    "Pong!",
	"Mofu~!",
	"Cure Up Rapapa!",
	"Did somebody just called me by my first name?",
	"Is that you, Mofurun?",
	"Ow!",
	"WHAT?! My TV disappeared just now!",
	"Wakuwaku monda~a!",
	"EEE! Breath! Breath!",
	"Oh, my pancakes...",
	"Um... Pong?"
];
		let choice = ~~(Math.random() * pingpong.length);
        setTimeout(() => {
var variablesorfunctions;
          e.message.channel.sendMessage(pingpong[choice]).then(sentMessage => {
            sentMessage.edit(`${sentMessage.content} | :timer: ${Date.parse(sentMessage.timestamp) - Date.parse(e.message.timestamp)}ms`);
          }).catch(err => { return });
		}, 190)
}