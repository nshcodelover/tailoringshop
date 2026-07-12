import './globals.css';

export const metadata = {
  title: 'آتلیه شری | خیاطی سفارشی، لباس مجلسی، عروسانه و سنتی در تهران',
  description: 'آتلیه شری با بیش از ۱۰ سال تجربه در طراحی و دوخت لباس سفارشی.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="theme-color" content="#FF6B9D" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&family=Vazirmatn:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "آتلیه شری",
              "url": "https://shariatelier.ir",
              "telephone": "+98-912-000-0000",
              "email": "hello@shariatelier.ir",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "تهران",
                "addressCountry": "IR"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
