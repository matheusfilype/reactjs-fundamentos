import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState } from "react";

export function RepositoryList() {
  const [] = useState();

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositoryItem
          repository={{
            name: "unform",
            description: "GCB Cursos",
          }}
        />
      </ul>
    </section>
  );
}
