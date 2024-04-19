import { Container, Form } from "./style";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import { Section } from "../../components/section";
import { NoteItem } from "../../components/noteitem";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input 
                    placeholder="Título"
                    type="text"
                    />

                    <Textarea 
                    placeholder="Observações"
                    />

                    <Section title="Links Úteis">
                        <NoteItem value="https://github.com.br"/>
                        <NoteItem isNew placeholder="Novo Link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="react"/>
                        <NoteItem isNew placeholder="Nova Tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
};