(function() {
var gliftWidget = undefined;
var testlib = {};
testlib.options = {
  'ProblemEx' : 1,
  'GameEx' : 1,
  'MarksEx' : 1,
  'Kogos' : 1
};

var getContent = function(hash) {
  var value = hash;
  if (hash === undefined || testlib.options[hash] === undefined) {
    value = 'ProblemEx'
  }
  gliftWidget !== undefined && gliftWidget.destroy();
  switch(value) {
    case 'GameEx':
      gliftWidget = glift.widgets.baseWidget({
        sgfString: testdata.gogameguru_commentary,
        theme: 'DEPTH',
        goBoardBackground: 'images/bambootile_warm.jpg',
        divId: "glift_display1"
      });
      break;
    case 'ProblemEx':
      gliftWidget = glift.widgets.basicProblem({
        sgfStringList: [
            testdata.sgfs.complexproblem,
            testdata.sgfs.realproblem
        ],
        divId: "glift_display1"
      });
      break;
    case 'MarksEx':
      gliftWidget = glift.widgets.basicProblem({
        sgfString: testdata.sgfs.marktest,
        theme: 'DEPTH',
        goBoardBackground: 'images/bambootile_warm.jpg',
        divId: "glift_display1"
      });
      break;
    case 'Kogos':
      $.get("testdata/Kogos.sgf", function(data) {
        gliftWidget = glift.widgets.baseWidget({
          sgfString: data,
          divId: "glift_display1"
        });
      });
    default:
      // do nothing;
  }
  location.hash = value;
}

if ("onhashchange" in window) {
  window.onhashchange = function() {
    hashChange();
  }
} else {
  var prevHash = window.location.hash;
  window.setInterval(function () {
    if (window.location.hash !== prevHash) {
      prevHash = window.location.hash;
      getContent(window.location.hash.slice(1));
    }
  }, 300)
};

var hashChange = function(inhash) {
  var hash = inhash || window.location.hash.slice(1);
  if (hash === undefined || hash === "") hash = "home";
  getContent(hash);
};

hashChange();

$(window).resize(function() {
  gliftWidget && gliftWidget.redraw();
});

})()
