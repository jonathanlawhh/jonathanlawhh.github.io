<template>
  <v-card style="border-radius: 8px;" :style="'border-left: 8px solid ' + info.theme_color"
          :color="info.theme_color" variant="outlined">
    <v-card-item class="text-white">
      <div class="title-header pa-4">
        <h3>{{ info.title }}</h3>
        <p style="font-size: 14px">{{ info.duration }}</p>
        <p class="mt-4">{{ info.desc }}</p>
      </div>

      <slot></slot>
    </v-card-item>
  </v-card>

</template>

<script>
export default {
  name: "WorkExperienceCard",
  props: {
    info: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

.title-header {
  border-radius: 4px;
  max-width: 500px;
}

</style>