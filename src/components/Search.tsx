import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useStores } from '../stores/root-store-context'
import { SearchList } from './SearchList'

export const Search = observer(function () {
	const [inputValue, setInputValue] = useState('')

	const {
		wiki: { getWikisAction },
	} = useStores()

	return (
		<div className='search'>
			<div>
				<input
					className='search__input'
					type='text'
                    placeholder='Input...'
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            getWikisAction(inputValue)
                        }
                    }}
					onChange={event => {
						setInputValue(event.target.value)
					}}
				/>
				<button
					className='search__button'
					onClick={() => {
						getWikisAction(inputValue)
					}}
				>
					Search
				</button>
			</div>
			<SearchList value={inputValue} type='button' />
		</div>
	)
})
