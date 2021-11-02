import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, CircularProgress, Container, Typography } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Olimpios"}
        subtitle={
          "Preencha com o seu cep e veja todos os profissionais e locais para sua saude"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            variant={"outlined"}
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {erro && <Typography color={"error"}>{erro}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      description={item.email}
                      description1={item.cidade}
                      description2={item.descriçao}
                    />
                  );
                })}
              </ProfissionaisContainer>

              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço
                  </Typography>
                )}

                <a href={"http://127.0.0.1:8000/web/cadastrar_diarista"}>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    sx={{ mf: 6 }}
                  >
                    Cadastrar 
                  </Button>
                </a>
                <a href= {"http://127.0.0.1:8000/listar_diaristas"}>
                <Button
                    variant={"contained"}
                    color={"secondary"}
                    sx={{ ml: 5 }}
                  >
                    Ver mais
                  </Button>
                </a>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhum profissional e estabelecimento disponível em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
