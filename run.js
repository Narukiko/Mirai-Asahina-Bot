module.exports.runBot = function(token) {
var Discordie = require("discordie");
var client = new Discordie();

const Events = Discordie.Events;

const prefix = "cm:";
client.connect({ token: token });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
	console.log("Connected as: " + client.User.username);
});

client.User.setGame ("Pretty Cure | Use cm:help for commands!");

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if (e.message.content.startsWith(prefix)){
		var prefslice = e.message.content.slice(prefix.length);
		var commandName = prefslice.split(" ")[0];
		if (prefslice != "") {
			try {
			require(`./Commands/${commandName}.js`)(e, client);
		} catch(err) {
			console.log(err.stack);
		}
		}
	}
})
}
