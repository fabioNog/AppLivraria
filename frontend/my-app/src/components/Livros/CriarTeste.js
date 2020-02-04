import React, { Component,useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'

/*const currencies = [
  {
    value: 'Comedia',
    label: 'Comedia',
  },
  {
    value: 'Suspense',
    label: 'Suspense',
  },
  {
    value: 'Ficcao',
    label: 'Ficcao',
  },
  {
    value: 'Terror',
    label: 'Terror',
  },
  {
    value: 'Romance',
    label: 'Romance',
  },
  {
    value: 'Policial',
    label: 'Policial',
  },
  {
    value: 'Acao',
    label: 'Acao',
  },
];

class Criar extends Component{

  constructor(props){
    super(props)
    this.state ={
      nome: '',
      data: '',
      categoria: '',
      sinopse: '',
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeData = this.handleChangeData.bind(this)
    this.handleChangeCategoria = this.handleChangeCategoria.bind(this)
    this.handleChangeSinopse = this.handleChangeSinopse.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChangeName(e){
    this.setState({nome: e.target.value})
  }

  handleChangeData(e){
    this.setState({data: e.target.value})
  }

  handleChangeCategoria(e){
    this.setState({categoria: e.target.value})
  }

  handleChangeSinopse(e){
    this.setState({sinopse: e.target.value})
  }

  handleChangeName(e){
    this.setState({name: e.target.value})
  }
  
  
  handleClick(){
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost/livraria/backend/"; 
    axios.post('proxyurl + url',{
      nome_livro: 'A mão que cura',
      ano_criacao: '2010-12-31',
      categoria: 'suspense',
      sinopse: 'A mão que cura conta a historia de uma mão que cura'
    },config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    const classes = this.props
    return(
      <Container component="main" maxWidth="xs" style={{padding: '60px'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nome do Livro"
            autoComplete="Nome do Livro"
            autoFocus
            onChange={this.handleChangeName}
          />
          <TextField
            variant="outlined"
            id="date"
            label="Data de Criação"
            type="date"
            autoFocus
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            style={{marginTop: '10px'}}
          />
          <TextField
            id="outlined-select-currency"
            name={this.state.categoria}
            select
            label="Categoria"
            helperText="Selecione a categoria"
            variant="outlined"
            fullWidth
            style={{marginTop: '10px'}}
            defaultValue = {"Comedia"}
            onChange={this.handleChangeCategoria}
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-multiline-static"
            label="Sinopse"
            multiline
            rows="4"
            variant="outlined"
            fullWidth
            style={{marginTop: '15px'}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleClick}
            style={{paddingTop: '15px',marginTop: '10px'}}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>      
    )
  }
}*/

function Teste(){
const [vet, setVet] = useState([])
  useEffect(() =>{
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(res => {
      setVet(res.data)
    })
  })  
  return(
    <div>
      {vet.map((v) => (
        <div id={v.userId}>{v.title}</div>
      ))}
    </div>
  )
}

export default Teste

