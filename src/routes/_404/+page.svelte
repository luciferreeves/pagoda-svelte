<script lang="ts">
  import { page } from "$app/stores";
  let path = "/_404";
  let otherQueryParams = "";

  $page.url.searchParams.forEach((value, key) => {
    if (key !== "referrer" && key !== "path") {
      if (otherQueryParams === "") {
        otherQueryParams += `?${key}=${value}`;
      } else {
        otherQueryParams += `&${key}=${value}`;
      }
    }

    if (key === "referrer") {
      path = value;
    }
  });

  history.pushState({}, null, path + otherQueryParams);
</script>

<div class="border-white p-4 border-solid text-center border-2 rounded">
  <h1 class="text-xl mb-2 font-bold underline">404 Page Not Found!</h1>
  <p class="text-sm">
    The page you are looking for does not exist. Please check the URL and try
    again.
  </p>
</div>
