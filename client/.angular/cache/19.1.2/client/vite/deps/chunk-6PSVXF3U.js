import {
  OP_SCOPE_SUFFIX,
  Tensor,
  abs,
  acos,
  acosh,
  add,
  addN,
  all,
  any,
  argMax,
  argMin,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  avgPool,
  avgPool3d,
  basicLSTMCell,
  batchNorm,
  batchNorm2d,
  batchNorm3d,
  batchNorm4d,
  batchToSpaceND,
  bincount,
  bitwiseAnd,
  booleanMaskAsync,
  broadcastArgs,
  broadcastTo,
  buffer,
  cast,
  ceil,
  clipByValue,
  clone,
  complex,
  concat,
  concat1d,
  concat2d,
  concat3d,
  concat4d,
  conv1d,
  conv2d,
  conv2dTranspose,
  conv3d,
  conv3dTranspose,
  cos,
  cosh,
  cosineWindow,
  cumprod,
  cumsum,
  decodeWeightsStream,
  denseBincount,
  depthToSpace,
  depthwiseConv2d,
  diag,
  dilation2d,
  dispose,
  div,
  divNoNan,
  dot,
  dropout,
  einsum,
  elu,
  enclosingPowerOfTwo,
  ensureShape,
  env,
  equal,
  erf,
  euclideanNorm,
  exp,
  expandDims,
  expm1,
  eye,
  fft,
  fill,
  floor,
  floorDiv,
  fused_ops_exports,
  gather,
  gatherND,
  greater,
  greaterEqual,
  ifft,
  imag,
  image,
  inTopKAsync,
  io_exports,
  irfft,
  isFinite,
  isInf,
  isNaN,
  keep,
  leakyRelu,
  less,
  lessEqual,
  linalg,
  linspace,
  localResponseNormalization,
  log,
  log1p,
  logSigmoid,
  logSoftmax,
  logSumExp,
  logicalAnd,
  logicalNot,
  logicalOr,
  logicalXor,
  losses,
  lowerBound,
  matMul,
  max,
  maxPool,
  maxPool3d,
  maxPoolWithArgmax,
  maximum,
  mean,
  meshgrid,
  min,
  minimum,
  mirrorPad,
  mod,
  moments,
  movingAverage,
  mul,
  multiRNNCell,
  multinomial,
  neg,
  norm,
  notEqual,
  oneHot,
  ones,
  onesLike,
  op,
  outerProduct,
  pad,
  pad1d,
  pad2d,
  pad3d,
  pad4d,
  pool,
  pow,
  prelu,
  print,
  prod,
  raggedGather,
  raggedRange,
  raggedTensorToTensor,
  rand,
  randomGamma,
  randomNormal,
  randomStandardNormal,
  randomUniform,
  randomUniformInt,
  range,
  real,
  reciprocal,
  relu,
  relu6,
  reshape,
  reverse,
  reverse1d,
  reverse2d,
  reverse3d,
  reverse4d,
  rfft,
  round,
  rsqrt,
  scalar,
  scatterND,
  searchSorted,
  selu,
  separableConv2d,
  setdiff1dAsync,
  sigmoid,
  sign,
  signal,
  sin,
  sinh,
  slice,
  slice1d,
  slice2d,
  slice3d,
  slice4d,
  softmax,
  softplus,
  spaceToBatchND,
  sparse,
  sparseToDense,
  spectral,
  split,
  sqrt,
  square,
  squaredDifference,
  squeeze,
  stack,
  step,
  stridedSlice,
  string,
  sub,
  sum,
  tan,
  tanh,
  tensor,
  tensor1d,
  tensor2d,
  tensor3d,
  tensor4d,
  tensor5d,
  tensor6d,
  tensorScatterUpdate,
  tidy,
  tile,
  topk,
  transpose,
  truncatedNormal,
  unique,
  unsortedSegmentSum,
  unstack,
  upperBound,
  util_exports,
  variable,
  where,
  whereAsync,
  zeros,
  zerosLike
} from "./chunk-DZZSFJRK.js";
import {
  __async,
  __export
} from "./chunk-4MWRP73S.js";

// node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/register.js
var CUSTOM_OPS = {};
function registerOp(name, opFunc) {
  const opMapper = {
    tfOpName: name,
    category: "custom",
    inputs: [],
    attrs: [],
    customExecutor: opFunc
  };
  CUSTOM_OPS[name] = opMapper;
}
function getRegisteredOp(name) {
  return CUSTOM_OPS[name];
}
function deregisterOp(name) {
  delete CUSTOM_OPS[name];
}

