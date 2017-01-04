module.exports.runBot = function(token) {
var Discordie = require("discordie");
var client = new Discordie();

const Events = Discordie.Events;
/*const pingpong = [
    "Pong!",
	"Did somebody just called me by my first name?",
	"Is that you, Mofurun?",
	"Ow!"
];*/
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
/*client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if(e.message.content == "cm:ping") {
		let choice = ~~(Math.random() * pingpong.length);
        e.message.channel.sendMessage(pingpong[choice])
	}
});*/
/*
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if(e.message.content == "cm:hello") {
		e.message.channel.sendMessage("Konichiwa!");
	}
});*/

/*client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if(e.message.content == "cm:cpjs") {
		e.message.channel.sendMessage("Cure Up Rapapa! Here's how to become stylish! https://www.youtube.com/watch?v=0CUV65tuVZI");
	}
});*/
/*
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if(e.message.content == "cm:currentos") {
		e.message.channel.sendMessage(e.message.author.nickMention + " I'm running on Windows Server 2008 R2 Enterprise!");
	}
});*/

/*client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if(e.message.content == "cm:about") {
		e.message.channel.sendMessage("Mirai Asahina Bot Prerelease v0.1 developed by NaruAyase2195, with the possible help by TrashyClassy and Potaha.");
	}
});*/

/*client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	if(e.message.content == "cm:invite") {
		e.message.channel.sendMessage("Here you go! Invite me to your server if you want! https://discordapp.com/oauth2/authorize?&client_id=252124959667650562&scope=bot");
	}
});*/
}