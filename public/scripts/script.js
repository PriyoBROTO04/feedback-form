const enterbtn = document.getElementById("enterbtn");
const form=document.getElementById('form');
const intro = document.querySelector(".intro");
const gen = document.querySelector(".gen");
const refer = document.querySelector(".refer");
const info = document.querySelector(".info");
const gennxtbtn = gen.querySelector(".nextbtn");
const genbckbtn = gen.querySelector(".backbtn");
const refernxtbtn = refer.querySelector(".nextbtn");
const referbckbtn = refer.querySelector(".backbtn");
const infobckbtn = info.querySelector(".backbtn");
const tabs = document.querySelector(".tabs");
const gentab = document.querySelector(".general");
const refertab = document.querySelector(".refermatory");
const infotab = document.querySelector(".information");
const geninput = gen.querySelectorAll("textarea");
const referinput = refer.querySelectorAll("textarea");
const infoinput = info.querySelectorAll("input");




enterbtn.addEventListener("click", () => {
    intro.classList.remove('cardactive');
    gen.classList.add('cardactive');
    // tabs.classList.add('tabsactive');
    // gentab.classList.add('tabactive');

})
gennxtbtn.addEventListener("click", () => {
    geninput.forEach(input => {
        if (input.value != "") {
            input.classList.remove('error');
            gen.classList.remove('cardactive');
            gen.classList.add('carddeactive');
            refer.classList.add('cardactive');
            // gentab.classList.remove('tabactive');
            // refertab.classList.add('tabactive');
        }
        else {
            input.classList.add('error');
        }
    })


})
genbckbtn.addEventListener("click", () => {
    gen.classList.remove('cardactive');
    intro.classList.add('cardactive');
    tabs.classList.remove('tabsactive');
    gentab.classList.remove('tabactive');

})





refernxtbtn.addEventListener("click", () => {
    referinput.forEach(input => {
        {
            input.classList.remove('error');
        }

    })
    let f = 0;
    setTimeout(function checkrefer() {
        referinput.forEach(input => {


            if (input.value != "") {
                f = f + 1;

            }


        })
        console.log(f);
        if (f >= 2) {
            refer.classList.remove('cardactive');
            refer.classList.add('carddeactive');
            info.classList.add('cardactive');
            // refertab.classList.remove('tabactive');
            // infotab.classList.add('tabactive');
            referinput.forEach(input => {
                if (input.value != "") {
                    input.classList.remove('error');
                }

            })

        }
        else {
            referinput.forEach(input => {
                if (input.value == "") {
                    input.classList.add('error')
                }

            })
        }
    }, 1)

})
referbckbtn.addEventListener("click", () => {
    refer.classList.remove('cardactive');
    gen.classList.add('cardactive');
    gen.classList.remove('carddeactive');
    gentab.classList.add('tabactive');
    refertab.classList.remove('tabactive');

})
infobckbtn.addEventListener("click", () => {
    info.classList.remove('cardactive');
    refer.classList.add('cardactive');
    refer.classList.remove('carddeactive');
    refertab.classList.add('tabactive');
    infotab.classList.remove('tabactive');

})

function validateform(){
    var id = document.getElementById("ID");
    var username = document.getElementById("username");
    let index = username.value.length - 5;
    id.classList.remove('error');
    username.classList.remove('error');
    let f = 0;
    setTimeout(()=>{
        if (id.value.length == 18) {
            id.classList.remove('error');
        }
        else {
                 id.classList.add('error');
                    
        }
        if (username.value.charAt(index) == '#') {
            username.classList.remove('error');
        }
        else {
             username.classList.add('error');
        }},5)


        if (id.value.length == 18) {
            f++;
        }
        if (username.value.charAt(index) == '#') {
            f++;
        }
        console.log(f);
        if(f==2){
            return true;
        }
        else{
            return false;
        }
    

}
























// form.addEventListener('submit',(e)=>{
//     var id = document.getElementById("ID");
//     var username = document.getElementById("username");
//     let index = username.value.length - 5;
//     id.classList.remove('error');
//     username.classList.remove('error');
//     let f = 0;
//     async function validation(){
//         let check=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 if (id.value.length == 18) {
//                         id.classList.remove('error');
//                         f++;

            
            
            
            
            
            
//                     }
//                     else {
//                         id.classList.add('error');
            
//                     }
//             if (username.value.charAt(index) == '#') {
//                         username.classList.remove('error');
//                         f++;
//                         resolve(f);
    
            
            
            
            
            
            
//                     }
//                     else {
//                         username.classList.add('error');
    
            
//                     }},100)
//                 })
//                 let t=await check;
//                 return t;

//     }
//     let a=validation();
//     a.then((value)=>{
//         console.log(value);
//         if(value!=2){
//             e.preventDefault();
            
//         }
    
//         })
        


    
    

// })




















// async function validateform() {
//     var id = document.getElementById("ID");
//     var username = document.getElementById("username");
//     let index = username.value.length - 5;
//     id.classList.remove('error');
//     username.classList.remove('error');
//     let f = 0;
//     let check=new Promise((resolve ,reject)=>{
//         setTimeout(function check() {
//         if (id.value.length == 18) {
//             id.classList.remove('error');
//             f++;
//             console.log(f);






//         }
//         else {
//             id.classList.add('error');

//         }
//         if (username.value.charAt(index) == '#') {
//             username.classList.remove('error');
//             f++;
//             console.log(f);
//             return false;






//         }
//         else {
//             username.classList.add('error');
//             return false;

//         }
        

//     }, 50)
// })



//     // setTimeout(function submit(){
//     //     console.log(f);

//     //     if (f == 2) {
//     //         return false;
//     //     }
//     //     else {
//     //         return false
//     //     }
//     // })
//     let t=await check;
//     alert(t);
//     return false;


// }








