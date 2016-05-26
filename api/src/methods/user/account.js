module.exports = {
  createUser: function () {
    return new Promise((resolve, reject) => {
      if (false) { return reject(new Error("we fucked up"))}
      resolve("create user resolve")
      }).then(function(result) {
        console.log(result)
      }).catch(function(err) {
        console.log(err)
      })
  }
}
