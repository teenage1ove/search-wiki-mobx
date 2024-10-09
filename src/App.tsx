import { Search } from './components/Search'
import { SearchWithDebounce } from './components/SearchWithDebounce'

function App() {
	return (
		<div className='app'>
			<h1 className='app__title'>Search Wikipedia</h1>
			<Search />
			{/* <SearchWithDebounce /> */}
		</div>
	)
}

export default App
