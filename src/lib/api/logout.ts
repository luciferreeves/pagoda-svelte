import { env } from "$lib/env";

export const logoutUser = async (): Promise<void> => {
    await fetch(`${env.api}/users/logout`, {
        method: 'POST',
        credentials: 'include',
    });

    localStorage.removeItem('session');
}