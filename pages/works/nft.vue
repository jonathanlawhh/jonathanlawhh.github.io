<template>
  <div>
    <LandingComponent background-image="/gallery/nft/art-20211107150655.svg"
                      description="[WIP] Word cloud art created using data from YouTube captions"
                      title="NFT art"></LandingComponent>

    <v-row v-for="(nft, i) in nfts" :key="i" class="mb-4">
      <v-col cols="12" md="4" lg="3">
        <h3>{{ nft.title }}</h3>
        <v-item-group mandatory>
          <div class="d-flex flex-wrap">
            <div v-for="(art,j) in nft.art" :key="j">
              <v-item v-slot="{ active, toggle }" style="cursor: pointer">
                <div>
                  <v-img :src="nft.thumbnail" class="nft-preview" style="background-color: grey"
                         :style="active ? 'width: 120px' : 'width: 72px'"
                         @click="nft.selected_art = art.src;toggle()">
                    <p class="font-weight-bold black--text text-center mt-4">#{{ j + 1 }}</p>
                  </v-img>
                </div>
              </v-item>
            </div>
          </div>
        </v-item-group>
      </v-col>

      <v-col cols="12" md="8" lg="9">
        <v-img style="background-color: grey" :src="nft.selected_art">
          <v-btn right bottom absolute :href="nft.selected_art" target="_blank" large>SVG Interactive</v-btn>
        </v-img>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "Nft",
  data() {
    return {
      seo: {
        title: 'NFT art',
        description: 'NFT art created using data',
      },
      nfts: [
        {
          title: 'Uncle Roger Food Review playlist',
          thumbnail: '/gallery/nft/nft-uncle-roger-thumbnail.webp',
          art: [
            {
              src: '/gallery/nft/uncle-roger-reviews-food-min-1.svg'
            },
            {
              src: '/gallery/nft/uncle-roger-reviews-food-min-2.svg'
            }
          ],
          selected_art: '/gallery/nft/uncle-roger-reviews-food-min-1.svg'
        }, {
          title: 'Gordon Ramsay: Ramsay in 10 Playlist',
          thumbnail: '/gallery/nft/ramsay-in-ten-1.svg',
          art: [
            {
              src: '/gallery/nft/ramsay-in-ten-1.svg'
            },
          ],
          selected_art: '/gallery/nft/ramsay-in-ten-1.svg'
        },
      ],
    }
  },
  created() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
  activated() {
    this.$nuxt.$emit('seo_update', this.seo)
  },
}
</script>

<style scoped>
.nft-preview {
  margin: 4px;
  width: 120px;
  transition: all 0.25s ease-in;
}
</style>
