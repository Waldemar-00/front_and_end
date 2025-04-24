import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res) => {
	if (req.body) {
		console.log(req.body)
		res.send(req.body)
	} else {
		console.log('Send data')
		const dt = {
			name: 'ULADZIMIR',
			age: 43,
		}
		res.json(dt)
	}
})
app.listen(8000, '127.0.0.1', () => console.log('http://127.0.0.1:8000'))
