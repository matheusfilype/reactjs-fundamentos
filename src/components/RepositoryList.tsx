import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

export interface IRepo {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repos, setRepos] = useState<IRepo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        {repos.map((repo) => {
          return <RepositoryItem key={repo.name} repository={repo} />;
        })}
      </ul>
    </section>
  );
}
