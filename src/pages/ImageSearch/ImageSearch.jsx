import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

import { fetchImg } from "../../services/fetchImg";
import { SearchBar } from "../../components/FindImage/SearchBar/SearchBar";
import { ImageGallery } from "../../components/FindImage/ImageGallery/ImageGallery";
import { Button } from "../../components/FindImage/Button/Button.jsx";

export default function ImageSearch() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      fetchImg(searchQuery, page)
        .then((res) => {
          setImages((prevState) => {
            return [...prevState, ...res.data.hits];
          });
        })

        .catch((error) => {
          console.log(error);
          if (error.code === "ERR_NETWORK") {
            setErrorMsg(error.message);
            return;
          }
        })
        .finally(() => setIsLoading(false));
    }, 1000);
  }, [searchQuery, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.elements.searchQuery.value.trim() === "") {
      toast.error("Enter search query");
    }
    setSearchQuery(e.currentTarget.elements.searchQuery.value);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {images.length === 0 && searchQuery !== "" && isLoading === false && (
        <h2 className="emptySearchQueryMsg">No Images Found</h2>
      )}
      {images.length === 0 &&
        searchQuery !== "" &&
        isLoading === false &&
        errorMsg === true && (
          <h2 className="emptySearchQueryMsg">{errorMsg}</h2>
        )}
      <ImageGallery images={images} />
      {isLoading === true && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{
            display: "block",
            margin: "0 auto",
          }}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      {images.length > 0 && <Button loadMore={handleLoadMore} />}
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
