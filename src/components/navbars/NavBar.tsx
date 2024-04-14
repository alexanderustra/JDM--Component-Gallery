import styles from './navbar.module.css'

import { Input } from '../inputs/Input';
import { HamburguerMenu } from '../menus/HamburgerMenu';

interface NavBarProps {
    logo?:string
    width:string
    logoAlt?:string
    children: React.ReactNode;
    type:'top-large' | 'lat'
    asset?: "searchBar" | "hamburguerMenu"
    menuItems?: React.ReactNode;
}
export function NavBar ({logo,logoAlt,children,type,width,asset, menuItems}:NavBarProps) {
    const navbarStyle = {
        width: width
    }
    const renderAssetComponent = () => {
        switch (asset) {
            case "searchBar":
                return <Input name='searchBar' />;
            case "hamburguerMenu":
                return <HamburguerMenu background='none'>
                {menuItems}
              </HamburguerMenu>
            default:
                return null;
        }
    };
    return (
        <div className={styles[type]} style={navbarStyle}>
            <img src={logo} alt={logoAlt} />
            <div className={styles.content}>
                {children}
            </div>
            {renderAssetComponent()}
        </div>
    )
}