// node_modules/@tensorflow/tfjs-converter/dist/data/compiled_api.js
var DataType;
(function(DataType2) {
  DataType2[DataType2["DT_INVALID"] = 0] = "DT_INVALID";
  DataType2[DataType2["DT_FLOAT"] = 1] = "DT_FLOAT";
  DataType2[DataType2["DT_DOUBLE"] = 2] = "DT_DOUBLE";
  DataType2[DataType2["DT_INT32"] = 3] = "DT_INT32";
  DataType2[DataType2["DT_UINT8"] = 4] = "DT_UINT8";
  DataType2[DataType2["DT_INT16"] = 5] = "DT_INT16";
  DataType2[DataType2["DT_INT8"] = 6] = "DT_INT8";
  DataType2[DataType2["DT_STRING"] = 7] = "DT_STRING";
  DataType2[DataType2["DT_COMPLEX64"] = 8] = "DT_COMPLEX64";
  DataType2[DataType2["DT_INT64"] = 9] = "DT_INT64";
  DataType2[DataType2["DT_BOOL"] = 10] = "DT_BOOL";
  DataType2[DataType2["DT_QINT8"] = 11] = "DT_QINT8";
  DataType2[DataType2["DT_QUINT8"] = 12] = "DT_QUINT8";
  DataType2[DataType2["DT_QINT32"] = 13] = "DT_QINT32";
  DataType2[DataType2["DT_BFLOAT16"] = 14] = "DT_BFLOAT16";
  DataType2[DataType2["DT_QINT16"] = 15] = "DT_QINT16";
  DataType2[DataType2["DT_QUINT16"] = 16] = "DT_QUINT16";
  DataType2[DataType2["DT_UINT16"] = 17] = "DT_UINT16";
  DataType2[DataType2["DT_COMPLEX128"] = 18] = "DT_COMPLEX128";
  DataType2[DataType2["DT_HALF"] = 19] = "DT_HALF";
  DataType2[DataType2["DT_RESOURCE"] = 20] = "DT_RESOURCE";
  DataType2[DataType2["DT_VARIANT"] = 21] = "DT_VARIANT";
  DataType2[DataType2["DT_UINT32"] = 22] = "DT_UINT32";
  DataType2[DataType2["DT_UINT64"] = 23] = "DT_UINT64";
  DataType2[DataType2["DT_FLOAT_REF"] = 101] = "DT_FLOAT_REF";
  DataType2[DataType2["DT_DOUBLE_REF"] = 102] = "DT_DOUBLE_REF";
  DataType2[DataType2["DT_INT32_REF"] = 103] = "DT_INT32_REF";
  DataType2[DataType2["DT_UINT8_REF"] = 104] = "DT_UINT8_REF";
  DataType2[DataType2["DT_INT16_REF"] = 105] = "DT_INT16_REF";
  DataType2[DataType2["DT_INT8_REF"] = 106] = "DT_INT8_REF";
  DataType2[DataType2["DT_STRING_REF"] = 107] = "DT_STRING_REF";
  DataType2[DataType2["DT_COMPLEX64_REF"] = 108] = "DT_COMPLEX64_REF";
  DataType2[DataType2["DT_INT64_REF"] = 109] = "DT_INT64_REF";
  DataType2[DataType2["DT_BOOL_REF"] = 110] = "DT_BOOL_REF";
  DataType2[DataType2["DT_QINT8_REF"] = 111] = "DT_QINT8_REF";
  DataType2[DataType2["DT_QUINT8_REF"] = 112] = "DT_QUINT8_REF";
  DataType2[DataType2["DT_QINT32_REF"] = 113] = "DT_QINT32_REF";
  DataType2[DataType2["DT_BFLOAT16_REF"] = 114] = "DT_BFLOAT16_REF";
  DataType2[DataType2["DT_QINT16_REF"] = 115] = "DT_QINT16_REF";
  DataType2[DataType2["DT_QUINT16_REF"] = 116] = "DT_QUINT16_REF";
  DataType2[DataType2["DT_UINT16_REF"] = 117] = "DT_UINT16_REF";
  DataType2[DataType2["DT_COMPLEX128_REF"] = 118] = "DT_COMPLEX128_REF";
  DataType2[DataType2["DT_HALF_REF"] = 119] = "DT_HALF_REF";
  DataType2[DataType2["DT_RESOURCE_REF"] = 120] = "DT_RESOURCE_REF";
  DataType2[DataType2["DT_VARIANT_REF"] = 121] = "DT_VARIANT_REF";
  DataType2[DataType2["DT_UINT32_REF"] = 122] = "DT_UINT32_REF";
  DataType2[DataType2["DT_UINT64_REF"] = 123] = "DT_UINT64_REF";
})(DataType || (DataType = {}));
var SaverDef;
(function(SaverDef2) {
  let CheckpointFormatVersion;
  (function(CheckpointFormatVersion2) {
    CheckpointFormatVersion2[CheckpointFormatVersion2["LEGACY"] = 0] = "LEGACY";
    CheckpointFormatVersion2[CheckpointFormatVersion2["V1"] = 1] = "V1";
    CheckpointFormatVersion2[CheckpointFormatVersion2["V2"] = 2] = "V2";
  })(CheckpointFormatVersion = SaverDef2.CheckpointFormatVersion || (SaverDef2.CheckpointFormatVersion = {}));
})(SaverDef || (SaverDef = {}));

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js
function getParamValue(paramName, node, tensorMap, context, resourceManager) {
  const inputParam = node.inputParams[paramName];
  if (inputParam && inputParam.inputIndexStart !== void 0) {
    const start = inputParam.inputIndexStart;
    const end = inputParam.inputIndexEnd === 0 ? void 0 : inputParam.inputIndexEnd === void 0 ? start + 1 : inputParam.inputIndexEnd;
    const shiftedStart = start < 0 ? node.inputNames.length + start : start;
    if (inputParam.type === "tensor") {
      return getTensor(node.inputNames[shiftedStart], tensorMap, context, resourceManager);
    }
    if (inputParam.type === "tensors") {
      const inputs = node.inputs.slice(start, end);
      const inputNames = node.inputNames.slice(start, end).filter((_name, index) => {
        var _a;
        return ((_a = inputs[index]) === null || _a === void 0 ? void 0 : _a.op) !== "NoOp";
      });
      return inputNames.map((name) => getTensor(name, tensorMap, context, resourceManager));
    }
    const tensor2 = getTensor(node.inputNames[shiftedStart], tensorMap, context, resourceManager);
    const data = tensor2.dataSync();
    return inputParam.type === "number" ? data[0] : util_exports.toNestedArray(tensor2.shape, data);
  }
  const attrParam = node.attrParams[paramName];
  return attrParam && attrParam.value;
}
function getTensor(name, tensorsMap, context, resourceManager) {
  const [nodeName, index] = parseNodeName(name, context);
  if (resourceManager != null) {
    const tensor2 = resourceManager.getHashTableHandleByName(nodeName);
    if (tensor2 != null) {
      return tensor2;
    }
  }
  const contextId = context.currentContextIds.find((contextId2) => {
    return !!tensorsMap[getNodeNameWithContextId(nodeName, contextId2)];
  });
  return contextId !== void 0 ? tensorsMap[getNodeNameWithContextId(nodeName, contextId)][index] : void 0;
}
function getTensorsForCurrentContext(name, tensorsMap, context) {
  return tensorsMap[getNodeNameWithContextId(name, context.currentContextId)];
}
function getNodeNameAndIndex(inputName, context) {
  const [nodeName, index, outputName] = parseNodeName(inputName, context);
  return [getNodeNameWithContextId(nodeName, context && context.currentContextId), index, outputName];
}
function getNodeNameWithContextId(name, contextId) {
  return !!contextId ? `${name}-${contextId}` : name;
}
function parseNodeName(name, context) {
  if (name === "") {
    return ["", 0, void 0];
  }
  const isCacheEnabled = context != null && context.parseNodeNameCache != null;
  if (isCacheEnabled) {
    const cachedResult = context.parseNodeNameCache.get(name);
    if (cachedResult != null) {
      return cachedResult;
    }
  }
  const parts = name.split(":");
  let result;
  if (parts.length === 1) {
    result = [name, 0, void 0];
  } else {
    const nodeName = parts[0];
    const outputName = parts.length === 3 ? parts[1] : void 0;
    const index = Number(parts[parts.length - 1]);
    result = [nodeName, index, outputName];
  }
  if (isCacheEnabled) {
    context.parseNodeNameCache.set(name, result);
  }
  return result;
}
function getPadding(node, tensorMap, context) {
  let pad2 = getParamValue("pad", node, tensorMap, context);
  if (pad2 === "explicit") {
    pad2 = getParamValue("explicitPaddings", node, tensorMap, context);
    const explicitPadding = [[0, 0], [0, 0], [0, 0], [0, 0]];
    for (let i = 0; i < 4; i++) {
      explicitPadding[i][0] = pad2[i * 2];
      explicitPadding[i][1] = pad2[i * 2 + 1];
    }
    return explicitPadding;
  }
  return pad2;
}
function cloneTensor(tensor2) {
  return tensor2.kept ? tensor2 : clone(tensor2);
}

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/arithmetic.js
var arithmetic_exports = {};
__export(arithmetic_exports, {
  json: () => json
});
var json = [{
  "tfOpName": "Add",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "AddV2",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "AddN",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "end": 0,
    "name": "tensors",
    "type": "tensors"
  }]
}, {
  "tfOpName": "BiasAdd",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }]
}, {
  "tfOpName": "Sub",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "RealDiv",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Div",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "DivNoNan",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "FloorDiv",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Mul",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Maximum",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Minimum",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Pow",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "SquaredDifference",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Mod",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "FloorMod",
  "category": "arithmetic",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/basic_math.js
var basic_math_exports = {};
__export(basic_math_exports, {
  json: () => json2
});
var json2 = [{
  "tfOpName": "Abs",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Acos",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Asin",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Atan",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Atan2",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "y",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Ceil",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "ClipByValue",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "clipValueMin",
    "type": "number"
  }, {
    "start": 2,
    "name": "clipValueMax",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Complex",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "real",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "imag",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "ComplexAbs",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Cos",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Cosh",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Elu",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Exp",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Floor",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Log",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Imag",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "Tout",
    "name": "outputType",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Neg",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Real",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "Tout",
    "name": "outputType",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Prelu",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "alpha",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Relu",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Relu6",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Selu",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Sigmoid",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Sin",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Sinh",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Sqrt",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Rsqrt",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Square",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Tan",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Tanh",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Sign",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Round",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Expm1",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Log1p",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Reciprocal",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Softplus",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Asinh",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Acosh",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Atanh",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Erf",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LeakyRelu",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "alpha",
    "name": "alpha",
    "type": "number",
    "defaultValue": 0.2
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "IsNan",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "IsFinite",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "IsInf",
  "category": "basic_math",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/control.js
var control_exports = {};
__export(control_exports, {
  json: () => json3
});
var json3 = [{
  "tfOpName": "EmptyTensorList",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "elementShape",
    "type": "shape"
  }, {
    "start": 1,
    "name": "maxNumElements",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "LoopCond",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "pred",
    "type": "tensor"
  }]
}, {
  "tfOpName": "Switch",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "data",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "pred",
    "type": "tensor"
  }]
}, {
  "tfOpName": "Merge",
  "category": "control",
  "inputs": [{
    "start": 0,
    "end": 0,
    "name": "tensors",
    "type": "tensors"
  }]
}, {
  "tfOpName": "Enter",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "frame_name",
    "name": "frameName",
    "type": "string"
  }, {
    "tfName": "is_constant",
    "name": "isConstant",
    "type": "bool"
  }]
}, {
  "tfOpName": "Exit",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "NextIteration",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "TensorArrayV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "size",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }, {
    "tfName": "element_shape",
    "name": "elementShape",
    "type": "shape"
  }, {
    "tfName": "dynamic_size",
    "name": "dynamicSize",
    "type": "bool"
  }, {
    "tfName": "clear_after_read",
    "name": "clearAfterRead",
    "type": "bool"
  }, {
    "tfName": "identical_element_shapes",
    "name": "identicalElementShapes",
    "type": "bool"
  }, {
    "tfName": "tensor_array_name",
    "name": "name",
    "type": "string"
  }]
}, {
  "tfOpName": "TensorArrayWriteV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorArrayId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "index",
    "type": "number"
  }, {
    "start": 2,
    "name": "tensor",
    "type": "tensor"
  }, {
    "start": 3,
    "name": "flowIn",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "TensorArrayReadV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorArrayId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "index",
    "type": "number"
  }, {
    "start": 2,
    "name": "flowIn",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "TensorArrayGatherV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorArrayId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "flowIn",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }, {
    "tfName": "element_shape",
    "name": "elementShape",
    "type": "shape"
  }]
}, {
  "tfOpName": "TensorArrayScatterV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorArrayId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "tensor",
    "type": "tensor"
  }, {
    "start": 3,
    "name": "flowIn",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorArrayConcatV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorArrayId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "flowIn",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }, {
    "tfName": "element_shape_except0",
    "name": "elementShapeExcept0",
    "type": "shape",
    "notSupported": true
  }]
}, {
  "tfOpName": "TensorArraySplitV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorArrayId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "tensor",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "lengths",
    "type": "number[]"
  }, {
    "start": 3,
    "name": "flowIn",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorArraySizeV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorArrayId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "flowIn",
    "type": "number"
  }]
}, {
  "tfOpName": "TensorArrayCloseV3",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorArrayId",
    "type": "tensor"
  }]
}, {
  "tfOpName": "StatelessIf",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "cond",
    "type": "tensor"
  }, {
    "start": 1,
    "end": 0,
    "name": "args",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "then_branch",
    "name": "thenBranch",
    "type": "func"
  }, {
    "tfName": "else_branch",
    "name": "elseBranch",
    "type": "func"
  }]
}, {
  "tfOpName": "If",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "cond",
    "type": "tensor"
  }, {
    "start": 1,
    "end": 0,
    "name": "args",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "then_branch",
    "name": "thenBranch",
    "type": "func"
  }, {
    "tfName": "else_branch",
    "name": "elseBranch",
    "type": "func"
  }]
}, {
  "tfOpName": "StatelessWhile",
  "category": "control",
  "inputs": [{
    "start": 0,
    "end": 0,
    "name": "args",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "cond",
    "name": "cond",
    "type": "func"
  }, {
    "tfName": "body",
    "name": "body",
    "type": "func"
  }]
}, {
  "tfOpName": "While",
  "category": "control",
  "inputs": [{
    "start": 0,
    "end": 0,
    "name": "args",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "cond",
    "name": "cond",
    "type": "func"
  }, {
    "tfName": "body",
    "name": "body",
    "type": "func"
  }]
}, {
  "tfOpName": "TensorListScatter",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "elementShape",
    "type": "shape"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListScatterV2",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "elementShape",
    "type": "shape"
  }, {
    "start": 3,
    "name": "numElements",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListGather",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "elementShape",
    "type": "shape"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListGetItem",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "index",
    "type": "number"
  }, {
    "start": 2,
    "name": "elementShape",
    "type": "shape"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListSetItem",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "index",
    "type": "number"
  }, {
    "start": 2,
    "name": "tensor",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListReserve",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "elementShape",
    "type": "shape"
  }, {
    "start": 1,
    "name": "numElements",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListFromTensor",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "elementShape",
    "type": "shape"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListStack",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "elementShape",
    "type": "shape"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }, {
    "tfName": "num_elements",
    "name": "numElements",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListSplit",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "elementShape",
    "type": "shape"
  }, {
    "start": 2,
    "name": "lengths",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListConcat",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "element_shape",
    "name": "elementShape",
    "type": "shape"
  }, {
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListConcatV2",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "element_shape",
    "name": "elementShape",
    "type": "shape"
  }, {
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListPopBack",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "elementShape",
    "type": "shape"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListPushBack",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "tensor",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "element_dtype",
    "name": "elementDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TensorListLength",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }]
}, {
  "tfOpName": "TensorListResize",
  "category": "control",
  "inputs": [{
    "start": 0,
    "name": "tensorListId",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "size",
    "type": "number"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/convolution.js
var convolution_exports = {};
__export(convolution_exports, {
  json: () => json4
});
var json4 = [{
  "tfOpName": "AvgPool",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }, {
    "tfName": "ksize",
    "name": "kernelSize",
    "type": "number[]"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "MaxPool",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }, {
    "tfName": "ksize",
    "name": "kernelSize",
    "type": "number[]"
  }, {
    "tfName": "explicit_paddings",
    "name": "explicitPaddings",
    "type": "number[]",
    "defaultValue": [],
    "notSupported": true
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "MaxPoolWithArgmax",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "ksize",
    "name": "kernelSize",
    "type": "number[]"
  }, {
    "tfName": "include_batch_in_index",
    "name": "includeBatchInIndex",
    "type": "bool"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "AvgPool3D",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }, {
    "tfName": "ksize",
    "name": "kernelSize",
    "type": "number[]"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "MaxPool3D",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }, {
    "tfName": "ksize",
    "name": "kernelSize",
    "type": "number[]"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Conv1D",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "stride",
    "name": "stride",
    "type": "number"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "defaultValue": "NWC"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "dilation",
    "name": "dilation",
    "type": "number",
    "defaultValue": 1
  }]
}, {
  "tfOpName": "Conv2D",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "useCudnnOnGpu",
    "name": "useCudnnOnGpu",
    "type": "bool"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "defaultValue": "NHWC"
  }, {
    "tfName": "explicit_paddings",
    "name": "explicitPaddings",
    "type": "number[]",
    "defaultValue": []
  }, {
    "tfName": "dilations",
    "name": "dilations",
    "type": "number[]"
  }]
}, {
  "tfOpName": "_FusedConv2D",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }, {
    "start": 2,
    "end": 0,
    "name": "args",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "num_args",
    "name": "numArgs",
    "type": "number"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "explicit_paddings",
    "name": "explicitPaddings",
    "type": "number[]",
    "defaultValue": []
  }, {
    "tfName": "use_cudnn_on_gpu",
    "name": "useCudnnOnGpu",
    "type": "bool",
    "defaultValue": true
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "defaultValue": "NHWC"
  }, {
    "tfName": "dilations",
    "name": "dilations",
    "type": "number[]",
    "defaultValue": [1, 1, 1, 1]
  }, {
    "tfName": "fused_ops",
    "name": "fusedOps",
    "type": "string[]",
    "defaultValue": []
  }, {
    "tfName": "epsilon",
    "name": "epsilon",
    "type": "number",
    "defaultValue": 1e-4
  }, {
    "tfName": "leakyrelu_alpha",
    "name": "leakyreluAlpha",
    "type": "number",
    "defaultValue": 0.2
  }]
}, {
  "tfOpName": "Conv2DBackpropInput",
  "category": "convolution",
  "inputs": [{
    "start": 2,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }, {
    "start": 0,
    "name": "outputShape",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }, {
    "tfName": "explicit_paddings",
    "name": "explicitPaddings",
    "type": "number[]",
    "defaultValue": []
  }, {
    "tfName": "dilations",
    "name": "dilations",
    "type": "number[]",
    "notSupported": true
  }]
}, {
  "tfOpName": "DepthwiseConv2d",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "input",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "defaultValue": "NHWC"
  }, {
    "tfName": "explicit_paddings",
    "name": "explicitPaddings",
    "type": "number[]",
    "defaultValue": []
  }, {
    "tfName": "dilations",
    "name": "dilations",
    "type": "number[]"
  }]
}, {
  "tfOpName": "DepthwiseConv2dNative",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "input",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "defaultValue": "NHWC"
  }, {
    "tfName": "explicit_paddings",
    "name": "explicitPaddings",
    "type": "number[]",
    "defaultValue": []
  }, {
    "tfName": "dilations",
    "name": "dilations",
    "type": "number[]"
  }]
}, {
  "tfOpName": "FusedDepthwiseConv2dNative",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }, {
    "start": 2,
    "end": 0,
    "name": "args",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "num_args",
    "name": "numArgs",
    "type": "number"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "defaultValue": "NHWC"
  }, {
    "tfName": "dilations",
    "name": "dilations",
    "type": "number[]",
    "defaultValue": [1, 1, 1, 1]
  }, {
    "tfName": "fused_ops",
    "name": "fusedOps",
    "type": "string[]",
    "defaultValue": []
  }, {
    "tfName": "explicit_paddings",
    "name": "explicitPaddings",
    "type": "number[]",
    "defaultValue": []
  }]
}, {
  "tfOpName": "Conv3D",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "defaultValue": "NHWC"
  }, {
    "tfName": "dilations",
    "name": "dilations",
    "type": "number[]"
  }]
}, {
  "tfOpName": "Dilation2D",
  "category": "convolution",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "filter",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "strides",
    "name": "strides",
    "type": "number[]"
  }, {
    "tfName": "rates",
    "name": "dilations",
    "type": "number[]"
  }, {
    "tfName": "padding",
    "name": "pad",
    "type": "string"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/creation.js
var creation_exports = {};
__export(creation_exports, {
  json: () => json5
});
var json5 = [{
  "tfOpName": "Fill",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "shape",
    "type": "number[]"
  }, {
    "start": 1,
    "name": "value",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "LinSpace",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "start",
    "type": "number"
  }, {
    "start": 1,
    "name": "stop",
    "type": "number"
  }, {
    "start": 2,
    "name": "num",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "OneHot",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "indices",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "depth",
    "type": "number"
  }, {
    "start": 2,
    "name": "onValue",
    "type": "number",
    "defaultValue": 1
  }, {
    "start": 3,
    "name": "offValue",
    "type": "number",
    "defaultValue": 0
  }],
  "attrs": [{
    "tfName": "axis",
    "name": "axis",
    "type": "number",
    "notSupported": true
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "Ones",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "shape",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "OnesLike",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "RandomStandardNormal",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "shape",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "seed",
    "name": "seed",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "seed2",
    "name": "seed2",
    "type": "number",
    "defaultValue": 0,
    "notSupported": true
  }, {
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }, {
    "tfName": "T",
    "name": "T",
    "type": "number",
    "notSupported": true
  }]
}, {
  "tfOpName": "RandomUniform",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "shape",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "minval",
    "name": "minval",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "maxval",
    "name": "maxval",
    "type": "number",
    "defaultValue": 1
  }, {
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }, {
    "tfName": "seed",
    "name": "seed",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "seed2",
    "name": "seed2",
    "type": "number",
    "defaultValue": 0,
    "notSupported": true
  }, {
    "tfName": "T",
    "name": "T",
    "type": "number",
    "notSupported": true
  }]
}, {
  "tfOpName": "RandomUniformInt",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "shape",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "minval",
    "name": "minval",
    "type": "number"
  }, {
    "tfName": "maxval",
    "name": "maxval",
    "type": "number"
  }, {
    "tfName": "seed",
    "name": "seed",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "seed2",
    "name": "seed2",
    "type": "number",
    "defaultValue": 0,
    "notSupported": true
  }]
}, {
  "tfOpName": "Range",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "start",
    "type": "number"
  }, {
    "start": 1,
    "name": "stop",
    "type": "number"
  }, {
    "start": 2,
    "name": "step",
    "type": "number",
    "defaultValue": 0
  }],
  "attrs": [{
    "tfName": "Tidx",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "TruncatedNormal",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "shape",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "means",
    "name": "mean",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "stddev",
    "name": "stdDev",
    "type": "number",
    "defaultValue": 1
  }, {
    "tfName": "seed",
    "name": "seed",
    "type": "number"
  }, {
    "tfName": "seed2",
    "name": "seed2",
    "type": "number",
    "defaultValue": 0,
    "notSupported": true
  }, {
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }, {
    "tfName": "T",
    "name": "T",
    "type": "number",
    "notSupported": true
  }]
}, {
  "tfOpName": "Zeros",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "shape",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "ZerosLike",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "Multinomial",
  "category": "creation",
  "inputs": [{
    "start": 0,
    "name": "logits",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "numSamples",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "seed",
    "name": "seed",
    "type": "number"
  }, {
    "tfName": "seed2",
    "name": "seed2",
    "type": "number"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }, {
    "tfName": "output_dtype",
    "name": "output_dtype",
    "type": "dtype"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/dynamic.js
var dynamic_exports = {};
__export(dynamic_exports, {
  json: () => json6
});
var json6 = [{
  "tfOpName": "NonMaxSuppressionV2",
  "category": "dynamic",
  "inputs": [{
    "start": 0,
    "name": "boxes",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "scores",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "maxOutputSize",
    "type": "number"
  }, {
    "start": 3,
    "name": "iouThreshold",
    "type": "number"
  }]
}, {
  "tfOpName": "NonMaxSuppressionV3",
  "category": "dynamic",
  "inputs": [{
    "start": 0,
    "name": "boxes",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "scores",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "maxOutputSize",
    "type": "number"
  }, {
    "start": 3,
    "name": "iouThreshold",
    "type": "number"
  }, {
    "start": 4,
    "name": "scoreThreshold",
    "type": "number"
  }]
}, {
  "tfOpName": "NonMaxSuppressionV4",
  "category": "dynamic",
  "inputs": [{
    "start": 0,
    "name": "boxes",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "scores",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "maxOutputSize",
    "type": "number"
  }, {
    "start": 3,
    "name": "iouThreshold",
    "type": "number"
  }, {
    "start": 4,
    "name": "scoreThreshold",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "T_threshold",
    "name": "threshold",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "pad_to_max_output_size",
    "name": "padToMaxOutputSize",
    "type": "bool"
  }]
}, {
  "tfOpName": "NonMaxSuppressionV5",
  "category": "dynamic",
  "inputs": [{
    "start": 0,
    "name": "boxes",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "scores",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "maxOutputSize",
    "type": "number"
  }, {
    "start": 3,
    "name": "iouThreshold",
    "type": "number"
  }, {
    "start": 4,
    "name": "scoreThreshold",
    "type": "number"
  }, {
    "start": 5,
    "name": "softNmsSigma",
    "type": "number"
  }]
}, {
  "tfOpName": "Where",
  "category": "dynamic",
  "inputs": [{
    "start": 0,
    "name": "condition",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "ListDiff",
  "category": "dynamic",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "y",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/evaluation.js
var evaluation_exports = {};
__export(evaluation_exports, {
  json: () => json7
});
var json7 = [{
  "tfOpName": "LowerBound",
  "category": "evaluation",
  "inputs": [{
    "start": 0,
    "name": "sortedSequence",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "values",
    "type": "tensor"
  }]
}, {
  "tfOpName": "TopKV2",
  "category": "evaluation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "k",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "sorted",
    "name": "sorted",
    "type": "bool"
  }]
}, {
  "tfOpName": "UpperBound",
  "category": "evaluation",
  "inputs": [{
    "start": 0,
    "name": "sortedSequence",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "values",
    "type": "tensor"
  }]
}, {
  "tfOpName": "Unique",
  "category": "evaluation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "UniqueV2",
  "category": "evaluation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/graph.js
var graph_exports = {};
__export(graph_exports, {
  json: () => json8
});
var json8 = [{
  "tfOpName": "PlaceholderWithDefault",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "default",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "shape",
    "name": "shape",
    "type": "shape"
  }, {
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "Placeholder",
  "category": "graph",
  "attrs": [{
    "tfName": "shape",
    "name": "shape",
    "type": "shape"
  }, {
    "tfName": "dtype",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "Const",
  "category": "graph"
}, {
  "tfOpName": "Identity",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "IdentityN",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "end": 0,
    "name": "x",
    "type": "tensors"
  }]
}, {
  "tfOpName": "Snapshot",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "Rank",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "Size",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "Shape",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "ShapeN",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "end": 0,
    "name": "x",
    "type": "tensors"
  }]
}, {
  "tfOpName": "Print",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "data",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "message",
    "name": "message",
    "type": "string"
  }, {
    "tfName": "first_n",
    "name": "firstN",
    "type": "number",
    "notSupported": true
  }, {
    "tfName": "summarize",
    "name": "summarize",
    "type": "number",
    "defaultValue": 3
  }]
}, {
  "tfOpName": "NoOp",
  "category": "graph",
  "inputs": []
}, {
  "tfOpName": "StopGradient",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "FakeQuantWithMinMaxVars",
  "category": "graph",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "min",
    "name": "min",
    "type": "number"
  }, {
    "tfName": "max",
    "name": "max",
    "type": "number"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/hash_table.js
var hash_table_exports = {};
__export(hash_table_exports, {
  json: () => json9
});
var json9 = [{
  "tfOpName": "HashTable",
  "category": "hash_table",
  "inputs": [],
  "attrs": [{
    "tfName": "shared_name",
    "name": "sharedName",
    "type": "string"
  }, {
    "tfName": "use_node_name_sharing",
    "name": "useNodeNameSharing",
    "type": "bool"
  }, {
    "tfName": "key_dtype",
    "name": "keyDType",
    "type": "dtype"
  }, {
    "tfName": "value_dtype",
    "name": "valueDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "HashTableV2",
  "category": "hash_table",
  "inputs": [],
  "attrs": [{
    "tfName": "shared_name",
    "name": "sharedName",
    "type": "string"
  }, {
    "tfName": "use_node_name_sharing",
    "name": "useNodeNameSharing",
    "type": "bool"
  }, {
    "tfName": "key_dtype",
    "name": "keyDType",
    "type": "dtype"
  }, {
    "tfName": "value_dtype",
    "name": "valueDType",
    "type": "dtype"
  }]
}, {
  "tfOpName": "LookupTableImport",
  "category": "hash_table",
  "inputs": [{
    "start": 0,
    "name": "tableHandle",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "keys",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "values",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "Tin",
    "name": "tIn",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "Tout",
    "name": "tOut",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LookupTableImportV2",
  "category": "hash_table",
  "inputs": [{
    "start": 0,
    "name": "tableHandle",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "keys",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "values",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "Tin",
    "name": "tIn",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "Tout",
    "name": "tOut",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LookupTableFind",
  "category": "hash_table",
  "inputs": [{
    "start": 0,
    "name": "tableHandle",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "keys",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "defaultValue",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "Tin",
    "name": "tIn",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "Tout",
    "name": "tOut",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LookupTableFindV2",
  "category": "hash_table",
  "inputs": [{
    "start": 0,
    "name": "tableHandle",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "keys",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "defaultValue",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "Tin",
    "name": "tIn",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "Tout",
    "name": "tOut",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LookupTableSize",
  "category": "hash_table",
  "inputs": [{
    "start": 0,
    "name": "tableHandle",
    "type": "tensor"
  }]
}, {
  "tfOpName": "LookupTableSizeV2",
  "category": "hash_table",
  "inputs": [{
    "start": 0,
    "name": "tableHandle",
    "type": "tensor"
  }]
}, {
  "tfOpName": "InitializeTable",
  "category": "hash_table",
  "inputs": [{
    "start": 0,
    "name": "tableHandle",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "keys",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "values",
    "type": "tensor"
  }]
}, {
  "tfOpName": "InitializeTableV2",
  "category": "hash_table",
  "inputs": [{
    "start": 0,
    "name": "tableHandle",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "keys",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "values",
    "type": "tensor"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/image.js
var image_exports = {};
__export(image_exports, {
  json: () => json10
});
var json10 = [{
  "tfOpName": "ResizeBilinear",
  "category": "image",
  "inputs": [{
    "start": 0,
    "name": "images",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "size",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "align_corners",
    "name": "alignCorners",
    "type": "bool"
  }, {
    "tfName": "half_pixel_centers",
    "name": "halfPixelCenters",
    "type": "bool"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "ResizeNearestNeighbor",
  "category": "image",
  "inputs": [{
    "start": 0,
    "name": "images",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "size",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "align_corners",
    "name": "alignCorners",
    "type": "bool"
  }, {
    "tfName": "half_pixel_centers",
    "name": "halfPixelCenters",
    "type": "bool"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "CropAndResize",
  "category": "image",
  "inputs": [{
    "start": 0,
    "name": "image",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "boxes",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "boxInd",
    "type": "tensor"
  }, {
    "start": 3,
    "name": "cropSize",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "method",
    "name": "method",
    "type": "string"
  }, {
    "tfName": "extrapolation_value",
    "name": "extrapolationValue",
    "type": "number"
  }]
}, {
  "tfOpName": "ImageProjectiveTransformV3",
  "category": "image",
  "inputs": [{
    "start": 0,
    "name": "images",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "transforms",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "outputShape",
    "type": "number[]"
  }, {
    "start": 3,
    "name": "fillValue",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "interpolation",
    "name": "interpolation",
    "type": "string"
  }, {
    "tfName": "fill_mode",
    "name": "fillMode",
    "type": "string"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/logical.js
var logical_exports = {};
__export(logical_exports, {
  json: () => json11
});
var json11 = [{
  "tfOpName": "Equal",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "NotEqual",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Greater",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "GreaterEqual",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Less",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LessEqual",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LogicalAnd",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LogicalNot",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "LogicalOr",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Select",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "condition",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "SelectV2",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "condition",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "BitwiseAnd",
  "category": "logical",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "y",
    "type": "tensor"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/matrices.js
var matrices_exports = {};
__export(matrices_exports, {
  json: () => json12
});
var json12 = [{
  "tfOpName": "_FusedMatMul",
  "category": "matrices",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }, {
    "start": 2,
    "end": 0,
    "name": "args",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "num_args",
    "name": "numArgs",
    "type": "number"
  }, {
    "tfName": "fused_ops",
    "name": "fusedOps",
    "type": "string[]",
    "defaultValue": []
  }, {
    "tfName": "epsilon",
    "name": "epsilon",
    "type": "number",
    "defaultValue": 1e-4
  }, {
    "tfName": "transpose_a",
    "name": "transposeA",
    "type": "bool",
    "defaultValue": false
  }, {
    "tfName": "transpose_b",
    "name": "transposeB",
    "type": "bool",
    "defaultValue": false
  }, {
    "tfName": "leakyrelu_alpha",
    "name": "leakyreluAlpha",
    "type": "number",
    "defaultValue": 0.2
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "MatMul",
  "category": "matrices",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "transpose_a",
    "name": "transposeA",
    "type": "bool",
    "defaultValue": false
  }, {
    "tfName": "transpose_b",
    "name": "transposeB",
    "type": "bool",
    "defaultValue": false
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "BatchMatMul",
  "category": "matrices",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "adj_x",
    "name": "transposeA",
    "type": "bool",
    "defaultValue": false
  }, {
    "tfName": "adj_y",
    "name": "transposeB",
    "type": "bool",
    "defaultValue": false
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "BatchMatMulV2",
  "category": "matrices",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "b",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "adj_x",
    "name": "transposeA",
    "type": "bool",
    "defaultValue": false
  }, {
    "tfName": "adj_y",
    "name": "transposeB",
    "type": "bool",
    "defaultValue": false
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Transpose",
  "category": "matrices",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "perm",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Einsum",
  "category": "matrices",
  "inputs": [{
    "start": 0,
    "end": 0,
    "name": "tensors",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "equation",
    "name": "equation",
    "type": "string"
  }, {
    "tfName": "N",
    "name": "n",
    "type": "number",
    "defaultValue": 2
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "MatrixBandPart",
  "category": "matrices",
  "inputs": [{
    "start": 0,
    "name": "a",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "numLower",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "numUpper",
    "type": "tensor"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/normalization.js
var normalization_exports = {};
__export(normalization_exports, {
  json: () => json13
});
var json13 = [{
  "tfOpName": "EuclideanNorm",
  "category": "normalization",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "keep_dims",
    "name": "keepDims",
    "type": "bool",
    "defaultValue": false
  }]
}, {
  "tfOpName": "FusedBatchNorm",
  "category": "normalization",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "scale",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "offset",
    "type": "tensor"
  }, {
    "start": 3,
    "name": "mean",
    "type": "tensor"
  }, {
    "start": 4,
    "name": "variance",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "epsilon",
    "name": "epsilon",
    "type": "number",
    "defaultValue": 1e-3
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }]
}, {
  "tfOpName": "FusedBatchNormV2",
  "category": "normalization",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "scale",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "offset",
    "type": "tensor"
  }, {
    "start": 3,
    "name": "mean",
    "type": "tensor"
  }, {
    "start": 4,
    "name": "variance",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "epsilon",
    "name": "epsilon",
    "type": "number",
    "defaultValue": 1e-3
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }]
}, {
  "tfOpName": "FusedBatchNormV3",
  "category": "normalization",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "scale",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "offset",
    "type": "tensor"
  }, {
    "start": 3,
    "name": "mean",
    "type": "tensor"
  }, {
    "start": 4,
    "name": "variance",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "epsilon",
    "name": "epsilon",
    "type": "number",
    "defaultValue": 1e-3
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string",
    "notSupported": true
  }]
}, {
  "tfOpName": "LRN",
  "category": "normalization",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "depth_radius",
    "name": "radius",
    "type": "number",
    "defaultValue": 5
  }, {
    "tfName": "bias",
    "name": "bias",
    "type": "number",
    "defaultValue": 1
  }, {
    "tfName": "alpha",
    "name": "alpha",
    "type": "number",
    "defaultValue": 1
  }, {
    "tfName": "beta",
    "name": "beta",
    "type": "number",
    "defaultValue": 0.5
  }]
}, {
  "tfOpName": "Softmax",
  "category": "normalization",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "LogSoftmax",
  "category": "normalization",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/reduction.js
var reduction_exports = {};
__export(reduction_exports, {
  json: () => json14
});
var json14 = [{
  "tfOpName": "Bincount",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "size",
    "type": "number"
  }, {
    "start": 2,
    "name": "weights",
    "type": "tensor"
  }]
}, {
  "tfOpName": "DenseBincount",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "size",
    "type": "number"
  }, {
    "start": 2,
    "name": "weights",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "binary_output",
    "name": "binaryOutput",
    "type": "bool"
  }]
}, {
  "tfOpName": "Max",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "keep_dims",
    "name": "keepDims",
    "type": "bool"
  }]
}, {
  "tfOpName": "Mean",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "keep_dims",
    "name": "keepDims",
    "type": "bool"
  }]
}, {
  "tfOpName": "Min",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "keep_dims",
    "name": "keepDims",
    "type": "bool"
  }]
}, {
  "tfOpName": "Sum",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "keep_dims",
    "name": "keepDims",
    "type": "bool"
  }]
}, {
  "tfOpName": "All",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "keep_dims",
    "name": "keepDims",
    "type": "bool"
  }]
}, {
  "tfOpName": "Any",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "keep_dims",
    "name": "keepDims",
    "type": "bool"
  }]
}, {
  "tfOpName": "ArgMax",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number"
  }]
}, {
  "tfOpName": "ArgMin",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number"
  }]
}, {
  "tfOpName": "Prod",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "keep_dims",
    "name": "keepDims",
    "type": "bool"
  }, {
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "Cumprod",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "exclusive",
    "name": "exclusive",
    "type": "bool"
  }, {
    "tfName": "reverse",
    "name": "reverse",
    "type": "bool"
  }]
}, {
  "tfOpName": "Cumsum",
  "category": "reduction",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "exclusive",
    "name": "exclusive",
    "type": "bool"
  }, {
    "tfName": "reverse",
    "name": "reverse",
    "type": "bool"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/slice_join.js
var slice_join_exports = {};
__export(slice_join_exports, {
  json: () => json15
});
var json15 = [{
  "tfOpName": "ConcatV2",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "end": -1,
    "name": "tensors",
    "type": "tensors"
  }, {
    "start": -1,
    "name": "axis",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "N",
    "name": "n",
    "type": "number",
    "defaultValue": 2
  }]
}, {
  "tfOpName": "Concat",
  "category": "slice_join",
  "inputs": [{
    "start": 1,
    "end": 0,
    "name": "tensors",
    "type": "tensors"
  }, {
    "start": 0,
    "name": "axis",
    "type": "number"
  }],
  "attrs": [{
    "tfName": "N",
    "name": "n",
    "type": "number",
    "defaultValue": 2
  }]
}, {
  "tfOpName": "GatherV2",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "axis",
    "type": "number",
    "defaultValue": 0
  }],
  "attrs": [{
    "tfName": "batch_dims",
    "name": "batchDims",
    "type": "number",
    "defaultValue": 0
  }]
}, {
  "tfOpName": "Gather",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "validate_indices",
    "name": "validateIndices",
    "type": "bool",
    "notSupported": true
  }]
}, {
  "tfOpName": "Reverse",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "dims",
    "type": "bool[]"
  }]
}, {
  "tfOpName": "ReverseV2",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number[]"
  }]
}, {
  "tfOpName": "Slice",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "begin",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "size",
    "type": "number[]"
  }]
}, {
  "tfOpName": "StridedSlice",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "begin",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "end",
    "type": "number[]"
  }, {
    "start": 3,
    "name": "strides",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "begin_mask",
    "name": "beginMask",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "end_mask",
    "name": "endMask",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "new_axis_mask",
    "name": "newAxisMask",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "ellipsis_mask",
    "name": "ellipsisMask",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "shrink_axis_mask",
    "name": "shrinkAxisMask",
    "type": "number",
    "defaultValue": 0
  }]
}, {
  "tfOpName": "Pack",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "end": 0,
    "name": "tensors",
    "type": "tensors"
  }],
  "attrs": [{
    "tfName": "axis",
    "name": "axis",
    "type": "number",
    "defaultValue": 0
  }]
}, {
  "tfOpName": "Unpack",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "axis",
    "name": "axis",
    "type": "number",
    "defaultValue": 0
  }, {
    "tfName": "num",
    "name": "num",
    "type": "number",
    "defaultValue": 0,
    "notSupported": true
  }]
}, {
  "tfOpName": "Tile",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "reps",
    "type": "number[]"
  }]
}, {
  "tfOpName": "Split",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "axis",
    "type": "number",
    "defaultValue": 0
  }, {
    "start": 1,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "num_split",
    "name": "numOrSizeSplits",
    "type": "number",
    "defaultValue": 1
  }]
}, {
  "tfOpName": "SplitV",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "numOrSizeSplits",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "axis",
    "type": "number",
    "defaultValue": 0
  }]
}, {
  "tfOpName": "ScatterNd",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "indices",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "values",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "shape",
    "type": "number[]"
  }]
}, {
  "tfOpName": "GatherNd",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "tensor"
  }]
}, {
  "tfOpName": "SparseToDense",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "sparseIndices",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "outputShape",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "sparseValues",
    "type": "tensor"
  }, {
    "start": 3,
    "name": "defaultValue",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "validate_indices",
    "name": "validateIndices",
    "type": "bool",
    "defaultValue": false,
    "notSupported": true
  }]
}, {
  "tfOpName": "TensorScatterUpdate",
  "category": "slice_join",
  "inputs": [{
    "start": 0,
    "name": "tensor",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "values",
    "type": "tensor"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/sparse.js
var sparse_exports = {};
__export(sparse_exports, {
  json: () => json16
});
var json16 = [{
  "tfOpName": "SparseFillEmptyRows",
  "category": "sparse",
  "inputs": [{
    "start": 0,
    "name": "indices",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "values",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "denseShape",
    "type": "tensor"
  }, {
    "start": 3,
    "name": "defaultValue",
    "type": "tensor"
  }]
}, {
  "tfOpName": "SparseReshape",
  "category": "sparse",
  "inputs": [{
    "start": 0,
    "name": "inputIndices",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "inputShape",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "newShape",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "T",
    "name": "dtype",
    "type": "dtype",
    "notSupported": true
  }]
}, {
  "tfOpName": "SparseSegmentMean",
  "category": "sparse",
  "inputs": [{
    "start": 0,
    "name": "data",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "segmentIds",
    "type": "tensor"
  }]
}, {
  "tfOpName": "SparseSegmentSum",
  "category": "sparse",
  "inputs": [{
    "start": 0,
    "name": "data",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "indices",
    "type": "tensor"
  }, {
    "start": 2,
    "name": "segmentIds",
    "type": "tensor"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/spectral.js
var spectral_exports = {};
__export(spectral_exports, {
  json: () => json17
});
var json17 = [{
  "tfOpName": "FFT",
  "category": "spectral",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "IFFT",
  "category": "spectral",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }]
}, {
  "tfOpName": "RFFT",
  "category": "spectral",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "fft_length",
    "type": "number",
    "notSupported": true
  }]
}, {
  "tfOpName": "IRFFT",
  "category": "spectral",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "fft_length",
    "type": "number",
    "notSupported": true
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/string.js
var string_exports = {};
__export(string_exports, {
  json: () => json18
});
var json18 = [{
  "tfOpName": "StaticRegexReplace",
  "category": "string",
  "inputs": [{
    "start": 0,
    "name": "input",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "pattern",
    "name": "pattern",
    "type": "string"
  }, {
    "tfName": "rewrite",
    "name": "rewrite",
    "type": "string"
  }, {
    "tfName": "replace_global",
    "name": "replaceGlobal",
    "type": "bool"
  }]
}, {
  "tfOpName": "StringNGrams",
  "category": "string",
  "inputs": [{
    "start": 0,
    "name": "data",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "dataSplits",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "separator",
    "name": "separator",
    "type": "string"
  }, {
    "tfName": "ngram_widths",
    "name": "nGramWidths",
    "type": "number[]"
  }, {
    "tfName": "left_pad",
    "name": "leftPad",
    "type": "string"
  }, {
    "tfName": "right_pad",
    "name": "rightPad",
    "type": "string"
  }, {
    "tfName": "pad_width",
    "name": "padWidth",
    "type": "number"
  }, {
    "tfName": "preserve_short_sequences",
    "name": "preserveShortSequences",
    "type": "bool"
  }],
  "outputs": ["ngrams", "ngrams_splits"]
}, {
  "tfOpName": "StringSplit",
  "category": "string",
  "inputs": [{
    "start": 0,
    "name": "input",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "delimiter",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "skip_empty",
    "name": "skipEmpty",
    "type": "bool"
  }],
  "outputs": ["indices", "values", "shape"]
}, {
  "tfOpName": "StringToHashBucketFast",
  "category": "string",
  "inputs": [{
    "start": 0,
    "name": "input",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "num_buckets",
    "name": "numBuckets",
    "type": "number"
  }]
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/transformation.js
var transformation_exports = {};
__export(transformation_exports, {
  json: () => json19
});
var json19 = [{
  "tfOpName": "Cast",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "SrcT",
    "name": "sdtype",
    "type": "dtype",
    "notSupported": true
  }, {
    "tfName": "DstT",
    "name": "dtype",
    "type": "dtype"
  }]
}, {
  "tfOpName": "ExpandDims",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "axis",
    "type": "number"
  }]
}, {
  "tfOpName": "MirrorPad",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "padding",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "mode",
    "name": "mode",
    "type": "string"
  }]
}, {
  "tfOpName": "Pad",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "padding",
    "type": "number[]"
  }],
  "attrs": [{
    "tfName": "constant_value",
    "name": "constantValue",
    "type": "number",
    "defaultValue": 0
  }]
}, {
  "tfOpName": "PadV2",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "padding",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "constantValue",
    "type": "number",
    "defaultValue": 0
  }]
}, {
  "tfOpName": "Reshape",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "shape",
    "type": "number[]"
  }]
}, {
  "tfOpName": "EnsureShape",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "shape",
    "type": "number[]"
  }]
}, {
  "tfOpName": "Squeeze",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "axis",
    "tfDeprecatedName": "squeeze_dims",
    "name": "axis",
    "type": "number[]"
  }]
}, {
  "tfOpName": "SpaceToBatchND",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "blockShape",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "paddings",
    "type": "number[]"
  }]
}, {
  "tfOpName": "BatchToSpaceND",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "blockShape",
    "type": "number[]"
  }, {
    "start": 2,
    "name": "crops",
    "type": "number[]"
  }]
}, {
  "tfOpName": "DepthToSpace",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }],
  "attrs": [{
    "tfName": "block_size",
    "name": "blockSize",
    "type": "number"
  }, {
    "tfName": "data_format",
    "name": "dataFormat",
    "type": "string"
  }]
}, {
  "tfOpName": "BroadcastTo",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "x",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "shape",
    "type": "number[]"
  }],
  "attrs": []
}, {
  "tfOpName": "BroadcastArgs",
  "category": "transformation",
  "inputs": [{
    "start": 0,
    "name": "s0",
    "type": "tensor"
  }, {
    "start": 1,
    "name": "s1",
    "type": "tensor"
  }],
  "attrs": []
}];

