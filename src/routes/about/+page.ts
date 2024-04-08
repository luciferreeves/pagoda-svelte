import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const title = 'What is Pagoda?';
    const description = 'Pagoda is a central hub for all things Neocities. It\'s a place where you engage with the community by building your own guild or establishing a shrine and sharing your creations with others.';

    return {
        meta: {
            title,
            description
        }
    }
};