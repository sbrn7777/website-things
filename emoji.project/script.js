
let clickArr = [[60, 90], [150, 180], [240, 270], [330, 452]];
var select = function (s) {
    return document.querySelector(s);
},
    selectAll = function (s) {
        return document.querySelectorAll(s);
    },
    path = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/",
    animationWindow = select('#animationWindow'),
    anim = lottie.loadAnimation({
        container: animationWindow,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        initialSegment: [420, 452],
        path: "https://assets.codepen.io/35984/2022+toggle.json"
    });

anim.addEventListener('DOMLoaded', onDOMLoaded);
anim.setSpeed(1);
let count = 0;
function onDOMLoaded(e) {

    animationWindow.onclick = () => {
        anim.playSegments(clickArr[count], true);
        count++;
        if (count >= clickArr.length) {
            count = 0
        }
    }

}
