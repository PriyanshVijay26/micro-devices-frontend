import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log("Error Details:", error);
  if (error?.status === 404) {
    return <div>Page not found</div>;
  }

  return <div>Something went wrong: {error?.message || "Unknown error"}</div>;
};

export default Error;
