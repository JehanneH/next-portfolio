import type { NextPage } from 'next'
import Profile from '../components/Profile'
import ProjectPreview, { ProjectPreviewInterface } from '../components/Project_Preview'



const Home: NextPage = () => {

  const projectMetaDataArray = [];

  projectMetaDataArray.push(
    {
      title: "Project 1",
      desc: "Description of project here",
      linkUrl: "/project1",
      image: "/code.jpg",
    }
  )
  projectMetaDataArray.push(
    {
      title: "Project 2",
      desc: "Description of project here",
      linkUrl: "/project2",
      image: "/phone.jpg",
    }
  )
  projectMetaDataArray.push(
    {
      title: "Project 3",
      desc: "Description of project here",
      linkUrl: "/project3",
      image: "/graph.jpg",
    }
  )

  const projectPreviewElements = [];
  
  for (let i = 0; i < projectMetaDataArray.length; i++) {
    const metaData = projectMetaDataArray[i];
    const element = <ProjectPreview {...metaData} key={i}/>
    projectPreviewElements.push(element)
  }
  
  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-4">
        {projectPreviewElements}
      </div>
    </div>
  )
}

export default Home
 