module.exports = {
  users: (req, res) => {
    let db = req.app.get('db')
    db.getUsers().then(response => {
      res.send(response)
    })
  },


  login: (req, res) => {
    let db = req.app.get('db')
    let { username, password, profile_pic } = req.body
    const user = users.find(user => user.username === username && user.password === password)
    db.loggingIn([username, password, profile_pic]).then(response => {
      res.send(response)
    })
  },

  register: (req, res) => {
    let db = req.app.get('db')
    let { username, password, profile_pic } = req.body
    db.createUser([username, password, profile_pic]).then(response => {
      res.send(response)
    })
  }
}