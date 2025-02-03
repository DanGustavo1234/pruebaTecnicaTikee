import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import OtpInput from 'react-otp-input';
import { useState,useEffect} from 'react';
import { useAuth } from '../auth/AuthProvider';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";





const Otp = () => {
  const [otp, setOtp] = useState("");
  const [otpUser, setOtpUser] = useState("");
  const [otpGenerado,setOtpGenerado]=useState(false)
  const [error, setError] = useState(false);
  const [helperText, setHelperText] =useState('Ingresa tu OTP');
  const auth=useAuth()
  const navigate=useNavigate()
  const location = useLocation();
  const { accessToken, user } = location.state;

  

  useEffect(() => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(generatedOtp.toString());
    setOtpGenerado(true);  
    const timer = setTimeout(() => {
      console.log("El OTP ha caducado");
      setOtp(""); 
      setOtpGenerado(false);
    }, 1 * 60 * 1000); // 1 minuto
  
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (otp) {
      console.log(`Tu código de verificación es: ${otp} No lo compartas con nadie. 🛡️`);
    }
  }, [otp]);

    const verificarOtp=(e)=>{
      e.preventDefault();
      if (otp === otpUser){
        setOtp("")
        setOtpUser("")
        setError(false);
        auth.setIsAuthenticated(true)
        window.localStorage.setItem('accessToken',JSON.stringify(accessToken))
        window.localStorage.setItem('estado',"true")
        window.localStorage.setItem('user',user)
        navigate("/dashboard")
      }else{
        setOtpUser("")
        setHelperText('Error OTP incorrecto');
        setError(true);
      }
    }


  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#e0f3ff' 
    }}>
      <Card sx={{ 
        minWidth: 'auto', 
        padding: '2em', 
        border: '1px solid rgba(94, 88, 87, 0.07)', 
        backgroundColor: 'var(--joy-palette-common-white, #FFF)', 
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CardContent>
          
          <Box sx={{alignItems:'center',textAlign:'center'}}>
              <img src="/candado-abierto.png" width="50px"/>
              <Typography  align="center" gutterBottom fontSize='0.8em'>
                Autenticación OTP
              </Typography>
              <Typography  align="center" gutterBottom fontSize='0.6em'>
              Se imprimió el código OTP de 6 dígitos en la consola.
              </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center" sx={{marginTop:'10px',marginButton:'10px'}}>
          <OtpInput
                value={otpUser}
                onChange={setOtpUser}
                numInputs={6}
                renderSeparator={"--"}
                renderInput={(props) => <input {...props} style={{ 
                  width: '35px', 
                  height: '40px', 
                  fontSize: '1.2em', 
                  textAlign: 'center', 
                  border: '1px solid #ccc', 
                  margin: '0 2px' 
                }}  />}
              />
          </Grid>
          <div style={{ color: 'red', fontSize: '0.8em', textAlign: 'center' }}>
          {error ? helperText : null}
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={verificarOtp}
            sx={{marginTop:'10px'}}
          >
            Verificar
          </Button>
               </CardContent>
      </Card>
    </div>
  );
};

export default Otp;

