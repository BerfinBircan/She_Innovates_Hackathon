
<template>
 <div class="content">
      <div class="left-panel">
        <img alt="Study Spot" src="https://pittnews.com/wp-content/uploads/2014/09/a8c11ba268f6ed51cd6bc4d3646641aa-900x601.jpg" class="image">
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