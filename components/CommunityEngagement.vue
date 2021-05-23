<template>
  <v-row>
    <v-col cols="12">
      <h2>Community Engagement</h2>
      <p>
        Posts by me on
        <a href="https://dev.to/jonathanlawhh" rel="noopener" target="_blank">
          <img
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            alt="Jonathan Law's DEV Community Profile"
            height="30"
            width="30"
            style="filter: invert(95%); vertical-align: middle"
          />
        </a>
      </p>
    </v-col>

    <v-col v-for="(dp, i) in dev_posts" :key="i" cols="12" md="4" lg="3">
      <v-card>
        <v-card-title>{{ dp.title }}</v-card-title>
        <v-card-subtitle v-if="dp.published_at"
          >{{ dp.published_at.split('T')[0] }}
          {{
            dp.published_at.split('T')[1].split('.')[0].substr(0, 5)
          }}</v-card-subtitle
        >
        <v-card-text>{{ dp.description }}</v-card-text>
        <v-card-actions v-if="dp.url">
          <v-btn text :href="dp.url" target="_blank" rel="noopener"
            >Read more</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" md="4" lg="3">
      <v-card class="mt-lg-8">
        <v-card-title>Read more!</v-card-title>
        <v-card-text
          ><p>
            I write stuff at
            <a href="https://dev.to/jonathanlawhh" target="_blank">
              <img
                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                alt="Jonathan Law's DEV Community Profile"
                height="30"
                width="30"
                style="filter: invert(95%); vertical-align: middle"
              />
            </a></p
        ></v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CommunityEngagement',
  props: {
    filter: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    dev_posts: [{}, {}, {}],
  }),
  mounted() {
    fetch('https://dev.to/api/articles?username=jonathanlawhh')
      .then((r) => r.json())
      .then((r) => {
        if (this.filter) {
          r = r.filter((item) => item.tag_list.includes(this.filter))
        } else {
          r.length = 3
        }

        this.dev_posts = r
      })
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
