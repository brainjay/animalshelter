function getWindowSizes() {
    var windowHeight = 0, windowWidth = 0;
    if (typeof (window.innerWidth) == 'number') {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;

    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        windowHeight = document.documentElement.clientHeight;
        windowWidth = document.documentElement.clientWidth;

    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        windowHeight = document.body.clientHeight;
        windowWidth = document.body.clientWidth;
    }
    return [windowWidth, windowHeight];
}
