


// posidsion sharni uchun
let div_positsion_absalute_shart = document.querySelector("#div_positsion_absalute_shart")

// console.log(div_positsion_absalute_shart);


//  render divi
let main_render_qismi = document.querySelector("#main_render_qismi");


// filter divi 
let main_filter_qismi = document.querySelector("#main_filter_qismi");

// filter tugma
let main_filter_button = document.querySelector("#main_filter_button");


main_filter_button.addEventListener("click", () => {


    if (div_positsion_absalute_shart.style.background != "blue") {

        div_positsion_absalute_shart.style.background = "blue"

        // filter div
        main_filter_qismi.style = `margin-left:-100px; `


        // render div
        main_render_qismi.style = `width: 750px;
        
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px; `




    } else {
        div_positsion_absalute_shart.style.background = "red"


        // filter div  false
        main_filter_qismi.style = `margin-left:-501px;`


        // render div false
        main_render_qismi.style = `
        width: 100%;
        display: grid;
        grid-template-columns: auto auto auto ;
        gap: 20px;`


    }

})
























