<script lang="ts">
  import { putNovelId } from "./api/novel.js";
  const submit = () => {
    console.log("submit");
    putNovelId(submitText);
    console.log(submitText);
  };

  let submitText = "";
</script>

<div class="wrapper">
  <input type="text" bind:value={submitText} />
</div>
<div>
  <button type="button" on:click={submit}>submit</button>
</div>

<style>
</style>
