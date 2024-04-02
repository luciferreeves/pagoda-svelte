import { dev } from '$app/environment';

const env_dev = {
    api: 'http://localhost:8000',
    ws: 'ws://localhost:8000',
};

const env_prod = {
    api: 'https://pagoda.shi.foo',
    ws: 'wss://pagoda.shi.foo',
};

export const env = dev ? env_dev : env_prod;