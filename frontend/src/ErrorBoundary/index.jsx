import React from "react";
import Button from "../components/shared/Button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV !== "production") {
      console.log("Error: ", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="container w-full h-full flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h1 className="mt-4 mb-8 text-2xl font-semibold md:text-3xl">
              {`Sorry, we couldn't find this page.`}
            </h1>

            <div className="w-full flex justify-center">
              <Button
                title={"Please try again"}
                width={"10rem"}
                height={"2.5rem"}
                clickHandle={() => window.location.reload()}
              />
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
