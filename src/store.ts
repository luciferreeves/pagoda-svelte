import { writable } from 'svelte/store';

export const hs = writable('/');
export const ready = writable(false);