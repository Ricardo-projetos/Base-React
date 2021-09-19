interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }    
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>         {/*propss.repository?.name ?? 'uniform' ==> repository?.name se essa propriedade não existir não irá apresentar erro, ?? é a mesma coisa de || (or)*/}     
            <strong> {props.repository?.name}  </strong> 
            <p>{props.repository?.description}</p>

            <a href={props.repository?.html_url}>
                Acessar repositório
            </a>
        </li>
    )
}