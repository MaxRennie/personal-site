import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Max Rennie</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto bg-white">
        <nav className="container mx-auto px-10 pt-10 mb-2">
          <div>
            <ul className="flex items-center">
              {/* <li><BsFillMoonStarsFill /></li> */}
              <li className="font-staatlisches text-4xl bg-black text-white hover:text-black hover:bg-black py-2 px-3 mr-4 ">
                <a href="https://www.maxrennie.com"><h1>Max Rennie</h1></a>
              </li>
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
          </div>
        </nav>
        <div className="h-1 mt-2 bg-customRed"></div>

        <div className="container mx-auto bg-white px-10 flex flex-row">
          <section className="bg-white min-h-screen text-black basis-3/4">
            <div className="flex flex-col pt-4">
              <h2 className="font-staatlisches text-4xl py-2">Development, Design, Branding, Creativity.</h2>
              <p className="font-oxygen text-lg py-2">
                I have a passion for creating beautiful, functional and
                accessible websites and applications. I am always looking for
                new opportunities to learn and grow as a developer, designer and
                creative.
              </p>
            </div>
          </section>

          <section className="basis-1/4 border-l-4 border-black">
            <div>
              <img
                className="max-w-full max-h-60 border-b-4 border-r-4 border-b-black border-r-customRed"
                src="../portrait-sq.webp"
                alt="portrait"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
