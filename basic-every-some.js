function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(subUser){
    	return goodUsers.some(function(good){
    		return good.id === subUser.id
    	})
    })
  };
}

module.exports = checkUsersValid