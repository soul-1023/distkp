import {useState, useEffect} from 'react'
import Sidebar from './components/sidebar/Sidebar'
import ScrollWrapper from './components/scroll-wrapper/ScrollWrapper'

function App() {
	let [curAddr, setCurAddr] = useState('/')
	let [prevAddr, setPrevAddr] = useState('')
	let [links, setLinks] = useState([])
	let [data, setData] = useState([])

	const responseToBack = async address => {
		if(curAddr !== address) {
			setPrevAddr(curAddr)
			setCurAddr(address)
		}

		return fetch(`http://back-distkp/api${address}`)
			.then(res => res.json())
	}

	const useLoadContent = (address, e) => {
		e?.preventDefault()

		responseToBack(address).then(content => {
			setData(content)
		})
	}

	const useReturnBack = () => {
		useLoadContent(prevAddr)
	}

	useEffect(() => {
		// подгружаем меню
		responseToBack('/courses/top').then(courses => {
			setLinks(courses)
		})

		// подгружаем начальную страницу
		responseToBack('').then(content => {
			setData(content)
		})
	}, [])

	return (
		<div>
			<Sidebar 
				courses={links}
				handleClick={useLoadContent}
			/>

			<ScrollWrapper 
				data={data}
				handleClick={useLoadContent}
				returnBack={useReturnBack}
			/>
		</div>
	)
}

export default App;
