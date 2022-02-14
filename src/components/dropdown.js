import React, { useState } from 'react';
import { Link } from 'gatsby';
import { dropDownButton, itemWrapper, dropDownList } from '../css/dropdown.module.css';
import resume from  '../images/VincentKim_resume.pdf';

const DropDown = () => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={itemWrapper}>
            <button className={dropDownButton} onClick={openMenu}>Menu</button>
            { showMenu && 
                <ul className={dropDownList}>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><a href={resume}>Resume</a></li>
                </ul>
            }
        </div>
    );
};

export default DropDown;
