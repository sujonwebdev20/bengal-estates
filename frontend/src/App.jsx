import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { MobileNavbarContext } from "../contexts/MobileNavbarContext";
import { useState } from "react";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Property from "./pages/Property";
import PropertyDetails from "./pages/PropertyDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Overview from "./pages/Overview";
import Challenge from "./pages/Challenge";
import WhyBengalEstates from "./pages/WhyBengalEstates";
import Value from "./pages/Value";
import Investment from "./pages/Investment";
import TenantPortal from "./pages/TenantPortal";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PageNotFound from "./pages/PageNotFound";
import Faq from "./pages/Faq";
import CreateProperty from "./pages/CreateProperty";
import CheckSignin from "./Layout/CheckSignin";
import Admin from "./pages/Admin";
import CreateBlog from "./pages/CreateBlog";
import PropertiesController from "./pages/PropertiesController";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProperty from "./pages/EditProperty";
import BlogsController from "./pages/BlogsController";
import EditBlog from "./pages/EditBlog";
import Profile from "./pages/Profile";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Favorite from "./pages/Favorite";
import CheckAdminUser from "./Layout/CheckAdminUser";
import Partnership from "./pages/Partnership";
import EnquiryMessageController from "./pages/EnquiryMessageController";
import GeneralEnquiry from "./pages/GeneralEnquiry";
import ContactMessageController from "./pages/ContactMessageController";
import MaintenanceRequest from "./pages/MaintenanceRequest";
import MaintenanceRequestController from "./pages/MaintenanceRequestController";
import UserRequestMessages from "./pages/UserRequestMessages";

const App = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <>
      <MobileNavbarContext.Provider
        value={[mobileNavActive, setMobileNavActive]}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              {/*********************
               * NORMAL USER ROUTES *
               **********************/}
              <Route path="" element={<Home />} />
              <Route path="property/all" element={<Property />} />
              <Route path="property/:id" element={<PropertyDetails />} />
              <Route path="blog/all" element={<Blog />} />
              <Route path="blog/:id" element={<BlogDetails />} />
              <Route path="overview" element={<Overview />} />
              <Route path="challenge" element={<Challenge />} />
              <Route path="why_bengal_estates" element={<WhyBengalEstates />} />
              <Route path="value" element={<Value />} />
              <Route path="investment" element={<Investment />} />
              <Route path="tenant_portal" element={<TenantPortal />} />
              <Route path="faq" element={<Faq />} />
              <Route path="partnership" element={<Partnership />} />
              {/*******************
               * PROTECTED ROUTES *
               ********************/}
              <Route element={<CheckAdminUser />}>
                <Route path="admin" element={<Admin />} />
                <Route
                  path="admin/property/create"
                  element={<CreateProperty />}
                />
                <Route
                  path="admin/property/all"
                  element={<PropertiesController />}
                />
                <Route
                  path="admin/property/edit/:id"
                  element={<EditProperty />}
                />
                <Route path="admin/blog/create" element={<CreateBlog />} />
                <Route path="admin/blog/all" element={<BlogsController />} />
                <Route path="admin/blog/edit/:id" element={<EditBlog />} />
                <Route
                  path="admin/contact_messages"
                  element={<ContactMessageController />}
                />
                <Route
                  path="admin/enquiry_messages"
                  element={<EnquiryMessageController />}
                />
                <Route
                  path="admin/maintenance_request/all"
                  element={<MaintenanceRequestController />}
                />
              </Route>

              <Route element={<CheckSignin />}>
                <Route path="profile" element={<Profile />} />
                <Route path="profile/favorites" element={<Favorite />} />
                <Route path="general_enquiry" element={<GeneralEnquiry />} />
                <Route
                  path="maintenance_request"
                  element={<MaintenanceRequest />}
                />
                <Route
                  path="/profile/maintenance_request_messages"
                  element={<UserRequestMessages />}
                />
              </Route>
            </Route>
            {/************************
             * AUTHENTICATED ROUTES *
             ************************/}
            <Route element={<CheckSignin />}>
              <Route path="signup" element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
            </Route>
            {/************************
             * PAGE NOT FOUND ROUTE *
             ************************/}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </MobileNavbarContext.Provider>
    </>
  );
};

export default App;
