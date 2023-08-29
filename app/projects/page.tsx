import projectList from "@/app/projectlist.json";

export default function Projects() {
  return (
    <div className="mx-auto bg-white pt-10">
      <div className="container mx-auto bg-white flex flex-col md:flex-row flex-wrap">
        <div className="text-black flex flex-wrap justify-center pt-8">
          {projectList.map((project) => (
            // <div key={project.id} style={{background-image:url("${project.featimage[0]}")}}>
            <div key={project.id} className="group relative flex items-center py-4 md:py-0 ">
              <div className="w-96 h-auto z-10 hidden group-hover:block absolute px-8">
                <h3 className="text-white font-staatlisches text-2xl">
                  {project.name}
                </h3>
                <h4 className="text-white font-staatslisches text-xl pt-2">
                  {project.category}
                </h4>
                <p className="text-white text-lg font-splinesans pt-2">
                  {project.description}
                </p>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-center w-96 h-96 group-hover:blur z-0"
                style={{ backgroundImage: "url(" + project.featimage[0] + ")" }}
              ></div>
              <div className="w-96 h-96 absolute top-0 group-hover:bg-black opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
