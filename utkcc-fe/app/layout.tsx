import './globals.css';
import NavBar from './navbar';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const gMarket = localFont({
  src: [
    {
      path: './GmarketSansTTF/GmarketSansTTFMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './GmarketSansTTF/GmarketSansTTFLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './GmarketSansTTF/GmarketSansTTFBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-main',
});

export const metadata: Metadata = {
  title: {
    template: '%s | UTKCC',
    default: 'UTKCC',
  },
  description: 'The Official Website of UTKCC',
  creator: 'ryubsmile, Hyunjun You and Jin Geon Kim',
  keywords: ['UTKCC', 'University of Toronto', 'Uoft', 'Clubs'],
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const kccEmail = 'koreancommerce@gmail.com';
  const presEmail = 'seohyun.kang@mail.utoronto.ca';
  const vicePresEmail = 'suye.han@mail.utoronto.ca';
  const erDirectorEmail = 'yujin.shim@mail.utoronto.ca';

  return (
    <html lang="en" className={gMarket.className}>
      <body
        className="w-screen min-h-screen"
        // suppressHydrationWarning={true}
      >
        <header>
          <NavBar />
        </header>
        {/* pt-16 */}
        <main>{children}</main>
        <footer>
          <div className="flex flex-col min-h-[20vh] mt-[10vh] p-8 bg-kcc-theme text-white font-normal">
            <div className="text-center">Contact Information</div>
            <div className="flex flex-col my-3 text-xs">
              <div>General Inquiries: {kccEmail}</div>
              <div>President: {presEmail}</div>
              <div>Vice-president: {vicePresEmail}</div>
              <div>Sponsor Inquiries: {erDirectorEmail}</div>
              <div className="pt-8 pb-2 opacity-50">
                Designed by Hyunjun You, <br /> Created by Jaehyuk Ryu and
                Jingeon Kim
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
