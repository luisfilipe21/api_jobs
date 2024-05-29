import { useContext } from "react";
import { Modal } from "./components/Modal"
import { Home } from "./pages/Home"
import { JobContext } from "./providers/JobsProvider";


function App() {
  const {modal} = useContext(JobContext);

  return (
    <>
      <Home />
      {
        modal ? <Modal /> : null 
      }
      
    </>
  )
}

export default App
