import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Profile from '../components/Profile'
import ProjectPreview from '../components/Project_Preview'


const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <div>
        <ProjectPreview />
      </div>
      <Footer />
      
      
    </div>
  )
}

export default Home
 