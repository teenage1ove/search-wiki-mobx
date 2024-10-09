import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { RootStoreContext } from './stores/root-store-context.ts'
import RootStore from './stores/root-store.ts'

createRoot(document.getElementById('root')!).render(
	<RootStoreContext.Provider value={new RootStore()}>
		<App />
	</RootStoreContext.Provider>
)