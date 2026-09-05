import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal-context";
import CallbackModal from "@/components/CallbackModal";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Ремонт окон в Гродно — ремонтокна.бел",
  description:
    "Ремонт и обслуживание пластиковых, алюминиевых и деревянных окон в Гродно и области. Выезд мастера в день обращения, гарантия до 5 лет.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ModalProvider>
          {children}
          <CallbackModal />
        </ModalProvider>
      </body>
    </html>
  );
}
