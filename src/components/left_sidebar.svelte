<script lang="ts">
  import { loginUser } from "$lib/api/login";
  import type { User } from "$lib/api/types";
  import { currentLoggedInUser } from "../store";

  const login = async (e: Event) => {
    e.preventDefault();

    const user: User | null = await loginUser(e.target as HTMLFormElement);

    if (user) {
      currentLoggedInUser.set(user);
    }
  };
</script>

{#if !$currentLoggedInUser}
  <div
    class="login-form text-l uppercase font-bold mb-8"
  >
    <form on:submit={login} class="flex flex-col">
      <div class="form-group bg-black flex flex-row gap-2">
        <label for="username" class="text-pagodapurple-shine saira"
          >Username</label
        >
        <input
          type="username"
          name="username"
          id="username"
          class=" text-pagodapurple-shine w-full text-xs font-normal outline-none bg-black"
          placeholder="username"
          required
        />
      </div>
      <div class="form-group bg-black mt-4 flex flex-row gap-2">
        <label for="password" class="text-pagodapurple-shine saira"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          class=" text-pagodapurple-shine w-full text-xs font-normal outline-none bg-black"
          placeholder="password"
          required
        />
      </div>
      <div class="form-group bg-black mt-4 flex flex-row gap-1">
        <button
          type="submit"
          class="bg-pagodapink w-full text-white rounded-bl-xl py-1 px-2 saira uppercase font-bold hover:bg-pagodapurple transition-all ease-in-out duration-300"
        >
          Login
        </button>
        <a
          href="/register"
          class="bg-pagodapurple w-full text-white inline-block rounded-br-xl py-1 px-2 saira uppercase font-bold hover:bg-pagodapink transition-all ease-in-out duration-300"
          >Register</a
        >
      </div>
    </form>
  </div>
{/if}

<div class="navigation-header saira text-xl gap-2 flex flex-row">
  <div class="bg-pagodagreen rounded-tl-2xl rounded-bl-2xl px-4"></div>
  <div>NAVIGATION</div>
  <div class="bg-pagodapink flex-grow rounded-tr-2xl"></div>
</div>
<div
  class="navigation-nav saira text-l uppercase font-bold border-r-8 border-b-2 ml-8 border-solid border-pagodapink bg-pagodapink rounded-br mb-8"
>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black rounded-tr-xl py-1 flex flex-row gap-2 justify-end transition-all ease-in-out hover:gap-4 duration-300"
  >
    <a href="/">Home</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black py-1 flex flex-row gap-2 justify-end transition-all ease-in-out hover:gap-4 duration-300"
  >
    <a href="/">Guilds</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black py-1 flex flex-row gap-2 justify-end transition-all ease-in-out hover:gap-4 duration-300"
  >
    <a href="/">Shrines</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black py-1 flex flex-row gap-2 justify-end transition-all ease-in-out hover:gap-4 duration-300"
  >
    <a href="/">Marketplace</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black py-1 flex flex-row gap-2 justify-end transition-all ease-in-out hover:gap-4 duration-300"
  >
    <a href="/">Found a Guild</a>
    <span class="text-black group-hover:text-pagodapink-shine"> ▎</span>
  </div>
</div>

<!-- User Guild QuickLinks Section -->

<div class="guild-header saira text-xl gap-2 flex flex-row">
  <div class="bg-pagodapurple rounded-tl-2xl rounded-bl-2xl px-4"></div>
  <div>GUILDS</div>
  <div class="bg-pagodagreen flex-grow rounded-tr-2xl rounded-br-2xl"></div>
</div>
<div class="guild-nav saira text-l uppercase font-bold mb-8">
  <div
    class="nav-item text-right text-pagodagreen group hover:text-pagodagreen-shine bg-black rounded-tr-xl py-1 flex flex-row gap-2 justify-end transition-all ease-in-out hover:gap-4 duration-300"
  >
    <a href="/">Guild 1</a>
    <span class="text-black group-hover:text-pagodapurple-shine"> ▎</span>
  </div>
</div>
