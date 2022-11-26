<template>
  <v-card class="outer-card" :style="'background-image:url(' + imgObj.src + ')'">
    <!--<v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>-->
    <v-card-text style="padding: 0">
      <v-card class="inner-card">
        <v-card-title class="text-bg">{{ imgObj.title }}</v-card-title>

        <v-card-text class="inner-card-text">
          <p>
            {{ imgObj.description }}</p>
        </v-card-text>

        <v-card-actions v-if="imgObj.view">
          <v-spacer></v-spacer>
          <v-btn class="hover-fade-in hover-motion" text :href="imgObj.view" target="_blank" rel="noopener">
            {{ imgObj.view_text ? imgObj.view_text : 'Click here to see more' }}
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
  background-position-x: -120px;
  margin: 8px;
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

.inner-card {
  min-height: 240px;
  margin-left: 40%;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}

.inner-card-text {
  min-height: 80px;
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

  .inner-card-text {
    min-height: 12px;
  }

  .outer-card {
    background-size: cover;
    background-position: bottom;
    min-height: 60px;
  }
}
</style>


<!--
<template>
  <div class="d-flex flex-row justify-center" style="flex-shrink: 1">
    <div class="img_container d-flex flex-column align-center justify-center"
         :style="'background-image:url(' + imgObj.src + ')'">
      <h3 class="hl-text title" v-text="imgObj.title"></h3>
      <p class="hl-text desc" v-text="imgObj.description"></p>
      <a v-if="imgObj.view" class="hl-text link mt-12 white--text text-decoration-none" :href="imgObj.view"
         target="_blank" rel="noreferrer">
        {{ imgObj.view_text ? imgObj.view_text : 'Click here to see more' }}
      </a>
    </div>
  </div>
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
.img_container {
  width: 250px;
  height: 250px;

  background-color: #424242;
  background-size: cover;
  background-position: center;
  transition: ease-in-out 0.3s;
  backdrop-filter: opacity(0);
}

.img_container:hover::before {
  content: ' ';
  position: absolute;
  height: 101%;
  width: 101%;
  max-height: 480px;
  max-width: 480px;
  background-image: inherit;
  background-size: inherit;
  background-position: inherit;
  filter: blur(2px) brightness(55%);
}

.hl-text {
  position: relative;
  line-height: 1.8;
  transition: ease-in-out 0.3s;
  opacity: 0;
  z-index: 10;
  width: 70%;
}

.hl-text:after {
  background: $custom-green;
  content: '';
  display: block;
  left: 0;
  top: 18px;
  position: absolute;
  pointer-events: none;
  overflow: hidden;
  height: 25%;
  z-index: -1;
}

.title {
  font-weight: 600;
}

.title:after {
  width: 65%;
}

.desc:after {
  width: 90%;
}

.link:after {
  width: 40%;
  height: 40%;
  top: 12px;
  background: transparent;
  border-bottom: 8px solid $custom-pink;
  border-right: 8px solid transparent;

  transition: left 0.6s ease-in-out;
}

.link:hover:after {
  height: 100%;
  cursor: pointer;
  top: 0;
  left: 30%;

  border-right: 12px solid transparent;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid $custom-pink;

  animation: border-expand 0.6s ease-in-out;
}

@keyframes border-expand {
  0% {
    left: 0;
    border-bottom: 8px solid $custom-pink;
    border-right: 8px solid transparent;
  }

  10% {
    left: 0;
    border-bottom: 2px solid $custom-pink;
    border-right: 2px solid transparent;
  }

  30% {
    left: 0;
    border-right: 2px solid transparent;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 2px solid $custom-pink;
  }

  100% {
    left: 30%;
    border-right: 12px solid transparent;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid $custom-pink;
  }
}

.img_container:hover {
  width: 480px;
  height: 320px;
}

.img_container:hover > .hl-text {
  opacity: 1;
  transform: translate3d(50%, 0px, 0px);
}

.img_container:hover > .desc {
  transition-delay: 0.15s;
}

.img_container:hover > .link {
  transition-delay: 0.25s;
}

@media only screen and (max-width: 600px) {
  .img_container:hover > .hl-text {
    transform: translate3d(5%, 0px, 0px);
  }

  .hl-text {
    width: 80%;
  }

  .img_container:hover::before {
    height: 99%;
    width: 99%;
    box-shadow: inset 0 0 250px 48px #121212;
    filter: none;
  }
}
</style>
-->
