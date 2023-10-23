// в этом модуле описаны маршруты api для запросов создания, обновления пользователя
// получения списка пользователей

const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')

router.post('/user', userController.createUser)
router.put('/user', userController.updateUser)
router.get('/user', userController.getUsers)

module.exports = router