// node_modules/@tensorflow/tfjs-converter/dist/operations/operation_mapper.js
var OperationMapper = class {
  // Singleton instance for the mapper
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
  // Loads the op mapping from the JSON file.
  constructor() {
    const ops = [arithmetic_exports, basic_math_exports, control_exports, convolution_exports, creation_exports, dynamic_exports, evaluation_exports, graph_exports, hash_table_exports, image_exports, logical_exports, matrices_exports, normalization_exports, reduction_exports, slice_join_exports, sparse_exports, spectral_exports, string_exports, transformation_exports];
    const mappersJson = [].concat(...ops.map((op2) => op2.json));
    this.opMappers = mappersJson.reduce((map, mapper) => {
      map[mapper.tfOpName] = mapper;
      return map;
    }, {});
  }
  // Converts the model inference graph from Tensorflow GraphDef to local
  // representation for TensorFlow.js API
  transformGraph(graph, signature = {}) {
    const tfNodes = graph.node;
    const placeholders = [];
    const weights = [];
    const initNodes = [];
    const nodes = tfNodes.reduce((map, node) => {
      map[node.name] = this.mapNode(node);
      if (node.op.startsWith("Placeholder")) {
        placeholders.push(map[node.name]);
      } else if (node.op === "Const") {
        weights.push(map[node.name]);
      } else if (node.input == null || node.input.length === 0) {
        initNodes.push(map[node.name]);
      }
      return map;
    }, {});
    let inputs = [];
    const outputs = [];
    let inputNodeNameToKey = {};
    let outputNodeNameToKey = {};
    if (signature != null) {
      inputNodeNameToKey = this.mapSignatureEntries(signature.inputs);
      outputNodeNameToKey = this.mapSignatureEntries(signature.outputs);
    }
    const allNodes = Object.keys(nodes);
    allNodes.forEach((key) => {
      const node = nodes[key];
      node.inputNames.forEach((name, index) => {
        const [nodeName, , outputName] = getNodeNameAndIndex(name);
        const inputNode = nodes[nodeName];
        if (inputNode.outputs != null) {
          const outputIndex = inputNode.outputs.indexOf(outputName);
          if (outputIndex !== -1) {
            const inputName = `${nodeName}:${outputIndex}`;
            node.inputNames[index] = inputName;
          }
        }
        node.inputs.push(inputNode);
        inputNode.children.push(node);
      });
    });
    if (Object.keys(outputNodeNameToKey).length === 0) {
      allNodes.forEach((key) => {
        const node = nodes[key];
        if (node.children.length === 0) {
          outputs.push(node);
        }
      });
    } else {
      Object.keys(outputNodeNameToKey).forEach((name) => {
        const [nodeName] = getNodeNameAndIndex(name);
        const node = nodes[nodeName];
        if (node != null) {
          node.signatureKey = outputNodeNameToKey[name];
          outputs.push(node);
        }
      });
    }
    if (Object.keys(inputNodeNameToKey).length > 0) {
      Object.keys(inputNodeNameToKey).forEach((name) => {
        const [nodeName] = getNodeNameAndIndex(name);
        const node = nodes[nodeName];
        if (node) {
          node.signatureKey = inputNodeNameToKey[name];
          inputs.push(node);
        }
      });
    } else {
      inputs = placeholders;
    }
    let functions = {};
    if (graph.library != null && graph.library.function != null) {
      functions = graph.library.function.reduce((functions2, func) => {
        functions2[func.signature.name] = this.mapFunction(func);
        return functions2;
      }, {});
    }
    const result = {
      nodes,
      inputs,
      outputs,
      weights,
      placeholders,
      signature,
      functions
    };
    if (initNodes.length > 0) {
      result.initNodes = initNodes;
    }
    return result;
  }
  mapSignatureEntries(entries) {
    return Object.keys(entries || {}).reduce((prev, curr) => {
      prev[entries[curr].name] = curr;
      return prev;
    }, {});
  }
  mapNode(node) {
    const mapper = getRegisteredOp(node.op) || this.opMappers[node.op] || {};
    if (node.attr == null) {
      node.attr = {};
    }
    const newNode = {
      name: node.name,
      op: node.op,
      category: mapper.category,
      inputNames: (node.input || []).map((input) => input.startsWith("^") ? input.slice(1) : input),
      inputs: [],
      children: [],
      inputParams: {},
      attrParams: {},
      rawAttrs: node.attr,
      outputs: mapper.outputs
    };
    if (mapper.inputs != null) {
      newNode.inputParams = mapper.inputs.reduce((map, param) => {
        map[param.name] = {
          type: param.type,
          inputIndexStart: param.start,
          inputIndexEnd: param.end
        };
        return map;
      }, {});
    }
    if (mapper.attrs != null) {
      newNode.attrParams = mapper.attrs.reduce((map, param) => {
        const type = param.type;
        let value = void 0;
        switch (param.type) {
          case "string":
            value = getStringParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getStringParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "string[]":
            value = getStringArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getStringArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "number":
            value = getNumberParam(node.attr, param.tfName, param.defaultValue || 0);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getNumberParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "number[]":
            value = getNumericArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getNumericArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "bool":
            value = getBoolParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getBoolParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "bool[]":
            value = getBoolArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getBoolArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "shape":
            value = getTensorShapeParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getTensorShapeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "shape[]":
            value = getTensorShapeArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getTensorShapeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "dtype":
            value = getDtypeParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getDtypeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "dtype[]":
            value = getDtypeArrayParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getDtypeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "func":
            value = getFuncParam(node.attr, param.tfName, param.defaultValue);
            if (value === void 0 && !!param.tfDeprecatedName) {
              value = getFuncParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }
            break;
          case "tensor":
          case "tensors":
            break;
          default:
            throw new Error(`Unsupported param type: ${param.type} for op: ${node.op}`);
        }
        map[param.name] = {
          value,
          type
        };
        return map;
      }, {});
    }
    return newNode;
  }
  // map the TFunctionDef to TFJS graph object
  mapFunction(functionDef) {
    const tfNodes = functionDef.nodeDef;
    const placeholders = [];
    const weights = [];
    let nodes = {};
    if (tfNodes != null) {
      nodes = tfNodes.reduce((map, node) => {
        map[node.name] = this.mapNode(node);
        if (node.op === "Const") {
          weights.push(map[node.name]);
        }
        return map;
      }, {});
    }
    const inputs = [];
    const outputs = [];
    functionDef.signature.inputArg.forEach((arg) => {
      const [nodeName] = getNodeNameAndIndex(arg.name);
      const node = {
        name: nodeName,
        op: "Placeholder",
        inputs: [],
        inputNames: [],
        category: "graph",
        inputParams: {},
        attrParams: {
          dtype: {
            value: parseDtypeParam(arg.type),
            type: "dtype"
          }
        },
        children: []
      };
      node.signatureKey = arg.name;
      inputs.push(node);
      nodes[nodeName] = node;
    });
    const allNodes = Object.keys(nodes);
    allNodes.forEach((key) => {
      const node = nodes[key];
      node.inputNames.forEach((name, index) => {
        const [nodeName, , outputName] = getNodeNameAndIndex(name);
        const inputNode = nodes[nodeName];
        if (inputNode.outputs != null) {
          const outputIndex = inputNode.outputs.indexOf(outputName);
          if (outputIndex !== -1) {
            const inputName = `${nodeName}:${outputIndex}`;
            node.inputNames[index] = inputName;
          }
        }
        node.inputs.push(inputNode);
        inputNode.children.push(node);
      });
    });
    const returnNodeMap = functionDef.ret;
    functionDef.signature.outputArg.forEach((output) => {
      const [nodeName, index] = getNodeNameAndIndex(returnNodeMap[output.name]);
      const node = nodes[nodeName];
      if (node != null) {
        node.defaultOutput = index;
        outputs.push(node);
      }
    });
    const signature = this.mapArgsToSignature(functionDef);
    return {
      nodes,
      inputs,
      outputs,
      weights,
      placeholders,
      signature
    };
  }
  mapArgsToSignature(functionDef) {
    return {
      methodName: functionDef.signature.name,
      inputs: functionDef.signature.inputArg.reduce((map, arg) => {
        map[arg.name] = this.mapArgToTensorInfo(arg);
        return map;
      }, {}),
      outputs: functionDef.signature.outputArg.reduce((map, arg) => {
        map[arg.name] = this.mapArgToTensorInfo(arg, functionDef.ret);
        return map;
      }, {})
    };
  }
  mapArgToTensorInfo(arg, nameMap) {
    let name = arg.name;
    if (nameMap != null) {
      name = nameMap[name];
    }
    return {
      name,
      dtype: arg.type
    };
  }
};
function decodeBase64(text) {
  const global = env().global;
  if (typeof global.atob !== "undefined") {
    return global.atob(text);
  } else if (typeof Buffer !== "undefined") {
    return new Buffer(text, "base64").toString();
  } else {
    throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()");
  }
}
function parseStringParam(s, keepCase) {
  const value = Array.isArray(s) ? String.fromCharCode.apply(null, s) : decodeBase64(s);
  return keepCase ? value : value.toLowerCase();
}
function getStringParam(attrs, name, def, keepCase = false) {
  const param = attrs[name];
  if (param != null) {
    return parseStringParam(param.s, keepCase);
  }
  return def;
}
function getBoolParam(attrs, name, def) {
  const param = attrs[name];
  return param ? param.b : def;
}
function getNumberParam(attrs, name, def) {
  const param = attrs[name] || {};
  const value = param["i"] != null ? param["i"] : param["f"] != null ? param["f"] : def;
  return typeof value === "number" ? value : parseInt(value, 10);
}
function parseDtypeParam(value) {
  if (typeof value === "string") {
    value = DataType[value];
  }
  switch (value) {
    case DataType.DT_FLOAT:
    case DataType.DT_HALF:
      return "float32";
    case DataType.DT_INT32:
    case DataType.DT_INT64:
    case DataType.DT_INT8:
    case DataType.DT_UINT8:
      return "int32";
    case DataType.DT_BOOL:
      return "bool";
    case DataType.DT_DOUBLE:
      return "float32";
    case DataType.DT_STRING:
      return "string";
    case DataType.DT_COMPLEX64:
    case DataType.DT_COMPLEX128:
      return "complex64";
    default:
      return null;
  }
}
function getFuncParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.func) {
    return param.func.name;
  }
  return def;
}
function getDtypeParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.type) {
    return parseDtypeParam(param.type);
  }
  return def;
}
function getDtypeArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.type) {
    return param.list.type.map((v) => parseDtypeParam(v));
  }
  return def;
}
function parseTensorShapeParam(shape) {
  if (shape.unknownRank) {
    return void 0;
  }
  if (shape.dim != null) {
    return shape.dim.map((dim) => typeof dim.size === "number" ? dim.size : parseInt(dim.size, 10));
  }
  return [];
}
function getTensorShapeParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.shape) {
    return parseTensorShapeParam(param.shape);
  }
  return def;
}
function getNumericArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param) {
    return ((param.list.f && param.list.f.length ? param.list.f : param.list.i) || []).map((v) => typeof v === "number" ? v : parseInt(v, 10));
  }
  return def;
}
function getStringArrayParam(attrs, name, def, keepCase = false) {
  const param = attrs[name];
  if (param && param.list && param.list.s) {
    return param.list.s.map((v) => {
      return parseStringParam(v, keepCase);
    });
  }
  return def;
}
function getTensorShapeArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.shape) {
    return param.list.shape.map((v) => {
      return parseTensorShapeParam(v);
    });
  }
  return def;
}
function getBoolArrayParam(attrs, name, def) {
  const param = attrs[name];
  if (param && param.list && param.list.b) {
    return param.list.b;
  }
  return def;
}

