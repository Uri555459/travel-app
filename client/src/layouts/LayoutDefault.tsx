import type { FC, ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const LayoutDefault: FC<Props> = ({ children }) => {
	return <div>{children}</div>
}
