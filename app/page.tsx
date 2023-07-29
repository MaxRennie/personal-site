import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="md:h-screen md:overflow-hidden">
      <Head>
        <title>Max Rennie</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto bg-white">
        <nav className="container mx-auto px-10 pt-10 mb-2 lg:px-32">
          <div>
            <ul className="flex flex-wrap-reverse items-center">
              {/* <li><BsFillMoonStarsFill /></li> */}
              <li className="font-staatlisches text-4xl bg-black text-white hover:text-black hover:bg-black py-2 px-3 mr-4 ">
                <a href="https://www.maxrennie.com">
                  <h1>Max Rennie</h1>
                </a>
              </li>
              <li>
                <ul className="flex">
                  <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                    <a href="">About</a>
                  </li>
                  <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                    <a href="">Projects</a>
                  </li>
                  <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                    <a href="">Contact</a>
                  </li>
                  <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                    <a href="">Blog</a>
                  </li>
                  <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                    <a href="">CV</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="h-1 mt-2 w-screen bg-customRed overflow-hidden"></div>

        <div className="container mx-auto bg-white md:px-10 flex flex-col-reverse md:flex-row lg:px-32 flex-wrap h-min">
          <section className="bg-white text-black md:basis-3/4">
            <div className="flex flex-col md:pt-6 md:pr-20 px-10">
              <div className="flex-col justify-center">
                <h2 className="font-staatlisches text-4xl pl-0 py-6">
                  Hi, I'm <span className="text-customRed">Max</span> - a
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
                  about a project we can work on together. Crack on buh.
                </p>
                <div className="h-1 mt-2 w-screen overflow-auto bg-black absolute left-0"></div>
              </div>
            </div>
          </section>
          <section className="basis-1/4 md:border-l-4 border-black">
            <div>
              <img
                className="max-w-full min-w-fit max-h-60 border-l-4 border-b-4 border-r-4 border-l-black border-b-black border-r-customRed mx-auto md:m-0 md:border-l-0"
                src="../portrait-sq.webp"
                alt="portrait"
              />
            </div>
          </section>
          <section className="bg-white h-min text-black md:basis-3/4">
            <div className="flex flex-col mt-5 md:pt-6 md:pr-20 px-10 h-[50vh]">
              <h3 className="font-staatlisches text-2xl pl-0">Latest Work:</h3>
              {/* TODO: Make Dynamic */}
              <div className="flex flex-col my-2 md:pt-6 md:pr-20 px-10 bg-gray-400 h-[100%]"></div>
            </div>
          </section>
          <section className="basis-1/4 md:border-l-4 border-black h-[calc(100vh-96px)]">
            <div className="flex flex-col mt-10 md:pt-6 md:pr-20 px-10 h-[50vh]">
              <h4 className="text-black font-staatlisches text-xl">
                {/* TODO: Make Dynamic */}
                Work Title
              </h4>
              <h5 className="text-black font-staatlisches text-lg">
                {/* TODO: Make Dynamic */}
                Work Category
              </h5>
              {/* TODO: Make Dynamic */}
              <p className="text-black font-splinesans">Work Description</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
