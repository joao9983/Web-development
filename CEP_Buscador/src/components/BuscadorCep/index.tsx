import { FiSearch } from "react-icons/fi";
import "./styles.css";
import { useState } from "react";
import api from "../../services/api";
import { Input, Container } from "./styles";

const BuscadorCep = () => {
  const [input, setInput] = useState("");

  //evitar valores nulos
  const [response, setresponse] = useState({
    data: {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
    },
  });

  async function handleSearch() {
    if (input === "") {
      alert("Preencha um CEP válido");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setresponse(response);
      console.log(response);
    } catch (error) {
      alert("Erro ao buscar, tente novamente");
    }
  }

  return (
    <Container className="container">
      {/* titulo */}
      <h1 className="title">Buscar CEP</h1>
      {/* caixa de texto */}
      <div className="containerInput">
        <Input
          className="input"
          type="text"
          placeholder="Digite o CEP... "
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        {/* botão de implementação */}
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={18} />
        </button>
      </div>

      {/* area de resultado da busca */}
      <main className="main">
        <h2> {response.data.cep}</h2>
        <span>{response.data.logradouro}</span>
        <span>{response.data.complemento}</span>
        <span>{response.data.bairro}</span>
        <span>
          {response.data.localidade} - {response.data.uf}
        </span>
      </main>
    </Container>
  );
};

export default BuscadorCep;
