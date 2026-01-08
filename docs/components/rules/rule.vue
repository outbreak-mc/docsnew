<template>
  <div class="rule">
    <p>
      <span>{{ props.num }}.</span> <span><slot></slot></span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['num'])
</script>

<style lang="scss">
.rule {
  margin: 2em 0;

  .rule {
    margin-left: 2em;
    margin-top: .5em;
    margin-bottom: .5em;
  }

  p {
    line-height: 1.5em;
    margin: 0;
  }

  p span:first-child {
    font-weight: 700;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0.25em;
  }

  .punishment {
    margin-top: .5em;
  }
}
</style>