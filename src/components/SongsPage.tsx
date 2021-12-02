import { CardGroup, Container, Card, Row, Col } from "react-bootstrap";
import Music from "../interfaces/Music";

interface MusicDetailProps {
    music: Music
}

const SongsPage = ({music}: MusicDetailProps) => {
    return(
    <Container fluid= {true}>
        <CardGroup>
          <Card>
             <Card.Img variant="top" src={music.album.cover_medium} />
             <Card.Body>
                 <Card.Title>
                     {music.title_short}
                 </Card.Title>
             </Card.Body>
          </Card>    
          </CardGroup>
    </Container>
    )
}

export default SongsPage