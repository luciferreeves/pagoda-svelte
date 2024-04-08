<script lang="ts">
  import { logoutUser } from "$lib/api/logout";
  import { currentLoggedInUser } from "../store";

  const logout = async () => {
    await logoutUser();

    currentLoggedInUser.set(null);
  };
</script>

{#if $currentLoggedInUser}
  <div
    class="navigation-nav-2 saira text-l uppercase font-bold border-solid mb-8"
  >
    <div
      class="nav-item-2 text-pagodapurple-shine group hover:text-pagodapink-shine bg-black rounded-tl-xl p-1 flex flex-row gap-2 justify-end transition-all ease-in-out hover:gap-4 duration-300"
    >
    <a href="/">Profile</a>
    <span class="text-black group-hover:text-pagodapurple-shine"> ▎</span>
    </div>
    <div
      class="nav-item-2 text-pagodapurple-shine group hover:text-pagodapink-shine bg-black p-1 flex flex-row gap-2 justify-end transition-all ease-in-out hover:gap-4 duration-300"
    >
    <button on:click={logout} class="cursor-pointer uppercase">Logout</button>
    <span class="text-black group-hover:text-pagodapurple-shine"> ▎</span>
    </div>
  </div>
{/if}

<!-- Services Section -->

<div class="services-header saira text-xl gap-2 flex flex-row uppercase">
  <div class="bg-pagodapurple rounded-tl-2xl px-4"></div>
  <div>Services</div>
  <div class="bg-pagodapink flex-grow rounded-tr-2xl rounded-br-2xl"></div>
</div>
<div
  class="services-nav saira text-l uppercase font-bold border-l-8 border-b-2 mr-8 border-solid border-pagodapurple bg-pagodapurple rounded-br mb-8"
>
  <div
    class="nav-item text-pagodagreen group hover:text-pagodapurple-shine bg-black p-1 flex flex-row gap-2 justify-start transition-all ease-in-out hover:gap-4 duration-300"
  >
    <span class="text-black group-hover:text-pagodagreen"> ▎</span>
    <a href="/">Ad Network</a>
  </div>
  <div
    class="nav-item text-pagodagreen group hover:text-pagodapurple-shine bg-black p-1 flex flex-row gap-2 justify-start transition-all ease-in-out hover:gap-4 duration-300"
  >
    <span class="text-black group-hover:text-pagodagreen"> ▎</span>
    <a href="/">Webring</a>
  </div>
</div>

<!-- About Section -->

<div class="about-header saira text-xl gap-2 flex flex-row uppercase">
  <div class="bg-pagodapink rounded-tl-2xl px-4"></div>
  <div>About</div>
  <div class="bg-pagodapurple flex-grow rounded-tr-2xl rounded-br-2xl"></div>
</div>
<div
  class="about-nav saira text-l uppercase font-bold border-l-8 border-b-2 mr-8 border-solid border-pagodapink bg-pagodapink rounded-br"
>
  <div
    class="nav-item text-pagodapurple-shine group hover:text-pagodapink-shine bg-black rounded-tl-xl p-1 flex flex-row gap-2 justify-start transition-all ease-in-out hover:gap-4 duration-300"
  >
    <span class="text-black group-hover:text-pagodapurple-shine"> ▎</span>
    <a href="/about">What is Pagoda?</a>
  </div>
</div>
