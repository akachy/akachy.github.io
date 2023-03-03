
let btn = document.querySelector('.kachy')
let gee = document.querySelector('.emp')
let lp = document.querySelector('#lp')
let apc = document.querySelector('#apc')
let pdp = document.querySelector('#pdp')
let head = document.querySelector('h1')

btn.addEventListener('click', get)

function get(event) {
    if ( gee.value == '') {
        alert ('fill in your pvc')
    } else if (gee.value.length != 5 ) {
        alert('incorrect PVC ID; five digits')
    } else if (lp.checked == true) {
        let counterL = document.querySelector(".counterL")
        let result = Number(counterL.innerText) + 1
        counterL.innerText = result
        head.innerText = 'Thanks for Voting'
        gee.value = ''
        lp.checked = false
    } else if (apc.checked == true) {
        let counterA = document.querySelector(".counterA")
        let result = Number(counterA.innerText) + 1
        counterA.innerText = result
        head.innerText = 'Thanks for Voting'
        gee.value = ''
        apc.checked = false 
    } else if (pdp.checked == true) {
        let counterP = document.querySelector(".counterP")
        let result = Number(counterP.innerText) + 1
        counterP.innerText = result
        head.innerText = 'Thanks for Voting'
        gee.value = ''
        pdp.checked = false    
    }    
}

// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   /* Set the width of the side navigation to 0 */
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.background = "";
  }





