import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import '../assets/scss/app.scss';
import '../assets/scss/main.scss';
import { ToastContainer } from 'react-toastify';

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	return (
		<>
				<Component {...pageProps} />
				<ToastContainer />
		</>
	);
};

export default MyApp;
