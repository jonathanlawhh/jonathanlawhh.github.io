<template functional>
  <v-row>
    <v-col
      cols="5"
      offset="7"
      class="pt-0 mt-8"
      style="border-bottom: aliceblue 1px solid; width: 100%"
    ></v-col>
    <v-col cols="12">
      <p class="text-right">Last updated on {{ props.lastUpdate }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    lastUpdate: {
      type: String,
      default: '2021',
    },
  },
}
</script>
