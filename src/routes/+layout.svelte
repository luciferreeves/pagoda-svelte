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
  <div class="overlay h-full m-auto bg-black bg-opacity-50 text-sm">
    <Header />
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
</svelte:head>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.black);
    color: theme(colors.slate.50);
  }

  .overlay {
    width: 840px;
  }
</style>
