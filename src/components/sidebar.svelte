<script lang="ts">
  import { loginUser } from "$lib/api/login";
  import { logoutUser } from "$lib/api/logout";
  import type { User } from "$lib/api/types";
  import { currentLoggedInUser } from "../store";

  const login = async (e: Event) => {
    e.preventDefault();

    const user: User | null = await loginUser(e.target as HTMLFormElement);

    if (user) {
      currentLoggedInUser.set(user);
    }
  };

  const logout = async () => {
    await logoutUser();

    currentLoggedInUser.set(null);
  };
</script>

{#if $currentLoggedInUser}
  <p>You are logged in as {$currentLoggedInUser.username}</p>
  <button on:click={logout}>Logout</button>
{:else}
  <div
    class="bg-gradient-to-b from-amber-800 to-amber-950 text-center rounded-tl-md rounded-tr-md p-1"
  >
    <p class="font-bold">Login</p>
  </div>
  <div class="rounded-br-md rounded-bl-md bg-yellow-100 p-2 text-black">
    <form on:submit={login}>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
{/if}
