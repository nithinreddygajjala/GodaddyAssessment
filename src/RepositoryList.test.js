import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoryList from './RepositoryList';

const mockRepos = [
  { id: 1, name: 'repo1' },
  { id: 2, name: 'repo2' },
];

test('renders list of repository links', () => {
  const { getAllByRole } = render(
    <MemoryRouter>
      <RepositoryList repos={mockRepos} />
    </MemoryRouter>
  );

  const linkElements = getAllByRole('link');
  expect(linkElements).toHaveLength(mockRepos.length);

  linkElements.forEach((linkElement, index) => {
    expect(linkElement).toHaveTextContent(mockRepos[index].name);
    expect(linkElement.getAttribute('href')).toBe(`/${mockRepos[index].id}`);
  });
});
