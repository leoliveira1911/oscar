import React from 'react'

interface TitleProps {
	title: string
}

export default function Title(props: TitleProps) {
	return <h1 className="self-center text-5xl">{props.title}</h1>
}
