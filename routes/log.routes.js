// в этом модуле описаны маршруты api для запроса получения лога действий с пользователями

const Router = require('express')
const router = new Router()
const LogController = require('../controllers/log.controller')

router.get('/log', LogController.getLogById)

module.exports = router
