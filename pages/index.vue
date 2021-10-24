<template>
  <div>
    <v-row class="mb-8">
      <v-col xl="3" lg="4" md="6" sm="12">
        <ImageFrame
          image-url="/img/me.webp"
          style="width: 100%; height: 100%"
          class="ma-2"
          alt-text="An image of Jonathan Law on a yacht"
        ></ImageFrame>
      </v-col>

      <v-col xl="9" lg="8" md="6" sm="12">
        <p class="display-1">Hi there !</p>
        <p>
          I am
          <span class="my_name font-weight-bold">Jonathan Law Hui Hao</span>, a
          full stack developer based in Malaysia. I work with tech stuff
          including but not limited to software's, hardware's and
          infrastructures.<br /><br />
          Tbh I am not sure what people write on their personal website, so I
          will end it here. Feel free to browse around this site and hopefully
          there are contents that made your visit un-wasted!<br />
          <span style="font-size: 80%"
            >( Also to increase your duration on this site so my demographics
            looks nice :p )</span
          ><br />
        </p>
        <p id="whack_intro_block" class="mt-8 font-weight-bold whack_intro"></p>
        <p class="mt-10 text-right font-weight-light">
          {{ cat_fact }}<br />(catfact.ninja, 2021)
        </p>
      </v-col>
    </v-row>

    <CommunityEngagement class="mb-8"></CommunityEngagement>

    <Skills class="mb-8"></Skills>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    CommunityEngagement: () => import('@/components/CommunityEngagement'),
    Skills: () => import('@/components/Skills'),
    ImageFrame: () => import('@/components/ImageFrame'),
  },
  data: () => ({
    seo: {
      title: 'Something About Me',
      description:
        "I'm a fullstack developer based in Malaysia who works with tech stuff and enjoys learning and working on RPA and Machine Learning!",
    },
    age: 22,
    cat_fact: '',
    intros: [
      'I CODE PROGRAMS',
      'I CREATE ROBOTS',
      'I GIVE THEM EYES',
      'I SPIN WEBS',
      'I GRAB CAT FACTS',
    ],
    current_intro: 0,
  }),
  async fetch() {
    await this.$nuxt.$emit('seo_update', this.seo)
  },
  mounted() {
    const d = new Date()
    this.age = d.getFullYear() - 1998

    if (process.env.NODE_ENV !== 'development') {
      fetch('https://catfact.ninja/fact')
        .then((r) => r.json())
        .then((r) => {
          this.cat_fact = r.fact.replace('/', '').replace('"', '')
        })
    }

    let iter = 1
    const whackBlock = document.getElementById('whack_intro_block')
    setInterval(() => {
      whackBlock.classList.remove('whack_intro')
      iter = iter === this.intros.length - 1 ? 0 : iter + 1
      whackBlock.innerText = this.intros[iter]

      // eslint-disable-next-line no-void
      void whackBlock.offsetWidth
      whackBlock.classList.add('whack_intro')
    }, 3000)
  },
  activated() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
}
</script>

<style lang="scss" scoped>
.my_name {
  color: $custom-green;
  font-size: 110%;
}
</style>

<style scoped>
.whack_intro {
  font-size: 150%;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  letter-spacing: 0.1em;
  display: inline-block;
  max-width: max-content;
  animation: typing 3s steps(20, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  0% {
    width: 0;
  }
  5% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  95% {
    width: 0;
  }
  100% {
    width: 0;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
