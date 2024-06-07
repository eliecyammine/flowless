/// ---------- || FREE RESOURCES TITLE || ---------- ///
import ResourceCard from '../_components/resource-card';

function PremiumResourcesTitle() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
        <span className="text-primary-foreground">Premium</span> Resources
      </h1>
    </div>
  );
}

/// ---------- || PREMIUM RESOURCES CONTENT || ---------- ///

function PremiumResourcesContent() {
  return (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
      <ResourceCard
        isDisabled
        url={'https://starters.flowless.xyz'}
        title={'Flowless'}
        titleSpan={'Starters'}
        description={'Premium project starters to accelerate development.'}
      />

      <ResourceCard
        isDisabled
        url={'https://docs.flowless.xyz'}
        title={'Flowless'}
        titleSpan={'Docs'}
        description={'Premium tool for effortless documentation generation.'}
      />
    </div>
  );
}

/// ---------- || PREMIUM RESOURCES SECTION || ---------- ///

export default function PremiumResourcesSection() {
  return (
    <section
      id="premium-resources"
      className="container flex flex-col items-center space-y-8 pt-4 sm:space-y-10 md:space-y-12"
    >
      <PremiumResourcesTitle />

      <PremiumResourcesContent />
    </section>
  );
}
