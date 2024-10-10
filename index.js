require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Entry = require('./models/entry')

const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

morgan.token('body', req => {
  return JSON.stringify(req.body)
})

app.get('/api/people', (req, res) => {
  Entry.find({}).then(entries => {
    res.json(entries)
  })
})

app.get('/api/people/:id', (req, res) => {
  Entry.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error: 'Something went wrong' })
    })
})

app.get('/info', (req, res) => {
  Entry.countDocuments({})
    .then(count => {
      const currentDate = new Date()
      res.send(`
        <p>Phonebook has info for ${count} people.</p>
        <p>${currentDate}</p>
      `)
    })
})

app.delete('/api/people/:id', (req, res) => {
  Entry.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error: 'Something went wrong' })
    })
})

app.post('/api/people', (req, res) => {
  const body = req.body

  if (!body.name) {
    return res.status(400).json({ 
      error: 'name missing' 
    })
  }

  if (!body.number) {
    return res.status(400).json({ 
      error: 'number missing' 
    })
  }

  Entry.findOne({ name: body.name })
    .then(existingPerson => {
      if (existingPerson) {
        return res.status(400).json({ error: 'person already in phonebook' })
      } else {
        const person = new Entry({
          name: body.name,
          number: body.number,
        })

        person.save().then(savedPerson => {
          res.json(savedPerson)
        })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error: 'Something went wrong' })
    })
})

app.put('/api/people/:id', (req, res) => {
  const { name, number } = req.body
  const id = req.params.id

  if (!number) {
    return res.status(400).json({ error: 'Number is missing' })
  }

  const updatedPerson = { name, number }

  Entry.findByIdAndUpdate(id, updatedPerson, { new: true, runValidators: true, context: 'query' })
    .then(updatedEntry => {
      if (updatedEntry) {
        res.json(updatedEntry)
      } else {
        res.status(404).json({ error: 'Person not found' })
      }
    })
    .catch(error => {
      console.error(error)
      res.status(400).json({ error: 'Invalid ID format' })
    })
})


const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
