import React from 'react';
import { useParams, Link } from 'react-router-dom';

function RepositoryDetail({ repos }) {
  const { id } = useParams();
  // filter the particular repo from entire list of repos
  const repo = repos.find((r) => r.id === parseInt(id, 10));

  if (!repo) {
    return <div>Repository not found.</div>;
  }

  return (
    <div>
      <h2>{repo.name}</h2>
      <ul>
        <li>Description: {repo.description}</li>
        <li>Language(s): {repo.language}</li>
        <li>Forks: {repo.forks}</li>
        <li>Open Issues: {repo.open_issues}</li>
        <li>Watchers: {repo.watchers}</li>
      </ul>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Visit Repo
      </a>
      <p>
        <Link to="/">Back to Repositories</Link>
      </p>
    </div>
  );
}

export default RepositoryDetail;