


// main div render      filter.js da bor

// console.log(main_render_qismi);

function render1(nom) {

  for (let index = 0; index < nom.length; index++) {




    let div1 = document.createElement("div")
    div1.className = "render_div";
    div1.id = nom[index].id
    div1.innerHTML = `
  

  <div class="render_div_img">
  <div class="render_div_img_hover_icon">
  <i id="${nom[index].id}" class="main_render_img_div_icon1 fa-solid fa-pen"></i>
  <i id="${nom[index].id}" class="main_render_img_div_icon2 fa-solid fa-heart"></i>
 <i id="${nom[index].id}" class="main_render_img_div_icon3 fa-solid fa-trash"></i>
  </div>
  <img src="${nom[index].img}" alt="rsim">
</div>
<div class="render_div_yozuv">
  <p>name</p>
  <p>${nom[index].title}</p>
  <p>price</p>
  <p>${nom[index].price} $</p>
  <p>width</p>
  <p>${nom[index].sizes.width}</p>
  <p>height</p>
  <p>${nom[index].sizes.height}</p>
  <p>date of birth</p>
  <p>${nom[index].birthDate} </p>
  <p> features</p>
  <p>${nom[index].features}</p>

</div>
  
  
  `


    main_render_qismi.appendChild(div1);
  }



} render1(render);

// console.log(render1);








// search qismi 

let header_1_input_search = document.querySelector("#header_1_input_search");

header_1_input_search.addEventListener("input", (e) => {
  e.preventDefault();

  main_render_qismi.innerHTML = "";

  const input1 = header_1_input_search.value.trim().toLowerCase();
  let search1 = [];



  render.forEach((element1) => {
    if (element1.title.toLowerCase().includes(input1)) {
      search1.push(element1)

    }
  })
  render1(search1);


})



// prise narhilari  from

let main_filter_qismi_1_1_input_to = document.querySelector("#main_filter_qismi_1_1_input_to");
let main_filter_qismi_1_1_input_from = document.querySelector("#main_filter_qismi_1_1_input_from");

main_filter_qismi_1_1_input_from.addEventListener("input", (e) => {


  e.preventDefault();

  main_render_qismi.innerHTML = "";

  const input12 = main_filter_qismi_1_1_input_from.value;
  let search1 = [];

  // console.log(input12);


  render.forEach((element1) => {
    console.log(element1.price);
    if (element1.price >= input12) {
      search1.push(element1)

    }
  })
  render1(search1);




})


// price  to 

main_filter_qismi_1_1_input_to.addEventListener("input", (e) => {


  e.preventDefault();
  main_render_qismi.innerHTML = "";

  const input12 = main_filter_qismi_1_1_input_from.value;


  const input123 = main_filter_qismi_1_1_input_to.value;
  let search1 = [];

  // console.log(input12);


  render.forEach((element1) => {
    console.log(element1.price);
    if (element1.price <= input123 && element1.price >= input12) {
      search1.unshift(element1)

    }
  })
  render1(search1);
})







// width  eni from


let main_filter_qismi_1_1_input_width_from = document.querySelector("#main_filter_qismi_1_1_input_width_from");
let main_filter_qismi_1_1_input_width_to = document.querySelector("#main_filter_qismi_1_1_input_width_to");
// console.log(main_filter_qismi_1_1_input_width_to);


main_filter_qismi_1_1_input_width_from.addEventListener("input", (e) => {


  e.preventDefault();
  main_render_qismi.innerHTML = "";

  // const input12 = main_filter_qismi_1_1_input_from.value;


  const input123 = main_filter_qismi_1_1_input_width_from.value;
  let search1 = [];

  // console.log(input12);


  render.forEach((element1) => {
    // console.log(element1.price);
    if (input123 <= element1.sizes.width) {
      search1.unshift(element1)

    }
  })
  render1(search1);
})



// width to

main_filter_qismi_1_1_input_width_to.addEventListener("input", (e) => {


  e.preventDefault();
  main_render_qismi.innerHTML = "";

  const input12 = main_filter_qismi_1_1_input_width_from.value;


  const input123 = main_filter_qismi_1_1_input_width_to.value;
  let search1 = [];

  // console.log(input12);


  render.forEach((element1) => {
    // console.log(element1.price);
    if (input123 >= element1.sizes.width && input12 <= element1.sizes.width) {
      search1.unshift(element1)

    }
  })
  render1(search1);
})










//  height baland ligi

let main_filter_qismi_1_1_input_height_from = document.querySelector("#main_filter_qismi_1_1_input_height_from");
let main_filter_qismi_1_1_input_height_to = document.querySelector("#main_filter_qismi_1_1_input_height_to");
// console.log(main_filter_qismi_1_1_input_height_to);



main_filter_qismi_1_1_input_height_from.addEventListener("input", (e) => {


  e.preventDefault();
  main_render_qismi.innerHTML = "";

  // const input12 = main_filter_qismi_1_1_input_from.value;


  const input123 = main_filter_qismi_1_1_input_height_from.value;
  let search1 = [];

  // console.log(input12);


  render.forEach((element1) => {
    // console.log(element1.price);
    if (input123 <= element1.sizes.height) {
      search1.unshift(element1)

    }
  })
  render1(search1);
})



