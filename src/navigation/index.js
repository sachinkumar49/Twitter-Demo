import React from 'react';
import { Link} from 'react-router-dom';
import './nav.css';

const Navigation = () =>{
    return (
        <nav className="Nav">
            <ul>
                <li>
                <Link to="/">Tweets</Link>
                </li>
                <li>
                <Link to="/trends">Trends</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;