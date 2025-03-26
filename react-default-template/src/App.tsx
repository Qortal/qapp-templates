import { Typography } from "@mui/material"
import { useGlobal } from "qapp-core"
import { useIframe } from "./hooks/useIframeListener"

 
function App() {
  const {auth} = useGlobal()
  useIframe()
  return (
    <>
     <Typography>Welcome to Qortal {auth?.name}</Typography>
    </>
  )
}

export default App
