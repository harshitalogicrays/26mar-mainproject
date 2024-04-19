import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import LoadModal from "./features/LoadModal";
import './App.css'
function App() {
 
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
    {modalIsOpen && <LoadModal close={closeModal}/>}
     <ToastContainer position="bottom-left"  autoClose={2000}  hideProgressBar={true}
        newestOnTop={false} closeOnClick  rtl={false} pauseOnFocusLoss={false}
        draggable  pauseOnHover={false}  theme="colored"/>


    
        <Outlet/>

     
    </>
  )
}

export default App
