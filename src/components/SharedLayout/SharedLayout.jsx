import { Outlet, useLocation } from "react-router-dom";
import MovieHeader from "../Movies/Header/MovieHeader";
import { Suspense } from "react";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { ContactsHeader } from "../Contacts/Header/ContactsHeader";
import { Container } from "../Container/Container";

export function SharedLayout() {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      {location.pathname.includes("/movie-gallery") && <MovieHeader />}
      {location.pathname.includes("/phonebook") && <ContactsHeader />}
      <Container>
        <Suspense
          fallback={
            <ColorRing
              wrapperStyle={{
                display: "block",
                margin: "0 auto",
              }}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          }
        >
          <Outlet />
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
        theme="light"
      />
    </>
  );
}
