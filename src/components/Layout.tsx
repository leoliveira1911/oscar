import React, {useEffect} from 'react'
import {useNavigate} from 'react-router'
import Content from './Content'
import NavBar from './NavBar'

interface LayoutProps {
	title: string
	children: any
}

export default function Layout(props: LayoutProps) {
	const user = localStorage.getItem('user')
	const navigate = useNavigate()
	console.log(user)
	function redirectToLogin() {
		return navigate('/login')
	}

	useEffect(() => {
		if (!user) {
			redirectToLogin()
		}
	}, [])
	return (
		<div className="flex flex-col h-screen bg-[#ebab47]">
			<div className="flex-none h-28 bg-[#ebab47]">
				<NavBar title={props.title} />
			</div>
			<div className="flex-1 bg-[#ebab47]">
				<Content>{props.children}</Content>
			</div>
		</div>
	)
}
