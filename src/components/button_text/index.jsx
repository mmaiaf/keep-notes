import { Container } from "./style";

export function ButtonText({ title, isactive, ...rest}) {
    return(<Container 
    type="button"
    $isactive={isactive}
    {...rest}
    >
        {title}
    </Container>
    )
}