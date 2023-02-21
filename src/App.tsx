import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component />
                }
                />
            )) }
          </Routes>
        </Provider>
    </BrowserRouter>
  )
}

export default App