import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { LuLoader2 } from 'react-icons/lu'
import { useStores } from '../stores/root-store-context'

export const SearchList = observer(function ({
	value,
	type,
}: {
	value: string
	type: 'button' | 'debounce'
}) {
	const {
		wiki: { wikis, getWikisAction, isLoading },
	} = useStores()

	useEffect(() => {
		if (type === 'button') {
			return
		}
		getWikisAction(value)
	}, [value])

	return (
		<div className='search__result'>
			{isLoading ? (
				<div className='search__loader'>
					<LuLoader2 />
				</div>
			) : wikis.length > 0 ? (
				<div className='search__list'>
					{wikis.map(wiki => (
						<a
							className='search__list-item'
							key={wiki.pageid}
							target='_blank'
							href={`https://en.wikipedia.org/wiki/${wiki.title}`}
						>
							{wiki.title}
						</a>
					))}
				</div>
			) : (
				<div></div>
			)}
		</div>
	)
})
