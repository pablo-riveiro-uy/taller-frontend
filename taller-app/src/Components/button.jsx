import React from 'react'

export default function Button({ color, children }) {
	const colorVariants = {
		blue: 'bg-sky-600 hover:bg-sky-300',
		orange: 'bg-orange-600 holver:bg-orange-300',
	}


	return (
		<div className={`${colorVariants[color]} `}>
			{children}
		</div>
	)
}
