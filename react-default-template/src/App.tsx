import { Typography } from '@mui/material';
import { useGlobal } from 'qapp-core';

function App() {
  const { auth } = useGlobal();
  return (
    <>
      <Typography>Welcome to Qortal {auth?.name}</Typography>
    </>
  );
}

export default App;
