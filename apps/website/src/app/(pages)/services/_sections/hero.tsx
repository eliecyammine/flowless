/// ---------- || HERO TITLE || ---------- ///

function HeroTitle() {
  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
        Transforming <span className="text-primary-foreground">Ideas</span> into Digital Excellence.
      </h1>
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
    </section>
  );
}
