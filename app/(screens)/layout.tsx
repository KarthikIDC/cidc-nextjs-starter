import '@/app/components/ui/global.css';
import { inter } from '../components/ui/fonts';
import { AuroraBackground } from '../components/ui/aurora-background';
import { BackgroundBeams } from '../components/ui/background-beams';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundBeams />
      {children}
    </>
  );
}
