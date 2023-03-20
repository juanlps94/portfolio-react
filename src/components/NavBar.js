import styled from 'styled-components'
import Bars from './Bars.js'

const Navbar = styled.nav`
    background: #963b47;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const NavBar = () => {
    return (
        <Navbar>
            <Container>
                <Menu>
                    <Bars id='menu' />
                </Menu>
            </Container>
        </Navbar>
    )
}

export default NavBar