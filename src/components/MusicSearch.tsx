import { Form, Container, Row, Col } from "react-bootstrap"
import { useState, useEffect, FormEvent, ChangeEvent } from "react"
import Music from "../interfaces/Music"
import SongsPage from "./SongsPage"

const MainSearch =  () => {
   
    const [musics, setMusic] = useState<Music[]>([])
    const [query, setQuery] = useState<string> ("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
 
    const handleSubmit = async (e: FormEvent) => {
       e.preventDefault()
       
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
     
        if(response.ok) {
            
            let {data} = await response.json()
         

            setMusic(data)
            console.log(data)
        }else{
            console.log("Problem occured while getting musics array")
        }

    }
    
        // console.log(musics)
   return(
       <Container className="mx-auto my-2">
         <Row>
             <Col>
             <Form onSubmit={handleSubmit}>
                 <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press enter" />
             </Form>
             {
           musics?.map((music) => (
             <SongsPage key={music.album.id} music={music} />
           ))}
             </Col>
         </Row>
       </Container>
   )
    
}

export default MainSearch