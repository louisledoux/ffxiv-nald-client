import React from 'react';
import Navigation from '../containers/Navigation/Navigation';
import { routes } from '../routes/routes';
import TopBar from '../containers/TopBar/TopBar';
// import '../styles/globals.css';
import '../styles/style.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or old__pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full">
        <div className="flex flex-row h-full">
          <Navigation routes={routes} />
          <div className="flex flex-col gap-2 w-full">
            <TopBar />
            <div id="content" className="m-4 h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
