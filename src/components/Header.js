import NavBar from './NavBar.js'
import MySection from './MySection.js'


const Header = () => {
    return (
        <header style={{ height: '100vh' }}>
            <NavBar />
            <MySection id='welcome-section' />
        </header>
    )
}


export default Header