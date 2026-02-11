'use client';

interface AppData {
	title: string;
	description: string;
	rating: string;
	downloads: string;
	activeUsers: string;
	features: string[];
}

interface FeaturedAppPreviewProps {
	app: AppData;
}

const FeaturedAppPreview = ({ app }: FeaturedAppPreviewProps) => {
	return (
		<div className="max-w-lg mx-auto px-4">
			<div className="group relative bg-gradient-to-b from-gray-200 to-gray-100 rounded-2xl p-1 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-500 shadow-lg">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

				<div className="bg-gradient-to-b from-gray-100 to-white rounded-2xl overflow-hidden relative">
					{/* Decorative Pattern */}
					<div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05]">
						<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
							<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
								<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
							</pattern>
							<rect width="100" height="100" fill="url(#grid)" />
						</svg>
					</div>

					<div className="relative p-8">
						{/* Badge */}
						<div className="flex justify-center">
							<div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-400/30 transition-colors">
								<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
								<span className="text-blue-700 text-sm font-medium">Featured App</span>
							</div>
						</div>

						{/* App Info */}
						<div className="text-center mt-6">
							<h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
								{app.title}
							</h3>
							<p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors font-medium">{app.description}</p>

							{/* Stats Grid */}
							<div className="grid grid-cols-3 gap-4 mb-6">
								<div className="space-y-1">
									<div className="flex items-center justify-center gap-1 text-yellow-600">
										<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
										</svg>
										<span className="font-semibold">{app.rating}</span>
									</div>
									<p className="text-xs text-gray-600 font-medium">Rating</p>
								</div>
								<div className="space-y-1">
									<div className="flex items-center justify-center gap-1 text-blue-700">
										<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
											<path d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" />
										</svg>
										<span className="font-semibold">{app.downloads}</span>
									</div>
									<p className="text-xs text-gray-600 font-medium">Downloads</p>
								</div>
								<div className="space-y-1">
									<div className="flex items-center justify-center gap-1 text-green-700">
										<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
											<path d="M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22A5,5 0 0,0 22,17A5,5 0 0,0 17,12M17,10A7,7 0 0,1 24,17A7,7 0 0,1 17,24C14.21,24 11.8,22.36 10.67,20H1V17C1,14.34 6.33,13 9,13C9.6,13 10.34,13.07 11.12,13.2C12.36,11.28 14.53,10 17,10M10,17C10,16.3 10.1,15.62 10.29,15C9.87,14.93 9.43,14.9 9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H10.09C10.03,17.74 10,17.37 10,17M9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4M9,5.9A2.1,2.1 0 0,0 6.9,8A2.1,2.1 0 0,0 9,10.1A2.1,2.1 0 0,0 11.1,8A2.1,2.1 0 0,0 9,5.9Z" />
										</svg>
										<span className="font-semibold">{app.activeUsers}</span>
									</div>
									<p className="text-xs text-gray-600 font-medium">Active Users</p>
								</div>
							</div>

							{/* Features Pills */}
							<div className="flex flex-wrap justify-center gap-2">
								{app.features.map((feature, index) => (
									<span
										key={index}
										className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 border border-gray-300 group-hover:border-gray-400 group-hover:text-gray-800 transition-colors font-medium"
									>
										{feature}
									</span>
								))}
							</div>
						</div>
					</div>

					{/* Decorative Corner Elements */}
					<div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
						<div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
						<div className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
					</div>
					<div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
						<div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
						<div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedAppPreview;
