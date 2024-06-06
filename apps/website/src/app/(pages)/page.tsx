import { Logo } from '@/components/shared/logo';

export default function HomePage() {
  return (
    <div className="text-center">
      <p className="text-4xl">Welcome</p>
      <p className="text-2xl">to</p>
      <p className="font-logo text-6xl">Flowless</p>

      <div className="m-4 flex justify-center">
        <Logo width="30%" />
      </div>
    </div>
  );
}
