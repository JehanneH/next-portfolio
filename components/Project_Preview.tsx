import Image from 'next/image'

const ProjectPreview = () => {

  const title: string = "Project 1";
  const desc: string = "Description of project here";

  return (
    <div className="flex gap-4">
      <div className="relative w-24 h-16">
        <Image src={"/code.jpg"} layout="fill"/>
      </div>
      <div className="my-auto">
        <a href={"/"} className="font-bold underline hover:text-indigo-600">{title}</a>
        <div>{desc}</div>
      </div>
    </div>
  );
}

export default ProjectPreview;