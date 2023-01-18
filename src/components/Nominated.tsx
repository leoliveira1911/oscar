import React from 'react'

interface NominatedProps {
	name: string
	img: any
	category: string
	select?(e: string, f: string): void
}

export default function Nominated(props: NominatedProps) {
	return (
		<div
			id={props.name}
			onClick={() => {
				props.select?.(props.name, props.category)
			}}
			className={`
			${props.category}
        bg-black text-[#ebab47] bg-opacity-75 m-2 p-2 rounded-xl w-4/5 
        flex justify-between items-center
        hover:bg-opacity-100

    `}>
			<div className="flex flex-1 justify-center">{props.name}</div>
			<img
				src={props.img}
				width="100"
				alt={props.name}
			/>
		</div>
	)
}
