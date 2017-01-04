module.exports = function (e, client) {
	var slice = e.message.content.slice(7);
	e.message.channel.sendMessage(`${slice}`);
}