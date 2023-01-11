import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/Login'
import Home from './pages/Home'

import reportWebVitals from './reportWebVitals'
import MyBets from './pages/MyBets'
import Ranking from './pages/Ranking'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="login"
					element={<Login />}
				/>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/mybets"
					element={<MyBets />}
				/>
				<Route
					path="/ranking"
					element={<Ranking />}
				/>
				<Route />
			</Routes>
		</BrowserRouter>
	)
}

root.render(<App />)
