import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use((req, res) => {
	res.status(404).json({ message: 'Страница не найдена' })
})

app.use((req, res) => {
	res.status(500).json({ message: 'Ошибка сервера' })
})

app.listen(PORT, () => console.log(`Server listen http://localhost:${PORT}`))
