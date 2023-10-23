// модуль обработки запроса вида: http://localhost:8080/api/log?id=12&page=1
// возвращает лог действий с пользователем имеющим запрашиваемый id
// также необходимо задать номер страницы вывода (по умолчанию 0)

const db = require('../db')

class LogController {
  async getLogById(req, res) {
    const id = req.query.id
    const page = req.query.page || 0
    const log = await db.query(`SELECT * from actions WHERE userid = $1`, [id])
    const beginNumber = 0 + page * 10
    const endNumber = 9 + page * 10

    res.json(log.rows.slice(beginNumber, endNumber + 1))
  }
}

module.exports = new LogController()
