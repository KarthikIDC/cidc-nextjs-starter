import '@/app/components/ui/global.css';
import { inter } from './components/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gradient-to-r from-indigo-950 to-black">
      <body
        className={`${inter.className} flex flex-col items-center justify-center bg-transparent align-middle antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
