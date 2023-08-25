
import { Link } from 'react-router-dom';
// component to show the entire repo list from Godaddy Github
function RepositoryList({ repos }) {
    return (
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/${repo.id}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    );
  }

export default RepositoryList;