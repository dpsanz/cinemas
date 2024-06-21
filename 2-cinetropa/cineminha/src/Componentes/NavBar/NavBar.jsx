import {Link} from 'react-router-dom'

function NavBar() {
    return ( 
        <nav>
            <ul className='flex gap-3 ml-3 text-colorTxt font-bold'>
                <li className='hover:underline'><Link to = "/">HOME</Link></li>
                <li className='hover:underline'><Link to = "filmes">FILMES</Link></li>
                <li className='hover:underline'><Link to = "news">NEWS</Link></li>
            </ul>
        </nav>
     );
}

export default NavBar;