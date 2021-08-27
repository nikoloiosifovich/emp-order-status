const router = require('express').Router()

require('dotenv').config()

function checkAValidUserToken(req, res, next) {
  const {usertoken} = req.headers

  if(usertoken !== process.env.TOKEN){
    return res.status(404).json({
      error: 'Unautorized!'
    })
  }

  return next()
}

router.get('/', checkAValidUserToken, (req, res) => {
  return res.json({
    message: 'Done!'
  })
})


module.exports = router
