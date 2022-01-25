import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import projectImage from "../public/phone.jpg";



const Project1: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">Project 2</h1>
      <Image alt="project2-img" src={projectImage}/>
    <div className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam mollitia adipisci deleniti ea quis expedita numquam neque earum! Quam delectus magnam a ipsam totam minima quisquam quas, dignissimos sit.</div>
    <div className="mt-6">
       <Link href="/">
        <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
    </div>
    </div>
  )
}

export default Project1;
 