<template>
  <div>
    <v-row class="mb-8">
      <v-col cols="12">
        <h2>Extra courses</h2>
        <p>
          Online courses that I took when they were free (It's expensive ok).
          <br />
          Can't share my YouTube history sooo 😏
        </p>
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6" lg="3">
            <v-card outlined style="background-color: transparent">
              <v-card-text>
                <p>Courses related to BigQuery and Machine Learning</p>
                <v-btn
                  color="brown"
                  target="_blank"
                  href="https://app.pluralsight.com/profile/jonathanlawhh"
                  >Pluralsight</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="3">
            <v-card outlined style="background-color: transparent">
              <v-card-text>
                <p>Courses related to Google Cloud Infrastructure</p>
                <v-btn
                  color="blue"
                  target="_blank"
                  href="https://www.qwiklabs.com/public_profiles/80fd39b3-19aa-47bf-9681-d17be9468f9e"
                  >Qwiklabs</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>My education and work history</h2>
        <p>Where I studied and worked</p>
      </v-col>
    </v-row>

    <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
      <v-timeline-item
        v-for="(info, i) in infos"
        v-once
        :key="i"
        :color="`${info.theme_color} lighten-1`"
        :right="info.direction === 'r'"
        :left="info.direction === 'l'"
      >
        <template v-if="!$vuetify.breakpoint.smAndDown" #opposite>
          <span
            :class="`headline font-weight-bold ${info.theme_color}--text`"
            v-text="info.duration"
          ></span>
        </template>

        <v-lazy
          v-model="info.act"
          :options="{ threshold: 0.5 }"
          min-height="200"
          transition="fade-transition"
        >
          <v-card>
            <v-card-title :class="`${info.theme_color} lighten-1`">
              <v-icon dark size="32" class="mr-4">{{ info.icon }}</v-icon>
              <h3 class="white--text font-weight-light">{{ info.title }}</h3>
              <v-card-subtitle v-if="$vuetify.breakpoint.smAndDown">{{
                info.duration
              }}</v-card-subtitle>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12">{{ info.desc }}</v-col>

                <template
                  v-if="info.title === 'Bsc Hons in Intelligent Systems'"
                >
                  <img
                    src="/img/graduation_me.webp"
                    style="width: 100%"
                    alt="Jonathan's graduation slide"
                  />
                </template>

                <template v-if="info.title === 'Technical Assistant'">
                  <v-col cols="12" md="6">
                    <b>2019 - Promoted to Lab Chief</b><br />
                    <span class="text--secondary">
                      Managing servers, coordinating the Technical Assistants
                      team, setting up and enforcing SOPs for APU
                    </span>
                  </v-col>

                  <v-col cols="12" md="6">
                    <b>2018 - Promoted to Head of Software Department</b><br />
                    <span class="text--secondary">
                      Managing and planning maintenance on campus, setting up
                      servers and coordinating the Software Department
                    </span>
                  </v-col>

                  <v-col cols="12" md="6">
                    <b>2017 - Promoted to Software Department</b><br />
                    <span class="text--secondary">
                      Creating images, automating labs administration
                    </span>
                  </v-col>
                </template>
              </v-row>
            </v-container>
          </v-card>
        </v-lazy>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: 'Background',
  data: () => ({
    seo: {
      title: 'Background',
      description: 'A brief summary on my education and work history',
    },
    infos: [
      {
        title: 'AirAsia',
        duration: '2019 - NOW',
        desc:
          'Full stack developer at AirAsia logistic arm, Teleport.\n' +
          'Promoted from an intern to working full time. Developing and deploying solutions on Google Cloud. ' +
          'Few projects include developing ETLs from SQL Server to BigQuery, Datastudio for BI Reporting',
        theme_color: 'red',
        icon: 'work',
        direction: 'r',
        act: false,
      },
      {
        title: 'Technical Assistant',
        duration: '2016 - 2020',
        desc: 'Managing computer labs and assisting staff and students on technical issues. Setup and managing VMWare ESXi, VMWare Horizon and vSphere for VDI',
        theme_color: 'green',
        icon: 'work',
        direction: 'l',
        act: false,
      },
      {
        title: 'Bsc Hons in Intelligent Systems',
        duration: '2018 - 2020',
        desc: 'Did my Degree in Asia Pacific University. Here is my graduation slide that the uni created (ps. they did not include my cat photo despite me sending an email about it).',
        theme_color: 'cyan',
        icon: 'school',
        direction: 'r',
        act: false,
      },
      {
        title: 'eJeeban',
        duration: '2018 - 2019',
        desc: 'Part-time full stack web developer.',
        theme_color: 'purple',
        icon: 'work',
        direction: 'l',
        act: false,
      },
      {
        title: 'Diploma in Software Engineering',
        duration: '2016 - 2018',
        desc: 'Did my Diploma in Asia Pacific University too, surprised huh. No graduation slide because we actually had to pay for the graduation ceremony.',
        theme_color: 'orange',
        icon: 'school',
        direction: 'r',
        act: false,
      },
      {
        title: 'Stop scrolling already',
        duration: '1998 - 2016',
        desc: 'Nothing you need to know about my puberty years...',
        theme_color: 'gray',
        icon: 'child_care',
        direction: 'l',
        act: false,
      },
    ],
  }),
  created() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
  activated() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
}
</script>
