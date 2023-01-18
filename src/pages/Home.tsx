import React, {useEffect, useState} from 'react'
import Category from '../components/Category'
import Layout from '../components/Layout'
import Nominated from '../components/Nominated'
import axios from 'axios'

function Home() {
	// const selection: {category: String; nominee: string}[] = []

	const user = localStorage.getItem('user')

	useEffect(() => {
		if (user) {
			getVotes(user)
		}
	}, [])

	function selectNominee(nominee: string, category: string) {
		let test = false
		// selection.forEach(el => {
		// 	if (el.category === category) {
		// 		el.nominee = nominee
		// 		test = true
		// 	}
		// })
		// if (test === false) {
		// 	selection.push({category, nominee})
		// }
		// console.log(selection)
		// highlight(category, nominee)

		save(category, nominee)

		// return selection
	}

	function highlight(category: string, nominee: string) {
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
				resp.data.map((vote: {category: string; nominee: string}) => {
					highlight(vote.category, vote.nominee)
				})
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
			<Category title="Melhor Direção">
				<Nominated
					name="Titanic"
					img="/titanic.jpg"
					category="Melhor Direção"
					select={selectNominee}
				/>
				<Nominated
					name="Avatar: O caminho da água"
					img="/avatar.jpg"
					category="Melhor Direção"
					select={selectNominee}
				/>
				<Nominated
					name="Batman"
					img="/batman.jpg"
					category="Melhor Direção"
					select={selectNominee}
				/>
				<Nominated
					name="teste1"
					img="/logo192.png"
					category="Melhor Direção"
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
			<Category title="Melhor Ator Coadjuvante">
				<Nominated
					name="Música1"
					category="Melhor Ator Coadjuvante"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Ator Coadjuvante"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Ator Coadjuvante"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Ator Coadjuvante"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Atriz Coadjuvante">
				<Nominated
					name="Música1"
					category="Melhor Atriz Coadjuvante"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Atriz Coadjuvante"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Atriz Coadjuvante"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Atriz Coadjuvante"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Roteiro Original">
				<Nominated
					name="Música1"
					category="Melhor Roteiro Original"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Roteiro Original"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Roteiro Original"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Roteiro Original"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Roteiro Adaptado">
				<Nominated
					name="Música1"
					category="Melhor Roteiro Adaptado"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Roteiro Adaptado"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Roteiro Adaptado"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Roteiro Adaptado"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Fotografia">
				<Nominated
					name="Música1"
					category="Melhor Fotografia"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Fotografia"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Fotografia"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Fotografia"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Filme Internacional">
				<Nominated
					name="Música1"
					category="Melhor Filme Internacional"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Filme Internacional"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Filme Internacional"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Filme Internacional"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Design de Produção">
				<Nominated
					name="Música1"
					category="Melhor Design de Produção"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Design de Produção"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Design de Produção"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Design de Produção"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Figurino">
				<Nominated
					name="Música1"
					category="Melhor Figurino"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Figurino"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Figurino"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Figurino"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Maquiagem e Cabelo">
				<Nominated
					name="Música1"
					category="Melhor Maquiagem e Cabelo"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Maquiagem e Cabelo"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Maquiagem e Cabelo"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Maquiagem e Cabelo"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Som">
				<Nominated
					name="Música1"
					category="Melhor Som"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Som"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Som"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Som"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Edição">
				<Nominated
					name="Música1"
					category="Melhor Edição"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Edição"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Edição"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Edição"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Canção Original">
				<Nominated
					name="Música1"
					category="Melhor Canção Original"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Canção Original"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Canção Original"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Canção Original"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Trilha Sonora Orinial">
				<Nominated
					name="Música1"
					category="Melhor Trilha Sonora Orinial"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Trilha Sonora Orinial"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Trilha Sonora Orinial"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Trilha Sonora Orinial"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Curta-Metragem em Live-action">
				<Nominated
					name="Música1"
					category="Melhor Curta-Metragem em Live-action"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Curta-Metragem em Live-action"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Curta-Metragem em Live-action"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Curta-Metragem em Live-action"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Animação em Curta-Metragem">
				<Nominated
					name="Música1"
					category="Melhor Animação em Curta-Metragem"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Animação em Curta-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Animação em Curta-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Animação em Curta-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Documentário em Curta-Metragem">
				<Nominated
					name="Música1"
					category="Melhor Documentário em Curta-Metragem"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Documentário em Curta-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Documentário em Curta-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Documentário em Curta-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Animação em Longa-Metragem">
				<Nominated
					name="Música1"
					category="Melhor Animação em Longa-Metragem"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Animação em Longa-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Animação em Longa-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Animação em Longa-Metragem"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Documentário">
				<Nominated
					name="Música1"
					category="Melhor Documentário"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Documentário"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Documentário"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Documentário"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
			<Category title="Melhor Efeitos Visuais">
				<Nominated
					name="Música1"
					category="Melhor Efeitos Visuais"
					img="/titanic.jpg"
					select={selectNominee}
				/>
				<Nominated
					name="Música2"
					category="Melhor Efeitos Visuais"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música3"
					category="Melhor Efeitos Visuais"
					img="/logo192.png"
					select={selectNominee}
				/>
				<Nominated
					name="Música4"
					category="Melhor Efeitos Visuais"
					img="/logo192.png"
					select={selectNominee}
				/>
			</Category>
		</Layout>
	)
}

export default Home
