import './Footer.css';

const Footer = ({}) => {

    return (
        
        <>
        <footer>
<div className="cajafoot">
    <div>
        <img src="https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_1280.png" alt="#"/>
    </div>
    <div className="us">
        <h3>Nosotros</h3>
        <p>
Una organización de adopción de perros rescata, cuida y busca hogares amorosos para perros abandonados o maltratados, brindándoles atención médica y apoyo hasta encontrarles un hogar permanente.</p>
</div>
<div className="contacto" id="contacto">
    
    <ul> <h3>Contacto</h3>
        <li><a target="_blank" href="https://github.com/Cheskalala">Github</a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/ms-mellado/">LinkedIn</a></li>
        <li><a target="_blank" href="cheskalala.dev">My Website</a></li>
        <li><a  href="#">Whatsapp</a></li>
    </ul>
</div>
</div>
</footer>
    </>

);
};

export default Footer