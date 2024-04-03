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

<div class="navigation-header libre-barcode text-xl gap-2 flex flex-row">
  <div class="bg-pagodagreen rounded-tl-2xl rounded-bl-2xl px-4"></div>
  <div class="libre-barcode">NAVIGATION</div>
  <div class="bg-pagodapink flex-grow rounded-tr-2xl"></div>
</div>
<div
  class="navigation-nav saira text-l uppercase font-bold border-r-8 border-b-2 ml-8 border-solid border-pagodapink bg-pagodapink rounded-br"
>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black rounded-tr-xl py-1 flex flex-row gap-2 justify-end"
  >
    <a href="/" class="block group-hover:text-pagodagreen-shine">Home</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black py-1 flex flex-row gap-2 justify-end"
  >
    <a href="/" class="block group-hover:text-pagodagreen-shine">Guilds</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black py-1 flex flex-row gap-2 justify-end"
  >
    <a href="/" class="block group-hover:text-pagodagreen-shine">Shrines</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black py-1 flex flex-row gap-2 justify-end"
  >
    <a href="/" class="block group-hover:text-pagodagreen-shine">Marketplace</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black py-1 flex flex-row gap-2 justify-end"
  >
    <a href="/" class="block group-hover:text-pagodagreen-shine"
      >Found a Guild</a
    >
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
</div>

{#if $currentLoggedInUser}
  <p>You are logged in as {$currentLoggedInUser.username}</p>
  <button on:click={logout}>Logout</button>
{:else}
  <div class="login-form-header libre-barcode text-xl flex flex-row gap-2 mt-4">
    <div class="bg-pagodagreen rounded-tl-2xl rounded-bl-2xl px-4"></div>
    <div class="libre-barcode">LOGIN</div>
    <div class="bg-pagodapurple flex-grow"></div>
  </div>
{/if}
