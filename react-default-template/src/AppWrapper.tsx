import { GlobalProvider } from 'qapp-core'
import Layout from './styles/Layout'
import { useLocation, useNavigate } from 'react-router-dom'
import { publicSalt } from './qapp-config';

export const AppWrapper = () => {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <GlobalProvider
            config={{
              auth: {
                balanceSetting: {
                  interval: 180000,
                  onlyOnMount: false,
                },
                authenticateOnMount: true,
              },
              publicSalt: publicSalt,
            }}
            navigate={navigate}
            location={location}
          >
            <Layout />
          </GlobalProvider>
  )
}
