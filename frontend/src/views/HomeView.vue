<template>
  <div class="pt-0 grid grid-rows-2 grid-flow-col">
    <div class="h-80">
       <div class="text-navy pt-20">
        <h1 class="font-bold text-8xl">Study Pitt!</h1>
        <h2 class="pt-7"> find the perfect spot to study</h2>
        <button>let's get started</button>
    
      </div>
    </div>
</div>


<GMapMap
    :center="center"
    ref="myMapRef"
    :zoom="10"
    map-type-id="terrain"
    style="width: 100vw; height: 20rem"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>



        <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-list :items="items"></v-list>
      </v-card>

    <!-- <v-carousel>
      <v-carousel-item>
        <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpghttps://christianworldtraveler.files.wordpress.com/2011/09/cathedraloflearning.jpg"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        Cathedral of Learning
      </v-card-title>
  
      <v-card-subtitle>
        10+ Study Spaces
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Study Spaces:
              -Ground Floor: 
                -Near The Roost
                -Computing Labs
                -First Floor:
                -Nationality Rooms
              -Second Floor
              -Third Floor
              -35th Floor:
              -36th Floor:
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
      </v-carousel-item>







      <v-carousel-item>
        <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpghttps://christianworldtraveler.files.wordpress.com/2011/09/cathedraloflearning.jpg"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        Cathedral of Learning
      </v-card-title>
  
      <v-card-subtitle>
        10+ Study Spaces
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Study Spaces:
              -Ground Floor: 
                -Near The Roost
                -Computing Labs
                -First Floor:
                -Nationality Rooms
              -Second Floor
              -Third Floor
              -35th Floor:
              -36th Floor:
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>




      </v-carousel-item>

    </v-carousel> -->


  
   





  <!-- <ul style = "list-style-type: disc;">
      <li>Alumni Hall</li>
      <ul style="list-style-type: circle;">
        <li>Third Floor</li>
        <li>Fifth Floor</li>
      </ul>
      <li>Barco Law</li>
      <li>Benedum Hall</li>
      <ul style="list-style-type: circle;">
      <li>First Floor</li>
      <li>Second Floor</li>
    </ul>

  </ul> -->



   
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted() {
    this.$refs.myMapRef.$mapPromise.then((mapObject) => {
      console.log('map is loaded now', mapObject);
    });
  },
  data: () => ({
     center: {lat: 51.093048, lng: 6.842120},
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
        , // Along list of clusters
      ],
      items: [

{ type: 'subheader', title: 'Alumni Hall' },

{

  title: 'Third Floor',

  value: 1,

},

{

  title: 'Fifth Floor',

  value: 2,

},

{ type: 'divider' },

{ type: 'subheader', title: 'Barco Law' },

{

  title: 'First Floor',

  value: 3,

},

{ type: 'divider' },

{ type: 'subheader', title: 'Benedum Hall' },

{

  title: 'First floor',

  value: 4,

},

{

  title: 'Second Floor',

  value: 5,

},

{ type: 'divider' },

{ type: 'subheader', title: 'Cathedral Of Learning '},

{

  title: 'Ground Floor',

  value: 5,

},

{

  title: 'First Floor',

  value: 6,

},

{

  title: 'Second Floor',

  value: 7,

},

{

  title: 'Third Floor',

  value: 8,

},

{

  title: '35th Floor',

  value: 9,

},

{ type: 'divider' },

{ type: 'subheader', title: 'Chevron Science Center' },

{

  title: 'First Floor',

  value: 10,

},

{ type: 'subheader', title: 'Clapp Hall' },

{

  title: 'First Floor',

  value: 11,

},

{ type: 'subheader', title: 'William Pitt Union (WPU)' },

{

  title: 'Main Floor',

  value: 12,

},

{

  title: 'Third Floor',

  value: 13,

},

{

  title: 'Ninth Floor',

  value: 14,

},

{ type: 'divider' },

{ type: 'subheader', title: 'Sennott Square' },

{

  title: 'Second Floor',

  value: 15,

},

{

  title: 'Fifth Floor',

  value: 16,

},

{

  title: 'Sixth Floor',

  value: 17,

},

{ type: 'divider' },

{ type: 'subheader', title: 'Posvar Hall' },

{

  title: 'Main Floor',

  value: 18,

},

{

  title: 'Second Floor',

  value: 19,

},

{ type: 'divider' },

{ type: 'subheader', title: 'OHara Student Center' },

{

  title: 'Main Floor',

  value: 20,

},

{

  title: 'Second Floor',

  value: 21,

},

{ type: 'divider' },

{ type: 'subheader', title: 'Hillman Library' },

{

  title: 'First Floor',

  value: 22,

},

{

  title: 'Second Floor',

  value: 23,

},

{

  title: 'Third Floor',

  value: 24,

},

{

  title: 'Fourth Floor',

  value: 25,

},

{ type: 'divider' },

{ type: 'subheader', title: 'Frick Art' },

{

  title: 'Fir',

  value: 22,

},

{

  title: 'Second Floor',

  value: 23,

},

{

  title: 'Third Floor',

  value: 24,

},

{

  title: 'Fourth Floor',

  value: 25,

},




],
    }),
  }
</script>

<style>

.scrollable-container {
  height: 300px;
  overflow-y: auto;
}
  
</style>