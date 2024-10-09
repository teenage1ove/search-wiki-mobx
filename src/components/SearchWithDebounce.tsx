import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { SearchList } from './SearchList'

export const SearchWithDebounce = observer(function () {
	const [inputValue, setInputValue] = useState('')
	const debouncedValue = useDebounce(inputValue)

	return (
		<div className='search'>
			<div>
				<input
					className='search__input'
					type='text'
					onChange={event => {
						setInputValue(event.target.value)
					}}
				/>
			</div>
			<SearchList value={debouncedValue} type='debounce' />
		</div>
	)
})
