import React, {useState} from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import {useEffect} from 'react'
import Category from '../components/Category'
import Nominated from '../components/Nominated'
import {server} from 'typescript'

export default function MyBets() {
	let votes: {
		id: number
		user: string
		category: string
		nominee: string
	}[] = []

	useEffect(() => {
		getVotes(user)
	}, [])

	const user = localStorage.getItem('user')
	const [votesTeste, setVotes] = useState([])
	async function getVotes(user: string | null) {
		const userGet = user
		console.log('GET TASKS NA ÁREA, BEATCHES')
		await axios
			.get('http://localhost:3002/api/get', {
				params: {
					user: userGet,
				},
			})
			.then(data => setVotes(data.data))
	}
	console.log('votes' + votes)
	function renderVotes(
		arrayOfVotes: {
			id: number
			user: string
			category: string
			nominee: string
		}[]
	) {
		return arrayOfVotes.map(vote => {
			return (
				<Category
					key={arrayOfVotes.indexOf(vote)}
					title={vote.category}>
					<Nominated
						category={vote.category}
						name={vote.nominee}
						img={`/${vote.nominee}.jpg`}
					/>
				</Category>
			)
		})
	}

	return (
		<Layout title="Minhas Apostas">
			<div className="flex flex-col justify-center items-center">
				{renderVotes(votesTeste)}
			</div>
		</Layout>
	)
}
