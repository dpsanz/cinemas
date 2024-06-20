import {Link} from 'react-router-dom'

function NavBar() {
    return ( 
        <nav>
            <ul className='flex gap-3 ml-3 text-black font-bold'>
                <li><Link to = "/">HOME</Link></li>
                <li><Link to = "filmes">FILMES</Link></li>
                <li><Link to = "news">NEWS</Link></li>
            </ul>
        </nav>
     );
}

export default NavBar;