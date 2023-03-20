import styled from "styled-components"

const Myfooter = styled.footer`
    background-color: #303841;
`
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: right;
    padding: 20px 0;
`
const Footer = () => {
    return (
        <Myfooter>
            <Container>
                <p>This page has made by Juan Luis Perez Siso &copy;</p>
            </Container>
        </Myfooter>
    )
}

export default Footer