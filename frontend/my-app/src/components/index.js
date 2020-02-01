import React from 'react'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function Home(){
    return (
        <div>
            <Typography>
            <h2>Olá, seja bem vindo ao software Livraria SOITIC</h2>Neste programa você poderá <h4>criar</h4> <h4>editar</h4> <h4>deletar</h4> <h4>visualizar</h4> <br/><br/><Divider/> <br/>
                Também será possivel cadastrar seus autores e suas devidas editoras, Fique a vontade. <br/>No canto superior a direita encontra-se o menu do painel de controle.
            </Typography>
        </div>
    )
}
export default Home