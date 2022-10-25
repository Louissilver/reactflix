/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Button, ButtonExcluir } from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gotflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: &nbsp;
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        })
          .then(() => {
            console.log('Cadastro realizado com sucesso!');
            alert('Cadastro realizado com sucesso!');
            history.push('/');
          });
      }}
      >


        <FormField
          placeholder="Categoria"
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
        <br />
        <br />
        <Button as={Link} className="ButtonLink" to="/">
          Home
        </Button>
      </form>

      <br />
      <h2>Categorias</h2>
      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
            <ButtonExcluir onClick={() => {
              categoriasRepository.deleteCategoria(categoria.id)
                .then(() => {
                  history.push('/');
                });
            }}
            >
              Excluir
            </ButtonExcluir>
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
