(function() {
var gliftWidget = undefined;
var currentCodeFunc = function() {};

var getContent = function(hash) {
  var value = hash;
  if (hash === undefined || hash === '') {
    value = 'Home'
  }

  if (gliftWidget !== undefined) {
    gliftWidget.destroy();
    $('#glift_display1').empty();
  }
  $('#extra_content').html("");
  switch(value) {
    case 'Home':
      $('#extra_content').append("<p style='font-size:medium'>" +
        "Glift is a new Javascript library for the game Go, " +
        "created for desktop and mobile devices.  " +
        "If you would like to see what Glift is about, " +
        "check out the examples or the lessons.</p>");
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          sgf: {
            sgfString: "(;FF[4]GM[1]SZ[19]CA[UTF-8]SO[Glift]EV[]PB[Chen Yaoye]BR[9p]PW[Tan Xiao]WR[7p]KM[7.5]DT[2013-11-18]RE[B+0.5];B[qd];W[dc];B[pq];W[dq];B[nc];W[co];B[qk];W[jp];B[de];W[cg];B[cc];W[gl];B[dd];W[db];B[fd];W[hc];B[cf];W[dh];B[cb];W[mp];B[po];W[kc];B[dk];W[bf];B[be];W[df];B[ce];W[dm];B[fk];W[gh];B[hk];W[gn];B[hq];W[jq];B[eq];W[dr];B[io];W[im];B[jo];W[ko];B[jm];W[jn];B[in];W[kn];B[hm];W[il];B[hl];W[od];B[jk];W[oc])",
            widgetType: 'EXAMPLE',
            initialPosition: 30,
            nextMovesPath: '0:10',
            uiComponents: ['BOARD', 'STATUS_BAR']
          },
          display: {
            drawBoardCoords: true,
            theme: 'DEPTH',
            disableZoomForMobile: true,
            goBoardBackground: 'images/purty_wood.png',
          }
        });
      };
      break;
    case 'GameEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: "glift_display1",
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png',
            disableZoomForMobile: true
          }
        });
      };
      break;
    case 'GameFigure':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: {
            url: 'testdata/gogameguru_commentary.sgf',
            widgetType: 'EXAMPLE'
            initialPosition: 20,
            nextMovesPath: '0:20',
          },
          divId: "glift_display1",
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png',
            disableZoomForMobile: true
          }
        });
      };
      break;
    case 'ProblemEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgfCollection: [
              // Implicitly convert problem to an SGF object using a
              // literal SGF string reference
              testdata.sgfs.complexproblem,

              // Explicitly create the SGF object using a literal
              // SGF String reference and create an alias so we can
              // refer to it later.
              {
                sgfString: testdata.sgfs.realproblem,
                alias: 'realproblem'
              },

              // Refer to the previous problem and show the solution.
              {
                alias: 'realproblem',
                initialPosition: '0.1.0.0',
                widgetType: 'EXAMPLE'
              }
          ],
          sgfDefaults: {
            widgetType: 'STANDARD_PROBLEM'
          },
          divId: "glift_display1",
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          }
        });
      };
      break;
    case 'ProblemEx2':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: {
            sgfString: testdata.sgfs.gogameguru_hard,
            widgetType: 'STANDARD_PROBLEM'
          },
          divId: "glift_display1"
        });
      };
      break;
    case 'MultiChoiceProblem':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: {
            url: 'testdata/multi-choice.sgf',
            widgetType: 'CORRECT_VARIATIONS_PROBLEM'
          },
          divId: "glift_display1"
        });
      };
      break;
    case 'BoardCoordsEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgfCollection: [{
            sgfString: '',
            boardRegion: 'ALL'
          },{
            sgfString: '',
            boardRegion: 'TOP'
          },{
            sgfString: '',
            boardRegion: 'TOP_RIGHT'
          },{
            sgfString: '',
            boardRegion: 'BOTTOM_LEFT'
          },{
            sgfString: '',
            boardRegion: 'LEFT'
          }],
          divId: 'glift_display1',
          sgfDefaults: {
            widgetType: 'EXAMPLE'
          },
          display: {
            drawBoardCoords: true
          }
        });
      };
      break;
    case 'BoardEditorEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: {
            sgfString: '',
            widgetType: 'BOARD_EDITOR'
          },
          divId: "glift_display1"
        });
      };
      break;
    case 'MarksEx':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: {
            sgfString: testdata.sgfs.marktest,
            icons: []
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          },
          divId: "glift_display1"
        });
      };
      break;
    case 'Kogos':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/Kogos.sgf',
          divId: "glift_display1"
        });
      };
      break;
    case 'TMLesson':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          sgfCollection: [{
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
              initialPosition: "1"
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
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          }
        });
      };
      break;
    case 'GGGLesson':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          allowWrapAround: false,
          sgfDefaults: {
            widgetType: 'EXAMPLE'
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png',
          },
          sgfCollection: [
            'testdata/ggg_lesson/intro.sgf',
            'testdata/ggg_lesson/intro_pt2.sgf',
            'testdata/ggg_lesson/flexible_opening.sgf',
            'testdata/ggg_lesson/flexible_opening_pt2.sgf',
            'testdata/ggg_lesson/main_diagram.sgf',
            'testdata/ggg_lesson/main_diagram_3_4_point.sgf',
            'testdata/ggg_lesson/main_diagram_3_4_point_pt2.sgf',
            {
              url: 'testdata/ggg_lesson/bad_ladder_pt1.sgf',
              widgetType: 'REDUCED_GAME_VIEWER'
            },{
              url: 'testdata/ggg_lesson/no_normal_joseki.sgf',
              widgetType: 'REDUCED_GAME_VIEWER',
              initialPosition: '1'
            },{
              url: 'testdata/ggg_lesson/approach_at_5_3.sgf',
              widgetType: 'REDUCED_GAME_VIEWER'
            },
            'testdata/ggg_lesson/better_simple_game_pt1.sgf',
            'testdata/ggg_lesson/better_simple_game_pt2.sgf',
            {
              url: 'testdata/ggg_lesson/3_3_invasion.sgf',
              widgetType: 'REDUCED_GAME_VIEWER'
            },
            'testdata/ggg_lesson/junction_between_frameworks.sgf',
            'testdata/ggg_lesson/problem_intro.sgf',
            {
              url: 'testdata/ggg_lesson/problem1.sgf',
              initialPosition: '1',
              widgetType: 'CORRECT_VARIATIONS_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem2.sgf',
              initialPosition: '1',
              widgetType: 'CORRECT_VARIATIONS_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem3.sgf',
              widgetType: 'STANDARD_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem4.sgf',
              widgetType: 'STANDARD_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem5.sgf',
              widgetType: 'STANDARD_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem6.sgf',
              widgetType: 'STANDARD_PROBLEM',
              initialPosition: 1
            }, {
              url: 'testdata/ggg_lesson/problem7.sgf',
              widgetType: 'STANDARD_PROBLEM',
              initialPosition: 1
            }, {
              url: 'testdata/ggg_lesson/problem8.sgf',
              widgetType: 'STANDARD_PROBLEM'
            }, {
              url: 'testdata/ggg_lesson/problem9.sgf',
              widgetType: 'STANDARD_PROBLEM',
              initialPosition: 1
            }, {
              url: 'testdata/ggg_lesson/problem10.sgf',
              widgetType: 'STANDARD_PROBLEM'
            },
            'testdata/ggg_lesson/outro.sgf'
          ]
        });
      };
      break;
    case 'NSLesson':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          allowWrapAround: false,
          sgfDefaults: {
            widgetType: 'STANDARD_PROBLEM',
            problemConditions: {
              GB: [],
              C: ['Correct', 'is correct', 'is the correct',
                'very good', 'Very good']
            }
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          },
          sgfCollection: 'testdata/ns_lesson.json'
        });
      };
      break;
    case 'YounggilLesson':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          divId: "glift_display1",
          allowWrapAround: true,
          sgfDefaults: {
            widgetType: 'EXAMPLE',
            problemConditions: {
              GB: [],
              C: ['Correct', 'is correct', 'is the correct',
                'very good', 'Very good']
            }
          },
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          },
          sgfCollection: [{
            url: 'testdata/younggil_lesson/younggil-game.sgf'
          },{
            url: 'testdata/younggil_lesson/younggil-game-nocomments.sgf',
            widgetType: 'GAME_VIEWER'
          },{
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: 180
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: 12,
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '11.1+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '26'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '20'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '12.1+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '37.1'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '37.1.0.0.0.0.0.0.0.0.0.0.0.0'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '37.1+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '49.1'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '77.1'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '77.2'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '77.2+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '78'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.1',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.0',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.2'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.2.0'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.2.0.0'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '84.1.2.1+'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '87'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '92'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1.0.0'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1.0.0.0.0.0.0',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1.0.0.0.0.0.0.0.0.0',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1+',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '85.1.0.0.0.0.0.0.1',
            showVariations: 'NEVER'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '123'
          }, {
            url: 'testdata/younggil_lesson/younggil-game.sgf',
            initialPosition: '140'
          }]
        });
      };
      break;
    case 'DefaultTheme':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: "glift_display1",
          display: { theme: 'DEFAULT' }
        });
      };
      break;
    case 'DepthTheme':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: "glift_display1",
          display: { theme: 'DEPTH' }
        });
      };
      break;
    case 'DepthBackgroundTheme':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: 'glift_display1',
          display: {
            theme: 'DEPTH',
            goBoardBackground: 'images/purty_wood.png'
          }
        });
      };
      break;
    case 'TranspTheme':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: 'glift_display1',
          display: { theme: 'TRANSPARENT' }
        });
      };
      break;
    case 'TextbookTheme':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: 'glift_display1',
          display: { theme: 'TEXTBOOK' }
        });
      };
      break;
    case 'ColorfulTheme':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: 'glift_display1',
          display: { theme: 'COLORFUL' }
        });
      };
      break;
    case 'MoodyTheme':
      currentCodeFunc = function() {
        gliftWidget = glift.create({
          sgf: 'testdata/gogameguru_commentary.sgf',
          divId: 'glift_display1',
          display: { theme: 'MOODY' }
        });
      };
      break;
    default:
      currentCodeFunc = undefined;
      window.location.hash = 'Home';
  }
  currentCodeFunc && currentCodeFunc();
};

$('#GliftVersion').text('Version: ' + glift.global.version);

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
  getContent(hash);
};

hashChange();

$(window).resize(function() {
  gliftWidget && gliftWidget.redraw();
});

$('#code-button').click(function() {
  var funcString = currentCodeFunc.toString();
  funcString = funcString.replace(/\n        /g, '\n')
  funcString = funcString.replace(/^function[^\n]*\n/, '')
  funcString = funcString.replace(/\s*}$/, '')
  $('#code-container').html(funcString);
});

window.gliftWidget = gliftWidget;
})();
