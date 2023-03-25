import { SiWhatsapp, SiGithub, SiInstagram, SiFacebook } from "react-icons/si";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import obtainData from '../helpers/requestProjects';

const cargarImagen = require.context("../../public/projects/images", true);

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`

const Img = styled.img`
    width: 25rem;
    height: auto;
    border-radius: 50%;
`

const MySection = ({ id }) => {
    const [proyectos, setProyectos] = useState([]);
    useEffect(() => {
        if (id === 'projects') {
            obtainData()
                .then(res => setProyectos(res.data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    switch (id) {
        case 'welcome-section':
            return (
                <section id={id} >
                    <Container >
                        <Img id='photoPerfil' src={cargarImagen("./perfilws.jpg")} />
                        <h1>Hey I am Juan Luis</h1>
                        <p>a web developer</p>
                        <a href='./about.html' >If u want to know more about me visit my profile here</a>
                    </Container>
                </section >
            )

        case 'projects':
            return (
                <section id={id}>
                    <Container>
                        <h2 style={{ borderBottom: '0.2rem solid #f0f0f0', margin: '0 auto 10rem auto' }}> Here any some projects made by me </h2>
                        <div id='project-grid'>
                            {
                                proyectos.length === 0
                                    ? <div>Cargando...</div>
                                    : proyectos.map(proyecto => {
                                        return (<div className='project' key={proyecto.name}>
                                            <a href={proyecto.url}>
                                                <img src={cargarImagen(proyecto.img)} className='project-image' alt='imageProject' />
                                                <p>{proyecto.name}</p>
                                            </a>
                                        </div>)
                                    })
                            }

                        </div>
                    </Container>
                </section >
            )

        case 'aptitudes':
            return (
                <section id={id}>
                    <Container >
                        <h2> Competency </h2>
                        <ul id='apt-info'>
                            <li>
                                <h3>JAVASCRIPT</h3>
                                <p>Solid knowledge in javascript, as well as in html and css were also acquired in a self-taught way and complemented with different courses such as those of FreeCodeCamp platform in which you can observe the practices carried out, also driven by the logic learned thanks to the Bachelor's Degree in Computing that I am studying at the UCV</p>
                            </li>
                            <li>
                                <h3>NODEJS</h3>
                                <p >In the Node.js course I took, I learned to work with different third-party modules, such as mongoose, express, dotenv, handlebars, etc. In this course I carried out different projects, both a console weather application and a REST- SERVER in which I implemented the CRUD methodology using MONGO DB and its 'Mongoose' module for node. I am currently developing a project that deals with a website for a gym with product sales, user registration, among other things, to put my knowledge into practice in Node.</p>
                            </li>
                            <li>
                                <h3>REACT</h3>
                                <p>In the REACT.JS course I took, I learned to use different libraries such as YUP, FORMIK, STYLED-COMPONENTS, also importing the FONT-AWESOME library. This page is made entirely with the react framework and is still under development.</p>
                            </li>
                        </ul>
                    </Container>
                </section>
            )
        case 'profile-links':
            return (
                <section id='profile-flex'>
                    <Container>
                        <a href="https://wa.me/+584241888345"><SiWhatsapp id='iconWhats' className='iconFont' /></a>
                        <a href="https://github.com/juanlps94"><SiGithub id='iconGit' className='iconFont' /></a>
                        <a href="https://www.facebook.com/juanluis.perez.37"><SiFacebook id='iconFace' className='iconFont' /></a>
                        <a href="https://instagram.com/juanlps54"><SiInstagram id='iconInst' className='iconFont' /></a>
                    </Container>
                </section>
            )
        default:
            break
    }
}

export default MySection 