import React from 'react'
interface ButtonProps {
	children: any
	style?: string
	function: (e: any) => void
}
export default function Button(props: ButtonProps) {
	return (
		<button
			onClick={props.function}
			className={`
  bg-gray-700 p-3 rounded-xl ${props.style} flex justify-center items-center
  `}>
			{props.children}
		</button>
	)
}
