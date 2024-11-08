import Container from "../components/shared/Container";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineHandyman } from "react-icons/md";
import OptionCard from "../components/OptionCard";

const Profile = () => {
  return (
    <>
      <Container>
        <section className="flex justify-center my-20">
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-4">
            <OptionCard
              path={"/profile/favorites"}
              icon={<FaRegBookmark className="text-8xl text-light_purple" />}
              title={"Favorites"}
            />

            <OptionCard
              path={"/profile/maintenance_request/all"}
              icon={
                <MdOutlineHandyman className="text-8xl text-light_purple" />
              }
              title={"Maintenance Request Messages"}
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Profile;
