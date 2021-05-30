import './sidebar.css';
import logo from './distkp.svg';
import {useEffect} from 'react';
import Link from '../menu-link/MenuLink';

function Sidebar({courses, handleClick}) {

    // анимация открытия и закрытия бокового меню
    useEffect(() => {
        const $ = id => document.getElementById(id)

        if(!$('side-panel').hasAttribute('focus')) {
            $('menu').style.display = 'none'
        }

        $('side-panel').addEventListener('mouseenter', () => {
            $('side-panel').style.height = '100%'

            $('side-panel').addEventListener('transitionend', () => {
                if($('side-panel').style.height === '100%') {
                    $('menu').style.display = 'flex'
                }
            })
        })

        $('side-panel').addEventListener('mouseleave', () => {
            $('menu').style.display = 'none'
            $('side-panel').style.height = '35vh'
        })
    }, []);

    return (
        <div id="side-panel">
            <div className="wrap-menu">

                <div id="logo">
                    <a href="/">
                        <img
                            src={logo} 
                            alt="Главная"
                        />
                    </a>
                </div>

                <div id="menu">
                    <ul>
                        <Link handleClick={handleClick} />

                        {
                            courses.map(e => {
                                return <li key={e.id}>
                                    <Link
                                        id={e.id}
                                        handleClick={handleClick}
                                        name={e.name}
                                    />
                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;