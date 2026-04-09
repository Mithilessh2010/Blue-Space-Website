"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyAttend from "@/components/WhyAttend";
import Sponsors from "@/components/Sponsors";
import Venue from "@/components/Venue";
import FAQ from "@/components/FAQ";
import Organizers from "@/components/Organizers";
import Footer from "@/components/Footer";
import AdminTrigger from "@/components/AdminTrigger";
import PasscodeModal from "@/components/PasscodeModal";
import AdminPanel from "@/components/AdminPanel";
import { useState } from "react";

export default function Home() {
  const [showPasscode, setShowPasscode] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleAdminAccess = () => {
    setShowPasscode(false);
    setShowAdmin(true);
  };

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <WhyAttend />
      <Sponsors />
      <Venue />
      <FAQ />
      <Organizers />
      <Footer onAdminTrigger={() => setShowPasscode(true)} />

      <AdminTrigger onTrigger={() => setShowPasscode(true)} />

      {showPasscode && (
        <PasscodeModal
          onClose={() => setShowPasscode(false)}
          onSuccess={handleAdminAccess}
        />
      )}

      {showAdmin && (
        <AdminPanel onClose={() => setShowAdmin(false)} />
      )}
    </main>
  );
}
