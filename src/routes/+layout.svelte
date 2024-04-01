<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { history } from "../store";
  import { get } from "svelte/store";

  // if query params path=? is present, redirect to that path
  const path = $page.url.searchParams.get("path");
  let otherQueryParams = "";

  $page.url.searchParams.forEach((value, key) => {
    if (key !== "path") {
      otherQueryParams += otherQueryParams
        ? `&${key}=${value}`
        : `?${key}=${value}`;
    }
  });

  if (path) {
    history.set(path);

    if (get(history) === path) {
      goto("/_404", { replaceState: true });
    } else {
      goto(path + otherQueryParams);
    }
  }
</script>

<div class="overlay h-full m-auto">
  <div class="banner relative" style="height: 360px">
    <video
      src="https://ik.imagekit.io/pagoda/videos/backdrop.mp4?updatedAt=1711871826766"
      autoplay
      loop
      muted
      playsinline
      class="w-full h-auto absolute"
    />
    <img
      src="images/banner.png"
      alt="banner"
      class="w-92 h-auto relative mx-auto pt-140"
      style="top: 105px;"
    />
  </div>
  <slot />
</div>

<svelte:head>
  <title>Pagoda — {$page.data.meta.title}</title>
  <meta name="description" content={$page.data.meta.description} />
</svelte:head>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.slate.950);
    color: theme(colors.slate.50);
  }

  .overlay {
    width: 840px;
  }
</style>
