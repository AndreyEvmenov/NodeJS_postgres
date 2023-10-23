// в этом модуле код методов создания и изменения пользователя в таблице users,
// которые также записывают в таблицу actions лог создания и изменения пользователей,
// также здесь метод возврата списка всех пользователей из таблицы users

const db = require('../db')

class UserController {
  async createUser(req, res) {
    const { name, email } = req.body
    const newPerson = await db.query(
      `INSERT INTO users (username, email) values ($1, $2) RETURNING *`,
      [name, email]
    )

    // записываем в лог информацию о создании пользователя
    await db.query(
      `INSERT INTO actions (userid, username, email, action) values ($1, $2, $3, 'create')`,
      [newPerson.rows[0].id, name, email]
    )
    res.json(newPerson.rows)
  }

  async updateUser(req, res) {
    const { id, name, email } = req.body

    if (name !== undefined) {
      // если в запросе передано имя изменяем его
      await db.query(`UPDATE users SET username = $1 where id = $2`, [name, id])
    }

    if (email !== undefined) {
      // если в запросе передан email изменяем его
      await db.query(`UPDATE users SET email = $1 where id = $2`, [email, id])
    }

    // получаем из db обновленные данные
    const person = await db.query(`SELECT * from users WHERE id=$1`, [id])

    // записываем в лог информацию об изменении пользователя
    await db.query(
      `INSERT INTO actions (userid, username, email, action) values ($1, $2, $3, 'update')`,
      [person.rows[0].id, person.rows[0].username, person.rows[0].email]
    )

    res.json(person.rows) // возвращаем обновленные данные
  }

  async getUsers(req, res) {
    const persons = await db.query(`SELECT * from users`)

    res.json(persons.rows)
  }
}

module.exports = new UserController()
