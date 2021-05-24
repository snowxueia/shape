var width = innerWidth;
var height = innerHeight;
var state = [];

// our history
var appHistory = [state];
var appHistoryStep = 0;

document.getElementById("new").addEventListener("click", function () {
  var stage = new Konva.Stage({
    container: "container",
    width: width,
    height: height,
  });

  stage.container().style.backgroundColor = "#E2D3EE";

  var layer = new Konva.Layer();
  stage.add(layer);
  var selectedDrawNum = 10;
  document.getElementById("shape").onclick = function (event) {
    switch (event.target.index) {
      case 0:
        drawLine();
        selectedDrawNum = 1;
        break;
      case 1:
        drawTriangle();
        selectedDrawNum = 2;
        break;
      case 2:
        drawSquare();
        selectedDrawNum = 3;
        break;
      case 3:
        drawRectangle();
        selectedDrawNum = 4;
        break;
      case 4:
        drawCircle();
        selectedDrawNum = 5;
        break;
      case 5:
        drawEllipse();
        selectedDrawNum = 6;
        break;
      case 6:
        drawCurve();
        selectedDrawNum = 7;
        break;
      case 7:
        drawPolyLine();
        selectedDrawNum = 8;
        break;
      case 8:
        drawPolygon();
        selectedDrawNum = 9;
        break;
      default:
        drawLine();
    }
  };

  document.getElementById("saveToJson").addEventListener(
    "click",
    function () {
      saveToJson();
    },
    false
  );

  document.getElementById("save").addEventListener(
    "click",
    function () {
      var dataURL = stage.toDataURL({
        pixelRatio: 3,
      });
      downloadURI(dataURL, "stage.jpg");
    },
    false
  );

  document.getElementById("copy").addEventListener(
    "click",
    function () {
      copy();
    },
    false
  );

  document.getElementById("images").addEventListener(
    "click",
    function () {
      state.push(
         createYoda({
          x: width * Math.random(),
           y: height * Math.random(),
          })
         );
        // // recreate canvas
        create(state);
    },
    false
  );
  document.getElementById("fun").addEventListener(
    "click",
    function () {
      alert("move the square to text area");
      fun();
    },
    false
  );
  function copy() {
    if (selectedDrawNum == 1) alert("copy");
    if (selectedDrawNum == 2) alert("copy");
    if (selectedDrawNum == 3) alert("copy");
    if (selectedDrawNum == 4) alert("copy");
    if (selectedDrawNum == 5) alert("copy");
    if (selectedDrawNum == 6) alert("copy");
    if (selectedDrawNum == 7) alert("copy");
    if (selectedDrawNum == 8) alert("copy");
    if (selectedDrawNum == 9) alert("copy");
  }
  document.addEventListener("keydown", function (event) {
    // Ctrl+C or Cmd+C pressed?
    if ((event.ctrlKey || event.metaKey) && event.keyCode == 67) {
      if (selectedDrawNum == 1) alert("copy");
      if (selectedDrawNum == 2) alert("copy");
      if (selectedDrawNum == 3) alert("copy");
      if (selectedDrawNum == 4) alert("copy");
      if (selectedDrawNum == 5) alert("copy");
      if (selectedDrawNum == 6) alert("copy");
      if (selectedDrawNum == 7) alert("copy");
      if (selectedDrawNum == 8) alert("copy");
      if (selectedDrawNum == 9) alert("copy");
    }

    // Ctrl+V or Cmd+V pressed?
    if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
    
      if ((event.ctrlKey || event.metaKey) && event.keyCode == 67)
       
      if (selectedDrawNum == 1) drawLine();
      if (selectedDrawNum == 2) drawTriangle();
      if (selectedDrawNum == 3) drawSquare();
      if (selectedDrawNum == 4) drawRectangle();
      if (selectedDrawNum == 5) drawCircle();
      if (selectedDrawNum == 6) drawEllipse();
      if (selectedDrawNum == 7) drawCurve();
      if (selectedDrawNum == 8) drawPolyLine();
      if (selectedDrawNum == 9) drawPolygon();
    }
    if ((event.ctrlKey || event.metaKey) && event.key == "z") {
      // Ctrl+X or Cmd+X pressed?
      // if ((event.ctrlKey || event.metaKey) && event.keyCode == 88) {
      if (appHistoryStep === 0) {
        return;
      }
      appHistoryStep -= 1;
      state = appHistory[appHistoryStep];
      // create everything from scratch
      create(state);
    }
  });

  document.getElementById("files").addEventListener(
    "change",
    function () {
      load();
    },
    false
  );


  function drawLine() {
    var line1 = new Konva.Line({
      points: [5, 70, 140, 23],
      stroke: "red",
      strokeWidth: 15,
      lineCap: "round",
      lineJoin: "round",
      draggable: true,
      id: "myLine",
    });

    layer.add(line1);

    var trLine = new Konva.Transformer({
      nodes: [line1],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trLine);

    // at this point basic demo is finished!!
    // we just have several transforming nodes
    layer.draw();
  }

  function drawTriangle() {
    var triangle = new Konva.RegularPolygon({
      x: 150,
      y: 275,
      sides: 3,
      radius: 100,
      scaleY: 1.6,
      fillLinearGradientStartPoint: {
        x: -50,
        y: -50,
      },
      fillLinearGradientEndPoint: {
        x: 50,
        y: 50,
      },
      fillLinearGradientColorStops: [0, "red", 1, "yellow"],
      stroke: "black",
      strokeWidth: 2,
      draggable: true,
      id: "myTriangle",
    });
    layer.add(triangle);
    var trTriangle = new Konva.Transformer({
      nodes: [triangle],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trTriangle);

    // at this point basic demo is finished!!
    // we just have several transforming nodes
    layer.draw();
  }

  function drawSquare() {
    var rect1 = new Konva.Rect({
      x: 60,
      y: 60,
      width: 100,
      height: 100,
      fillLinearGradientStartPoint: {
        x: -50,
        y: -50,
      },
      fillLinearGradientEndPoint: {
        x: 50,
        y: 50,
      },
      fillLinearGradientColorStops: [0, "black", 1, "yellow"],
      stroke: "pink",
      name: "rect",
      draggable: true,
      id: "mySquare",
    });
    layer.add(rect1);

    var trSquare = new Konva.Transformer({
      nodes: [rect1],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trSquare);

    // at this point basic demo is finished!!
    // we just have several transforming nodes
    layer.draw();
  }

  function drawRectangle() {
    var rect2 = new Konva.Rect({
      x: 250,
      y: 100,
      width: 150,
      height: 90,
      fillLinearGradientStartPoint: {
        x: -30,
        y: -50,
      },
      fillLinearGradientEndPoint: {
        x: 50,
        y: 50,
      },
      fillLinearGradientColorStops: [0, "blue", 1, "red"],
      stroke: "pink",
      name: "rect",
      draggable: true,
      id: "myRect",
    });
    layer.add(rect2);

    var trRect = new Konva.Transformer({
      nodes: [rect2],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trRect);

    // at this point basic demo is finished!!
    // we just have several transforming nodes
    layer.draw();
  }

  function drawCircle() {
    var circle = new Konva.Circle({
      x: 100,
      y: 100,
      radius: 70,
      fillLinearGradientStartPoint: {
        x: -50,
        y: -50,
      },
      fillLinearGradientEndPoint: {
        x: 50,
        y: 50,
      },
      fillLinearGradientColorStops: [0, "purple", 1, "yellow"],
      stroke: "pink",
      strokeWidth: 4,
      draggable: true,
      id: "myCircle",
    });

    // add the shape to the layer
    layer.add(circle);

    var trCircle = new Konva.Transformer({
      nodes: [circle],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trCircle);

    // at this point basic demo is finished!!
    // we just have several transforming nodes
    layer.draw();
  }

  function drawEllipse() {
    var oval = new Konva.Ellipse({
      x: 100,
      y: 100,
      radiusX: 100,
      radiusY: 50,
      fillLinearGradientStartPoint: {
        x: -50,
        y: -50,
      },
      fillLinearGradientEndPoint: {
        x: 50,
        y: 50,
      },
      fillLinearGradientColorStops: [0, "pink", 1, "yellow"],
      stroke: "pink",
      strokeWidth: 4,
      draggable: true,
      id: "myEllipse",
    });

    // add the shape to the layer
    layer.add(oval);

    var trOval = new Konva.Transformer({
      nodes: [oval],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trOval);

    // at this point basic demo is finished!!
    // we just have several transforming nodes
    layer.draw();
  }

  function drawPolyLine() {
    /* var lineGroup = new Konva.Group({
        draggable: true,
      });

      let arrow;
      stage.on("mousedown", () => {
        const pos = stage.getPointerPosition();
        arrow = new Konva.Line({
          points: [pos.x, pos.y],
          stroke: "black",
          fill: "black",
        });
        lineGroup.add(arrow);
        layer.add(lineGroup);
        layer.batchDraw();
      });

      stage.on("mousemove", () => {
        if (arrow) {
          const pos = stage.getPointerPosition();
          const points = [arrow.points()[0], arrow.points()[1], pos.x, pos.y];
          arrow.points(points);
          layer.batchDraw();
        }
      });

      stage.on("mouseup", () => {
        arrow = null;
      });

      var trPoly = new Konva.Transformer({
        nodes: [lineGroup],
        // ignore stroke in size calculations
        ignoreStroke: true,
        // manually adjust size of transformer
        padding: 5,
      });
      layer.add(trPoly);

      layer.draw();*/

    var polyLine = new Konva.Line({
      points: [5, 70, 140, 23, 250, 60, 300, 20],
      stroke: "green",
      strokeWidth: 10,
      lineCap: "round",
      lineJoin: "round",
      draggable: true,
      id: "myPolyLine",
    });
    layer.add(polyLine);
    var trPolyLine = new Konva.Transformer({
      nodes: [polyLine],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trPolyLine);

    var trPoly = new Konva.Transformer({
      nodes: [trPolyLine],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trPoly);
    layer.draw();
  }

  function drawPolygon() {
    var octagon = new Konva.RegularPolygon({
      x: 450,
      y: 275,
      sides: 8,
      radius: 100,
      fillLinearGradientStartPoint: {
        x: -50,
        y: -50,
      },
      fillLinearGradientEndPoint: {
        x: 50,
        y: 50,
      },
      fillLinearGradientColorStops: [0, "red", 1, "yellow"],
      stroke: "pink",
      draggable: true,
      id: "myPolygon",
    });
    layer.add(octagon);

    var trPolygon = new Konva.Transformer({
      nodes: [octagon],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trPolygon);

    // at this point basic demo is finished!!
    // we just have several transforming nodes
    layer.draw();
  }

  function drawCurve() {
    // function to build anchor point

    var group = new Konva.Group({
      draggable: true,
      id: "myCurve",
    });

    var trCurve = new Konva.Transformer({
      nodes: [group],
      // ignore stroke in size calculations
      ignoreStroke: true,
      // manually adjust size of transformer
      padding: 5,
    });
    layer.add(trCurve);

    layer.draw();

    function buildAnchor(x, y) {
      var anchor = new Konva.Circle({
        x: x,
        y: y,
        radius: 5,
        stroke: "#666",
        fill: "#ddd",
        strokeWidth: 2,
        draggable: true,
      });
      group.add(anchor);
      // layer.add(anchor);

      // add hover styling
      anchor.on("mouseover", function () {
        document.body.style.cursor = "pointer";
        this.strokeWidth(4);
        layer.draw();
      });
      anchor.on("mouseout", function () {
        document.body.style.cursor = "default";
        this.strokeWidth(2);
        layer.draw();
      });

      anchor.on("dragmove", function () {
        updateDottedLines();
      });

      return anchor;
    }

    // function to update line points from anchors
    function updateDottedLines() {
      var b = bezier;

      var bezierLinePath = layer.findOne("#bezierLinePath");

      bezierLinePath.points([
        b.start.x(),
        b.start.y(),
        b.control1.x(),
        b.control1.y(),
        b.control2.x(),
        b.control2.y(),
        b.end.x(),
        b.end.y(),
      ]);
      layer.draw();
      console.info(bezierLinePath.points);
    }

    var bezierLine = new Konva.Shape({
      stroke: "blue",
      strokeWidth: 5,
      sceneFunc: (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(bezier.start.x(), bezier.start.y());
        ctx.bezierCurveTo(
          bezier.control1.x(),
          bezier.control1.y(),
          bezier.control2.x(),
          bezier.control2.y(),
          bezier.end.x(),
          bezier.end.y()
        );
        ctx.fillStrokeShape(shape);
      },
    });
    group.add(bezierLine);
    // layer.add(bezierLine);

    var bezierLinePath = new Konva.Line({
      dash: [10, 10, 0, 10],
      strokeWidth: 3,
      stroke: "black",
      lineCap: "round",
      id: "bezierLinePath",
      opacity: 0.3,
      points: [0, 0],
    });
    group.add(bezierLinePath);
    layer.add(group);
    // layer.add(bezierLinePath);

    var bezier = {
      start: buildAnchor(300, 20),
      control1: buildAnchor(500, 40),
      control2: buildAnchor(450, 150),
      end: buildAnchor(300, 150),
    };
    updateDottedLines();
  }
  function fun(){
  var text = new Konva.Text({
    text: 'UMASS LOWELL!',
    fontFamily: 'Calibri',
    fontSize: 100,
    x: 20,
    y: 20,
    fill: 'green',
    // stroke: 'red',
    strokeWidth: 2,
    shadowColor: 'purple',
    // shadowBlur: 0,
    shadowOffset: { x: 5, y: 5 },
    // shadowOpacity: 0.5
  });
      layer.add(text);
 
      var rect = new Konva.Rect({
        x: 50,
        y: 50,
        // stroke: 'red',
        width: 100,
        height: 100,
        fill: 'red',
        draggable: true,
        globalCompositeOperation: 'xor',
      });

      layer.add(rect);
      stage.add(layer);
    }
  function saveToJson() {
    let json = stage.toJSON();
    let blob = new Blob([json], {
      type: "text/plain;charset=utf-8",
    });
    let myselect = document.getElementById("shape");
    let index = myselect.selectedIndex;
    let saveName = myselect.options[index].text;
    saveAs(blob, saveName + ".json");
  }

  function load() {
    var selectedFile = document.getElementById("files").files[0];
    var reader = new FileReader();
    reader.readAsText(selectedFile);
    reader.onload = function () {
      let json = JSON.parse(this.result);
      // create node using json string
      var stage = Konva.Node.create(json, "container");
    };
  }

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

  var possibleFilters = ["", "blur", "invert"];

   function createObject(attrs) {
    return Object.assign({}, attrs, {
      // define position
      x: 0,
      y: 0,
     // here should be url to image
     src: "",
      // and define filter on it, let's define that we can have only
      // "blur", "invert" or "" (none)
       filter: "blur",
     });
   }
   function createYoda(attrs) {
     return Object.assign(createObject(attrs), {
     src: "spring.png",
     });
   }

  // initial state

  // create function will destroy previous drawing
  // then it will created required nodes and attach all events
  function create() {
    layer.destroyChildren();
    state.forEach((item, index) => {
      var node = new Konva.Image({
        draggable: true,
        name: "item-" + index,
        // make it smaller
        scaleX: 0.5,
        scaleY: 0.5,
      });
      layer.add(node);
      node.on("dragend", () => {
        // make new state
        state = state.slice();
        // update object data
        state[index] = Object.assign({}, state[index], {
          x: node.x(),
          y: node.y(),
        });
        // save it into history
        saveStateToHistory(state);
        // don't need to call update here
        // because changes already in node
      });

      node.on("click", () => {
        // find new filter
        var oldFilterIndex = possibleFilters.indexOf(state[index].filter);
        var nextIndex = (oldFilterIndex + 1) % possibleFilters.length;
        var filter = possibleFilters[nextIndex];

        // apply state changes
        state = state.slice();
        state[index] = Object.assign({}, state[index], {
          filter: filter,
        });
        // save state to history
        saveStateToHistory(state);
        // update canvas from state
        update(state);
      });

      var img = new window.Image();
      img.onload = function () {
        node.image(img);
        update(state);
        layer.batchDraw();
      };
      img.src = item.src;
    });
    update(state);
  }

  function update() {
    state.forEach(function (item, index) {
      var node = stage.findOne(".item-" + index);
      node.setAttrs({
        x: item.x,
        y: item.y,
      });

      if (!node.image()) {
        return;
      }
      if (item.filter === "blur") {
        node.filters([Konva.Filters.Blur]);
        node.blurRadius(10);
        node.cache();
      } else if (item.filter === "invert") {
        node.filters([Konva.Filters.Invert]);
        node.cache();
      } else {
        node.filters([]);
        node.clearCache();
      }
    });
    layer.batchDraw();
  }

  //
  function saveStateToHistory(state) {
    appHistory = appHistory.slice(0, appHistoryStep + 1);
    appHistory = appHistory.concat([state]);
    appHistoryStep += 1;
  }
  create(state);

  document.getElementById("paste").addEventListener("click", function () {
    // create new object
    if (selectedDrawNum == 1) drawLine();
    if (selectedDrawNum == 2) drawTriangle();
    if (selectedDrawNum == 3) drawSquare();
    if (selectedDrawNum == 4) drawRectangle();
    if (selectedDrawNum == 5) drawCircle();
    if (selectedDrawNum == 6) drawEllipse();
    if (selectedDrawNum == 7) drawCurve();
    if (selectedDrawNum == 8) drawPolyLine();
    if (selectedDrawNum == 9) drawPolygon();

    // state.push(
    //   createYoda({
    //     x: width * Math.random(),
    //     y: height * Math.random(),
    //   })
    // );
    // // recreate canvas
    // create(state);
  });

  document.querySelector("#undo").addEventListener("click", function () {
    if (appHistoryStep === 0) {
      return;
    }
    appHistoryStep -= 1;
    state = appHistory[appHistoryStep];
    // create everything from scratch
    create(state);
  });

  document.querySelector("#redo").addEventListener("click", function () {
    if (appHistoryStep === appHistory.length - 1) {
      return;
    }
    appHistoryStep += 1;
    state = appHistory[appHistoryStep];
    // create everything from scratch
    create(state);
  });

  stage.on("click", function (e) {
    var id = e.target.id();
    console.info(id);
  });
});
