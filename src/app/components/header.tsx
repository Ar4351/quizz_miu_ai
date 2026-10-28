import  Link  from "next/link";
const Header = () => {
    return(
      <div className="group fixed top-0 left-0 w-28 h-16 z-50 flex items-center px-2">
  { }
  <span className="transition-opacity duration-500 ease-in-out group-hover:opacity-0 text-gray-500 font-medium text-base">
  <h1 className="text-3xl font-bold">G.quizz</h1>
  </span>
  {}
  <header className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
    <nav className="w-max px-4 py-2.5 flex gap-2 ">
      <Link className="underline text-lg text-wheat-700 hover:text-gray-900 transition-colors duration-300 py-3" href="/quizz">Sample</Link>
      <Link className="underline text-lg text-wheat-700 hover:text-gray-900 transition-colors duration-300 py-3" href="/quizz/new">New Quiz</Link>
    </nav>
  </header>
</div>

    
    
    )
}
export default Header;