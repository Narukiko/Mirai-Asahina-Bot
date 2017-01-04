module.exports = function (e, client) {
	const pingpong = [
    "Wait, is it my creator's birthday?",
	"9 days left for my creator's birthday!",
	"Oh, did you ask me when is his birthday? It's December 10th!",
	"Ooooh, oooh! I wanted the Intel Core M laptop so I am running much better than his netbook with no noise!",
	"Show my creator some love by following him on Twitter! @NaruAyase2195 is his Twitter page."
];
		let choice = ~~(Math.random() * pingpong.length);
        e.message.channel.sendMessage(pingpong[choice])
}