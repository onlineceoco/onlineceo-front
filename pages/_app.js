import '../styles/globals.css'
import '../styles/Sidebar.css'
import Router from 'next/router'
import {useState} from 'react'
import BetweenPage from '../components/Loading/betweenPage'
function MyApp({ Component, pageProps }) {
  const [loading,setLoading]=useState(false)
  Router.events.on('routeChangeStart',(url)=>{
    console.log('route is changing')
    setLoading(true)
  })
  Router.events.on('routeChangeComplete',(url)=>{
    console.log('route is complete')
    setLoading(false)
  })
  return (
    <>
    {loading && <BetweenPage/>}
    <Component {...pageProps} />
    </>
  )
}

export default MyApp