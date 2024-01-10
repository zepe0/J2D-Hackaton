export function scrol(pages) {
  window.addEventListener("scroll", function () {
    var scrollHeight = document.documentElement.scrollHeight ;
    var scrollTop = document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
        console.log("hi")
    }

    
  });
}
