"use client"
import { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading or fetch actual data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3 seconds
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Show loader while loading */}
      {loading && <Loader />}
      
      {/* Show main content when loading is complete */}
      <div className={loading ? "hidden" : ""}>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}