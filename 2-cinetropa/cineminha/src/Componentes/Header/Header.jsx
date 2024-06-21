import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header className=" bg-black text-white p-3 ">
          
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-3xl mt-3 mb-3 text-colorTitle font-medium tracking-tight">CINE TROPA</h1>
                <NavBar/>
           
            </div>
        </header>
     );
}
export default Header;