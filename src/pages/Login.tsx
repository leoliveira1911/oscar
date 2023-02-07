import React from 'react'
import {auth} from '../firebase/firebase'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import Button from '../components/Button'

export default function Login() {
	const navigate = useNavigate()
	async function login() {
		const provider = new GoogleAuthProvider()
		await signInWithPopup(auth, provider)
			.then(result => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				// Saves a user on the browser
				const user = result.user
				localStorage.setItem('user', user.uid)
				//  Saves the user UID and userName in back end.
				if (user.displayName) {
					localStorage.setItem('userName', user.displayName)
				}
			})
			.catch(error => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
				// ...
			})

		const user = localStorage.getItem('user')
		if (user != null) {
			console.log('tou no if')
			return navigate('/')
		}
	}

	return (
		<div
			style={{
				backgroundImage: 'url(/background.jpeg)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundSize: 'cover',
			}}
			className="h-screen flex flex-col items-center justify-center">
			<Button
				style="mt-96  bg-black bg-opacity-50 text-yellow-500"
				function={login}>
				Login com o Google
			</Button>
		</div>
	)
}
