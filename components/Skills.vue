<template>
  <div>
    <v-row v-once>
      <v-col cols="12" class="text-center">
        <h2>Things that I do</h2>
        <p>And always excited to learn more</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(s, i) in skills" :key="i" cols="12" md="6" lg="3" class="mb-8">
        <v-card class="hover-motion" style="position: relative; border: 1px solid white">
          <div class="custom-card-overlay hover-motion">
            <v-card class="custom-card-overlay-card" elevation="12" light>
              <h3 style="font-size: 140%">{{ s.title }}</h3>
            </v-card>
          </div>

          <p class="ml-8" style="margin-top: 40px" v-html="s.description"></p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        {
          title: 'Data',
          description: `- Analyst, Visualizing<br />
           <span class="ml-8 custom-mini-text">(Datastudio, Tableau etc...)</span><br />
           - Engineering<br />
           <span class="ml-8 custom-mini-text">(ETL/ELT, Warehousing, BigQuery)</span>
          `,
        },
        {
          title: 'Artificial Intelligence',
          description: `- Computer vision<br />
            <span class="ml-8 custom-mini-text">(OpenCV, Tensorflow)</span>
          `,
        },
        {
          title: 'Programming',
          description: `- Python, Golang, Laravel <span class="custom-mini-text">(PHP)</span><br />
            - NodeJS, VueJS, Web Technologies <span class="custom-mini-text">(PWA...)</span><br />
            - Scripting <span class="custom-mini-text">(PS, BASH, cronjobs...)</span><br />
            - Grabbing cat facts from APIs<br />
            - Bruteforce until something works
          `,
        },
        {
          title: 'Infra & others',
          description: `- Terraform, Google Cloud, Azure<br />
            - Servers <span class="custom-mini-text">(Active Directory, DNS etc)</span><br />
            - Automations, CI/CD, Github<br />
            - VMware ESXi, vSphere, Horizon<br />
            - Adobe Suite<br />
          `,
        },
      ],
    }
  },
}
</script>

<style scoped>
.custom-card-overlay {
  position: absolute;
  left: 12px;
  top: -24px;
}

.custom-card-overlay-card {
  padding: 8px 16px;
}
</style>

<style>
.custom-mini-text {
  font-size: 12px;
}
</style>
