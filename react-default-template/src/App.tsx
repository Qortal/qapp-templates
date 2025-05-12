import { Typography } from '@mui/material';
import { useGlobal } from 'qapp-core';
import { useTranslation } from 'react-i18next';

function App() {
  const { auth } = useGlobal();
  const { t } = useTranslation(['core']);

  return (
    <>
      <Typography> {t('core:welcome', { postProcess: 'capitalize' })} {auth?.name}</Typography>
    </>
  );
}

export default App;
