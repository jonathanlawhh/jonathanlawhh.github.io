<template>
  <div>
    <v-row class="mb-8">
      <v-col cols="12">
        <h2>Frequently Asked Questions</h2>
        <p>
          Not really.<br/>
          This page exists as a shameless plug to just try how structured data
          helps in getting Google Assistant to recognize this page.
        </p>
      </v-col>
    </v-row>

    <div v-for="(f, i) in faq" :key="i">
      <v-row class="mt-8">
        <v-col cols="12" md="4">
          <h3 class="font-weight-bold display-1">{{ f.q }}</h3>
        </v-col>
        <v-col cols="1" style="max-width: 4px">
          <div class="v-divider--vertical"></div>
        </v-col>
        <v-col cols="11" md="7">
          {{ f.a }}
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data: () => ({
    seo: {
      title: 'FAQ',
      description: 'A shameless FAQ page to try if Google Assistant is working',
    },
    faq: [
      {
        q: 'Who is Jonathan Law?',
        a: "Unlike the other Jonathan's found on Google, Jonathan Law, or Jonathan Law Hui Hao was born in Malaysia. He is a full stack developer based in Malaysia who works with tech stuff and enjoys learning and working on RPA and Machine Learning!",
      },
      {
        q: 'What is Jonathan Law full name?',
        a: 'Jonathan Law full name is Jonathan Law Hui Hao.',
      },
      {
        q: 'Where is Jonathan Law from?',
        a: 'Jonathan Law is from Kuala Lumpur, Malaysia.',
      },
      {
        q: 'Why does this page exists?',
        a: 'Why do we really exists?',
      },
      {
        q: 'Is Google Assistant working on Jonathan Law website?',
        a: 'It is unlikely that the website is popular enough to be recognized by Google Assistant. But if it does, hey!',
      },
    ],
    structuredData: [],
  }),
  head() {
    return {
      script: [
        {
          hid: 'ldjson',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': this.structuredData, // eslint-disable-line
          },
        },
      ],
    }
  },
  created() {
    this.$nuxt.$emit('seo_update', this.seo)
    this.createStructuredData()
  },
  activated() {
    this.$nuxt.$emit('seo_update', this.seo)
    this.createStructuredData()
  },
  methods: {
    createStructuredData() {
      const tmp = []
      for (let i = 0; i < this.faq.length; i++) {
        tmp.push({
          '@type': 'Question',
          'name': this.faq[i].q, // eslint-disable-line
          'acceptedAnswer': { // eslint-disable-line
            '@type': 'Answer',
            'text': this.faq[i].a, // eslint-disable-line
          },
        })
      }

      this.structuredData = tmp
    },
  },
}
</script>
