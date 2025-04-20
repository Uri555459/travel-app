import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { LayoutDefault } from '@/layouts'

import { instanceAxios } from '@/lib'

export const About: FC = () => {
	const [data, setData] = useState<string>()

	useEffect(() => {
		instanceAxios
			.get('/about')
			.then(({ data: { message } }) => setData(message))
	}, [])

	return (
		<LayoutDefault>
			<h1>О Travel app</h1>
		</LayoutDefault>
	)
}
