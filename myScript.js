
var firebaseConfig = {
    apiKey: "AIzaSyBGv_05cA2Qm1QEuKUZ4U-hFCiyxc1e_8A",
    authDomain: "car-price-bbaa2.firebaseapp.com",
    databaseURL: "https://car-price-bbaa2.firebaseio.com",
    projectId: "car-price-bbaa2",
    storageBucket: "car-price-bbaa2.appspot.com",
    messagingSenderId: "1037650573971",
    appId: "1:1037650573971:web:3340cfcafbe4cc5f9c6b66",
    measurementId: "G-VH5FGK3CBV"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// firebase.database().ref('users/').set({
//     username: 'name',
//     email: 'email',
//     profile_picture : 'imageUrl'
// });



// var x = firebase.database().ref().child('a').push().key;
// // var x = firebase.database();
// console.log(x);

function writeData(time,brand,year,mile,colour,province) {
    firebase.database().ref('events/'+time).set({
      brand: brand,
      year: year,
      mile: mile,
      colour: colour,
      province: province,
      y: -1

    });
}


function okBtn() {
    console.log('okBtn');

    brand = document.getElementById("brand").value;
    province = document.getElementById("province").value;
    colour = document.getElementById("colour").value;
    mile = document.getElementById("mile").value;
    year = document.getElementById("year").value;
    price = document.getElementById("price").value;

    time = String(new Date().getTime());

    console.log(time+' | '+brand+' | '+year+' | '+mile+' | '+colour+' | '+province)

    writeData(time,brand,year,mile,colour,province);

    // var x = firebase.database().ref().child(String(time)+'/y').get().key;
    // console.log(x);

 
      
    // var ref = firebase.database().ref(time+"/y");
    // ref.on("value", function(snapshot) {
    //   p = snapshot.val()
    //   console.log(p);
    // }, function (errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });
    // console.log('price : '+p);

    setTimeout(() => { 
      var ref = firebase.database().ref('events/'+time+"/y");
      ref.on("value", function(snapshot) {
        p = snapshot.val()
        console.log('price : '+p);
        
        if(p != -1){
          document.getElementById("price").value = p;
        }

      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      
    }, 300);


    // document.getElementById("field2").value = document.getElementById("field1").value;
    // writeUserData('sasasas111','1','1','1');

    // var x = firebase.database().ref().child('a').get().key;
    // var x = firebase.database();
    // console.log(x);
    
    
    
    
    // var d = new Date();
    // var n = d.getDate();

    // console.log(d.getDate());
    // console.log(d.getTime());
    // document.getElementById("price").value = "zzzz";

}

function cancleBtn() {
  console.log('cancleBtn');
  // brand,province,colour,mile,old
  document.getElementById("brand").value = "";
  document.getElementById("province").value = "";
  document.getElementById("colour").value = "";
  document.getElementById("mile").value = "";
  document.getElementById("year").value = "";
  document.getElementById("price").value = "";
  
  
  

}


