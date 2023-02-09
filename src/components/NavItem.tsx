import React from 'react'
import {Link} from 'react-router-dom'

interface NavItemProps {
	url: string
	title: string
}
export default function NavItem(props: NavItemProps) {
	return (
		<Link
			to={props.url}
			className={`bg-black bg-opacity-50  flex justify-center items-center
                                p-3 m-2 rounded-xl
                                text-lg    text-center
                                    `}>
			{props.title}
		</Link>
	)
}
