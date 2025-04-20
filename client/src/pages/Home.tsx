import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rajesh Goyal | Technology Leader</title>
        <meta
          name="description"
          content="Rajesh Goyal - Technology Leader & Engineering Manager with expertise in Cloud Strategy, DevOps, and Enterprise Architecture"
        />
        <meta
          name="keywords"
          content="Technology Leader, Engineering Manager, Cloud, DevOps, Enterprise Architecture"
        />
      </Helmet>
      <div className="font-sans antialiased bg-white text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Achievements />
          <Skills />
          <Certifications />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
