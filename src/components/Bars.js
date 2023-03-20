import styled from 'styled-components'

const Divs = styled.div`
    display: flex;
    padding: 10px;
`
const Anchors = styled.a`
    text-decoration: none;
    color: #FFF;
    padding: 5px;
    margin: 5px;
    &:hover{
        color: #0c84b4;
    }
`
const Bars = ({ id }) => {
    switch (id) {
        case 'menu':
            return (
                <Divs>
                    <Anchors href='#welcome-section' className='animation'>About me</Anchors>
                    <Anchors href='#projects' className='animation'>My works</Anchors>
                    <Anchors href='#aptitudes' className='animation'>Language</Anchors>
                    <Anchors href='#profile-flex' className='animation'>Contact</Anchors>
                </Divs>
            )
    }
}


export default Bars