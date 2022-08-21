<template>
  <div>
    <LandingComponent background-image="/gallery/nft/art-20211107150655.svg"
                      description="A venture into creating NFT art using data from YouTube captions, or computed generated art"
                      title="NFT art"></LandingComponent>

    <v-row v-for="(nft, i) in nfts" :key="i" class="mb-8">
      <v-col cols="12">
        <h3>{{ nft.title }}</h3>
        <p>{{ nft.desc }}</p>

        <v-row>
          <v-col v-for="(art, j) in nft.art" :key="j" cols="6" md="4" lg="3">
            <v-img :src="art.thumbnail" style="background-color: grey; height: 240px" class="hover-motion">
              <v-btn v-if="art.src" class="hover-motion" right bottom absolute :href="art.src" target="_blank" large>
                {{ nft.action }}
              </v-btn>
            </v-img>
          </v-col>

          <v-col v-if="nft.shop" cols="6" md="4">
            <DisplayCard
              title="View more"
              subtitle="View full collection on opensea.io market"
            >
              <a :href="nft.shop" rel="noopener" target="_blank"
                 class="a-custom-button white--text">
                {{ nft.shop }}
              </a>
            </DisplayCard>

          </v-col>
        </v-row>

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
        description: 'A venture into creating NFT art using data from YouTube captions, or computed generated art.',
        image:
          '/img/og/work_nft_cover.png'
      },
      nfts: [
        {
          title: 'Digit of Pi',
          desc: 'Pi, is an irrational number, a mathematical constant that seems infinite. Be part of the growing collection as more Pi digits are added in.',
          shop: 'https://opensea.io/collection/digit-of-pi',
          action: 'View item',
          art: [
            {
              thumbnail: '/gallery/nft/digitofpi-1.webp',
              src: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/5554991987641350561461118944922476071054144833987466959004623652721749131265/'
            },
            {
              thumbnail: '/gallery/nft/digitofpi-2.webp',
              src: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/5554991987641350561461118944922476071054144833987466959004623653821260759041/'
            },
            {
              thumbnail: '/gallery/nft/digitofpi-3.webp',
              src: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/5554991987641350561461118944922476071054144833987466959004623654920772386817'
            },
            {
              thumbnail: '/gallery/nft/digitofpi-4.webp',
              src: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/5554991987641350561461118944922476071054144833987466959004623656020284014593'
            },
            {
              thumbnail: '/gallery/nft/digitofpi-5.webp',
              src: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/5554991987641350561461118944922476071054144833987466959004623657119795642369'
            }
          ],
        }, {
          title: 'Uncle Roger Food Review playlist',
          desc: 'Taken from Uncle Roger egg fried rice review YouTube series.',
          action: 'Full resolution',
          art: [
            {
              thumbnail: '/gallery/nft/uncle-roger-reviews-food-min-1.webp',
              src: '/gallery/nft/uncle-roger-reviews-food-min-1.svg'
            },
            {
              thumbnail: '/gallery/nft/uncle-roger-reviews-food-min-2.webp',
              src: '/gallery/nft/uncle-roger-reviews-food-min-2.svg'
            }
          ],
        }, {
          title: 'Gordon Ramsay: Ramsay in 10 Playlist',
          desc: 'Based on Gordan Ramsay in 10 YouTube series, a collection of word art of the words he uses frequently in his playlist.',
          shop: 'https://opensea.io/collection/gordan-ramsay-in-10',
          action: 'Full resolution',
          art: [
            {
              thumbnail: '/gallery/nft/ramsay-in-ten-1.webp',
              src: '/gallery/nft/ramsay-in-ten-1.svg'
            },
          ],
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
