import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import ProjectPreview from '../components/Project_Preview'


const Home: NextPage = () => {
  return (
    <div>
      <Profile />
      <div className="mt-4">
        <ProjectPreview />
      </div>
    </div>
  )
}

export default Home
 