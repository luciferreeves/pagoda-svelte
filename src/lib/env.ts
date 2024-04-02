import { dev } from '$app/environment';

const env_dev = {
    api: 'http://localhost:8000',
    ws: 'ws://localhost:8000',
};

const env_prod = {
    api: 'https://api.example.com',
    ws: 'wss://api.example.com',
};

export const env = dev ? env_dev : env_prod;