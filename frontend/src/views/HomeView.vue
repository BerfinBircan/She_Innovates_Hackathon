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
            <li>Cathedral of Learning</li>
            <li><button @click="openPopup">William Pitt Union</button></li>
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
        src="https://www.studentaffairs.pitt.edu/sites/default/files/styles/grid_style/public/grid-img/nordys_place.jpeg?h=7a056916&itok=dyusC7bL"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        Commuter Lounge 
      </v-card-title>
  
      <v-card-subtitle>
        Ground Floor
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
              Located on the ground floor of the william pitt union, in the back right corner of Nordy's place, is the commuters lounge. This study spot is perfect for those looking for a home away from home while on campus, with whiteboards comfy couches and desks, and even microwaves for those who need it. This is usually a good place to get some quiet study time while also not being bombarded with people.
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
        src="https://pittnews.com/wp-content/uploads/2014/09/a8c11ba268f6ed51cd6bc4d3646641aa-900x601.jpg"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        Collaborative Lounge
      </v-card-title>
  
      <v-card-subtitle>
        Third Floor
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
            Located on the third floor of the William Pitt Union, between the quiet study lounge and the stress free zone lies the collaborative lounge! This is the perfect place for studying in groups with options for larger tables as well as two rolling white boards. It also has a desk along the back wall for people who may enjoy studying alone and not being distracted by the other groups working in this room. 
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
        src="https://pittnews.com/wp-content/uploads/2023/12/N_StudySpots_WPU_NY_2-1200x798.jpg"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        Marble Study Room
      </v-card-title>
  
      <v-card-subtitle>
        Main Floor
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
            Located on the main floor of the William Pitt Union, to the left of the elavators is the spacious marble room with multiple tables for studying. This spot is good for both individual studying and for small groups up to 4 people.
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
        <li v-for="(item, index) in filteredItems" :key="item.id" :class="{ 'border-bottom': index < filteredItems.length - 1 }" @click="">
          <div class="list-item">
            <div class="left-side">
              <div class="item-name"><a :href="item.route">{{ item.name }}</a></div>
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
        { id: 1, name: 'WPU Collaborative Lounge, 3rd floor', building: 'William Pitt Union', rating: 2, occupancy: "13/27", route:"/union" },
        { id: 2, name: 'Main Floor', building: 'Cathedral of Learning', rating: 3.5, occupancy: "58/70", route: "/cathy" },
        { id: 3, name: 'Fifth Floor', building: 'Sennott Square', rating:5, occupancy: "15/30", route:"/sennott" },
        { id: 4, name: 'Main Floor', building: 'Wesley W. Posvar Hall', rating: 5, occupancy: "20/50", route:"/posvar" },
        { id: 5, name: 'Conally Ballroom', building: 'Alumni Hall', rating: 4, occupancy: "10/100"  , route:"/alumni"},
        // Add more items as needed
      ],
      filteredItems: [], // Initialize filteredItems array 
      
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
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .map {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    border-radius: 8px;
    background-color: #f8f8f8;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }


  .scrollableContainer {
    overflow: auto;
    max-height: 500px;
  }

  .map-side {
    flex-basis: 50%;
  }

  .map-image {
    max-width: 100%;
    border-radius: 8px;
  }

  .map-list {
    flex-basis: 50%;
    text-align: left;
  }

  .explore-title {
    color: #182854;
    margin-bottom: 20px;
    font-size: 1.8rem;
    font-weight: bold;
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

  li {
    background-color: #eaeaea;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  li:hover {
    background-color: #ccc;
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
    list-style-type: none;
    padding: 0;
    margin: 0;
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
    background-color: #182854; /* Deep navy blue */
    color: #9A936B; /* Muted olive tone for text */
    padding: 50px 20px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    margin-bottom: 30px;
  }

  .header {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(0, 0, 0, 0.6); /* Darker background for readability */
    border-radius: 10px;
  }

  .header-line {
    margin: 15px 0;
    color: #ffffff; /* Text color */
  }

  h1.header-line {
    font-size: 2.8rem;
    font-weight: bold;
  }

  h2.header-line {
    font-size: 2rem;
  }

  h3.header-line {
    font-size: 1.6rem;
    font-style: italic;
  }
</style>
