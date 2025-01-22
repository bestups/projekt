import {
  loadGraphModel
} from "./chunk-6PSVXF3U.js";
import {
  Tensor,
  add,
  argMax,
  backend,
  browser_exports,
  cast,
  dist_exports,
  div,
  engine,
  equal,
  expandDims,
  getBackend,
  greater,
  image,
  matMul,
  mul,
  oneHot,
  pad3d,
  range,
  reshape,
  reverse,
  scalar,
  sigmoid,
  squeeze,
  sub,
  tensor,
  tidy,
  util_exports
} from "./chunk-DZZSFJRK.js";
import "./chunk-4MWRP73S.js";

// node_modules/@tensorflow-models/body-pix/dist/body-pix.esm.js
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  }, f, y, t, g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function toFlattenedOneHotPartMap(partHeatmapScores) {
  var numParts = partHeatmapScores.shape[2];
  var partMapLocations = argMax(partHeatmapScores, 2);
  var partMapFlattened = reshape(partMapLocations, [-1]);
  return oneHot(partMapFlattened, numParts);
}
function clipByMask2d(image2, mask) {
  return mul(image2, mask);
}
function toMaskTensor(segmentScores, threshold) {
  return tidy(function() {
    return cast(greater(segmentScores, scalar(threshold)), "int32");
  });
}
function decodePartSegmentation(segmentationMask, partHeatmapScores) {
  var _a2 = partHeatmapScores.shape, partMapHeight = _a2[0], partMapWidth = _a2[1], numParts = _a2[2];
  return tidy(function() {
    var flattenedMap = toFlattenedOneHotPartMap(partHeatmapScores);
    var partNumbers = expandDims(range(0, numParts, 1, "int32"), 1);
    var partMapFlattened = cast(matMul(flattenedMap, partNumbers), "int32");
    var partMap = reshape(partMapFlattened, [partMapHeight, partMapWidth]);
    var partMapShiftedUpForClipping = add(partMap, scalar(1, "int32"));
    return sub(clipByMask2d(partMapShiftedUpForClipping, segmentationMask), scalar(1, "int32"));
  });
}
function decodeOnlyPartSegmentation(partHeatmapScores) {
  var _a2 = partHeatmapScores.shape, partMapHeight = _a2[0], partMapWidth = _a2[1], numParts = _a2[2];
  return tidy(function() {
    var flattenedMap = toFlattenedOneHotPartMap(partHeatmapScores);
    var partNumbers = expandDims(range(0, numParts, 1, "int32"), 1);
    var partMapFlattened = cast(matMul(flattenedMap, partNumbers), "int32");
    return reshape(partMapFlattened, [partMapHeight, partMapWidth]);
  });
}
var BaseModel = (
  /** @class */
  function() {
    function BaseModel2(model, outputStride) {
      this.model = model;
      this.outputStride = outputStride;
      var inputShape = this.model.inputs[0].shape;
      util_exports.assert(inputShape[1] === -1 && inputShape[2] === -1, function() {
        return "Input shape [".concat(inputShape[1], ", ").concat(inputShape[2], "] ") + "must both be equal to or -1";
      });
    }
    BaseModel2.prototype.predict = function(input) {
      var _this = this;
      return tidy(function() {
        var asFloat = _this.preprocessInput(cast(input, "float32"));
        var asBatch = expandDims(asFloat, 0);
        var results = _this.model.predict(asBatch);
        var results3d = results.map(function(y) {
          return squeeze(y, [0]);
        });
        var namedResults = _this.nameOutputResults(results3d);
        return {
          heatmapScores: sigmoid(namedResults.heatmap),
          offsets: namedResults.offsets,
          displacementFwd: namedResults.displacementFwd,
          displacementBwd: namedResults.displacementBwd,
          segmentation: namedResults.segmentation,
          partHeatmaps: namedResults.partHeatmaps,
          longOffsets: namedResults.longOffsets,
          partOffsets: namedResults.partOffsets
        };
      });
    };
    BaseModel2.prototype.dispose = function() {
      this.model.dispose();
    };
    return BaseModel2;
  }()
);
var MobileNet = (
  /** @class */
  function(_super) {
    __extends(MobileNet2, _super);
    function MobileNet2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileNet2.prototype.preprocessInput = function(input) {
      return tidy(function() {
        return sub(div(input, 127.5), 1);
      });
    };
    MobileNet2.prototype.nameOutputResults = function(results) {
      var offsets = results[0], segmentation = results[1], partHeatmaps = results[2], longOffsets = results[3], heatmap = results[4], displacementFwd = results[5], displacementBwd = results[6], partOffsets = results[7];
      return {
        offsets,
        segmentation,
        partHeatmaps,
        longOffsets,
        heatmap,
        displacementFwd,
        displacementBwd,
        partOffsets
      };
    };
    return MobileNet2;
  }(BaseModel)
);
var PART_NAMES = ["nose", "leftEye", "rightEye", "leftEar", "rightEar", "leftShoulder", "rightShoulder", "leftElbow", "rightElbow", "leftWrist", "rightWrist", "leftHip", "rightHip", "leftKnee", "rightKnee", "leftAnkle", "rightAnkle"];
var NUM_KEYPOINTS = PART_NAMES.length;
var PART_IDS = PART_NAMES.reduce(function(result, jointName, i) {
  result[jointName] = i;
  return result;
}, {});
var CONNECTED_PART_NAMES = [["leftHip", "leftShoulder"], ["leftElbow", "leftShoulder"], ["leftElbow", "leftWrist"], ["leftHip", "leftKnee"], ["leftKnee", "leftAnkle"], ["rightHip", "rightShoulder"], ["rightElbow", "rightShoulder"], ["rightElbow", "rightWrist"], ["rightHip", "rightKnee"], ["rightKnee", "rightAnkle"], ["leftShoulder", "rightShoulder"], ["leftHip", "rightHip"]];
var POSE_CHAIN = [["nose", "leftEye"], ["leftEye", "leftEar"], ["nose", "rightEye"], ["rightEye", "rightEar"], ["nose", "leftShoulder"], ["leftShoulder", "leftElbow"], ["leftElbow", "leftWrist"], ["leftShoulder", "leftHip"], ["leftHip", "leftKnee"], ["leftKnee", "leftAnkle"], ["nose", "rightShoulder"], ["rightShoulder", "rightElbow"], ["rightElbow", "rightWrist"], ["rightShoulder", "rightHip"], ["rightHip", "rightKnee"], ["rightKnee", "rightAnkle"]];
CONNECTED_PART_NAMES.map(function(_a2) {
  var jointNameA = _a2[0], jointNameB = _a2[1];
  return [PART_IDS[jointNameA], PART_IDS[jointNameB]];
});
function getScale(_a2, _b, padding) {
  var height = _a2[0], width = _a2[1];
  var inputResolutionY = _b[0], inputResolutionX = _b[1];
  var padT = padding.top, padB = padding.bottom, padL = padding.left, padR = padding.right;
  var scaleY = inputResolutionY / (padT + padB + height);
  var scaleX = inputResolutionX / (padL + padR + width);
  return [scaleX, scaleY];
}
function getOffsetPoint(y, x, keypoint, offsets) {
  return {
    y: offsets.get(y, x, keypoint),
    x: offsets.get(y, x, keypoint + NUM_KEYPOINTS)
  };
}
function getImageCoords(part, outputStride, offsets) {
  var heatmapY = part.heatmapY, heatmapX = part.heatmapX, keypoint = part.id;
  var _a2 = getOffsetPoint(heatmapY, heatmapX, keypoint, offsets), y = _a2.y, x = _a2.x;
  return {
    x: part.heatmapX * outputStride + x,
    y: part.heatmapY * outputStride + y
  };
}
function clamp(a, min, max) {
  if (a < min) {
    return min;
  }
  if (a > max) {
    return max;
  }
  return a;
}
function squaredDistance(y1, x1, y2, x2) {
  var dy = y2 - y1;
  var dx = x2 - x1;
  return dy * dy + dx * dx;
}
function addVectors(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function computeDistance(embedding, pose, minPartScore) {
  if (minPartScore === void 0) {
    minPartScore = 0.3;
  }
  var distance = 0;
  var numKpt = 0;
  for (var p = 0; p < embedding.length; p++) {
    if (pose.keypoints[p].score > minPartScore) {
      numKpt += 1;
      distance += Math.pow(embedding[p].x - pose.keypoints[p].position.x, 2) + Math.pow(embedding[p].y - pose.keypoints[p].position.y, 2);
    }
  }
  if (numKpt === 0) {
    distance = Infinity;
  } else {
    distance = distance / numKpt;
  }
  return distance;
}
function convertToPositionInOuput(position, _a2, _b, stride) {
  var padT = _a2[0], padL = _a2[1];
  var scaleX = _b[0], scaleY = _b[1];
  var y = Math.round(((padT + position.y + 1) * scaleY - 1) / stride);
  var x = Math.round(((padL + position.x + 1) * scaleX - 1) / stride);
  return {
    x,
    y
  };
}
function getEmbedding(location, keypointIndex, convertToPosition, outputResolutionX, longOffsets, refineSteps, _a2) {
  var height = _a2[0], width = _a2[1];
  var newLocation = convertToPosition(location);
  var nn = newLocation.y * outputResolutionX + newLocation.x;
  var dy = longOffsets[NUM_KEYPOINTS * (2 * nn) + keypointIndex];
  var dx = longOffsets[NUM_KEYPOINTS * (2 * nn + 1) + keypointIndex];
  var y = location.y + dy;
  var x = location.x + dx;
  for (var t = 0; t < refineSteps; t++) {
    y = Math.min(y, height - 1);
    x = Math.min(x, width - 1);
    var newPos = convertToPosition({
      x,
      y
    });
    var nn_1 = newPos.y * outputResolutionX + newPos.x;
    dy = longOffsets[NUM_KEYPOINTS * (2 * nn_1) + keypointIndex];
    dx = longOffsets[NUM_KEYPOINTS * (2 * nn_1 + 1) + keypointIndex];
    y = y + dy;
    x = x + dx;
  }
  return {
    x,
    y
  };
}
function matchEmbeddingToInstance(location, longOffsets, poses, numKptForMatching, _a2, _b, outputResolutionX, _c, stride, refineSteps) {
  var padT = _a2[0], padL = _a2[1];
  var scaleX = _b[0], scaleY = _b[1];
  var height = _c[0], width = _c[1];
  var embed = [];
  var convertToPosition = function(pair) {
    return convertToPositionInOuput(pair, [padT, padL], [scaleX, scaleY], stride);
  };
  for (var keypointsIndex = 0; keypointsIndex < numKptForMatching; keypointsIndex++) {
    var embedding = getEmbedding(location, keypointsIndex, convertToPosition, outputResolutionX, longOffsets, refineSteps, [height, width]);
    embed.push(embedding);
  }
  var kMin = -1;
  var kMinDist = Infinity;
  for (var k = 0; k < poses.length; k++) {
    var dist = computeDistance(embed, poses[k]);
    if (dist < kMinDist) {
      kMin = k;
      kMinDist = dist;
    }
  }
  return kMin;
}
function getOutputResolution(_a2, stride) {
  var inputResolutionY = _a2[0], inputResolutionX = _a2[1];
  var outputResolutionX = Math.round((inputResolutionX - 1) / stride + 1);
  var outputResolutionY = Math.round((inputResolutionY - 1) / stride + 1);
  return [outputResolutionX, outputResolutionY];
}
function decodeMultipleMasksCPU(segmentation, longOffsets, posesAboveScore, height, width, stride, _a2, padding, refineSteps, numKptForMatching) {
  var inHeight = _a2[0], inWidth = _a2[1];
  if (numKptForMatching === void 0) {
    numKptForMatching = 5;
  }
  var dataArrays = posesAboveScore.map(function(x) {
    return new Uint8Array(height * width).fill(0);
  });
  var padT = padding.top, padL = padding.left;
  var _b = getScale([height, width], [inHeight, inWidth], padding), scaleX = _b[0], scaleY = _b[1];
  var outputResolutionX = getOutputResolution([inHeight, inWidth], stride)[0];
  for (var i = 0; i < height; i += 1) {
    for (var j = 0; j < width; j += 1) {
      var n = i * width + j;
      var prob = segmentation[n];
      if (prob === 1) {
        var kMin = matchEmbeddingToInstance({
          x: j,
          y: i
        }, longOffsets, posesAboveScore, numKptForMatching, [padT, padL], [scaleX, scaleY], outputResolutionX, [height, width], stride, refineSteps);
        if (kMin >= 0) {
          dataArrays[kMin][n] = 1;
        }
      }
    }
  }
  return dataArrays;
}
function decodeMultiplePartMasksCPU(segmentation, longOffsets, partSegmentaion, posesAboveScore, height, width, stride, _a2, padding, refineSteps, numKptForMatching) {
  var inHeight = _a2[0], inWidth = _a2[1];
  if (numKptForMatching === void 0) {
    numKptForMatching = 5;
  }
  var dataArrays = posesAboveScore.map(function(x) {
    return new Int32Array(height * width).fill(-1);
  });
  var padT = padding.top, padL = padding.left;
  var _b = getScale([height, width], [inHeight, inWidth], padding), scaleX = _b[0], scaleY = _b[1];
  var outputResolutionX = getOutputResolution([inHeight, inWidth], stride)[0];
  for (var i = 0; i < height; i += 1) {
    for (var j = 0; j < width; j += 1) {
      var n = i * width + j;
      var prob = segmentation[n];
      if (prob === 1) {
        var kMin = matchEmbeddingToInstance({
          x: j,
          y: i
        }, longOffsets, posesAboveScore, numKptForMatching, [padT, padL], [scaleX, scaleY], outputResolutionX, [height, width], stride, refineSteps);
        if (kMin >= 0) {
          dataArrays[kMin][n] = partSegmentaion[n];
        }
      }
    }
  }
  return dataArrays;
}
function decodeMultipleMasksWebGl(segmentation, longOffsets, posesAboveScore, height, width, stride, _a2, padding, refineSteps, minKptScore, maxNumPeople) {
  var inHeight = _a2[0], inWidth = _a2[1];
  var _b = segmentation.shape, origHeight = _b[0], origWidth = _b[1];
  var _c = longOffsets.shape.slice(0, 2), outHeight = _c[0], outWidth = _c[1];
  var shapedLongOffsets = reshape(longOffsets, [outHeight, outWidth, 2, NUM_KEYPOINTS]);
  var poseVals = new Float32Array(maxNumPeople * NUM_KEYPOINTS * 3).fill(0);
  for (var i = 0; i < posesAboveScore.length; i++) {
    var poseOffset = i * NUM_KEYPOINTS * 3;
    var pose = posesAboveScore[i];
    for (var kp = 0; kp < NUM_KEYPOINTS; kp++) {
      var keypoint = pose.keypoints[kp];
      var offset = poseOffset + kp * 3;
      poseVals[offset] = keypoint.score;
      poseVals[offset + 1] = keypoint.position.y;
      poseVals[offset + 2] = keypoint.position.x;
    }
  }
  var _d = getScale([height, width], [inHeight, inWidth], padding), scaleX = _d[0], scaleY = _d[1];
  var posesTensor = tensor(poseVals, [maxNumPeople, NUM_KEYPOINTS, 3]);
  var padT = padding.top, padL = padding.left;
  var program = {
    variableNames: ["segmentation", "longOffsets", "poses"],
    outputShape: [origHeight, origWidth],
    userCode: "\n    int convertToPositionInOutput(int pos, int pad, float scale, int stride) {\n      return round(((float(pos + pad) + 1.0) * scale - 1.0) / float(stride));\n    }\n\n    float convertToPositionInOutputFloat(\n        int pos, int pad, float scale, int stride) {\n      return ((float(pos + pad) + 1.0) * scale - 1.0) / float(stride);\n    }\n\n    float dist(float x1, float y1, float x2, float y2) {\n      return pow(x1 - x2, 2.0) + pow(y1 - y2, 2.0);\n    }\n\n    float sampleLongOffsets(float h, float w, int d, int k) {\n      float fh = fract(h);\n      float fw = fract(w);\n      int clH = int(ceil(h));\n      int clW = int(ceil(w));\n      int flH = int(floor(h));\n      int flW = int(floor(w));\n      float o11 = getLongOffsets(flH, flW, d, k);\n      float o12 = getLongOffsets(flH, clW, d, k);\n      float o21 = getLongOffsets(clH, flW, d, k);\n      float o22 = getLongOffsets(clH, clW, d, k);\n      float o1 = mix(o11, o12, fw);\n      float o2 = mix(o21, o22, fw);\n      return mix(o1, o2, fh);\n    }\n\n    int findNearestPose(int h, int w) {\n      float prob = getSegmentation(h, w);\n      if (prob < 1.0) {\n        return -1;\n      }\n\n      // Done(Tyler): convert from output space h/w to strided space.\n      float stridedH = convertToPositionInOutputFloat(\n        h, ".concat(padT, ", ").concat(scaleY, ", ").concat(stride, ");\n      float stridedW = convertToPositionInOutputFloat(\n        w, ").concat(padL, ", ").concat(scaleX, ", ").concat(stride, ");\n\n      float minDist = 1000000.0;\n      int iMin = -1;\n      for (int i = 0; i < ").concat(maxNumPeople, "; i++) {\n        float curDistSum = 0.0;\n        int numKpt = 0;\n        for (int k = 0; k < ").concat(NUM_KEYPOINTS, "; k++) {\n          float dy = sampleLongOffsets(stridedH, stridedW, 0, k);\n          float dx = sampleLongOffsets(stridedH, stridedW, 1, k);\n\n          float y = float(h) + dy;\n          float x = float(w) + dx;\n\n          for (int s = 0; s < ").concat(refineSteps, "; s++) {\n            int yRounded = round(min(y, float(").concat(height - 1, ")));\n            int xRounded = round(min(x, float(").concat(width - 1, ")));\n\n            float yStrided = convertToPositionInOutputFloat(\n              yRounded, ").concat(padT, ", ").concat(scaleY, ", ").concat(stride, ");\n            float xStrided = convertToPositionInOutputFloat(\n              xRounded, ").concat(padL, ", ").concat(scaleX, ", ").concat(stride, ");\n\n            float dy = sampleLongOffsets(yStrided, xStrided, 0, k);\n            float dx = sampleLongOffsets(yStrided, xStrided, 1, k);\n\n            y = y + dy;\n            x = x + dx;\n          }\n\n          float poseScore = getPoses(i, k, 0);\n          float poseY = getPoses(i, k, 1);\n          float poseX = getPoses(i, k, 2);\n          if (poseScore > ").concat(minKptScore, ") {\n            numKpt = numKpt + 1;\n            curDistSum = curDistSum + dist(x, y, poseX, poseY);\n          }\n        }\n        if (numKpt > 0 && curDistSum / float(numKpt) < minDist) {\n          minDist = curDistSum / float(numKpt);\n          iMin = i;\n        }\n      }\n      return iMin;\n    }\n\n    void main() {\n        ivec2 coords = getOutputCoords();\n        int nearestPose = findNearestPose(coords[0], coords[1]);\n        setOutput(float(nearestPose));\n      }\n  ")
  };
  var webglBackend = backend();
  return webglBackend.compileAndRun(program, [segmentation, shapedLongOffsets, posesTensor]);
}
function toPersonKSegmentation(segmentation, k) {
  return tidy(function() {
    return cast(equal(segmentation, scalar(k)), "int32");
  });
}
function toPersonKPartSegmentation(segmentation, bodyParts, k) {
  return tidy(function() {
    return sub(mul(cast(equal(segmentation, scalar(k)), "int32"), add(bodyParts, 1)), 1);
  });
}
function isWebGlBackend() {
  return getBackend() === "webgl";
}
function decodePersonInstanceMasks(segmentation, longOffsets, poses, height, width, stride, _a2, padding, minPoseScore, refineSteps, minKeypointScore, maxNumPeople) {
  var inHeight = _a2[0], inWidth = _a2[1];
  if (minPoseScore === void 0) {
    minPoseScore = 0.2;
  }
  if (refineSteps === void 0) {
    refineSteps = 8;
  }
  if (minKeypointScore === void 0) {
    minKeypointScore = 0.3;
  }
  if (maxNumPeople === void 0) {
    maxNumPeople = 10;
  }
  return __awaiter(this, void 0, void 0, function() {
    var posesAboveScore, personSegmentationsData, personSegmentations, segmentationsData, longOffsetsData;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          posesAboveScore = poses.filter(function(pose) {
            return pose.score >= minPoseScore;
          });
          if (!isWebGlBackend()) return [3, 2];
          personSegmentations = tidy(function() {
            var masksTensorInfo = decodeMultipleMasksWebGl(segmentation, longOffsets, posesAboveScore, height, width, stride, [inHeight, inWidth], padding, refineSteps, minKeypointScore, maxNumPeople);
            var masksTensor = engine().makeTensorFromDataId(masksTensorInfo.dataId, masksTensorInfo.shape, masksTensorInfo.dtype);
            return posesAboveScore.map(function(_, k) {
              return toPersonKSegmentation(masksTensor, k);
            });
          });
          return [4, Promise.all(personSegmentations.map(function(mask) {
            return mask.data();
          }))];
        case 1:
          personSegmentationsData = _b.sent();
          personSegmentations.forEach(function(x) {
            return x.dispose();
          });
          return [3, 5];
        case 2:
          return [4, segmentation.data()];
        case 3:
          segmentationsData = _b.sent();
          return [4, longOffsets.data()];
        case 4:
          longOffsetsData = _b.sent();
          personSegmentationsData = decodeMultipleMasksCPU(segmentationsData, longOffsetsData, posesAboveScore, height, width, stride, [inHeight, inWidth], padding, refineSteps);
          _b.label = 5;
        case 5:
          return [2, personSegmentationsData.map(function(data, i) {
            return {
              data,
              pose: posesAboveScore[i],
              width,
              height
            };
          })];
      }
    });
  });
}
function decodePersonInstancePartMasks(segmentation, longOffsets, partSegmentation, poses, height, width, stride, _a2, padding, minPoseScore, refineSteps, minKeypointScore, maxNumPeople) {
  var inHeight = _a2[0], inWidth = _a2[1];
  if (minPoseScore === void 0) {
    minPoseScore = 0.2;
  }
  if (refineSteps === void 0) {
    refineSteps = 8;
  }
  if (minKeypointScore === void 0) {
    minKeypointScore = 0.3;
  }
  if (maxNumPeople === void 0) {
    maxNumPeople = 10;
  }
  return __awaiter(this, void 0, void 0, function() {
    var posesAboveScore, partSegmentationsByPersonData, partSegmentations, segmentationsData, longOffsetsData, partSegmentaionData;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          posesAboveScore = poses.filter(function(pose) {
            return pose.score >= minPoseScore;
          });
          if (!isWebGlBackend()) return [3, 2];
          partSegmentations = tidy(function() {
            var masksTensorInfo = decodeMultipleMasksWebGl(segmentation, longOffsets, posesAboveScore, height, width, stride, [inHeight, inWidth], padding, refineSteps, minKeypointScore, maxNumPeople);
            var masksTensor = engine().makeTensorFromDataId(masksTensorInfo.dataId, masksTensorInfo.shape, masksTensorInfo.dtype);
            return posesAboveScore.map(function(_, k) {
              return toPersonKPartSegmentation(masksTensor, partSegmentation, k);
            });
          });
          return [4, Promise.all(partSegmentations.map(function(x) {
            return x.data();
          }))];
        case 1:
          partSegmentationsByPersonData = _b.sent();
          partSegmentations.forEach(function(x) {
            return x.dispose();
          });
          return [3, 6];
        case 2:
          return [4, segmentation.data()];
        case 3:
          segmentationsData = _b.sent();
          return [4, longOffsets.data()];
        case 4:
          longOffsetsData = _b.sent();
          return [4, partSegmentation.data()];
        case 5:
          partSegmentaionData = _b.sent();
          partSegmentationsByPersonData = decodeMultiplePartMasksCPU(segmentationsData, longOffsetsData, partSegmentaionData, posesAboveScore, height, width, stride, [inHeight, inWidth], padding, refineSteps);
          _b.label = 6;
        case 6:
          return [2, partSegmentationsByPersonData.map(function(data, k) {
            return {
              pose: posesAboveScore[k],
              data,
              height,
              width
            };
          })];
      }
    });
  });
}
function half(k) {
  return Math.floor(k / 2);
}
var MaxHeap = (
  /** @class */
  function() {
    function MaxHeap2(maxSize, getElementValue) {
      this.priorityQueue = new Array(maxSize);
      this.numberOfElements = -1;
      this.getElementValue = getElementValue;
    }
    MaxHeap2.prototype.enqueue = function(x) {
      this.priorityQueue[++this.numberOfElements] = x;
      this.swim(this.numberOfElements);
    };
    MaxHeap2.prototype.dequeue = function() {
      var max = this.priorityQueue[0];
      this.exchange(0, this.numberOfElements--);
      this.sink(0);
      this.priorityQueue[this.numberOfElements + 1] = null;
      return max;
    };
    MaxHeap2.prototype.empty = function() {
      return this.numberOfElements === -1;
    };
    MaxHeap2.prototype.size = function() {
      return this.numberOfElements + 1;
    };
    MaxHeap2.prototype.all = function() {
      return this.priorityQueue.slice(0, this.numberOfElements + 1);
    };
    MaxHeap2.prototype.max = function() {
      return this.priorityQueue[0];
    };
    MaxHeap2.prototype.swim = function(k) {
      while (k > 0 && this.less(half(k), k)) {
        this.exchange(k, half(k));
        k = half(k);
      }
    };
    MaxHeap2.prototype.sink = function(k) {
      while (2 * k <= this.numberOfElements) {
        var j = 2 * k;
        if (j < this.numberOfElements && this.less(j, j + 1)) {
          j++;
        }
        if (!this.less(k, j)) {
          break;
        }
        this.exchange(k, j);
        k = j;
      }
    };
    MaxHeap2.prototype.getValueAt = function(i) {
      return this.getElementValue(this.priorityQueue[i]);
    };
    MaxHeap2.prototype.less = function(i, j) {
      return this.getValueAt(i) < this.getValueAt(j);
    };
    MaxHeap2.prototype.exchange = function(i, j) {
      var t = this.priorityQueue[i];
      this.priorityQueue[i] = this.priorityQueue[j];
      this.priorityQueue[j] = t;
    };
    return MaxHeap2;
  }()
);
function scoreIsMaximumInLocalWindow(keypointId, score, heatmapY, heatmapX, localMaximumRadius, scores) {
  var _a2 = scores.shape, height = _a2[0], width = _a2[1];
  var localMaximum = true;
  var yStart = Math.max(heatmapY - localMaximumRadius, 0);
  var yEnd = Math.min(heatmapY + localMaximumRadius + 1, height);
  for (var yCurrent = yStart; yCurrent < yEnd; ++yCurrent) {
    var xStart = Math.max(heatmapX - localMaximumRadius, 0);
    var xEnd = Math.min(heatmapX + localMaximumRadius + 1, width);
    for (var xCurrent = xStart; xCurrent < xEnd; ++xCurrent) {
      if (scores.get(yCurrent, xCurrent, keypointId) > score) {
        localMaximum = false;
        break;
      }
    }
    if (!localMaximum) {
      break;
    }
  }
  return localMaximum;
}
function buildPartWithScoreQueue(scoreThreshold, localMaximumRadius, scores) {
  var _a2 = scores.shape, height = _a2[0], width = _a2[1], numKeypoints = _a2[2];
  var queue = new MaxHeap(height * width * numKeypoints, function(_a3) {
    var score2 = _a3.score;
    return score2;
  });
  for (var heatmapY = 0; heatmapY < height; ++heatmapY) {
    for (var heatmapX = 0; heatmapX < width; ++heatmapX) {
      for (var keypointId = 0; keypointId < numKeypoints; ++keypointId) {
        var score = scores.get(heatmapY, heatmapX, keypointId);
        if (score < scoreThreshold) {
          continue;
        }
        if (scoreIsMaximumInLocalWindow(keypointId, score, heatmapY, heatmapX, localMaximumRadius, scores)) {
          queue.enqueue({
            score,
            part: {
              heatmapY,
              heatmapX,
              id: keypointId
            }
          });
        }
      }
    }
  }
  return queue;
}
var parentChildrenTuples = POSE_CHAIN.map(function(_a2) {
  var parentJoinName = _a2[0], childJoinName = _a2[1];
  return [PART_IDS[parentJoinName], PART_IDS[childJoinName]];
});
var parentToChildEdges = parentChildrenTuples.map(function(_a2) {
  var childJointId = _a2[1];
  return childJointId;
});
var childToParentEdges = parentChildrenTuples.map(function(_a2) {
  var parentJointId = _a2[0];
  return parentJointId;
});
function getDisplacement(edgeId, point, displacements) {
  var numEdges = displacements.shape[2] / 2;
  return {
    y: displacements.get(point.y, point.x, edgeId),
    x: displacements.get(point.y, point.x, numEdges + edgeId)
  };
}
function getStridedIndexNearPoint(point, outputStride, height, width) {
  return {
    y: clamp(Math.round(point.y / outputStride), 0, height - 1),
    x: clamp(Math.round(point.x / outputStride), 0, width - 1)
  };
}
function traverseToTargetKeypoint(edgeId, sourceKeypoint, targetKeypointId, scoresBuffer, offsets, outputStride, displacements, offsetRefineStep) {
  if (offsetRefineStep === void 0) {
    offsetRefineStep = 2;
  }
  var _a2 = scoresBuffer.shape, height = _a2[0], width = _a2[1];
  var sourceKeypointIndices = getStridedIndexNearPoint(sourceKeypoint.position, outputStride, height, width);
  var displacement = getDisplacement(edgeId, sourceKeypointIndices, displacements);
  var displacedPoint = addVectors(sourceKeypoint.position, displacement);
  var targetKeypoint = displacedPoint;
  for (var i = 0; i < offsetRefineStep; i++) {
    var targetKeypointIndices = getStridedIndexNearPoint(targetKeypoint, outputStride, height, width);
    var offsetPoint = getOffsetPoint(targetKeypointIndices.y, targetKeypointIndices.x, targetKeypointId, offsets);
    targetKeypoint = addVectors({
      x: targetKeypointIndices.x * outputStride,
      y: targetKeypointIndices.y * outputStride
    }, {
      x: offsetPoint.x,
      y: offsetPoint.y
    });
  }
  var targetKeyPointIndices = getStridedIndexNearPoint(targetKeypoint, outputStride, height, width);
  var score = scoresBuffer.get(targetKeyPointIndices.y, targetKeyPointIndices.x, targetKeypointId);
  return {
    position: targetKeypoint,
    part: PART_NAMES[targetKeypointId],
    score
  };
}
function decodePose(root, scores, offsets, outputStride, displacementsFwd, displacementsBwd) {
  var numParts = scores.shape[2];
  var numEdges = parentToChildEdges.length;
  var instanceKeypoints = new Array(numParts);
  var rootPart = root.part, rootScore = root.score;
  var rootPoint = getImageCoords(rootPart, outputStride, offsets);
  instanceKeypoints[rootPart.id] = {
    score: rootScore,
    part: PART_NAMES[rootPart.id],
    position: rootPoint
  };
  for (var edge = numEdges - 1; edge >= 0; --edge) {
    var sourceKeypointId = parentToChildEdges[edge];
    var targetKeypointId = childToParentEdges[edge];
    if (instanceKeypoints[sourceKeypointId] && !instanceKeypoints[targetKeypointId]) {
      instanceKeypoints[targetKeypointId] = traverseToTargetKeypoint(edge, instanceKeypoints[sourceKeypointId], targetKeypointId, scores, offsets, outputStride, displacementsBwd);
    }
  }
  for (var edge = 0; edge < numEdges; ++edge) {
    var sourceKeypointId = childToParentEdges[edge];
    var targetKeypointId = parentToChildEdges[edge];
    if (instanceKeypoints[sourceKeypointId] && !instanceKeypoints[targetKeypointId]) {
      instanceKeypoints[targetKeypointId] = traverseToTargetKeypoint(edge, instanceKeypoints[sourceKeypointId], targetKeypointId, scores, offsets, outputStride, displacementsFwd);
    }
  }
  return instanceKeypoints;
}
function withinNmsRadiusOfCorrespondingPoint(poses, squaredNmsRadius, _a2, keypointId) {
  var x = _a2.x, y = _a2.y;
  return poses.some(function(_a3) {
    var keypoints = _a3.keypoints;
    var correspondingKeypoint = keypoints[keypointId].position;
    return squaredDistance(y, x, correspondingKeypoint.y, correspondingKeypoint.x) <= squaredNmsRadius;
  });
}
function getInstanceScore(existingPoses, squaredNmsRadius, instanceKeypoints) {
  var notOverlappedKeypointScores = instanceKeypoints.reduce(function(result, _a2, keypointId) {
    var position = _a2.position, score = _a2.score;
    if (!withinNmsRadiusOfCorrespondingPoint(existingPoses, squaredNmsRadius, position, keypointId)) {
      result += score;
    }
    return result;
  }, 0);
  return notOverlappedKeypointScores /= instanceKeypoints.length;
}
var kLocalMaximumRadius = 1;
function decodeMultiplePoses(scoresBuffer, offsetsBuffer, displacementsFwdBuffer, displacementsBwdBuffer, outputStride, maxPoseDetections, scoreThreshold, nmsRadius) {
  if (scoreThreshold === void 0) {
    scoreThreshold = 0.5;
  }
  if (nmsRadius === void 0) {
    nmsRadius = 20;
  }
  var poses = [];
  var queue = buildPartWithScoreQueue(scoreThreshold, kLocalMaximumRadius, scoresBuffer);
  var squaredNmsRadius = nmsRadius * nmsRadius;
  while (poses.length < maxPoseDetections && !queue.empty()) {
    var root = queue.dequeue();
    var rootImageCoords = getImageCoords(root.part, outputStride, offsetsBuffer);
    if (withinNmsRadiusOfCorrespondingPoint(poses, squaredNmsRadius, rootImageCoords, root.part.id)) {
      continue;
    }
    var keypoints = decodePose(root, scoresBuffer, offsetsBuffer, outputStride, displacementsFwdBuffer, displacementsBwdBuffer);
    var score = getInstanceScore(poses, squaredNmsRadius, keypoints);
    poses.push({
      keypoints,
      score
    });
  }
  return poses;
}
var imageNetMean = [-123.15, -115.9, -103.06];
var ResNet = (
  /** @class */
  function(_super) {
    __extends(ResNet2, _super);
    function ResNet2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ResNet2.prototype.preprocessInput = function(input) {
      return add(input, imageNetMean);
    };
    ResNet2.prototype.nameOutputResults = function(results) {
      var displacementBwd = results[0], displacementFwd = results[1], heatmap = results[2], longOffsets = results[3], offsets = results[4], partHeatmaps = results[5], segmentation = results[6], partOffsets = results[7];
      return {
        offsets,
        segmentation,
        partHeatmaps,
        longOffsets,
        heatmap,
        displacementFwd,
        displacementBwd,
        partOffsets
      };
    };
    return ResNet2;
  }(BaseModel)
);
var RESNET50_BASE_URL = "https://storage.googleapis.com/tfjs-models/savedmodel/bodypix/resnet50/";
var MOBILENET_BASE_URL = "https://storage.googleapis.com/tfjs-models/savedmodel/bodypix/mobilenet/";
function resNet50SavedModel(stride, quantBytes) {
  var graphJson = "model-stride".concat(stride, ".json");
  if (quantBytes === 4) {
    return RESNET50_BASE_URL + "float/" + graphJson;
  } else {
    return RESNET50_BASE_URL + "quant".concat(quantBytes, "/") + graphJson;
  }
}
function mobileNetSavedModel(stride, multiplier, quantBytes) {
  var toStr = {
    1: "100",
    0.75: "075",
    0.5: "050"
  };
  var graphJson = "model-stride".concat(stride, ".json");
  if (quantBytes === 4) {
    return MOBILENET_BASE_URL + "float/".concat(toStr[multiplier], "/") + graphJson;
  } else {
    return MOBILENET_BASE_URL + "quant".concat(quantBytes, "/").concat(toStr[multiplier], "/") + graphJson;
  }
}
var _a;
function getSizeFromImageLikeElement(input) {
  if ("offsetHeight" in input && input.offsetHeight !== 0 && "offsetWidth" in input && input.offsetWidth !== 0) {
    return [input.offsetHeight, input.offsetWidth];
  } else if (input.height != null && input.width != null) {
    return [input.height, input.width];
  } else {
    throw new Error("HTMLImageElement must have height and width attributes set.");
  }
}
function getSizeFromVideoElement(input) {
  if (input.hasAttribute("height") && input.hasAttribute("width")) {
    return [input.height, input.width];
  } else {
    return [input.videoHeight, input.videoWidth];
  }
}
function getInputSize(input) {
  if (typeof HTMLCanvasElement !== "undefined" && input instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && input instanceof OffscreenCanvas || typeof HTMLImageElement !== "undefined" && input instanceof HTMLImageElement) {
    return getSizeFromImageLikeElement(input);
  } else if (typeof ImageData !== "undefined" && input instanceof ImageData) {
    return [input.height, input.width];
  } else if (typeof HTMLVideoElement !== "undefined" && input instanceof HTMLVideoElement) {
    return getSizeFromVideoElement(input);
  } else if (input instanceof Tensor) {
    return [input.shape[0], input.shape[1]];
  } else {
    throw new Error("error: Unknown input type: ".concat(input, "."));
  }
}
function isValidInputResolution(resolution, outputStride) {
  return (resolution - 1) % outputStride === 0;
}
function toValidInputResolution(inputResolution, outputStride) {
  if (isValidInputResolution(inputResolution, outputStride)) {
    return inputResolution;
  }
  return Math.floor(inputResolution / outputStride) * outputStride + 1;
}
var INTERNAL_RESOLUTION_STRING_OPTIONS = {
  low: "low",
  medium: "medium",
  high: "high",
  full: "full"
};
var INTERNAL_RESOLUTION_PERCENTAGES = (_a = {}, _a[INTERNAL_RESOLUTION_STRING_OPTIONS.low] = 0.25, _a[INTERNAL_RESOLUTION_STRING_OPTIONS.medium] = 0.5, _a[INTERNAL_RESOLUTION_STRING_OPTIONS.high] = 0.75, _a[INTERNAL_RESOLUTION_STRING_OPTIONS.full] = 1, _a);
var MIN_INTERNAL_RESOLUTION = 0.1;
var MAX_INTERNAL_RESOLUTION = 2;
function toInternalResolutionPercentage(internalResolution) {
  if (typeof internalResolution === "string") {
    var result = INTERNAL_RESOLUTION_PERCENTAGES[internalResolution];
    util_exports.assert(typeof result === "number", function() {
      return "string value of inputResolution must be one of ".concat(Object.values(INTERNAL_RESOLUTION_STRING_OPTIONS).join(","), " but was ").concat(internalResolution, ".");
    });
    return result;
  } else {
    util_exports.assert(typeof internalResolution === "number" && internalResolution <= MAX_INTERNAL_RESOLUTION && internalResolution >= MIN_INTERNAL_RESOLUTION, function() {
      return "inputResolution must be a string or number between ".concat(MIN_INTERNAL_RESOLUTION, " and ").concat(MAX_INTERNAL_RESOLUTION, ", but ") + "was ".concat(internalResolution);
    });
    return internalResolution;
  }
}
function toInputResolutionHeightAndWidth(internalResolution, outputStride, _a2) {
  var inputHeight = _a2[0], inputWidth = _a2[1];
  var internalResolutionPercentage = toInternalResolutionPercentage(internalResolution);
  return [toValidInputResolution(inputHeight * internalResolutionPercentage, outputStride), toValidInputResolution(inputWidth * internalResolutionPercentage, outputStride)];
}
function toInputTensor(input) {
  return input instanceof Tensor ? input : browser_exports.fromPixels(input);
}
function resizeAndPadTo(imageTensor, _a2, flipHorizontal) {
  var targetH = _a2[0], targetW = _a2[1];
  if (flipHorizontal === void 0) {
    flipHorizontal = false;
  }
  var _b = imageTensor.shape, height = _b[0], width = _b[1];
  var targetAspect = targetW / targetH;
  var aspect = width / height;
  var resizeW;
  var resizeH;
  var padL;
  var padR;
  var padT;
  var padB;
  if (aspect > targetAspect) {
    resizeW = targetW;
    resizeH = Math.ceil(resizeW / aspect);
    var padHeight = targetH - resizeH;
    padL = 0;
    padR = 0;
    padT = Math.floor(padHeight / 2);
    padB = targetH - (resizeH + padT);
  } else {
    resizeH = targetH;
    resizeW = Math.ceil(targetH * aspect);
    var padWidth = targetW - resizeW;
    padL = Math.floor(padWidth / 2);
    padR = targetW - (resizeW + padL);
    padT = 0;
    padB = 0;
  }
  var resizedAndPadded = tidy(function() {
    var resized;
    if (flipHorizontal) {
      resized = image.resizeBilinear(reverse(imageTensor, 1), [resizeH, resizeW]);
    } else {
      resized = image.resizeBilinear(imageTensor, [resizeH, resizeW]);
    }
    var padded = pad3d(resized, [[padT, padB], [padL, padR], [0, 0]]);
    return padded;
  });
  return {
    resizedAndPadded,
    paddedBy: [[padT, padB], [padL, padR]]
  };
}
function scaleAndCropToInputTensorShape(tensor2, _a2, _b, _c, applySigmoidActivation) {
  var inputTensorHeight = _a2[0], inputTensorWidth = _a2[1];
  var resizedAndPaddedHeight = _b[0], resizedAndPaddedWidth = _b[1];
  var _d = _c[0], padT = _d[0], padB = _d[1], _e = _c[1], padL = _e[0], padR = _e[1];
  if (applySigmoidActivation === void 0) {
    applySigmoidActivation = false;
  }
  return tidy(function() {
    var inResizedAndPadded = image.resizeBilinear(tensor2, [resizedAndPaddedHeight, resizedAndPaddedWidth], true);
    if (applySigmoidActivation) {
      inResizedAndPadded = sigmoid(inResizedAndPadded);
    }
    return removePaddingAndResizeBack(inResizedAndPadded, [inputTensorHeight, inputTensorWidth], [[padT, padB], [padL, padR]]);
  });
}
function removePaddingAndResizeBack(resizedAndPadded, _a2, _b) {
  var originalHeight = _a2[0], originalWidth = _a2[1];
  var _c = _b[0], padT = _c[0], padB = _c[1], _d = _b[1], padL = _d[0], padR = _d[1];
  return tidy(function() {
    var batchedImage = expandDims(resizedAndPadded);
    return squeeze(image.cropAndResize(batchedImage, [[padT / (originalHeight + padT + padB - 1), padL / (originalWidth + padL + padR - 1), (padT + originalHeight - 1) / (originalHeight + padT + padB - 1), (padL + originalWidth - 1) / (originalWidth + padL + padR - 1)]], [0], [originalHeight, originalWidth]), [0]);
  });
}
function padAndResizeTo(input, _a2) {
  var targetH = _a2[0], targetW = _a2[1];
  var _b = getInputSize(input), height = _b[0], width = _b[1];
  var targetAspect = targetW / targetH;
  var aspect = width / height;
  var _c = [0, 0, 0, 0], padT = _c[0], padB = _c[1], padL = _c[2], padR = _c[3];
  if (aspect < targetAspect) {
    padT = 0;
    padB = 0;
    padL = Math.round(0.5 * (targetAspect * height - width));
    padR = Math.round(0.5 * (targetAspect * height - width));
  } else {
    padT = Math.round(0.5 * (1 / targetAspect * width - height));
    padB = Math.round(0.5 * (1 / targetAspect * width - height));
    padL = 0;
    padR = 0;
  }
  var resized = tidy(function() {
    var imageTensor = toInputTensor(input);
    imageTensor = pad3d(imageTensor, [[padT, padB], [padL, padR], [0, 0]]);
    return image.resizeBilinear(imageTensor, [targetH, targetW]);
  });
  return {
    resized,
    padding: {
      top: padT,
      left: padL,
      right: padR,
      bottom: padB
    }
  };
}
function toTensorBuffers3D(tensors) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a2) {
      return [2, Promise.all(tensors.map(function(tensor2) {
        return tensor2.buffer();
      }))];
    });
  });
}
function scalePose(pose, scaleY, scaleX, offsetY, offsetX) {
  if (offsetY === void 0) {
    offsetY = 0;
  }
  if (offsetX === void 0) {
    offsetX = 0;
  }
  return {
    score: pose.score,
    keypoints: pose.keypoints.map(function(_a2) {
      var score = _a2.score, part = _a2.part, position = _a2.position;
      return {
        score,
        part,
        position: {
          x: position.x * scaleX + offsetX,
          y: position.y * scaleY + offsetY
        }
      };
    })
  };
}
function scalePoses(poses, scaleY, scaleX, offsetY, offsetX) {
  if (offsetY === void 0) {
    offsetY = 0;
  }
  if (offsetX === void 0) {
    offsetX = 0;
  }
  if (scaleX === 1 && scaleY === 1 && offsetY === 0 && offsetX === 0) {
    return poses;
  }
  return poses.map(function(pose) {
    return scalePose(pose, scaleY, scaleX, offsetY, offsetX);
  });
}
function flipPoseHorizontal(pose, imageWidth) {
  return {
    score: pose.score,
    keypoints: pose.keypoints.map(function(_a2) {
      var score = _a2.score, part = _a2.part, position = _a2.position;
      return {
        score,
        part,
        position: {
          x: imageWidth - 1 - position.x,
          y: position.y
        }
      };
    })
  };
}
function flipPosesHorizontal(poses, imageWidth) {
  if (imageWidth <= 0) {
    return poses;
  }
  return poses.map(function(pose) {
    return flipPoseHorizontal(pose, imageWidth);
  });
}
function scaleAndFlipPoses(poses, _a2, _b, padding, flipHorizontal) {
  var height = _a2[0], width = _a2[1];
  var inputResolutionHeight = _b[0], inputResolutionWidth = _b[1];
  var scaleY = (height + padding.top + padding.bottom) / inputResolutionHeight;
  var scaleX = (width + padding.left + padding.right) / inputResolutionWidth;
  var scaledPoses = scalePoses(poses, scaleY, scaleX, -padding.top, -padding.left);
  if (flipHorizontal) {
    return flipPosesHorizontal(scaledPoses, width);
  } else {
    return scaledPoses;
  }
}
var APPLY_SIGMOID_ACTIVATION = true;
var FLIP_POSES_AFTER_SCALING = false;
var MOBILENET_V1_CONFIG = {
  architecture: "MobileNetV1",
  outputStride: 16,
  quantBytes: 4,
  multiplier: 0.75
};
var VALID_ARCHITECTURE = ["MobileNetV1", "ResNet50"];
var VALID_STRIDE = {
  "MobileNetV1": [8, 16, 32],
  "ResNet50": [32, 16]
};
var VALID_MULTIPLIER = {
  "MobileNetV1": [0.5, 0.75, 1],
  "ResNet50": [1]
};
var VALID_QUANT_BYTES = [1, 2, 4];
function validateModelConfig(config) {
  config = config || MOBILENET_V1_CONFIG;
  if (config.architecture == null) {
    config.architecture = "MobileNetV1";
  }
  if (VALID_ARCHITECTURE.indexOf(config.architecture) < 0) {
    throw new Error("Invalid architecture ".concat(config.architecture, ". ") + "Should be one of ".concat(VALID_ARCHITECTURE));
  }
  if (config.outputStride == null) {
    config.outputStride = 16;
  }
  if (VALID_STRIDE[config.architecture].indexOf(config.outputStride) < 0) {
    throw new Error("Invalid outputStride ".concat(config.outputStride, ". ") + "Should be one of ".concat(VALID_STRIDE[config.architecture], " ") + "for architecture ".concat(config.architecture, "."));
  }
  if (config.multiplier == null) {
    config.multiplier = 1;
  }
  if (VALID_MULTIPLIER[config.architecture].indexOf(config.multiplier) < 0) {
    throw new Error("Invalid multiplier ".concat(config.multiplier, ". ") + "Should be one of ".concat(VALID_MULTIPLIER[config.architecture], " ") + "for architecture ".concat(config.architecture, "."));
  }
  if (config.quantBytes == null) {
    config.quantBytes = 4;
  }
  if (VALID_QUANT_BYTES.indexOf(config.quantBytes) < 0) {
    throw new Error("Invalid quantBytes ".concat(config.quantBytes, ". ") + "Should be one of ".concat(VALID_QUANT_BYTES, " ") + "for architecture ".concat(config.architecture, "."));
  }
  return config;
}
var PERSON_INFERENCE_CONFIG = {
  flipHorizontal: false,
  internalResolution: "medium",
  segmentationThreshold: 0.7,
  maxDetections: 10,
  scoreThreshold: 0.4,
  nmsRadius: 20
};
var MULTI_PERSON_INSTANCE_INFERENCE_CONFIG = {
  flipHorizontal: false,
  internalResolution: "medium",
  segmentationThreshold: 0.7,
  maxDetections: 10,
  scoreThreshold: 0.4,
  nmsRadius: 20,
  minKeypointScore: 0.3,
  refineSteps: 10
};
function validatePersonInferenceConfig(config) {
  var segmentationThreshold = config.segmentationThreshold, maxDetections = config.maxDetections, scoreThreshold = config.scoreThreshold, nmsRadius = config.nmsRadius;
  if (segmentationThreshold < 0 || segmentationThreshold > 1) {
    throw new Error("segmentationThreshold ".concat(segmentationThreshold, ". ") + "Should be in range [0.0, 1.0]");
  }
  if (maxDetections <= 0) {
    throw new Error("Invalid maxDetections ".concat(maxDetections, ". ") + "Should be > 0");
  }
  if (scoreThreshold < 0 || scoreThreshold > 1) {
    throw new Error("Invalid scoreThreshold ".concat(scoreThreshold, ". ") + "Should be in range [0.0, 1.0]");
  }
  if (nmsRadius <= 0) {
    throw new Error("Invalid nmsRadius ".concat(nmsRadius, "."));
  }
}
function validateMultiPersonInstanceInferenceConfig(config) {
  var segmentationThreshold = config.segmentationThreshold, maxDetections = config.maxDetections, scoreThreshold = config.scoreThreshold, nmsRadius = config.nmsRadius, minKeypointScore = config.minKeypointScore, refineSteps = config.refineSteps;
  if (segmentationThreshold < 0 || segmentationThreshold > 1) {
    throw new Error("segmentationThreshold ".concat(segmentationThreshold, ". ") + "Should be in range [0.0, 1.0]");
  }
  if (maxDetections <= 0) {
    throw new Error("Invalid maxDetections ".concat(maxDetections, ". ") + "Should be > 0");
  }
  if (scoreThreshold < 0 || scoreThreshold > 1) {
    throw new Error("Invalid scoreThreshold ".concat(scoreThreshold, ". ") + "Should be in range [0.0, 1.0]");
  }
  if (nmsRadius <= 0) {
    throw new Error("Invalid nmsRadius ".concat(nmsRadius, "."));
  }
  if (minKeypointScore < 0 || minKeypointScore > 1) {
    throw new Error("Invalid minKeypointScore ".concat(minKeypointScore, ".") + "Should be in range [0.0, 1.0]");
  }
  if (refineSteps <= 0 || refineSteps > 20) {
    throw new Error("Invalid refineSteps ".concat(refineSteps, ".") + "Should be in range [1, 20]");
  }
}
var BodyPix = (
  /** @class */
  function() {
    function BodyPix2(net) {
      this.baseModel = net;
    }
    BodyPix2.prototype.predictForPersonSegmentation = function(input) {
      var _a2 = this.baseModel.predict(input), segmentation = _a2.segmentation, heatmapScores = _a2.heatmapScores, offsets = _a2.offsets, displacementFwd = _a2.displacementFwd, displacementBwd = _a2.displacementBwd;
      return {
        segmentLogits: segmentation,
        heatmapScores,
        offsets,
        displacementFwd,
        displacementBwd
      };
    };
    BodyPix2.prototype.predictForPersonSegmentationAndPart = function(input) {
      var _a2 = this.baseModel.predict(input), segmentation = _a2.segmentation, partHeatmaps = _a2.partHeatmaps, heatmapScores = _a2.heatmapScores, offsets = _a2.offsets, displacementFwd = _a2.displacementFwd, displacementBwd = _a2.displacementBwd;
      return {
        segmentLogits: segmentation,
        partHeatmapLogits: partHeatmaps,
        heatmapScores,
        offsets,
        displacementFwd,
        displacementBwd
      };
    };
    BodyPix2.prototype.predictForMultiPersonInstanceSegmentationAndPart = function(input) {
      var _a2 = this.baseModel.predict(input), segmentation = _a2.segmentation, longOffsets = _a2.longOffsets, heatmapScores = _a2.heatmapScores, offsets = _a2.offsets, displacementFwd = _a2.displacementFwd, displacementBwd = _a2.displacementBwd, partHeatmaps = _a2.partHeatmaps;
      return {
        segmentLogits: segmentation,
        longOffsets,
        heatmapScores,
        offsets,
        displacementFwd,
        displacementBwd,
        partHeatmaps
      };
    };
    BodyPix2.prototype.segmentPersonActivation = function(input, internalResolution, segmentationThreshold) {
      var _this = this;
      if (segmentationThreshold === void 0) {
        segmentationThreshold = 0.5;
      }
      var _a2 = getInputSize(input), height = _a2[0], width = _a2[1];
      var internalResolutionHeightAndWidth = toInputResolutionHeightAndWidth(internalResolution, this.baseModel.outputStride, [height, width]);
      var _b = padAndResizeTo(input, internalResolutionHeightAndWidth), resized = _b.resized, padding = _b.padding;
      var _c = tidy(function() {
        var _a3 = _this.predictForPersonSegmentation(resized), segmentLogits = _a3.segmentLogits, heatmapScores2 = _a3.heatmapScores, offsets2 = _a3.offsets, displacementFwd2 = _a3.displacementFwd, displacementBwd2 = _a3.displacementBwd;
        var _b2 = resized.shape, resizedHeight = _b2[0], resizedWidth = _b2[1];
        var scaledSegmentScores = scaleAndCropToInputTensorShape(segmentLogits, [height, width], [resizedHeight, resizedWidth], [[padding.top, padding.bottom], [padding.left, padding.right]], APPLY_SIGMOID_ACTIVATION);
        return {
          segmentation: toMaskTensor(squeeze(scaledSegmentScores), segmentationThreshold),
          heatmapScores: heatmapScores2,
          offsets: offsets2,
          displacementFwd: displacementFwd2,
          displacementBwd: displacementBwd2
        };
      }), segmentation = _c.segmentation, heatmapScores = _c.heatmapScores, offsets = _c.offsets, displacementFwd = _c.displacementFwd, displacementBwd = _c.displacementBwd;
      resized.dispose();
      return {
        segmentation,
        heatmapScores,
        offsets,
        displacementFwd,
        displacementBwd,
        padding,
        internalResolutionHeightAndWidth
      };
    };
    BodyPix2.prototype.segmentPerson = function(input, config) {
      if (config === void 0) {
        config = PERSON_INFERENCE_CONFIG;
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a2, segmentation, heatmapScores, offsets, displacementFwd, displacementBwd, padding, internalResolutionHeightAndWidth, _b, height, width, result, tensorBuffers, scoresBuf, offsetsBuf, displacementsFwdBuf, displacementsBwdBuf, poses;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              config = __assign(__assign({}, PERSON_INFERENCE_CONFIG), config);
              validatePersonInferenceConfig(config);
              _a2 = this.segmentPersonActivation(input, config.internalResolution, config.segmentationThreshold), segmentation = _a2.segmentation, heatmapScores = _a2.heatmapScores, offsets = _a2.offsets, displacementFwd = _a2.displacementFwd, displacementBwd = _a2.displacementBwd, padding = _a2.padding, internalResolutionHeightAndWidth = _a2.internalResolutionHeightAndWidth;
              _b = segmentation.shape, height = _b[0], width = _b[1];
              return [4, segmentation.data()];
            case 1:
              result = _c.sent();
              segmentation.dispose();
              return [4, toTensorBuffers3D([heatmapScores, offsets, displacementFwd, displacementBwd])];
            case 2:
              tensorBuffers = _c.sent();
              scoresBuf = tensorBuffers[0], offsetsBuf = tensorBuffers[1], displacementsFwdBuf = tensorBuffers[2], displacementsBwdBuf = tensorBuffers[3];
              poses = decodeMultiplePoses(scoresBuf, offsetsBuf, displacementsFwdBuf, displacementsBwdBuf, this.baseModel.outputStride, config.maxDetections, config.scoreThreshold, config.nmsRadius);
              poses = scaleAndFlipPoses(poses, [height, width], internalResolutionHeightAndWidth, padding, FLIP_POSES_AFTER_SCALING);
              heatmapScores.dispose();
              offsets.dispose();
              displacementFwd.dispose();
              displacementBwd.dispose();
              return [2, {
                height,
                width,
                data: result,
                allPoses: poses
              }];
          }
        });
      });
    };
    BodyPix2.prototype.segmentMultiPerson = function(input, config) {
      if (config === void 0) {
        config = MULTI_PERSON_INSTANCE_INFERENCE_CONFIG;
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a2, height, width, internalResolutionHeightAndWidth, _b, resized, padding, _c, segmentation, longOffsets, heatmapScoresRaw, offsetsRaw, displacementFwdRaw, displacementBwdRaw, tensorBuffers, scoresBuf, offsetsBuf, displacementsFwdBuf, displacementsBwdBuf, poses, instanceMasks;
        var _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              config = __assign(__assign({}, MULTI_PERSON_INSTANCE_INFERENCE_CONFIG), config);
              validateMultiPersonInstanceInferenceConfig(config);
              _a2 = getInputSize(input), height = _a2[0], width = _a2[1];
              internalResolutionHeightAndWidth = toInputResolutionHeightAndWidth(config.internalResolution, this.baseModel.outputStride, [height, width]);
              _b = padAndResizeTo(input, internalResolutionHeightAndWidth), resized = _b.resized, padding = _b.padding;
              _c = tidy(function() {
                var _a3 = _this.predictForMultiPersonInstanceSegmentationAndPart(resized), segmentLogits = _a3.segmentLogits, longOffsets2 = _a3.longOffsets, heatmapScores = _a3.heatmapScores, offsets = _a3.offsets, displacementFwd = _a3.displacementFwd, displacementBwd = _a3.displacementBwd;
                var scaledSegmentScores = scaleAndCropToInputTensorShape(segmentLogits, [height, width], internalResolutionHeightAndWidth, [[padding.top, padding.bottom], [padding.left, padding.right]], APPLY_SIGMOID_ACTIVATION);
                var scaledLongOffsets;
                {
                  scaledLongOffsets = longOffsets2;
                }
                var segmentation2 = toMaskTensor(squeeze(scaledSegmentScores), config.segmentationThreshold);
                return {
                  segmentation: segmentation2,
                  longOffsets: scaledLongOffsets,
                  heatmapScoresRaw: heatmapScores,
                  offsetsRaw: offsets,
                  displacementFwdRaw: displacementFwd,
                  displacementBwdRaw: displacementBwd
                };
              }), segmentation = _c.segmentation, longOffsets = _c.longOffsets, heatmapScoresRaw = _c.heatmapScoresRaw, offsetsRaw = _c.offsetsRaw, displacementFwdRaw = _c.displacementFwdRaw, displacementBwdRaw = _c.displacementBwdRaw;
              return [4, toTensorBuffers3D([heatmapScoresRaw, offsetsRaw, displacementFwdRaw, displacementBwdRaw])];
            case 1:
              tensorBuffers = _d.sent();
              scoresBuf = tensorBuffers[0], offsetsBuf = tensorBuffers[1], displacementsFwdBuf = tensorBuffers[2], displacementsBwdBuf = tensorBuffers[3];
              poses = decodeMultiplePoses(scoresBuf, offsetsBuf, displacementsFwdBuf, displacementsBwdBuf, this.baseModel.outputStride, config.maxDetections, config.scoreThreshold, config.nmsRadius);
              poses = scaleAndFlipPoses(poses, [height, width], internalResolutionHeightAndWidth, padding, FLIP_POSES_AFTER_SCALING);
              return [4, decodePersonInstanceMasks(segmentation, longOffsets, poses, height, width, this.baseModel.outputStride, internalResolutionHeightAndWidth, padding, config.scoreThreshold, config.refineSteps, config.minKeypointScore, config.maxDetections)];
            case 2:
              instanceMasks = _d.sent();
              resized.dispose();
              segmentation.dispose();
              longOffsets.dispose();
              heatmapScoresRaw.dispose();
              offsetsRaw.dispose();
              displacementFwdRaw.dispose();
              displacementBwdRaw.dispose();
              return [2, instanceMasks];
          }
        });
      });
    };
    BodyPix2.prototype.segmentPersonPartsActivation = function(input, internalResolution, segmentationThreshold) {
      var _this = this;
      if (segmentationThreshold === void 0) {
        segmentationThreshold = 0.5;
      }
      var _a2 = getInputSize(input), height = _a2[0], width = _a2[1];
      var internalResolutionHeightAndWidth = toInputResolutionHeightAndWidth(internalResolution, this.baseModel.outputStride, [height, width]);
      var _b = padAndResizeTo(input, internalResolutionHeightAndWidth), resized = _b.resized, padding = _b.padding;
      var _c = tidy(function() {
        var _a3 = _this.predictForPersonSegmentationAndPart(resized), segmentLogits = _a3.segmentLogits, partHeatmapLogits = _a3.partHeatmapLogits, heatmapScores2 = _a3.heatmapScores, offsets2 = _a3.offsets, displacementFwd2 = _a3.displacementFwd, displacementBwd2 = _a3.displacementBwd;
        var _b2 = resized.shape, resizedHeight = _b2[0], resizedWidth = _b2[1];
        var scaledSegmentScores = scaleAndCropToInputTensorShape(segmentLogits, [height, width], [resizedHeight, resizedWidth], [[padding.top, padding.bottom], [padding.left, padding.right]], APPLY_SIGMOID_ACTIVATION);
        var scaledPartHeatmapScore = scaleAndCropToInputTensorShape(partHeatmapLogits, [height, width], [resizedHeight, resizedWidth], [[padding.top, padding.bottom], [padding.left, padding.right]], APPLY_SIGMOID_ACTIVATION);
        var segmentation = toMaskTensor(squeeze(scaledSegmentScores), segmentationThreshold);
        return {
          partSegmentation: decodePartSegmentation(segmentation, scaledPartHeatmapScore),
          heatmapScores: heatmapScores2,
          offsets: offsets2,
          displacementFwd: displacementFwd2,
          displacementBwd: displacementBwd2
        };
      }), partSegmentation = _c.partSegmentation, heatmapScores = _c.heatmapScores, offsets = _c.offsets, displacementFwd = _c.displacementFwd, displacementBwd = _c.displacementBwd;
      resized.dispose();
      return {
        partSegmentation,
        heatmapScores,
        offsets,
        displacementFwd,
        displacementBwd,
        padding,
        internalResolutionHeightAndWidth
      };
    };
    BodyPix2.prototype.segmentPersonParts = function(input, config) {
      if (config === void 0) {
        config = PERSON_INFERENCE_CONFIG;
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a2, partSegmentation, heatmapScores, offsets, displacementFwd, displacementBwd, padding, internalResolutionHeightAndWidth, _b, height, width, data, tensorBuffers, scoresBuf, offsetsBuf, displacementsFwdBuf, displacementsBwdBuf, poses;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              config = __assign(__assign({}, PERSON_INFERENCE_CONFIG), config);
              validatePersonInferenceConfig(config);
              _a2 = this.segmentPersonPartsActivation(input, config.internalResolution, config.segmentationThreshold), partSegmentation = _a2.partSegmentation, heatmapScores = _a2.heatmapScores, offsets = _a2.offsets, displacementFwd = _a2.displacementFwd, displacementBwd = _a2.displacementBwd, padding = _a2.padding, internalResolutionHeightAndWidth = _a2.internalResolutionHeightAndWidth;
              _b = partSegmentation.shape, height = _b[0], width = _b[1];
              return [4, partSegmentation.data()];
            case 1:
              data = _c.sent();
              partSegmentation.dispose();
              return [4, toTensorBuffers3D([heatmapScores, offsets, displacementFwd, displacementBwd])];
            case 2:
              tensorBuffers = _c.sent();
              scoresBuf = tensorBuffers[0], offsetsBuf = tensorBuffers[1], displacementsFwdBuf = tensorBuffers[2], displacementsBwdBuf = tensorBuffers[3];
              poses = decodeMultiplePoses(scoresBuf, offsetsBuf, displacementsFwdBuf, displacementsBwdBuf, this.baseModel.outputStride, config.maxDetections, config.scoreThreshold, config.nmsRadius);
              poses = scaleAndFlipPoses(poses, [height, width], internalResolutionHeightAndWidth, padding, FLIP_POSES_AFTER_SCALING);
              heatmapScores.dispose();
              offsets.dispose();
              displacementFwd.dispose();
              displacementBwd.dispose();
              return [2, {
                height,
                width,
                data,
                allPoses: poses
              }];
          }
        });
      });
    };
    BodyPix2.prototype.segmentMultiPersonParts = function(input, config) {
      if (config === void 0) {
        config = MULTI_PERSON_INSTANCE_INFERENCE_CONFIG;
      }
      return __awaiter(this, void 0, void 0, function() {
        var _a2, height, width, internalResolutionHeightAndWidth, _b, resized, padding, _c, segmentation, longOffsets, heatmapScoresRaw, offsetsRaw, displacementFwdRaw, displacementBwdRaw, partSegmentation, tensorBuffers, scoresBuf, offsetsBuf, displacementsFwdBuf, displacementsBwdBuf, poses, instanceMasks;
        var _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              config = __assign(__assign({}, MULTI_PERSON_INSTANCE_INFERENCE_CONFIG), config);
              validateMultiPersonInstanceInferenceConfig(config);
              _a2 = getInputSize(input), height = _a2[0], width = _a2[1];
              internalResolutionHeightAndWidth = toInputResolutionHeightAndWidth(config.internalResolution, this.baseModel.outputStride, [height, width]);
              _b = padAndResizeTo(input, internalResolutionHeightAndWidth), resized = _b.resized, padding = _b.padding;
              _c = tidy(function() {
                var _a3 = _this.predictForMultiPersonInstanceSegmentationAndPart(resized), segmentLogits = _a3.segmentLogits, longOffsets2 = _a3.longOffsets, heatmapScores = _a3.heatmapScores, offsets = _a3.offsets, displacementFwd = _a3.displacementFwd, displacementBwd = _a3.displacementBwd, partHeatmaps = _a3.partHeatmaps;
                var scaledSegmentScores = scaleAndCropToInputTensorShape(segmentLogits, [height, width], internalResolutionHeightAndWidth, [[padding.top, padding.bottom], [padding.left, padding.right]], APPLY_SIGMOID_ACTIVATION);
                var scaledPartSegmentationScores = scaleAndCropToInputTensorShape(partHeatmaps, [height, width], internalResolutionHeightAndWidth, [[padding.top, padding.bottom], [padding.left, padding.right]], APPLY_SIGMOID_ACTIVATION);
                var scaledLongOffsets = longOffsets2;
                var segmentation2 = toMaskTensor(squeeze(scaledSegmentScores), config.segmentationThreshold);
                var partSegmentation2 = decodeOnlyPartSegmentation(scaledPartSegmentationScores);
                return {
                  segmentation: segmentation2,
                  longOffsets: scaledLongOffsets,
                  heatmapScoresRaw: heatmapScores,
                  offsetsRaw: offsets,
                  displacementFwdRaw: displacementFwd,
                  displacementBwdRaw: displacementBwd,
                  partSegmentation: partSegmentation2
                };
              }), segmentation = _c.segmentation, longOffsets = _c.longOffsets, heatmapScoresRaw = _c.heatmapScoresRaw, offsetsRaw = _c.offsetsRaw, displacementFwdRaw = _c.displacementFwdRaw, displacementBwdRaw = _c.displacementBwdRaw, partSegmentation = _c.partSegmentation;
              return [4, toTensorBuffers3D([heatmapScoresRaw, offsetsRaw, displacementFwdRaw, displacementBwdRaw])];
            case 1:
              tensorBuffers = _d.sent();
              scoresBuf = tensorBuffers[0], offsetsBuf = tensorBuffers[1], displacementsFwdBuf = tensorBuffers[2], displacementsBwdBuf = tensorBuffers[3];
              poses = decodeMultiplePoses(scoresBuf, offsetsBuf, displacementsFwdBuf, displacementsBwdBuf, this.baseModel.outputStride, config.maxDetections, config.scoreThreshold, config.nmsRadius);
              poses = scaleAndFlipPoses(poses, [height, width], internalResolutionHeightAndWidth, padding, FLIP_POSES_AFTER_SCALING);
              return [4, decodePersonInstancePartMasks(segmentation, longOffsets, partSegmentation, poses, height, width, this.baseModel.outputStride, internalResolutionHeightAndWidth, padding, config.scoreThreshold, config.refineSteps, config.minKeypointScore, config.maxDetections)];
            case 2:
              instanceMasks = _d.sent();
              resized.dispose();
              segmentation.dispose();
              longOffsets.dispose();
              heatmapScoresRaw.dispose();
              offsetsRaw.dispose();
              displacementFwdRaw.dispose();
              displacementBwdRaw.dispose();
              partSegmentation.dispose();
              return [2, instanceMasks];
          }
        });
      });
    };
    BodyPix2.prototype.dispose = function() {
      this.baseModel.dispose();
    };
    return BodyPix2;
  }()
);
function loadMobileNet(config) {
  return __awaiter(this, void 0, void 0, function() {
    var outputStride, quantBytes, multiplier, url, graphModel, mobilenet;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          outputStride = config.outputStride;
          quantBytes = config.quantBytes;
          multiplier = config.multiplier;
          if (dist_exports == null) {
            throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this\n        model.");
          }
          url = mobileNetSavedModel(outputStride, multiplier, quantBytes);
          return [4, loadGraphModel(config.modelUrl || url)];
        case 1:
          graphModel = _a2.sent();
          mobilenet = new MobileNet(graphModel, outputStride);
          return [2, new BodyPix(mobilenet)];
      }
    });
  });
}
function loadResNet(config) {
  return __awaiter(this, void 0, void 0, function() {
    var outputStride, quantBytes, url, graphModel, resnet;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          outputStride = config.outputStride;
          quantBytes = config.quantBytes;
          if (dist_exports == null) {
            throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this\n        model.");
          }
          url = resNet50SavedModel(outputStride, quantBytes);
          return [4, loadGraphModel(config.modelUrl || url)];
        case 1:
          graphModel = _a2.sent();
          resnet = new ResNet(graphModel, outputStride);
          return [2, new BodyPix(resnet)];
      }
    });
  });
}
function load(config) {
  if (config === void 0) {
    config = MOBILENET_V1_CONFIG;
  }
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a2) {
      config = validateModelConfig(config);
      if (config.architecture === "ResNet50") {
        return [2, loadResNet(config)];
      } else if (config.architecture === "MobileNetV1") {
        return [2, loadMobileNet(config)];
      } else {
        return [2, null];
      }
    });
  });
}
function cpuBlur(canvas, image2, blur) {
  var ctx = canvas.getContext("2d");
  var sum = 0;
  var delta = 5;
  var alphaLeft = 1 / (2 * Math.PI * delta * delta);
  var step = blur < 3 ? 1 : 2;
  for (var y = -blur; y <= blur; y += step) {
    for (var x = -blur; x <= blur; x += step) {
      var weight = alphaLeft * Math.exp(-(x * x + y * y) / (2 * delta * delta));
      sum += weight;
    }
  }
  for (var y = -blur; y <= blur; y += step) {
    for (var x = -blur; x <= blur; x += step) {
      ctx.globalAlpha = alphaLeft * Math.exp(-(x * x + y * y) / (2 * delta * delta)) / sum * blur;
      ctx.drawImage(image2, x, y);
    }
  }
  ctx.globalAlpha = 1;
}
var offScreenCanvases = {};
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function assertSameDimensions(_a2, _b, nameA, nameB) {
  var widthA = _a2.width, heightA = _a2.height;
  var widthB = _b.width, heightB = _b.height;
  if (widthA !== widthB || heightA !== heightB) {
    throw new Error("error: dimensions must match. ".concat(nameA, " has dimensions ").concat(widthA, "x").concat(heightA, ", ").concat(nameB, " has dimensions ").concat(widthB, "x").concat(heightB));
  }
}
function flipCanvasHorizontal(canvas) {
  var ctx = canvas.getContext("2d");
  ctx.scale(-1, 1);
  ctx.translate(-canvas.width, 0);
}
function drawWithCompositing(ctx, image2, compositeOperation) {
  ctx.globalCompositeOperation = compositeOperation;
  ctx.drawImage(image2, 0, 0);
}
function createOffScreenCanvas() {
  if (typeof document !== "undefined") {
    return document.createElement("canvas");
  } else if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(0, 0);
  } else {
    throw new Error("Cannot create a canvas in this context");
  }
}
function ensureOffscreenCanvasCreated(id) {
  if (!offScreenCanvases[id]) {
    offScreenCanvases[id] = createOffScreenCanvas();
  }
  return offScreenCanvases[id];
}
function drawAndBlurImageOnCanvas(image2, blurAmount, canvas) {
  var height = image2.height, width = image2.width;
  var ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  if (isSafari()) {
    cpuBlur(canvas, image2, blurAmount);
  } else {
    ctx.filter = "blur(".concat(blurAmount, "px)");
    ctx.drawImage(image2, 0, 0, width, height);
  }
  ctx.restore();
}
function drawAndBlurImageOnOffScreenCanvas(image2, blurAmount, offscreenCanvasName) {
  var canvas = ensureOffscreenCanvasCreated(offscreenCanvasName);
  if (blurAmount === 0) {
    renderImageToCanvas(image2, canvas);
  } else {
    drawAndBlurImageOnCanvas(image2, blurAmount, canvas);
  }
  return canvas;
}
function renderImageToCanvas(image2, canvas) {
  var width = image2.width, height = image2.height;
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(image2, 0, 0, width, height);
}
function renderImageDataToCanvas(image2, canvas) {
  canvas.width = image2.width;
  canvas.height = image2.height;
  var ctx = canvas.getContext("2d");
  ctx.putImageData(image2, 0, 0);
}
function renderImageDataToOffScreenCanvas(image2, canvasName) {
  var canvas = ensureOffscreenCanvasCreated(canvasName);
  renderImageDataToCanvas(image2, canvas);
  return canvas;
}
function toMask(personOrPartSegmentation, foreground, background, drawContour, foregroundIds) {
  if (foreground === void 0) {
    foreground = {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
  }
  if (background === void 0) {
    background = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
  }
  if (drawContour === void 0) {
    drawContour = false;
  }
  if (foregroundIds === void 0) {
    foregroundIds = [1];
  }
  if (Array.isArray(personOrPartSegmentation) && personOrPartSegmentation.length === 0) {
    return null;
  }
  var multiPersonOrPartSegmentation;
  if (!Array.isArray(personOrPartSegmentation)) {
    multiPersonOrPartSegmentation = [personOrPartSegmentation];
  } else {
    multiPersonOrPartSegmentation = personOrPartSegmentation;
  }
  var _a2 = multiPersonOrPartSegmentation[0], width = _a2.width, height = _a2.height;
  var bytes = new Uint8ClampedArray(width * height * 4);
  function drawStroke(bytes2, row, column, width2, radius, color) {
    if (color === void 0) {
      color = {
        r: 0,
        g: 255,
        b: 255,
        a: 255
      };
    }
    for (var i2 = -radius; i2 <= radius; i2++) {
      for (var j2 = -radius; j2 <= radius; j2++) {
        if (i2 !== 0 && j2 !== 0) {
          var n = (row + i2) * width2 + (column + j2);
          bytes2[4 * n + 0] = color.r;
          bytes2[4 * n + 1] = color.g;
          bytes2[4 * n + 2] = color.b;
          bytes2[4 * n + 3] = color.a;
        }
      }
    }
  }
  function isSegmentationBoundary(segmentationData, row, column, width2, foregroundIds2, radius) {
    if (foregroundIds2 === void 0) {
      foregroundIds2 = [1];
    }
    if (radius === void 0) {
      radius = 1;
    }
    var numberBackgroundPixels = 0;
    for (var i2 = -radius; i2 <= radius; i2++) {
      var _loop_2 = function(j3) {
        if (i2 !== 0 && j3 !== 0) {
          var n_1 = (row + i2) * width2 + (column + j3);
          if (!foregroundIds2.some(function(id) {
            return id === segmentationData[n_1];
          })) {
            numberBackgroundPixels += 1;
          }
        }
      };
      for (var j2 = -radius; j2 <= radius; j2++) {
        _loop_2(j2);
      }
    }
    return numberBackgroundPixels > 0;
  }
  for (var i = 0; i < height; i += 1) {
    var _loop_1 = function(j2) {
      var n = i * width + j2;
      bytes[4 * n + 0] = background.r;
      bytes[4 * n + 1] = background.g;
      bytes[4 * n + 2] = background.b;
      bytes[4 * n + 3] = background.a;
      var _loop_3 = function(k2) {
        if (foregroundIds.some(function(id) {
          return id === multiPersonOrPartSegmentation[k2].data[n];
        })) {
          bytes[4 * n] = foreground.r;
          bytes[4 * n + 1] = foreground.g;
          bytes[4 * n + 2] = foreground.b;
          bytes[4 * n + 3] = foreground.a;
          var isBoundary = isSegmentationBoundary(multiPersonOrPartSegmentation[k2].data, i, j2, width, foregroundIds);
          if (drawContour && i - 1 >= 0 && i + 1 < height && j2 - 1 >= 0 && j2 + 1 < width && isBoundary) {
            drawStroke(bytes, i, j2, width, 1);
          }
        }
      };
      for (var k = 0; k < multiPersonOrPartSegmentation.length; k++) {
        _loop_3(k);
      }
    };
    for (var j = 0; j < width; j += 1) {
      _loop_1(j);
    }
  }
  return new ImageData(bytes, width, height);
}
var RAINBOW_PART_COLORS = [[110, 64, 170], [143, 61, 178], [178, 60, 178], [210, 62, 167], [238, 67, 149], [255, 78, 125], [255, 94, 99], [255, 115, 75], [255, 140, 56], [239, 167, 47], [217, 194, 49], [194, 219, 64], [175, 240, 91], [135, 245, 87], [96, 247, 96], [64, 243, 115], [40, 234, 141], [28, 219, 169], [26, 199, 194], [33, 176, 213], [47, 150, 224], [65, 125, 224], [84, 101, 214], [99, 81, 195]];
function toColoredPartMask(partSegmentation, partColors) {
  if (partColors === void 0) {
    partColors = RAINBOW_PART_COLORS;
  }
  if (Array.isArray(partSegmentation) && partSegmentation.length === 0) {
    return null;
  }
  var multiPersonPartSegmentation;
  if (!Array.isArray(partSegmentation)) {
    multiPersonPartSegmentation = [partSegmentation];
  } else {
    multiPersonPartSegmentation = partSegmentation;
  }
  var _a2 = multiPersonPartSegmentation[0], width = _a2.width, height = _a2.height;
  var bytes = new Uint8ClampedArray(width * height * 4);
  for (var i = 0; i < height * width; ++i) {
    var j = i * 4;
    bytes[j + 0] = 255;
    bytes[j + 1] = 255;
    bytes[j + 2] = 255;
    bytes[j + 3] = 255;
    for (var k = 0; k < multiPersonPartSegmentation.length; k++) {
      var partId = multiPersonPartSegmentation[k].data[i];
      if (partId !== -1) {
        var color = partColors[partId];
        if (!color) {
          throw new Error("No color could be found for part id ".concat(partId));
        }
        bytes[j + 0] = color[0];
        bytes[j + 1] = color[1];
        bytes[j + 2] = color[2];
        bytes[j + 3] = 255;
      }
    }
  }
  return new ImageData(bytes, width, height);
}
var CANVAS_NAMES = {
  blurred: "blurred",
  blurredMask: "blurred-mask",
  mask: "mask",
  lowresPartMask: "lowres-part-mask"
};
function drawMask(canvas, image2, maskImage, maskOpacity, maskBlurAmount, flipHorizontal) {
  if (maskOpacity === void 0) {
    maskOpacity = 0.7;
  }
  if (maskBlurAmount === void 0) {
    maskBlurAmount = 0;
  }
  if (flipHorizontal === void 0) {
    flipHorizontal = false;
  }
  var _a2 = getInputSize(image2), height = _a2[0], width = _a2[1];
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  ctx.save();
  if (flipHorizontal) {
    flipCanvasHorizontal(canvas);
  }
  ctx.drawImage(image2, 0, 0);
  ctx.globalAlpha = maskOpacity;
  if (maskImage) {
    assertSameDimensions({
      width,
      height
    }, maskImage, "image", "mask");
    var mask = renderImageDataToOffScreenCanvas(maskImage, CANVAS_NAMES.mask);
    var blurredMask = drawAndBlurImageOnOffScreenCanvas(mask, maskBlurAmount, CANVAS_NAMES.blurredMask);
    ctx.drawImage(blurredMask, 0, 0, width, height);
  }
  ctx.restore();
}
function drawPixelatedMask(canvas, image2, maskImage, maskOpacity, maskBlurAmount, flipHorizontal, pixelCellWidth) {
  if (maskOpacity === void 0) {
    maskOpacity = 0.7;
  }
  if (maskBlurAmount === void 0) {
    maskBlurAmount = 0;
  }
  if (flipHorizontal === void 0) {
    flipHorizontal = false;
  }
  if (pixelCellWidth === void 0) {
    pixelCellWidth = 10;
  }
  var _a2 = getInputSize(image2), height = _a2[0], width = _a2[1];
  assertSameDimensions({
    width,
    height
  }, maskImage, "image", "mask");
  var mask = renderImageDataToOffScreenCanvas(maskImage, CANVAS_NAMES.mask);
  var blurredMask = drawAndBlurImageOnOffScreenCanvas(mask, maskBlurAmount, CANVAS_NAMES.blurredMask);
  canvas.width = blurredMask.width;
  canvas.height = blurredMask.height;
  var ctx = canvas.getContext("2d");
  ctx.save();
  if (flipHorizontal) {
    flipCanvasHorizontal(canvas);
  }
  var offscreenCanvas = ensureOffscreenCanvasCreated(CANVAS_NAMES.lowresPartMask);
  var offscreenCanvasCtx = offscreenCanvas.getContext("2d");
  offscreenCanvas.width = blurredMask.width * (1 / pixelCellWidth);
  offscreenCanvas.height = blurredMask.height * (1 / pixelCellWidth);
  offscreenCanvasCtx.drawImage(blurredMask, 0, 0, blurredMask.width, blurredMask.height, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(offscreenCanvas, 0, 0, offscreenCanvas.width, offscreenCanvas.height, 0, 0, canvas.width, canvas.height);
  for (var i = 0; i < offscreenCanvas.width; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.moveTo(pixelCellWidth * i, 0);
    ctx.lineTo(pixelCellWidth * i, canvas.height);
    ctx.stroke();
  }
  for (var i = 0; i < offscreenCanvas.height; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.moveTo(0, pixelCellWidth * i);
    ctx.lineTo(canvas.width, pixelCellWidth * i);
    ctx.stroke();
  }
  ctx.globalAlpha = 1 - maskOpacity;
  ctx.drawImage(image2, 0, 0, blurredMask.width, blurredMask.height);
  ctx.restore();
}
function createPersonMask(multiPersonSegmentation, edgeBlurAmount) {
  var backgroundMaskImage = toMask(multiPersonSegmentation, {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  }, {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  });
  var backgroundMask = renderImageDataToOffScreenCanvas(backgroundMaskImage, CANVAS_NAMES.mask);
  if (edgeBlurAmount === 0) {
    return backgroundMask;
  } else {
    return drawAndBlurImageOnOffScreenCanvas(backgroundMask, edgeBlurAmount, CANVAS_NAMES.blurredMask);
  }
}
function drawBokehEffect(canvas, image2, multiPersonSegmentation, backgroundBlurAmount, edgeBlurAmount, flipHorizontal) {
  if (backgroundBlurAmount === void 0) {
    backgroundBlurAmount = 3;
  }
  if (edgeBlurAmount === void 0) {
    edgeBlurAmount = 3;
  }
  if (flipHorizontal === void 0) {
    flipHorizontal = false;
  }
  var blurredImage = drawAndBlurImageOnOffScreenCanvas(image2, backgroundBlurAmount, CANVAS_NAMES.blurred);
  canvas.width = blurredImage.width;
  canvas.height = blurredImage.height;
  var ctx = canvas.getContext("2d");
  if (Array.isArray(multiPersonSegmentation) && multiPersonSegmentation.length === 0) {
    ctx.drawImage(blurredImage, 0, 0);
    return;
  }
  var personMask = createPersonMask(multiPersonSegmentation, edgeBlurAmount);
  ctx.save();
  if (flipHorizontal) {
    flipCanvasHorizontal(canvas);
  }
  var _a2 = getInputSize(image2), height = _a2[0], width = _a2[1];
  ctx.drawImage(image2, 0, 0, width, height);
  drawWithCompositing(ctx, personMask, "destination-in");
  drawWithCompositing(ctx, blurredImage, "destination-over");
  ctx.restore();
}
function createBodyPartMask(multiPersonPartSegmentation, bodyPartIdsToMask, edgeBlurAmount) {
  var backgroundMaskImage = toMask(multiPersonPartSegmentation, {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  }, {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  }, true, bodyPartIdsToMask);
  var backgroundMask = renderImageDataToOffScreenCanvas(backgroundMaskImage, CANVAS_NAMES.mask);
  if (edgeBlurAmount === 0) {
    return backgroundMask;
  } else {
    return drawAndBlurImageOnOffScreenCanvas(backgroundMask, edgeBlurAmount, CANVAS_NAMES.blurredMask);
  }
}
function blurBodyPart(canvas, image2, partSegmentation, bodyPartIdsToBlur, backgroundBlurAmount, edgeBlurAmount, flipHorizontal) {
  if (bodyPartIdsToBlur === void 0) {
    bodyPartIdsToBlur = [0, 1];
  }
  if (backgroundBlurAmount === void 0) {
    backgroundBlurAmount = 3;
  }
  if (edgeBlurAmount === void 0) {
    edgeBlurAmount = 3;
  }
  if (flipHorizontal === void 0) {
    flipHorizontal = false;
  }
  var blurredImage = drawAndBlurImageOnOffScreenCanvas(image2, backgroundBlurAmount, CANVAS_NAMES.blurred);
  canvas.width = blurredImage.width;
  canvas.height = blurredImage.height;
  var ctx = canvas.getContext("2d");
  if (Array.isArray(partSegmentation) && partSegmentation.length === 0) {
    ctx.drawImage(blurredImage, 0, 0);
    return;
  }
  var bodyPartMask = createBodyPartMask(partSegmentation, bodyPartIdsToBlur, edgeBlurAmount);
  ctx.save();
  if (flipHorizontal) {
    flipCanvasHorizontal(canvas);
  }
  var _a2 = getInputSize(image2), height = _a2[0], width = _a2[1];
  ctx.drawImage(image2, 0, 0, width, height);
  drawWithCompositing(ctx, bodyPartMask, "destination-in");
  drawWithCompositing(ctx, blurredImage, "destination-over");
  ctx.restore();
}
var PART_CHANNELS = ["left_face", "right_face", "left_upper_arm_front", "left_upper_arm_back", "right_upper_arm_front", "right_upper_arm_back", "left_lower_arm_front", "left_lower_arm_back", "right_lower_arm_front", "right_lower_arm_back", "left_hand", "right_hand", "torso_front", "torso_back", "left_upper_leg_front", "left_upper_leg_back", "right_upper_leg_front", "right_upper_leg_back", "left_lower_leg_front", "left_lower_leg_back", "right_lower_leg_front", "right_lower_leg_back", "left_feet", "right_feet"];
var version = "2.2.1";
export {
  BodyPix,
  PART_CHANNELS,
  blurBodyPart,
  drawBokehEffect,
  drawMask,
  drawPixelatedMask,
  flipPoseHorizontal,
  load,
  resizeAndPadTo,
  scaleAndCropToInputTensorShape,
  toColoredPartMask,
  toMask,
  version
};
/*! Bundled license information:

@tensorflow-models/body-pix/dist/body-pix.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * =============================================================================
   *)
  (** @license See the LICENSE file. *)
*/
//# sourceMappingURL=@tensorflow-models_body-pix.js.map
