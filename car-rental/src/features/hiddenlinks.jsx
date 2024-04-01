import { Container } from "react-bootstrap"
import Header from "./Header"

export const UserLayout=({children})=>{
    return (<>
            <Header/>
            <Container>
                  {children}
            </Container>
        </>)
}