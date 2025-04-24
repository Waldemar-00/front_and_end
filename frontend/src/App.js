import './App.css'
import { useEffect, useState } from 'react'

function App() {
	const [person, setPerson] = useState()
	useEffect(() => {
		fetch('http://127.0.0.1:8000')
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				setPerson(json)
			})
			.catch((error) => console.log(error))
	}, [])
	return (
		<div className='App'>
			<h1>{person?.name}</h1>
			<h2>{person?.age}</h2>
		</div>
	)
}

export default App
