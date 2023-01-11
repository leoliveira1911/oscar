import React from 'react'
interface ContentProps {
	children: any
}

export default function Content(props: ContentProps) {
	return <div className=" h-full flex flex-col">{props.children}</div>
}
