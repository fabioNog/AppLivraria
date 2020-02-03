import React, { Component,useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'

const currencies = [
  {
    value: 'CM',
    label: 'Comedia',
  },
  {
    value: 'SP',
    label: 'Suspense',
  },
  {
    value: 'FC',
    label: 'Ficção',
  },
  {
    value: 'TR',
    label: 'Terror',
  },
  {
    value: 'RM',
    label: 'Romance',
  },
  {
    value: 'PC',
    label: 'Policial',
  },
  {
    value: 'AC',
    label: 'Ação',
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
    this.handleClick = this.handleClick.bind(this)
  }

  handleChangeName(e){
    this.setState({name: e.target.value})
  }

  handleClick(){
    console.log(this.state.name)
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
            select
            label="Categoria"
            helperText="Selecione a categoria"
            variant="outlined"
            fullWidth
            style={{marginTop: '10px'}}
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
}

export default Criar

