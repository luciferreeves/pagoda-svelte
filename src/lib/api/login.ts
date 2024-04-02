import { env } from "$lib/env";
import type { User } from "./types";

export const loginUser = async (form: HTMLFormElement): Promise<User | null> => {
    const res = await fetch(`${env.api}/users/login`, {
        method: 'POST',
        body: new FormData(form),
        credentials: 'include',
    });

    if (res.ok) {
        const user: User = await res.json();
        return user;
    } else {
        return null;
    }
}