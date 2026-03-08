import Layout from "@/components/Layout";
import AboutSection from "@/components/AboutSection";
import PromiseSection from "@/components/PromiseSection";
import AgeGroupSection from "@/components/AgeGroupSection";

const About = () => {
  return (
    <Layout>
      <div className="pt-20">
        <AboutSection />
        {/* <PromiseSection /> */}
        <AgeGroupSection />
      </div>
    </Layout>
  );
};

export default About;
