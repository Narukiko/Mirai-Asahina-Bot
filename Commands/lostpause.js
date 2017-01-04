module.exports = function (e, client) {
	const pingpong = [
    "http://i.imgur.com/FdoMvVY.png",
	"http://i.imgur.com/5dUDtn9.png",
	"http://i.imgur.com/ameIIfK.png",
	"http://i.imgur.com/5IGmahA.png",
	"CRITICAL HIT CAM \nhttp://images6.fanpop.com/image/photos/38900000/-Critical-Hit-Cam-lost-pause-38955365-960-544.jpg",
	"Uh, Noble? Why would you put your tongue like dat? \nhttp://i.imgur.com/WAEFDWq.png",
	"https://s-media-cache-ak0.pinimg.com/736x/cf/4a/93/cf4a930f28e72c4a0a64e333b0cf5610.jpg",
	"http://i.imgur.com/Dgql1CY.png",
	"http://i.imgur.com/EVI9jx4.png",
	"Noble was like NOOOOO!!! \nhttp://i.imgur.com/VGE8hBt.png",
	"http://i.imgur.com/4wNvvJ6.png",
	"http://i.imgur.com/b2SCq9y.png",
	"wut r u lookin' at? \nhttp://i.imgur.com/Y8cYaku.png",
	"R-R-R-R-ROASTIIIING! \nhttp://i.imgur.com/cBEtK4X.png",
	"Quality bopping xD \nhttps://lh3.googleusercontent.com/-nq4iB0hL1Mc/V3HI5niPZvI/AAAAAAAAEe0/QMTNgdopLVUw4JxIRVh3EREvLmVnf-XDw/w480-h270/giphy.gif",
	"MAD PUSSY \nhttps://lh3.googleusercontent.com/-2XpQhUvFbLs/VssZpQXhfxI/AAAAAAAAEOI/rG3iu7llSD0/w426-h239/oi-iAp.gif",
	"Can you handle DA **HAREM**?! \nhttps://static.miraheze.org/allthetropeswiki/thumb/7/7c/Noble-Waifus.jpg/430px-Noble-Waifus.jpg",
	"angery tsun dog \nhttps://cdn.discordapp.com/attachments/253152535341301760/253183381997748225/Screenshot_2016-08-24-18-44-48-1.png",
	"derp o_O \nhttps://cdn.discordapp.com/attachments/232090496749535232/253340979971489792/IMG_1392.PNG",
	"5 LOST PAUSE FACES!? \nhttp://scontent.cdninstagram.com/t51.2885-15/e35/15034605_1684640078423398_7691111160875057152_n.jpg?ig_cache_key=MTM4NDE1MTcyOTk0MzM5OTc1Mg%3D%3D.2"
];
		let choice = ~~(Math.random() * pingpong.length);
        e.message.channel.sendMessage(pingpong[choice])
}