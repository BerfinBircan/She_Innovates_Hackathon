<template>
    <!-- Banner -->
    <div class="banner">
      <div class="header">
        <h1 class="header-line">Study Pitt!</h1>
        <h2 class="header-line">Find your next study spot.</h2>
        <h3 class="header-line">Let's get started</h3>
      </div>
    </div>





 <div class="map">
      <div class="map-side">
        <img alt="Map of University of Pittsburgh" src="https://www.ieee-iri.org/images/payments_subdomain/imgThack.gif" class="map-image">
      </div>
      <div class="map-list">
        <h1 class="explore-title">Explore</h1>
        <div class="scrollableContainer">
          <ul>
            <li><button @click="openPopup">Cathedral of Learning</button></li>
            <li>William Pitt Union</li>
            <li>Sennott Square</li>
            <li>Hillman Library</li>
            <li>Information Science Buidling</li>
            <li>Posvar</li>
            <li>Thackery</li>
            <li>Frick Fine Arts Building</li>
            <li>Chevron Science Center</li>
            <li>Mervis Hall</li>
            <li>Lawerence Hall</li>
            <li>Peterson Event Center</li>
            <li>Benedum</li>
            <li>Carnegie Library</li>
            <li>Bellevue</li>
            <li>Clapp</li>
            <li>Langley</li>
            <li>Crawford</li>
            <li>Salk</li>
            <li>Victoria</li>
            <li>Scafe</li>
            <li>O'Hara</li>
            <li>Victoria</li>





          </ul>
        </div>
      </div>
    </div>


    <div v-if="showPopup" class="popupOverlay">
      <div class="popup">
        <span @click="closePopup" class="closeButton">&times;</span>
        <!-- Popup content goes here -->


          <v-carousel>
                <v-carousel-item>
                  <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img
                  src="https://christianworldtraveler.files.wordpress.com/2011/09/cathedraloflearning.jpg?w=598"
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
                  src="https://christianworldtraveler.files.wordpress.com/2011/09/cathedraloflearning.jpg?w=598"
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

              </v-carousel>







      </div>
    </div>

    <div>
    <!-- Search bar on the main page -->
    <input v-model="searchTerm" type="text" :placeholder="'Looking for a building, rating, or occupancy? Search... '" @input="filterItems" class="wide-search-bar" />

    <!-- List container with shadow -->
    <div class="list-container">
      <!-- List of items displayed on the page -->
      <ul>
        <li v-for="(item, index) in filteredItems" :key="item.id" :class="{ 'border-bottom': index < filteredItems.length - 1 }">
          <div class="list-item">
            <div class="left-side">
              <div class="item-name">{{ item.name }}</div>
              <div class="item-building">{{ item.building }}</div>
            </div>
            <div class="right-side">
              <div class="item-rating">Rating: {{ item.rating }}</div>
              <div class="item-occupancy">Current Occupancy: {{ item.occupancy }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>


        <!-- <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-list :items="items"></v-list>
      </v-card> -->

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

export default {
  name: 'HomeView',
  methods: {
    openPopup() {
      this.showPopup = true; // Set showPopup to true to display the pop-up
    },
    closePopup() {
      this.showPopup = false; // Set showPopup to false to hide the pop-up
    },
    filterItems() {
      // Filter items based on the search term
      this.filteredItems = this.items.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    },

  },
  data: () => ({
      showPopup: false, 
      searchTerm: '',
      items: [
        { id: 1, name: 'WPU Collaborative Lounge, 3rd floor', building: 'William Pitt Union', rating: 2, occupancy: "13/27" },
        { id: 2, name: 'Main Floor', building: 'Cathedral of Learning', rating: 3.5, occupancy: "58/70" },
        { id: 3, name: 'Fifth Floor', building: 'Sennott Square', rating:5, occupancy: "15/30" },
        { id: 4, name: 'Main Floor', building: 'Wesley W. Posvar Hall', rating: 5, occupancy: "20/50" },
        { id: 5, name: 'Conally Ballroom', building: 'Alumni Hall', rating: 4, occupancy: "10/100" },
        // Add more items as needed
      ],
      filteredItems: [], // Initialize filteredItems array 
      // items: [
      //   { type: 'subheader', title: 'Alumni Hall' },
      //   {
      //     title: 'Third Floor',
      //     value: 1,
      //   },
      //   {
      //     title: 'Fifth Floor',
      //     value: 2,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'Barco Law' },
      //   {
      //     title: 'First Floor',
      //     value: 3,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'Benedum Hall' },
      //   {
      //     title: 'First floor',
      //     value: 4,
      //   },

      //   {
      //     title: 'Second Floor',
      //     value: 5,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'Cathedral Of Learning '},
      //   {
      //     title: 'Ground Floor',
      //     value: 5,
      //   },
      //   {
      //     title: 'First Floor',
      //     value: 6,
      //   },
      //   {
      //     title: 'Second Floor',
      //     value: 7,
      //   },
      //   {
      //     title: 'Third Floor',
      //     value: 8,
      //   },
      //   {
      //     title: '35th Floor',
      //     value: 9,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'Chevron Science Center' },
      //   {
      //     title: 'First Floor',
      //     value: 10,
      //   },
      //   { type: 'subheader', title: 'Clapp Hall' },
      //   {
      //     title: 'First Floor',
      //     value: 11,
      //   },
      //   { type: 'subheader', title: 'William Pitt Union (WPU)' },
      //   {
      //     title: 'Main Floor',
      //     value: 12,
      //   },
      //   {
      //     title: 'Third Floor',
      //     value: 13,
      //   },
      //   {
      //     title: 'Ninth Floor',
      //     value: 14,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'Sennott Square' },
      //   {
      //     title: 'Second Floor',
      //     value: 15,
      //   },
      //   {
      //     title: 'Fifth Floor',
      //     value: 16,
      //   },
      //   {
      //     title: 'Sixth Floor',
      //     value: 17,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'Posvar Hall' },
      //   {
      //     title: 'Main Floor',
      //     value: 18,
      //   },
      //   {
      //     title: 'Second Floor',
      //     value: 19,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'OHara Student Center' },
      //   {
      //     title: 'Main Floor',
      //     value: 20,
      //   },
      //   {
      //     title: 'Second Floor',
      //     value: 21,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'Hillman Library' },
      //   {
      //     title: 'First Floor',
      //     value: 22,
      //   },
      //   {
      //     title: 'Second Floor',
      //     value: 23,
      //   },
      //   {
      //     title: 'Third Floor',
      //     value: 24,
      //   },
      //   {
      //     title: 'Fourth Floor',
      //     value: 25,
      //   },
      //   { type: 'divider' },
      //   { type: 'subheader', title: 'Frick Art' },
      //   {
      //     title: 'Fir',
      //     value: 22,
      //   },
      //   {
      //     title: 'Second Floor',
      //     value: 23,
      //   },
      //   {
      //     title: 'Third Floor',
      //     value: 24,
      //   },
      //   {
      //     title: 'Fourth Floor',
      //     value: 25,
      //   },
      //   ],
            }),

      created() {
          // Show all items by default
          this.filteredItems = this.items;
        },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #333;
    margin-top: 60px;
    max-width: 800px;
    margin: 60px auto;
  }

  .map {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
    border: 1px solid rgb(209, 209, 209);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    margin: 5px;

  }

  .scrollableContainer {
      overflow: auto;
      max-height: 200px; 
  }

  .map-side {
    flex-basis: 50%;
    justify-items:center;
  }

  .map-image {
    width: 100%;
    margin: 5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .map-list {
    flex-basis: 60%;
    text-align: left;
  }

  .explore-title {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .address, .vibe {
    color: #555;
    margin-bottom: 5px;
  }

  .rating {
    color: gold;
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .description {
    text-align: left;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }


  /* Styling for the popup */
.popupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Darken the background with a semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Set a high z-index to bring the popup to the foreground */
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.closeButton {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
}


input.wide-search-bar {
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px;
  text-align: center; /* Center the text */
  font-style: italic; /* Make the text italic */
}

.list-container {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Shadow for the list container */
  padding: 10px; /* Add padding to the container */
  overflow: auto;
  max-height: 500px; 
}

ul {
  list-style: none;
  padding: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.left-side,
.right-side {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight:bold ;
  text-align:left;
}
.item-building,
.item-rating,
.item-occupancy {
  padding: 5px;
  text-align: left;
}

.border-bottom {
  border-bottom: 1px solid #ccc; /* Gray border between list items */
}




/* Styling for the banner with stacked header */
.banner {
  background-color: #323cae; /* Muted University of Pittsburgh gold */
  text-align: center;
  color: #f4f4f4;/* Muted dark text color */
  padding: 2rem; /* Increased padding for a taller banner */
  width: 100%; /* Make the banner the entire width of the page */
  box-sizing: border-box; /* Include padding and border in the width */
}

.header {
  margin-bottom: 1rem; /* Add some space between the header and content */
}

.header-line {
  margin: 0;
}


</style>