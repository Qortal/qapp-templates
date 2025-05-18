import { Typography } from '@mui/material';
import { useGlobal } from 'qapp-core';
import { useTranslation } from 'react-i18next';

function App() {
  const { auth } = useGlobal();
  const { t } = useTranslation(['core']);

  // retrieve the theme 'light' or 'dark' from the framework
  const theme = window._qdnTheme;

  return (
    <>
      <Typography>
        {t('core:welcome', { postProcess: 'capitalizeAll' })} {auth?.name}
      </Typography>

      <Typography>
        {t('core:using_theme', { postProcess: 'capitalizeFirstChar' })} {theme}
      </Typography>
    </>
  );
}

export default App;