// node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/node_value_impl.js
var NodeValueImpl = class {
  constructor(node, tensorMap, context) {
    this.node = node;
    this.tensorMap = tensorMap;
    this.context = context;
    this.inputs = [];
    this.attrs = {};
    this.inputs = node.inputNames.map((name) => this.getInput(name));
    if (node.rawAttrs != null) {
      this.attrs = Object.keys(node.rawAttrs).reduce((attrs, key) => {
        attrs[key] = this.getAttr(key);
        return attrs;
      }, {});
    }
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */
  getInput(name) {
    return getTensor(name, this.tensorMap, this.context);
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */
  getAttr(name, defaultValue) {
    const value = this.node.rawAttrs[name];
    if (value.tensor != null) {
      return getTensor(name, this.tensorMap, this.context);
    }
    if (value.i != null || value.f != null) {
      return getNumberParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.s != null) {
      return getStringParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.b != null) {
      return getBoolParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.shape != null) {
      return getTensorShapeParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.type != null) {
      return getDtypeParam(this.node.rawAttrs, name, defaultValue);
    }
    if (value.list != null) {
      if (value.list.i != null || value.list.f != null) {
        return getNumericArrayParam(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.s != null) {
        return getStringArrayParam(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.shape != null) {
        return getTensorShapeArrayParam(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.b != null) {
        return getBoolArrayParam(this.node.rawAttrs, name, defaultValue);
      }
      if (value.list.type != null) {
        return getDtypeArrayParam(this.node.rawAttrs, name, defaultValue);
      }
    }
    return defaultValue;
  }
};

// node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js
var ops_for_converter_exports = {};
__export(ops_for_converter_exports, {
  OP_SCOPE_SUFFIX: () => OP_SCOPE_SUFFIX,
  abs: () => abs,
  acos: () => acos,
  acosh: () => acosh,
  add: () => add,
  addN: () => addN,
  all: () => all,
  any: () => any,
  argMax: () => argMax,
  argMin: () => argMin,
  asin: () => asin,
  asinh: () => asinh,
  atan: () => atan,
  atan2: () => atan2,
  atanh: () => atanh,
  avgPool: () => avgPool,
  avgPool3d: () => avgPool3d,
  basicLSTMCell: () => basicLSTMCell,
  batchNorm: () => batchNorm,
  batchNorm2d: () => batchNorm2d,
  batchNorm3d: () => batchNorm3d,
  batchNorm4d: () => batchNorm4d,
  batchToSpaceND: () => batchToSpaceND,
  bincount: () => bincount,
  bitwiseAnd: () => bitwiseAnd,
  booleanMaskAsync: () => booleanMaskAsync,
  broadcastArgs: () => broadcastArgs,
  broadcastTo: () => broadcastTo,
  buffer: () => buffer,
  cast: () => cast,
  ceil: () => ceil,
  clipByValue: () => clipByValue,
  clone: () => clone,
  complex: () => complex,
  concat: () => concat,
  concat1d: () => concat1d,
  concat2d: () => concat2d,
  concat3d: () => concat3d,
  concat4d: () => concat4d,
  conv1d: () => conv1d,
  conv2d: () => conv2d,
  conv2dTranspose: () => conv2dTranspose,
  conv3d: () => conv3d,
  conv3dTranspose: () => conv3dTranspose,
  cos: () => cos,
  cosh: () => cosh,
  cosineWindow: () => cosineWindow,
  cumprod: () => cumprod,
  cumsum: () => cumsum,
  denseBincount: () => denseBincount,
  depthToSpace: () => depthToSpace,
  depthwiseConv2d: () => depthwiseConv2d,
  diag: () => diag,
  dilation2d: () => dilation2d,
  div: () => div,
  divNoNan: () => divNoNan,
  dot: () => dot,
  dropout: () => dropout,
  einsum: () => einsum,
  elu: () => elu,
  enclosingPowerOfTwo: () => enclosingPowerOfTwo,
  ensureShape: () => ensureShape,
  equal: () => equal,
  erf: () => erf,
  euclideanNorm: () => euclideanNorm,
  exp: () => exp,
  expandDims: () => expandDims,
  expm1: () => expm1,
  eye: () => eye,
  fft: () => fft,
  fill: () => fill,
  floor: () => floor,
  floorDiv: () => floorDiv,
  fused: () => fused_ops_exports,
  gather: () => gather,
  gatherND: () => gatherND,
  greater: () => greater,
  greaterEqual: () => greaterEqual,
  ifft: () => ifft,
  imag: () => imag,
  image: () => image,
  inTopKAsync: () => inTopKAsync,
  irfft: () => irfft,
  isFinite: () => isFinite,
  isInf: () => isInf,
  isNaN: () => isNaN,
  leakyRelu: () => leakyRelu,
  less: () => less,
  lessEqual: () => lessEqual,
  linalg: () => linalg,
  linspace: () => linspace,
  localResponseNormalization: () => localResponseNormalization,
  log: () => log,
  log1p: () => log1p,
  logSigmoid: () => logSigmoid,
  logSoftmax: () => logSoftmax,
  logSumExp: () => logSumExp,
  logicalAnd: () => logicalAnd,
  logicalNot: () => logicalNot,
  logicalOr: () => logicalOr,
  logicalXor: () => logicalXor,
  losses: () => losses,
  lowerBound: () => lowerBound,
  matMul: () => matMul,
  max: () => max,
  maxPool: () => maxPool,
  maxPool3d: () => maxPool3d,
  maxPoolWithArgmax: () => maxPoolWithArgmax,
  maximum: () => maximum,
  mean: () => mean,
  meshgrid: () => meshgrid,
  min: () => min,
  minimum: () => minimum,
  mirrorPad: () => mirrorPad,
  mod: () => mod,
  moments: () => moments,
  movingAverage: () => movingAverage,
  mul: () => mul,
  multiRNNCell: () => multiRNNCell,
  multinomial: () => multinomial,
  neg: () => neg,
  norm: () => norm,
  notEqual: () => notEqual,
  oneHot: () => oneHot,
  ones: () => ones,
  onesLike: () => onesLike,
  op: () => op,
  outerProduct: () => outerProduct,
  pad: () => pad,
  pad1d: () => pad1d,
  pad2d: () => pad2d,
  pad3d: () => pad3d,
  pad4d: () => pad4d,
  pool: () => pool,
  pow: () => pow,
  prelu: () => prelu,
  print: () => print,
  prod: () => prod,
  raggedGather: () => raggedGather,
  raggedRange: () => raggedRange,
  raggedTensorToTensor: () => raggedTensorToTensor,
  rand: () => rand,
  randomGamma: () => randomGamma,
  randomNormal: () => randomNormal,
  randomStandardNormal: () => randomStandardNormal,
  randomUniform: () => randomUniform,
  randomUniformInt: () => randomUniformInt,
  range: () => range,
  real: () => real,
  reciprocal: () => reciprocal,
  relu: () => relu,
  relu6: () => relu6,
  reshape: () => reshape,
  reverse: () => reverse,
  reverse1d: () => reverse1d,
  reverse2d: () => reverse2d,
  reverse3d: () => reverse3d,
  reverse4d: () => reverse4d,
  rfft: () => rfft,
  round: () => round,
  rsqrt: () => rsqrt,
  scalar: () => scalar,
  scatterND: () => scatterND,
  searchSorted: () => searchSorted,
  selu: () => selu,
  separableConv2d: () => separableConv2d,
  setdiff1dAsync: () => setdiff1dAsync,
  sigmoid: () => sigmoid,
  sign: () => sign,
  signal: () => signal,
  sin: () => sin,
  sinh: () => sinh,
  slice: () => slice,
  slice1d: () => slice1d,
  slice2d: () => slice2d,
  slice3d: () => slice3d,
  slice4d: () => slice4d,
  softmax: () => softmax,
  softplus: () => softplus,
  spaceToBatchND: () => spaceToBatchND,
  sparse: () => sparse,
  sparseToDense: () => sparseToDense,
  spectral: () => spectral,
  split: () => split,
  sqrt: () => sqrt,
  square: () => square,
  squaredDifference: () => squaredDifference,
  squeeze: () => squeeze,
  stack: () => stack,
  step: () => step,
  stridedSlice: () => stridedSlice,
  string: () => string,
  sub: () => sub,
  sum: () => sum,
  tan: () => tan,
  tanh: () => tanh,
  tensor: () => tensor,
  tensor1d: () => tensor1d,
  tensor2d: () => tensor2d,
  tensor3d: () => tensor3d,
  tensor4d: () => tensor4d,
  tensor5d: () => tensor5d,
  tensor6d: () => tensor6d,
  tensorScatterUpdate: () => tensorScatterUpdate,
  tile: () => tile,
  topk: () => topk,
  transpose: () => transpose,
  truncatedNormal: () => truncatedNormal,
  unique: () => unique,
  unsortedSegmentSum: () => unsortedSegmentSum,
  unstack: () => unstack,
  upperBound: () => upperBound,
  variable: () => variable,
  where: () => where,
  whereAsync: () => whereAsync,
  zeros: () => zeros,
  zerosLike: () => zerosLike
});

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/arithmetic_executor.js
var executeOp = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "BiasAdd":
    case "AddV2":
    case "Add": {
      return [ops.add(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "AddN": {
      return [ops.addN(getParamValue("tensors", node, tensorMap, context))];
    }
    case "FloorMod":
    case "Mod":
      return [ops.mod(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    case "Mul":
      return [ops.mul(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    case "RealDiv":
    case "Div": {
      return [ops.div(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "DivNoNan": {
      return [ops.divNoNan(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "FloorDiv": {
      return [ops.floorDiv(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Sub": {
      return [ops.sub(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Minimum": {
      return [ops.minimum(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Maximum": {
      return [ops.maximum(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Pow": {
      return [ops.pow(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "SquaredDifference": {
      return [ops.squaredDifference(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/basic_math_executor.js
var executeOp2 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Abs":
    case "ComplexAbs":
      return [ops.abs(getParamValue("x", node, tensorMap, context))];
    case "Acos":
      return [ops.acos(getParamValue("x", node, tensorMap, context))];
    case "Acosh":
      return [ops.acosh(getParamValue("x", node, tensorMap, context))];
    case "Asin":
      return [ops.asin(getParamValue("x", node, tensorMap, context))];
    case "Asinh":
      return [ops.asinh(getParamValue("x", node, tensorMap, context))];
    case "Atan":
      return [ops.atan(getParamValue("x", node, tensorMap, context))];
    case "Atan2":
      return [ops.atan2(getParamValue("x", node, tensorMap, context), getParamValue("y", node, tensorMap, context))];
    case "Atanh":
      return [ops.atanh(getParamValue("x", node, tensorMap, context))];
    case "Ceil":
      return [ops.ceil(getParamValue("x", node, tensorMap, context))];
    case "Complex":
      return [ops.complex(getParamValue("real", node, tensorMap, context), getParamValue("imag", node, tensorMap, context))];
    case "Cos":
      return [ops.cos(getParamValue("x", node, tensorMap, context))];
    case "Cosh":
      return [ops.cosh(getParamValue("x", node, tensorMap, context))];
    case "Elu":
      return [ops.elu(getParamValue("x", node, tensorMap, context))];
    case "Erf":
      return [ops.erf(getParamValue("x", node, tensorMap, context))];
    case "Exp":
      return [ops.exp(getParamValue("x", node, tensorMap, context))];
    case "Expm1": {
      return [ops.expm1(getParamValue("x", node, tensorMap, context))];
    }
    case "Floor":
      return [ops.floor(getParamValue("x", node, tensorMap, context))];
    case "Log":
      return [ops.log(getParamValue("x", node, tensorMap, context))];
    case "Log1p": {
      return [ops.log1p(getParamValue("x", node, tensorMap, context))];
    }
    case "Imag":
      return [ops.imag(getParamValue("x", node, tensorMap, context))];
    case "Neg":
      return [ops.neg(getParamValue("x", node, tensorMap, context))];
    case "Reciprocal": {
      return [ops.reciprocal(getParamValue("x", node, tensorMap, context))];
    }
    case "Real":
      return [ops.real(getParamValue("x", node, tensorMap, context))];
    case "Relu":
      return [ops.relu(getParamValue("x", node, tensorMap, context))];
    case "Round": {
      return [ops.round(getParamValue("x", node, tensorMap, context))];
    }
    case "Selu":
      return [ops.selu(getParamValue("x", node, tensorMap, context))];
    case "Sigmoid":
      return [ops.sigmoid(getParamValue("x", node, tensorMap, context))];
    case "Sin":
      return [ops.sin(getParamValue("x", node, tensorMap, context))];
    case "Sign": {
      return [ops.sign(getParamValue("x", node, tensorMap, context))];
    }
    case "Sinh": {
      return [ops.sinh(getParamValue("x", node, tensorMap, context))];
    }
    case "Softplus": {
      return [ops.softplus(getParamValue("x", node, tensorMap, context))];
    }
    case "Sqrt": {
      return [ops.sqrt(getParamValue("x", node, tensorMap, context))];
    }
    case "Square": {
      return [ops.square(getParamValue("x", node, tensorMap, context))];
    }
    case "Tanh": {
      return [ops.tanh(getParamValue("x", node, tensorMap, context))];
    }
    case "Tan":
      return [ops.tan(getParamValue("x", node, tensorMap, context))];
    case "ClipByValue":
      return [ops.clipByValue(getParamValue("x", node, tensorMap, context), getParamValue("clipValueMin", node, tensorMap, context), getParamValue("clipValueMax", node, tensorMap, context))];
    case "Relu6":
      return [ops.relu6(getParamValue("x", node, tensorMap, context))];
    case "Rsqrt":
      return [ops.rsqrt(getTensor(node.inputNames[0], tensorMap, context))];
    case "LeakyRelu":
      return [ops.leakyRelu(getParamValue("x", node, tensorMap, context), getParamValue("alpha", node, tensorMap, context))];
    case "Prelu":
      return [ops.prelu(getParamValue("x", node, tensorMap, context), getParamValue("alpha", node, tensorMap, context))];
    case "IsNan":
      return [ops.isNaN(getTensor(node.inputNames[0], tensorMap, context))];
    case "IsInf":
      return [ops.isInf(getTensor(node.inputNames[0], tensorMap, context))];
    case "IsFinite":
      return [ops.isFinite(getTensor(node.inputNames[0], tensorMap, context))];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js
function assertShapesMatchAllowUndefinedSize(shapeA, shapeB, errorMessagePrefix = "") {
  if (typeof shapeA === "number" || typeof shapeB === "number") {
    return;
  }
  util_exports.assert(shapeA.length === shapeB.length, () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
  for (let i = 0; i < shapeA.length; i++) {
    const dim0 = shapeA[i];
    const dim1 = shapeB[i];
    util_exports.assert(dim0 < 0 || dim1 < 0 || dim0 === dim1, () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
  }
}
function fullDefinedShape(elementShape) {
  if (typeof elementShape === "number" || elementShape.some((dim) => dim < 0)) {
    return false;
  }
  return true;
}
function inferElementShape(listElementShape, tensors, elementShape) {
  let partialShape = mergeElementShape(listElementShape, elementShape);
  const notfullDefinedShape = !fullDefinedShape(partialShape);
  if (notfullDefinedShape && tensors.length === 0) {
    throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${partialShape}`);
  }
  if (notfullDefinedShape) {
    tensors.forEach((tensor2) => {
      partialShape = mergeElementShape(tensor2.shape, partialShape);
    });
  }
  if (!fullDefinedShape(partialShape)) {
    throw new Error(`Non-fully-defined elementShape: ${partialShape}`);
  }
  return partialShape;
}
function mergeElementShape(elementShapeA, elementShapeB) {
  if (typeof elementShapeA === "number") {
    return elementShapeB;
  }
  if (typeof elementShapeB === "number") {
    return elementShapeA;
  }
  if (elementShapeA.length !== elementShapeB.length) {
    throw new Error(`Incompatible ranks during merge: ${elementShapeA} vs. ${elementShapeB}`);
  }
  const result = [];
  for (let i = 0; i < elementShapeA.length; ++i) {
    const dim0 = elementShapeA[i];
    const dim1 = elementShapeB[i];
    if (dim0 >= 0 && dim1 >= 0 && dim0 !== dim1) {
      throw new Error(`Incompatible shape during merge: ${elementShapeA} vs. ${elementShapeB}`);
    }
    result[i] = dim0 >= 0 ? dim0 : dim1;
  }
  return result;
}

// node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_array.js
var TensorArray = class {
  constructor(name, dtype, maxSize, elementShape, identicalElementShapes, dynamicSize, clearAfterRead) {
    this.name = name;
    this.dtype = dtype;
    this.maxSize = maxSize;
    this.elementShape = elementShape;
    this.identicalElementShapes = identicalElementShapes;
    this.dynamicSize = dynamicSize;
    this.clearAfterRead = clearAfterRead;
    this.tensors = [];
    this.closed_ = false;
    this.idTensor = scalar(0);
    keep(this.idTensor);
  }
  get id() {
    return this.idTensor.id;
  }
  get closed() {
    return this.closed_;
  }
  /**
   * Dispose the tensors and idTensor and mark the TensoryArray as closed.
   */
  clearAndClose(keepIds) {
    this.tensors.forEach((tensor2) => {
      if (keepIds == null || !keepIds.has(tensor2.tensor.id)) {
        tensor2.tensor.dispose();
      }
    });
    this.tensors = [];
    this.closed_ = true;
    this.idTensor.dispose();
  }
  size() {
    return this.tensors.length;
  }
  /**
   * Read the value at location index in the TensorArray.
   * @param index Number the index to read from.
   */
  read(index) {
    if (this.closed_) {
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    }
    if (index < 0 || index >= this.size()) {
      throw new Error(`Tried to read from index ${index}, but array size is: ${this.size()}`);
    }
    const tensorWithState = this.tensors[index];
    if (tensorWithState.cleared) {
      throw new Error(`TensorArray ${this.name}: Could not read index ${index} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);
    }
    if (this.clearAfterRead) {
      tensorWithState.cleared = true;
    }
    tensorWithState.read = true;
    return tensorWithState.tensor;
  }
  /**
   * Helper method to read multiple tensors from the specified indices.
   */
  readMany(indices) {
    return indices.map((index) => this.read(index));
  }
  /**
   * Write value into the index of the TensorArray.
   * @param index number the index to write to.
   * @param tensor
   */
  write(index, tensor2) {
    if (this.closed_) {
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    }
    if (index < 0 || !this.dynamicSize && index >= this.maxSize) {
      throw new Error(`Tried to write to index ${index}, but array is not resizeable and size is: ${this.maxSize}`);
    }
    const t = this.tensors[index] || {};
    if (tensor2.dtype !== this.dtype) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index},
          because the value dtype is ${tensor2.dtype}, but TensorArray dtype is ${this.dtype}.`);
    }
    if (this.size() === 0 && (this.elementShape == null || this.elementShape.length === 0)) {
      this.elementShape = tensor2.shape;
    }
    assertShapesMatchAllowUndefinedSize(this.elementShape, tensor2.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${index}.`);
    if (t.read) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been read.`);
    }
    if (t.written) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been written.`);
    }
    t.tensor = tensor2;
    keep(tensor2);
    t.written = true;
    this.tensors[index] = t;
  }
  /**
   * Helper method to write multiple tensors to the specified indices.
   */
  writeMany(indices, tensors) {
    if (indices.length !== tensors.length) {
      throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${indices.length} is not the same as tensors size: ${tensors.length}.`);
    }
    indices.forEach((i, index) => this.write(i, tensors[index]));
  }
  /**
   * Return selected values in the TensorArray as a packed Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param [indices] number[] Optional. Taking values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size(). If not specified returns
   *    all tensors in the original order.
   * @param [dtype]
   */
  gather(indices, dtype) {
    if (!!dtype && dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${dtype}`);
    }
    if (!indices) {
      indices = [];
      for (let i = 0; i < this.size(); i++) {
        indices.push(i);
      }
    } else {
      indices = indices.slice(0, this.size());
    }
    if (indices.length === 0) {
      return tensor([], [0].concat(this.elementShape));
    }
    const tensors = this.readMany(indices);
    assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, "TensorArray shape mismatch: ");
    return stack(tensors, 0);
  }
  /**
   * Return the values in the TensorArray as a concatenated Tensor.
   */
  concat(dtype) {
    if (!!dtype && dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${dtype}`);
    }
    if (this.size() === 0) {
      return tensor([], [0].concat(this.elementShape));
    }
    const indices = [];
    for (let i = 0; i < this.size(); i++) {
      indices.push(i);
    }
    const tensors = this.readMany(indices);
    assertShapesMatchAllowUndefinedSize(this.elementShape, tensors[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${tensors[0].shape})`);
    return concat(tensors, 0);
  }
  /**
   * Scatter the values of a Tensor in specific indices of a TensorArray.
   * @param indices number[] values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size().
   * @param tensor Tensor input tensor.
   */
  scatter(indices, tensor2) {
    if (tensor2.dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor2.dtype}`);
    }
    if (indices.length !== tensor2.shape[0]) {
      throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor2.shape[0]}`);
    }
    const maxIndex = Math.max(...indices);
    if (!this.dynamicSize && maxIndex >= this.maxSize) {
      throw new Error(`Max index must be < array size (${maxIndex}  vs. ${this.maxSize})`);
    }
    this.writeMany(indices, unstack(tensor2, 0));
  }
  /**
   * Split the values of a Tensor into the TensorArray.
   * @param length number[] with the lengths to use when splitting value along
   *    its first dimension.
   * @param tensor Tensor, the tensor to split.
   */
  split(length, tensor2) {
    if (tensor2.dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor2.dtype}`);
    }
    let totalLength = 0;
    const cumulativeLengths = length.map((len) => {
      totalLength += len;
      return totalLength;
    });
    if (totalLength !== tensor2.shape[0]) {
      throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor2.shape}`);
    }
    if (!this.dynamicSize && length.length !== this.maxSize) {
      throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${length.length}), and the TensorArray is not marked as dynamically resizeable`);
    }
    const elementPerRow = totalLength === 0 ? 0 : tensor2.size / totalLength;
    const tensors = [];
    tidy(() => {
      tensor2 = reshape(tensor2, [1, totalLength, elementPerRow]);
      for (let i = 0; i < length.length; ++i) {
        const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
        const indices2 = [0, previousLength, 0];
        const sizes = [1, length[i], elementPerRow];
        tensors[i] = reshape(slice(tensor2, indices2, sizes), this.elementShape);
      }
      return tensors;
    });
    const indices = [];
    for (let i = 0; i < length.length; i++) {
      indices[i] = i;
    }
    this.writeMany(indices, tensors);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_list.js
var TensorList = class _TensorList {
  get id() {
    return this.idTensor.id;
  }
  /**
   *
   * @param tensors list of tensors
   * @param elementShape shape of each tensor, this can be a single number (any
   * shape is allowed) or partial shape (dim = -1).
   * @param elementDtype data type of each tensor
   * @param maxNumElements The maximum allowed size of `tensors`. Defaults to -1
   *   meaning that the size of `tensors` is unbounded.
   */
  constructor(tensors, elementShape, elementDtype, maxNumElements = -1) {
    this.tensors = tensors;
    this.elementShape = elementShape;
    this.elementDtype = elementDtype;
    if (tensors != null) {
      tensors.forEach((tensor2) => {
        if (elementDtype !== tensor2.dtype) {
          throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${tensor2.dtype}`);
        }
        assertShapesMatchAllowUndefinedSize(elementShape, tensor2.shape, "TensorList shape mismatch: ");
        keep(tensor2);
      });
    }
    this.idTensor = scalar(0);
    this.maxNumElements = maxNumElements;
    keep(this.idTensor);
  }
  /**
   * Get a new TensorList containing a copy of the underlying tensor container.
   */
  copy() {
    return new _TensorList([...this.tensors], this.elementShape, this.elementDtype);
  }
  /**
   * Dispose the tensors and idTensor and clear the tensor list.
   */
  clearAndClose(keepIds) {
    this.tensors.forEach((tensor2) => {
      if (keepIds == null || !keepIds.has(tensor2.id)) {
        tensor2.dispose();
      }
    });
    this.tensors.length = 0;
    this.idTensor.dispose();
  }
  /**
   * The size of the tensors in the tensor list.
   */
  size() {
    return this.tensors.length;
  }
  /**
   * Return a tensor that stacks a list of rank-R tf.Tensors into one rank-(R+1)
   * tf.Tensor.
   * @param elementShape shape of each tensor
   * @param elementDtype data type of each tensor
   * @param numElements the number of elements to stack
   */
  stack(elementShape, elementDtype, numElements = -1) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (numElements !== -1 && this.tensors.length !== numElements) {
      throw new Error(`Operation expected a list with ${numElements} elements but got a list with ${this.tensors.length} elements.`);
    }
    assertShapesMatchAllowUndefinedSize(elementShape, this.elementShape, "TensorList shape mismatch: ");
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    return tidy(() => {
      const reshapedTensors = this.tensors.map((tensor2) => reshape(tensor2, outputElementShape));
      return stack(reshapedTensors, 0);
    });
  }
  /**
   * Pop a tensor from the end of the list.
   * @param elementShape shape of the tensor
   * @param elementDtype data type of the tensor
   */
  popBack(elementShape, elementDtype) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (this.size() === 0) {
      throw new Error("Trying to pop from an empty list.");
    }
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    const tensor2 = this.tensors.pop();
    tensor2.kept = false;
    assertShapesMatchAllowUndefinedSize(tensor2.shape, elementShape, "TensorList shape mismatch: ");
    return reshape(tensor2, outputElementShape);
  }
  /**
   * Push a tensor to the end of the list.
   * @param tensor Tensor to be pushed.
   */
  pushBack(tensor2) {
    if (tensor2.dtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${tensor2.dtype}, but list elements ${this.elementDtype}`);
    }
    assertShapesMatchAllowUndefinedSize(tensor2.shape, this.elementShape, "TensorList shape mismatch: ");
    if (this.maxNumElements === this.size()) {
      throw new Error(`Trying to push element into a full list.`);
    }
    keep(tensor2);
    this.tensors.push(tensor2);
  }
  /**
   * Update the size of the list.
   * @param size the new size of the list.
   */
  resize(size) {
    if (size < 0) {
      throw new Error(`TensorListResize expects size to be non-negative. Got: ${size}`);
    }
    if (this.maxNumElements !== -1 && size > this.maxNumElements) {
      throw new Error(`TensorListResize input size ${size} is greater maxNumElement ${this.maxNumElements}.`);
    }
    const destTensorList = new _TensorList([], this.elementShape, this.elementDtype, this.maxNumElements);
    destTensorList.tensors.length = size;
    for (let i = 0; i < Math.min(this.tensors.length, size); ++i) {
      destTensorList.tensors[i] = this.tensors[i];
    }
    return destTensorList;
  }
  /**
   * Retrieve the element at the provided index
   * @param elementShape shape of the tensor
   * @param elementDtype dtype of the tensor
   * @param elementIndex index of the tensor
   */
  getItem(elementIndex, elementShape, elementDtype) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    if (elementIndex < 0 || elementIndex > this.tensors.length) {
      throw new Error(`Trying to access element ${elementIndex} in a list with ${this.tensors.length} elements.`);
    }
    if (this.tensors[elementIndex] == null) {
      throw new Error(`element at index ${elementIndex} is null.`);
    }
    assertShapesMatchAllowUndefinedSize(this.tensors[elementIndex].shape, elementShape, "TensorList shape mismatch: ");
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    return reshape(this.tensors[elementIndex], outputElementShape);
  }
  /**
   * Set the tensor at the index
   * @param elementIndex index of the tensor
   * @param tensor the tensor to be inserted into the list
   */
  setItem(elementIndex, tensor2) {
    if (tensor2.dtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${tensor2.dtype}, but list elements ${this.elementDtype}`);
    }
    if (elementIndex < 0 || this.maxNumElements !== -1 && elementIndex >= this.maxNumElements) {
      throw new Error(`Trying to set element ${elementIndex} in a list with max ${this.maxNumElements} elements.`);
    }
    assertShapesMatchAllowUndefinedSize(this.elementShape, tensor2.shape, "TensorList shape mismatch: ");
    keep(tensor2);
    if (this.tensors[elementIndex] != null) {
      this.tensors[elementIndex].kept = false;
    }
    this.tensors[elementIndex] = tensor2;
  }
  /**
   * Return selected values in the TensorList as a stacked Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param indices indices of tensors to gather
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */
  gather(indices, elementDtype, elementShape) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }
    assertShapesMatchAllowUndefinedSize(this.elementShape, elementShape, "TensorList shape mismatch: ");
    indices = indices.slice(0, this.size());
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    if (indices.length === 0) {
      return tensor([], [0].concat(outputElementShape));
    }
    return tidy(() => {
      const tensors = indices.map((i) => reshape(this.tensors[i], outputElementShape));
      return stack(tensors, 0);
    });
  }
  /**
   * Return the values in the TensorList as a concatenated Tensor.
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */
  concat(elementDtype, elementShape) {
    if (!!elementDtype && elementDtype !== this.elementDtype) {
      throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${elementDtype}`);
    }
    assertShapesMatchAllowUndefinedSize(this.elementShape, elementShape, "TensorList shape mismatch: ");
    const outputElementShape = inferElementShape(this.elementShape, this.tensors, elementShape);
    if (this.size() === 0) {
      return tensor([], [0].concat(outputElementShape));
    }
    return tidy(() => {
      const tensors = this.tensors.map((t) => reshape(t, outputElementShape));
      return concat(tensors, 0);
    });
  }
};
function fromTensor(tensor2, elementShape, elementDtype) {
  const dtype = tensor2.dtype;
  if (tensor2.shape.length < 1) {
    throw new Error(`Tensor must be at least a vector, but saw shape: ${tensor2.shape}`);
  }
  if (tensor2.dtype !== elementDtype) {
    throw new Error(`Invalid data types; op elements ${tensor2.dtype}, but list elements ${elementDtype}`);
  }
  const tensorElementShape = tensor2.shape.slice(1);
  assertShapesMatchAllowUndefinedSize(tensorElementShape, elementShape, "TensorList shape mismatch: ");
  const tensorList = unstack(tensor2);
  return new TensorList(tensorList, elementShape, dtype);
}
function reserve(elementShape, elementDtype, numElements, maxNumElements) {
  return new TensorList([], elementShape, elementDtype, maxNumElements);
}
function scatter(tensor2, indices, elementShape, numElements) {
  if (indices.length !== tensor2.shape[0]) {
    throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor2.shape[0]}`);
  }
  const maxIndex = Math.max(...indices);
  if (numElements != null && numElements !== -1 && maxIndex >= numElements) {
    throw new Error(`Max index must be < array size (${maxIndex}  vs. ${numElements})`);
  }
  const list = new TensorList([], elementShape, tensor2.dtype, numElements);
  const tensors = unstack(tensor2, 0);
  indices.forEach((value, index) => {
    list.setItem(value, tensors[index]);
  });
  return list;
}
function split2(tensor2, length, elementShape) {
  let totalLength = 0;
  const cumulativeLengths = length.map((len) => {
    totalLength += len;
    return totalLength;
  });
  if (totalLength !== tensor2.shape[0]) {
    throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor2.shape}`);
  }
  const shapeWithoutFirstDim = tensor2.shape.slice(1);
  const outputElementShape = mergeElementShape(shapeWithoutFirstDim, elementShape);
  const elementPerRow = totalLength === 0 ? 0 : tensor2.size / totalLength;
  const tensors = tidy(() => {
    const tensors2 = [];
    tensor2 = reshape(tensor2, [1, totalLength, elementPerRow]);
    for (let i = 0; i < length.length; ++i) {
      const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
      const indices = [0, previousLength, 0];
      const sizes = [1, length[i], elementPerRow];
      tensors2[i] = reshape(slice(tensor2, indices, sizes), outputElementShape);
    }
    tensor2.dispose();
    return tensors2;
  });
  const list = new TensorList([], elementShape, tensor2.dtype, length.length);
  for (let i = 0; i < tensors.length; i++) {
    list.setItem(i, tensors[i]);
  }
  return list;
}

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/control_executor.js
var executeOp3 = (node, tensorMap, context) => __async(void 0, null, function* () {
  switch (node.op) {
    case "If":
    case "StatelessIf": {
      const thenFunc = getParamValue("thenBranch", node, tensorMap, context);
      const elseFunc = getParamValue("elseBranch", node, tensorMap, context);
      const cond = getParamValue("cond", node, tensorMap, context);
      const args = getParamValue("args", node, tensorMap, context);
      const condValue = yield cond.data();
      if (condValue[0]) {
        return context.functionMap[thenFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
      } else {
        return context.functionMap[elseFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
      }
    }
    case "While":
    case "StatelessWhile": {
      const bodyFunc = getParamValue("body", node, tensorMap, context);
      const condFunc = getParamValue("cond", node, tensorMap, context);
      const args = getParamValue("args", node, tensorMap, context);
      const condResult = yield context.functionMap[condFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
      const argIds = args.map((tensor2) => tensor2.id);
      let condValue = yield condResult[0].data();
      condResult.forEach((tensor2) => {
        if (!tensor2.kept && argIds.indexOf(tensor2.id) === -1) {
          tensor2.dispose();
        }
      });
      let result = args;
      while (condValue[0]) {
        const origResult = result;
        result = yield context.functionMap[bodyFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
        const resultIds = result.map((tensor2) => tensor2.id);
        origResult.forEach((tensor2) => {
          if (!tensor2.kept && argIds.indexOf(tensor2.id) === -1 && resultIds.indexOf(tensor2.id) === -1) {
            tensor2.dispose();
          }
        });
        const condResult2 = yield context.functionMap[condFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
        condValue = yield condResult2[0].data();
        condResult2.forEach((tensor2) => {
          if (!tensor2.kept && argIds.indexOf(tensor2.id) === -1 && resultIds.indexOf(tensor2.id) === -1) {
            tensor2.dispose();
          }
        });
      }
      return result;
    }
    case "LoopCond": {
      const pred = getParamValue("pred", node, tensorMap, context);
      return [cloneTensor(pred)];
    }
    case "Switch": {
      const pred = getParamValue("pred", node, tensorMap, context);
      let data = getParamValue("data", node, tensorMap, context);
      if (!data.kept) {
        data = cloneTensor(data);
      }
      return (yield pred.data())[0] ? [void 0, data] : [data, void 0];
    }
    case "Merge": {
      const inputName = node.inputNames.find((name) => getTensor(name, tensorMap, context) !== void 0);
      if (inputName) {
        const data = getTensor(inputName, tensorMap, context);
        return [cloneTensor(data)];
      }
      return void 0;
    }
    case "Enter": {
      const frameId = getParamValue("frameName", node, tensorMap, context);
      const data = getParamValue("tensor", node, tensorMap, context);
      context.enterFrame(frameId);
      return [cloneTensor(data)];
    }
    case "Exit": {
      const data = getParamValue("tensor", node, tensorMap, context);
      context.exitFrame();
      return [cloneTensor(data)];
    }
    case "NextIteration": {
      const data = getParamValue("tensor", node, tensorMap, context);
      context.nextIteration();
      return [cloneTensor(data)];
    }
    case "TensorArrayV3": {
      const size = getParamValue("size", node, tensorMap, context);
      const dtype = getParamValue("dtype", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const dynamicSize = getParamValue("dynamicSize", node, tensorMap, context);
      const clearAfterRead = getParamValue("clearAfterRead", node, tensorMap, context);
      const identicalElementShapes = getParamValue("identicalElementShapes", node, tensorMap, context);
      const name = getParamValue("name", node, tensorMap, context);
      const tensorArray = new TensorArray(name, dtype, size, elementShape, identicalElementShapes, dynamicSize, clearAfterRead);
      context.addTensorArray(tensorArray);
      return [tensorArray.idTensor, scalar(1)];
    }
    case "TensorArrayWriteV3": {
      const id = getParamValue("tensorArrayId", node, tensorMap, context);
      const index = getParamValue("index", node, tensorMap, context);
      const writeTensor = getParamValue("tensor", node, tensorMap, context);
      const writeTensorArray = context.getTensorArray(id.id);
      writeTensorArray.write(index, writeTensor);
      return [writeTensorArray.idTensor];
    }
    case "TensorArrayReadV3": {
      const readId = getParamValue("tensorArrayId", node, tensorMap, context);
      const readIndex = getParamValue("index", node, tensorMap, context);
      const readTensorArray = context.getTensorArray(readId.id);
      return [readTensorArray.read(readIndex)];
    }
    case "TensorArrayGatherV3": {
      const gatherId = getParamValue("tensorArrayId", node, tensorMap, context);
      const gatherIndices = getParamValue("indices", node, tensorMap, context);
      const gatherDtype = getParamValue("dtype", node, tensorMap, context);
      const gatherTensorArray = context.getTensorArray(gatherId.id);
      return [gatherTensorArray.gather(gatherIndices, gatherDtype)];
    }
    case "TensorArrayScatterV3": {
      const scatterId = getParamValue("tensorArrayId", node, tensorMap, context);
      const scatterIndices = getParamValue("indices", node, tensorMap, context);
      const scatterTensor = getParamValue("tensor", node, tensorMap, context);
      const scatterTensorArray = context.getTensorArray(scatterId.id);
      scatterTensorArray.scatter(scatterIndices, scatterTensor);
      return [scatterTensorArray.idTensor];
    }
    case "TensorArrayConcatV3": {
      const concatId = getParamValue("tensorArrayId", node, tensorMap, context);
      const concatTensorArray = context.getTensorArray(concatId.id);
      const concatDtype = getParamValue("dtype", node, tensorMap, context);
      return [concatTensorArray.concat(concatDtype)];
    }
    case "TensorArraySplitV3": {
      const splitId = getParamValue("tensorArrayId", node, tensorMap, context);
      const splitTensor = getParamValue("tensor", node, tensorMap, context);
      const lengths = getParamValue("lengths", node, tensorMap, context);
      const splitTensorArray = context.getTensorArray(splitId.id);
      splitTensorArray.split(lengths, splitTensor);
      return [splitTensorArray.idTensor];
    }
    case "TensorArraySizeV3": {
      const sizeId = getParamValue("tensorArrayId", node, tensorMap, context);
      const sizeTensorArray = context.getTensorArray(sizeId.id);
      return [scalar(sizeTensorArray.size(), "int32")];
    }
    case "TensorArrayCloseV3": {
      const closeId = getParamValue("tensorArrayId", node, tensorMap, context);
      const closeTensorArray = context.getTensorArray(closeId.id);
      closeTensorArray.clearAndClose();
      return [closeTensorArray.idTensor];
    }
    case "TensorListSetItem": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const index = getParamValue("index", node, tensorMap, context);
      const writeTensor = getParamValue("tensor", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      tensorList.setItem(index, writeTensor);
      return [tensorList.idTensor];
    }
    case "TensorListGetItem": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const readIndex = getParamValue("index", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDType = getParamValue("elementDType", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      return [tensorList.getItem(readIndex, elementShape, elementDType)];
    }
    case "TensorListScatterV2":
    case "TensorListScatter": {
      const scatterIndices = getParamValue("indices", node, tensorMap, context);
      const scatterTensor = getParamValue("tensor", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const numElements = getParamValue("numElements", node, tensorMap, context);
      const tensorList = scatter(scatterTensor, scatterIndices, elementShape, numElements);
      context.addTensorList(tensorList);
      return [tensorList.idTensor];
    }
    case "TensorListReserve":
    case "EmptyTensorList": {
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDtype = getParamValue("elementDType", node, tensorMap, context);
      let numElementsParam;
      if (node.op === "TensorListReserve") {
        numElementsParam = "numElements";
      } else {
        numElementsParam = "maxNumElements";
      }
      const numElements = getParamValue(numElementsParam, node, tensorMap, context);
      const maxNumElements = node.op === "TensorListReserve" ? -1 : numElements;
      const tensorList = reserve(elementShape, elementDtype, numElements, maxNumElements);
      context.addTensorList(tensorList);
      return [tensorList.idTensor];
    }
    case "TensorListGather": {
      const gatherId = getParamValue("tensorListId", node, tensorMap, context);
      const gatherIndices = getParamValue("indices", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDtype = getParamValue("elementDType", node, tensorMap, context);
      const tensorList = context.getTensorList(gatherId.id);
      return [tensorList.gather(gatherIndices, elementDtype, elementShape)];
    }
    case "TensorListStack": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDtype = getParamValue("elementDType", node, tensorMap, context);
      const numElements = getParamValue("numElements", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      return [tensorList.stack(elementShape, elementDtype, numElements)];
    }
    case "TensorListFromTensor": {
      const tensor2 = getParamValue("tensor", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDtype = getParamValue("elementDType", node, tensorMap, context);
      const tensorList = fromTensor(tensor2, elementShape, elementDtype);
      context.addTensorList(tensorList);
      return [tensorList.idTensor];
    }
    case "TensorListConcat":
    case "TensorListConcatV2": {
      const concatId = getParamValue("tensorListId", node, tensorMap, context);
      const tensorList = context.getTensorList(concatId.id);
      const concatDtype = getParamValue("dtype", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      return [tensorList.concat(concatDtype, elementShape)];
    }
    case "TensorListPushBack": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const writeTensor = getParamValue("tensor", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      tensorList.pushBack(writeTensor);
      return [tensorList.idTensor];
    }
    case "TensorListPopBack": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const elementDType = getParamValue("elementDType", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      return [tensorList.popBack(elementShape, elementDType)];
    }
    case "TensorListSplit": {
      const splitTensor = getParamValue("tensor", node, tensorMap, context);
      const elementShape = getParamValue("elementShape", node, tensorMap, context);
      const lengths = getParamValue("lengths", node, tensorMap, context);
      const tensorList = split2(splitTensor, lengths, elementShape);
      context.addTensorList(tensorList);
      return [tensorList.idTensor];
    }
    case "TensorListLength": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const tensorList = context.getTensorList(idTensor.id);
      return [scalar(tensorList.size(), "int32")];
    }
    case "TensorListResize": {
      const idTensor = getParamValue("tensorListId", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      const srcTensorList = context.getTensorList(idTensor.id);
      const destTensorList = srcTensorList.resize(size);
      context.addTensorList(destTensorList);
      return [destTensorList.idTensor];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
});

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/convolution_executor.js
function fusedConvAndDepthWiseParams(node, tensorMap, context) {
  const [extraOp, activationFunc] = getParamValue("fusedOps", node, tensorMap, context);
  const isBiasAdd = extraOp === "biasadd";
  const noBiasAdd = !isBiasAdd;
  const isPrelu = activationFunc === "prelu";
  const isBatchNorm = extraOp === "fusedbatchnorm";
  const numArgs = getParamValue("numArgs", node, tensorMap, context);
  if (isBiasAdd) {
    if (isPrelu && numArgs !== 2) {
      throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
    }
    if (!isPrelu && isBiasAdd && numArgs !== 1) {
      throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.");
    }
  }
  if (isBatchNorm) {
    throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");
  }
  const stride = getParamValue("strides", node, tensorMap, context);
  const pad2 = getPadding(node, tensorMap, context);
  const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
  const dilations = getParamValue("dilations", node, tensorMap, context);
  let [biasArg, preluArg] = getParamValue("args", node, tensorMap, context);
  if (noBiasAdd) {
    preluArg = biasArg;
    biasArg = void 0;
  }
  const leakyreluAlpha = getParamValue("leakyreluAlpha", node, tensorMap, context);
  return {
    stride,
    pad: pad2,
    dataFormat,
    dilations,
    biasArg,
    preluArg,
    activationFunc,
    leakyreluAlpha
  };
}
var executeOp4 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Conv1D": {
      const stride = getParamValue("stride", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      const dilation = getParamValue("dilation", node, tensorMap, context);
      return [ops.conv1d(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), stride, pad2, dataFormat, dilation)];
    }
    case "Conv2D": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getPadding(node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      const dilations = getParamValue("dilations", node, tensorMap, context);
      return [ops.conv2d(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), [stride[1], stride[2]], pad2, dataFormat, [dilations[1], dilations[2]])];
    }
    case "_FusedConv2D": {
      const {
        stride,
        pad: pad2,
        dataFormat,
        dilations,
        biasArg,
        preluArg,
        activationFunc,
        leakyreluAlpha
      } = fusedConvAndDepthWiseParams(node, tensorMap, context);
      return [ops.fused.conv2d({
        x: getParamValue("x", node, tensorMap, context),
        filter: getParamValue("filter", node, tensorMap, context),
        strides: [stride[1], stride[2]],
        pad: pad2,
        dataFormat,
        dilations: [dilations[1], dilations[2]],
        bias: biasArg,
        activation: activationFunc,
        preluActivationWeights: preluArg,
        leakyreluAlpha
      })];
    }
    case "FusedDepthwiseConv2dNative": {
      const {
        stride,
        pad: pad2,
        dataFormat,
        dilations,
        biasArg,
        preluArg,
        activationFunc,
        leakyreluAlpha
      } = fusedConvAndDepthWiseParams(node, tensorMap, context);
      return [ops.fused.depthwiseConv2d({
        x: getParamValue("x", node, tensorMap, context),
        filter: getParamValue("filter", node, tensorMap, context),
        strides: [stride[1], stride[2]],
        pad: pad2,
        dataFormat,
        dilations: [dilations[1], dilations[2]],
        bias: biasArg,
        activation: activationFunc,
        preluActivationWeights: preluArg,
        leakyreluAlpha
      })];
    }
    case "Conv2DBackpropInput":
    case "Conv2dTranspose": {
      const shape = getParamValue("outputShape", node, tensorMap, context);
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getPadding(node, tensorMap, context);
      return [ops.conv2dTranspose(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), shape, [stride[1], stride[2]], pad2)];
    }
    case "DepthwiseConv2dNative":
    case "DepthwiseConv2d": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getPadding(node, tensorMap, context);
      const dilations = getParamValue("dilations", node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      return [ops.depthwiseConv2d(getParamValue("input", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), [stride[1], stride[2]], pad2, dataFormat, [dilations[1], dilations[2]])];
    }
    case "Conv3D": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      const dilations = getParamValue("dilations", node, tensorMap, context);
      return [ops.conv3d(getParamValue("x", node, tensorMap, context), getParamValue("filter", node, tensorMap, context), [stride[1], stride[2], stride[3]], pad2, dataFormat, [dilations[1], dilations[2], dilations[3]])];
    }
    case "AvgPool": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      return [ops.avgPool(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad2)];
    }
    case "MaxPool": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      return [ops.maxPool(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad2)];
    }
    case "MaxPoolWithArgmax": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      const includeBatchInIndex = getParamValue("includeBatchInIndex", node, tensorMap, context);
      const {
        result,
        indexes
      } = ops.maxPoolWithArgmax(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad2, includeBatchInIndex);
      return [result, indexes];
    }
    case "AvgPool3D": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      return [ops.avgPool3d(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad2)];
    }
    case "MaxPool3D": {
      const stride = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const kernelSize = getParamValue("kernelSize", node, tensorMap, context);
      return [ops.maxPool3d(getParamValue("x", node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad2)];
    }
    case "Dilation2D": {
      const strides = getParamValue("strides", node, tensorMap, context);
      const pad2 = getParamValue("pad", node, tensorMap, context);
      const dilations = getParamValue("dilations", node, tensorMap, context);
      const strideHeight = strides[1];
      const strideWidth = strides[2];
      const dilationHeight = dilations[1];
      const dilationWidth = dilations[2];
      return [ops.dilation2d(
        getParamValue("x", node, tensorMap, context),
        getParamValue("filter", node, tensorMap, context),
        [strideHeight, strideWidth],
        pad2,
        [dilationHeight, dilationWidth],
        "NHWC"
        /* dataFormat */
      )];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/creation_executor.js
var executeOp5 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Fill": {
      const shape = getParamValue("shape", node, tensorMap, context);
      const dtype = getParamValue("dtype", node, tensorMap, context);
      const value = getParamValue("value", node, tensorMap, context);
      return [ops.fill(shape, value, dtype)];
    }
    case "LinSpace": {
      const start = getParamValue("start", node, tensorMap, context);
      const stop = getParamValue("stop", node, tensorMap, context);
      const num = getParamValue("num", node, tensorMap, context);
      return [ops.linspace(start, stop, num)];
    }
    case "Multinomial": {
      const logits = getParamValue("logits", node, tensorMap, context);
      const numSamples = getParamValue("numSamples", node, tensorMap, context);
      const seed = getParamValue("seed", node, tensorMap, context);
      return [ops.multinomial(logits, numSamples, seed)];
    }
    case "OneHot": {
      const indices = getParamValue("indices", node, tensorMap, context);
      const depth = getParamValue("depth", node, tensorMap, context);
      const onValue = getParamValue("onValue", node, tensorMap, context);
      const offValue = getParamValue("offValue", node, tensorMap, context);
      const dtype = getParamValue("dtype", node, tensorMap, context);
      return [ops.oneHot(indices, depth, onValue, offValue, dtype)];
    }
    case "Ones": {
      return [ops.ones(getParamValue("shape", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context))];
    }
    case "OnesLike": {
      return [ops.onesLike(getParamValue("x", node, tensorMap, context))];
    }
    case "RandomStandardNormal": {
      return [ops.randomStandardNormal(getParamValue("shape", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context), getParamValue("seed", node, tensorMap, context))];
    }
    case "RandomUniform": {
      return [ops.randomUniform(
        // tslint:disable-next-line:no-any
        getParamValue("shape", node, tensorMap, context),
        getParamValue("minval", node, tensorMap, context),
        getParamValue("maxval", node, tensorMap, context),
        getParamValue("dtype", node, tensorMap, context)
      )];
    }
    case "RandomUniformInt": {
      return [ops.randomUniformInt(getParamValue("shape", node, tensorMap, context), getParamValue("minval", node, tensorMap, context), getParamValue("maxval", node, tensorMap, context), getParamValue("seed", node, tensorMap, context))];
    }
    case "Range": {
      const start = getParamValue("start", node, tensorMap, context);
      const stop = getParamValue("stop", node, tensorMap, context);
      const step2 = getParamValue("step", node, tensorMap, context);
      return [ops.range(start, stop, step2, getParamValue("dtype", node, tensorMap, context))];
    }
    case "TruncatedNormal": {
      const shape = getParamValue("shape", node, tensorMap, context);
      const mean2 = getParamValue("mean", node, tensorMap, context);
      const stdDev = getParamValue("stdDev", node, tensorMap, context);
      const seed = getParamValue("seed", node, tensorMap, context);
      return [ops.truncatedNormal(shape, mean2, stdDev, getParamValue("dtype", node, tensorMap, context), seed)];
    }
    case "Zeros": {
      return [ops.zeros(getParamValue("shape", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context))];
    }
    case "ZerosLike": {
      return [ops.zerosLike(getParamValue("x", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/dynamic_executor.js
function nmsParams(node, tensorMap, context) {
  const boxes = getParamValue("boxes", node, tensorMap, context);
  const scores = getParamValue("scores", node, tensorMap, context);
  const maxOutputSize = getParamValue("maxOutputSize", node, tensorMap, context);
  const iouThreshold = getParamValue("iouThreshold", node, tensorMap, context);
  const scoreThreshold = getParamValue("scoreThreshold", node, tensorMap, context);
  const softNmsSigma = getParamValue("softNmsSigma", node, tensorMap, context);
  return {
    boxes,
    scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma
  };
}
var executeOp6 = (_0, _1, _2, _3, ..._4) => __async(void 0, [_0, _1, _2, _3, ..._4], function* (node, tensorMap, context, resourceManager, ops = ops_for_converter_exports) {
  switch (node.op) {
    case "NonMaxSuppressionV5": {
      const {
        boxes,
        scores,
        maxOutputSize,
        iouThreshold,
        scoreThreshold,
        softNmsSigma
      } = nmsParams(node, tensorMap, context);
      const result = yield ops.image.nonMaxSuppressionWithScoreAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
      return [result.selectedIndices, result.selectedScores];
    }
    case "NonMaxSuppressionV4": {
      const {
        boxes,
        scores,
        maxOutputSize,
        iouThreshold,
        scoreThreshold
      } = nmsParams(node, tensorMap, context);
      const padToMaxOutputSize = getParamValue("padToMaxOutputSize", node, tensorMap, context);
      const result = yield ops.image.nonMaxSuppressionPaddedAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
      return [result.selectedIndices, result.validOutputs];
    }
    case "NonMaxSuppressionV3":
    case "NonMaxSuppressionV2": {
      const {
        boxes,
        scores,
        maxOutputSize,
        iouThreshold,
        scoreThreshold
      } = nmsParams(node, tensorMap, context);
      return [yield ops.image.nonMaxSuppressionAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold)];
    }
    case "Where": {
      const condition = ops.cast(getParamValue("condition", node, tensorMap, context), "bool");
      const result = [yield ops.whereAsync(condition)];
      condition.dispose();
      return result;
    }
    case "ListDiff": {
      return ops.setdiff1dAsync(getParamValue("x", node, tensorMap, context), getParamValue("y", node, tensorMap, context));
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
});

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/evaluation_executor.js
var executeOp7 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "LowerBound": {
      const sortedSequence = getParamValue("sortedSequence", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      return [ops.lowerBound(sortedSequence, values)];
    }
    case "TopKV2": {
      const x = getParamValue("x", node, tensorMap, context);
      const k = getParamValue("k", node, tensorMap, context);
      const sorted = getParamValue("sorted", node, tensorMap, context);
      const result = ops.topk(x, k, sorted);
      return [result.values, result.indices];
    }
    case "UpperBound": {
      const sortedSequence = getParamValue("sortedSequence", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      return [ops.upperBound(sortedSequence, values)];
    }
    case "Unique": {
      const x = getParamValue("x", node, tensorMap, context);
      const result = ops.unique(x);
      return [result.values, result.indices];
    }
    case "UniqueV2": {
      const x = getParamValue("x", node, tensorMap, context);
      const axis = getParamValue("axis", node, tensorMap, context);
      const result = ops.unique(x, axis);
      return [result.values, result.indices];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/graph_executor.js
var executeOp8 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Const": {
      return tensorMap[node.name];
    }
    case "PlaceholderWithDefault":
      const def = getParamValue("default", node, tensorMap, context);
      return [getTensor(node.name, tensorMap, context) || def];
    case "Placeholder":
      return [getTensor(node.name, tensorMap, context)];
    case "Identity":
    case "StopGradient":
    case "FakeQuantWithMinMaxVars": {
      const data2 = getParamValue("x", node, tensorMap, context);
      return [cloneTensor(data2)];
    }
    case "IdentityN":
      return getParamValue("x", node, tensorMap, context).map((t) => cloneTensor(t));
    case "Snapshot":
      const snapshot = getParamValue("x", node, tensorMap, context);
      return [cloneTensor(snapshot)];
    case "Shape":
      return [ops.tensor1d(getParamValue("x", node, tensorMap, context).shape, "int32")];
    case "ShapeN":
      return getParamValue("x", node, tensorMap, context).map((t) => ops.tensor1d(t.shape));
    case "Size":
      return [ops.scalar(getParamValue("x", node, tensorMap, context).size, "int32")];
    case "Rank":
      return [ops.scalar(getParamValue("x", node, tensorMap, context).rank, "int32")];
    case "NoOp":
      return [ops.scalar(1)];
    case "Print":
      const input = getParamValue("x", node, tensorMap, context);
      const data = getParamValue("data", node, tensorMap, context);
      const message = getParamValue("message", node, tensorMap, context);
      const summarize = getParamValue("summarize", node, tensorMap, context);
      console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance.");
      console.log(message);
      for (let i = 0; i < data.length; i++) {
        console.log(Array.prototype.slice.call(data[i].dataSync()).slice(0, summarize));
      }
      return [input];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/hash_table.js
var HashTable = class {
  get id() {
    return this.handle.id;
  }
  /**
   * Constructor of HashTable. Creates a hash table.
   *
   * @param keyDType `dtype` of the table keys.
   * @param valueDType `dtype` of the table values.
   */
  constructor(keyDType, valueDType) {
    this.keyDType = keyDType;
    this.valueDType = valueDType;
    this.handle = scalar(0);
    this.tensorMap = /* @__PURE__ */ new Map();
    keep(this.handle);
  }
  /**
   * Dispose the tensors and handle and clear the hashtable.
   */
  clearAndClose() {
    this.tensorMap.forEach((value) => value.dispose());
    this.tensorMap.clear();
    this.handle.dispose();
  }
  /**
   * The number of items in the hash table.
   */
  size() {
    return this.tensorMap.size;
  }
  /**
   * The number of items in the hash table as a rank-0 tensor.
   */
  tensorSize() {
    return scalar(this.size(), "int32");
  }
  /**
   * Replaces the contents of the table with the specified keys and values.
   * @param keys Keys to store in the hashtable.
   * @param values Values to store in the hashtable.
   */
  import(keys, values) {
    return __async(this, null, function* () {
      this.checkKeyAndValueTensor(keys, values);
      const $keys = yield keys.data();
      this.tensorMap.forEach((value) => value.dispose());
      this.tensorMap.clear();
      return tidy(() => {
        const $values = unstack(values);
        const keysLength = $keys.length;
        const valuesLength = $values.length;
        util_exports.assert(keysLength === valuesLength, () => `The number of elements doesn't match, keys has ${keysLength} elements, the values has ${valuesLength} elements.`);
        for (let i = 0; i < keysLength; i++) {
          const key = $keys[i];
          const value = $values[i];
          keep(value);
          this.tensorMap.set(key, value);
        }
        return this.handle;
      });
    });
  }
  /**
   * Looks up keys in a hash table, outputs the corresponding values.
   *
   * Performs batch lookups, for every element in the key tensor, `find`
   * stacks the corresponding value into the return tensor.
   *
   * If an element is not present in the table, the given `defaultValue` is
   * used.
   *
   * @param keys Keys to look up. Must have the same type as the keys of the
   *     table.
   * @param defaultValue The scalar `defaultValue` is the value output for keys
   *     not present in the table. It must also be of the same type as the
   *     table values.
   */
  find(keys, defaultValue) {
    return __async(this, null, function* () {
      this.checkKeyAndValueTensor(keys, defaultValue);
      const $keys = yield keys.data();
      return tidy(() => {
        const result = [];
        for (let i = 0; i < $keys.length; i++) {
          const key = $keys[i];
          const value = this.findWithDefault(key, defaultValue);
          result.push(value);
        }
        return stack(result);
      });
    });
  }
  // tslint:disable-next-line: no-any
  findWithDefault(key, defaultValue) {
    const result = this.tensorMap.get(key);
    return result != null ? result : defaultValue;
  }
  checkKeyAndValueTensor(key, value) {
    if (key.dtype !== this.keyDType) {
      throw new Error(`Expect key dtype ${this.keyDType}, but got ${key.dtype}`);
    }
    if (value.dtype !== this.valueDType) {
      throw new Error(`Expect value dtype ${this.valueDType}, but got ${value.dtype}`);
    }
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/hash_table_executor.js
var executeOp9 = (node, tensorMap, context, resourceManager) => __async(void 0, null, function* () {
  switch (node.op) {
    case "HashTable":
    case "HashTableV2": {
      const existingTableHandle = resourceManager.getHashTableHandleByName(node.name);
      if (existingTableHandle != null) {
        return [existingTableHandle];
      } else {
        const keyDType = getParamValue("keyDType", node, tensorMap, context);
        const valueDType = getParamValue("valueDType", node, tensorMap, context);
        const hashTable = new HashTable(keyDType, valueDType);
        resourceManager.addHashTable(node.name, hashTable);
        return [hashTable.handle];
      }
    }
    case "InitializeTable":
    case "InitializeTableV2":
    case "LookupTableImport":
    case "LookupTableImportV2": {
      const handle = getParamValue("tableHandle", node, tensorMap, context, resourceManager);
      const keys = getParamValue("keys", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      const hashTable = resourceManager.getHashTableById(handle.id);
      return [yield hashTable.import(keys, values)];
    }
    case "LookupTableFind":
    case "LookupTableFindV2": {
      const handle = getParamValue("tableHandle", node, tensorMap, context, resourceManager);
      const keys = getParamValue("keys", node, tensorMap, context);
      const defaultValue = getParamValue("defaultValue", node, tensorMap, context);
      const hashTable = resourceManager.getHashTableById(handle.id);
      return [yield hashTable.find(keys, defaultValue)];
    }
    case "LookupTableSize":
    case "LookupTableSizeV2": {
      const handle = getParamValue("tableHandle", node, tensorMap, context, resourceManager);
      const hashTable = resourceManager.getHashTableById(handle.id);
      return [hashTable.tensorSize()];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
});

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/image_executor.js
var executeOp10 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "ResizeBilinear": {
      const images = getParamValue("images", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      const alignCorners = getParamValue("alignCorners", node, tensorMap, context);
      const halfPixelCenters = getParamValue("halfPixelCenters", node, tensorMap, context);
      return [ops.image.resizeBilinear(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
    }
    case "ResizeNearestNeighbor": {
      const images = getParamValue("images", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      const alignCorners = getParamValue("alignCorners", node, tensorMap, context);
      const halfPixelCenters = getParamValue("halfPixelCenters", node, tensorMap, context);
      return [ops.image.resizeNearestNeighbor(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
    }
    case "CropAndResize": {
      const image2 = getParamValue("image", node, tensorMap, context);
      const boxes = getParamValue("boxes", node, tensorMap, context);
      const boxInd = getParamValue("boxInd", node, tensorMap, context);
      const cropSize = getParamValue("cropSize", node, tensorMap, context);
      const method = getParamValue("method", node, tensorMap, context);
      const extrapolationValue = getParamValue("extrapolationValue", node, tensorMap, context);
      return [ops.image.cropAndResize(image2, boxes, boxInd, cropSize, method, extrapolationValue)];
    }
    case "ImageProjectiveTransformV3": {
      const images = getParamValue("images", node, tensorMap, context);
      const transforms = getParamValue("transforms", node, tensorMap, context);
      const outputShape = getParamValue("outputShape", node, tensorMap, context);
      const fillValue = getParamValue("fillValue", node, tensorMap, context);
      const interpolation = getParamValue("interpolation", node, tensorMap, context);
      const fillMode = getParamValue("fillMode", node, tensorMap, context);
      return [ops.image.transform(images, transforms, interpolation.toLowerCase(), fillMode.toLowerCase(), fillValue, outputShape)];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/logical_executor.js
var executeOp11 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Equal": {
      return [ops.equal(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "NotEqual": {
      return [ops.notEqual(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Greater": {
      return [ops.greater(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "GreaterEqual": {
      return [ops.greaterEqual(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Less": {
      return [ops.less(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "LessEqual": {
      return [ops.lessEqual(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "LogicalAnd": {
      return [ops.logicalAnd(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "LogicalNot": {
      return [ops.logicalNot(getParamValue("a", node, tensorMap, context))];
    }
    case "LogicalOr": {
      return [ops.logicalOr(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "Select":
    case "SelectV2": {
      return [ops.where(getParamValue("condition", node, tensorMap, context), getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    case "BitwiseAnd": {
      return [ops.bitwiseAnd(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/matrices_executor.js
var executeOp12 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "BatchMatMul":
    case "BatchMatMulV2":
    case "MatMul":
      return [ops.matMul(getParamValue("a", node, tensorMap, context), getParamValue("b", node, tensorMap, context), getParamValue("transposeA", node, tensorMap, context), getParamValue("transposeB", node, tensorMap, context))];
    case "Einsum":
      return [ops.einsum(getParamValue("equation", node, tensorMap, context), ...getParamValue("tensors", node, tensorMap, context))];
    case "Transpose":
      return [ops.transpose(getParamValue("x", node, tensorMap, context), getParamValue("perm", node, tensorMap, context))];
    case "_FusedMatMul":
      const [extraOp, activationFunc] = getParamValue("fusedOps", node, tensorMap, context);
      const isBiasAdd = extraOp === "biasadd";
      const isPrelu = activationFunc === "prelu";
      const numArgs = getParamValue("numArgs", node, tensorMap, context);
      const leakyreluAlpha = getParamValue("leakyreluAlpha", node, tensorMap, context);
      if (isBiasAdd) {
        if (isPrelu && numArgs !== 2) {
          throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
        }
        if (!isPrelu && numArgs !== 1) {
          throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.");
        }
      }
      const [biasArg, preluArg] = getParamValue("args", node, tensorMap, context);
      return [ops.fused.matMul({
        a: getParamValue("a", node, tensorMap, context),
        b: getParamValue("b", node, tensorMap, context),
        transposeA: getParamValue("transposeA", node, tensorMap, context),
        transposeB: getParamValue("transposeB", node, tensorMap, context),
        bias: biasArg,
        activation: activationFunc,
        preluActivationWeights: preluArg,
        leakyreluAlpha
      })];
    case "MatrixBandPart":
      return [ops.linalg.bandPart(getParamValue("a", node, tensorMap, context), getParamValue("numLower", node, tensorMap, context), getParamValue("numUpper", node, tensorMap, context))];
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/normalization_executor.js
var executeOp13 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "EuclideanNorm":
      return [ops.euclideanNorm(getParamValue("x", node, tensorMap, context), getParamValue("axis", node, tensorMap, context), getParamValue("keepDims", node, tensorMap, context))];
    case "FusedBatchNorm":
    case "FusedBatchNormV2": {
      return [ops.batchNorm(getParamValue("x", node, tensorMap, context), getParamValue("mean", node, tensorMap, context), getParamValue("variance", node, tensorMap, context), getParamValue("offset", node, tensorMap, context), getParamValue("scale", node, tensorMap, context), getParamValue("epsilon", node, tensorMap, context))];
    }
    case "FusedBatchNormV3": {
      return [ops.batchNorm(getParamValue("x", node, tensorMap, context), getParamValue("mean", node, tensorMap, context), getParamValue("variance", node, tensorMap, context), getParamValue("offset", node, tensorMap, context), getParamValue("scale", node, tensorMap, context), getParamValue("epsilon", node, tensorMap, context))];
    }
    case "LRN": {
      return [ops.localResponseNormalization(getParamValue("x", node, tensorMap, context), getParamValue("radius", node, tensorMap, context), getParamValue("bias", node, tensorMap, context), getParamValue("alpha", node, tensorMap, context), getParamValue("beta", node, tensorMap, context))];
    }
    case "Softmax": {
      return [ops.softmax(getParamValue("x", node, tensorMap, context))];
    }
    case "LogSoftmax": {
      return [ops.logSoftmax(getParamValue("x", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/ragged_executor.js
var executeOp14 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "RaggedGather": {
      const {
        outputNestedSplits,
        outputDenseValues
      } = ops.raggedGather(getParamValue("paramsNestedSplits", node, tensorMap, context), getParamValue("paramsDenseValues", node, tensorMap, context), getParamValue("indices", node, tensorMap, context), getParamValue("outputRaggedRank", node, tensorMap, context));
      return outputNestedSplits.concat(outputDenseValues);
    }
    case "RaggedRange": {
      const {
        rtNestedSplits,
        rtDenseValues
      } = ops.raggedRange(getParamValue("starts", node, tensorMap, context), getParamValue("limits", node, tensorMap, context), getParamValue("splits", node, tensorMap, context));
      return [rtNestedSplits, rtDenseValues];
    }
    case "RaggedTensorToTensor": {
      return [ops.raggedTensorToTensor(getParamValue("shape", node, tensorMap, context), getParamValue("values", node, tensorMap, context), getParamValue("defaultValue", node, tensorMap, context), getParamValue("rowPartitionTensors", node, tensorMap, context), getParamValue("rowPartitionTypes", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/reduction_executor.js
var executeOp15 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Max": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.max(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Mean": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.mean(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Min": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.min(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Sum": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.sum(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "All": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.all(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Any": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.any(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "ArgMax": {
      const axis = getParamValue("axis", node, tensorMap, context);
      return [ops.argMax(getParamValue("x", node, tensorMap, context), axis)];
    }
    case "ArgMin": {
      const axis = getParamValue("axis", node, tensorMap, context);
      return [ops.argMin(getParamValue("x", node, tensorMap, context), axis)];
    }
    case "Prod": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const keepDims = getParamValue("keepDims", node, tensorMap, context);
      return [ops.prod(getParamValue("x", node, tensorMap, context), axis, keepDims)];
    }
    case "Cumprod": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const exclusive = getParamValue("exclusive", node, tensorMap, context);
      const reverse2 = getParamValue("reverse", node, tensorMap, context);
      return [ops.cumprod(getParamValue("x", node, tensorMap, context), axis, exclusive, reverse2)];
    }
    case "Cumsum": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const exclusive = getParamValue("exclusive", node, tensorMap, context);
      const reverse2 = getParamValue("reverse", node, tensorMap, context);
      return [ops.cumsum(getParamValue("x", node, tensorMap, context), axis, exclusive, reverse2)];
    }
    case "Bincount":
      const x = getParamValue("x", node, tensorMap, context);
      const weights = getParamValue("weights", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      return [ops.bincount(x, weights, size)];
    case "DenseBincount": {
      const x2 = getParamValue("x", node, tensorMap, context);
      const weights2 = getParamValue("weights", node, tensorMap, context);
      const size2 = getParamValue("size", node, tensorMap, context);
      const binaryOutput = getParamValue("binaryOutput", node, tensorMap, context);
      return [ops.denseBincount(x2, weights2, size2, binaryOutput)];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/slice_join_executor.js
var executeOp16 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "ConcatV2":
    case "Concat": {
      const n = getParamValue("n", node, tensorMap, context);
      const axis = getParamValue("axis", node, tensorMap, context);
      let inputs = getParamValue("tensors", node, tensorMap, context);
      inputs = inputs.slice(0, n);
      return [ops.concat(inputs, axis)];
    }
    case "Gather": {
      const input = getParamValue("x", node, tensorMap, context);
      const indices = getParamValue("indices", node, tensorMap, context);
      return [ops.gather(input, ops.cast(indices, "int32"), 0)];
    }
    case "GatherV2": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const batchDims = getParamValue("batchDims", node, tensorMap, context);
      const input = getParamValue("x", node, tensorMap, context);
      const indices = getParamValue("indices", node, tensorMap, context);
      return [ops.gather(input, ops.cast(indices, "int32"), axis, batchDims)];
    }
    case "Reverse": {
      const dims = getParamValue("dims", node, tensorMap, context);
      const axis = [];
      for (let i = 0; i < dims.length; i++) {
        if (dims[i]) {
          axis.push(i);
        }
      }
      const input = getParamValue("x", node, tensorMap, context);
      return [ops.reverse(input, axis)];
    }
    case "ReverseV2": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const input = getParamValue("x", node, tensorMap, context);
      return [ops.reverse(input, axis)];
    }
    case "Slice": {
      const begin = getParamValue("begin", node, tensorMap, context);
      const size = getParamValue("size", node, tensorMap, context);
      return [ops.slice(getParamValue("x", node, tensorMap, context), begin, size)];
    }
    case "StridedSlice": {
      const begin = getParamValue("begin", node, tensorMap, context);
      const end = getParamValue("end", node, tensorMap, context);
      const strides = getParamValue("strides", node, tensorMap, context);
      const beginMask = getParamValue("beginMask", node, tensorMap, context);
      const endMask = getParamValue("endMask", node, tensorMap, context);
      const ellipsisMask = getParamValue("ellipsisMask", node, tensorMap, context);
      const newAxisMask = getParamValue("newAxisMask", node, tensorMap, context);
      const shrinkAxisMask = getParamValue("shrinkAxisMask", node, tensorMap, context);
      const tensor2 = getParamValue("x", node, tensorMap, context);
      return [ops.stridedSlice(tensor2, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask)];
    }
    case "Pack": {
      return tidy(() => {
        const axis = getParamValue("axis", node, tensorMap, context);
        const tensors = getParamValue("tensors", node, tensorMap, context);
        const shape = tensors[0].shape;
        const squeezedShape = ops.squeeze(tensors[0]).shape;
        const mapped = tensors.map((tensor2) => {
          const sameShape = util_exports.arraysEqual(tensor2.shape, shape);
          if (!sameShape && !util_exports.arraysEqual(ops.squeeze(tensor2).shape, squeezedShape)) {
            throw new Error("the input tensors shape does not match");
          }
          return sameShape ? tensor2 : ops.reshape(tensor2, shape);
        });
        return [ops.stack(mapped, axis)];
      });
    }
    case "Unpack": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const tensor2 = getParamValue("tensor", node, tensorMap, context);
      return ops.unstack(tensor2, axis);
    }
    case "Tile": {
      const reps = getParamValue("reps", node, tensorMap, context);
      return [ops.tile(getParamValue("x", node, tensorMap, context), reps)];
    }
    case "Split":
    case "SplitV": {
      const axis = getParamValue("axis", node, tensorMap, context);
      const numOrSizeSplits = getParamValue("numOrSizeSplits", node, tensorMap, context);
      const tensor2 = getParamValue("x", node, tensorMap, context);
      return ops.split(tensor2, numOrSizeSplits, axis);
    }
    case "ScatterNd": {
      const indices = getParamValue("indices", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      const shape = getParamValue("shape", node, tensorMap, context);
      return [ops.scatterND(indices, values, shape)];
    }
    case "GatherNd": {
      const x = getParamValue("x", node, tensorMap, context);
      const indices = getParamValue("indices", node, tensorMap, context);
      return [ops.gatherND(x, indices)];
    }
    case "SparseToDense": {
      const indices = getParamValue("sparseIndices", node, tensorMap, context);
      const shape = getParamValue("outputShape", node, tensorMap, context);
      const sparseValues = getParamValue("sparseValues", node, tensorMap, context);
      const defaultValue = getParamValue("defaultValue", node, tensorMap, context);
      return [ops.sparseToDense(indices, sparseValues, shape, sparseValues.dtype === defaultValue.dtype ? defaultValue : ops.cast(defaultValue, sparseValues.dtype))];
    }
    case "TensorScatterUpdate": {
      const indices = getParamValue("indices", node, tensorMap, context);
      const values = getParamValue("values", node, tensorMap, context);
      const tensor2 = getParamValue("tensor", node, tensorMap, context);
      return [ops.tensorScatterUpdate(tensor2, indices, values)];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/sparse_executor.js
var executeOp17 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "SparseFillEmptyRows": {
      const {
        outputIndices,
        outputValues,
        emptyRowIndicator,
        reverseIndexMap
      } = ops.sparse.sparseFillEmptyRows(getParamValue("indices", node, tensorMap, context), getParamValue("values", node, tensorMap, context), getParamValue("denseShape", node, tensorMap, context), getParamValue("defaultValue", node, tensorMap, context));
      return [outputIndices, outputValues, emptyRowIndicator, reverseIndexMap];
    }
    case "SparseReshape": {
      const {
        outputIndices,
        outputShape
      } = ops.sparse.sparseReshape(getParamValue("inputIndices", node, tensorMap, context), getParamValue("inputShape", node, tensorMap, context), getParamValue("newShape", node, tensorMap, context));
      return [outputIndices, outputShape];
    }
    case "SparseSegmentMean": {
      const outputData = ops.sparse.sparseSegmentMean(getParamValue("data", node, tensorMap, context), getParamValue("indices", node, tensorMap, context), getParamValue("segmentIds", node, tensorMap, context));
      return [outputData];
    }
    case "SparseSegmentSum": {
      const outputData = ops.sparse.sparseSegmentSum(getParamValue("data", node, tensorMap, context), getParamValue("indices", node, tensorMap, context), getParamValue("segmentIds", node, tensorMap, context));
      return [outputData];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/spectral_executor.js
var executeOp18 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "FFT": {
      return [ops.fft(getParamValue("x", node, tensorMap, context))];
    }
    case "IFFT": {
      return [ops.ifft(getParamValue("x", node, tensorMap, context))];
    }
    case "RFFT": {
      return [ops.rfft(getParamValue("x", node, tensorMap, context))];
    }
    case "IRFFT": {
      return [ops.irfft(getParamValue("x", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/string_executor.js
var executeOp19 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "StaticRegexReplace": {
      return [ops.string.staticRegexReplace(getParamValue("input", node, tensorMap, context), getParamValue("pattern", node, tensorMap, context), getParamValue("rewrite", node, tensorMap, context), getParamValue("replaceGlobal", node, tensorMap, context))];
    }
    case "StringNGrams": {
      const {
        nGrams,
        nGramsSplits
      } = ops.string.stringNGrams(getParamValue("data", node, tensorMap, context), getParamValue("dataSplits", node, tensorMap, context), getParamValue("separator", node, tensorMap, context), getParamValue("nGramWidths", node, tensorMap, context), getParamValue("leftPad", node, tensorMap, context), getParamValue("rightPad", node, tensorMap, context), getParamValue("padWidth", node, tensorMap, context), getParamValue("preserveShortSequences", node, tensorMap, context));
      return [nGrams, nGramsSplits];
    }
    case "StringSplit": {
      const {
        indices,
        values,
        shape
      } = ops.string.stringSplit(getParamValue("input", node, tensorMap, context), getParamValue("delimiter", node, tensorMap, context), getParamValue("skipEmpty", node, tensorMap, context));
      return [indices, values, shape];
    }
    case "StringToHashBucketFast": {
      const output = ops.string.stringToHashBucketFast(getParamValue("input", node, tensorMap, context), getParamValue("numBuckets", node, tensorMap, context));
      return [output];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/executors/transformation_executor.js
var executeOp20 = (node, tensorMap, context, ops = ops_for_converter_exports) => {
  switch (node.op) {
    case "Cast": {
      return [ops.cast(getParamValue("x", node, tensorMap, context), getParamValue("dtype", node, tensorMap, context))];
    }
    case "ExpandDims": {
      const axis = getParamValue("axis", node, tensorMap, context);
      return [ops.expandDims(getParamValue("x", node, tensorMap, context), axis)];
    }
    case "Squeeze": {
      const axis = getParamValue("axis", node, tensorMap, context);
      return [ops.squeeze(getParamValue("x", node, tensorMap, context), axis)];
    }
    case "Reshape": {
      return [ops.reshape(getParamValue("x", node, tensorMap, context), getParamValue("shape", node, tensorMap, context))];
    }
    case "EnsureShape": {
      return [ops.ensureShape(getParamValue("x", node, tensorMap, context), getParamValue("shape", node, tensorMap, context))];
    }
    case "MirrorPad": {
      return [ops.mirrorPad(getParamValue("x", node, tensorMap, context), getParamValue("padding", node, tensorMap, context), getParamValue("mode", node, tensorMap, context))];
    }
    case "PadV2":
    case "Pad": {
      return [ops.pad(getParamValue("x", node, tensorMap, context), getParamValue("padding", node, tensorMap, context), getParamValue("constantValue", node, tensorMap, context))];
    }
    case "SpaceToBatchND": {
      const blockShape = getParamValue("blockShape", node, tensorMap, context);
      const paddings = getParamValue("paddings", node, tensorMap, context);
      return [ops.spaceToBatchND(getParamValue("x", node, tensorMap, context), blockShape, paddings)];
    }
    case "BatchToSpaceND": {
      const blockShape = getParamValue("blockShape", node, tensorMap, context);
      const crops = getParamValue("crops", node, tensorMap, context);
      return [ops.batchToSpaceND(getParamValue("x", node, tensorMap, context), blockShape, crops)];
    }
    case "DepthToSpace": {
      const blockSize = getParamValue("blockSize", node, tensorMap, context);
      const dataFormat = getParamValue("dataFormat", node, tensorMap, context).toUpperCase();
      return [ops.depthToSpace(getParamValue("x", node, tensorMap, context), blockSize, dataFormat)];
    }
    case "BroadcastTo": {
      return [ops.broadcastTo(getParamValue("x", node, tensorMap, context), getParamValue("shape", node, tensorMap, context))];
    }
    case "BroadcastArgs": {
      return [ops.broadcastArgs(getParamValue("s0", node, tensorMap, context), getParamValue("s1", node, tensorMap, context))];
    }
    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/operations/operation_executor.js
function executeOp21(node, tensorMap, context, resourceManager, tidy2 = tidy) {
  const value = ((node2, tensorMap2, context2) => {
    switch (node2.category) {
      case "arithmetic":
        return tidy2(() => executeOp(node2, tensorMap2, context2));
      case "basic_math":
        return tidy2(() => executeOp2(node2, tensorMap2, context2));
      case "control":
        return executeOp3(node2, tensorMap2, context2);
      case "convolution":
        return tidy2(() => executeOp4(node2, tensorMap2, context2));
      case "creation":
        return tidy2(() => executeOp5(node2, tensorMap2, context2));
      case "dynamic":
        return executeOp6(node2, tensorMap2, context2);
      case "evaluation":
        return tidy2(() => executeOp7(node2, tensorMap2, context2));
      case "image":
        return tidy2(() => executeOp10(node2, tensorMap2, context2));
      case "graph":
        return tidy2(() => executeOp8(node2, tensorMap2, context2));
      case "logical":
        return tidy2(() => executeOp11(node2, tensorMap2, context2));
      case "matrices":
        return tidy2(() => executeOp12(node2, tensorMap2, context2));
      case "normalization":
        return tidy2(() => executeOp13(node2, tensorMap2, context2));
      case "ragged":
        return tidy2(() => executeOp14(node2, tensorMap2, context2));
      case "reduction":
        return tidy2(() => executeOp15(node2, tensorMap2, context2));
      case "slice_join":
        return tidy2(() => executeOp16(node2, tensorMap2, context2));
      case "sparse":
        return tidy2(() => executeOp17(node2, tensorMap2, context2));
      case "spectral":
        return tidy2(() => executeOp18(node2, tensorMap2, context2));
      case "string":
        return tidy2(() => executeOp19(node2, tensorMap2, context2));
      case "transformation":
        return tidy2(() => executeOp20(node2, tensorMap2, context2));
      case "hash_table":
        return executeOp9(node2, tensorMap2, context2, resourceManager);
      case "custom":
        const opMapper = getRegisteredOp(node2.op);
        if (opMapper && opMapper.customExecutor) {
          return opMapper.customExecutor(new NodeValueImpl(node2, tensorMap2, context2));
        } else {
          throw TypeError(`Custom op ${node2.op} is not registered.`);
        }
      default:
        throw TypeError(`Unknown op '${node2.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`);
    }
  })(node, tensorMap, context);
  if (util_exports.isPromise(value)) {
    return value.then((data) => [].concat(data));
  }
  return [].concat(value);
}

// node_modules/@tensorflow/tfjs-converter/dist/executor/execution_context.js
var ExecutionContext = class {
  constructor(weightMap = {}, tensorArrayMap = {}, tensorListMap = {}, functionMap = {}, parseNodeNameCache) {
    this.weightMap = weightMap;
    this.tensorArrayMap = tensorArrayMap;
    this.tensorListMap = tensorListMap;
    this.functionMap = functionMap;
    this.parseNodeNameCache = parseNodeNameCache;
    this.rootContext = {
      id: 0,
      frameName: "",
      iterationId: 0
    };
    this.contexts = [this.rootContext];
    this.lastId = 0;
    this.generateCurrentContextIds();
  }
  newFrame(id, frameName) {
    return {
      id,
      frameName,
      iterationId: 0
    };
  }
  /**
   * Set the current context
   * @param contexts: ExecutionContextInfo[] the current path of execution
   * frames
   */
  set currentContext(contexts) {
    if (this.contexts !== contexts) {
      this.contexts = contexts;
      this.generateCurrentContextIds();
    }
  }
  get currentContext() {
    return this.contexts;
  }
  /**
   * Returns the current context in string format.
   */
  get currentContextId() {
    return this._currentContextIds[0];
  }
  /**
   * Returns the current context and all parent contexts in string format.
   * This allow access to the nodes in the current and parent frames.
   */
  get currentContextIds() {
    return this._currentContextIds;
  }
  generateCurrentContextIds() {
    const names = [];
    for (let i = 0; i < this.contexts.length - 1; i++) {
      const contexts = this.contexts.slice(0, this.contexts.length - i);
      names.push(this.contextIdforContexts(contexts));
    }
    names.push("");
    this._currentContextIds = names;
  }
  contextIdforContexts(contexts) {
    return contexts ? contexts.map((context) => context.id === 0 && context.iterationId === 0 ? "" : `${context.frameName}-${context.iterationId}`).join("/") : "";
  }
  /**
   * Enter a new frame, a new context is pushed on the current context list.
   * @param frameId new frame id
   */
  enterFrame(frameId) {
    if (this.contexts) {
      this.lastId++;
      this.contexts = this.contexts.slice();
      this.contexts.push(this.newFrame(this.lastId, frameId));
      this._currentContextIds.unshift(this.contextIdforContexts(this.contexts));
    }
  }
  /**
   * Exit the current frame, the last context is removed from the current
   * context list.
   */
  exitFrame() {
    if (this.contexts && this.contexts.length > 1) {
      this.contexts = this.contexts.slice();
      this.contexts.splice(-1);
      this.currentContextIds.shift();
    } else {
      throw new Error("Cannot exit frame, the context is empty");
    }
  }
  /**
   * Enter the next iteration of a loop, the iteration id of last context is
   * increased.
   */
  nextIteration() {
    if (this.contexts && this.contexts.length > 0) {
      this.contexts = this.contexts.slice();
      this.lastId++;
      const context = Object.assign({}, this.contexts[this.contexts.length - 1]);
      context.iterationId += 1;
      context.id = this.lastId;
      this.contexts.splice(-1, 1, context);
      this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
    } else {
      throw new Error("Cannot increase frame iteration, the context is empty");
    }
  }
  getWeight(name) {
    return this.weightMap[name];
  }
  addTensorArray(tensorArray) {
    this.tensorArrayMap[tensorArray.id] = tensorArray;
  }
  getTensorArray(id) {
    return this.tensorArrayMap[id];
  }
  addTensorList(tensorList) {
    this.tensorListMap[tensorList.id] = tensorList;
  }
  getTensorList(id) {
    return this.tensorListMap[id];
  }
  dispose(keepIds) {
    for (const key in this.tensorArrayMap) {
      this.tensorArrayMap[key].clearAndClose(keepIds);
    }
    for (const key in this.tensorListMap) {
      this.tensorListMap[key].clearAndClose(keepIds);
    }
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/model_analysis.js
function getExecutionSubgraph(inputs, outputs, weightMap, initNodes) {
  const usedNodes = /* @__PURE__ */ new Set();
  const missingInputs = [];
  let dynamicNode = null;
  let syncInputs = null;
  const seen = /* @__PURE__ */ new Set();
  const inputNodeNames = new Set(Object.keys(inputs).map((name) => parseNodeName(name)[0]));
  initNodes = initNodes || [];
  const initNodeNames = new Set(initNodes.map((node) => parseNodeName(node.name)[0]));
  const frontier = [...outputs];
  while (frontier.length > 0) {
    const node = frontier.pop();
    if (isControlFlow(node) || isDynamicShape(node) || isHashTable(node)) {
      if (dynamicNode == null) {
        dynamicNode = node;
        syncInputs = dynamicNode.children.map((child) => child.name).filter((name) => usedNodes.has(name));
      }
    }
    usedNodes.add(node.name);
    if (weightMap[node.name] != null) {
      continue;
    }
    if (inputNodeNames.has(node.name)) {
      continue;
    }
    if (initNodeNames.has(node.name)) {
      continue;
    }
    if (node.inputs.length === 0) {
      missingInputs.push(node.name);
      continue;
    }
    node.inputs.forEach((input) => {
      if (seen.has(input.name)) {
        return;
      }
      seen.add(input.name);
      frontier.push(input);
    });
  }
  return {
    inputs,
    outputs,
    usedNodes,
    missingInputs,
    dynamicNode,
    syncInputs
  };
}
function getNodesInTopologicalOrder(graph, executionInfo) {
  const {
    usedNodes,
    inputs
  } = executionInfo;
  const inputNodes = Object.keys(inputs).map((name) => parseNodeName(name)[0]).map((name) => graph.nodes[name]);
  const initNodes = graph.initNodes || [];
  const isUsed = (node) => usedNodes.has(typeof node === "string" ? node : node.name);
  function unique2(nodes) {
    return [...new Map(nodes.map((node) => [node.name, node])).values()];
  }
  const predefinedNodes = unique2([...inputNodes, ...graph.weights, ...initNodes]).filter(isUsed);
  const allNodes = unique2([...predefinedNodes, ...Object.values(graph.nodes)]).filter(isUsed);
  const nameToNode = new Map(allNodes.map((node) => [node.name, node]));
  const inCounts = {};
  for (const node of allNodes) {
    inCounts[node.name] = inCounts[node.name] || 0;
    for (const child of node.children) {
      if (!isUsed(child)) {
        inCounts[child.name] = Number.POSITIVE_INFINITY;
      }
      inCounts[child.name] = (inCounts[child.name] || 0) + 1;
    }
  }
  const frontier = Object.entries(inCounts).filter(([, inCount]) => inCount === 0).map(([name]) => name);
  const orderedNodeNames = [...frontier];
  while (frontier.length > 0) {
    const nodeName = frontier.pop();
    const node = nameToNode.get(nodeName);
    for (const child of node.children.filter(isUsed)) {
      if (--inCounts[child.name] === 0) {
        orderedNodeNames.push(child.name);
        frontier.push(child.name);
      }
    }
  }
  const orderedNodes = orderedNodeNames.map((name) => nameToNode.get(name));
  const filteredOrderedNodes = filterPredefinedReachableNodes(orderedNodes, predefinedNodes);
  validateNodesExecutionOrder(filteredOrderedNodes, predefinedNodes);
  return filteredOrderedNodes;
}
function filterPredefinedReachableNodes(orderedNodes, predefinedNodes) {
  const nameToNode = new Map(orderedNodes.map((node) => [node.name, node]));
  const stack2 = predefinedNodes.map((node) => node.name);
  const predefinedReachableNodeNames = new Set(stack2);
  while (stack2.length > 0) {
    const nodeName = stack2.pop();
    const node = nameToNode.get(nodeName);
    for (const child of node.children) {
      if (!nameToNode.has(child.name) || predefinedReachableNodeNames.has(child.name)) {
        continue;
      }
      predefinedReachableNodeNames.add(child.name);
      stack2.push(child.name);
    }
  }
  const filteredOrderedNodes = orderedNodes.filter((node) => predefinedReachableNodeNames.has(node.name));
  return filteredOrderedNodes;
}
var NodesExecutionOrderError = class extends Error {
  constructor(message) {
    super(`NodesExecutionOrderError: ${message}`);
  }
};
function validateNodesExecutionOrder(orderedNodes, predefinedNodes) {
  const nodeNameToOrder = new Map(orderedNodes.map((node, order) => [node.name, order]));
  const predefinedNodeNames = new Set(predefinedNodes.map((node) => node.name));
  const isPredefined = (node) => predefinedNodeNames.has(typeof node === "string" ? node : node.name);
  const willBeExecutedNodeNames = new Set(orderedNodes.map((node) => node.name));
  const willBeExecuted = (node) => willBeExecutedNodeNames.has(typeof node === "string" ? node : node.name);
  for (const node of orderedNodes) {
    for (const child of node.children.filter(willBeExecuted)) {
      if (!nodeNameToOrder.has(child.name)) {
        throw new NodesExecutionOrderError(`Child ${child.name} of node ${node.name} is unreachable.`);
      }
      if (nodeNameToOrder.get(node.name) > nodeNameToOrder.get(child.name)) {
        throw new NodesExecutionOrderError(`Node ${node.name} is scheduled to run after its child ${child.name}.`);
      }
    }
    if (!isPredefined(node)) {
      for (const input of node.inputs) {
        if (!nodeNameToOrder.has(input.name)) {
          throw new NodesExecutionOrderError(`Input ${input.name} of node ${node.name} is unreachable.`);
        }
        if (nodeNameToOrder.get(input.name) > nodeNameToOrder.get(node.name)) {
          throw new NodesExecutionOrderError(`Node ${node.name} is scheduled to run before its input ${input.name}.`);
        }
      }
    }
  }
}
function getNodeLiveUntilMap(orderedNodes) {
  const nodeNameToOrder = new Map(orderedNodes.map((node, order) => [node.name, order]));
  const INF_LIFE = Number.MAX_SAFE_INTEGER;
  const selfLifespans = orderedNodes.map((node, nodeOrder) => isControlFlow(node) ? INF_LIFE : nodeOrder);
  const getSelfLifeSpan = (node) => {
    const selfLife = selfLifespans[nodeNameToOrder.get(node.name)];
    if (selfLife == null) {
      return -1;
    }
    return selfLife;
  };
  const liveUntilOrders = orderedNodes.map((node, nodeOrder) => {
    return node.children.map(getSelfLifeSpan).reduce((a, b) => Math.max(a, b), selfLifespans[nodeOrder]);
  });
  const liveUntilMap = /* @__PURE__ */ new Map();
  for (let nodeOrder = 0; nodeOrder < orderedNodes.length; ++nodeOrder) {
    const liveUntilOrder = liveUntilOrders[nodeOrder];
    if (liveUntilOrder === INF_LIFE) {
      continue;
    }
    const node = orderedNodes[nodeOrder];
    const liveUntilNode = orderedNodes[liveUntilOrder];
    if (!liveUntilMap.has(liveUntilNode.name)) {
      liveUntilMap.set(liveUntilNode.name, []);
    }
    liveUntilMap.get(liveUntilNode.name).push(node);
  }
  return liveUntilMap;
}
var CONTROL_FLOW_OPS = /* @__PURE__ */ new Set(["Switch", "Merge", "Enter", "Exit", "NextIteration", "StatelessIf", "StatelessWhile", "if", "While"]);
var DYNAMIC_SHAPE_OPS = /* @__PURE__ */ new Set(["NonMaxSuppressionV2", "NonMaxSuppressionV3", "NonMaxSuppressionV5", "Where"]);
var HASH_TABLE_OPS = /* @__PURE__ */ new Set(["HashTable", "HashTableV2", "LookupTableImport", "LookupTableImportV2", "LookupTableFind", "LookupTableFindV2", "LookupTableSize", "LookupTableSizeV2"]);
function isControlFlow(node) {
  return CONTROL_FLOW_OPS.has(node.op);
}
function isDynamicShape(node) {
  return DYNAMIC_SHAPE_OPS.has(node.op);
}
function isHashTable(node) {
  return HASH_TABLE_OPS.has(node.op);
}

// node_modules/@tensorflow/tfjs-converter/dist/executor/graph_executor.js
var GraphExecutor = class _GraphExecutor {
  get weightIds() {
    return this.parent ? this.parent.weightIds : this._weightIds;
  }
  get functionExecutorMap() {
    return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap;
  }
  get weightMap() {
    return this.parent ? this.parent.weightMap : this._weightMap;
  }
  set weightMap(weightMap) {
    const weightIds = Object.keys(weightMap).map((key) => weightMap[key].map((tensor2) => tensor2.id));
    this._weightIds = [].concat(...weightIds);
    this._weightMap = weightMap;
  }
  /**
   * Set `ResourceManager` shared by executors of a model.
   * @param resourceManager: `ResourceManager` of the `GraphModel`.
   */
  set resourceManager(resourceManager) {
    this._resourceManager = resourceManager;
  }
  get inputs() {
    return this._inputs.map((node) => {
      return {
        name: node.name,
        shape: node.attrParams["shape"] ? node.attrParams["shape"].value : void 0,
        dtype: node.attrParams["dtype"] ? node.attrParams["dtype"].value : void 0
      };
    });
  }
  get outputs() {
    return this._outputs.map((node) => {
      return {
        name: node.name,
        shape: node.attrParams["shape"] ? node.attrParams["shape"].value : void 0,
        dtype: node.attrParams["dtype"] ? node.attrParams["dtype"].value : void 0
      };
    });
  }
  get inputNodes() {
    return this._inputs.map((node) => node.signatureKey || node.name);
  }
  get outputNodes() {
    return this._outputs.map((node) => {
      const name = node.signatureKey || node.name;
      return node.defaultOutput ? `${name}:${node.defaultOutput}` : name;
    });
  }
  get functions() {
    return Object.keys(this._functions).reduce((map, key) => {
      map[key] = this._functions[key].signature;
      return map;
    }, {});
  }
  /**
   *
   * @param graph Graph the model or function graph to be executed.
   * @param parent When building function exector you need to set the parent
   * executor. Since the weights and function executor maps are set at parant
   * level, that function executor can access the function maps and weight maps
   * through the parent.
   */
  constructor(graph, parent) {
    this.graph = graph;
    this.parent = parent;
    this.compiledMap = /* @__PURE__ */ new Map();
    this.parseNodeNameCache = /* @__PURE__ */ new Map();
    this._weightMap = {};
    this.SEPARATOR = ",";
    this._functions = {};
    this._functionExecutorMap = {};
    this.keepIntermediateTensors = false;
    this._outputs = graph.outputs;
    this._inputs = graph.inputs;
    this._initNodes = graph.initNodes;
    this._signature = graph.signature;
    this._functions = graph.functions;
    if (graph.functions != null) {
      Object.keys(graph.functions).forEach((name) => {
        this._functionExecutorMap[name] = new _GraphExecutor(graph.functions[name], this);
      });
    }
  }
  getCompilationKey(inputs, outputs) {
    const sortedInputs = inputs.map((node) => node.name).sort();
    const sortedOutputs = outputs.map((node) => node.name).sort();
    return sortedInputs.join(this.SEPARATOR) + "--" + sortedOutputs.join(this.SEPARATOR);
  }
  /**
   * Compiles the inference graph and returns the minimal set of nodes that are
   * required for execution, in the correct execution order.
   * @returns {Object} compilation The compile result.
   * @returns {Node[]} compilation.orderedNodes Nodes in the correct execution
   *     order.
   * @returns {Map<string, Node[]>} compilation.nodeLiveUntilMap A map from node
   *     to disposable nodes after its execution. That is, for a node `x`,
   *     `nodeLiveUntilMap[x]` indicates all nodes whose intermediate
   *     tensors should be disposed after `x` is executed.
   */
  compile(inputs, outputs) {
    const executionInfo = getExecutionSubgraph(inputs, outputs, this.weightMap, this._initNodes);
    const {
      missingInputs,
      dynamicNode,
      syncInputs
    } = executionInfo;
    if (dynamicNode != null) {
      throw new Error(`This execution contains the node '${dynamicNode.name}', which has the dynamic op '${dynamicNode.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${syncInputs}]`);
    }
    if (missingInputs.length > 0) {
      const outNames = outputs.map((n) => n.name);
      const inNames = Object.keys(inputs);
      throw new Error(`Cannot compute the outputs [${outNames}] from the provided inputs [${inNames}]. Missing the following inputs: [${missingInputs}]`);
    }
    const orderedNodes = getNodesInTopologicalOrder(this.graph, executionInfo);
    const nodeLiveUntilMap = getNodeLiveUntilMap(orderedNodes);
    return {
      orderedNodes,
      nodeLiveUntilMap
    };
  }
  cloneAndKeepTensor(tensor2) {
    if (tensor2 == null) {
      return null;
    }
    const clone2 = tensor2.clone();
    keep(clone2);
    return clone2;
  }
  cloneTensorList(tensors) {
    if (!tensors) {
      return null;
    }
    const clonedTensor = tensors.map((tensor2) => {
      return this.cloneAndKeepTensor(tensor2);
    });
    return clonedTensor;
  }
  cloneTensorMap(tensorsMap) {
    return Object.fromEntries(Object.entries(tensorsMap).map(([name, tensorsList]) => {
      return [name, this.cloneTensorList(tensorsList)];
    }));
  }
  /**
   * Executes the inference for given input tensors.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model, if
   * no outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   */
  execute(inputs, outputs) {
    this.disposeIntermediateTensors();
    inputs = this.mapInputs(inputs);
    const names = Object.keys(inputs).sort();
    this.checkInputs(inputs);
    this.checkInputShapeAndType(inputs);
    outputs = this.mapOutputs(outputs);
    this.checkOutputs(outputs);
    const inputNodes = names.map((name) => this.graph.nodes[parseNodeName(name)[0]]);
    const outputNodeNames = outputs.map((name) => parseNodeName(name)[0]);
    const outputNodeNameSet = new Set(outputNodeNames);
    let outputNodes = outputNodeNames.map((name) => this.graph.nodes[name]);
    if (outputNodes.length === 0) {
      outputNodes = this._outputs;
    }
    const compilationKey = this.getCompilationKey(inputNodes, outputNodes);
    let compilation = this.compiledMap.get(compilationKey);
    if (compilation == null) {
      compilation = this.compile(inputs, outputNodes);
      this.compiledMap.set(compilationKey, compilation);
    }
    try {
      this.keepIntermediateTensors = env().getBool("KEEP_INTERMEDIATE_TENSORS");
    } catch (e) {
      this.keepIntermediateTensors = false;
      console.warn(e.message);
    }
    const tensorArrayMap = {};
    const tensorListMap = {};
    return tidy(() => {
      const context = new ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap, this.parseNodeNameCache);
      const tensorsMap = Object.assign({}, this.weightMap);
      if (this.keepIntermediateTensors) {
        this.clonedTensorsMap = this.cloneTensorMap(this.weightMap);
      }
      Object.keys(inputs).forEach((name) => {
        const [nodeName, index] = parseNodeName(name, context);
        const tensors = [];
        tensors[index] = inputs[name];
        tensorsMap[nodeName] = tensors;
        if (this.keepIntermediateTensors) {
          this.clonedTensorsMap[nodeName] = this.cloneTensorList(tensors);
        }
      });
      const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
      const {
        orderedNodes,
        nodeLiveUntilMap
      } = compilation;
      for (const node of orderedNodes) {
        if (tensorsMap[node.name]) {
          continue;
        }
        const tensors = executeOp21(node, tensorsMap, context, this._resourceManager);
        if (util_exports.isPromise(tensors)) {
          throw new Error(`The execution of the op '${node.op}' returned a promise. Please use model.executeAsync() instead.`);
        }
        tensorsMap[node.name] = tensors;
        if (this.keepIntermediateTensors) {
          this.clonedTensorsMap[node.name] = this.cloneTensorList(tensors);
        }
        this.checkTensorForDisposalWithNodeLiveUntilInfo(node, tensorsMap, context, tensorsToKeep, outputNodeNameSet, nodeLiveUntilMap.get(node.name));
      }
      if (this.parent == null) {
        context.dispose(tensorsToKeep);
      }
      return outputs.map((name) => getTensor(name, tensorsMap, context));
    });
  }
  getFrozenTensorIds(tensorMap) {
    const ids = [].concat.apply([], Object.keys(tensorMap).map((key) => tensorMap[key]).map((tensors) => tensors.map((tensor2) => tensor2.id)));
    return new Set(ids);
  }
  checkTensorForDisposal(nodeName, node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount) {
    if (isControlFlow(node) || outputNodeNameSet.has(nodeName)) {
      return;
    }
    for (const tensor2 of tensorMap[nodeName]) {
      if (tensor2 == null) {
        continue;
      }
      intermediateTensorConsumerCount[tensor2.id] = (intermediateTensorConsumerCount[tensor2.id] || 0) + node.children.length;
    }
    for (const input of node.inputs) {
      if (isControlFlow(input)) {
        continue;
      }
      const tensors = getTensorsForCurrentContext(input.name, tensorMap, context);
      if (tensors == null) {
        continue;
      }
      for (const tensor2 of tensors) {
        if (!tensor2 || tensor2.kept || tensorsToKeep.has(tensor2.id)) {
          continue;
        }
        const count = intermediateTensorConsumerCount[tensor2.id];
        if (count === 1) {
          tensor2.dispose();
          delete intermediateTensorConsumerCount[tensor2.id];
        } else if (count != null) {
          intermediateTensorConsumerCount[tensor2.id]--;
        }
      }
    }
  }
  checkTensorForDisposalWithNodeLiveUntilInfo(node, tensorMap, context, tensorsToKeep, outputNodeNameSet, liveUntilNodes) {
    function isNonDisposableNode(node2) {
      return isControlFlow(node2) || outputNodeNameSet.has(node2.name);
    }
    if (isControlFlow(node) || liveUntilNodes == null) {
      return;
    }
    for (const nodeToDispose of liveUntilNodes) {
      if (isNonDisposableNode(nodeToDispose)) {
        continue;
      }
      const tensors = getTensorsForCurrentContext(nodeToDispose.name, tensorMap, context);
      for (const tensor2 of tensors) {
        if (!tensor2 || tensor2.kept || tensorsToKeep.has(tensor2.id)) {
          continue;
        }
        tensor2.dispose();
      }
    }
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs output node name from the Tensorflow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   */
  executeAsync(inputs, outputs) {
    return __async(this, null, function* () {
      return this._executeAsync(inputs, outputs);
    });
  }
  disposeIntermediateTensors() {
    if (!this.clonedTensorsMap) {
      return;
    }
    Object.values(this.clonedTensorsMap).forEach((tensorsList) => {
      for (const tensor2 of tensorsList) {
        if (tensor2 && !tensor2.isDisposed) {
          tensor2.dispose();
        }
      }
    });
    this.clonedTensorsMap = null;
  }
  getIntermediateTensors() {
    return this.clonedTensorsMap;
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to
   * the outputs array.
   * @param isFunctionExecution Optional. Flag for executing a function.
   * @param tensorArrayMap Optional, global TensorArray map by id. Used for
   * function execution.
   * @param tensorArrayMap Optional global TensorList map by id. Used for
   * function execution.
   */
  _executeAsync(_0, _1) {
    return __async(this, arguments, function* (inputs, outputs, isFunctionExecution = false, tensorArrayMap = {}, tensorListMap = {}) {
      this.disposeIntermediateTensors();
      if (!isFunctionExecution) {
        inputs = this.mapInputs(inputs);
        this.checkInputs(inputs);
        this.checkInputShapeAndType(inputs);
        outputs = this.mapOutputs(outputs);
        this.checkOutputs(outputs);
      }
      try {
        this.keepIntermediateTensors = env().getBool("KEEP_INTERMEDIATE_TENSORS");
      } catch (e) {
        this.keepIntermediateTensors = false;
        console.warn(e.message);
      }
      const context = new ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap, this.parseNodeNameCache);
      if (this.keepIntermediateTensors) {
        this.clonedTensorsMap = this.cloneTensorMap(this.weightMap);
      }
      const tensorsMap = yield this.executeWithControlFlow(inputs, context, outputs, isFunctionExecution);
      const results = outputs.map((name) => getTensor(name, tensorsMap, context));
      const outputIds = results.map((t) => t.id);
      const inputIds = Object.keys(inputs).map((name) => inputs[name].id);
      const keepIds = /* @__PURE__ */ new Set([...outputIds, ...inputIds, ...this.weightIds]);
      Object.values(tensorsMap).forEach((tensorsList) => {
        tensorsList.forEach((tensor2) => {
          if (tensor2 && !tensor2.isDisposed && !keepIds.has(tensor2.id)) {
            tensor2.dispose();
          }
        });
      });
      if (this.parent == null) {
        context.dispose(keepIds);
      }
      return results;
    });
  }
  executeFunctionAsync(inputs, tensorArrayMap, tensorListMap) {
    return __async(this, null, function* () {
      const mappedInputs = inputs.reduce((map, tensor2, index) => {
        map[this.inputs[index].name] = tensor2;
        return map;
      }, {});
      return this._executeAsync(mappedInputs, this.outputNodes, true, tensorArrayMap, tensorListMap);
    });
  }
  /**
   * When there are control flow nodes in the graph, the graph execution use
   * ExecutionContext to keep track of the frames and loop iterators.
   * @param inputs placeholder tensors for the graph.
   * @param context the execution context object for current execution.
   * @param outputNames Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to
   * the outputs array.
   * @param isFunctionExecution Flag for executing a function.
   */
  executeWithControlFlow(inputs, context, outputNames, isFunctionExecution) {
    return __async(this, null, function* () {
      const names = Object.keys(inputs);
      const inputNodes = names.map((name) => this.graph.nodes[parseNodeName(name)[0]]);
      const outputNodeNames = outputNames.map((name) => parseNodeName(name)[0]);
      const outputNodeNameSet = new Set(outputNodeNames);
      let outputNodes = outputNodeNames.map((name) => this.graph.nodes[name]);
      if (outputNodes.length === 0) {
        outputNodes = this._outputs;
      }
      const {
        usedNodes,
        missingInputs,
        dynamicNode,
        syncInputs
      } = getExecutionSubgraph(inputs, outputNodes, this.weightMap, this._initNodes);
      const stack2 = [...inputNodes, ...this.graph.weights, ...this._initNodes || []].map((node) => {
        return {
          node,
          contexts: context.currentContext
        };
      });
      const tensorsMap = Object.assign({}, this.weightMap);
      Object.keys(inputs).forEach((name) => {
        const [nodeName, index] = parseNodeName(name);
        const tensors = [];
        tensors[index] = inputs[name];
        tensorsMap[nodeName] = tensors;
      });
      const intermediateTensorConsumerCount = {};
      const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
      const added = {};
      while (stack2.length > 0) {
        const promises = this.processStack(inputNodes, stack2, context, tensorsMap, added, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount, usedNodes);
        yield Promise.all(promises);
      }
      if (dynamicNode == null && !isFunctionExecution) {
        console.warn(`This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.`);
      }
      const missingOutputs = outputNodes.filter((node) => !isControlFlow(node) && !getTensor(node.name, tensorsMap, context)).map((node) => node.name);
      if (missingOutputs.length > 0) {
        let alternativeMsg = "";
        if (dynamicNode != null) {
          alternativeMsg = `Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${syncInputs}]`;
        }
        throw new Error(`Cannot compute the outputs [${missingOutputs}] from the provided inputs [${names}]. Consider providing the following inputs: [${missingInputs}]. ${alternativeMsg}`);
      }
      return tensorsMap;
    });
  }
  processStack(inputNodes, stack2, context, tensorMap, added, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount, usedNodes) {
    const promises = [];
    while (stack2.length > 0) {
      const item = stack2.pop();
      context.currentContext = item.contexts;
      let nodeName = "";
      if (item.node.op === "Enter" && getParamValue("isConstant", item.node, tensorMap, context)) {
        [nodeName] = getNodeNameAndIndex(item.node.name, context);
      }
      if (tensorMap[item.node.name] == null) {
        const tensors = executeOp21(item.node, tensorMap, context, this._resourceManager);
        if (!nodeName) {
          [nodeName] = getNodeNameAndIndex(item.node.name, context);
        }
        const currentContext = context.currentContext;
        if (util_exports.isPromise(tensors)) {
          promises.push(tensors.then((t) => {
            tensorMap[nodeName] = t;
            if (this.keepIntermediateTensors) {
              this.clonedTensorsMap[nodeName] = this.cloneTensorList(t);
            }
            context.currentContext = currentContext;
            this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount);
            this.processChildNodes(item.node, stack2, context, tensorMap, added, usedNodes);
            return t;
          }));
        } else {
          tensorMap[nodeName] = tensors;
          if (this.keepIntermediateTensors) {
            this.clonedTensorsMap[nodeName] = this.cloneTensorList(tensors);
          }
          this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount);
          this.processChildNodes(item.node, stack2, context, tensorMap, added, usedNodes);
        }
      } else {
        this.processChildNodes(item.node, stack2, context, tensorMap, added, usedNodes);
      }
    }
    return promises;
  }
  processChildNodes(node, stack2, context, tensorMap, added, usedNodes) {
    node.children.forEach((childNode) => {
      const [nodeName] = getNodeNameAndIndex(childNode.name, context);
      if (added[nodeName] || !usedNodes.has(childNode.name)) {
        return;
      }
      if (childNode.op === "Merge") {
        if (childNode.inputNames.some((name) => {
          return !!getTensor(name, tensorMap, context);
        })) {
          added[nodeName] = true;
          stack2.push({
            contexts: context.currentContext,
            node: childNode
          });
        }
      } else if (childNode.inputNames.every((name) => {
        return !!getTensor(name, tensorMap, context);
      })) {
        added[nodeName] = true;
        stack2.push({
          contexts: context.currentContext,
          node: childNode
        });
      }
    });
  }
  /**
   * Releases the memory used by the weight tensors.
   */
  dispose() {
    Object.keys(this.weightMap).forEach((key) => this.weightMap[key].forEach((tensor2) => tensor2.dispose()));
  }
  checkInputShapeAndType(inputs) {
    Object.keys(inputs).forEach((name) => {
      const input = inputs[name];
      const [nodeName] = parseNodeName(name);
      const node = this.graph.nodes[nodeName];
      if (node.attrParams["shape"] && node.attrParams["shape"].value) {
        const shape = node.attrParams["shape"].value;
        const match = shape.length === input.shape.length && input.shape.every((dim, index) => shape[index] === -1 || shape[index] === dim);
        util_exports.assert(match, () => `The shape of dict['${node.name}'] provided in model.execute(dict) must be [${shape}], but was [${input.shape}]`);
      }
      if (node.attrParams["dtype"] && node.attrParams["dtype"].value) {
        util_exports.assert(input.dtype === node.attrParams["dtype"].value, () => `The dtype of dict['${node.name}'] provided in model.execute(dict) must be ${node.attrParams["dtype"].value}, but was ${input.dtype}`);
      }
    });
  }
  mapInputs(inputs) {
    var _a, _b;
    const result = {};
    for (const inputName in inputs) {
      const tensor2 = (_b = (_a = this._signature) === null || _a === void 0 ? void 0 : _a.inputs) === null || _b === void 0 ? void 0 : _b[inputName];
      if (tensor2 != null) {
        result[tensor2.name] = inputs[inputName];
      } else {
        result[inputName] = inputs[inputName];
      }
    }
    return result;
  }
  checkInputs(inputs) {
    const notInGraph = Object.keys(inputs).filter((name) => {
      const [nodeName] = parseNodeName(name);
      return this.graph.nodes[nodeName] == null;
    });
    if (notInGraph.length > 0) {
      throw new Error(`The dict provided in model.execute(dict) has keys: [${notInGraph}] that are not part of graph`);
    }
  }
  mapOutputs(outputs) {
    return outputs.map((name) => {
      var _a, _b;
      const tensor2 = (_b = (_a = this._signature) === null || _a === void 0 ? void 0 : _a.outputs) === null || _b === void 0 ? void 0 : _b[name];
      if (tensor2 != null) {
        return tensor2.name;
      }
      return name;
    }, {});
  }
  checkOutputs(outputs) {
    outputs.forEach((name) => {
      const [normalizedName] = parseNodeName(name);
      if (!this.graph.nodes[normalizedName]) {
        throw new Error(`The output '${name}' is not found in the graph`);
      }
    });
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/resource_manager.js
var ResourceManager = class {
  constructor(hashTableNameToHandle = {}, hashTableMap = {}) {
    this.hashTableNameToHandle = hashTableNameToHandle;
    this.hashTableMap = hashTableMap;
  }
  /**
   * Register a `HashTable` in the resource manager.
   *
   * The `HashTable` can be retrieved by `resourceManager.getHashTableById`,
   * where id is the table handle tensor's id.
   *
   * @param name Op node name that creates the `HashTable`.
   * @param hashTable The `HashTable` to be added to resource manager.
   */
  addHashTable(name, hashTable) {
    this.hashTableNameToHandle[name] = hashTable.handle;
    this.hashTableMap[hashTable.id] = hashTable;
  }
  /**
   * Get the table handle by node name.
   * @param name Op node name that creates the `HashTable`. This name is also
   *     used in the inputs list of lookup and import `HashTable` ops.
   */
  getHashTableHandleByName(name) {
    return this.hashTableNameToHandle[name];
  }
  /**
   * Get the actual `HashTable` by its handle tensor's id.
   * @param id The id of the handle tensor.
   */
  getHashTableById(id) {
    return this.hashTableMap[id];
  }
  /**
   * Dispose `ResourceManager`, including its hashTables and tensors in them.
   */
  dispose() {
    for (const key in this.hashTableMap) {
      this.hashTableMap[key].clearAndClose();
      delete this.hashTableMap[key];
    }
    for (const name in this.hashTableNameToHandle) {
      this.hashTableNameToHandle[name].dispose();
      delete this.hashTableNameToHandle[name];
    }
  }
};

// node_modules/@tensorflow/tfjs-converter/dist/executor/graph_model.js
var TFHUB_SEARCH_PARAM = "?tfjs-format=file";
var DEFAULT_MODEL_NAME = "model.json";
var GraphModel = class {
  // Returns the version information for the tensorflow model GraphDef.
  get modelVersion() {
    return this.version;
  }
  get inputNodes() {
    return this.executor.inputNodes;
  }
  get outputNodes() {
    return this.executor.outputNodes;
  }
  get inputs() {
    return this.executor.inputs;
  }
  get outputs() {
    return this.executor.outputs;
  }
  get weights() {
    return this.executor.weightMap;
  }
  get metadata() {
    return this.artifacts.userDefinedMetadata;
  }
  get modelSignature() {
    return this.signature;
  }
  get modelStructuredOutputKeys() {
    return this.structuredOutputKeys;
  }
  /**
   * @param modelUrl url for the model, or an `io.IOHandler`.
   * @param weightManifestUrl url for the weight file generated by
   * scripts/convert.py script.
   * @param requestOption options for Request, which allows to send credentials
   * and custom headers.
   * @param onProgress Optional, progress callback function, fired periodically
   * before the load is completed.
   */
  constructor(modelUrl, loadOptions = {}, tfio = io_exports) {
    this.modelUrl = modelUrl;
    this.loadOptions = loadOptions;
    this.version = "n/a";
    this.io = tfio;
    if (loadOptions == null) {
      this.loadOptions = {};
    }
    this.resourceManager = new ResourceManager();
  }
  findIOHandler() {
    const path = this.modelUrl;
    if (path.load != null) {
      this.handler = path;
    } else if (this.loadOptions.requestInit != null) {
      this.handler = this.io.browserHTTPRequest(path, this.loadOptions);
    } else {
      const handlers = this.io.getLoadHandlers(path, this.loadOptions);
      if (handlers.length === 0) {
        handlers.push(this.io.browserHTTPRequest(path, this.loadOptions));
      } else if (handlers.length > 1) {
        throw new Error(`Found more than one (${handlers.length}) load handlers for URL '${[path]}'`);
      }
      this.handler = handlers[0];
    }
  }
  /**
   * Loads the model and weight files, construct the in memory weight map and
   * compile the inference graph.
   */
  load() {
    this.findIOHandler();
    if (this.handler.load == null) {
      throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
    }
    const loadResult = this.handler.load();
    if (util_exports.isPromise(loadResult)) {
      return loadResult.then((artifacts) => {
        if (artifacts.getWeightStream == null) {
          return this.loadSync(artifacts);
        }
        return this.loadStreaming(artifacts);
      });
    }
    return this.loadSync(loadResult);
  }
  /**
   * Synchronously construct the in memory weight map and
   * compile the inference graph.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */
  loadSync(artifacts) {
    const weightMap = this.io.decodeWeights(artifacts.weightData, artifacts.weightSpecs);
    return this.loadWithWeightMap(artifacts, weightMap);
  }
  loadStreaming(artifacts) {
    return __async(this, null, function* () {
      if (artifacts.getWeightStream == null) {
        throw new Error("Model artifacts missing streamWeights function");
      }
      const weightMap = yield decodeWeightsStream(artifacts.getWeightStream(), artifacts.weightSpecs);
      return this.loadWithWeightMap(artifacts, weightMap);
    });
  }
  loadWithWeightMap(artifacts, weightMap) {
    this.artifacts = artifacts;
    const graph = this.artifacts.modelTopology;
    let signature = this.artifacts.signature;
    if (this.artifacts.userDefinedMetadata != null) {
      const metadata = this.artifacts.userDefinedMetadata;
      if (metadata.signature != null) {
        signature = metadata.signature;
      }
      if (metadata.structuredOutputKeys != null) {
        this.structuredOutputKeys = metadata.structuredOutputKeys;
      }
    }
    this.signature = signature;
    this.version = `${graph.versions.producer}.${graph.versions.minConsumer}`;
    this.executor = new GraphExecutor(OperationMapper.Instance.transformGraph(graph, this.signature));
    this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap);
    this.executor.resourceManager = this.resourceManager;
    if (artifacts.modelInitializer != null && artifacts.modelInitializer.node != null) {
      const initializer = OperationMapper.Instance.transformGraph(artifacts.modelInitializer);
      this.initializer = new GraphExecutor(initializer);
      this.initializer.weightMap = this.executor.weightMap;
      this.initializer.resourceManager = this.resourceManager;
      this.initializerSignature = artifacts.initializerSignature;
    }
    return true;
  }
  /**
   * Save the configuration and/or weights of the GraphModel.
   *
   * An `IOHandler` is an object that has a `save` method of the proper
   * signature defined. The `save` method manages the storing or
   * transmission of serialized data ("artifacts") that represent the
   * model's topology and weights onto or via a specific medium, such as
   * file downloads, local storage, IndexedDB in the web browser and HTTP
   * requests to a server. TensorFlow.js provides `IOHandler`
   * implementations for a number of frequently used saving mediums, such as
   * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
   * for more details.
   *
   * This method also allows you to refer to certain types of `IOHandler`s
   * as URL-like string shortcuts, such as 'localstorage://' and
   * 'indexeddb://'.
   *
   * Example 1: Save `model`'s topology and weights to browser [local
   * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
   * then load it back.
   *
   * ```js
   * const modelUrl =
   *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
   * const model = await tf.loadGraphModel(modelUrl);
   * const zeros = tf.zeros([1, 224, 224, 3]);
   * model.predict(zeros).print();
   *
   * const saveResults = await model.save('localstorage://my-model-1');
   *
   * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
   * console.log('Prediction from loaded model:');
   * model.predict(zeros).print();
   * ```
   *
   * @param handlerOrURL An instance of `IOHandler` or a URL-like,
   * scheme-based string shortcut for `IOHandler`.
   * @param config Options for saving the model.
   * @returns A `Promise` of `SaveResult`, which summarizes the result of
   * the saving, such as byte sizes of the saved artifacts for the model's
   *   topology and weight values.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */
  save(handlerOrURL, config) {
    return __async(this, null, function* () {
      if (typeof handlerOrURL === "string") {
        const handlers = this.io.getSaveHandlers(handlerOrURL);
        if (handlers.length === 0) {
          throw new Error(`Cannot find any save handlers for URL '${handlerOrURL}'`);
        } else if (handlers.length > 1) {
          throw new Error(`Found more than one (${handlers.length}) save handlers for URL '${handlerOrURL}'`);
        }
        handlerOrURL = handlers[0];
      }
      if (handlerOrURL.save == null) {
        throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
      }
      return handlerOrURL.save(this.artifacts);
    });
  }
  addStructuredOutputNames(outputTensors) {
    if (this.structuredOutputKeys) {
      const outputTensorsArray = outputTensors instanceof Tensor ? [outputTensors] : outputTensors;
      const outputTensorMap = {};
      outputTensorsArray.forEach((outputTensor, i) => outputTensorMap[this.structuredOutputKeys[i]] = outputTensor);
      return outputTensorMap;
    }
    return outputTensors;
  }
  /**
   * Execute the inference for the input tensors.
   *
   * @param input The input tensors, when there is single input for the model,
   * inputs param should be a `tf.Tensor`. For models with multiple inputs,
   * inputs params should be in either `tf.Tensor`[] if the input order is
   * fixed, or otherwise NamedTensorMap format.
   *
   * For model with multiple inputs, we recommend you use NamedTensorMap as the
   * input type, if you use `tf.Tensor`[], the order of the array needs to
   * follow the
   * order of inputNodes array. @see {@link GraphModel.inputNodes}
   *
   * You can also feed any intermediate nodes using the NamedTensorMap as the
   * input type. For example, given the graph
   *    InputNode => Intermediate => OutputNode,
   * you can execute the subgraph Intermediate => OutputNode by calling
   *    model.execute('IntermediateNode' : tf.tensor(...));
   *
   * This is useful for models that uses tf.dynamic_rnn, where the intermediate
   * state needs to be fed manually.
   *
   * For batch inference execution, the tensors for each input need to be
   * concatenated together. For example with mobilenet, the required input shape
   * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
   * If we are provide a batched data of 100 images, the input tensor should be
   * in the shape of [100, 244, 244, 3].
   *
   * @param config Prediction configuration for specifying the batch size.
   * Currently the batch size option is ignored for graph model.
   *
   * @returns Inference result tensors. If the model is converted and it
   * originally had structured_outputs in tensorflow, then a NamedTensorMap
   * will be returned matching the structured_outputs. If no structured_outputs
   * are present, the output will be single `tf.Tensor` if the model has single
   * output node, otherwise Tensor[].
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  predict(inputs, config) {
    const outputTensors = this.execute(inputs, this.outputNodes);
    return this.addStructuredOutputNames(outputTensors);
  }
  /**
   * Execute the inference for the input tensors in async fashion, use this
   * method when your model contains control flow ops.
   *
   * @param input The input tensors, when there is single input for the model,
   * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
   * inputs params should be in either `tf.Tensor`[] if the input order is
   * fixed, or otherwise NamedTensorMap format.
   *
   * For model with multiple inputs, we recommend you use NamedTensorMap as the
   * input type, if you use `tf.Tensor`[], the order of the array needs to
   * follow the
   * order of inputNodes array. @see {@link GraphModel.inputNodes}
   *
   * You can also feed any intermediate nodes using the NamedTensorMap as the
   * input type. For example, given the graph
   *    InputNode => Intermediate => OutputNode,
   * you can execute the subgraph Intermediate => OutputNode by calling
   *    model.execute('IntermediateNode' : tf.tensor(...));
   *
   * This is useful for models that uses tf.dynamic_rnn, where the intermediate
   * state needs to be fed manually.
   *
   * For batch inference execution, the tensors for each input need to be
   * concatenated together. For example with mobilenet, the required input shape
   * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
   * If we are provide a batched data of 100 images, the input tensor should be
   * in the shape of [100, 244, 244, 3].
   *
   * @param config Prediction configuration for specifying the batch size.
   * Currently the batch size option is ignored for graph model.
   *
   * @returns A Promise of inference result tensors. If the model is converted
   * and it originally had structured_outputs in tensorflow, then a
   * NamedTensorMap will be returned matching the structured_outputs. If no
   * structured_outputs are present, the output will be single `tf.Tensor` if
   * the model has single output node, otherwise Tensor[].
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  predictAsync(inputs, config) {
    return __async(this, null, function* () {
      const outputTensors = yield this.executeAsync(inputs, this.outputNodes);
      return this.addStructuredOutputNames(outputTensors);
    });
  }
  normalizeInputs(inputs) {
    var _a;
    if (!(inputs instanceof Tensor) && !Array.isArray(inputs)) {
      const signatureInputs = (_a = this.signature) === null || _a === void 0 ? void 0 : _a.inputs;
      if (signatureInputs != null) {
        for (const input in signatureInputs) {
          const tensor2 = signatureInputs[input];
          if (tensor2.resourceId != null) {
            inputs[input] = this.resourceIdToCapturedInput[tensor2.resourceId];
          }
        }
      }
      return inputs;
    }
    inputs = Array.isArray(inputs) ? inputs : [inputs];
    const numCapturedInputs = Object.keys(this.resourceIdToCapturedInput).length;
    if (inputs.length + numCapturedInputs !== this.inputNodes.length) {
      throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length - numCapturedInputs} non-resource placeholders, while there are ${inputs.length} input tensors provided.`);
    }
    let inputIndex = 0;
    return this.inputNodes.reduce((map, inputName) => {
      var _a2, _b, _c;
      const resourceId = (_c = (_b = (_a2 = this.signature) === null || _a2 === void 0 ? void 0 : _a2.inputs) === null || _b === void 0 ? void 0 : _b[inputName]) === null || _c === void 0 ? void 0 : _c.resourceId;
      if (resourceId != null) {
        map[inputName] = this.resourceIdToCapturedInput[resourceId];
      } else {
        map[inputName] = inputs[inputIndex++];
      }
      return map;
    }, {});
  }
  normalizeOutputs(outputs) {
    outputs = outputs || this.outputNodes;
    return !Array.isArray(outputs) ? [outputs] : outputs;
  }
  executeInitializerGraph() {
    if (this.initializer == null) {
      return [];
    }
    if (this.initializerSignature == null) {
      return this.initializer.execute({}, []);
    } else {
      return this.initializer.execute({}, Object.keys(this.initializerSignature.outputs));
    }
  }
  executeInitializerGraphAsync() {
    return __async(this, null, function* () {
      if (this.initializer == null) {
        return [];
      }
      if (this.initializerSignature == null) {
        return this.initializer.executeAsync({}, []);
      } else {
        return this.initializer.executeAsync({}, Object.keys(this.initializerSignature.outputs));
      }
    });
  }
  setResourceIdToCapturedInput(outputs) {
    this.resourceIdToCapturedInput = {};
    if (this.initializerSignature) {
      const signatureOutputs = this.initializerSignature.outputs;
      const outputNames = Object.keys(signatureOutputs);
      for (let i = 0; i < outputNames.length; i++) {
        const outputName = outputNames[i];
        const tensorInfo = signatureOutputs[outputName];
        this.resourceIdToCapturedInput[tensorInfo.resourceId] = outputs[i];
      }
    }
  }
  /**
   * Executes inference for the model for given input tensors.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no
   * outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   *
   * @returns A single tensor if provided with a single output or no outputs
   * are provided and there is only one default output, otherwise return a
   * tensor array. The order of the tensor array is the same as the outputs
   * if provided, otherwise the order of outputNodes attribute of the model.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  execute(inputs, outputs) {
    if (this.resourceIdToCapturedInput == null) {
      this.setResourceIdToCapturedInput(this.executeInitializerGraph());
    }
    inputs = this.normalizeInputs(inputs);
    outputs = this.normalizeOutputs(outputs);
    const result = this.executor.execute(inputs, outputs);
    return result.length > 1 ? result : result[0];
  }
  /**
   * Executes inference for the model for given input tensors in async
   * fashion, use this method when your model contains control flow ops.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   *
   * @returns A Promise of single tensor if provided with a single output or
   * no outputs are provided and there is only one default output, otherwise
   * return a tensor map.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  executeAsync(inputs, outputs) {
    return __async(this, null, function* () {
      if (this.resourceIdToCapturedInput == null) {
        this.setResourceIdToCapturedInput(yield this.executeInitializerGraphAsync());
      }
      inputs = this.normalizeInputs(inputs);
      outputs = this.normalizeOutputs(outputs);
      const result = yield this.executor.executeAsync(inputs, outputs);
      return result.length > 1 ? result : result[0];
    });
  }
  /**
   * Get intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  getIntermediateTensors() {
    return this.executor.getIntermediateTensors();
  }
  /**
   * Dispose intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  disposeIntermediateTensors() {
    this.executor.disposeIntermediateTensors();
  }
  convertTensorMapToTensorsMap(map) {
    return Object.keys(map).reduce((newMap, key) => {
      newMap[key] = [map[key]];
      return newMap;
    }, {});
  }
  /**
   * Releases the memory used by the weight tensors and resourceManager.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  dispose() {
    this.executor.dispose();
    if (this.initializer) {
      this.initializer.dispose();
      if (this.resourceIdToCapturedInput) {
        dispose(this.resourceIdToCapturedInput);
      }
    }
    this.resourceManager.dispose();
  }
};
function loadGraphModel(_0) {
  return __async(this, arguments, function* (modelUrl, options = {}, tfio = io_exports) {
    if (modelUrl == null) {
      throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
    }
    if (options == null) {
      options = {};
    }
    if (options.fromTFHub && typeof modelUrl === "string") {
      modelUrl = getTFHubUrl(modelUrl);
    }
    const model = new GraphModel(modelUrl, options, tfio);
    yield model.load();
    return model;
  });
}
function loadGraphModelSync(modelSource) {
  if (modelSource == null) {
    throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model");
  }
  let ioHandler;
  if (modelSource instanceof Array) {
    const [modelJSON, weights] = modelSource;
    if (!modelJSON) {
      throw new Error("modelJSON must be the first element of the array");
    }
    if (!weights || !(weights instanceof ArrayBuffer)) {
      throw new Error("An ArrayBuffer of weights must be the second element of the array");
    }
    if (!("modelTopology" in modelJSON)) {
      throw new Error("Model JSON is missing 'modelTopology'");
    }
    if (!("weightsManifest" in modelJSON)) {
      throw new Error("Model JSON is missing 'weightsManifest'");
    }
    const weightSpecs = io_exports.getWeightSpecs(modelJSON.weightsManifest);
    const modelArtifacts = io_exports.getModelArtifactsForJSONSync(modelJSON, weightSpecs, weights);
    ioHandler = io_exports.fromMemorySync(modelArtifacts);
  } else if ("load" in modelSource) {
    ioHandler = modelSource;
  } else if ("modelTopology" in modelSource && "weightSpecs" in modelSource && "weightData" in modelSource) {
    ioHandler = io_exports.fromMemorySync(modelSource);
  } else {
    throw new Error("Unknown model format");
  }
  const model = new GraphModel(ioHandler);
  model.load();
  return model;
}
function getTFHubUrl(modelUrl) {
  if (!modelUrl.endsWith("/")) {
    modelUrl = modelUrl + "/";
  }
  return `${modelUrl}${DEFAULT_MODEL_NAME}${TFHUB_SEARCH_PARAM}`;
}

// node_modules/@tensorflow/tfjs-converter/dist/version.js
var version = "4.22.0";

// node_modules/@tensorflow/tfjs-converter/dist/flags.js
var ENV = env();
ENV.registerFlag("KEEP_INTERMEDIATE_TENSORS", () => false, (debugValue) => {
  if (debugValue) {
    console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.");
  }
});

export {
  registerOp,
  deregisterOp,
  GraphModel,
  loadGraphModel,
  loadGraphModelSync,
  version
};
/*! Bundled license information:

@tensorflow/tfjs-converter/dist/operations/custom_op/register.js:
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

@tensorflow/tfjs-converter/dist/data/compiled_api.js:
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
   *
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/utils.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/arithmetic.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/basic_math.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/control.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/convolution.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/creation.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/dynamic.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/evaluation.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/graph.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/hash_table.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/image.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/logical.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/matrices.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/normalization.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/reduction.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/slice_join.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/sparse.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/spectral.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/string.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/op_list/transformation.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/operation_mapper.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/custom_op/node_value_impl.js:
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

@tensorflow/tfjs-core/dist/ops/ops_for_converter.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/arithmetic_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/basic_math_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/executor/tensor_utils.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/executor/tensor_array.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/executor/tensor_list.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/control_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/convolution_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/creation_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/dynamic_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/evaluation_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/graph_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/executor/hash_table.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/hash_table_executor.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/image_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/logical_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/matrices_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/normalization_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/ragged_executor.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/reduction_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/slice_join_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/sparse_executor.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/spectral_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/string_executor.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/executors/transformation_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/operations/operation_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/executor/model_analysis.js:
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

@tensorflow/tfjs-converter/dist/executor/graph_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/executor/graph_model.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/version.js:
  (** @license See the LICENSE file. *)

@tensorflow/tfjs-converter/dist/flags.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-converter/dist/index.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
*/
//# sourceMappingURL=chunk-6PSVXF3U.js.map
