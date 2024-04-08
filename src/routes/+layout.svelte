<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { ready, hs } from "../store";
  import { get } from "svelte/store";
  import { onMount } from "svelte";
  import Header from "../components/header.svelte";
  import LeftSidebar from "../components/left_sidebar.svelte";
  import RightSidebar from "../components/right_sidebar.svelte";

  onMount(() => {
    // if query params path=? is present, redirect to that path
    const path = $page.url.searchParams.get("path");
    let otherQueryParams = "";

    $page.url.searchParams.forEach((value, key) => {
      if (key !== "path") {
        if (otherQueryParams === "") {
          otherQueryParams += `?${key}=${value}`;
        } else {
          otherQueryParams += `&${key}=${value}`;
        }
      }
    });

    if (path) {
      hs.set(path);

      if (get(hs) === path) {
        if (path !== "/_404") {
          goto(
            `/_404${otherQueryParams}${otherQueryParams ? "&" : "?"}referrer=${path}`
          );
        } else {
          goto("/_404" + otherQueryParams);
        }
      } else {
        goto(path + otherQueryParams);
      }
    } else {
      ready.set(true);
    }
  });
</script>

{#if $ready}
  <Header />
  <div class="overlay m-auto text-sm mt-4">
    <div class="flex gap-4">
      <div class="w-1/6">
        <LeftSidebar />
      </div>
      <div class="w-2/3">
        <slot />
      </div>
      <div class="w-1/6">
        <RightSidebar />
      </div>
    </div>
    <div class="footer text-center mt-8">
      <hr />
      <p class="text-xs py-4">
        &copy; {new Date().getFullYear()} Neocities Pagoda. All rights reserved.
        Brought to you by
        <a
          href="https://shi.foo"
          target="_blank"
          rel="noopener noreferrer"
          class="text-pagodapurple-shine hover:text-pagodapink-shine hover:decoration-dotted hover:underline"
          >shi.foo</a
        >.
      </p>
    </div>
  </div>
{/if}

<svelte:head>
  <title>Pagoda — {$page.data.meta.title}</title>
  <meta name="description" content={$page.data.meta.description} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.black);
    color: theme(colors.white);
    font-family: "IBM Plex Sans", sans-serif;
  }
</style>
