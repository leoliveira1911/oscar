import React, {useState} from 'react'
import Category from '../components/Category'
import Layout from '../components/Layout'
import Nominated from '../components/Nominated'
import axios from 'axios'

function Home() {
	const selection: {category: String; nominee: string}[] = []
	const user = localStorage.getItem('user')

	function selectNominee(nominee: string, category: string) {
		let test = false
		selection.forEach(el => {
			if (el.category === category) {
				el.nominee = nominee
				test = true
			}
		})
		if (test === false) {
			selection.push({category, nominee})
		}
		console.log(selection)
		const highlight = document
			.getElementById(`${category}`)
			?.getElementsByClassName(`${category}`)
		if (highlight) {
			for (let el of Array.from(highlight)) {
				if (el.id === nominee) {
					el.className = `
				${category}
			bg-black text-[#ebab47] bg-opacity-100 m-2 p-2 rounded-xl w-4/5 
			flex justify-between items-center
			hover:bg-opacity-100
	
		`
				} else {
					el.className = `
				${category}
			bg-black text-[#ebab47] bg-opacity-75 m-2 p-2 rounded-xl w-4/5 
			flex justify-between items-center
			hover:bg-opacity-100
	
		`
				}
			}
		}
		console.log(highlight)
		save(category, nominee)

		return selection
	}

	async function getVotes(user: string) {
		const userGet = user
		console.log('GET TASKS NA ÁREA, BEATCHES')
		axios
			.get('http://localhost:3002/api/get', {
				params: {
					user: userGet,
				},
			})
			.then(resp => {
				console.log(resp.data)
			})
	}
	async function save(category: string, nominee: string) {
		await axios.post('http://localhost:3002/api/create', {
			user,
			category,
			nominee,
		})
		if (user) {
			getVotes(user)
		}
	}

	return (
		<Layout title="Indicados ao Oscar">
			<Category title="Melhor Filme">
				<Nominated
					name="Titanic"
					img="/titanic.jpg"
					category="Melhor Filme"
					select={selectNominee}
				/>
				<Nominated
					name="Avatar: O caminho da água"
					img="/avatar.jpg"
					category="Melhor Filme"
					select={selectNominee}
				/>
				<Nominated
					name="Batman"
					img="/batman.jpg"
					category="Melhor Filme"
					select={selectNominee}
				/>
				<Nominated
					name="teste1"
					img="/logo192.png"
					category="Melhor Filme"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Ator">
				<Nominated
					name="Leonardo di Caprio"
					category="Melhor Ator"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="RDJ"
					category="Melhor Ator"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="ABC"
					category="Melhor Ator"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="DEF"
					category="Melhor Ator"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Atriz">
				<Nominated
					name="Atriz1"
					category="Melhor Atriz"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Atriz2"
					category="Melhor Atriz"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Atriz3"
					category="Melhor Atriz"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Atriz4"
					category="Melhor Atriz"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Música">
				<Nominated
					name="Música1"
					category="Melhor Música"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Música"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Música"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Música"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
		</Layout>
	)
}

export default Home
