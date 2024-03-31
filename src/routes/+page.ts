import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const title = 'Home';
    const description = 'Welcome to Neocities Pagoda — a central hub for sharing and discovering art, blinkies, buttons, and connect with other creators.';

    return {
        meta: {
            title,
            description
        }
    }
};