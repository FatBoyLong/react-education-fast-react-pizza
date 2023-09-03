import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  // Hook from react-router which allows us to get error data when path is wrong
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      {/* Prop 'to' -1 is a trick for returning another button from LinkButton component */}
      <LinkButton to={"-1"}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
