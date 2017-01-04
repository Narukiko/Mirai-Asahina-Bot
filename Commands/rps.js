module.exports = function (e, client) {
	const pingpong = [
    "Rock",
	"Paper",
	"Scissors",
	"Rock",
	"Paper",
	"Scissors"
];
		let choice = ~~(Math.random() * pingpong.length);
        e.message.channel.sendMessage(pingpong[choice])
}