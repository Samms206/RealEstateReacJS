import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import {motion} from 'framer-motion'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth < 768) {
            return {
                right: !menuOpened && '-100%'
            }
        }
    }
    return (
        <section className='h-wrapper'>
            <motion.div className="flexCenter paddings innerWidth h-container"
            initial={{y: "-2rem", opacity: 0}} 
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2, type: 'spring'}}
            >
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="#">Residence</a>
                        <a href="#">Our Value</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Get Started</a>
                    <button className='button'>
                            <a href="#">Contact</a>
                    </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </motion.div>
        </section>
    )
}

export default Header