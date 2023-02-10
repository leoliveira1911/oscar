import React from 'react'

interface NominatedProps {
	name: string
	img: any
	category: string
	label?: string
	select?(e: string, f: string, i: string): void
}

export default function Nominated(props: NominatedProps) {
	return (
		<div
			id={props.name}
			onClick={() => {
				props.select?.(props.name, props.category, props.img)
			}}
			className={`
			${props.category}
        bg-black text-[#ebab47] bg-opacity-75 m-2 p-2 rounded-xl w-4/5 
        flex justify-between items-center
        hover:bg-opacity-100

    `}>
			<div className="flex flex-1 justify-between text-left m-3">
				<div className="flex flex-col">
					<h1 className="text-lg">{props.name}</h1>
					<h2 className="text-sm">{props.label}</h2>
				</div>
			</div>
			<img
				src={props.img}
				alt={props.name}
				className="w-1/5 rounded-md m-1"
			/>
		</div>
	)
}
