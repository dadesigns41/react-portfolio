import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Danny Anthony – Linux-First Full-Stack Developer',
	description:
		'Welcome to my portfolio. I am a Linux-first full-stack developer focused on building production-ready systems, self-hosted infrastructure, and practical automation. I document my journey as I close the gap between learning and real-world software engineering.',
	keywords: [
		'Full Stack Developer',
		'Linux',
		'JavaScript',
		'TypeScript',
		'Node.js',
		'Next.js',
		'React',
		'Docker',
		'Self-Hosting',
		'DevOps Fundamentals',
		'Automation Scripts',
		'Developer Tooling',
		'Infrastructure Learning',
		'Open Source',
		'Learning in Public',
	],
	authors: [{ name: 'Danny Anthony' }],
	creator: 'Danny Anthony',
	openGraph: {
		title: 'Danny Anthony – Full-Stack & Linux Developer',
		description:
			'Linux-first developer building real systems: full-stack apps, automation, and self-hosted infrastructure. Explore my projects and development journey.',
		url: 'https://your-domain.com',
		siteName: 'Danny Anthony – Developer Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Danny Anthony – Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Danny Anthony – Linux-First Developer',
		description:
			'Linux-first full-stack developer focused on real-world systems, automation, and self-hosted infrastructure.',
		creator: '@dadesigns', // change if needed
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
