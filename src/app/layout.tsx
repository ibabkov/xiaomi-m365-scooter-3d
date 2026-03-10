import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import '../styles/theme.css';
import { APP_DESCRIPTION, DISPLAY_APP_TITLE, LANGUAGE } from '../constants/app';
import { Layout } from '../components/Layout';

export const metadata: Metadata = {
	title: DISPLAY_APP_TITLE,
	description: APP_DESCRIPTION,
	icons: {
		icon: '/favicon.ico',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	minimumScale: 1,
	userScalable: false,
	viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang={LANGUAGE}>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
