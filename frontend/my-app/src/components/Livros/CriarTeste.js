import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'

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
      {vet.map((vet,i) => (
        <div id={vet.id}>{vet.title}</div>
      ))}
    </div>
  )
}
export default Teste


/*const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CriarTeste() {
  const classes = useStyles();
  const [emailTeste, setEmailTeste] = useState("");
  const [passwordTeste, setPasswordTeste] = useState("");
  
  const handleChangeEmail = e => {
    setEmailTeste(e.target.emailTeste)
  }
  const handleChangePassword = e => {
    setEmailTeste(e.target.passwordTeste)
  }

  useEffect(() => console.log(emailTeste), [emailTeste]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChangeEmail}            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            onChange={handleChangePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}           
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}*/