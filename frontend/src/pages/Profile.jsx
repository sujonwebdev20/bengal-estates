import Container from "../components/Container";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineHandyman } from "react-icons/md";
import OptionCardForGoingUrl from "../components/OptionCardForGoingUrl";

const Profile = () => {
  return (
    <>
      <Container>
        <section className="flex justify-center my-20">
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-4">
            <OptionCardForGoingUrl
              path={"/profile/favorites"}
              icon={<FaRegBookmark className="text-8xl text-light_purple" />}
              title={"Favorites"}
            />

            <OptionCardForGoingUrl
              path={"/profile/maintenance_request_messages"}
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
