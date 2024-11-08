import Container from "./shared/Container";
import { MdCall } from "react-icons/md";
import Button from "./shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSignoutMutation } from "../redux/features/auth/authApi";
import { signout } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const ContactUs = () => {
  const navigate = useNavigate();
  const signinUser = useSelector((state) => state.auth);
  const [signoutMutation] = useSignoutMutation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const signoutHandle = async () => {
    const response = await signoutMutation();
    if (response.data.success) {
      toast.success(response.data.message);
    }

    if (response.data.success) {
      dispatch(signout(response));
      return navigate("/");
    }
  };
  let decodedToken = null;
  if (token) {
    const jwtToken = jwtDecode(token);
    decodedToken = jwtToken;
  }

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
            <div className="max-lg:hidden">
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
            </div>
            {token && (
              <Link to="/profile" className="relative">
                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-dark_trans_purple hover:border-2 border-light_purple hover:shadow-[#b469ff_0px_0px_25px_0px] cursor-pointer lg:hover:after:content-['Profile'] hover:after:absolute  hover:after:-bottom-8 hover:font-bold hover:after:z-[100] hover:transition-all">
                  <h3 className="text-2xl">{decodedToken.name[0]}</h3>
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
