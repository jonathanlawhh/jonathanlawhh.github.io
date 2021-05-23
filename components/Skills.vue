<template>
  <v-row v-once>
    <v-col cols="12">
      <h2>Things that I do</h2>
      <p>And always excited to learn more</p>
    </v-col>

    <v-col
      v-for="(skill, i) in skill_category"
      :key="i"
      cols="12"
      md="6"
      lg="4"
    >
      <v-expansion-panels popout>
        <v-expansion-panel>
          <v-expansion-panel-header
            style="height: 64px"
            class="font-weight-bold"
            >{{ skill.text }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <p
              v-for="(item, j) in skillset.filter((el) => {
                return el.cat === i
              })"
              :key="j"
            >
              {{ item.skill }}
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Skills',
  data: () => ({
    skillset: [
      { skill: 'Tableau, PowerBI, Google Datastudio', cat: 0 },
      { skill: 'Google BigQuery', cat: 0 },
      { skill: 'Selenium, Puppetter', cat: 0 },
      { skill: 'OpenCV', cat: 0 },
      { skill: 'Tensorflow, TensorflowJS, Keras', cat: 0 },

      { skill: 'Python, Golang, C++, C#, .NET, Java', cat: 1 },
      { skill: 'NodeJS, VueJS, Vuetify / HTML, CSS, JS', cat: 1 },
      { skill: 'Laravel / PHP', cat: 1 },
      { skill: 'SQL, MySQL', cat: 1 },
      { skill: 'Docker', cat: 1 },

      { skill: 'Windows Server (AD, DNS, VDI)', cat: 2 },
      { skill: 'Windows 10 (Policies, Security, Deployments)', cat: 2 },
      { skill: 'VMWare Horizon Ecosystem (ESXi/vSphere)', cat: 2 },
      { skill: 'Linux based systems', cat: 2 },
      { skill: 'Networking', cat: 2 },

      { skill: 'Google Cloud Platform', cat: 3 },
      { skill: 'Microsoft Azure', cat: 3 },
      { skill: 'Amazon', cat: 3 },

      { skill: 'Adobe PS, AI, AE', cat: 4 },
      { skill: '3DS Max', cat: 4 },
      { skill: 'Unreal Engine', cat: 4 },

      { skill: 'Getting random cat facts', cat: 5 },
      { skill: 'Copy pasting codes', cat: 5 },
      { skill: 'Brute forcing', cat: 5 },
      { skill: 'Wonder why things dont work', cat: 5 },
      { skill: 'Wonder why they suddenly work', cat: 5 },
    ],
    skill_category: [
      { text: 'AI/ML, RPA, BI', icon: 'remove_red_eye' },
      { text: 'Programming', icon: 'code' },
      { text: 'System Administration', icon: 'devices' },
      { text: 'Cloud', icon: 'cloud_queue' },
      { text: 'Graphics', icon: 'brush' },
      { text: 'Misc', icon: 'explore' },
    ],
  }),
}
</script>

<style>
.v-expansion-panel-header__icon > .v-icon {
  animation: pulse 2s ease-out;
  animation-iteration-count: infinite;
}

.v-expansion-panel-header__icon > .v-icon:hover {
  transform: rotate(360deg);
}

@keyframes pulse {
  0% {
    font-size: 24px;
  }
  10% {
    font-size: 32px;
  }
  20% {
    font-size: 24px;
  }
  100% {
    font-size: 24px;
  }
}
</style>

<style scoped>
.tt {
  font-size: 150%;
}

.v-expansion-panel {
  border: 1px solid #d4d4d4;
}

.v-expansion-panel--active:before {
  top: 8px;
  height: 100%;
  width: 100%;
  position: absolute;
  border-bottom: 2px white solid;
  content: '';
  animation: animate 0.4s ease-in-out;
}

@keyframes animate {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
