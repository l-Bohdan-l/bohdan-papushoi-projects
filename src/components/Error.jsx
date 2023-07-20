import { useLocation } from "react-router-dom";

export const Error = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
};
