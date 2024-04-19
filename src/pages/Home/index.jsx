import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNotes } from "./style";

import { Header } from "../../components/header";
import { ButtonText } from "../../components/button_text";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Notes } from "../../components/notes";
import { Link } from "react-router-dom";


export function Home() {
    return(
    <Container>
        <Brand>
         <h1>Keep Notes</h1>
        </Brand>

        <Header>

        </Header>

        <Menu>
            <li><ButtonText title="Todos" /></li>
            <li><ButtonText title="React" /></li>
            <li><ButtonText title="Nodejs" /></li>
        </Menu>

        <Search>
            <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
        </Search>

        <Content>
            <Section title="Minhas Notas">
                <Notes data={{
                    title:"React",
                    tags: [
                        {id:'1', name:'react'},
                        {id:'2', name:'rocketseat'}
                    ]
                }} />
            </Section>
        </Content>

        <NewNotes to="/new">
            <FiPlus />
            Criar notas
        </NewNotes>
    </Container>
    )
};