// height to

main_filter_qismi_1_1_input_height_to.addEventListener("input", (e) => {


  e.preventDefault();
  main_render_qismi.innerHTML = "";

  const input12 = main_filter_qismi_1_1_input_height_from.value;


  const input123 = main_filter_qismi_1_1_input_height_to.value;
  let search1 = [];

  // console.log(input12);
  
  render.forEach((element1) => {
    // console.log(element1.price);
    if (input123 >= element1.sizes.height && input12 <= element1.sizes.height) {
      search1.unshift(element1)
   

    }
  })
  render1(search1);

})

// let ay =search1
// console.log(ay);
















// icon lar  //////////////////////////////////////////////////////////

// yuboriladigon  manzil yoqtirishlar
let main_yoqtirish_qismi = document.querySelector("#main_yoqtirish_qismi");


// if (main_yoqtirish_qismi.innerHTML.includes()) {
  
// }






// console.log(ay);




















// iconlarni orabturgan div
let render_div_img_hover_icon = document.querySelector(".render_div_img_hover_icon")

/// rang lar udalit kok
let icon_divlar = document.querySelector("#icon_divlar")

// yoqtirish
let main_render_img_div_icon2 = document.querySelectorAll(".main_render_img_div_icon2");





// render
// for (let index = 0; index < .length; index++) {

// console.log(div1);
// let div2 = document.createElement("div");
// div2.className = 'main_yoqtirish_qismi'

//     div2.innerHTML = `

//     <p>${render[index].title}</p>
//                     <p>${render[index].birthDate}</p>
//                     <p>${render[index].price} $</p>
//                     <i class="main_yoqtirish_yozuv_icon fa-solid fa-trash"></i>

//  `


// }

let render_div = document.querySelectorAll(".render_div")




for (let index = 0; index < main_render_img_div_icon2.length; index++) {

  // console.log(main_render_img_div_icon2[index].id);



  let yoqtirish = main_render_img_div_icon2[index]

  yoqtirish.addEventListener("click", () => {

    if (icon_divlar.style.background != "blue") {
      icon_divlar.style.background = "blue"
      console.log(true);


      yoqtirish.style = `
      color:red;
      filter:drop-shadow(0px 0px 5px red)
      
      `




      ///yoq tirish lar ga qoshish

      render_div.forEach((render2) => {



        if (render2.id == main_render_img_div_icon2[index].id) {

          function name1(params) {
            for (let index = 0; index < params.length; index++) {



              let main_yoqtirish_div = document.createElement("div");
              main_yoqtirish_div.className = "main_yoqtirish_div"
              main_yoqtirish_div.id = params[index].id
              main_yoqtirish_div.innerHTML = `

              <div class="main_yoqtirish_div_img">
              <img src="${params[index].img}" alt="rasim">
          </div>
              <div class="main_yoqtirish_yozuv"> 
  <p>${params[index].title}</p>
  <p>${params[index].birthDate}</p>
  <p>${params[index].price} $</p>
  
<div class="div">
<button class="btn">
  <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
  <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
</svg>
</button>
  </div>
  `

              if (render2.id.trim() == main_render_img_div_icon2[index].id) {


                main_yoqtirish_qismi.appendChild(main_yoqtirish_div)
              }



            }
          } name1(render)













        }


      })


    } else {


      ///yoq tirish lar ga obtashash























      icon_divlar.style.background = "red"

      console.log("no");

      yoqtirish.style = `
 color: rgb(61, 0, 0);
  


             `
    }




  })










}





// console.log(render_div_img_hover_icon);
























// udalit qilish
let icon3 = document.querySelectorAll(".main_render_img_div_icon3");


icon3.forEach((el) => {
  el.addEventListener("click", () => {


    render_div.forEach((ell) => {

      let el_id = el.id
      let ell_id = ell.id


      if (el_id.includes(ell_id)) {

        console.log(el_id, ell_id);
        render_div.innerHTML = "";




        render1(render)


      }


    })


  })



})



// let main_render_img_div_icon2 = document.querySelectorAll(".main_render_img_div_icon2");





// icon3.forEach((el)=>{
//   el.addEventListener("click",()=>{
//       render_div.forEach((render2) => {


//         })



//   })
// })


//   render_div.forEach((render2) => {



//   })




// madal divi 
let  madal_1_main = document.querySelector("#madal_1_main")





// madal bekor qilish before
let container_button_id1 = document.querySelector("#container_button_id1");

container_button_id1.addEventListener("click",()=>{



  madal_1_main.style = `
  
  width: 700px;
  height: 800px;
  border: 5px solid rgb(255, 0, 0);
  position: absolute;
  z-index: -4;
  margin-top: 0px;
  margin-left: 0px;
  background-color: rgba(19, 65, 192, 0.945);
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.363);

  
  `
})





