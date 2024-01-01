<template>
  <div>
    <v-row v-once>
      <v-col cols="12" class="text-center">
        <h2>Things I do</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card variant="outlined" rounded="lg">
          <v-card-item>
            <p>
              <br/>
              <strong>What I tell people I do:</strong>
              <br/>
              [
              <button v-for="s in [
              'Logistics and supply chain management',
              'Data analysis and visualization',
              'Process improvement',
              'Automation, AI',
              'System administrator'
              ]" class="ma-2 hover-motion a-custom-button">{{ s }}
              </button>
              ]
              <br/><br/><br/>
              <strong>What I actually do:</strong><br/>
              I grab cat facts and send them to the company group chat every time
              someone requests to move something from the warehouse.
              <br/>
              <br/>
            </p>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12" class="text-center">
        <h2>Things I do, specifically</h2>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col v-for="(s, i) in skills" :key="i" cols="12" md="6" lg="3" class="mb-8">
        <v-card class="hover-motion" style="position: relative; border: 1px solid white; overflow: visible;">
          <div class="custom-card-overlay hover-motion">
            <v-card class="custom-card-overlay-card" elevation="12" theme="light">
              <h3 style="font-size: 140%">{{ s.title }}</h3>
            </v-card>
          </div>

          <v-card-item>
            <p class="ml-8" style="margin-top: 40px" v-html="s.description"></p>
          </v-card-item>
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
           <span class="ml-8 custom-mini-text">(Power BI, Tableau etc...)</span><br />
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
