/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CssBaseline, Grid, Typography } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import "@fontsource/pacifico";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chart from "react-google-charts";
import _ from "lodash";
import Swal from "sweetalert2";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function personalidades() {
  const theme = createTheme();
  const useStyles = makeStyles(() => ({
    typography: {
      fontFamily: ["pacifico"].join(","),
      fontSize: "1.1rem",
    },
    paper: {
      marginTop: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [sendResponse, setSendResponse] = useState(false);
  const [send, setSend] = useState(false);
  const [afterSending, setAfterSending] = useState(false);
  const [afterResponse, setAfterResponse] = useState(false);
  const [chartData, setChartData] = useState([]);

  const [a, setA] = useState("");
  const [o, setO] = useState("");
  const [i, setI] = useState("");
  const [c, setC] = useState("");

  const pA = a.length * 4;
  const pO = o.length * 4;
  const pI = i.length * 4;
  const pC = c.length * 4;

  function loadData(data) {
    let values = _.map(data, (value) => [
      value.personalidade,
      value.porcentagem,
    ]);

    console.log("aaaa", [["Personalidade", "Porcentagem"], ...values]);

    return [["Personalidade", "Porcentagem"], ...values];
  }

  useEffect(() => {
    const data = [
      { personalidade: "Tubar??o", porcentagem: pA },
      { personalidade: "Lobo", porcentagem: pO },
      { personalidade: "??guia", porcentagem: pI },
      { personalidade: "Gato", porcentagem: pC },
    ];

    setChartData(loadData(data));
  }, [pA, pO, pI, pC]);

  async function handleSend(e) {
    e.preventDefault();
    setOpen(!open);
    setSend(true);
    setAfterSending(true);
    setA(state.filter((item) => item.opcao === "A"));
    setO(state.filter((item) => item.opcao === "O"));
    setI(state.filter((item) => item.opcao === "I"));
    setC(state.filter((item) => item.opcao === "C"));

    Swal.fire({
      title: "Sucesso!",
      text: `Dados enviados com Sucesso! \n `,
      icon: "success",
      confirmButtonText: "Ok",
    });
    setOpen(false);
  }

  function result() {
    setSendResponse(true);
    setAfterResponse(true);
  }

  // function handleClear() {
  //   setA("");
  //   setC("");
  //   setI("");
  //   setO("");
  // }

  const options = {
    title: "Avalia????o Comportamental",
  };

  return (
    <Container>
      <Typography class={classes.typography}>
        <h1>Teste de Avalia????o Comportamental</h1>
      </Typography>
      <Grid container>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu sou</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu sou"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 1 },
              ])
            }
          >
            <MenuItem value={"I"}>Idealista, criativo e vision??rio</MenuItem>
            <MenuItem value={"C"}>Divertido, espiritual e ben??fico</MenuItem>
            <MenuItem value={"O"}>Confi??vel, meticuloso e previs??vel</MenuItem>
            <MenuItem value={"A"}>Focado, determinado e persistente</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu gosto de</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 2 },
              ])
            }
          >
            <MenuItem value={"A"}>Ser piloto</MenuItem>
            <MenuItem value={"C"}>Conversar com os passageiros</MenuItem>
            <MenuItem value={"O"}>Planejar a viagem</MenuItem>
            <MenuItem value={"I"}>Explorar novas rotas</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Se voc?? quiser se dar bem comigo
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Se voc?? quiser se dar bem comigo"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 3 },
              ])
            }
          >
            <MenuItem value={"A"}>Me d?? liberdade</MenuItem>
            <MenuItem value={"C"}>Me deixa saber sua expectativa</MenuItem>
            <MenuItem value={"O"}>Lidere, siga ou saia do caminho</MenuItem>
            <MenuItem value={"I"}>
              Seja amig??vel, carinhoso e compreens??vel
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Para conseguir obter bons resultados ?? preciso
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Para conseguir obter bons resultados ?? preciso"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 4 },
              ])
            }
          >
            <MenuItem value={"I"}>Ter incertezas</MenuItem>
            <MenuItem value={"O"}>Controlar o essencial</MenuItem>
            <MenuItem value={"C"}>Divers??o e celebra????o</MenuItem>
            <MenuItem value={"A"}>Planejar e obter recursos</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu me divirto quando
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu me divirto quando"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 5 },
              ])
            }
          >
            <MenuItem value={"A"}>Estou me exercitando</MenuItem>
            <MenuItem value={"I"}>Tenho novidades</MenuItem>
            <MenuItem value={"C"}>Estou com os outros</MenuItem>
            <MenuItem value={"O"}>Determino Regras</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu penso que</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu penso que"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 6 },
              ])
            }
          >
            <MenuItem value={"C"}>
              Unidos venceremos, divididos perderemos
            </MenuItem>
            <MenuItem value={"A"}>O ataque ?? a melhor defesa</MenuItem>
            <MenuItem value={"I"}>
              ?? bom ser manso, mas andar com um porrete
            </MenuItem>
            <MenuItem value={"O"}>O homem prevenino vale por dois</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Minha preocupa????o ??
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Minha preocupa????o ??"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 7 },
              ])
            }
          >
            <MenuItem value={"C"}>Gerar a ideia global</MenuItem>
            <MenuItem value={"A"}>O ataque ?? a melhor defesa</MenuItem>
            <MenuItem value={"I"}>
              ?? bom ser manso, mas andar com um porrete
            </MenuItem>
            <MenuItem value={"O"}>O homem prevenino vale por dois</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu prefiro</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu prefiro"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 8 },
              ])
            }
          >
            <MenuItem value={"I"}>Perguntas a respostas</MenuItem>
            <MenuItem value={"O"}>Ter todos os detalhes</MenuItem>
            <MenuItem value={"A"}>Vantagens a meu favor</MenuItem>
            <MenuItem value={"C"}>
              Que todos tenham a chance de serem ouvidos
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu gosto de</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 9 },
              ])
            }
          >
            <MenuItem value={"A"}>Fazer progresso</MenuItem>
            <MenuItem value={"C"}>Construir mem??rias</MenuItem>
            <MenuItem value={"O"}>Fazer sentido</MenuItem>
            <MenuItem value={"I"}>Tornar as pessoas confort??veis</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu gosto de chegar
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de chegar"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 10 },
              ])
            }
          >
            <MenuItem value={"A"}>Na frente</MenuItem>
            <MenuItem value={"C"}>Junto</MenuItem>
            <MenuItem value={"O"}>Na hora</MenuItem>
            <MenuItem value={"I"}>Em outro lugar</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Um ??timo dia para mim ?? quando
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Um ??timo dia para mim ?? quando"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 11 },
              ])
            }
          >
            <MenuItem value={"A"}>Consigo fazer muitas coisas</MenuItem>
            <MenuItem value={"C"}>Me divirto com meus amigos</MenuItem>
            <MenuItem value={"O"}>Tudo segue conforme o planejado</MenuItem>
            <MenuItem value={"I"}>
              Desfruto de coisas novas e estimulantes
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu vejo a morte como
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu vejo a morte como"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 12 },
              ])
            }
          >
            <MenuItem value={"I"}>Uma grande aventura misteriosa</MenuItem>
            <MenuItem value={"C"}>Oportunidade para rever falecidos</MenuItem>
            <MenuItem value={"O"}>Um modo de receber recompensas</MenuItem>
            <MenuItem value={"A"}>Algo que sempre chega muito cedo</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Minha filosofia de vida ??
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Minha filosofia de vida ??"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 13 },
              ])
            }
          >
            <MenuItem value={"A"}>
              H?? ganhadores e perdedores, e eu acredito ser um ganhador
            </MenuItem>
            <MenuItem value={"C"}>Para ganhar, ningu??m precisa perder</MenuItem>
            <MenuItem value={"O"}>
              Para ganhar ?? precisa seguir as regras
            </MenuItem>
            <MenuItem value={"I"}>
              Para ganhar, ?? necess??rio inventar novas regras
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu sempre gostei de
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu sempre gostei de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 14 },
              ])
            }
          >
            <MenuItem value={"I"}>Explorar</MenuItem>
            <MenuItem value={"O"}>Evitar surpresas</MenuItem>
            <MenuItem value={"A"}>Focalizar a meta</MenuItem>
            <MenuItem value={"C"}>Realizar a abordagem natural</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu gosto de mudan??as se
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de mudan??as se"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 15 },
              ])
            }
          >
            <MenuItem value={"A"}>Me der uma vantagem competitiva</MenuItem>
            <MenuItem value={"C"}>
              For divertido e puder ser compartilhado
            </MenuItem>
            <MenuItem value={"I"}>Me der mais liberdade e variedade</MenuItem>
            <MenuItem value={"O"}>Melhorar ou me der mais controle</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            N??o existe nada errado em
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="N??o existe nada errado em"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 16 },
              ])
            }
          >
            <MenuItem value={"A"}>Se colocar na frente</MenuItem>
            <MenuItem value={"C"}>Colocar os outros na frente</MenuItem>
            <MenuItem value={"I"}>Mudar de ideia</MenuItem>
            <MenuItem value={"O"}>Ser consistente</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu gosto de buscar conselhos de
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de buscar conselhos de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 17 },
              ])
            }
          >
            <MenuItem value={"A"}>Pessoas bem sucedidas</MenuItem>
            <MenuItem value={"C"}>Anci??es e conselheiros</MenuItem>
            <MenuItem value={"O"}>Autoridades no assunto</MenuItem>
            <MenuItem value={"I"}>Lugares, os mais estranhos</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Meu lema ??</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Meu lema ??"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 18 },
              ])
            }
          >
            <MenuItem value={"I"}>Fazer o que precisar ser feito</MenuItem>
            <MenuItem value={"O"}>Fazer bem feito</MenuItem>
            <MenuItem value={"C"}>Fazer junto com grupo</MenuItem>
            <MenuItem value={"A"}>Simplesmente fazer</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu gosto de</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu gosto de"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 19 },
              ])
            }
          >
            <MenuItem value={"I"}>Complexidade, mesmo se confuso</MenuItem>
            <MenuItem value={"O"}>Ordem e sistematiza????o</MenuItem>
            <MenuItem value={"C"}>Calor humano e anima????o</MenuItem>
            <MenuItem value={"A"}>Coisas claras e simples</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            O tempo para mim ??
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="O tempo para mim ??"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 20 },
              ])
            }
          >
            <MenuItem value={"A"}>Algo que detesto desperdi??ar</MenuItem>
            <MenuItem value={"C"}>Um grande ciclo</MenuItem>
            <MenuItem value={"O"}>Uma flecha que leva ao inevit??vel</MenuItem>
            <MenuItem value={"I"}>Irrelevante</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Se eu fosse bilion??rio
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Se eu fosse bilion??rio"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 21 },
              ])
            }
          >
            <MenuItem value={"C"}>Faria doa????es para entidades</MenuItem>
            <MenuItem value={"O"}>Criaria uma poupan??a avantajada</MenuItem>
            <MenuItem value={"I"}>Faria o que desse na cabe??a</MenuItem>
            <MenuItem value={"A"}>
              Exibiria bastante com algumas pessoas
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu acredito que</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu acredito que"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 22 },
              ])
            }
          >
            <MenuItem value={"A"}>
              O destino ?? mais importante que a jornada
            </MenuItem>
            <MenuItem value={"C"}>
              A jornada ?? mais importante que o destino
            </MenuItem>
            <MenuItem value={"O"}>
              Um centavo economizado ?? um centavo ganho
            </MenuItem>
            <MenuItem value={"I"}>
              Bastam um navio e uma estrela para navegar
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu acredito tamb??m que
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu acredito tamb??m que"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 23 },
              ])
            }
          >
            <MenuItem value={"A"}>Aquele que hesita est?? perdido</MenuItem>
            <MenuItem value={"O"}>
              De gr??o em gr??o a galinha enche o papo
            </MenuItem>
            <MenuItem value={"C"}>O que vai, volta</MenuItem>
            <MenuItem value={"I"}>
              Um sorriso ou uma careta ?? o mesmo para quem ?? cego
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">
            Eu acredito ainda que
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu acredito ainda que"
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 24 },
              ])
            }
          >
            <MenuItem value={"O"}>
              ?? melhor prud??ncia do que arrependimento
            </MenuItem>
            <MenuItem value={"I"}>A autoridade deve ser desafiada</MenuItem>
            <MenuItem value={"A"}>Ganhar ?? fundamental</MenuItem>
            <MenuItem value={"C"}>
              O coletivo ?? mais importante do que o individual
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-label">Eu penso que</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.data}
            label="Eu penso que"
            //  onChange={(e) => setStartDate(e.target.value)}
            onChange={(e) =>
              setState((oldState) => [
                ...oldState,
                { opcao: e.target.value, id: 25 },
              ])
            }
          >
            <MenuItem value={"I"}>N??o ?? f??cil ficar encurralado</MenuItem>
            <MenuItem value={"O"}>?? prefer??vel olhar, antes de pular</MenuItem>
            <MenuItem value={"C"}>
              Duas cabe??as pensam melhor do que uma
            </MenuItem>
            <MenuItem value={"A"}>
              Se voc?? n??o tem condi????es de competir, n??o compita
            </MenuItem>
          </Select>
        </FormControl>
        <Grid item xs={6}>
          <Typography fontSize={"1.8rem"} align="center">
            <Stack>
              <Button
                variant="contained"
                id="enviar"
                // endIcon={<SendIcon />}
                type="submit"
                onClick={handleSend}
                size={"large"}
                sx={{ marginRight: "1rem" }}
                disabled={
                  state.length !== 25 ||
                  sendResponse === true ||
                  afterSending === true
                }
              >
                {" "}
                Enviar{" "}
              </Button>
            </Stack>
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography fontSize={"1.8rem"} align="center">
            <Stack>
              <Button
                variant="contained"
                id="enviar"
                // endIcon={<SendIcon />}
                type="submit"
                onClick={result}
                size={"large"}
                sx={{ marginLeft: "1rem" }}
                disabled={send === false || afterResponse === true}
              >
                {" "}
                Resultado{" "}
              </Button>
            </Stack>
          </Typography>
        </Grid>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid item xs={12}>
          <Typography sx={{ marginTop: "2rem", fontSize: "1.1rem" }}>
            {(() => {
              if (sendResponse === true) {
                return (
                  <Container>
                    <h1
                      className={classes.typography}
                      style={{ fontSize: "2rem", position: "" }}
                    >
                      Resultado
                    </h1>
                    <div>
                      <Chart
                        chartType="PieChart"
                        data={chartData}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                      />
                    </div>
                    <Grid container spacing={6} xs={12}>
                      <Grid item xs={12} md={6}>
                        <Typography align="justify">
                          <h4>??guia {pI}% </h4>
                          <strong>Lema: </strong>
                          Fazer Diferente <br />
                          <strong>Comportamento: </strong>
                          Criativo, Intuitivo, Foco no Futuro, Distra??do,
                          Curioso, Informal/Casual e Flexivel. <br />
                          <strong>Pontos Fortes: </strong>
                          Provoca mudan??as radicais; Antecipar o futuro;
                          Criatividade. <br />
                          <strong>Pontos de Melhoria: </strong>
                          Falta de aten????o para o aqui e agora; Impaci??ncia e
                          rebeldia; Defende o novo pelo novo. <br />
                          <strong>Motiva????es: </strong>
                          Liberdade de express??o; Aus??ncia de controles r??gidos;
                          Ambiente de trabalho descentralizado; Liberdade para
                          fazer exce????es; Oportunidade para delegar tarefas e
                          detalhes.. <br />
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Typography align="justify">
                          <h4>Lobo {pO}% </h4>
                          <strong>Lema: </strong>
                          Fazer Certo <br />
                          <strong>Comportamento: </strong>
                          Detalhista e organizado, Estrategista, Busca do
                          Conhecimento, Pontual, Conservador Previs??vel. <br />
                          <strong>Pontos Fortes: </strong>
                          Passado, presente e futuro; Consci??ncia, Conformidade;
                          Qualidade Lealdade; Seguran??a; Regras e
                          Responsabilidades. <br />
                          <strong>Pontos de Melhoria: </strong>
                          Dificuldades de se adaptar ??s mudan??as podem impedir o
                          progresso; Detalhista e demasiadamente sistematizado.{" "}
                          <br />
                          <strong>Motiva????es: </strong>
                          Certeza, Compreens??o exata de quais s??o as regras;
                          conhecimento especifico do trabalho; Aus??ncia de risco
                          e erros; Ver o produto acabado - come??o, meio e fim.{" "}
                          <br />
                        </Typography>
                      </Grid>
                      <CssBaseline />
                      <Grid item xs={12} md={6}>
                        <Typography align="justify">
                          <h4>Gato {pC}% </h4>
                          <strong>Lema: </strong>
                          Fazer Junto <br />
                          <strong>Comportamento: </strong>
                          Sens??vel, Relacionamentos, Time, Tradicionalista,
                          Contribui????o, Busca Harmonia e Delega Autoridade.{" "}
                          <br />
                          <strong>Pontos Fortes: </strong>
                          Manter comunica????o harmoniosa; Desenvolver e manter a
                          cultura empresarial; Comunica????o aberta. <br />
                          <strong>Pontos de Melhoria: </strong>
                          Esconder conflitos; Felicidade acima dos resultados;
                          Manipula????o atrav??s dos sentimentos. <br />
                          <strong>Motiva????es: </strong>
                          Seguran??a e aceita????o social; Construir o consenso;
                          Reconhecimento da equipe; Supervis??o compreensiva;
                          Ambiente harm??nico; Trabalho em grupo. <br />
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Typography align="justify">
                          <h4>Tubar??o {pA}% </h4>
                          <strong>Lema: </strong>
                          Fazer R??pido <br />
                          <strong>Comportamento: </strong>
                          Senso de urg??ncia, A????o, Iniciativo, Impulsivo,
                          Pr??tico, Vencer desafios, Aqui e Agora,
                          Auto-suficiente, N??o gosta de delegar poder.
                          <br />
                          <strong>Pontos Fortes: </strong>
                          Fazer que ocorra; Parar com a burocracia motiva????o.{" "}
                          <br />
                          <strong>Pontos de Melhoria: </strong>
                          Socialmente um desastre; Faz do modo mais f??cil;
                          Relacionamento complicado.
                          <br />
                          <strong>Motiva????es: </strong>
                          Liberdade para agir individualmente; Controle das
                          pr??prias atividades; resolver os problemas do seu
                          jeito; Competi????o individual; Variedade de atividades;
                          N??o ter que repetir tarefa.
                          <br />
                        </Typography>
                      </Grid>
                    </Grid>
                  </Container>
                );
              }
            })()}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
