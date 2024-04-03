<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { ready, hs } from "../store";
  import { get } from "svelte/store";
  import { onMount } from "svelte";
  import Header from "../components/header.svelte";
  import Sidebar from "../components/sidebar.svelte";

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
  <div class="overlay h-full m-auto text-sm">
    <div class="flex gap-2 mt-4">
      <div class="w-1/4 h-screen overflow-y-auto">
        <Sidebar />
      </div>
      <div class="w-3/4 h-screen overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
{/if}

<svelte:head>
  <title>Pagoda — {$page.data.meta.title}</title>
  <meta name="description" content={$page.data.meta.description} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.black);
    color: #faebfb;
  }
</style>
