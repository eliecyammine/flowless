import ResourceCard from '../_components/resource-card';

/// ---------- || FREE RESOURCES TITLE || ---------- ///

function FreeResourcesTitle() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
        <span className="text-primary-foreground">Free</span> Resources
      </h1>
    </div>
  );
}

/// ---------- || FREE RESOURCES CONTENT || ---------- ///

function FreeResourcesContent() {
  return (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
      <ResourceCard
        url={'https://ui.flowless.xyz'}
        title={'Flowless'}
        titleSpan={'UI'}
        description={
          'A free, open-source library of customizable UI components built on Next.js 14 and Tailwind CSS.'
        }
      />

      <ResourceCard
        url={'https://ds.flowless.xyz'}
        title={'Flowless'}
        titleSpan={'Design System'}
        description={'A free, open-source design system for streamlined development.'}
      />
    </div>
  );
}

/// ---------- || FREE RESOURCES SECTION || ---------- ///

export default function FreeResourcesSection() {
  return (
    <section
      id="free-resources"
      className="container flex flex-col items-center space-y-8 pt-4 sm:space-y-10 md:space-y-12"
    >
      <FreeResourcesTitle />

      <FreeResourcesContent />
    </section>
  );
}
