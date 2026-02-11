"use client";
import { useState } from 'react';
import AppStoreStats from './AppStoreStats';
import FeaturedAppPreview from './FeaturedAppPreview';

const HeroSection = () => {
	const [selectedAppIndex, setSelectedAppIndex] = useState(0);

	const apps = [
		{
			avatar: 'MW',
			title: 'Mailwizz Pro',
			description: 'Your Personal Fitness Companion',
			rating: '4.9',
			downloads: '500K+',
			activeUsers: '200K+',
			features: ['Cross-Platform', 'Real-time Sync', 'Offline Mode'],
		},
		{
			avatar: 'GH',
			title: 'GitHub Dashboard',
			description: 'Visualize Your Development Journey',
			rating: '4.8',
			downloads: '150K+',
			activeUsers: '80K+',
			features: ['Live Updates', 'Analytics', 'API Integration'],
		},
		{
			avatar: 'CN',
			title: 'CloudNative',
			description: 'Deploy & Manage Cloud Infrastructure',
			rating: '4.7',
			downloads: '45K+',
			activeUsers: '25K+',
			features: ['Docker Support', 'Auto-scaling', 'CI/CD Ready'],
		},
		{
			avatar: 'AS',
			title: 'AutoScript',
			description: 'Automate Your Workflow Effortlessly',
			rating: '4.9',
			downloads: '180K+',
			activeUsers: '95K+',
			features: ['Task Scheduling', 'Custom Triggers', 'Logging'],
		},
	];
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/50 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto px-4 z-10">
				<div className="text-center mb-8">
					<span className="text-lg md:text-xl text-gray-700 mb-2 block font-medium">Hi, I&apos;m</span>
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
						<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
							Danny Anthony
						</span>
					</h1>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-800">Full-Stack Student Developer</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
						focused on
						<span className="text-blue-700 font-medium"> Automation</span>,<span className="text-purple-700 font-medium"> AI</span>, and
						<span className="text-blue-700 font-medium"> Infrastructure</span>
					</p>
				</div>

				<AppStoreStats selectedIndex={selectedAppIndex} onSelectStat={setSelectedAppIndex} />

			<FeaturedAppPreview app={apps[selectedAppIndex]} />

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
				<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	</section>
	);
};

export default HeroSection;
