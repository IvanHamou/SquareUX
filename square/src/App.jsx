import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from './views/About'
import Products from './views/Products'
import Home from './views/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/about',
    element: <About />
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
