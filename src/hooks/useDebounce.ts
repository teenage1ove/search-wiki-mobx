import { useEffect, useState } from 'react'

export function useDebounce(value: string, delay = 500) {
	const [debounceValue, setDebounceValue] = useState(value)
	useEffect(() => {
		let timeoutId = setTimeout(() => {
			setDebounceValue(value)
		}, delay)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [value, delay])
	return debounceValue
}
