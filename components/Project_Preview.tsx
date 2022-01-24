const ProjectPreview = () => {

  const title: string = "Project 1";
  const desc: string = "Description of project here";

  return (
    <div>
      <a href={"/"} className="font-bold underline hover:text-indigo-600">{title}</a>
      <div>{desc}</div>
    </div>
  );
}

export default ProjectPreview;