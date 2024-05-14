import styles from './navbar.module.css'
import { SearchBar } from '../searchBars/SearchBar'
interface NavBarProps {
    logo?:string
    width?:string
    logoAlt?:string
    children: React.ReactNode
    searchBar?: Boolean
    searchBarFunction?: (value:string)=> void
}
export function NavBar ({logo,logoAlt,children,width,searchBar,searchBarFunction}:NavBarProps) {
    const navbarStyle = {
        width: width
    }
    const userFunction = (value:string)=>{
        if(searchBarFunction) {
            searchBarFunction(value)
        }
    }
    return (
        <div className={styles.navBar} style={navbarStyle}>
            <img src={logo} alt={logoAlt} />
            <div className={styles.content}>
                {children}
            </div>
            {searchBar && <SearchBar onClick={userFunction} />}
        </div>
    )
}