//------- Condortable p5 world :))))) -------//

let canvas;

let sketch = function (p) {
  let finPosX = [];
  let finPosY = [];
  let thumbRootX = [];
  let thumbRootY = [];

  let flag = 1;
  let handImage = [];

  let tobiraImage = [];
  let pickLevel;
  let waitMilSec = 800;

  let fingerDist = [];
  let graspLevel = [];
  let handImgRWid = 475;
  let handImgRHei = 500;
  let handImgLWid = 1425;
  let handImgLHei = 500;
  let pickImgWid = 950;
  let pickImgHei = 500;

  let graspMin = 50; //50
  let graspMax = 280; //280
  let timeoutId;

  p.setup = function () {
    // cannot use p.preload so load here using callback...
    // load hand images
    {
      p.loadImage("hands/1.jpg", function (loadedImage) {
        handImage[0] = loadedImage;
      });
      p.loadImage("hands/2.jpg", function (loadedImage) {
        handImage[1] = loadedImage;
      });
      p.loadImage("hands/3.jpg", function (loadedImage) {
        handImage[2] = loadedImage;
      });
      p.loadImage("hands/4.jpg", function (loadedImage) {
        handImage[3] = loadedImage;
      });
      p.loadImage("hands/5.jpg", function (loadedImage) {
        handImage[4] = loadedImage;
      });
      p.loadImage("hands/6.jpg", function (loadedImage) {
        handImage[5] = loadedImage;
      });
      p.loadImage("hands/7.jpg", function (loadedImage) {
        handImage[6] = loadedImage;
      });
      p.loadImage("hands/8.jpg", function (loadedImage) {
        handImage[7] = loadedImage;
      });
      p.loadImage("hands/9.jpg", function (loadedImage) {
        handImage[8] = loadedImage;
      });
      p.loadImage("hands/10.jpg", function (loadedImage) {
        handImage[9] = loadedImage;
      });
      p.loadImage("hands/11.jpg", function (loadedImage) {
        handImage[10] = loadedImage;
      });
      p.loadImage("hands/12.jpg", function (loadedImage) {
        handImage[11] = loadedImage;
      });
      p.loadImage("hands/13.jpg", function (loadedImage) {
        handImage[12] = loadedImage;
      });
      p.loadImage("hands/14.jpg", function (loadedImage) {
        handImage[13] = loadedImage;
      });
      p.loadImage("hands/15.jpg", function (loadedImage) {
        handImage[14] = loadedImage;
      });
      p.loadImage("hands/16.jpg", function (loadedImage) {
        handImage[15] = loadedImage;
      });
      p.loadImage("hands/17.jpg", function (loadedImage) {
        handImage[16] = loadedImage;
      });
      p.loadImage("hands/18.jpg", function (loadedImage) {
        handImage[17] = loadedImage;
        handImage[18] = loadedImage;
      });
    }
    {
      p.loadImage("tobira/tobira_001.jpg", function (loadedImage) {
        tobiraImage[0] = loadedImage;
      });
      p.loadImage("tobira/tobira_002.jpg", function (loadedImage) {
        tobiraImage[1] = loadedImage;
      });
      p.loadImage("tobira/tobira_003.jpg", function (loadedImage) {
        tobiraImage[2] = loadedImage;
      });
      p.loadImage("tobira/tobira_004.jpg", function (loadedImage) {
        tobiraImage[3] = loadedImage;
      });
      p.loadImage("tobira/tobira_005.jpg", function (loadedImage) {
        tobiraImage[4] = loadedImage;
      });
      p.loadImage("tobira/tobira_006.jpg", function (loadedImage) {
        tobiraImage[5] = loadedImage;
      });
      p.loadImage("tobira/tobira_007.jpg", function (loadedImage) {
        tobiraImage[6] = loadedImage;
      });
      p.loadImage("tobira/tobira_008.jpg", function (loadedImage) {
        tobiraImage[7] = loadedImage;
      });
      p.loadImage("tobira/tobira_009.jpg", function (loadedImage) {
        tobiraImage[8] = loadedImage;
      });
      p.loadImage("tobira/tobira_010.jpg", function (loadedImage) {
        tobiraImage[9] = loadedImage;
      });
      p.loadImage("tobira/tobira_011.jpg", function (loadedImage) {
        tobiraImage[10] = loadedImage;
      });
      p.loadImage("tobira/tobira_012.jpg", function (loadedImage) {
        tobiraImage[11] = loadedImage;
      });
      p.loadImage("tobira/tobira_013.jpg", function (loadedImage) {
        tobiraImage[12] = loadedImage;
      });
      p.loadImage("tobira/tobira_014.jpg", function (loadedImage) {
        tobiraImage[13] = loadedImage;
      });
      p.loadImage("tobira/tobira_015.jpg", function (loadedImage) {
        tobiraImage[14] = loadedImage;
      });
      p.loadImage("tobira/tobira_016.jpg", function (loadedImage) {
        tobiraImage[15] = loadedImage;
      });
      p.loadImage("tobira/tobira_017.jpg", function (loadedImage) {
        tobiraImage[16] = loadedImage;
      });
      p.loadImage("tobira/tobira_018.jpg", function (loadedImage) {
        tobiraImage[17] = loadedImage;
      });
      p.loadImage("tobira/tobira_019.jpg", function (loadedImage) {
        tobiraImage[18] = loadedImage;
      });
      p.loadImage("tobira/tobira_020.jpg", function (loadedImage) {
        tobiraImage[19] = loadedImage;
      });
      p.loadImage("tobira/tobira_021.jpg", function (loadedImage) {
        tobiraImage[20] = loadedImage;
      });
      p.loadImage("tobira/tobira_022.jpg", function (loadedImage) {
        tobiraImage[21] = loadedImage;
      });
      p.loadImage("tobira/tobira_023.jpg", function (loadedImage) {
        tobiraImage[22] = loadedImage;
      });
      p.loadImage("tobira/tobira_024.jpg", function (loadedImage) {
        tobiraImage[23] = loadedImage;
      });
      p.loadImage("tobira/tobira_025.jpg", function (loadedImage) {
        tobiraImage[24] = loadedImage;
      });
      p.loadImage("tobira/tobira_026.jpg", function (loadedImage) {
        tobiraImage[25] = loadedImage;
      });
      p.loadImage("tobira/tobira_034.jpg", function (loadedImage) {
        tobiraImage[26] = loadedImage;
      });
      p.loadImage("tobira/tobira_035.jpg", function (loadedImage) {
        tobiraImage[27] = loadedImage;
      });
      p.loadImage("tobira/tobira_038.jpg", function (loadedImage) {
        tobiraImage[28] = loadedImage;
      });
      p.loadImage("tobira/tobira_041.jpg", function (loadedImage) {
        tobiraImage[29] = loadedImage;
      });
      p.loadImage("tobira/tobira_042.jpg", function (loadedImage) {
        tobiraImage[30] = loadedImage;
      });
      p.loadImage("tobira/tobira_045.jpg", function (loadedImage) {
        tobiraImage[31] = loadedImage;
      });
      p.loadImage("tobira/tobira_048.jpg", function (loadedImage) {
        tobiraImage[32] = loadedImage;
      });
      p.loadImage("tobira/tobira_049.jpg", function (loadedImage) {
        tobiraImage[33] = loadedImage;
      });
    }

    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    console.log(p.windowWidth, p.windowHeight);
    canvas.id("canvas");

    // mode settings
    {
      p.blendMode(p.ADD);
      p.rectMode(p.RADIUS);
      p.imageMode(p.CENTER);
    }
  };

  p.draw = function () {
    // p.background(246,3*(p.sin(p.frameCount*0.01)+1));
    p.clear();

    p.blendMode(p.ADD);
    if (detections != undefined) {
      if (detections.multiHandLandmarks != undefined) {
        p.stroke(0, 0, 255);
        p.strokeWeight(3);

        p.calcFingerPos();
        p.interaction();
      }
    }
  };

  p.calcFingerPos = function () {
    for (let i = 0; i < detections.multiHandLandmarks.length; i++) {
      finPosX[i] = [];
      finPosY[i] = [];
      for (let j = 0; j < 5; j++) {
        finPosX[i][j] =
          p.width - detections.multiHandLandmarks[i][4 * (j + 1)].x * p.width;
        finPosY[i][j] =
          detections.multiHandLandmarks[i][4 * (j + 1)].y * p.height;
      }
      thumbRootX[i] = p.width - detections.multiHandLandmarks[i][2].x * p.width;
      thumbRootY[i] = detections.multiHandLandmarks[i][2].y * p.height;
    }
  };

  // flag 1
  {
    p.drawFingerCircle = function (i, fingerNum) {
      p.ellipse(
        (finPosX[i][0] + finPosX[i][fingerNum]) / 2,
        (finPosY[i][0] + finPosY[i][fingerNum]) / 2,
        p.dist(
          finPosX[i][0],
          finPosY[i][0],
          finPosX[i][fingerNum],
          finPosY[i][fingerNum],
        ),
      );
    };

    p.drawFingersCircles = function () {
      for (let i = 0; i < detections.multiHandLandmarks.length; i++) {
        // index finger
        p.fill(30, 30, 130);
        p.drawFingerCircle(i, 1);
        // middle finger
        p.fill(100, 50, 50);
        p.drawFingerCircle(i, 2);
        // ring finger
        p.fill(50, 100, 50);
        p.drawFingerCircle(i, 3);
        // pinky finger
        p.fill(30, 30, 80);
        p.drawFingerCircle(i, 4);
      }
    };

    p.detectFingerTouched = function () {
      if (
        p.dist(finPosX[0][0], finPosY[0][0], finPosX[0][1], finPosY[0][1]) < 8
      ) {
        flag = 2;
      }
    };
  }

  // flag 2
  {
    p.movePicking = function () {
      if (finPosX[0][1]) {
        if (finPosX[1][1]) {
          pickLevel = p.int(
            p.map(
              p.dist(
                finPosX[0][1],
                finPosY[0][1],
                finPosX[1][1],
                finPosY[1][1],
              ),
              60,
              p.width,
              10,
              32,
            ),
          );
        } else {
          pickLevel = p.int(p.map(finPosX[0][1], 0, p.width, 10, 32));
        }
      } else {
        pickLevel = 20;
      }
      if (tobiraImage[pickLevel]) {
        p.image(
          tobiraImage[pickLevel],
          pickImgWid,
          pickImgHei,
          p.width,
          p.height,
        );
      } else {
        p.image(tobiraImage[33], pickImgWid, pickImgHei, p.width, p.height);
        console.log("not found f2's", pickLevel);
      }
    };

    p.checkKeepingOpened = function () {
      if (pickLevel >= 25) {
        if (timeoutId === null) {
          timeoutId = setTimeout(() => {
            flag = 3;
            timeoutId = null; // reset timer
          }, waitMilSec);
        }
      } else {
        if (timeoutId !== null) {
          // if not 2, reset timer
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      }
    };
  }

  // flag 3
  {
    p.interactWithImageHand = function () {
      fingerDist[0] = p.dist(
        thumbRootX[0],
        thumbRootY[0],
        finPosX[0][1],
        finPosY[0][1],
      );
      graspLevel[0] = p.int(p.map(fingerDist[0], graspMin, graspMax, 17, 2));
      if (fingerDist[0] > 300) {
        graspLevel[0] = 0;
      }

      fingerDist[1] = p.dist(
        thumbRootX[1],
        thumbRootY[1],
        finPosX[1][1],
        finPosY[1][1],
      );
      graspLevel[1] = p.int(p.map(fingerDist[1], graspMin, graspMax, 16, 2));
      if (fingerDist[1] > 300) {
        graspLevel[1] = 0;
      }

      if (handImage[graspLevel[0]]) {
        p.image(
          handImage[graspLevel[0]],
          handImgLWid,
          handImgLHei,
          p.width / 2,
          p.height,
        );
      }
      if (handImage[graspLevel[1]]) {
        p.push();
        p.scale(-1, 1);
        p.translate(-handImgRWid, handImgRHei);
        p.image(handImage[graspLevel[1]], 0, 0, p.width / 2, p.height);
        p.pop();
      }
    };

    p.checkKeepingGrasped = function () {
      if (graspLevel[0] <= 2 && graspLevel[1] <= 2) {
        if (timeoutId === null) {
          timeoutID = setTimeout(() => {
            flag = 1;
            timeoutId = null;
          }, waitMilSec);
        } else {
          if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }
        }
      }
    };

    p.interaction = function () {
      if (flag == 1) {
        p.drawFingersCircles();
        p.detectFingerTouched();
      } else if (flag == 2) {
        p.movePicking();
        p.checkKeepingOpened();
      } else if (flag == 3) {
        p.interactWithImageHand();
        p.checkKeepingGrasped();
      }
    };
  }
};

let myp5 = new p5(sketch);
