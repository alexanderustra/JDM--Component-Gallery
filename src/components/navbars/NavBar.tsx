import styles from './navbar.module.css'
import { SearchBar } from '../searchBars/SearchBar'
interface NavBarProps {
    textColor?:string
    logo?:string
    width?:string
    logoAlt?:string
    children: React.ReactNode
    searchBar?: Boolean
    searchBarFunction?: (value:string)=> void
}
export function NavBar ({logo,logoAlt,children,width,searchBar,searchBarFunction,textColor}:NavBarProps) {
    const navbarStyle = {
        width: width,
        color:textColor
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
            <div className={styles.searchbarContainer}>
                {searchBar && <SearchBar onClick={userFunction} width='100%' color='#464646'/>}
            </div>
        </div>
    )
}