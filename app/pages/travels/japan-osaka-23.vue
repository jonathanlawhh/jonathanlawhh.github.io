<template>
  <div>
    <TravelPageVideo title="Travels Japan 23" subtitle="Osaka Kyoto Nara" travel_date="01 . 07 . 2023 - 07. 07 . 2023"
                     youtube-id="DNGlpDPrDbs"></TravelPageVideo>

    <v-row>
      <v-col cols="12" md="7">
        <v-row class="d-flex flex-wrap">
          <v-col v-for="(t, i) in travel_obj" :key="i" class="align-self-stretch">
            <v-card style="min-height: 124px;" width="100%" class="text-center align-self-center align-content-center"
                    variant="outlined">
              <v-card-item class="d-inline-block">
                <p class="text-no-wrap font-weight-black pa-1" style="background: white; color: #262626">{{
                    t.place
                  }}</p>
                <p v-if="t.desc" class="pa-1">{{ t.desc }}</p>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="5">
        <v-img src="/map/osaka-map.webp" cover height="100%"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "japan-osaka-23",
  data() {
    return {
      travel_obj: [
        {place: 'Arashiyama Bamboo Forest', desc: 'Many bamboo...'},
        {place: 'Kyoto Gionmachi Minamigawa', desc: 'Geisha street'},
        {place: 'Dotonbori Street / Glico Guy', desc: 'Very happening at night, food and entertainment'},
        {place: 'Umeda', desc: 'Shopping town'},
        {place: 'Nara Deer Park', desc: 'Oh deers'},
        {place: 'teamLab Botanical Garden', desc: 'Many lights, buy tickets online'},
        {place: 'Universal Studio Japan', desc: 'There is single people lane, usually faster'},
        {place: 'Osaka Castle', desc: 'Long walk in from train station...'},
        {place: 'Tsutenkaku/Glico Man Tower', desc: 'Ate skewers nearby'},
        {place: 'Shinsekai Market', desc: 'Just a wet market'},
      ]
    }
  }
}
</script>
