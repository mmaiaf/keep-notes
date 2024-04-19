import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

export function Header(){
    return(    
    <Container>
    <Profile to="/Profile">
            <img 
            src="https://github.com/mmaiaf.png"
            alt="Foto do usuário"
            />
            <div>
                <span>Bem vindo,</span>
                <strong>Matheus Maia</strong>
            </div>
    </Profile>

    <Logout>
        <RiShutDownLine />
    </Logout>
    </Container>
    )
}