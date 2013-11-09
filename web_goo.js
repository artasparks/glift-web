(function() {
var gliftWidget = undefined;
var getContent = function(hash) {
  var value = hash;
  if (hash === undefined) {
    value = 'ProblemEx'
  }
  gliftWidget !== undefined && gliftWidget.destroy();
  switch(value) {
    case 'GameEx':
      gliftWidget = glift.widgets.create({
        sgf: testdata.gogameguru_commentary,
        theme: 'DEPTH',
        //goBoardBackground: 'images/bambootile_warm.jpg',
        goBoardBackground: 'images/purty_wood.png',
        divId: "glift_display1"
      });
      break;
    case 'ProblemEx':
      gliftWidget = glift.widgets.create({
        sgfList: [
            testdata.sgfs.complexproblem,
            testdata.sgfs.realproblem
        ],
        sgfDefaults: {
          widgetType: 'STANDARD_PROBLEM'
        },
        divId: "glift_display1",
        theme: 'DEPTH',
        goBoardBackground: 'images/purty_wood.png'
      });
      break;
    case 'ProblemEx2':
      gliftWidget = glift.widgets.create({
        sgf: {
          sgfString: testdata.sgfs.gogameguru_hard,
          widgetType: 'STANDARD_PROBLEM',
          icons: ['refresh', 'roadmap', 'checkbox']
        },
        divId: "glift_display1"
      });
      break;
    case 'MarksEx':
      gliftWidget = glift.widgets.create({
        sgf: {
          sgfString: testdata.sgfs.marktest,
          icons: []
        },
        useCommentBar: false,
        theme: 'DEPTH',
        goBoardBackground: 'images/purty_wood.png',
        // goBoardBackground: 'images/bambootile_warm.jpg',
        divId: "glift_display1"
      });
      break;
    case 'Kogos':
      gliftWidget = glift.widgets.create({
        sgf: 'testdata/Kogos.sgf',
        divId: "glift_display1"
      });
      break;
    case 'TMLesson':
      gliftWidget = glift.widgets.create({
        divId: "glift_display1",
        sgfList: [{
            url: "testdata/tm_lesson/19pt_1.sgf",
            widgetType: 'EXAMPLE'
          },{
            url: "testdata/tm_lesson/19pt_2.sgf",
            widgetType: 'EXAMPLE'
          },{
            url: "testdata/tm_lesson/19pt_correctjoseki_blacktoplay.sgf",
            widgetType: 'CORRECT_VARIATIONS_PROBLEM'
          },{
            url: "testdata/tm_lesson/19pt_obviousnext.sgf",
            initialPosition: "1"
          },{
            url: "testdata/tm_lesson/19pt_thetrap.sgf",
            widgetType: 'EXAMPLE'
          },
          "testdata/tm_lesson/19pt_thesacrifice.sgf",
          "testdata/tm_lesson/19pt_thesacrificept2.sgf",
          "testdata/tm_lesson/19pt_thesacrificept3.sgf",
          "testdata/tm_lesson/19pt_thesacrificept3_alternate.sgf",
          {
            url: "testdata/tm_lesson/19pt_thesacrificept3_mistake.sgf",
            initialPosition: "1"
          },{
            url: "testdata/tm_lesson/19pt_thesacrifice_afterwards.sgf",
            widgetType: 'EXAMPLE'
          },{
            url: "testdata/tm_lesson/19pt_correctnext_press.sgf",
            initialPosition: "1",
            widgetType: 'CORRECT_VARIATIONS_PROBLEM'
          },{
            url: "testdata/tm_lesson/19pt_correctnext_press2.sgf",
            initialPosition: "1",
          },{
            url: "testdata/tm_lesson/19pt_correctnext_nopress.sgf",
            initialPosition: "1",
            widgetType: 'CORRECT_VARIATIONS_PROBLEM'
          },{
            url: "testdata/tm_lesson/19pt_correctnext_attach.sgf",
            initialPosition: "1"
          },{
            url: "testdata/tm_lesson/19pt_correctnext_attach2.sgf",
            initialPosition: "1"
          },{
            url: "testdata/tm_lesson/19pt_partingthoughts.sgf",
            widgetType: 'EXAMPLE'
          }
        ],
        sgfDefaults: {
          widgetType: 'STANDARD_PROBLEM'
        },
        theme: 'DEPTH',
        goBoardBackground: 'images/purty_wood.png'
      });
      break;
    case 'GGGLesson':
      gliftWidget = glift.widgets.create({
        divId: "glift_display1",
        sgfDefaults: {
          widgetType: 'EXAMPLE'
        },
        theme: 'DEPTH',
        goBoardBackground: 'images/purty_wood.png',
        allowWrapAround: true,
        sgfList: [
          'testdata/ggg_lesson/intro.sgf',
          'testdata/ggg_lesson/intro_pt2.sgf',
          'testdata/ggg_lesson/flexible_opening.sgf',
          'testdata/ggg_lesson/flexible_opening_pt2.sgf',
          'testdata/ggg_lesson/main_diagram.sgf',
          'testdata/ggg_lesson/main_diagram_3_4_point.sgf',
          'testdata/ggg_lesson/main_diagram_3_4_point_pt2.sgf'
        ]
      });
      break;
    case 'NSLesson':
      gliftWidget = glift.widgets.create({
        divId: "glift_display1",
        sgfDefaults: {
          widgetType: 'STANDARD_PROBLEM',
          problemConditions: {
            GB: [],
            C: ['Correct', 'is correct', 'is the correct',
              'very good', 'Very good']
          },
        },
        theme: 'DEPTH',
        goBoardBackground: 'images/purty_wood.png',
        sgfList: [
          {
            url: 'testdata/ns_lesson/shape_workshop_intro.sgf',
            widgetType: 'EXAMPLE'
          },
          'testdata/ns_lesson/shape1.sgf',
          'testdata/ns_lesson/shape2.sgf',
          'testdata/ns_lesson/shape3.sgf',
          'testdata/ns_lesson/shape4.sgf',
          'testdata/ns_lesson/shape5.sgf',
          'testdata/ns_lesson/shape6.sgf',
          'testdata/ns_lesson/shape7.sgf',
          'testdata/ns_lesson/shape8.sgf',
          'testdata/ns_lesson/shape9.sgf',
          'testdata/ns_lesson/shape10.sgf',
          'testdata/ns_lesson/shape11.sgf',
          'testdata/ns_lesson/shape12.sgf',
          'testdata/ns_lesson/shape13.sgf',
          'testdata/ns_lesson/shape14.sgf',
          'testdata/ns_lesson/shape15.sgf',
          'testdata/ns_lesson/shape16.sgf',
          'testdata/ns_lesson/shape17.sgf',
          'testdata/ns_lesson/shape18.sgf',
          'testdata/ns_lesson/shape19.sgf',
          'testdata/ns_lesson/shape20.sgf',
          'testdata/ns_lesson/shape21.sgf',
          'testdata/ns_lesson/shape22.sgf',
          'testdata/ns_lesson/shape23.sgf',
          'testdata/ns_lesson/shape24.sgf'
        ]
      });
      break;
    default:
      window.location.hash = 'ProblemEx';
  }
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
  gliftWidget && gliftWidget.draw();
});

})()
