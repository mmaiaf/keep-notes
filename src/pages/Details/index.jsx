import { Container, Links, Content } from "./styles";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Section } from "../../components/section";
import { Tag } from "../../components/tags";
import { ButtonText } from "../../components/button_text";

export function Details() {
    return(
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText title="Excluir Marcador" />
                    
                    <h1>Introdução ao React</h1>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>

                    <Section title="Links">
                        <Links>
                            <li>
                                <a href="#">https://rocketnotes.com</a>
                            </li>
                            <li>
                                <a href="#">https://rocketnotes.com</a>
                            </li>
                        </Links>
                    </Section>
                    
                    <Section title="Marcadores">
                        <Tag title="Express"/>
                        <Tag title="Nodejs"/>
                    </Section>
                    
                    <Button title="Voltar" />
                </Content>
            </main>

        </Container>
    )
};