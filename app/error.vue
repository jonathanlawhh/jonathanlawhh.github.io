<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Jonathan Law</h1>
        </v-col>
      </v-row>

      <v-row class="sticky-header" style="top: 0">
        <v-col cols="12" class="hr-line pa-0"></v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <h2 class="font-weight-black" style="font-size: 8rem">{{ error.statusCode }}...</h2>
          <p style="font-size: 3rem">
            Now this is awkward innit
          </p>
        </v-col>
        <v-col cols="12">
          <v-btn @click="handleError" variant="outlined" size="large" class="hover-fade-in hover-motion mt-16">[ Go back to home page ]</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Awkward Moment',
  ogTitle: 'Awkward Moment',
  ogImage: 'https://jonathanlawhh.com/img/me.webp',
  twitterCard: 'summary_large_image',
})

const props = defineProps({
  error: Object
})

const handleError = () => clearError({redirect: '/'})
</script>

