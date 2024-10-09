const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const person = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://rebecca:${password}@cluster0.tpjoj.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery',false)

mongoose.connect(url)

const entrySchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Entry = mongoose.model('Entry', entrySchema)

if (person && number ) {
    const entry = new Entry({
        name: person,
        number: number,
    })
    
    entry.save().then(result => {
      console.log('entry saved!')
      mongoose.connection.close()
    })

} else {
    Entry.find({}).then(result => {
        result.forEach(entry => {
          console.log(`${entry.name} ${entry.number}`)
        })
        mongoose.connection.close()
      })
}


