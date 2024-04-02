import { env } from "$lib/env";
import type { User } from "./types";

export const getCurrentUser = async (): Promise<User | null> => {
    const res = await fetch(`${env.api}/users/current`, {
        credentials: 'include',
    });
    if (res.ok) {
        const user: User = await res.json();
        return user;
    }

    return null;
}