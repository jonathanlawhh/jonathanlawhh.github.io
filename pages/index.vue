<template>
  <div>
    <v-row class="mb-8">
      <v-col xl="3" lg="4" md="6" sm="12">
        <ImageFrame image-url="/img/me.webp" style="width: 100%; height: 100%" class="ma-2"
                    alt-text="An image of Jonathan Law on a yacht"></ImageFrame>
      </v-col>

      <v-col xl="9" lg="8" md="6" sm="12">
        <p class="text-h4 mb-4">Hi there !</p>
        <p>
          I am
          <span class="my_name font-weight-bold">Jonathan Law Hui Hao</span>,
          a Business Support Specialist in Malaysia.
          <br/><br/>
          I combine logistics and process improvement with technology.<br/>
          Whether it's optimizing workflows, analyzing data, or automating tasks to drive efficiency,
          I find joy in the challenge of navigating complex systems.
          <br/><br/>
          No ChatGPT was involved here, just many years of scrolling LinkedIn and Grammarly.
          <br/><br/>
          Anyway, do say hi via the <button type="button" class="a-custom-button" @click="jumpDown">site chatbox</button> below the page or
          <span class="text-no-wrap"> email
            <a class="a-custom-button" rel="nofollow" href="mailto:me@jonathanlawhh.com">me@jonathanlawhh.com</a>
          </span>
          <br/><br/>
        </p>
        <p id="whack_intro_block" class="mt-8 font-weight-bold whack_intro"></p>
      </v-col>
    </v-row>

    <Activities class="mb-16"></Activities>

    <Skills class="mb-8"></Skills>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    intros: [
      'I CODE PROGRAMS',
      'I CREATE ROBOTS',
      'I GIVE THEM EYES',
      'I SPIN WEBS',
      'I GRAB CAT FACTS',
    ],
    current_intro: 0,
  }),
  mounted() {
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
  methods: {
    jumpDown(){
      window.scrollTo({
        top: 9999,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
.my_name {
  color: var(--custom-green);
  font-size: 110%;
}

.whack_intro {
  min-height: 36px;
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

