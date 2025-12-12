import { NavLink } from "react-router-dom";

 const Navbar = () => {
  return (
   <nav className="bg-amber-500 px-6 py-5">
    <div className="flex flex-col" >
    <span className=" text-xl font-bold mb-2">My Daily Diary</span>
    </div>
     <ul className="flex justify-center gap-4 font-bold">
    <li><NavLink to ={'/Home'}>Home</NavLink></li>
    <li><NavLink to ={'/Note'}>Note</NavLink></li>
    
    
    </ul>
    
    
    </nav>
  )
}
export default Navbar;
