import type { User } from '$lib/api/types';
import { writable } from 'svelte/store';

export const hs = writable('/');
export const ready = writable(false);

export const currentLoggedInUser = writable<User | null>(null);
