import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import AppContextProvider from  './contexts/AppContextProvider'
import { AppContext } from './Context/AppContext.jsx'
// import AppContextProvider from '../../03 - React Advanced/blogs-context-starter/src/Context/AppContext.js'


ReactDOM.createRoot(document.getElementById('root')).render(
<AppContext>
<App />
</AppContext>
)
