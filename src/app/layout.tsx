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
        <body className={inter.className}>
          {children}
           <Analytics />
          </body>
      </html>
    );
  }
