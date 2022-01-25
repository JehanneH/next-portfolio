import type { NextPage } from 'next'
import Profile from '../components/Profile'
import ProjectPreview from '../components/Project_Preview'


const Home: NextPage = () => {
  
  const title: string = "Project 1";
  const desc: string = "Description of project here";
  const linkUrl: string = "/project1";
  const image: string = "/code.jpg";
  
  return (
    <div>
      <Profile />
      <div className="mt-4">
        <ProjectPreview title={title} desc={desc} linkUrl={linkUrl} image={image}/>
      </div>
    </div>
  )
}

export default Home
 