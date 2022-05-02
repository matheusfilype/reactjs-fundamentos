import { IRepo } from "./RepositoryList";

interface IRepositoryItemProps {
  repository: IRepo;
}

export function RepositoryItem(props: IRepositoryItemProps) {
  return (
    <li>
      <strong>{props?.repository?.name ?? "Default"}</strong>

      <p>{props?.repository?.description ?? "Default"}</p>

      <a href={props?.repository?.html_url ?? "#"}>Acessar repositorio</a>
    </li>
  );
}
