import React, { useEffect, useState} from 'react';
import * as S from './styled';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Repositories() {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName != null){
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
    }else{
      alert("Usuário não encontrado!");
      Navigate('./Home');
    }
  }, []);
  
  return (
    <S.Container>
      <S.Title>Repositórios Encontrados</S.Title>
      <S.List>
        {repositories.map(repository => {
            return(
              <S.ListItem>Repositório: {repository}</S.ListItem>
            )
        })}
      </S.List>

      <S.LinkHome to="/" >Voltar</S.LinkHome>
    </S.Container>
  );
}

