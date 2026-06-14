<template>
  <div>
    <v-row>
      <v-col cols="12" class="pb-0 pt-0 mt-8">
        <p class="text-right">
          <button type="button" class="a-custom-button" @click="jumpUp">Jump back up</button>
        </p>
      </v-col>
      <v-col cols="5" offset="7" style="border-bottom: aliceblue 1px solid; width: 100%"></v-col>
    </v-row>

    <v-row>
      <v-col cols="2" class="hidden-md-and-down">
        <strong>Jonathan Law Hui Hao</strong>
      </v-col>
      <v-col cols="12" md="12" lg="10" class="text-right">
        <a v-for="(c, i) in contact" :key="i" :href="c.url" target="_blank" rel="noopener"
           class="ml-8 link-social-media">
          <img class="mt-1" :src="'/icons/' + c.icon" :alt="c.media" loading="lazy"/>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      contact: [
        {
          media: 'Facebook',
          url: 'https://facebook.com/jonathanlawhh',
          icon: 'fb.svg',
        },
        {
          media: 'Github',
          url: 'https://github.com/jonathanlawhh',
          icon: 'github.svg',
        },
        {
          media: 'LinkedIn',
          url: 'https://www.linkedin.com/in/jonathanlawhh/',
          icon: 'linkedin.svg',
        },
        {
          media: 'YouTube',
          url: 'https://www.youtube.com/channel/UC3c-D9k1Q4VhbXalew1N-Ag/featured',
          icon: 'youtube.svg',
        },
      ],
    }
  },
  methods: {
    jumpUp() {
      window.scrollTo({
        top: 64,
        left: 0,
        behavior: 'smooth'
      });
    },
  },
}
</script>

<style scoped>

.link-social-media {
  display: inline-block;
  position: relative;
  transition: 0.3s ease-in-out;
}

.link-social-media > img,
.link-social-media > svg {
  width: 26px;
  height: 26px;
}

.link-social-media:hover {
  transform: translateY(-4px);
}

.link-social-media::before {
  width: 0;
  height: 100%;
  content: ' ';
  position: absolute;
  bottom: 0;
  transition: width 0.2s ease-out;
}

.link-social-media:hover::before {
  width: 100%;
  border-bottom: 2px var(--custom-pink) solid;
}
</style>
