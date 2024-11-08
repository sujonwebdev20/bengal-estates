import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="container w-full h-full flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">
          {`Sorry, we couldn't find this page.`}
        </p>
        <p className="mt-4 mb-8 dark:text-gray-500">
          But dont worry, you can find plenty of other things on our homepage.
        </p>

        <div className="w-full flex justify-center">
          <Button
            title={"Back to homepage"}
            width={"10rem"}
            height={"3rem"}
            clickHandle={() => navigate("/")}
          />
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
