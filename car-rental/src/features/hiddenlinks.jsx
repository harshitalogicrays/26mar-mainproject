import { Container } from "react-bootstrap"
import Header from "./Header"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/authSlice"

export const UserLayout=({children})=>{
    return (<>
            <Header/>
            <Container>
                  {children}
            </Container>
        </>)
}

export const ShowOnLogIn=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    if(isLoggedIn)return children
    else return null
}

export const ShowOnLogout=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    if(!isLoggedIn)return children
    else return null
}