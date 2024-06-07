import FreeResourcesSection from './_sections/free-resources';
import PremiumResourcesSection from './_sections/premium-resources';

/// ---------- || RESOURCES PAGE || ---------- ///

export default function ResourcesPage() {
  return (
    <div className="m-auto space-y-10 py-24">
      <FreeResourcesSection />

      <PremiumResourcesSection />
    </div>
  );
}
