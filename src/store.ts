import type { User } from '$lib/api/types';
import { writable } from 'svelte/store';
import { browser } from "$app/environment"

export const hs = writable('/');
export const ready = writable(false);

const liu: User | null = browser && JSON.parse(localStorage.getItem('user') ?? 'null');

export const currentLoggedInUser = writable<User | null>(liu);

currentLoggedInUser.subscribe((value) => {
    if (browser) return localStorage.setItem('user', JSON.stringify(value));
});