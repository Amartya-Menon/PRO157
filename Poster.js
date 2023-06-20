AFRAME.registerComponenet("Poster", {
init: function(){
this.createThumbnail()
},

createThumbnail: function () {
    const thumbNailsRef = [
      {
        id: "poster-1",
        title: "Superman",
        url: "./assets/poster1.jpg",
      },
      {
        id: "poster-2",
        title: "Batman",
        url: "./assets/poster2.jpg",
      },

      {
        id: "poster-3",
        title: "Spider man",
        url: "./assets/poster3.jpg",
      },
      {
        id: "poster-4",
        title: "Captain America",
        url: "./assets/poster4.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id);

      // Thumbnail Element
     const PosterEl = this.createPoster(item);
     borderEl.appendChild(PosterEl); 
      // Title Text Element 
      const titleEl = this.createTitle(position,item); 
      borderEl.appendChild(titleEl);
      

      this.placesContainer.appendChild(borderEl);
    }

  },


createPoster: function(item){
const entityEl = document.createElement("a-entity")
entityEl.setAttribute("visible",true);
entityEl.setAttribute("geometry",{
primitive: "plane",
width:"20",
height:"30"
})

entityEl.setAttribute("position",{x:0,y:5,z:0});
entityEl.setAttribute("material",{src:item.url})
},

createBorder: function(position,id){
const entityEl = document.createElement("a-entity")
entityEl.setAttribute("id",id)
entityEl.setAttribute("visibility",true); 
entityEl.setAttribute("geometry",{
    primitive:"plane",
    height:"15",
    width:"5"
});
entityEl.setAttribute("position",position)
entityEl.setAttribute("material",{
    color:"black",
    opacity:"0.4"
});
return entityEl;
},

createTitle: function(position,item){
const entityEl = document.createElement("a-entity") 
entityEl.setAttribute("visibility",true) 
entityEl.setAttribute("text",{
font:"exo2bold",
color:"black",
align:"center",
width:20,
value:item.title
});
const elposition = position;
    elposition.y = -20;
      entityEl.setAttribute("position",elposition);
      entityEl.setAttribute("visible",true);
      return entityEl
}
});


