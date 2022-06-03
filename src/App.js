import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "react-toastify/dist/ReactToastify.css"
import './assets/css/App.css'
import { Toast, Loader, Footer, Header } from './components'
import { useState, useEffect } from 'react'
import AppNavigator from './navigation/AppNavigator'

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1)
  }, [])

  return loading ? <Loader /> : <div className="App">
    <Toast />
    <AppNavigator>
      <Header />
    </AppNavigator>
    <Footer />
  </div>
}

export default App