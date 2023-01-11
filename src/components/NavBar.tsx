import React from 'react'
import {useNavigate} from 'react-router'
import Button from './Button'
import NavItem from './NavItem'
import Title from './Title'
import {LogOutIcon} from '../icons/index'

interface NavBarProps {
	title: string
}

export default function NavBar(props: NavBarProps) {
	const navigate = useNavigate()
	function logOut() {
		localStorage.clear()
		navigate('/login')
	}

	return (
		<div className="flex flex-col">
			<Title title={props.title} />
			<div className="flex justify-center">
				<NavItem
					title="Indicados"
					url="/"
				/>
				<NavItem
					title="Minhas Apostas"
					url="/mybets"
				/>
				<NavItem
					title="Ranking"
					url="/ranking"
				/>
				<Button
					function={logOut}
					style={'fixed left-1 bottom-1 bg-red-500'}>
					{LogOutIcon}
				</Button>
			</div>
		</div>
	)
}
