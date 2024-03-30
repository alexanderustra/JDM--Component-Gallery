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
}
export function NavBar ({logo,logoAlt,children,type,width,asset}:NavBarProps) {
    const navbarStyle = {
        width: width
    }
    const renderAssetComponent = () => {
        switch (asset) {
            case "searchBar":
                return <Input name='searchBar' />;
            case "hamburguerMenu":
                return <HamburguerMenu background='none'>
                <p>Home</p>
                <p>Components</p>
                <p>Docs</p>
                <p>Blog</p>
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