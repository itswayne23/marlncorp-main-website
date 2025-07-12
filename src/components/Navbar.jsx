function Navbar() {
  return (
    <nav className="w-[90vw] h-20 bg-white border-t-2 border-purple-300 flex m-auto items-center justify-between px-8">
      <div className="flex items-center">
        <img src="/ll.webp" alt="MARLN logo" className="h-10 w-auto" />
      </div>
      <ul className="flex space-x-10 mr-4 text-gray-800 font-medium text-lg">
        <li><a href="#who">Who We Are</a></li>
        <li><a href="#what">What We Do</a></li>
        <li><a href="#products">Our Products</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
