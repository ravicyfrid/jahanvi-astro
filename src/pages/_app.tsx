import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import '../assets/scss/app.scss';
import '../assets/scss/main.scss';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from '@/redux/store';

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
			<Provider store={store}>
				<Component {...pageProps} />
				<ToastContainer />
			</Provider>
		</>
	);
};

export default MyApp;
