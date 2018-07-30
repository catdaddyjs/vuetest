<template>
  <div class="episode">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <div class="episode-title md-title">
              {{ result.title }}
            </div>
            <div class="episode-caption md-subhead">
              {{ result.caption }}
            </div>
          </md-card-header-text>

          <md-card-media>
            <img v-bind:src="result.picture_url" alt="episode image" class="episode-image" />
          </md-card-media>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">

            <md-card-expand-trigger>
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              <div v-html="result.description"></div>
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-ripple>
    </md-card>

  </div>
</template>

<script>

  export default {
    props: ['result'],
  }
</script>
