import { Link, Outlet } from "react-router-dom";
import Container from "../components/Container";
import { FaRegBookmark } from "react-icons/fa6";
import { TbUserQuestion } from "react-icons/tb";
import { MdOutlineHandyman } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Profile = () => {
  console.log("Profile page loaded");
  const favoriteCardAnim = useRef();

  useGSAP(() => {
    gsap.fromTo(
      favoriteCardAnim.current.children,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 0.5,
      }
    );
  });
  return (
    <>
      <Container>
        <section className="flex justify-center my-20">
          <div
            ref={favoriteCardAnim}
            className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-4"
          >
            <Link to="/profile/favorites">
              <div className="w-[15rem] h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg">
                <FaRegBookmark className="text-8xl text-light_purple" />
                <h3 className="text-2xl mt-6 font-lato text-center">
                  Favorites
                </h3>
              </div>
            </Link>

            <div className="w-[15rem] h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg">
              <MdOutlineHandyman className="text-8xl text-light_purple" />
              <h3 className="text-2xl mt-6 font-lato text-center">
                Maintenance Request
              </h3>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Profile;
