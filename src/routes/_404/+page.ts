import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const title = '404 Page Not Found';
    const description = 'The page you are looking for does not exist.';

    return {
        meta: {
            title,
            description
        }
    }
};