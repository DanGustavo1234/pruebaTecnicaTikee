import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import appReact from '../firebaseConfig';
import { Alert, IconButton, InputAdornment } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";
import "../styles/defaulLayout.css"


const authFirebase=getAuth(appReact)


const Singup = () => {
  const [correo,setCorreo]=useState("")
  const [contraseña,setContraseña]=useState("")
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [alerta,setAlerta]=useState(false) ;
  const navigate=useNavigate();
 

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let valid = true;

    
    if (!correo || !/\S+@\S+\.\S+/.test(correo)) {
      setEmailError(true);
      setEmailErrorMessage('Por favor ingresa un correo válido');
      valid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,}$/;

    if (!contraseña || !passwordPattern.test(contraseña)) {
      setPasswordError(true);
      setPasswordErrorMessage('La contraseña debe tener al menos 12 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial.'
);
      valid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }


    if(valid){
      try{
        await createUserWithEmailAndPassword(authFirebase,correo,contraseña)
        setCorreo("")
        setContraseña("")
        setAlerta(true);
        setTimeout(() => {
          navigate("/")
        }, 2000);
        
      }catch{
        setAlerta(false)
        console.log("Fallo el Registro")
      }
    }


    
  }





  const items = [
    { url: "/img1.jpg" },
    { url: "/img2.jpg" },
    { url: "/img3.jpg" }
];


  return (
    <>
    
    <Grid container rowSpacing={1} sx={{height:'100vh',width:'auto'}} >
    <Grid 
          xs={12} 
          sm={6} 
          sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}
        >
          <Carousel 
            autoPlay={true} 
            interval={10000} 
            animation="slide" 
            indicatorContainerProps={{ className: "indicadores" }} 
            navButtonsAlwaysInvisible={true}
          >
            {items.map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  height: '100vh', 
                  width: '100%',
                  overflow: 'hidden' 
                }}
              >
                <img 
                  className="image" 
                  src={item.url} 
                  style={{ 
                    maxHeight: '100%', 
                    maxWidth: '100%', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>
            ))}
          </Carousel>
        </Grid>

          <Grid xs={12} sm={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Card sx={{ minWidth:'auto',flexDirection:'column',justifyContent:'center',padding:'2em',alignItems:'center',border: '1px solid rgba(94, 88, 87, 0.07)',backgroundColor:'var(--joy-palette-common-white, #FFF)'}}>
          <CardContent sx={{display:"flex",flexDirection:"column",alignContent:'center',alignItems:'center'}}>
            <img src="/tikee.png" alt="" width='90px' />
          <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 20,justifyContent:'center',alignItems:'center' }}>
              Bienvenido al Registro
            </Typography>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <FormControl>
                                <FormLabel htmlFor="email" sx={{fontSize:'.7em'}}>Correo</FormLabel>
                                <TextField
                                  error={emailError}
                                  helperText={emailErrorMessage}
                                  id="email"
                                  type="email"
                                  name="email"
                                  placeholder="your@email.com"
                                  autoComplete="email"
                                  autoFocus
                                  required
                                  fullWidth
                                  variant="outlined"
                                  size="small"
                                  value={correo}
                                  onChange={(e)=>setCorreo(e.target.value)}
                                  color={emailError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password" sx={{fontSize:'.7em'}}>contraseña</FormLabel>
                                <TextField
                                    error={passwordError}
                                    name="password"
                                    placeholder="••••••"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    autoComplete="current-password"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    value={contraseña}
                                    onChange={(e) => setContraseña(e.target.value)}
                                    color={passwordError ? "error" : "primary"}
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                          >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                          </IconButton>
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                {passwordError && (
                                      <Typography sx={{ fontSize: '0.6em',color:"red",maxWidth:'300px'}}>{passwordErrorMessage}</Typography>
                                    )}
                            </FormControl>

              <CardActions sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Button size="small" type='submit' sx={{backgroundColor:'#0B6BCB',padding:'8px',width:'200px'}} variant="contained">Registrarse</Button>
              
                <Typography sx={{ textAlign: 'center',margin:'15px',fontSize:'.8em' }}>
                            ¿Ya tienes una cuenta?{' '}
                              <Link
                                to="/"
                              >
                                Login
                              </Link>
                        </Typography>

                        {
                          alerta && (
                            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                            Registro realizado con Exito
                          </Alert>
                          )
                        }
              
              </CardActions>
            </form>
          </CardContent>
          </Card>
          </Grid>
        </Grid>
    </>
   
  )
}

export default Singup
