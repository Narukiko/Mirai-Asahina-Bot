module.exports = function (e, client) {
	const pingpong = [
    "I love my teddy bear so much! http://prettycure.wikia.com/wiki/Mofurun",
	"Riko-chan is my besties! http://prettycure.wikia.com/wiki/Izayoi_Riko",
	"Ha-chan, as always! ;) http://prettycure.wikia.com/wiki/Ha-chan",
	"I like you, " + e.message.author.nickMention + "!",
	"I always love you as your best buddy, " + e.message.author.nickMention + "! ~ <3",
	"I... I love Emilia.",
	"It's not that I like you or anything...baka."
];
		let choice = ~~(Math.random() * pingpong.length);
        e.message.channel.sendMessage(pingpong[choice])
}