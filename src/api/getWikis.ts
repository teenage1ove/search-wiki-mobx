import axios from 'axios'
import { WikiResponse } from './interfaces/wiki-interface'

export type Posts = {
	userId: number
	id: number
	title: string
	body: string
}

export async function getWikis(value: string) {
	if (!value) {
		return []
	}
	
	return (
		await axios.get<WikiResponse>(
			`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${value}&origin=*`
		)
	).data.query.search
}
