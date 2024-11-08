import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import Overview from "./pages/Overview";
import Challenge from "./pages/Challenge";
import WhyBengalEstates from "./pages/WhyBengalEstates";
import Value from "./pages/Value";
import Investment from "./pages/Investment";
import TenantPortal from "./pages/TenantPortal";
// Auth pages
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import PageNotFound from "./pages/PageNotFound";
import Faq from "./pages/Faq";
import Admin from "./pages/Admin";
import PropertiesController from "./pages/properties/PropertiesController";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Blogs pages
import BlogsController from "./pages/blogs/BlogsController";
import EditBlog from "./pages/blogs/EditBlog";
import BlogDetails from "./pages/blogs/BlogDetails";
import CreateBlog from "./pages/blogs/CreateBlog";
// Properties pages
import CreateProperty from "./pages/properties/CreateProperty";
import EditProperty from "./pages/properties/EditProperty";
import PropertyDetails from "./pages/properties/PropertyDetails";

import Profile from "./pages/Profile";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Favorite from "./pages/Favorite";
import Partnership from "./pages/Partnership";
import EnquiryMessageController from "./pages/EnquiryMessageController";
import GeneralEnquiry from "./pages/GeneralEnquiry";
import ContactMessageController from "./pages/ContactMessageController";
import MaintenanceRequest from "./pages/MaintenanceRequest";
import MaintenanceRequestController from "./pages/MaintenanceRequestController";
import UserRequestMessages from "./pages/UserRequestMessages";
// News pages
import News from "./pages/news/News";
import NewsDetails from "./pages/news/NewsDetails";
import CreateNews from "./pages/news/CreateNews";

import LoadingSpinner from "./components/LoadingSpinner";
import SendEmail from "./pages/SendEmail";
import ChatBox from "./components/ChatBox";
// Auth checker component is being imported
import CheckAdminUser from "./components/auth/CheckAdminUser";
import CheckSignin from "./components/auth/CheckSignin";
// Lazy loading component is being imported
const NewsController = lazy(() => import("./pages/news/NewsController"));
const EditNews = lazy(() => import("./pages/news/EditNews"));
const Home = lazy(() => import("./pages/Home"));
const Property = lazy(() => import("./pages/properties/Property"));
const Blog = lazy(() => import("./pages/blogs/Blog"));

// App Component is started
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="loader">
                <LoadingSpinner />
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Normal user can access this routes without Signin */}
              <Route path="" element={<Home />} />
              <Route path="properties" element={<Property />} />
              <Route path="properties/:id" element={<PropertyDetails />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="blogs/:id" element={<BlogDetails />} />
              <Route path="overview" element={<Overview />} />
              <Route path="challenge" element={<Challenge />} />
              <Route path="why-bengal-estates" element={<WhyBengalEstates />} />
              <Route path="value" element={<Value />} />
              <Route path="investment" element={<Investment />} />
              <Route path="tenant-portal" element={<TenantPortal />} />
              <Route path="faq" element={<Faq />} />
              <Route path="partnership" element={<Partnership />} />
              <Route path="newsies" element={<News />} />
              <Route path="newsies/:id" element={<NewsDetails />} />
              {/* Only Admin user can access this routes */}
              <Route element={<CheckAdminUser />}>
                <Route path="admin" element={<Admin />} />
                <Route
                  path="admin/property/create"
                  element={<CreateProperty />}
                />
                <Route
                  path="admin/properties"
                  element={<PropertiesController />}
                />
                <Route path="admin/properties/:id" element={<EditProperty />} />
                <Route path="admin/blog/create" element={<CreateBlog />} />
                <Route path="admin/blogs" element={<BlogsController />} />
                <Route path="admin/blog/edit/:id" element={<EditBlog />} />
                <Route
                  path="admin/contact-messages"
                  element={<ContactMessageController />}
                />
                <Route
                  path="admin/enquiry-messages"
                  element={<EnquiryMessageController />}
                />
                <Route
                  path="admin/maintenance-requests"
                  element={<MaintenanceRequestController />}
                />
                <Route path="admin/newsies" element={<CreateNews />} />
                <Route path="admin/newsies" element={<NewsController />} />
                <Route path="admin/newsies/:id" element={<EditNews />} />
                <Route path="admin/sendmail" element={<SendEmail />} />
              </Route>
              {/* Required Signin to access this routes for normal user */}
              <Route element={<CheckSignin />}>
                <Route path="profile" element={<Profile />} />
                <Route path="profile/favorites" element={<Favorite />} />
                <Route path="general_enquiry" element={<GeneralEnquiry />} />
                <Route
                  path="maintenance_request"
                  element={<MaintenanceRequest />}
                />
                <Route path="maintenance_request/chat" element={<ChatBox />} />
                <Route
                  path="/profile/maintenance_request/all"
                  element={<UserRequestMessages />}
                />
              </Route>
            </Route>
            {/* Authenticated routes */}
            <Route element={<CheckSignin />}>
              <Route path="signup" element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
            </Route>
            {/* Page not found route */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
