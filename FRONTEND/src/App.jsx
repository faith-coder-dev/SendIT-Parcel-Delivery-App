import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import NotFoundPage from "./NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import WhoAreYouPage from "./WhoAreYouPage";
import FeaturesPage from "./FeaturesPage";
import PricingPage from "./PricingPage";
import ContactPage from "./ContactPage";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import CreateOrder from "./CreateOrder";
import ViewOrders from "./ViewOrders";
import TrackOrder from "./TrackOrder";
import AdminPanel from "./AdminPanel";
import AdminDashboard from "./AdminDashboard";
import Driver from "./Driver";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Landing />} />
        <Route path="/who-are-you" element={<WhoAreYouPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* USER */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create-order" element={<CreateOrder />} />
        <Route path="/dashboard/view-orders" element={<ViewOrders />} />
        <Route path="/dashboard/track-order" element={<TrackOrder />} />

        {/* DRIVER */}
        <Route path="/driver/dashboard" element={<Driver />} />

        {/* ADMIN */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/admin" element={<AdminPanel />} />

        {/* FALLBACK */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
