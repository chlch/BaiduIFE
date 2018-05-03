<template>
  <h1>Hello {{ name }}!</h1>
</template>
<script>
var data = { name: "342" }
export default {

  data: function () {
    return data;
  }
}
</script>
<style lang="stylus" scoped>
h1 {
  color red
}
</style>