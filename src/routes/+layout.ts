export const ssr = false;

import { getCurrentUser } from "$lib/api/currentUser";
import { currentLoggedInUser } from "../store";

const currentUser = await getCurrentUser();
currentLoggedInUser.set(currentUser);
