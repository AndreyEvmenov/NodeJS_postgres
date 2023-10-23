const express = require('express')
const userRouter = require('./routes/user.routes')
const logRouter = require('./routes/log.routes')

const PORT = process.env.port || 8080

const app = express()

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', logRouter)

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
