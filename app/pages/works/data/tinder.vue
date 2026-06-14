<template>
  <div>
    <LandingComponent title="Tinder Data"
                      description="Summing up my year with an in-depth tutorial on data scrapping and analysis on Tinder users around me according to my preference."
                      background-image="/img/work_data_tinder_cover.webp"></LandingComponent>

    <v-row>
      <v-col cols="11" md="7" lg="4">
        <iframe width="100%" height="100%"
                src="https://datastudio.google.com/embed/reporting/4b986367-24b0-4244-b7aa-6e8d3e2fc1b2/page/E17hC"
                frameborder="0" class="dashboard-iframe" allowfullscreen></iframe>
      </v-col>

      <v-col cols="12" md="5" lg="7">
        <h3>What Tinder users' demographics are around me?</h3><br>
        <p>Tinder as we know it is a matchmaking app that both parties have to swipe right on each other to match. Over
          the years, Tinder has evolved and unofficially been used as an app for hookups or just finding friends to
          socialize with.
          Our goal today is to find out what are people around me really looking for in Tinder, what are the
          demographics of users around me, and if there is any influence based on my preference settings.
        </p><br>
        <p>Pssst the charts are interactive...<br>
          Click on a university to understand the demographics of Tinder users from that university!</p><br>

        <p>
          To request for the dataset I scrapped,
          please chat me via the Messenger icon at the bottom left of this page
          <br>or email
          <a href="mailto:me@jonathanlawhh.com" class="a-custom-button text-decoration-none white--text">me@jonathanlawhh.com</a>
        </p><br>

        <p><strong>Links:</strong>
          <br>
          <a href="https://medium.com/@jonathanlawhh/what-tinder-users-demographics-are-around-me-9d6d9c9c1aa8"
             rel="nofollow" target="_blank" class="a-custom-button white--text text-decoration-none">Article about this
            project</a>

          <br>
          <a href="https://datastudio.google.com/reporting/4b986367-24b0-4244-b7aa-6e8d3e2fc1b2/page/E17hC"
             rel="nofollow" target="_blank" class="a-custom-button white--text text-decoration-none">Full dashboard
            link</a>

          <br>
          <a href="https://tinder.com/"
             rel="nofollow" target="_blank" class="a-custom-button white--text text-decoration-none">Tinder website</a>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Tinder",
}
</script>

<style scoped>
.dashboard-iframe {
  min-height: 720px;
}

@media only screen and (max-width: 460px) {
  .dashboard-iframe {
    min-height: 540px;
  }
}
</style>
