import { Outlet } from "react-router-dom";
// import Header from "../Movies/Header/Header";
import {Header} from "../Contacts/Header/Header";

import { Container } from "../Container/Container";
import { Suspense } from "react";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

export function SharedLayout() {
  return (
    <>
        <Container>
          <Header/>
          <Suspense fallback={<ColorRing wrapperStyle={{
                  display: 'block',
                  margin: '0 auto',
              }}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>}>            
              <Outlet/>
          </Suspense>
        </Container>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" /> 
    </> 
  );
};