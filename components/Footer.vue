<template>
  <div>
    <v-row>
      <v-col cols="12" class="pb-0 pt-0 mt-8">
        <p class="text-right">
          <span class="a-custom-button" @click="jumpUp">Jump back up</span>
          <v-icon small>arrow_upward</v-icon>
        </p>
      </v-col>
      <v-col cols="5" offset="7" style="border-bottom: aliceblue 1px solid; width: 100%"></v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <a class="link-social-media ml-4" @click="createChat">
          <svg x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" fill="white">
            <g>
              <path
                :class="chat_loading_class"
                d="M256,0C114.624,0,0,106.112,0,237.024c0,74.592,37.216,141.12,95.392,184.576V512l87.168-47.84
			c23.264,6.432,47.904,9.92,73.44,9.92c141.376,0,256-106.112,256-237.024S397.376,0,256,0z M281.44,319.2l-65.184-69.536
			L89.056,319.2l139.936-148.544l66.784,69.536l125.6-69.536L281.44,319.2z"
              />
            </g>
          </svg>
        </a>

        <a v-for="(c, i) in contact" :key="i" :href="c.url" target="_blank" rel="noopener"
           class="ml-8 link-social-media">
          <img class="mt-1" :src="'/icons/' + c.icon" :alt="c.media" loading="lazy"/>
        </a>
      </v-col>

      <v-col cols="12" md="4">
        <p class="text-right">Last updated on {{ lastUpdate }}</p>
      </v-col>
    </v-row>

    <v-overlay :value="overlay" z-index="10" opacity=".9">
      <div style="max-width: 90%" class="ml-4">
        <p class="display-1">Ooops</p>

        <p>
          It seems like there is an ad blocker stopping Messenger from popping
          out!<br/>
          This is completely normal as ad blockers generally treat Facebook
          domains on other sites "trackers"
        </p>

        <p>
          Do not worry as Messenger on this site does not load until you choose
          to chat me!<br/>
          You can go ahead and disable your ad blocker for this site,<br/>
          or reach me via jon_law98@hotmail.com
        </p>

        <a class="a-custom-button" @click="overlay = false">
          <v-icon small>close</v-icon>
          Close this prompt
        </a>
      </div>
    </v-overlay>

    <!-- Messenger Chat plugin Code -->
    <div id="fb-root"></div>
    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
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
      chatWidgetIntiated: false,
      canReachFB: false,
      overlay: false,
      chat_loading_class: '',
    }
  },
  methods: {
    jumpUp() {
      this.$vuetify.goTo(64)
    },
    createChat() {
      if (!this.chatWidgetIntiated) {
        this.chat_loading_class = 'loading-chat'
        fetch('https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js')
          .then(() => {
            const chatbox = document.getElementById('fb-customer-chat')
            chatbox.setAttribute('page_id', '107274521174225')
            chatbox.setAttribute('attribution', 'biz_inbox')

            window.fbAsyncInit = function () {
              // eslint-disable-next-line no-undef
              FB.init({
                xfbml: true,
                version: 'v11.0',
              })
            }
            ;(function (d, s, id) {
              let js
              const fjs = d.getElementsByTagName(s)[0]
              if (d.getElementById(id)) return
              // eslint-disable-next-line prefer-const
              js = d.createElement(s)
              js.id = id
              js.src =
                'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
              fjs.parentNode.insertBefore(js, fjs)
            })(document, 'script', 'facebook-jssdk')

            this.chatWidgetIntiated = true
          })
          .catch((r) => {
            this.overlay = true
          })
          .finally(() => {
            setTimeout(() => {
              this.chat_loading_class = ''
            }, 3000)
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-chat {
  stroke: #00a56a;
  stroke-dasharray: 500;
  stroke-dashoffset: 1000;
  stroke-width: 32px;
  animation: dash 1s infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

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
  border-bottom: 2px $custom-pink solid;
}
</style>
