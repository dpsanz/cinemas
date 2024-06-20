import NavBar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className=" bg-white p-3 ">
          
            <div className="flex flex-row items-center justify-around">
                <h1 className="text-3xl mt-3 mb-3 text-black font-bold tracking-widest">
                    MYMOVIE
                </h1>
                <NavBar/>
           
            </div>
        </header>
     );
}
export default Header;