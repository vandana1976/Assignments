// function outer(){
//   var a = "Hello";
//   var b = {name: "Joe"}
//   console.log (a,b);
//     function inner(a,b) {
//         console.log (a,b);
//         a = "new";
//         b = {name: "Kay"}
//         console.log                                                                                                                                              
//     }
  
//     inner(a, b);
//   }
  
//   outer();
// }

//@2
// function createFunction(){
//     var a = "Hans Zimmer Rules!";
//     inception = function(){
//         console.log(a);
//     }
// }
// var inception;
// createFunction();
// inception(); // "Hans Zimmer Rules!"

var slideshow = {
                photoList: ["cars", "tigers", "sports"], 
                currentPhotoIndex: function() {
                    return this.photoList.indexOf();
                           },                   
                
                nextPhoto(){ 
                    for(var currentPhotoIndex = 0; currentPhotoIndex <= 2; currentPhotoIndex ++ )
                       //if (currentPhotoIndex.options[currentPhotoIndex].selected){
                        if (currentPhotoIndex.selected){   
                            console.log(this.photoList);}

                            else {
                               console.log("End of slideshow");
                            }                          
                         },
                prevPhoto(){
                    for (var currentPhotoIndex = 2; currentPhotoIndex >= 0; currentPhotoIndex --)
                        if (currentPhotoIndex.selected){
                            console.log(this.photoList);}
 
                             else {
                                console.log("End of slideshow");
                             }
                         }, 
                getCurrentPhoto(){
                    console.log(this.photoList);
                }   
                }
                console.log(slideshow.prevPhoto());
                console.log(slideshow.nextPhoto());
                console.log(slideshow.getCurrentPhoto());

