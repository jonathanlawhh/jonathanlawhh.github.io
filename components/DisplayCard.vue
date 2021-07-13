<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
    <v-card-text>
      {{ body }}
      <slot></slot>
    </v-card-text>
    <v-card-actions v-if="actionUrl">
      <v-spacer></v-spacer>
      <v-btn
        class="hover-fade-in hover-motion"
        text
        :href="actionUrl"
        target="_blank"
        rel="noopener"
        >{{ actionText }}</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DisplayCard',
  props: {
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    body: {
      type: String,
      default: null,
    },
    actionText: {
      type: String,
      default: null,
    },
    actionUrl: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.theme--dark.v-sheet {
  border-color: #d4d4d4;
  border-style: solid;
}
.v-card {
  min-height: 160px;
  transition: all 0.15s ease;
  z-index: 2;
}

.v-card:before {
  height: 100%;
  width: 100%;
  top: 8px;
  left: 8px;
  position: absolute;
  border-right: #d4d4d4 solid 8px;
  border-bottom: #d4d4d4 solid 8px;
  border-radius: 4px;
  content: '';
  transition: all 0.15s ease-in;
  z-index: -1;
}

.v-card:hover {
  transform: translate(-2px, -2px);
}

.v-card:hover:before {
  top: 12px;
  left: 12px;
  border-right: #d4d4d4 solid 12px;
  border-bottom: #d4d4d4 solid 12px;
}
</style>
