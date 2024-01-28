<template>
    <div class="content">
         <div class="left-panel">
           <img alt="Study Spot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzAWwnPUcP5WNzOA66ONhjUF7NfHpPCIW6A&usqp=CAU" class="image">
         </div>
         <div class="right-panel">
           <h1 class="location-name">Posvar Main Floor</h1>
           <p class="address">Main Floor of Wesley W. Posvar Hall: 230 S Bouquet St, Pittsburgh, PA 15213</p>
           <p class="vibe">Quiet, Aesthetic </p>
           <p class="occupancy">Occupancy: 20/50</p>
           <p class="indstudy">Invidual Study</p>
           <v-rating
               hover
               half-increments
               readonly
               :length="5"
               :size="32"
               :model-value="5"
               active-color="primary" 
           />
           <p class="group">Group Work</p>
           <v-rating
               hover
               half-increments
               readonly
               :length="5"
               :size="32"
               :model-value="3"
               active-color="primary" 
           />
           <p class="noise">Noise Level</p>
           <v-rating
               hover
               half-increments
               readonly
               :length="5"
               :size="32"
               :model-value="1"
               active-color="primary" 
           />
           <p class="overall">Overall</p>
           <v-rating
               hover
               half-increments
               readonly
               :length="5"
               :size="32"
               :model-value="4.5"
               active-color="primary" 
           />
         </div>
       </div>
       <p class="description">The main floor of posvar hall is one of the top spaces you can study in at Pitt. It has many different styles
        of seating, including booths, round tables, private rooms, and benches. It is great for both if you want to study alone or with a group.
        However, it is always very busy and it is hard to find a spot to sit. The building is also very modern and has an Einstein's Bagel on the second floor.</p>
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