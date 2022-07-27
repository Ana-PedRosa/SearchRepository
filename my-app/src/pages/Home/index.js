import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
    const navigate = useNavigate();
    const [ usuario, setUsuario ] = useState('');
    const [ erro, setErro ] = useState(false);
    
    function handleSearch() {
      axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));     
        setErro(false);
        navigate('./repositories');
      })
      .catch(err => {
        setErro(true);
      });
    }
    return(
      <S.Container>
        <>
          <S.Title>Buscar Repositórios:</S.Title>
        </>
        <S.FlexContainer>
          <S.Input className='usuarioImput' placeholder='Usuário' value={ usuario } onChange={e => setUsuario(e.target.value)} />
          <S.Button type='button' onClick={handleSearch}>Pesquisar</S.Button>
        </S.FlexContainer>
        <>
        {erro ? <S.ErroMsg>Ocorreu um erro! Tente novamente.</S.ErroMsg> : ''}
        </>
      </S.Container>
    )
}
