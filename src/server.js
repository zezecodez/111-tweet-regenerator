const express = require('express')
const routes = require('./server/routes')
const middleware = require('./server/middleware')

const app = express()
const port = process.env.PORT || 3333

// const bot = require('./bot')

app.set('view engine', 'ejs');
app.set('views', 'src/views/pages')

app.use('/', middleware)
app.use('/', routes)
// app.use('/', bot)

app.use((req, res) => {
  res.render('not_found')
})
app.listen(port, () => {
  console.log('Listening on port::: ', port)
})
