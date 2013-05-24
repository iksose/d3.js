if (Meteor.isClient) {


var animate = function(){
            d3.selectAll(".yolo")
    .data(myArray)
    .transition()
    .duration(2000)
    .style("width", function(d) { return  d + "px"; });

    }




myArray=[200,300,400,500]

  Template.hello.greeting = function () {
    return "Welcome to D3.JS.";
  };

  Template.hello.events({
    'click #btn1' : function () {

      console.log("Yolo")

      myArray[0] = myArray[0] + 50
      animate()
    },
    'click #btn2': function(){
    myArray[1] = myArray[1] + 50
      animate()
    }
  });




  Template.hello.rendered = function(){

              d3.selectAll(".yolo")
    .data(myArray)
    .transition()
    .duration(2000)
    .style("width", function(d) { return  d + "px"; });

  }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
