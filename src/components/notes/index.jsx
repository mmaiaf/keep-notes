import { Container } from "./style";
import { Tag } from "../tags"

export function Notes({ data, ...rest}){
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}