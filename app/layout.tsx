import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-family',
    weight: '400',
});

export const metadata: Metadata = {
    title: 'My portfolio',
    description: 'My name is vedant naik and this is my Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={manrope.className}>{children}</body>
        </html>
    );
}
