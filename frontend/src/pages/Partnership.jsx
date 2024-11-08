import Container from "../components/shared/Container";
import { BigRectangleCard } from "./Card";

const Partnership = () => {
  return (
    <Container>
      <div className="mb-20 mt-5">
        <h2 className="text-center my-5 text-3xl mt-10">Partnership Model</h2>
        <div className="[&_h3]:m-0 w-full">
          <BigRectangleCard paragraph="At Bengal Estates Limited, we offer a unique and lucrative partnership model designed to maximize your investment returns while minimizing your effort. Our model ensures a clear and equitable division of property ownership, combining the strengths of capital providers and our experienced management team." />
        </div>
        <h2 className="text-center my-5 text-3xl mt-14">How It Works</h2>
        <p className="text-center mb-5">
          Property Acquisition Under Bengal Estates Limited
        </p>
        <div className="flex gap-4 [&_div]:h-[12rem] max-sm:flex-col [&_div]:max-sm:h-auto">
          <div className="[&_h3]:m-0 w-full">
            <BigRectangleCard paragraph="All properties are purchased under the Bengal Estates Limited banner, leveraging our extensive market knowledge and strategic acquisition capabilities." />
          </div>
          <div className="[&_h3]:m-0 w-full">
            <BigRectangleCard paragraph="This centralized approach allows us to secure the best deals, negotiate favorable terms, and manage properties efficiently." />
          </div>
        </div>
        <h2 className="text-center my-5 text-3xl mt-14">Equity Distribution</h2>
        <p className="text-center mb-5">
          Capital Providers/Investors (80% Ownership)
        </p>
        <div className="flex gap-4 [&_div]:h-[12rem] max-sm:flex-col [&_div]:max-sm:h-auto">
          <div className="[&_h3]:m-0 w-full">
            <BigRectangleCard paragraph="Capital Providers/Investors (80% Ownership)" />
          </div>
          <div className="[&_h3]:m-0 w-full">
            <BigRectangleCard paragraph="Investors provide the full capital required for the property acquisition." />
          </div>
        </div>
        <div className="flex gap-4 [&_div]:h-[12rem] max-sm:flex-col [&_div]:max-sm:h-auto mt-4">
          <div className="[&_h3]:m-0 w-full">
            <BigRectangleCard paragraph="This significant share ensures that investors benefit the most from the property's rental income, appreciation, and eventual sale profits." />
          </div>
          <div className="[&_h3]:m-0 w-full">
            <BigRectangleCard paragraph="In return, they receive 80% of the ownership equity." />
          </div>
        </div>
        <p className="text-center mb-5 mt-14">
          Management and Deal Acquisition Team (20% Ownership)
        </p>
        <div className="flex gap-4 [&_div]:h-[12rem] max-sm:flex-col [&_div]:max-sm:h-auto">
          <div className="[&_h3]:m-0 w-full">
            <BigRectangleCard paragraph="Our management team and deal acquisition experts receive 20% of the ownership equity." />
          </div>
          <div className="[&_h3]:m-0 w-full">
            <BigRectangleCard paragraph="Their expertise ensures that the properties are well-maintained, profitable, and optimized for maximum return on investment." />
          </div>
        </div>
        <div className="[&_h3]:m-0 w-full mt-4">
          <BigRectangleCard paragraph="This share compensates for the comprehensive services they provide, including market research, property sourcing, acquisition negotiations, financing solutions, property management, renovations, and more." />
        </div>
      </div>
    </Container>
  );
};

export default Partnership;
