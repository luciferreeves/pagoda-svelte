export const ssr = false;

import { getCurrentUser } from "$lib/api/currentUser";
import { currentLoggedInUser } from "../store";

getCurrentUser().then(currentUser =>
    currentLoggedInUser.set(currentUser)
);