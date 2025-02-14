/* eslint-disable @typescript-eslint/explicit-function-return-type */
const meta = require('./public/manifest.json');

const config = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rawcdn.githack.com'
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'assets.smold.app'
			},
			{
				protocol: 'https',
				hostname: '**.yearn.fi'
			}
		]
	},
	async rewrites() {
		return [
			{
				source: '/js/script.js',
				destination: 'https://plausible.io/js/script.js'
			},
			{
				source: '/api/event',
				destination: 'https://plausible.io/api/event'
			}
		];
	},
	redirects() {
		return [
			{
				source: '/github',
				destination: meta.github,
				permanent: true
			},
			{
				source: '/twitter',
				destination: meta.twitterURI,
				permanent: true
			},
			{
				source: '/telegram',
				destination: meta.telegramURI,
				permanent: true
			},
			{
				source: '/medium',
				destination: meta.mediumURI,
				permanent: true
			},
			{
				source: '/governance',
				destination: meta.governanceURI,
				permanent: true
			},
			{
				source: '/snapshot',
				destination: 'https://snapshot.org/#/veyfi.eth',
				permanent: true
			}
		];
	},
	env: {
		/* 🔵 - Yearn Finance **************************************************
		 ** Config over the RPC
		 **********************************************************************/
		WEB_SOCKET_URL: {
			1: process.env.WS_URL_MAINNET,
			10: process.env.WS_URL_OPTIMISM,
			137: process.env.WS_URL_POLYGON,
			250: process.env.WS_URL_FANTOM,
			42161: process.env.WS_URL_ARBITRUM
		},
		JSON_RPC_URL: {
			1: process.env.RPC_URL_MAINNET,
			10: process.env.RPC_URL_OPTIMISM,
			137: process.env.RPC_URL_POLYGON,
			250: process.env.RPC_URL_FANTOM,
			42161: process.env.RPC_URL_ARBITRUM
		},
		ALCHEMY_KEY: process.env.ALCHEMY_KEY,
		ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
		INFURA_PROJECT_ID: process.env.INFURA_PROJECT_ID,
		WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,

		PARTNER_ID_ADDRESS: '0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52',
		SHOULD_USE_PARTNER_CONTRACT: true,
		RANGE_LIMIT: 1_000_000,

		YDAEMON_BASE_URI: process.env.YDAEMON_BASE_URI,
		YEARN_BASE_URI: 'https://yearn.fi',
		// YDAEMON_BASE_URI: 'https://ydaemon.ycorpo.com',
		// YDAEMON_BASE_URI: 'http://localhost:8080',
		// YDAEMON_BASE_URI: 'https://api.ycorpo.com',
		BASE_YEARN_ASSETS_URI: 'https://assets.smold.app/api/token',
		BASE_YEARN_CHAIN_URI: 'https://assets.smold.app/api/chain',
		SMOL_ASSETS_URL: 'https://assets.smold.app/api'
	}
};

module.exports = config;
