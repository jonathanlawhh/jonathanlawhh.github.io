<template>
  <v-card class="outer-card">
    <img :src="imgObj.src" class="outer-card-bg" :alt="imgObj.description">

    <v-card-text style="padding: 0">
      <v-card class="inner-card">
        <v-card-title class="text-bg mt-4 text-wrap">{{ imgObj.title }}</v-card-title>

        <v-card-text class="inner-card-text">
          <p>{{ imgObj.description }}</p>
        </v-card-text>

        <v-card-actions v-if="imgObj.view">
          <v-spacer></v-spacer>

          <v-btn v-if="imgObj.view[0] === 'h' || imgObj.view. slice(0, 9) === '/gallery/'"
                 class="hover-fade-in hover-motion" variant="text" :href="imgObj.view" size="small"
                 target="_blank" rel="noopener">
           [ {{ imgObj.view_text ? imgObj.view_text : 'Click here to see more' }} ]
          </v-btn>

          <v-btn v-if="imgObj.view[0] === '/' && imgObj.view. slice(0, 9) !== '/gallery/'"
                 class="hover-fade-in hover-motion" variant="text" :to="imgObj.view">
          [  {{ imgObj.view_text ? imgObj.view_text : 'Click here to see more' }} ]
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'GalleryImageComponent',
  props: {
    imgObj: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.theme--dark.v-sheet {
  border-color: #d4d4d4;
  border-style: solid;
}

.outer-card {
  min-height: 240px;
  transition: all 0.15s ease;
  z-index: 2;
  background-size: cover;
  background-position: center;
  background-color: #262626;
  margin: 8px;
  position: relative;
  overflow: visible;
  border: #d4d4d4 solid 1px;
}

.outer-card:before {
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

.outer-card:hover {
  transform: translate(-2px, -2px);
}

.outer-card:hover:before {
  top: 12px;
  left: 12px;
  border-right: #d4d4d4 solid 12px;
  border-bottom: #d4d4d4 solid 12px;
}

.outer-card-bg {
  position: absolute;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
}

.inner-card {
  min-height: 240px;
  margin-left: 40%;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  transition: all 0.2s ease-in;
  border-top: #d4d4d4 solid 1px;
  border-bottom: #d4d4d4 solid 1px;
}

.inner-card:hover {
  margin-left: 38%;
}

.inner-card-text {
  min-height: 100px;
}

@media only screen and (max-width: 600px) {
  .inner-card {
    margin-left: 0;
    margin-top: 80%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    min-height: 48px;
  }

  .inner-card:hover {
    margin-top: 75%;
    margin-left: 0;
  }

  .inner-card-text {
    min-height: 12px;
  }

  .outer-card {
    background-position: center;
    min-height: 60px;
    overflow: hidden;
  }

  .outer-card-bg {
    background-position: center;
    max-width: none;
    max-height: none;
  }
}
</style>
