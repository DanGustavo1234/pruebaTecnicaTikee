import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { Link, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import appReact from '../firebaseConfig';
import { User} from 'firebase/auth';
const authFirebase=getAuth(appReact)

const Login = () => {

  const [correo,setCorreo]=useState("")
  const [contraseña,setContraseña]=useState("")
  const [usuario,setUsuario]=useState<User | null>(null);
  const auth=useAuth()
  


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const usuarioAuth= await signInWithEmailAndPassword(authFirebase, correo, contraseña);
      setUsuario(usuarioAuth.user)
      const accessToken = await usuario.getIdToken();
      auth.setIsAuthenticated(true)
      window.localStorage.setItem('accessToken',JSON.stringify(accessToken))
      window.localStorage.setItem('isAuthenticated',"true")
    } catch {
      console.log("")
    }
  };




  if(auth.isAuthenticated){
    return <Navigate to="/dashboard"/>;
  }


  const items = [
    { url: "/img1.jpg" },
    { url: "/img2.jpg" },
    { url: "/img3.jpg" }
];


  return (
    <>
      <Grid container rowSpacing={1} sx={{height:'100vh',width:'auto'}}>
                <Grid item xs={12} sm={6} sx={{display:{xl:'block',lg:'block',md:'block',sm:'block',xs:'none'}}}>
                    <Carousel 
                        autoPlay={true} 
                        interval={10000} 
                        animation="slide" 
                        indicatorContainerProps={{className:"indicadores"}} 
                        navButtonsAlwaysInvisible={true}
                    >
                        {items.map((item, index) => (
                            <div key={index} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img className="image" src={item.url} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </Grid>
                <Grid item xs={12} sm={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                
                <form onSubmit={handleSubmit}>
               
                <Card sx={{ minWidth:'auto',justifyContent:'center',padding:'2em',alignItems:'center',border: '1px solid rgba(94, 88, 87, 0.07)',backgroundColor:'var(--joy-palette-common-white, #FFF)'}}>
                      <CardContent sx={{display:"flex",flexDirection:"column",alignContent:'center',alignItems:'center'}}>
                        <img src="/tikee.png" alt="" width='90px' />
                      <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 20,justifyContent:'center',alignItems:'center' }}>
                          Bienvenido
                        </Typography>
                          <FormControl sx={{margin:'20px'}}>
                                <FormLabel htmlFor="email" sx={{fontSize:'.7em'}}>Correo</FormLabel>
                                <TextField
                                  // error={emailError}
                                  // helperText={emailErrorMessage}
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
                                  // color={emailError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password" sx={{fontSize:'.7em'}}>contraseña</FormLabel>
                                <TextField
                                  // error={passwordError}
                                  // helperText={passwordErrorMessage}
                                  name="password"
                                  placeholder="••••••"
                                  type="password"
                                  id="password"
                                  autoComplete="current-password"
                                  autoFocus
                                  required
                                  fullWidth
                                  variant="outlined"
                                  size="small"
                                  value={contraseña}
                                  onChange={(e)=>setContraseña(e.target.value)}
                                  // color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                          </CardContent>
                          <CardActions sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
                            <Button size="small" type='submit' sx={{backgroundColor:'#0B6BCB',padding:'8px',width:'200px'}} variant="contained">Iniciar sesión</Button>
                            <Typography sx={{ textAlign: 'center',margin:'15px',fontSize:'.8em' }}>
                            ¿Aún no tienes una cuenta?{' '}
                              <Link
                                to="/singup"
                              >
                                Regístrate
                              </Link>
                        </Typography>
                          </CardActions>
                      </Card>
                      </form>
          
                </Grid>
            </Grid>
      
    </>
   
  )
}

export default Login


