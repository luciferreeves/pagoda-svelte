import type { User } from '$lib/api/types';
import { writable } from 'svelte/store';
import { browser } from "$app/environment"

export const notFound = writable(false);
export const ready = writable(false);

const u = browser && localStorage.getItem('user');
let parsed: User | null = null;
const nf = browser && localStorage.getItem('nf') === 'true';

try {
    parsed = JSON.parse(u as string);
} catch (e) {
    /* noop */
}

const liu: User | null = parsed;

export const currentLoggedInUser = writable<User | null>(liu);

currentLoggedInUser.subscribe((value) => {
    if (browser) return localStorage.setItem('user', JSON.stringify(value));
});

notFound.subscribe((value) => {
    if (browser) return localStorage.setItem('nf', value.toString());
});

nf && notFound.set(true);