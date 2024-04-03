export const ssr = false;

import { browser } from "$app/environment";
import { getCurrentUser } from "$lib/api/currentUser";
import { currentLoggedInUser } from "../store";

if (browser) {
    getCurrentUser().then(currentUser =>
        currentLoggedInUser.set(currentUser)
    );
}