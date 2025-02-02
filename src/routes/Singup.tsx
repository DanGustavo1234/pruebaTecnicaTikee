import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { Link,Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';



const Singup = () => {
  const [nombre,setNombre]=useState("")
  const [correo,setCorreo]=useState("")
  const [contraseña,setContraseña]=useState("")

  const auth=useAuth();

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
    
    <Grid container rowSpacing={1} sx={{height:'100vh',width:'auto'}} >
          <Grid xs={12} sm={6} sx={{display:{xl:'block',lg:'block',md:'block',sm:'block',xs:'none'}}}>
          <Carousel autoPlay={true} interval={10000} animation="slide" indicatorContainerProps={{className:"indicadores"}} navButtonsAlwaysInvisible={true} >
                {
                    items.map((item,index)=>(
                      <div key={index} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img className="image" src={item.url}/>
                      </div>
                    ))
                }
            </Carousel>
          </Grid>
          <Grid xs={12} sm={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Card sx={{ minWidth:'auto',justifyContent:'center',padding:'2em',alignItems:'center',border: '1px solid rgba(94, 88, 87, 0.07)',backgroundColor:'var(--joy-palette-common-white, #FFF)'}}>
          <CardContent sx={{display:"flex",flexDirection:"column",alignContent:'center',alignItems:'center'}}>
            <img src="/tikee.png" alt="" width='90px' />
          <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 20,justifyContent:'center',alignItems:'center' }}>
              Bienvenido
            </Typography>

            <FormControl sx={{margin:'8px'}}>
                    <FormLabel htmlFor="name" sx={{fontSize:'.7em'}}>Nombre</FormLabel>
                    <TextField
                      // error={emailError}
                      // helperText={emailErrorMessage}
                      id="name"
                      type="name"
                      name="name"
                      placeholder="Nombre"
                      autoComplete="name"
                      autoFocus
                      required
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={nombre}
                      onChange={(e)=>setNombre(e.target.value)}
                      // color={emailError ? 'error' : 'primary'}
                    />
                </FormControl>
    
              <FormControl sx={{margin:'8px'}}>
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
                <FormControl sx={{margin:'8px'}}>
                    <FormLabel htmlFor="password" sx={{fontSize:'.7em'}}>Contraseña</FormLabel>
                    <TextField
                      // error={passwordError}
                      // helperText={passwordErrorMessage}
                      name="password"
                      placeholder="••••••"
                      type="password"
                      id="password"
                      autoComplete="Contraseña"
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
              <CardActions sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Button size="small" sx={{backgroundColor:'#0B6BCB',padding:'8px',width:'200px'}} variant="contained">Registrarse</Button>
              
                <Typography sx={{ textAlign: 'center',margin:'15px',fontSize:'.8em' }}>
                            ¿Ya tienes una cuenta?{' '}
                              <Link
                                to="/"
                              >
                                Login
                              </Link>
                        </Typography>
              
              </CardActions>
          </Card>
          </Grid>
        </Grid>
    </>
   
  )
}

export default Singup
