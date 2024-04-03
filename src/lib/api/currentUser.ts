import { env } from "$lib/env";
import type { User } from "./types";

export const getCurrentUser = async (): Promise<User | null> => {
    const headers = {
        'Authorization': localStorage.getItem('session') || '',
    }

    const res = await fetch(`${env.api}/users/current`, {
        credentials: 'include',
        headers,
    });

    if (res.ok) {
        const user: User = await res.json();
        return user;
    }

    return null;
}