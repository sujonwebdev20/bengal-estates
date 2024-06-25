import Container from "./Container";
import { MdCall } from "react-icons/md";
import Button from "./Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSignoutMutation } from "../redux/features/auth/authApi";
import { signout } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const ContactUs = () => {
  const navigate = useNavigate();
  const signinUser = useSelector((state) => state.auth);
  const [signoutMutation] = useSignoutMutation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const signoutHandle = async () => {
    const response = await signoutMutation();
    console.log(response);
    if (response.data.success) {
      toast.success(response.data.message);
    }

    if (response.data.success) {
      dispatch(signout(response));
      return navigate("/");
    }
  };
  return (
    <div className="contact min-w-screen border-b border-light_purple text-light_purple py-2">
      <Container>
        <div className="w-full h-8 flex justify-between items-center max-lg:px-4">
          <a href="tel:330-212-2601" className="flex items-center gap-1">
            <span>
              <MdCall size={20} />
            </span>
            330-212-2601
          </a>

          <div className="flex justify-center items-center gap-8">
            {signinUser && signinUser.token ? (
              <Button
                width={"7rem"}
                height={"2.3rem"}
                title={"signout"}
                clickHandle={signoutHandle}
              />
            ) : (
              <Link to="/signin">
                <Button width={"7rem"} height={"2.3rem"} title={"sign in"} />
              </Link>
            )}
            {token && (
              <Link to="/profile">
                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-dark_trans_purple hover:border-2 border-light_purple hover:shadow-[#b469ff_0px_0px_25px_0px] cursor-pointer">
                  <h3 className="text-2xl">B</h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
