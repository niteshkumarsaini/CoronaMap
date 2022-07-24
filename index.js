function updateMap(){
fetch("/data.json")
.then((dat)=>{
    console.log(dat);
    return dat.json();


})
.then((actualData)=>{
    console.log(actualData.data);

actualData.data.forEach(element => {
    latitude=element.latitude;
    longitude=element.longitude;
    cases=element.infected;
    country=element.country;

    var color;
    if(cases>100 && cases<500){
        color="yellow";
        

    }
    else if(cases>500 && cases<1000){
        color="rgb(106, 0, 0)";

    }
    else if(cases>1000){
        color="rgb(215, 0, 0)";
      


    }
    else{
        color="rgb(1, 138, 15)";

    }

   
    const marker = new mapboxgl.Marker({
        color:color,
        draggable: false
        }).setLngLat([longitude,latitude])
        .addTo(map);
    
});



})

}
updateMap();
    
// function infor(){
//     confirm("Here are some instructions about our Map : 1-The Yellow Marked where there are cases between 100-500. 2-The Dark Red Marked where there are cases between 500-1000. 3-The Light Red are Marked where there are cases more than 1000. And rest are marked as Green.")


// }
// let name=prompt("Please Enter your Name below !");
// let info =confirm("Before Procedding , Here are some instructions about our Map : 1-The Yellow Marked where there are cases between 100-500. 2-The Dark Red Marked where there are cases between 500-1000. 3-The Light Red are Marked where there are cases more than 1000. And rest are marked as Green.")
// if(info){
//     confirm(`Now Welcome ${name} to our Project !`);
// }
// setInterval(infor,60000);
