import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import CodeEditor from "@/components/CodeEditor";
import LanguageShowcase from "@/components/LanguageShowcase";
import WhyUs from "@/components/WhyUs";
import GetStarted from "@/components/GetStarted";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CodeEditor />
      <LanguageShowcase />
      <WhyUs />
      <GetStarted />
      <ContactSection />
      <Footer />
    </main>
  );
}