// yozish 
let main_render_img_div_icon1 = document.querySelectorAll(".main_render_img_div_icon1");


main_render_img_div_icon1.forEach((el)=>{
  
el.addEventListener("click",()=>{
  

  madal_1_main.style = `
  
  width: 700px;
  height: 800px;
  border: 5px solid rgb(255, 0, 0);
  position: absolute;
  z-index: 4;
  margin-top: 0px;
  margin-left: 0px;
  background-color: rgba(19, 65, 192, 0.945);
  border-radius: 20px;
  box-shadow: 0px 0px 10px 10000px rgba(0, 0, 0, 0.363);
  
  
  `
  
  

  
  
})

})


// madal_lar  yozuvlarni qoshish api yozuvlarini ozgartirish inputlar
let madal_input_1_main = document.querySelector("#madal_input_1_main");
let madal_input_2_main = document.querySelector("#madal_input_2_main");
let madal_input_3_main = document.querySelector("#madal_input_3_main");
let madal_input_4_main = document.querySelector("#madal_input_4_main");
let madal_input_5_main = document.querySelector("#madal_input_5_main");
let madal_input_6_main = document.querySelector("#madal_input_6_main");
let madal_input_7_main = document.querySelector("#madal_input_7_main");
let madal_input_8_add_main = document.querySelector("#madal_input_8_add_main");

//  yozuvlarni qoshish api yozuvlarini ozgartirish button
let container_button_id2 = document.querySelector("#container_button_id2");


container_button_id2.addEventListener("click",()=>{


  // main_render_qismi.innerHTML = "";
let vart = render[0]

let array = []
vart = ({
  title: madal_input_1_main.value,
  img: madal_input_2_main.value,
  price: madal_input_3_main.value,
  birthDate: madal_input_4_main.value,
  sizes: {
    width: madal_input_5_main.value,
    height: madal_input_6_main.value
  },
  features: madal_input_7_main.value,

})
array.push(array)

console.log(vart);
render1(array);




})

































// // udalit yoqtirishlarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr 
// let main_yoqtirish_qismi1 = document.querySelectorAll("#main_yoqtirish_qismi");

// // function name1(params) {
// // for (let index = 0; index < params.length; index++) {


// //   console.log(params[index]);
// // }

// // } name1(main_yoqtirish_qismi)


// for (let index = 0; index < main_yoqtirish_qismi1.length; index++) {
//   console.log();


// }





// modal  

let button1 = document.querySelector("#button1")

button1.addEventListener("click", () => {
  madal_1.style = `
  
  width: 700px;
  height: 800px;
  border: 5px solid rgb(255, 0, 0);
  position: absolute;
  z-index: 5;
  margin-top: 100px;
  margin-left: -300px;
  background-color: rgba(19, 65, 192, 0.945);
  border-radius: 20px;
  box-shadow: 0px 0px 10px 1000px  rgba(0, 0, 0, 0.363);

  
  `

})
















let madal_1 = document.querySelector("#madal_1")
// bekor qilish  fixed add

let div_buttonlar_class_1_cancellation = document.querySelector("#div_buttonlar_class_1_cancellation");

div_buttonlar_class_1_cancellation.addEventListener("click", () => {


  madal_1.style = `
  
  width: 700px;
  height: 800px;
  border: 5px solid rgb(255, 0, 0);
  position: absolute;
  z-index: -2;
  margin-top: 100px;
  margin-left: -300px;
  background-color: rgba(19, 65, 192, 0.945);
  border-radius: 20px;
  box-shadow: 0px 0px 10px  rgba(0, 0, 0, 0.363);

  
  `


})


// madal qoshish 
let madal_input_1 = document.querySelector("#madal_input_1")
let madal_input_2 = document.querySelector("#madal_input_2")
let madal_input_3 = document.querySelector("#madal_input_3")
let madal_input_4 = document.querySelector("#madal_input_4")
let madal_input_5 = document.querySelector("#madal_input_5")
let madal_input_6 = document.querySelector("#madal_input_6")
let madal_input_7 = document.querySelector("#madal_input_7")
let madal_input_8_add = document.querySelector("#madal_input_8_add")


madal_input_8_add.addEventListener("click", () => {


  main_render_qismi.innerHTML = "";


  render.unshift({
    title: madal_input_1.value,
    img: madal_input_2.value,
    price: madal_input_3.value,
    birthDate: madal_input_4.value,
    sizes: {
      width: madal_input_5.value,
      height: madal_input_6.value,
    },
    features: madal_input_7.value,



  })
  render1(render);



  madal_1.style = `
  
  width: 700px;
  height: 800px;
  border: 5px solid rgb(255, 0, 0);
  position: absolute;
  z-index: -2;
  margin-top: 100px;
  margin-left: -300px;
  background-color: rgba(19, 65, 192, 0.945);
  border-radius: 20px;
  box-shadow: 0px 0px 10px  rgba(0, 0, 0, 0.363);

  
  `






})
