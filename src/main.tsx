import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es/exports'
import {store} from './redux/store.js'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <BrowserRouter>
 <Provider store={store}>
  <App />
 </Provider>
 </BrowserRouter>
)
