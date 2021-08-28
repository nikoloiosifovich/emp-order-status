const router = require('express').Router()

require('dotenv').config()

const database = require('./database/ordersData.json')

function checkAValidUserToken(req, res, next) {
  const {usertoken} = req.headers

  if(usertoken !== process.env.TOKEN){
    return res.status(404).json({
      error: 'Unautorized!'
    })
  }

  return next()
}

// router.get('/', checkAValidUserToken, (req, res) => {
//   return res.json(database)
// })

router.get('/:id', checkAValidUserToken, (req, res) => {
  const {id} = req.params

  return res.json(database[id])
})

module.exports = router
