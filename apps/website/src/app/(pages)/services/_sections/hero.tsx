/// ---------- || HERO TITLE || ---------- ///

function HeroTitle() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
        Transforming <span className="text-primary-foreground">Ideas</span> into Digital Excellence.
      </h1>
    </div>
  );
}

/// ---------- || HERO DESCRIPTION || ---------- ///

function HeroDescription() {
  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
      <p className="text-muted-foreground max-w-[530px] text-center sm:max-w-[600px] sm:text-lg md:max-w-[700px] md:text-xl">
        At Flowless, we specialize in turning your vision into reality. We deliver high-quality
        software and website solutions tailored to your unique needs while providing essential
        resources and tools for developers.
      </p>

      <p className="text-foreground/80 max-w-[530px] text-center font-medium sm:max-w-[600px] sm:text-lg md:max-w-[700px] md:text-xl">
        Explore our offerings and discover how we can help you achieve your goals.
      </p>
    </div>
  );
}

/// ---------- || HERO SECTION || ---------- ///

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-5 flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12"
    >
      <HeroTitle />

      <HeroDescription />
    </section>
  );
}
