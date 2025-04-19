import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { instanceAxios } from '@/lib/instanceAxios'

export const Home: FC = () => {
	const [data, setData] = useState<string>()

	useEffect(() => {
		instanceAxios.get('/').then(response => setData(response.data.message))
	}, [data])

	return <div>{data}</div>
}
