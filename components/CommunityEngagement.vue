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
      <DisplayCard
        :title="dp.title"
        :subtitle="getTimestamp(dp.published_at)"
        :body="dp.description"
        action-text="READ MORE"
        :action-url="dp.url"
      ></DisplayCard>
    </v-col>

    <v-col cols="12" md="4" lg="3">
      <DisplayCard title="Read more!" class="mt-lg-8">
        <p>
          I write stuff at
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
      </DisplayCard>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CommunityEngagement',
  components: {
    DisplayCard: () => import('@/components/DisplayCard'),
  },
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
  methods: {
    getTimestamp(inputDate) {
      return inputDate
        ? `${inputDate.split('T')[0].toString()} ${inputDate
            .split('T')[1]
            .split('.')[0]
            .substr(0, 5)
            .toString()}`
        : null
    },
  },
}
</script>
