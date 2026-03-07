import ageGroupPic from "@/assets/all_age_group_pic.jpg";

const AgeGroupSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary font-semibold">
            For Every Lifestyle
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Designed for You
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="flex justify-center">
          <img
            src={ageGroupPic}
            alt="Glamcy for all age groups - The Trendsetter, The Professional, and The Muse"
            className="w-full max-w-4xl rounded-2xl"
            style={{ boxShadow: "var(--shadow-premium)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AgeGroupSection;
