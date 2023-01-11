import React, {useState} from 'react'
import Category from '../components/Category'
import Layout from '../components/Layout'
import Nominated from '../components/Nominated'

function Home() {
	const selection: {category: String; nominee: string}[] = []

	function selectNomenee(nominee: string, category: string) {
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

		return selection
	}

	return (
		<Layout title="Indicados ao Oscar">
			<Category title="Melhor Filme">
				<Nominated
					name="Titanic"
					img="/titanic.jpg"
					category="Melhor Filme"
					select={selectNomenee}
				/>
				<Nominated
					name="Avatar: O caminho da água"
					img="/avatar.jpg"
					category="Melhor Filme"
					select={selectNomenee}
				/>
				<Nominated
					name="Batman"
					img="/batman.jpg"
					category="Melhor Filme"
					select={selectNomenee}
				/>
				<Nominated
					name="teste1"
					img="/logo192.png"
					category="Melhor Filme"
					select={selectNomenee}
				/>
			</Category>
			<Category title="Melhor Ator">
				<Nominated
					name="Leonardo di Caprio"
					category="Melhor Ator"
					img="/titanic.jpg"
					select={selectNomenee}
				/>
				<Nominated
					name="RDJ"
					category="Melhor Ator"
					img="/logo192.png"
					select={selectNomenee}
				/>
				<Nominated
					name="ABC"
					category="Melhor Ator"
					img="/logo192.png"
					select={selectNomenee}
				/>
				<Nominated
					name="DEF"
					category="Melhor Ator"
					img="/logo192.png"
					select={selectNomenee}
				/>
			</Category>
		</Layout>
	)
}

export default Home
