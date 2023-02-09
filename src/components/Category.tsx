import React from 'react'
import Nominated from './Nominated'
interface CategoryProps {
	title: string
	children: any
}

export default function Category(props: CategoryProps) {
	return (
		<div
			id={props.title}
			className={`
		bg-black bg-opacity-50 self-center w-2/3 m-4 py-2 rounded-xl
		flex flex-col justify-center items-center text-center
		`}>
			<h1
				className={`
			text-2xl 
			`}>
				{props.title}
			</h1>
			{props.children}
		</div>
	)
}
