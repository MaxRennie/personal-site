export default function About() {
  return (
    <nav className="fixed bg-white z-50">
      <div className="container mx-auto px-10 pt-10 mb-2 lg:px-32">
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
                  <a href="/about">About</a>
                </li>
                <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                  <a href="/projects">Projects</a>
                </li>
                <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                  <a href="/contact">Contact</a>
                </li>
                <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                  <a href="/blog">Blog</a>
                </li>
                <li className="font-staatlisches text-lg text-black hover:text-white hover:bg-black p-2 mr-4">
                  <a
                    href="/Max_Rennie_CV.pdf"
                    alt="Author's CV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-1 mt-2 w-screen bg-customRed overflow-hidden"></div>
    </nav>
  );
}
