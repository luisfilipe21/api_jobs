import { useContext } from "react";
import { Modal } from "./components/Modal"
import { Home } from "./pages/Home"
import { JobContext } from "./providers/JobsProvider";
import { LoginPageUser } from "./pages/LoginPageUser";
import { RegisterPageUser } from "./pages/RegisterPageUser";
import { RegisterPageAdmin } from "./pages/RegisterPageAdmin";


function App() {
  const {modal} = useContext(JobContext);

  return (
    <>
      {/* <Home />
      {
        modal ? <Modal /> : null 
      } */}
      {/* <LoginPageUser/> */}
      {/* <RegisterPageUser /> */}
      {/* <RegisterPageAdmin /> */}
    </>
  )
}

export default App
