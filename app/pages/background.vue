<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h2>My education and work history</h2>
        <p>On the weekends, I work as an on-demand chauffeur for my family.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="9" :offset-md="i % 3" lg="6" :offset-lg="i % 8" v-for="(info, i) in infos" :key="i">
        <WorkExperienceCard :info="info">
          <template v-if="info.title === 'AirAsia'">
            <v-divider class="ml-2" style="width: 60%" thickness="3" :color="info.theme_color"></v-divider>
            <v-col cols="12">
              <h4 class="ml-4 mb-0">2020 - Business Intelligence Analyst</h4>
              <p class="ml-5">
                Understanding business requirements and using data to assist in decision-making.
                Identifying opportunities to improve workflows and processes using technology.
                BI dashboard building, hands-on system development and managing GCP projects too.
              </p>
            </v-col>
            <v-col cols="12">
              <h4 class="ml-4 mb-0">2019 - Developer</h4>
              <p class="ml-5">
                Developing ETLs, BI analysis, cloud infrastructure management
                and building systems that automate tasks and processes.
              </p>
            </v-col>
          </template>

          <template v-if="info.title === 'Bsc Hons in Intelligent Systems'">
            <v-divider class="ml-2" style="width: 60%" thickness="3" :color="info.theme_color"></v-divider>
            <img class="ma-4" src="/img/graduation_me.webp" style="width: 80%" alt="Jonathan's graduation slide" />
          </template>


          <template v-if="info.title === 'Technical Assistant'">
            <v-divider class="ml-2" style="width: 60%" thickness="3" :color="info.theme_color"></v-divider>
            <v-col cols="12">
              <h4 class="ml-4 mb-0">2019 - Promoted to Lab Chief</h4>
              <p class="ml-5">
                Managing servers, coordinating the Technical Assistants
                team, setting up and enforcing SOPs for APU
              </p>
            </v-col>

            <v-col cols="12">
              <h4 class="ml-4 mb-0">2018 - Promoted to Head of Software Department</h4>
              <p class="ml-5">
                Managing and planning maintenance on campus, setting up
                servers and coordinating the Software Department
              </p>
            </v-col>

            <v-col cols="12">
              <h4 class="ml-4 mb-0">2017 - Promoted to Software Department</h4>
              <p class="ml-5">
                Creating images, automating labs administration
              </p>
            </v-col>
          </template>
        </WorkExperienceCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Background',
  data: () => ({
    seo: {
      title: 'Background',
      description: 'Discover my career journey from APU to AirAsia and the diverse experiences that have shaped my skills and perspective. From education to work history, explore my background and accomplishments in the field of IT. Visit my website now.',
    },
    infos: [
      {
        title: 'IKEA Supply Malaysia',
        duration: '2022 - current',
        desc:
          'Business Support Specialist at IKEA Distribution Centre, Malaysia. Process improvement, RCA, project management, data and reporting.',
        theme_color: 'orange',
        icon: 'work',
        direction: 'l',
        act: false,
      },
      {
        title: 'AirAsia',
        duration: '2019 - 2022',
        desc:
          'Working in AirAsia cargo subsidiary, Teleport. Promoted from an intern to working full time.',
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
}
</script>
