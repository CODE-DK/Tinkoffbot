import OpenAPI from '@tinkoff/invest-openapi-js-sdk';
import dotenv from 'dotenv';

dotenv.config();

const api = new OpenAPI({ 
    apiURL: process.env.URL,
    socketURL: process.env.URL_SOCKET,
    secretToken: process.env.TOKEN
});

async function main() {
	try {
		const { figi, name } = await api.searchOne({ figi: 'BBG004731489' });
        console.log(`Found figi=${figi} for name=${name}`);
        const candales = await api.candlesGet({
            figi,
            from: '2019-08-19T18:38:33.131642+03:00',
            to: '2019-08-19T18:48:33.131642+03:00', 
            interval: '1min'
        });
		console.log(candales);
	} catch (e) {
		console.log(e);
	}
}
main();
