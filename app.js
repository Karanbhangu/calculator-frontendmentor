function themechange(bodycolor, textcolor, screencolor, buttoncolor, buttonbg, sp1bg, sp3bg, barc){

  let textElements = document.getElementsByClassName('fortext')
  let buttonElements = document.getElementsByTagName('button')
  let calcbody = document.getElementById('calcbody')
  let sp1 = document.getElementById('sp1')
  let sp2 = document.getElementById('sp2')
  let sp3 = document.getElementById('sp3')
    document.body.style.background = bodycolor
    for(let i=0;i<textElements.length;i++){
        textElements[i].style.color = textcolor
    }
    document.getElementById('mainscreen').style.background = screencolor
    for(let i=0;i<buttonElements.length;i++){
        buttonElements[i].style.color = buttoncolor
        buttonElements[i].style.background = buttonbg
    }   
    calcbody.style.background = screencolor
    sp1.style.background = sp1bg
    sp2.style.background = sp1bg
    sp3.style.background = sp3bg
    sp1.style.color = '#fff'
    sp2.style.color = '#fff'
    sp3.style.color = '#fff'
    document.getElementById('screen').style.color = textcolor
    document.getElementById('barcolor').style.background = barc
}
function toggle(element) {
  let currentPosition = element.children[0].classList[1];
//   theme2
  if (currentPosition == undefined || currentPosition == "left") {
    element.children[0].classList.add("middle");
    element.children[0].classList.add("leftside");
    if (element.children[0].classList.contains("left")) {
      element.children[0].classList.remove("left");
    }
    // style for middle
    themechange('hsl(0, 0%, 90%)', 'black', 'hsl(0, 0%, 93%)', 'black', '#fff', 'hsl(185, 42%, 37%)', 'hsl(25, 98%, 40%)' , 'hsl(0, 5%, 81%)')
  } else if (currentPosition == "middle") {
    if (element.children[0].classList[2] == "leftside") {
      element.children[0].classList.remove("middle");
      element.children[0].classList.remove("leftside");
      element.children[0].classList.add("right");
    //   style for right
    themechange('hsl(268, 75%, 9%)', 'yellow', 'hsl(268, 71%, 12%)', 'yellow', 'hsl(281, 89%, 26%)', 'hsl(281, 89%, 26%)', 'hsl(176, 100%, 44%)','hsl(268, 71%, 12%)')
    } else {
      element.children[0].classList.remove("middle");
      element.children[0].classList.add("left");
    //  style for left
      themechange('hsl(222, 26%, 31%)','#fff', 'hsl(224, 36%, 15%)', 'black', '#fff', 'hsl(225, 21%, 49%)', 'hsl(6, 63%, 50%)' , 'hsl(223, 31%, 20%)')
    }
  } else if (currentPosition == "right") {
    element.children[0].classList.add("middle");
    element.children[0].classList.remove("right");
    // Style for middle
    themechange('hsl(0, 0%, 90%)', 'black', 'hsl(0, 0%, 93%)', 'black', '#fff', 'hsl(185, 42%, 37%)', 'hsl(25, 98%, 40%)', 'hsl(0, 5%, 81%)')
  }
}
function insertvalue(element) {
  let query = element.innerText;
  let screen = document.getElementById("screen");
  let screenvalue = screen.value;
  if (query == "+" || query == "-" || query == "/" || query == "x") {
    if (
      screenvalue.charAt(screenvalue.length - 1) == "+" ||
      screenvalue.charAt(screenvalue.length - 1) == "-" ||
      screenvalue.charAt(screenvalue.length - 1) == "/" ||
      screenvalue.charAt(screenvalue.length - 1) == "*"
    ) {
    } else {
      if (query == "x") {
        screen.value += "*";
      } else {
        screen.value += query;
      }
    }
  } else {
    screen.value += query;
  }
  console.log();
}
function del() {
  let screen = document.getElementById("screen");
  let screenvalue = screen.value;
  screen.value = screenvalue.slice(0, -1);
}
function reset() {
  let screen = document.getElementById("screen");
  screen.value = "";
}
function calcu() {
  let screen = document.getElementById("screen");
  let screenvalue = screen.value;
  let answer;
  if (
    screenvalue.charAt(screenvalue.length - 1) == "+" ||
    screenvalue.charAt(screenvalue.length - 1) == "-" ||
    screenvalue.charAt(screenvalue.length - 1) == "/" ||
    screenvalue.charAt(screenvalue.length - 1) == "*"
  ) {
    screenvalue = screenvalue.slice(0, -1);
    answer = eval(screenvalue);
  }
  else{
    answer = eval(screenvalue)
  }
  screen.value = answer;
}
