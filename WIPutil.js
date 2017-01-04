var ex = module.exports = {};
ex.sendDm = function (userId, content, client) {
	setTimeout(() => {
		return new Promise(function (rs, rj) {
			client.Users.find(fn => fn.id == userId).openDM.then(dm => {
				dm.sendMessage(content, false).then(rs).catch(rj)
			}).catch(rj)
		})
	},190)
}