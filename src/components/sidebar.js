import React, {useState} from 'react';
import { BiGridAlt, BiUserCircle, BiWrench, BiMenuAltLeft } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItems = [
        {
            path:'/',
            name:'Dashboard',
            icon: <BiGridAlt/>
        },
        {
            path:'/account',
            name:'Account',
            icon:<BiUserCircle/>
        },
        {
            path:'/settings',
            name:'Settings',
            icon: <BiWrench/>
        },
    ]
    return(
        <div className='container'>
            <div style={{width: isOpen ? '15vw' : '4vw' }} className='sidebar'>
                <div className='top-section'>
                    <h1 style={{display: isOpen ? 'block' : 'none' }} className='logo'>Logo</h1>
                    <div style={{marginLeft: isOpen ? '20px' : '0px' }} className='bars'>
                        <BiMenuAltLeft onClick={toggle}/>
                    </div>
                </div>
                {menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? 'block' : 'none' }} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
        
    );
}

export default Sidebar;