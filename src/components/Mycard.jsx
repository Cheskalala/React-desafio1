import Card from 'react-bootstrap/Card';
import Boton from './Boton';

const MyCard = ({image, title, colorButton, textButton}) => {
    return (
    <>
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="bottom" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Boton colorButton={colorButton} textButton={textButton} />
    </Card.Body>
    </Card>
    </>
    );
    };
    
export default MyCard;
