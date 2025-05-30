import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { LayoutDefault } from '@/layouts'

import { instanceAxios } from '@/lib'

export const Home: FC = () => {
	const [data, setData] = useState<string>()

	useEffect(() => {
		instanceAxios.get('/').then(({ data: { message } }) => setData(message))
	}, [])

	return (
		<LayoutDefault>
			<h1>Добро пожаловать в Travel app</h1>
		</LayoutDefault>
	)
}
