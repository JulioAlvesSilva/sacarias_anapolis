import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sacarias e big bag Anápolis",
  description: "Se você procura sacarias e Big Bags de qualidade, você esta no lugar certo! Na Sacarias e Big Bags Anápolis, oferecemos produtos de primeira linha e atendimento excepcional. Solicite seu orçamento agora e garanta as melhores sacarias e big bags do mercado.",
  icons: "/imagens/logo.png",
  keywords: "sacarias, Big Bags, sacarias de qualidade, Big Bags de qualidade, Sacarias e Big Bags Anápolis, sacarias Anápolis, Big Bags Anápolis, sacarias de primeira linha, sacarias para venda, sacarias e Big Bags, sacarias de alta qualidade, orçamento de sacarias, melhores sacarias do mercado"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Sacarias e big bag Anápolis" />
        <meta property="og:title" content="Sacarias e big bag Anápolis" />
        <meta property="og:description" content="Se você procura sacarias e Big Bags de qualidade, você esta no lugar certo! Na Sacarias e Big Bags Anápolis, oferecemos produtos de primeira linha e atendimento excepcional. Solicite seu orçamento agora e garanta as melhores sacarias e big bags do mercado." />
        <meta property="og:image" content="/imagens/logo.png" />
        <meta property="og:url" content="https://sacarias-anapolis.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sacarias e big bag Anápolis" />
        <meta name="twitter:description" content="Se você procura sacarias e Big Bags de qualidade, você esta no lugar certo! Na Sacarias e Big Bags Anápolis, oferecemos produtos de primeira linha e atendimento excepcional. Solicite seu orçamento agora e garanta as melhores sacarias e big bags do mercado." />
        <meta name="twitter:image" content="/imagens/logo.png" />
        <meta name="twitter:url" content="https://sacarias-anapolis.vercel.app/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://sacarias-anapolis.vercel.app/",
            "logo": "/imagens/logo.png"
          })
        }} />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
