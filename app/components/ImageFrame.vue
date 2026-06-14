<template>
  <div
    style="position: relative; max-width: 320px; max-height: 320px; min-width: 320px; min-height: 320px; background-color: #424242;">
    <img :src="imageUrl" :alt="altText" height="100%" class="img"/>
    <div class="f-frame" style="--frame-color: #fff"></div>
  </div>
</template>

<script>
export default {
  name: 'ImageFrame',
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    altText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.img {
  position: static;
  width: 100%;
  height: 100%;
  object-fit: cover;

  z-index: 3;
}

.f-frame {
  position: absolute;
  width: 100%;
  height: 100%;

  border-top: 4px solid transparent;
  border-left: 4px solid transparent;
  border-bottom: 2px solid var(--frame-color);
  border-right: 2px solid var(--frame-color);

  top: 14px;
  left: 14px;
  z-index: 1;
}
</style>
