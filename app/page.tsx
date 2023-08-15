import Head from "next/head";
import Image from "next/image";
import projectlist from "@/app/projectlist.json";
export async function generateStaticParams() {
  return projectlist.map((p) => ({
    uniquepage: p.id.toString(),
  }));
}

export default function Home() {
  return (
    <div>
      <main className="mx-auto bg-white">
        <div className="container mx-auto bg-white flex flex-col md:flex-row flex-wrap h-fit">
          <section className="bg-white text-black basis-1/2 lg:basis-3/4">
            <div className="flex flex-col md:pt-6 md:pr-20 px-10">
              <div className="flex-col justify-center">
                {/* <p className="xs:block sm:hidden md:hidden lg:hidden xl:hidden ">xs</p>
                <p className="xs:hidden sm:block md:hidden lg:hidden xl:hidden ">sm</p>
                <p className="xs:hidden sm:hidden md:block lg:hidden xl:hidden ">md</p>
                <p className="xs:hidden sm:hidden md:hidden lg:block xl:hidden ">lg</p>
                <p className="xs:hidden sm:hidden md:hidden lg:hidden xl:block ">xl</p>
                <p className="xs:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block ">2xl</p> */}

                <h2 className="font-staatlisches text-4xl pl-0 py-6">
                  Hi, I&apos;m <span className="text-customRed">Max</span> - a
                  digital creator based in Ipswich, Suffolk
                </h2>
              </div>
              <div>
                <p className="font-splinesans text-lg py-4">
                  Perhaps you’re here so you can read a little{" "}
                  <a className="text-customRed relative group" href="">
                    <span className="">about me</span>
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-customRed transition-all group-hover:w-full"></span>
                  </a>
                  , see some of the{" "}
                  <a className="text-customRed relative group" href="">
                    <span className="">designs</span>
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-customRed transition-all group-hover:w-full"></span>
                  </a>{" "}
                  I’ve been working on,{" "}
                  <a className="text-customRed relative group" href="">
                    <span className="">websites</span>
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-customRed transition-all group-hover:w-full"></span>
                  </a>{" "}
                  I’ve been building, or maybe{" "}
                  <a className="text-customRed relative group" href="">
                    <span className="">get in touch</span>
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-customRed transition-all group-hover:w-full"></span>
                  </a>{" "}
                  about a project we can work on together.
                </p>
                {/* <p className="font-splinesans text-lg py-4">Crack on buh.</p> */}
                <div className="sm:hidden md:h-1 md:mt-2 md:w-screen md:overflow-auto md:bg-black md:absolute md:left-0"></div>
              </div>
            </div>
          </section>
          <section className="basis-1/2 md:pt-12 lg:pt-0 lg:basis-1/4 lg:border-l-black lg:border-l-4">
            <div className="w-60 h-60 relative border-y-4 border-x-4 border-l-black border-b-black border-r-customRed border-t-customRed lg:border-t-0 mx-auto md:mx-10 lg:m-0 lg:border-l-0">
              <Image className="" src="/portrait-sq.webp" alt="portrait" fill />
            </div>
            {/* <div className="sm:h-1 mt-2 sm:w-screen sm:overflow-auto sm:bg-black sm:absolute sm:left-0 md:hidden"></div> */}
          </section>
          <section className="bg-white text-black md:basis-3/4 md:h-[65vh] xl:h-[50vh]">
            <div className="flex flex-col mt-5 md:pt-6 md:pr-20 px-10 h-[50vh]">
              <h3 className="font-staatlisches text-customRed text-2xl pl-0">
                Latest Work:
              </h3>
              {/* TODO: Make Dynamic */}
              <div className="flex flex-col my-2 md:pt-6 md:pr-20 px-10 bg-gray-400 h-[100%] max-w-2xl relative">
                <Image
                  className="object-cover"
                  src={projectlist[projectlist.length - 1].featimage[0]}
                  alt={projectlist[projectlist.length - 1].featimage[1]}
                  fill
                />
              </div>
            </div>
          </section>
          <section className="basis-1/4 lg:border-l-4 border-black lg:h-screen">
            <div className="flex flex-col mt-10 pl-10 pb-20">
              <h4 className="text-customRed font-staatlisches text-2xl">
                {projectlist[projectlist.length - 1].name}
              </h4>
              <h5 className="text-black font-staatlisches text-xl pt-2">
                {projectlist[projectlist.length - 1].category}
              </h5>
              <p className="text-black text-lg font-splinesans pt-2">
                {projectlist[projectlist.length - 1].description}
              </p>

                <a className="py-5" href="/projects">
                  <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg font-staatlisches shadow">
                    <div className="absolute inset-0 w-3 bg-customRed transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">
                      See more of my work
                    </span>
                  </button>
                </a>
ƒ
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
