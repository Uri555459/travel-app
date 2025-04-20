import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { instanceAxios } from '@/lib'

export const About: FC = () => {
	const [data, setData] = useState<string>()

	useEffect(() => {
		instanceAxios
			.get('/about')
			.then(({ data: { message } }) => setData(message))
	}, [])

	return <div>{data}</div>
}
