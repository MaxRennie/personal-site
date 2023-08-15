import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import projectList from "@/app/projectlist.json";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div>
        <h1 className="text-black">Projects</h1>
      </div>
      <div className="text-black">
        {projectList.map((project) => (
          <div key={project.id}>
          <div key={project.id} className="bg-[url('{{project.featimage[0]}}')]">
            <h3 className="text-customRed font-staatlisches text-2xl">{project.name}</h3>
            <h4 className="text-black font-staatslisches text-xl pt-2">{project.category}</h4>
            <p className="text-black text-lg font-splinesans pt-2">{project.description}</p>
            <div className="flex flex-col my-2 md:pt-6 md:pr-20 px-10 bg-gray-400 h-[100%] max-w-2xl relative">
                <Image
                  className="object-cover"
                  src={project.featimage[0]}
                  alt={project.featimage[1]}
                  fill
                />
            </div>
        </div>
        ))}
      </div>
    </>
  );
}
