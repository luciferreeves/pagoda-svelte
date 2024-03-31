<script>
  import "../app.css";
  import { page } from "$app/stores";
</script>

<div class="overlay h-full m-auto">
  <div class="banner relative">
    <video
      src="videos/backdrop.mp4"
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
    max-width: 1024px;
  }

  .pt-140 {
    padding-top: 140px;
  }
</style>
