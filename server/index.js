import cors from 'cors'
import 'dotenv/config'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.get('/api', (req, res) =>
	res.status(200).json({ message: 'Главная страница' })
)
app.get('/about', (req, res) =>
	res.status(200).json({ message: 'Страница о нас' })
)

app.use((req, res) => {
	res.status(404).json({ message: 'Страница не найдена' })
})

app.use((req, res) => {
	res.status(500).json({ message: 'Ошибка сервера' })
})

const start = async () => {
	app.listen(PORT, () => console.log(`Server listen http://localhost:${PORT}`))
}

start()
