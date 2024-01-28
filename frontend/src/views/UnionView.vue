
<template>
  <div class="content">
       <div class="left-panel">
         <img alt="Study Spot" src="data:image/jpeg;base64,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" class="image">
       </div>
       <div class="right-panel">
         <h1 class="location-name">WPU Collaborative Lounge</h1>
         <p class="address">Third Floor of William Pitt Union: 3959 Fifth Ave, Pittsburgh, PA 15260</p>
         <p class="vibe">Occasional Chaos, Collaboration </p>
         <p class="occupancy">Occupancy: 13/27</p>
         <p class="indstudy">Invidual Study</p>
         <v-rating
             hover
             half-increments
             readonly
             :length="5"
             :size="32"
             :model-value="2"
             active-color="primary" 
         />
         <p class="group">Group Work</p>
         <v-rating
             hover
             half-increments
             readonly
             :length="5"
             :size="32"
             :model-value="5"
             active-color="primary" 
         />
         <p class="noise">Noise Level</p>
         <v-rating
             hover
             half-increments
             readonly
             :length="5"
             :size="32"
             :model-value="4"
             active-color="primary" 
         />
         <p class="overall">Overall</p>
         <v-rating
             hover
             half-increments
             readonly
             :length="5"
             :size="32"
             :model-value="3.5"
             active-color="primary" 
         />
       </div>
     </div>
     <p class="description">The Collaboration Lounge on the third floor of the WPU is a great space 
         for collaborating with your group members on different group projects. There are plenty of 
         seating that fits up to 5 people (and you can move chairs and tables around for bigger groups!).
         There are two whiteboards available for use as well as a TV screen that can be connected to your laptop.
         It does get occasionally very loud and chaotic. You have access to bathrooms, water fountains, a reflection room,
         a meditation room, and even a gym right outside the lounge.</p>
   </template>
   
 
   <style>
   #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     text-align: center;
     color: #333;
     margin-top: 60px;
     max-width: 800px;
     margin: 60px auto;
   }
   
   .content {
     display: flex;
     align-items: flex-start;
     justify-content: center;
     gap: 30px;
     margin-bottom: 20px;
   }
   
   .left-panel {
     flex-basis: 40%;
   }
   
   .image {
     width: 100%;
     border-radius: 8px;
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   }
   
   .right-panel {
     flex-basis: 60%;
     text-align: left;
   }
   
   .location-name {
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
   </style>