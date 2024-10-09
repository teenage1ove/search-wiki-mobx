import { makeAutoObservable, runInAction } from 'mobx'
import { getWikis } from '../api/getWikis'
import { SearchWikisRes } from '../api/interfaces/wiki-interface'

class WikiStore {
	wikis: SearchWikisRes[] = []
	isLoading = false
	constructor() {
		makeAutoObservable(this)
	}

	getWikisAction = async (value: string) => {
		try {
			this.isLoading = true
			const res = await getWikis(value)

			runInAction(() => {
				this.wikis = res
				this.isLoading = false
			})
            
		} catch (error) {
			this.isLoading = false
		}
	}
}

export default new WikiStore()
