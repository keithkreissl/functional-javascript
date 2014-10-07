function getShortMessages(messages) {
	return messages.filter(function(msg){
		if (msg.message.length < 50){
			return true
		}
		return false
	}).map(function(msg){
		return msg.message
	})

  // SOLUTION GOES HERE
}

module.exports = getShortMessages