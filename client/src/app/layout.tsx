import '@/globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

export const metadata = {
	title: 'My Mantine app',
	description: 'I have followed setup instructions carefully'
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript defaultColorScheme="auto" />
			</head>
			<body>
				<MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
			</body>
		</html>
	);
}
