import React, { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { FiChevronRight, FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepository, setNewRepository] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storedRepositories) {
      const parsedRepositories = JSON.parse(storedRepositories);
      return parsedRepositories;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const searchedRepository = repositories.find(
      repository => repository.full_name === newRepository,
    );

    if (searchedRepository) {
      setNewRepository('');
      setInputError(`Repositório ${newRepository} já está listado`);
      return;
    }

    if (!newRepository) {
      setInputError(`Digite o autor/nome do repositório`);
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setInputError('');
    } catch (Err) {
      setNewRepository('');
      setInputError(`Erro na busca por ${newRepository}`);
    }
  }

  function handleCloseRepository(
    event: MouseEvent<SVGElement>,
    repositoryName: string,
  ): void {
    event.preventDefault();

    const indexRepository = repositories.findIndex(
      repository => repository.full_name === repositoryName,
    );

    repositories.splice(indexRepository, 1);

    setRepositories([...repositories]);
  }

  return (
    <>
      <Container>
        <img src={logoImg} alt="Github Explorer" />
        <Title>Explore repositórios no Github</Title>

        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
          <input
            value={newRepository}
            onChange={e => setNewRepository(e.target.value.toLowerCase())}
            placeholder="Ex: facebook/react"
          />
          <button type="submit">Pesquisar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}

        <Repositories isMobile={isMobile}>
          {repositories.map(repository => (
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
              <FiXCircle
                size={20}
                className="close"
                onClick={e => handleCloseRepository(e, repository.full_name)}
              />
            </Link>
          ))}
        </Repositories>
      </Container>
    </>
  );
};

export default Dashboard;
