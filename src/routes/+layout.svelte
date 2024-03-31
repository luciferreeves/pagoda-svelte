<script>
  import "../app.css";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  // if query params path=? is present, redirect to that path
  const Path = $page.url.searchParams.get("path");
  if (Path) {
    goto(Path);
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
    background-color: theme(colors.black);
    color: theme(colors.white);
  }

  .overlay {
    width: 840px;
  }
</style>
