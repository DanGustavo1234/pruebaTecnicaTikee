import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const Otp = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', // Esto asegura que el contenedor ocupe toda la altura de la página
      backgroundColor: '#e0f3ff' 
    }}>
      <Card sx={{ 
        minWidth: 'auto', 
        padding: '2em', 
        border: '1px solid rgba(94, 88, 87, 0.07)', 
        backgroundColor: 'var(--joy-palette-common-white, #FFF)', 
        display: 'flex',
        flexDirection: 'column', // Asegura que el contenido esté en una columna
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Ingresa el código OTP
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => { /* Lógica de envío de OTP */ }}
          >
            Verificar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Otp;






// import React, { useState } from 'react';
// import { Card, CardContent, TextField, Button, Grid, Typography } from '@mui/material';

// const Otp = () => {
//   const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']); // Estado para almacenar cada dígito del OTP
//   const [error, setError] = useState<boolean>(false); // Estado para manejar los errores

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const value = event.target.value;
//     // Actualizamos el valor del dígito correspondiente en el array
//     if (/^[0-9]*$/.test(value) && value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//       setError(false);
//     }
//   };

//   const handleSubmit = () => {
//     const otpString = otp.join('');
//     if (otpString.length === 6) {
//       console.log('OTP enviado:', otpString);
//       // Aquí iría la lógica para verificar el OTP
//     } else {
//       setError(true);
//     }
//   };

//   const handleFocus = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
//     if (e.target.value === '') {
//       return;
//     }
//     // Move focus to the next input field
//     if (index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`)?.focus();
//     }
//   };

//   return (
//     <Card sx={{ minWidth:'auto',justifyContent:'center',padding:'2em',alignItems:'center',border: '1px solid rgba(94, 88, 87, 0.07)',backgroundColor:'var(--joy-palette-common-white, #FFF)'}}>
//       <CardContent>
//         <Typography variant="h6" align="center" gutterBottom>
//           Ingresa el código OTP
//         </Typography>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12}>
//             <Grid container spacing={1} justifyContent="center">
//               {otp.map((digit, index) => (
//                 <Grid item key={index}>
//                   <TextField
//                     id={`otp-${index}`}
//                     label=""
//                     variant="outlined"
//                     value={digit}
//                     onChange={(e) => handleChange(e, index)}
//                     onFocus={(e) => handleFocus(e, index)}
//                     inputProps={{ maxLength: 1 }}
//                     error={error && otp.join('').length !== 6}
//                     helperText={error && otp.join('').length !== 6 ? "Por favor ingresa un código de 6 dígitos" : ""}
//                     style={{ width: 50 }}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={handleSubmit}
//             >
//               Verificar
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default Otp;
