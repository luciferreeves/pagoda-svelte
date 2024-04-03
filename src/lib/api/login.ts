import { env } from "$lib/env";
import type { Session, User } from "./types";

export const loginUser = async (form: HTMLFormElement): Promise<User | null> => {
    const res = await fetch(`${env.api}/users/login`, {
        method: 'POST',
        body: new FormData(form),
        credentials: 'include',
    });

    if (res.ok) {
        const session: Session = await res.json();
        localStorage.setItem('session', session.key);

        return session.user;
    } else {
        return null;
    }
}