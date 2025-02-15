import {
  Abs,
  Acos,
  Acosh,
  Add,
  AddN,
  All,
  Any,
  ArgMax,
  ArgMin,
  Asin,
  Asinh,
  Atan,
  Atan2,
  Atanh,
  AvgPool,
  AvgPool3D,
  AvgPool3DGrad,
  AvgPoolGrad,
  BatchMatMul,
  BatchToSpaceND,
  Bincount,
  BitwiseAnd,
  BroadcastArgs,
  Cast,
  Ceil,
  ClipByValue,
  Complex,
  ComplexAbs,
  Concat,
  Conv2D,
  Conv2DBackpropFilter,
  Conv2DBackpropInput,
  Conv3D,
  Conv3DBackpropFilterV2,
  Conv3DBackpropInputV2,
  Cos,
  Cosh,
  CropAndResize,
  Cumprod,
  Cumsum,
  DataStorage,
  DenseBincount,
  DepthToSpace,
  DepthwiseConv2dNative,
  DepthwiseConv2dNativeBackpropFilter,
  DepthwiseConv2dNativeBackpropInput,
  Diag,
  Dilation2D,
  Einsum,
  Elu,
  EluGrad,
  Equal,
  Erf,
  Exp,
  ExpandDims,
  Expm1,
  FFT,
  Fill,
  FlipLeftRight,
  Floor,
  FloorDiv,
  FromPixels,
  FusedBatchNorm,
  FusedConv2D,
  FusedDepthwiseConv2D,
  GatherNd,
  GatherV2,
  Greater,
  GreaterEqual,
  IFFT,
  Identity,
  Imag,
  IsFinite,
  IsInf,
  IsNan,
  KernelBackend,
  LRN,
  LRNGrad,
  LeakyRelu,
  Less,
  LessEqual,
  LinSpace,
  Log,
  Log1p,
  LogicalAnd,
  LogicalNot,
  LogicalOr,
  Max,
  MaxPool,
  MaxPool3D,
  MaxPool3DGrad,
  MaxPoolGrad,
  MaxPoolWithArgmax,
  Maximum,
  Mean,
  Min,
  Minimum,
  MirrorPad,
  Mod,
  Multinomial,
  Multiply,
  Neg,
  NonMaxSuppressionV3,
  NonMaxSuppressionV4,
  NonMaxSuppressionV5,
  NotEqual,
  OneHot,
  OnesLike,
  Pack,
  PadV2,
  Pow,
  Prelu,
  Prod,
  RaggedGather,
  RaggedRange,
  RaggedTensorToTensor,
  Range,
  Real,
  RealDiv,
  Reciprocal,
  Relu,
  Relu6,
  Reshape,
  ResizeBilinear,
  ResizeBilinearGrad,
  ResizeNearestNeighbor,
  ResizeNearestNeighborGrad,
  Reverse,
  RotateWithOffset,
  Round,
  Rsqrt,
  ScatterNd,
  SearchSorted,
  Select,
  Selu,
  Sigmoid,
  Sign,
  Sin,
  Sinh,
  Slice,
  Softmax,
  Softplus,
  SpaceToBatchND,
  SparseFillEmptyRows,
  SparseReshape,
  SparseSegmentMean,
  SparseSegmentSum,
  SparseToDense,
  SplitV,
  Sqrt,
  Square,
  SquaredDifference,
  StaticRegexReplace,
  Step,
  StridedSlice,
  StringNGrams,
  StringSplit,
  StringToHashBucketFast,
  Sub,
  Sum,
  Tan,
  Tanh,
  TensorBuffer,
  TensorScatterUpdate,
  Tile,
  TopK,
  Transform,
  Transpose,
  Unique,
  Unpack,
  UnsortedSegmentSum,
  ZerosLike,
  _FusedMatMul,
  backend_util_exports,
  broadcastTo,
  broadcast_util_exports,
  buffer,
  device_util_exports,
  engine,
  env,
  kernel_impls_exports,
  nextFrame,
  registerBackend,
  registerKernel,
  reshape,
  scalar,
  slice_util_exports,
  sumOutType,
  tidy,
  upcastType,
  util_exports,
  zeros
} from "./chunk-DZZSFJRK.js";
import {
  __async,
  __export
} from "./chunk-4MWRP73S.js";

// node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js
var webgl_util_exports = {};
__export(webgl_util_exports, {
  assertNotComplex: () => assertNotComplex,
  bindCanvasToFramebuffer: () => bindCanvasToFramebuffer,
  bindColorTextureToFramebuffer: () => bindColorTextureToFramebuffer,
  bindTextureToProgramUniformSampler: () => bindTextureToProgramUniformSampler,
  bindTextureUnit: () => bindTextureUnit,
  bindVertexBufferToProgramAttribute: () => bindVertexBufferToProgramAttribute,
  callAndCheck: () => callAndCheck,
  canBeRepresented: () => canBeRepresented,
  createFragmentShader: () => createFragmentShader,
  createFramebuffer: () => createFramebuffer,
  createProgram: () => createProgram,
  createStaticIndexBuffer: () => createStaticIndexBuffer,
  createStaticVertexBuffer: () => createStaticVertexBuffer,
  createTexture: () => createTexture,
  createVertexShader: () => createVertexShader,
  getBatchDim: () => getBatchDim,
  getExtensionOrThrow: () => getExtensionOrThrow,
  getFramebufferErrorMessage: () => getFramebufferErrorMessage,
  getMaxTexturesInShader: () => getMaxTexturesInShader,
  getNumChannels: () => getNumChannels,
  getProgramUniformLocation: () => getProgramUniformLocation,
  getProgramUniformLocationOrThrow: () => getProgramUniformLocationOrThrow,
  getRowsCols: () => getRowsCols,
  getShapeAs3D: () => getShapeAs3D,
  getTextureShapeFromLogicalShape: () => getTextureShapeFromLogicalShape,
  getWebGLDisjointQueryTimerVersion: () => getWebGLDisjointQueryTimerVersion,
  getWebGLErrorMessage: () => getWebGLErrorMessage,
  getWebGLMaxTextureSize: () => getWebGLMaxTextureSize,
  hasExtension: () => hasExtension,
  isCapableOfRenderingToFloatTexture: () => isCapableOfRenderingToFloatTexture,
  isDownloadFloatTextureEnabled: () => isDownloadFloatTextureEnabled,
  isReshapeFree: () => isReshapeFree,
  isWebGLFenceEnabled: () => isWebGLFenceEnabled,
  isWebGLVersionEnabled: () => isWebGLVersionEnabled,
  linkProgram: () => linkProgram,
  logShaderSourceAndInfoLog: () => logShaderSourceAndInfoLog,
  resetMaxTextureSize: () => resetMaxTextureSize,
  resetMaxTexturesInShader: () => resetMaxTexturesInShader,
  unbindColorTextureFromFramebuffer: () => unbindColorTextureFromFramebuffer,
  unbindTextureUnit: () => unbindTextureUnit,
  validateFramebuffer: () => validateFramebuffer,
  validateProgram: () => validateProgram,
  validateTextureSize: () => validateTextureSize
});

// node_modules/@tensorflow/tfjs-backend-webgl/dist/canvas_util.js
var contexts = {};
var WEBGL_ATTRIBUTES = {
  alpha: false,
  antialias: false,
  premultipliedAlpha: false,
  preserveDrawingBuffer: false,
  depth: false,
  stencil: false,
  failIfMajorPerformanceCaveat: true
};
function setWebGLContext(webGLVersion, gl) {
  contexts[webGLVersion] = gl;
}
function getWebGLContext(webGLVersion, customCanvas) {
  if (!(webGLVersion in contexts) || customCanvas != null) {
    const newCtx = getWebGLRenderingContext(webGLVersion, customCanvas);
    if (newCtx !== null) {
      contexts[webGLVersion] = newCtx;
    } else {
      console.log("Could not get context for WebGL version", webGLVersion);
      return null;
    }
  }
  const gl = contexts[webGLVersion];
  if (gl == null || gl.isContextLost()) {
    delete contexts[webGLVersion];
    return getWebGLContext(webGLVersion);
  }
  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.STENCIL_TEST);
  gl.disable(gl.BLEND);
  gl.disable(gl.DITHER);
  gl.disable(gl.POLYGON_OFFSET_FILL);
  gl.disable(gl.SAMPLE_COVERAGE);
  gl.enable(gl.SCISSOR_TEST);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  return contexts[webGLVersion];
}
function createCanvas(webGLVersion) {
  if (!env().getBool("IS_SAFARI") && typeof OffscreenCanvas !== "undefined" && webGLVersion === 2) {
    return new OffscreenCanvas(300, 150);
  } else if (typeof document !== "undefined") {
    return document.createElement("canvas");
  } else {
    throw new Error("Cannot create a canvas in this context");
  }
}
function getWebGLRenderingContext(webGLVersion, customCanvas) {
  if (webGLVersion !== 1 && webGLVersion !== 2) {
    throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
  }
  const canvas = customCanvas == null ? createCanvas(webGLVersion) : customCanvas;
  canvas.addEventListener("webglcontextlost", (ev) => {
    ev.preventDefault();
    delete contexts[webGLVersion];
  }, false);
  if (env().getBool("SOFTWARE_WEBGL_ENABLED")) {
    WEBGL_ATTRIBUTES.failIfMajorPerformanceCaveat = false;
  }
  if (webGLVersion === 1) {
    return (
      // tslint:disable-next-line
      canvas.getContext("webgl", WEBGL_ATTRIBUTES) || canvas.getContext("experimental-webgl", WEBGL_ATTRIBUTES)
    );
  }
  return canvas.getContext("webgl2", WEBGL_ATTRIBUTES);
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/tex_util.js
var PackingScheme;
(function(PackingScheme2) {
  PackingScheme2[PackingScheme2["DENSE"] = 0] = "DENSE";
  PackingScheme2[PackingScheme2["SHARED_BATCH"] = 1] = "SHARED_BATCH";
})(PackingScheme || (PackingScheme = {}));
var TextureUsage;
(function(TextureUsage2) {
  TextureUsage2[TextureUsage2["RENDER"] = 0] = "RENDER";
  TextureUsage2[TextureUsage2["UPLOAD"] = 1] = "UPLOAD";
  TextureUsage2[TextureUsage2["PIXELS"] = 2] = "PIXELS";
  TextureUsage2[TextureUsage2["DOWNLOAD"] = 3] = "DOWNLOAD";
})(TextureUsage || (TextureUsage = {}));
var PhysicalTextureType;
(function(PhysicalTextureType2) {
  PhysicalTextureType2[PhysicalTextureType2["UNPACKED_FLOAT16"] = 0] = "UNPACKED_FLOAT16";
  PhysicalTextureType2[PhysicalTextureType2["UNPACKED_FLOAT32"] = 1] = "UNPACKED_FLOAT32";
  PhysicalTextureType2[PhysicalTextureType2["PACKED_4X1_UNSIGNED_BYTE"] = 2] = "PACKED_4X1_UNSIGNED_BYTE";
  PhysicalTextureType2[PhysicalTextureType2["PACKED_2X2_FLOAT32"] = 3] = "PACKED_2X2_FLOAT32";
  PhysicalTextureType2[PhysicalTextureType2["PACKED_2X2_FLOAT16"] = 4] = "PACKED_2X2_FLOAT16";
})(PhysicalTextureType || (PhysicalTextureType = {}));
function getUnpackedMatrixTextureShapeWidthHeight(rows, columns) {
  return [columns, rows];
}
function getUnpackedArraySizeFromMatrixSize(matrixSize, channelsPerTexture) {
  return matrixSize * channelsPerTexture;
}
function getDenseTexShape(shape) {
  const size = util_exports.sizeFromShape(shape);
  const texelsNeeded = Math.ceil(size / 4);
  return util_exports.sizeToSquarishShape(texelsNeeded);
}
function getPackedMatrixTextureShapeWidthHeight(rows, columns) {
  return [Math.max(1, Math.ceil(columns / 2)), Math.max(1, Math.ceil(rows / 2))];
}
function getPackedRGBAArraySizeFromMatrixShape(rows, columns) {
  const [w, h] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
  return w * h * 4;
}
function getTextureConfig(gl, textureHalfFloatExtension) {
  const glany = gl;
  let internalFormatFloat;
  let internalFormatHalfFloat;
  let internalFormatPackedHalfFloat;
  let internalFormatPackedFloat;
  let textureFormatFloat;
  let downloadTextureFormat;
  let downloadUnpackNumChannels;
  let defaultNumChannels;
  let textureTypeHalfFloat;
  let textureTypeFloat;
  if (env().getNumber("WEBGL_VERSION") === 2) {
    internalFormatFloat = glany.R32F;
    internalFormatHalfFloat = glany.R16F;
    internalFormatPackedHalfFloat = glany.RGBA16F;
    internalFormatPackedFloat = glany.RGBA32F;
    textureFormatFloat = glany.RED;
    downloadUnpackNumChannels = 4;
    defaultNumChannels = 1;
    textureTypeHalfFloat = glany.HALF_FLOAT;
    textureTypeFloat = glany.FLOAT;
    downloadTextureFormat = glany.RGBA8;
  } else {
    internalFormatFloat = gl.RGBA;
    internalFormatHalfFloat = gl.RGBA;
    internalFormatPackedHalfFloat = gl.RGBA;
    internalFormatPackedFloat = glany.RGBA;
    textureFormatFloat = gl.RGBA;
    downloadUnpackNumChannels = 4;
    defaultNumChannels = 4;
    textureTypeHalfFloat = textureHalfFloatExtension != null ? textureHalfFloatExtension.HALF_FLOAT_OES : null;
    textureTypeFloat = gl.FLOAT;
    downloadTextureFormat = gl.RGBA;
  }
  return {
    internalFormatFloat,
    internalFormatHalfFloat,
    internalFormatPackedHalfFloat,
    internalFormatPackedFloat,
    textureFormatFloat,
    downloadTextureFormat,
    downloadUnpackNumChannels,
    defaultNumChannels,
    textureTypeHalfFloat,
    textureTypeFloat
  };
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl_util.js
function callAndCheck(gl, func) {
  const returnValue = func();
  if (env().getBool("DEBUG")) {
    checkWebGLError(gl);
  }
  return returnValue;
}
function checkWebGLError(gl) {
  const error = gl.getError();
  if (error !== gl.NO_ERROR) {
    throw new Error("WebGL Error: " + getWebGLErrorMessage(gl, error));
  }
}
var MIN_FLOAT16 = 596e-10;
var MAX_FLOAT16 = 65504;
function canBeRepresented(num) {
  if (env().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || num === 0 || MIN_FLOAT16 < Math.abs(num) && Math.abs(num) < MAX_FLOAT16) {
    return true;
  }
  return false;
}
function getWebGLErrorMessage(gl, status) {
  switch (status) {
    case gl.NO_ERROR:
      return "NO_ERROR";
    case gl.INVALID_ENUM:
      return "INVALID_ENUM";
    case gl.INVALID_VALUE:
      return "INVALID_VALUE";
    case gl.INVALID_OPERATION:
      return "INVALID_OPERATION";
    case gl.INVALID_FRAMEBUFFER_OPERATION:
      return "INVALID_FRAMEBUFFER_OPERATION";
    case gl.OUT_OF_MEMORY:
      return "OUT_OF_MEMORY";
    case gl.CONTEXT_LOST_WEBGL:
      return "CONTEXT_LOST_WEBGL";
    default:
      return `Unknown error code ${status}`;
  }
}
function getExtensionOrThrow(gl, extensionName) {
  return throwIfNull(gl, () => gl.getExtension(extensionName), 'Extension "' + extensionName + '" not supported on this browser.');
}
function createVertexShader(gl, vertexShaderSource) {
  const vertexShader = throwIfNull(gl, () => gl.createShader(gl.VERTEX_SHADER), "Unable to create vertex WebGLShader.");
  callAndCheck(gl, () => gl.shaderSource(vertexShader, vertexShaderSource));
  callAndCheck(gl, () => gl.compileShader(vertexShader));
  if (gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS) === false) {
    console.log(gl.getShaderInfoLog(vertexShader));
    throw new Error("Failed to compile vertex shader.");
  }
  return vertexShader;
}
function createFragmentShader(gl, fragmentShaderSource) {
  const fragmentShader = throwIfNull(gl, () => gl.createShader(gl.FRAGMENT_SHADER), "Unable to create fragment WebGLShader.");
  callAndCheck(gl, () => gl.shaderSource(fragmentShader, fragmentShaderSource));
  callAndCheck(gl, () => gl.compileShader(fragmentShader));
  if (env().get("ENGINE_COMPILE_ONLY")) {
    return fragmentShader;
  }
  if (gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) === false) {
    logShaderSourceAndInfoLog(fragmentShaderSource, gl.getShaderInfoLog(fragmentShader));
    throw new Error("Failed to compile fragment shader.");
  }
  return fragmentShader;
}
var lineNumberRegex = /ERROR: [0-9]+:([0-9]+):/g;
function logShaderSourceAndInfoLog(shaderSource, shaderInfoLog) {
  const lineNumberRegexResult = lineNumberRegex.exec(shaderInfoLog);
  if (lineNumberRegexResult == null) {
    console.log(`Couldn't parse line number in error: ${shaderInfoLog}`);
    console.log(shaderSource);
    return;
  }
  const lineNumber = +lineNumberRegexResult[1];
  const shaderLines = shaderSource.split("\n");
  const pad = shaderLines.length.toString().length + 2;
  const linesWithLineNumbers = shaderLines.map((line, lineNumber2) => util_exports.rightPad((lineNumber2 + 1).toString(), pad) + line);
  let maxLineLength = 0;
  for (let i = 0; i < linesWithLineNumbers.length; i++) {
    maxLineLength = Math.max(linesWithLineNumbers[i].length, maxLineLength);
  }
  const beforeErrorLines = linesWithLineNumbers.slice(0, lineNumber - 1);
  const errorLine = linesWithLineNumbers.slice(lineNumber - 1, lineNumber);
  const afterErrorLines = linesWithLineNumbers.slice(lineNumber);
  console.log(beforeErrorLines.join("\n"));
  console.log(shaderInfoLog.split("\n")[0]);
  console.log(`%c ${util_exports.rightPad(errorLine[0], maxLineLength)}`, "border:1px solid red; background-color:#e3d2d2; color:#a61717");
  console.log(afterErrorLines.join("\n"));
}
function createProgram(gl) {
  return throwIfNull(gl, () => gl.createProgram(), "Unable to create WebGLProgram.");
}
function linkProgram(gl, program) {
  callAndCheck(gl, () => gl.linkProgram(program));
  if (env().get("ENGINE_COMPILE_ONLY")) {
    return;
  }
  if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
    console.log(gl.getProgramInfoLog(program));
    throw new Error("Failed to link vertex and fragment shaders.");
  }
}
function validateProgram(gl, program) {
  callAndCheck(gl, () => gl.validateProgram(program));
  if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
    console.log(gl.getProgramInfoLog(program));
    throw new Error("Shader program validation failed.");
  }
}
function createStaticVertexBuffer(gl, data) {
  const buffer2 = throwIfNull(gl, () => gl.createBuffer(), "Unable to create WebGLBuffer");
  callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, buffer2));
  callAndCheck(gl, () => gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW));
  return buffer2;
}
function createStaticIndexBuffer(gl, data) {
  const buffer2 = throwIfNull(gl, () => gl.createBuffer(), "Unable to create WebGLBuffer");
  callAndCheck(gl, () => gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer2));
  callAndCheck(gl, () => gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW));
  return buffer2;
}
function getNumChannels() {
  if (env().getNumber("WEBGL_VERSION") === 2) {
    return 1;
  }
  return 4;
}
function createTexture(gl) {
  return throwIfNull(gl, () => gl.createTexture(), "Unable to create WebGLTexture.");
}
function validateTextureSize(width, height) {
  const maxTextureSize = env().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  if (width <= 0 || height <= 0) {
    const requested = `[${width}x${height}]`;
    throw new Error("Requested texture size " + requested + " is invalid.");
  }
  if (width > maxTextureSize || height > maxTextureSize) {
    const requested = `[${width}x${height}]`;
    const max2 = `[${maxTextureSize}x${maxTextureSize}]`;
    throw new Error("Requested texture size " + requested + " greater than WebGL maximum on this browser / GPU " + max2 + ".");
  }
}
function createFramebuffer(gl) {
  return throwIfNull(gl, () => gl.createFramebuffer(), "Unable to create WebGLFramebuffer.");
}
function bindVertexBufferToProgramAttribute(gl, program, attribute, buffer2, arrayEntriesPerItem, itemStrideInBytes, itemOffsetInBytes) {
  const loc = gl.getAttribLocation(program, attribute);
  if (loc === -1) {
    return false;
  }
  callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, buffer2));
  callAndCheck(gl, () => gl.vertexAttribPointer(loc, arrayEntriesPerItem, gl.FLOAT, false, itemStrideInBytes, itemOffsetInBytes));
  callAndCheck(gl, () => gl.enableVertexAttribArray(loc));
  return true;
}
function bindTextureUnit(gl, texture, textureUnit) {
  validateTextureUnit(gl, textureUnit);
  callAndCheck(gl, () => gl.activeTexture(gl.TEXTURE0 + textureUnit));
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
}
function unbindTextureUnit(gl, textureUnit) {
  validateTextureUnit(gl, textureUnit);
  callAndCheck(gl, () => gl.activeTexture(gl.TEXTURE0 + textureUnit));
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function getProgramUniformLocationOrThrow(gl, program, uniformName) {
  return throwIfNull(gl, () => gl.getUniformLocation(program, uniformName), 'uniform "' + uniformName + '" not present in program.');
}
function getProgramUniformLocation(gl, program, uniformName) {
  return gl.getUniformLocation(program, uniformName);
}
function bindTextureToProgramUniformSampler(gl, texture, uniformSamplerLocation, textureUnit) {
  callAndCheck(gl, () => bindTextureUnit(gl, texture, textureUnit));
  callAndCheck(gl, () => gl.uniform1i(uniformSamplerLocation, textureUnit));
}
function bindCanvasToFramebuffer(gl) {
  callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, null));
  callAndCheck(gl, () => gl.viewport(0, 0, gl.canvas.width, gl.canvas.height));
  callAndCheck(gl, () => gl.scissor(0, 0, gl.canvas.width, gl.canvas.height));
}
function bindColorTextureToFramebuffer(gl, texture, framebuffer) {
  callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer));
  callAndCheck(gl, () => gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0));
}
function unbindColorTextureFromFramebuffer(gl, framebuffer) {
  callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer));
  callAndCheck(gl, () => gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, null, 0));
}
function validateFramebuffer(gl) {
  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status !== gl.FRAMEBUFFER_COMPLETE) {
    throw new Error("Error binding framebuffer: " + getFramebufferErrorMessage(gl, status));
  }
}
function getFramebufferErrorMessage(gl, status) {
  switch (status) {
    case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
    case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
      return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
    case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
      return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
    case gl.FRAMEBUFFER_UNSUPPORTED:
      return "FRAMEBUFFER_UNSUPPORTED";
    default:
      return `unknown error ${status}`;
  }
}
function throwIfNull(gl, returnTOrNull, failureMessage) {
  const tOrNull = callAndCheck(gl, () => returnTOrNull());
  if (tOrNull == null) {
    throw new Error(failureMessage);
  }
  return tOrNull;
}
function validateTextureUnit(gl, textureUnit) {
  const maxTextureUnit = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1;
  const glTextureUnit = textureUnit + gl.TEXTURE0;
  if (glTextureUnit < gl.TEXTURE0 || glTextureUnit > maxTextureUnit) {
    const textureUnitRange = `[gl.TEXTURE0, gl.TEXTURE${maxTextureUnit}]`;
    throw new Error(`textureUnit must be in ${textureUnitRange}.`);
  }
}
function getBatchDim(shape, dimsToSkip = 2) {
  return util_exports.sizeFromShape(shape.slice(0, shape.length - dimsToSkip));
}
function getRowsCols(shape) {
  if (shape.length === 0) {
    throw Error("Cannot get rows and columns of an empty shape array.");
  }
  return [shape.length > 1 ? shape[shape.length - 2] : 1, shape[shape.length - 1]];
}
function getShapeAs3D(shape) {
  let shapeAs3D = [1, 1, 1];
  const isScalar = shape.length === 0 || shape.length === 1 && shape[0] === 1;
  if (!isScalar) {
    shapeAs3D = [getBatchDim(shape), ...getRowsCols(shape)];
  }
  return shapeAs3D;
}
function getTextureShapeFromLogicalShape(logShape, isPacked = false) {
  let maxTexSize = env().getNumber("WEBGL_MAX_TEXTURE_SIZE");
  let maxSizeForNarrowTex = env().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");
  if (maxSizeForNarrowTex === Infinity && env().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")) {
    maxSizeForNarrowTex = maxTexSize / 2;
  }
  if (isPacked) {
    maxTexSize = maxTexSize * 2;
    maxSizeForNarrowTex = maxSizeForNarrowTex * 2;
    logShape = logShape.map((d, i) => i >= logShape.length - 2 ? util_exports.nearestLargerEven(logShape[i]) : logShape[i]);
    if (logShape.length === 1) {
      logShape = [2, logShape[0]];
    }
  }
  if (logShape.length !== 2) {
    const squeezeResult = util_exports.squeezeShape(logShape);
    logShape = squeezeResult.newShape;
  }
  let size = util_exports.sizeFromShape(logShape);
  let textureShape = null;
  if (logShape.length <= 1 && size <= maxTexSize) {
    textureShape = [1, size];
  } else if (logShape.length === 2 && logShape[0] <= maxTexSize && logShape[1] <= maxTexSize) {
    textureShape = logShape;
  } else if (logShape.length === 3 && logShape[0] * logShape[1] <= maxTexSize && logShape[2] <= maxTexSize) {
    textureShape = [logShape[0] * logShape[1], logShape[2]];
  } else if (logShape.length === 3 && logShape[0] <= maxTexSize && logShape[1] * logShape[2] <= maxTexSize) {
    textureShape = [logShape[0], logShape[1] * logShape[2]];
  } else if (logShape.length === 4 && logShape[0] * logShape[1] * logShape[2] <= maxTexSize && logShape[3] <= maxTexSize) {
    textureShape = [logShape[0] * logShape[1] * logShape[2], logShape[3]];
  } else if (logShape.length === 4 && logShape[0] <= maxTexSize && logShape[1] * logShape[2] * logShape[3] <= maxTexSize) {
    textureShape = [logShape[0], logShape[1] * logShape[2] * logShape[3]];
  }
  const isLongNarrowTex = textureShape != null && Math.max(...textureShape) > maxSizeForNarrowTex && Math.min(...textureShape) <= (isPacked ? 2 : 1) && Math.min(...textureShape) > 0;
  if (textureShape == null || isLongNarrowTex) {
    if (isPacked) {
      const batchDim = getBatchDim(logShape);
      let rows = 2, cols = 2;
      if (logShape.length) {
        [rows, cols] = getRowsCols(logShape);
      }
      size = batchDim * (rows / 2) * (cols / 2);
      textureShape = util_exports.sizeToSquarishShape(size).map((d) => d * 2);
    } else {
      textureShape = util_exports.sizeToSquarishShape(size);
    }
  }
  return textureShape;
}
function isEven(n) {
  return n % 2 === 0;
}
function isReshapeFree(shape1, shape2) {
  shape1 = shape1.slice(-2);
  shape2 = shape2.slice(-2);
  if (util_exports.arraysEqual(shape1, shape2)) {
    return true;
  }
  if (!shape1.length || !shape2.length) {
    return true;
  }
  if (shape1[0] === 0 || shape1[1] === 0 || shape2[0] === 0 || shape2[1] === 0) {
    return true;
  }
  if (shape1.length !== shape2.length) {
    const shape1Cols = shape1[shape1.length - 1];
    const shape2Cols = shape2[shape2.length - 1];
    if (shape1Cols === shape2Cols) {
      return true;
    }
    if (isEven(shape1Cols) && isEven(shape2Cols) && (shape1[0] === 1 || shape2[0] === 1)) {
      return true;
    }
  }
  return shape1[1] === shape2[1] && isEven(shape1[0]) && isEven(shape2[0]);
}
var MAX_TEXTURE_SIZE;
var MAX_TEXTURES_IN_SHADER;
function getWebGLMaxTextureSize(webGLVersion) {
  if (MAX_TEXTURE_SIZE == null) {
    const gl = getWebGLContext(webGLVersion);
    MAX_TEXTURE_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  }
  return MAX_TEXTURE_SIZE;
}
function resetMaxTextureSize() {
  MAX_TEXTURE_SIZE = null;
}
function resetMaxTexturesInShader() {
  MAX_TEXTURES_IN_SHADER = null;
}
function getMaxTexturesInShader(webGLVersion) {
  if (MAX_TEXTURES_IN_SHADER == null) {
    const gl = getWebGLContext(webGLVersion);
    MAX_TEXTURES_IN_SHADER = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
  }
  return Math.min(16, MAX_TEXTURES_IN_SHADER);
}
function getWebGLDisjointQueryTimerVersion(webGLVersion) {
  if (webGLVersion === 0) {
    return 0;
  }
  let queryTimerVersion;
  const gl = getWebGLContext(webGLVersion);
  if (hasExtension(gl, "EXT_disjoint_timer_query_webgl2") && webGLVersion === 2) {
    queryTimerVersion = 2;
  } else if (hasExtension(gl, "EXT_disjoint_timer_query")) {
    queryTimerVersion = 1;
  } else {
    queryTimerVersion = 0;
  }
  return queryTimerVersion;
}
function hasExtension(gl, extensionName) {
  const ext = gl.getExtension(extensionName);
  return ext != null;
}
function isWebGLVersionEnabled(webGLVersion) {
  try {
    const gl = getWebGLContext(webGLVersion);
    if (gl != null) {
      return true;
    }
  } catch (e) {
    console.log("Error when getting WebGL context: ", e);
    return false;
  }
  return false;
}
function isCapableOfRenderingToFloatTexture(webGLVersion) {
  if (webGLVersion === 0) {
    return false;
  }
  const gl = getWebGLContext(webGLVersion);
  if (webGLVersion === 1) {
    if (!hasExtension(gl, "OES_texture_float")) {
      return false;
    }
  } else {
    if (!hasExtension(gl, "EXT_color_buffer_float")) {
      return false;
    }
  }
  const isFrameBufferComplete = createFloatTextureAndBindToFramebuffer(gl);
  return isFrameBufferComplete;
}
function isDownloadFloatTextureEnabled(webGLVersion) {
  if (webGLVersion === 0) {
    return false;
  }
  const gl = getWebGLContext(webGLVersion);
  if (webGLVersion === 1) {
    if (!hasExtension(gl, "OES_texture_float")) {
      return false;
    }
    if (!hasExtension(gl, "WEBGL_color_buffer_float")) {
      return false;
    }
  } else {
    if (hasExtension(gl, "EXT_color_buffer_float")) {
      return createFloatTextureAndBindToFramebuffer(gl);
    }
    const COLOR_BUFFER_HALF_FLOAT = "EXT_color_buffer_half_float";
    if (hasExtension(gl, COLOR_BUFFER_HALF_FLOAT)) {
      const textureHalfFloatExtension = gl.getExtension(COLOR_BUFFER_HALF_FLOAT);
      return createHalfFloatTextureAndBindToFramebuffer(gl, textureHalfFloatExtension);
    }
    return false;
  }
  const isFrameBufferComplete = createFloatTextureAndBindToFramebuffer(gl);
  return isFrameBufferComplete;
}
function createFloatTextureAndBindToFramebuffer(gl) {
  const texConfig = getTextureConfig(gl);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  const width = 1;
  const height = 1;
  gl.texImage2D(gl.TEXTURE_2D, 0, texConfig.internalFormatFloat, width, height, 0, texConfig.textureFormatFloat, texConfig.textureTypeFloat, null);
  const frameBuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  const isFrameBufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
  gl.bindTexture(gl.TEXTURE_2D, null);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.deleteTexture(texture);
  gl.deleteFramebuffer(frameBuffer);
  return isFrameBufferComplete;
}
function createHalfFloatTextureAndBindToFramebuffer(gl, textureHalfFloatExtension) {
  const texConfig = getTextureConfig(gl, textureHalfFloatExtension);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  const width = 1;
  const height = 1;
  gl.texImage2D(gl.TEXTURE_2D, 0, texConfig.internalFormatHalfFloat, width, height, 0, texConfig.textureFormatFloat, texConfig.textureTypeHalfFloat, null);
  const frameBuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  const isFrameBufferComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
  gl.bindTexture(gl.TEXTURE_2D, null);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.deleteTexture(texture);
  gl.deleteFramebuffer(frameBuffer);
  return isFrameBufferComplete;
}
function isWebGLFenceEnabled(webGLVersion) {
  if (webGLVersion !== 2) {
    return false;
  }
  const gl = getWebGLContext(webGLVersion);
  const isEnabled = gl.fenceSync != null;
  return isEnabled;
}
function assertNotComplex(tensor, opName) {
  if (!Array.isArray(tensor)) {
    tensor = [tensor];
  }
  tensor.forEach((t) => {
    if (t != null) {
      util_exports.assert(t.dtype !== "complex64", () => `${opName} does not support complex64 tensors in the WebGL backend.`);
    }
  });
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/flags_webgl.js
var ENV = env();
ENV.registerFlag("HAS_WEBGL", () => ENV.getNumber("WEBGL_VERSION") > 0);
ENV.registerFlag("WEBGL_VERSION", () => {
  if (isWebGLVersionEnabled(2)) {
    return 2;
  } else if (isWebGLVersionEnabled(1)) {
    return 1;
  }
  return 0;
});
ENV.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS", () => false);
ENV.registerFlag("WEBGL_BUFFER_SUPPORTED", () => ENV.get("WEBGL_VERSION") === 2);
ENV.registerFlag("WEBGL_CPU_FORWARD", () => true);
ENV.registerFlag("WEBGL_FORCE_F16_TEXTURES", () => false);
ENV.registerFlag("WEBGL_PACK", () => ENV.getBool("HAS_WEBGL"));
ENV.registerFlag("WEBGL_PACK_NORMALIZATION", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_PACK_CLIP", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_PACK_DEPTHWISECONV", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_PACK_REDUCE", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_LAZILY_UNPACK", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_CONV_IM2COL", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE", () => ENV.getBool("WEBGL_PACK"));
ENV.registerFlag("WEBGL_MAX_TEXTURE_SIZE", () => getWebGLMaxTextureSize(ENV.getNumber("WEBGL_VERSION")));
ENV.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", () => getMaxTexturesInShader(ENV.getNumber("WEBGL_VERSION")));
ENV.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", () => {
  const webGLVersion = ENV.getNumber("WEBGL_VERSION");
  if (webGLVersion === 0) {
    return 0;
  }
  return getWebGLDisjointQueryTimerVersion(webGLVersion);
});
ENV.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", () => ENV.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && !device_util_exports.isMobile());
ENV.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", () => isCapableOfRenderingToFloatTexture(ENV.getNumber("WEBGL_VERSION")));
ENV.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", () => {
  return ENV.getBool("WEBGL_FORCE_F16_TEXTURES") ? false : ENV.getBool("WEBGL_RENDER_FLOAT32_CAPABLE");
});
ENV.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", () => isDownloadFloatTextureEnabled(ENV.getNumber("WEBGL_VERSION")));
ENV.registerFlag("WEBGL_FENCE_API_ENABLED", () => isWebGLFenceEnabled(ENV.getNumber("WEBGL_VERSION")));
ENV.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", () => {
  const useUniforms = ENV.getBool("WEBGL_RENDER_FLOAT32_ENABLED");
  return useUniforms ? 4 : 0;
});
ENV.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD", () => {
  return -1;
}, (threshold) => {
  if (!(typeof threshold === "number")) {
    throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${threshold}.`);
  }
  if (threshold < 0 && threshold !== -1) {
    throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${threshold}.`);
  }
});
ENV.registerFlag("WEBGL_FLUSH_THRESHOLD", () => {
  return device_util_exports.isMobile() ? 1 : -1;
}, (threshold) => {
  if (!(typeof threshold === "number")) {
    throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${threshold}.`);
  }
  if (threshold < 0 && threshold !== -1) {
    throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${threshold}.`);
  }
});
ENV.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD", () => 128);
ENV.registerFlag("WEBGL_USE_SHAPES_UNIFORMS", () => false);
ENV.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD", () => 1e5);
ENV.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD", () => 128);
ENV.registerFlag("WEBGL_EXP_CONV", () => false);
ENV.registerFlag("SOFTWARE_WEBGL_ENABLED", () => ENV.getBool("IS_TEST"));
ENV.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE", () => Infinity);
ENV.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE", () => false);
ENV.registerFlag("WEBGL2_ISNAN_CUSTOM", () => false);
ENV.registerFlag("ENGINE_COMPILE_ONLY", () => false);

// node_modules/@tensorflow/tfjs-backend-webgl/dist/glsl_version.js
function getGlslDifferences() {
  let version2;
  let attribute;
  let varyingVs;
  let varyingFs;
  let texture2D;
  let output;
  let defineOutput;
  let defineSpecialNaN;
  let defineSpecialInf;
  let defineRound;
  if (env().getNumber("WEBGL_VERSION") === 2) {
    version2 = "#version 300 es";
    attribute = "in";
    varyingVs = "out";
    varyingFs = "in";
    texture2D = "texture";
    output = "outputColor";
    defineOutput = "out vec4 outputColor;";
    defineSpecialNaN = env().getBool("WEBGL2_ISNAN_CUSTOM") ? `
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    ` : "";
    defineSpecialInf = ``;
    defineRound = `
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `;
  } else {
    version2 = "";
    attribute = "attribute";
    varyingVs = "varying";
    varyingFs = "varying";
    texture2D = "texture2D";
    output = "gl_FragColor";
    defineOutput = "";
    defineSpecialNaN = `
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `;
    defineSpecialInf = `
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `;
    defineRound = `
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `;
  }
  return {
    version: version2,
    attribute,
    varyingVs,
    varyingFs,
    texture2D,
    output,
    defineOutput,
    defineSpecialNaN,
    defineSpecialInf,
    defineRound
  };
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js
function getLogicalCoordinatesFromFlatIndex(coords2, shape, index = "index") {
  const strides = util_exports.computeStrides(shape);
  return strides.map((stride, i) => {
    const line1 = `int ${coords2[i]} = ${index} / ${stride}`;
    const line2 = i === strides.length - 1 ? `int ${coords2[i + 1]} = ${index} - ${coords2[i]} * ${stride}` : `index -= ${coords2[i]} * ${stride}`;
    return `${line1}; ${line2};`;
  }).join("");
}
function getOutputLogicalCoordinatesFromFlatIndexByUniform(coords2, shape, index = "index") {
  const strides = util_exports.computeStrides(shape);
  return strides.map((_, i) => {
    const line1 = `int ${coords2[i]} = ${index} / outShapeStrides[${i}]`;
    const line2 = i === strides.length - 1 ? `int ${coords2[i + 1]} = ${index} - ${coords2[i]} * outShapeStrides[${i}]` : `index -= ${coords2[i]} * outShapeStrides[${i}]`;
    return `${line1}; ${line2};`;
  }).join("");
}
function symbolicallyComputeStrides(indicesArr, variableName) {
  const numCoords = indicesArr.length;
  const shape = indicesArr.map((d) => `${variableName}[${d}]`);
  const strides = new Array(numCoords - 1);
  strides[numCoords - 2] = shape[numCoords - 1];
  for (let i = numCoords - 3; i >= 0; --i) {
    strides[i] = `(${strides[i + 1]} * ${shape[i + 1]})`;
  }
  return strides;
}
function getLogicalCoordinatesFromFlatIndexByUniform(coords2, variableName, index = "index") {
  const indicesArray = coords2.map((_, i) => i);
  const strides = symbolicallyComputeStrides(indicesArray, variableName);
  return strides.map((_, i) => {
    const line1 = `int ${coords2[i]} = ${index} / ${strides[i]}`;
    const line2 = i === strides.length - 1 ? `int ${coords2[i + 1]} = ${index} - ${coords2[i]} * ${strides[i]}` : `index -= ${coords2[i]} * ${strides[i]}`;
    return `${line1}; ${line2};`;
  }).join("");
}
function getFlatIndexFrom3D(shape) {
  const strides = util_exports.computeStrides(shape).map((d) => d.toString());
  return `
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${strides[0]} + coords.y * ${strides[1]} + coords.z;
  }
`;
}
function getFlatIndexFrom3DOutput() {
  return `
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`;
}
var ENCODE_FLOAT_SNIPPET = `
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;

// node_modules/@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js
var {
  getBroadcastDims
} = backend_util_exports;
function makeShader(inputsInfo, outputShape, program) {
  const prefixSnippets = [];
  inputsInfo.forEach((x) => {
    const size = util_exports.sizeFromShape(x.shapeInfo.logicalShape);
    if (x.shapeInfo.isUniform) {
      prefixSnippets.push(`uniform float ${x.name}${size > 1 ? `[${size}]` : ""};`);
    } else {
      prefixSnippets.push(`uniform sampler2D ${x.name};`);
      prefixSnippets.push(`uniform int offset${x.name};`);
    }
    if (program.enableShapeUniforms) {
      const {
        uniformShape
      } = getUniformInfoFromShape(program.packedInputs, x.shapeInfo.logicalShape, x.shapeInfo.texShape);
      switch (uniformShape.length) {
        case 1:
          prefixSnippets.push(`uniform int ${x.name}Shape;`);
          break;
        case 2:
          prefixSnippets.push(`uniform ivec2 ${x.name}Shape;`);
          break;
        case 3:
          prefixSnippets.push(`uniform ivec3 ${x.name}Shape;`);
          break;
        case 4:
          prefixSnippets.push(`uniform ivec4 ${x.name}Shape;`);
          break;
        default:
          break;
      }
      prefixSnippets.push(`uniform ivec2 ${x.name}TexShape;`);
    }
  });
  if (program.enableShapeUniforms) {
    switch (outputShape.logicalShape.length) {
      case 1:
        prefixSnippets.push(`uniform int outShape;`);
        break;
      case 2:
        prefixSnippets.push(`uniform ivec2 outShape;`);
        prefixSnippets.push(`uniform int outShapeStrides;`);
        break;
      case 3:
        prefixSnippets.push(`uniform ivec3 outShape;`);
        prefixSnippets.push(`uniform ivec2 outShapeStrides;`);
        break;
      case 4:
        prefixSnippets.push(`uniform ivec4 outShape;`);
        prefixSnippets.push(`uniform ivec3 outShapeStrides;`);
        break;
      default:
        break;
    }
    prefixSnippets.push(`uniform ivec2 outTexShape;`);
  }
  if (program.customUniforms) {
    program.customUniforms.forEach((d) => {
      prefixSnippets.push(`uniform ${d.type} ${d.name}${d.arrayIndex ? `[${d.arrayIndex}]` : ""};`);
    });
  }
  const inputPrefixSnippet = prefixSnippets.join("\n");
  const inputSamplingSnippet = inputsInfo.map((x) => getInputSamplingSnippet(x, outputShape, program.packedInputs, program.enableShapeUniforms)).join("\n");
  const outTexShape = outputShape.texShape;
  const glsl = getGlslDifferences();
  const floatTextureSampleSnippet = getFloatTextureSampleSnippet(glsl);
  let outputSamplingSnippet;
  let floatTextureSetOutputSnippet;
  let shaderPrefix = getShaderPrefix(glsl);
  if (outputShape.isPacked) {
    outputSamplingSnippet = getPackedOutputSamplingSnippet(outputShape.logicalShape, outTexShape, program.enableShapeUniforms);
    floatTextureSetOutputSnippet = getFloatTextureSetRGBASnippet(glsl);
  } else {
    outputSamplingSnippet = getOutputSamplingSnippet(outputShape.logicalShape, outTexShape, program.enableShapeUniforms);
    floatTextureSetOutputSnippet = getFloatTextureSetRSnippet(glsl);
  }
  if (program.packedInputs) {
    shaderPrefix += SHADER_PACKED_PREFIX;
  }
  const source = [shaderPrefix, floatTextureSampleSnippet, floatTextureSetOutputSnippet, inputPrefixSnippet, outputSamplingSnippet, inputSamplingSnippet, program.userCode].join("\n");
  return source;
}
function getSamplerFromInInfo(inInfo, enableShapeUniforms = false) {
  const shape = inInfo.shapeInfo.logicalShape;
  switch (shape.length) {
    case 0:
      return getSamplerScalar(inInfo, enableShapeUniforms);
    case 1:
      return getSampler1D(inInfo, enableShapeUniforms);
    case 2:
      return getSampler2D(inInfo, enableShapeUniforms);
    case 3:
      return getSampler3D(inInfo, enableShapeUniforms);
    case 4:
      return getSampler4D(inInfo, enableShapeUniforms);
    case 5:
      return getSampler5D(inInfo);
    case 6:
      return getSampler6D(inInfo);
    default:
      throw new Error(`${shape.length}-D input sampling is not yet supported`);
  }
}
function getPackedSamplerFromInInfo(inInfo, enableShapeUniforms) {
  const shape = inInfo.shapeInfo.logicalShape;
  switch (shape.length) {
    case 0:
      return getPackedSamplerScalar(inInfo);
    case 1:
      return getPackedSampler1D(inInfo, enableShapeUniforms);
    case 2:
      return getPackedSampler2D(inInfo, enableShapeUniforms);
    case 3:
      return getPackedSampler3D(inInfo, enableShapeUniforms);
    default:
      return getPackedSamplerND(inInfo, enableShapeUniforms);
  }
}
function getInputSamplingSnippet(inInfo, outShapeInfo, usesPackedTextures = false, enableShapeUniforms) {
  let res = "";
  if (usesPackedTextures) {
    res += getPackedSamplerFromInInfo(inInfo, enableShapeUniforms);
  } else {
    res += getSamplerFromInInfo(inInfo, enableShapeUniforms);
  }
  const inShape = inInfo.shapeInfo.logicalShape;
  const outShape = outShapeInfo.logicalShape;
  if (inShape.length <= outShape.length) {
    if (usesPackedTextures) {
      res += getPackedSamplerAtOutputCoords(inInfo, outShapeInfo);
    } else {
      res += getSamplerAtOutputCoords(inInfo, outShapeInfo);
    }
  }
  return res;
}
function getPackedOutputSamplingSnippet(outShape, outTexShape, enableShapeUniforms) {
  switch (outShape.length) {
    case 0:
      return getOutputScalarCoords();
    case 1:
      return getOutputPacked1DCoords(outShape, outTexShape, enableShapeUniforms);
    case 2:
      return getOutputPacked2DCoords(outShape, outTexShape, enableShapeUniforms);
    case 3:
      return getOutputPacked3DCoords(outShape, outTexShape, enableShapeUniforms);
    default:
      return getOutputPackedNDCoords(outShape, outTexShape, enableShapeUniforms);
  }
}
function getOutputSamplingSnippet(outShape, outTexShape, enableShapeUniforms) {
  switch (outShape.length) {
    case 0:
      return getOutputScalarCoords();
    case 1:
      return getOutput1DCoords(outShape, outTexShape, enableShapeUniforms);
    case 2:
      return getOutput2DCoords(outShape, outTexShape, enableShapeUniforms);
    case 3:
      return getOutput3DCoords(outShape, outTexShape, enableShapeUniforms);
    case 4:
      return getOutput4DCoords(outShape, outTexShape, enableShapeUniforms);
    case 5:
      return getOutput5DCoords(outShape, outTexShape);
    case 6:
      return getOutput6DCoords(outShape, outTexShape);
    default:
      throw new Error(`${outShape.length}-D output sampling is not yet supported`);
  }
}
function getFloatTextureSampleSnippet(glsl) {
  return `
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${glsl.texture2D}(textureSampler, uv).r;
    }
  `;
}
function getFloatTextureSetRSnippet(glsl) {
  return `
    void setOutput(float val) {
      ${glsl.output} = vec4(val, 0, 0, 0);
    }
  `;
}
function getFloatTextureSetRGBASnippet(glsl) {
  return `
    void setOutput(vec4 val) {
      ${glsl.output} = val;
    }
  `;
}
function getShaderPrefix(glsl) {
  const SHADER_PREFIX = `${glsl.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${glsl.varyingFs} vec2 resultUV;
    ${glsl.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${glsl.defineSpecialNaN}
    ${glsl.defineSpecialInf}
    ${glsl.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${SAMPLE_1D_SNIPPET}
    ${SAMPLE_2D_SNIPPET}
    ${SAMPLE_3D_SNIPPET}
  `;
  return SHADER_PREFIX;
}
var SAMPLE_1D_SNIPPET = `
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
var SAMPLE_2D_SNIPPET = `
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
var SAMPLE_3D_SNIPPET = `
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`;
var SHADER_PACKED_PREFIX = `
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;
function getOutputScalarCoords() {
  return `
    int getOutputCoords() {
      return 0;
    }
  `;
}
function getOutputPacked1DCoords(shape, texShape, enableShapeUniforms) {
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  if (packedTexShape[0] === 1) {
    if (enableShapeUniforms) {
      return `
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `;
    }
    return `
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${packedTexShape[1]}.0);
      }
    `;
  }
  if (packedTexShape[1] === 1) {
    if (enableShapeUniforms) {
      return `
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `;
    }
    return `
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${packedTexShape[0]}.0);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `;
  }
  return `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      return 2 * (resTexRC.x * ${packedTexShape[1]} + resTexRC.y);
    }
  `;
}
function getOutput1DCoords(shape, texShape, enableShapeUniforms) {
  if (texShape[0] === 1) {
    if (enableShapeUniforms) {
      return `
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `;
    }
    return `
      int getOutputCoords() {
        return int(resultUV.x * ${texShape[1]}.0);
      }
    `;
  }
  if (texShape[1] === 1) {
    if (enableShapeUniforms) {
      return `
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `;
    }
    return `
      int getOutputCoords() {
        return int(resultUV.y * ${texShape[0]}.0);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `;
  }
  return `
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      return resTexRC.x * ${texShape[1]} + resTexRC.y;
    }
  `;
}
function getOutputPacked3DCoords(shape, texShape, enableShapeUniforms) {
  if (enableShapeUniforms) {
    return `
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;
  }
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  const texelsInLogicalRow = Math.ceil(shape[2] / 2);
  const texelsInBatch = texelsInLogicalRow * Math.ceil(shape[1] / 2);
  return `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;

      int b = index / ${texelsInBatch};
      index -= b * ${texelsInBatch};

      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec3(b, r, c);
    }
  `;
}
function getOutput3DCoords(shape, texShape, enableShapeUniforms) {
  if (enableShapeUniforms) {
    const coordsFromIndexSnippet2 = getOutputLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d"], shape);
    return `
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${coordsFromIndexSnippet2}
    return ivec3(r, c, d);
  }
`;
  }
  const coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(["r", "c", "d"], shape);
  return `
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      ${coordsFromIndexSnippet}
      return ivec3(r, c, d);
    }
  `;
}
function getOutputPackedNDCoords(shape, texShape, enableShapeUniforms) {
  if (enableShapeUniforms) {
    return `
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;
  }
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  const texelsInLogicalRow = Math.ceil(shape[shape.length - 1] / 2);
  const texelsInBatch = texelsInLogicalRow * Math.ceil(shape[shape.length - 2] / 2);
  let texelsInBatchN = texelsInBatch;
  let batches = ``;
  let coords2 = "b, r, c";
  for (let b = 2; b < shape.length - 1; b++) {
    texelsInBatchN *= shape[shape.length - b - 1];
    batches = `
      int b${b} = index / ${texelsInBatchN};
      index -= b${b} * ${texelsInBatchN};
    ` + batches;
    coords2 = `b${b}, ` + coords2;
  }
  return `
    ivec${shape.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;

      ${batches}

      int b = index / ${texelsInBatch};
      index -= b * ${texelsInBatch};

      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec${shape.length}(${coords2});
    }
  `;
}
function getOutput4DCoords(shape, texShape, enableShapeUniforms) {
  if (enableShapeUniforms) {
    const coordsFromIndexSnippet2 = getOutputLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d", "d2"], shape);
    return `
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${coordsFromIndexSnippet2}
      return ivec4(r, c, d, d2);
    }
  `;
  }
  const coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(["r", "c", "d", "d2"], shape);
  return `
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      ${coordsFromIndexSnippet}
      return ivec4(r, c, d, d2);
    }
  `;
}
function getOutput5DCoords(shape, texShape) {
  const coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(["r", "c", "d", "d2", "d3"], shape);
  return `
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${texShape[0]},
                             ${texShape[1]}));

      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;

      ${coordsFromIndexSnippet}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `;
}
function getOutput6DCoords(shape, texShape) {
  const coordsFromIndexSnippet = getLogicalCoordinatesFromFlatIndex(["r", "c", "d", "d2", "d3", "d4"], shape);
  return `
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;

      ${coordsFromIndexSnippet}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `;
}
function getOutputPacked2DCoords(shape, texShape, enableShapeUniforms) {
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  if (util_exports.arraysEqual(shape, texShape)) {
    if (enableShapeUniforms) {
      return `
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `;
    }
    return `
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${packedTexShape[0]}, ${packedTexShape[1]}));
      }
    `;
  }
  const texelsInLogicalRow = Math.ceil(shape[1] / 2);
  if (enableShapeUniforms) {
    return `
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `;
  }
  return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${packedTexShape[0]}, ${packedTexShape[1]}));

      int index = resTexRC.x * ${packedTexShape[1]} + resTexRC.y;
      int r = 2 * (index / ${texelsInLogicalRow});
      int c = imod(index, ${texelsInLogicalRow}) * 2;

      return ivec2(r, c);
    }
  `;
}
function getOutput2DCoords(shape, texShape, enableShapeUniforms) {
  if (util_exports.arraysEqual(shape, texShape)) {
    if (enableShapeUniforms) {
      return `
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `;
    }
    return `
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${texShape[0]}, ${texShape[1]}));
      }
    `;
  }
  if (shape[1] === 1) {
    if (enableShapeUniforms) {
      return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `;
    }
    return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${texShape[0]}, ${texShape[1]}));
        int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `;
  }
  if (shape[0] === 1) {
    if (enableShapeUniforms) {
      return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `;
    }
    return `
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${texShape[0]}, ${texShape[1]}));
        int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `;
  }
  return `
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${texShape[0]}, ${texShape[1]}));
      int index = resTexRC.x * ${texShape[1]} + resTexRC.y;
      int r = index / ${shape[1]};
      int c = index - r * ${shape[1]};
      return ivec2(r, c);
    }
  `;
}
function getFlatOffsetUniformName(texName) {
  return `offset${texName}`;
}
function getPackedSamplerScalar(inputInfo) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const glsl = getGlslDifferences();
  return `
    vec4 ${funcName}() {
      return ${glsl.texture2D}(${texName}, halfCR);
    }
  `;
}
function getSamplerScalar(inputInfo, enableShapeUniforms) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  if (inputInfo.shapeInfo.isUniform) {
    return `float ${funcName}() {return ${texName};}`;
  }
  const [texNumR, texNumC] = inputInfo.shapeInfo.texShape;
  if (texNumR === 1 && texNumC === 1) {
    return `
      float ${funcName}() {
        return sampleTexture(${texName}, halfCR);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  if (enableShapeUniforms) {
    return `
    float ${funcName}() {
      vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  const [tNumR, tNumC] = inputInfo.shapeInfo.texShape;
  return `
    float ${funcName}() {
      vec2 uv = uvFromFlat(${tNumR}, ${tNumC}, ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getPackedSampler1D(inputInfo, enableShapeUniforms) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const texShape = inputInfo.shapeInfo.texShape;
  const glsl = getGlslDifferences();
  if (enableShapeUniforms) {
    return `
    vec4 ${funcName}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${texName}TexShape[0]) / 2.0), ceil(float(${texName}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
  }
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  return `
    vec4 ${funcName}(int index) {
      vec2 uv = packedUVfrom1D(
        ${packedTexShape[0]}, ${packedTexShape[1]}, index);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler1D(inputInfo, enableShapeUniforms) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int index) {
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const texShape = inputInfo.shapeInfo.texShape;
  const tNumR = texShape[0];
  const tNumC = texShape[1];
  if (tNumC === 1 && tNumR === 1) {
    return `
      float ${funcName}(int index) {
        return sampleTexture(${texName}, halfCR);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  if (tNumC === 1) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${offset}) + 0.5) / float(${texName}TexShape[0]));
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
      float ${funcName}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${offset}) + 0.5) / ${tNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (tNumR === 1) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int index) {
        vec2 uv = vec2((float(index + ${offset}) + 0.5) / float(${texName}TexShape[1]), 0.5);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
      float ${funcName}(int index) {
        vec2 uv = vec2((float(index + ${offset}) + 0.5) / ${tNumC}.0, 0.5);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    float ${funcName}(int index) {
      vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  return `
    float ${funcName}(int index) {
      vec2 uv = uvFromFlat(${tNumR}, ${tNumC}, index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getPackedSampler2D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  const glsl = getGlslDifferences();
  if (texShape != null && util_exports.arraysEqual(shape, texShape)) {
    if (enableShapeUniforms) {
      return `
      vec4 ${funcName}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${texName}TexShape[1], ${texName}TexShape[0]);

        return ${glsl.texture2D}(${texName}, uv);
      }
    `;
    }
    return `
      vec4 ${funcName}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${texNumC}.0, ${texNumR}.0);

        return ${glsl.texture2D}(${texName}, uv);
      }
    `;
  }
  if (enableShapeUniforms) {
    return `
    vec4 ${funcName}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${texName}TexShape[0]) / 2.0), ceil(float(${texName}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${texName}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
  }
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  const valuesPerRow = Math.ceil(shape[1] / 2);
  return `
    vec4 ${funcName}(int row, int col) {
      vec2 uv = packedUVfrom2D(${valuesPerRow}, ${packedTexShape[0]}, ${packedTexShape[1]}, row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler2D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const texShape = inputInfo.shapeInfo.texShape;
  if (texShape != null && util_exports.arraysEqual(shape, texShape)) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    const texNumR2 = texShape[0];
    const texNumC2 = texShape[1];
    return `
    float ${funcName}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${texNumC2}.0, ${texNumR2}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  const {
    newShape,
    keptDims
  } = util_exports.squeezeShape(shape);
  const squeezedShape = newShape;
  if (squeezedShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
    const params = ["row", "col"];
    return `
      ${getSamplerFromInInfo(newInputInfo, enableShapeUniforms)}
      float ${funcName}(int row, int col) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
  }
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${shape[1]}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  const offset = getFlatOffsetUniformName(texName);
  if (texNumC === 1) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col) {
        float index = dot(vec3(row, col, ${offset}), vec3(${texName}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${texName}TexShape[0]));
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
    float ${funcName}(int row, int col) {
      float index = dot(vec3(row, col, ${offset}), vec3(${shape[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${texNumR}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  if (texNumR === 1) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col) {
        float index = dot(vec3(row, col, ${offset}), vec3(${texName}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${texName}TexShape[1]), 0.5);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
    float ${funcName}(int row, int col) {
      float index = dot(vec3(row, col, ${offset}), vec3(${shape[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${texNumC}.0, 0.5);
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  if (enableShapeUniforms) {
    return `
      float ${funcName}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${texName}Shape[1] + col + ${offset};
        vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], index);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  return `
  float ${funcName}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${shape[1]} + col + ${offset};
    vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
    return sampleTexture(${texName}, uv);
  }
`;
}
function getPackedSampler3D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const texShape = inputInfo.shapeInfo.texShape;
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  if (shape[0] === 1) {
    const squeezedShape = shape.slice(1);
    const keptDims = [1, 2];
    const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
    const params = ["b", "row", "col"];
    return `
        ${getPackedSamplerFromInInfo(newInputInfo, enableShapeUniforms)}
        vec4 ${funcName}(int b, int row, int col) {
          return ${funcName}(${getSqueezedParams(params, keptDims)});
        }
      `;
  }
  const glsl = getGlslDifferences();
  if (enableShapeUniforms) {
    return `
    vec4 ${funcName}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${texName}TexShape[0]) / 2.0), ceil(float(${texName}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${texName}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${texName}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
  }
  const texNumR = packedTexShape[0];
  const texNumC = packedTexShape[1];
  const valuesPerRow = Math.ceil(shape[2] / 2);
  const texelsInBatch = valuesPerRow * Math.ceil(shape[1] / 2);
  return `
    vec4 ${funcName}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${texNumR}, ${texNumC}, ${texelsInBatch}, ${valuesPerRow}, b, row, col);
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler3D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const stride0 = shape[1] * shape[2];
  const stride1 = shape[2];
  const {
    newShape,
    keptDims
  } = util_exports.squeezeShape(shape);
  const squeezedShape = newShape;
  if (squeezedShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
    const params = ["row", "col", "depth"];
    return `
        ${getSamplerFromInInfo(newInputInfo, enableShapeUniforms)}
        float ${funcName}(int row, int col, int depth) {
          return ${funcName}(${getSqueezedParams(params, keptDims)});
        }
      `;
  }
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${stride0}, ${stride1}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  const flatOffset = inputInfo.shapeInfo.flatOffset;
  if (texNumC === stride0 && flatOffset == null) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col, int depth) {
        int stride1 = ${texName}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
        float ${funcName}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${stride1}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${texNumC}.0, ${texNumR}.0);
          return sampleTexture(${texName}, uv);
        }
      `;
  }
  if (texNumC === stride1 && flatOffset == null) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${texName}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
    float ${funcName}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${shape[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${texNumC}.0, ${texNumR}.0);
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  const offset = getFlatOffsetUniformName(texName);
  if (enableShapeUniforms) {
    return `
    float ${funcName}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${texName}Shape[1] * ${texName}Shape[2];
      int stride1 = ${texName}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${offset};
      vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], index);
      return sampleTexture(${texName}, uv);
    }
    `;
  }
  return `
      float ${funcName}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${stride0} + col * ${stride1} + depth + ${offset};
        vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
        return sampleTexture(${texName}, uv);
      }
  `;
}
function getPackedSamplerND(inputInfo, enableShapeUniforms) {
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const glsl = getGlslDifferences();
  if (enableShapeUniforms) {
    return `
    vec4 ${funcName}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${texName}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${texName}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${texName}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${texName}TexShape[0]) / 2.0), ceil(float(${texName}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${glsl.texture2D}(${texName}, uv);
    }
  `;
  }
  const shape = inputInfo.shapeInfo.logicalShape;
  const rank = shape.length;
  const texShape = inputInfo.shapeInfo.texShape;
  const packedTexShape = [Math.ceil(texShape[0] / 2), Math.ceil(texShape[1] / 2)];
  const texNumR = packedTexShape[0];
  const texNumC = packedTexShape[1];
  const valuesPerRow = Math.ceil(shape[rank - 1] / 2);
  let texelsInBatch = valuesPerRow * Math.ceil(shape[rank - 2] / 2);
  let params = `int b, int row, int col`;
  let index = `b * ${texelsInBatch} + (row / 2) * ${valuesPerRow} + (col / 2)`;
  for (let b = 2; b < rank - 1; b++) {
    params = `int b${b}, ` + params;
    texelsInBatch *= shape[rank - b - 1];
    index = `b${b} * ${texelsInBatch} + ` + index;
  }
  return `
    vec4 ${funcName}(${params}) {
      int index = ${index};
      int texR = index / ${texNumC};
      int texC = index - texR * ${texNumC};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${texNumC}, ${texNumR});
      return ${glsl.texture2D}(${texName}, uv);
    }
  `;
}
function getSampler4D(inputInfo, enableShapeUniforms) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const stride2 = shape[3];
  const stride1 = shape[2] * stride2;
  const stride0 = shape[1] * stride1;
  const {
    newShape,
    keptDims
  } = util_exports.squeezeShape(shape);
  if (newShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, newShape);
    const params = ["row", "col", "depth", "depth2"];
    return `
      ${getSamplerFromInInfo(newInputInfo, enableShapeUniforms)}
      float ${funcName}(int row, int col, int depth, int depth2) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
  }
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${stride0}, ${stride1}, ${stride2}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const flatOffset = inputInfo.shapeInfo.flatOffset;
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  const stride2Str = `int stride2 = ${texName}Shape[3];`;
  const stride1Str = `int stride1 = ${texName}Shape[2] * stride2;`;
  const stride0Str = `int stride0 = ${texName}Shape[1] * stride1;`;
  if (texNumC === stride0 && flatOffset == null) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        ${stride2Str}
        ${stride1Str}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${stride1}, ${stride2}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (texNumC === stride2 && flatOffset == null) {
    if (enableShapeUniforms) {
      return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${texName}Shape[1] * ${texName}Shape[2], ${texName}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texName}TexShape[1], ${texName}TexShape[0]);
        return sampleTexture(${texName}, uv);
      }
    `;
    }
    return `
      float ${funcName}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${shape[1] * shape[2]}, ${shape[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  if (enableShapeUniforms) {
    return `
    float ${funcName}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${stride2Str}
      ${stride1Str}
      ${stride0Str}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${texName}TexShape[0], ${texName}TexShape[1], index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
  }
  return `
    float ${funcName}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} +
          depth * ${stride2} + depth2;
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index + ${offset});
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getSampler5D(inputInfo) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const stride3 = shape[4];
  const stride2 = shape[3] * stride3;
  const stride1 = shape[2] * stride2;
  const stride0 = shape[1] * stride1;
  const {
    newShape,
    keptDims
  } = util_exports.squeezeShape(shape);
  if (newShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, newShape);
    const params = ["row", "col", "depth", "depth2", "depth3"];
    return `
      ${getSamplerFromInInfo(newInputInfo)}
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
  }
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${stride0}, ${stride1}, ${stride2}, ${stride3})) +
          depth3;
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const flatOffset = inputInfo.shapeInfo.flatOffset;
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  if (texNumC === stride0 && flatOffset == null) {
    return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${stride1}, ${stride2}, ${stride3}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (texNumC === stride3 && flatOffset == null) {
    return `
      float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${shape[1] * shape[2] * shape[3]},
               ${shape[2] * shape[3]}, ${shape[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  return `
    float ${funcName}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} + depth * ${stride2} +
          depth2 * ${stride3} + depth3 + ${offset};
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getSampler6D(inputInfo) {
  const shape = inputInfo.shapeInfo.logicalShape;
  const texName = inputInfo.name;
  const funcName = "get" + texName.charAt(0).toUpperCase() + texName.slice(1);
  const {
    newShape,
    keptDims
  } = util_exports.squeezeShape(shape);
  if (newShape.length < shape.length) {
    const newInputInfo = squeezeInputInfo(inputInfo, newShape);
    const params = ["row", "col", "depth", "depth2", "depth3", "depth4"];
    return `
      ${getSamplerFromInInfo(newInputInfo)}
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${funcName}(${getSqueezedParams(params, keptDims)});
      }
    `;
  }
  const stride4 = shape[5];
  const stride3 = shape[4] * stride4;
  const stride2 = shape[3] * stride3;
  const stride1 = shape[2] * stride2;
  const stride0 = shape[1] * stride1;
  if (inputInfo.shapeInfo.isUniform) {
    return `
      float ${funcName}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${stride0}, ${stride1}, ${stride2}, ${stride3})) +
          dot(
            vec2(depth3, depth4),
            vec2(${stride4}, 1)));
        ${getUniformSampler(inputInfo)}
      }
    `;
  }
  const flatOffset = inputInfo.shapeInfo.flatOffset;
  const texShape = inputInfo.shapeInfo.texShape;
  const texNumR = texShape[0];
  const texNumC = texShape[1];
  if (texNumC === stride0 && flatOffset == null) {
    return `
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${stride1}, ${stride2}, ${stride3}, ${stride4})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  if (texNumC === stride4 && flatOffset == null) {
    return `
      float ${funcName}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${shape[1] * shape[2] * shape[3] * shape[4]},
               ${shape[2] * shape[3] * shape[4]},
               ${shape[3] * shape[4]},
               ${shape[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${texNumC}.0, ${texNumR}.0);
        return sampleTexture(${texName}, uv);
      }
    `;
  }
  const offset = getFlatOffsetUniformName(texName);
  return `
    float ${funcName}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${stride0} + col * ${stride1} + depth * ${stride2} +
          depth2 * ${stride3} + depth3 * ${stride4} + depth4 + ${offset};
      vec2 uv = uvFromFlat(${texNumR}, ${texNumC}, index);
      return sampleTexture(${texName}, uv);
    }
  `;
}
function getUniformSampler(inputInfo) {
  const texName = inputInfo.name;
  const inSize = util_exports.sizeFromShape(inputInfo.shapeInfo.logicalShape);
  if (inSize < 2) {
    return `return ${texName};`;
  }
  return `
    for (int i = 0; i < ${inSize}; i++) {
      if (i == index) {
        return ${texName}[i];
      }
    }
  `;
}
function getPackedSamplerAtOutputCoords(inputInfo, outShapeInfo) {
  const texName = inputInfo.name;
  const texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
  const funcName = "get" + texFuncSnippet + "AtOutCoords";
  const inRank = inputInfo.shapeInfo.logicalShape.length;
  const outRank = outShapeInfo.logicalShape.length;
  const broadcastDims = getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
  const type = getCoordsDataType(outRank);
  const rankDiff = outRank - inRank;
  let coordsSnippet;
  const fields = ["x", "y", "z", "w", "u", "v"];
  if (inRank === 0) {
    coordsSnippet = "";
  } else if (outRank < 2 && broadcastDims.length >= 1) {
    coordsSnippet = "coords = 0;";
  } else {
    coordsSnippet = broadcastDims.map((d) => `coords.${fields[d + rankDiff]} = 0;`).join("\n");
  }
  let unpackedCoordsSnippet = "";
  if (outRank < 2 && inRank > 0) {
    unpackedCoordsSnippet = "coords";
  } else {
    unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape.map((s, i) => `coords.${fields[i + rankDiff]}`).join(", ");
  }
  let output = `return outputValue;`;
  const inSize = util_exports.sizeFromShape(inputInfo.shapeInfo.logicalShape);
  const isInputScalar = inSize === 1;
  const outSize = util_exports.sizeFromShape(outShapeInfo.logicalShape);
  const isOutputScalar = outSize === 1;
  if (inRank === 1 && !isInputScalar && !isOutputScalar) {
    output = `
      return vec4(outputValue.xy, outputValue.xy);
    `;
  } else if (isInputScalar && !isOutputScalar) {
    if (outRank === 1) {
      output = `
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `;
    } else {
      output = `
        return vec4(outputValue.x);
      `;
    }
  } else if (broadcastDims.length) {
    const rows = inRank - 2;
    const cols = inRank - 1;
    if (broadcastDims.indexOf(rows) > -1 && broadcastDims.indexOf(cols) > -1) {
      output = `return vec4(outputValue.x);`;
    } else if (broadcastDims.indexOf(rows) > -1) {
      output = `return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`;
    } else if (broadcastDims.indexOf(cols) > -1) {
      output = `return vec4(outputValue.xx, outputValue.zz);`;
    }
  }
  return `
    vec4 ${funcName}() {
      ${type} coords = getOutputCoords();
      ${coordsSnippet}
      vec4 outputValue = get${texFuncSnippet}(${unpackedCoordsSnippet});
      ${output}
    }
  `;
}
function getSamplerAtOutputCoords(inputInfo, outShapeInfo) {
  const texName = inputInfo.name;
  const texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
  const funcName = "get" + texFuncSnippet + "AtOutCoords";
  const outTexShape = outShapeInfo.texShape;
  const inTexShape = inputInfo.shapeInfo.texShape;
  const inRank = inputInfo.shapeInfo.logicalShape.length;
  const outRank = outShapeInfo.logicalShape.length;
  if (!inputInfo.shapeInfo.isUniform && inRank === outRank && inputInfo.shapeInfo.flatOffset == null && util_exports.arraysEqual(inTexShape, outTexShape)) {
    return `
      float ${funcName}() {
        return sampleTexture(${texName}, resultUV);
      }
    `;
  }
  const type = getCoordsDataType(outRank);
  const broadcastDims = getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
  const rankDiff = outRank - inRank;
  let coordsSnippet;
  const fields = ["x", "y", "z", "w", "u", "v"];
  if (inRank === 0) {
    coordsSnippet = "";
  } else if (outRank < 2 && broadcastDims.length >= 1) {
    coordsSnippet = "coords = 0;";
  } else {
    coordsSnippet = broadcastDims.map((d) => `coords.${fields[d + rankDiff]} = 0;`).join("\n");
  }
  let unpackedCoordsSnippet = "";
  if (outRank < 2 && inRank > 0) {
    unpackedCoordsSnippet = "coords";
  } else {
    unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape.map((s, i) => `coords.${fields[i + rankDiff]}`).join(", ");
  }
  return `
    float ${funcName}() {
      ${type} coords = getOutputCoords();
      ${coordsSnippet}
      return get${texFuncSnippet}(${unpackedCoordsSnippet});
    }
  `;
}
function getCoordsDataType(rank) {
  if (rank <= 1) {
    return "int";
  } else if (rank === 2) {
    return "ivec2";
  } else if (rank === 3) {
    return "ivec3";
  } else if (rank === 4) {
    return "ivec4";
  } else if (rank === 5) {
    return "ivec5";
  } else if (rank === 6) {
    return "ivec6";
  } else {
    throw Error(`GPU for rank ${rank} is not yet supported`);
  }
}
function getUniformInfoFromShape(isPacked, shape, texShape) {
  const {
    newShape,
    keptDims
  } = util_exports.squeezeShape(shape);
  const rank = shape.length;
  const useSqueezePackedShape = isPacked && rank === 3 && shape[0] === 1;
  const squeezeShape = useSqueezePackedShape ? shape.slice(1) : newShape;
  const useSqueezeShape = !isPacked && rank > 1 && !util_exports.arraysEqual(shape, texShape) && newShape.length < rank || useSqueezePackedShape;
  const uniformShape = useSqueezeShape ? squeezeShape : shape;
  return {
    useSqueezeShape,
    uniformShape,
    keptDims
  };
}
function squeezeInputInfo(inInfo, squeezedShape) {
  const newInputInfo = JSON.parse(JSON.stringify(inInfo));
  newInputInfo.shapeInfo.logicalShape = squeezedShape;
  return newInputInfo;
}
function getSqueezedParams(params, keptDims) {
  return keptDims.map((d) => params[d]).join(", ");
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_math.js
function compileProgram(gpgpu, program, inputs, output) {
  const inputInfos = inputs.map((input, i) => {
    const shapeInfo = {
      logicalShape: input.shape,
      texShape: input.isUniform ? null : input.texData.texShape,
      isUniform: input.isUniform,
      isPacked: input.isUniform ? false : input.texData.isPacked,
      flatOffset: null
    };
    if (input.texData != null && input.texData.slice != null && input.texData.slice.flatOffset > 0) {
      shapeInfo.flatOffset = input.texData.slice.flatOffset;
    }
    return {
      name: program.variableNames[i],
      shapeInfo
    };
  });
  const inShapeInfos = inputInfos.map((x) => x.shapeInfo);
  const outShapeInfo = {
    logicalShape: output.shape,
    texShape: output.texData.texShape,
    isUniform: false,
    isPacked: output.texData.isPacked,
    flatOffset: null
  };
  const source = makeShader(inputInfos, outShapeInfo, program);
  const fragmentShader = createFragmentShader(gpgpu.gl, source);
  const webGLProgram = gpgpu.createProgram(fragmentShader);
  if (!env().get("ENGINE_COMPILE_ONLY")) {
    gpgpu.buildVao(webGLProgram);
    return Object.assign({
      program,
      fragmentShader,
      source,
      webGLProgram,
      inShapeInfos,
      outShapeInfo
    }, getUniformLocations(gpgpu, program, webGLProgram));
  } else {
    return {
      program,
      fragmentShader,
      source,
      webGLProgram,
      inShapeInfos,
      outShapeInfo,
      variablesLocations: null,
      customUniformLocations: null,
      infLoc: null,
      nanLoc: null,
      outShapeLocation: null,
      outShapeStridesLocation: null,
      outTexShapeLocation: null
    };
  }
}
function getUniformLocations(gpgpu, program, webGLProgram) {
  const variablesLocations = [];
  const customUniformLocations = [];
  let outShapeLocation;
  let outTexShapeLocation;
  let outShapeStridesLocation;
  let infLoc = null;
  let nanLoc = null;
  nanLoc = gpgpu.getUniformLocation(webGLProgram, "NAN", false);
  if (env().getNumber("WEBGL_VERSION") === 1) {
    infLoc = gpgpu.getUniformLocation(webGLProgram, "INFINITY", false);
  }
  const shouldThrow = false;
  for (const varName of program.variableNames) {
    const varLocs = {
      name: varName,
      uniform: gpgpu.getUniformLocation(webGLProgram, varName, shouldThrow),
      offset: gpgpu.getUniformLocation(webGLProgram, `offset${varName}`, shouldThrow)
    };
    if (program.enableShapeUniforms) {
      varLocs.shape = gpgpu.getUniformLocation(webGLProgram, `${varName}Shape`, shouldThrow);
      varLocs.texShape = gpgpu.getUniformLocation(webGLProgram, `${varName}TexShape`, shouldThrow);
    }
    variablesLocations.push(varLocs);
  }
  if (program.enableShapeUniforms) {
    outShapeLocation = gpgpu.getUniformLocation(webGLProgram, "outShape", shouldThrow);
    outShapeStridesLocation = gpgpu.getUniformLocation(webGLProgram, "outShapeStrides", shouldThrow);
    outTexShapeLocation = gpgpu.getUniformLocation(webGLProgram, "outTexShape", shouldThrow);
  }
  if (program.customUniforms) {
    for (const d of program.customUniforms) {
      customUniformLocations.push(gpgpu.getUniformLocation(webGLProgram, d.name, shouldThrow));
    }
  }
  return {
    variablesLocations,
    customUniformLocations,
    infLoc,
    nanLoc,
    outShapeLocation,
    outShapeStridesLocation,
    outTexShapeLocation
  };
}
function validateBinaryAndProgram(shapeInfos, inputs) {
  if (shapeInfos.length !== inputs.length) {
    throw Error(`Binary was compiled with ${shapeInfos.length} inputs, but was executed with ${inputs.length} inputs`);
  }
  shapeInfos.forEach((s, i) => {
    const shapeA = s.logicalShape;
    const input = inputs[i];
    const shapeB = input.shape;
    if (!util_exports.arraysEqual(shapeA, shapeB)) {
      throw Error(`Binary was compiled with different shapes than the current args. Shapes ${shapeA} and ${shapeB} must match`);
    }
    if (s.isUniform && input.isUniform) {
      return;
    }
    const texShapeA = s.texShape;
    const texShapeB = input.isUniform ? null : input.texData.texShape;
    if (!util_exports.arraysEqual(texShapeA, texShapeB)) {
      throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${texShapeA} and ${texShapeB} must match`);
    }
  });
}
function runProgram(gpgpu, binary, inputs, output, customUniformValues) {
  if (!binary.program.enableShapeUniforms) {
    validateBinaryAndProgram(binary.inShapeInfos, inputs);
    validateBinaryAndProgram([binary.outShapeInfo], [output]);
  }
  const outTex = output.texData.texture;
  const outTexShape = output.texData.texShape;
  if (output.texData.isPacked) {
    gpgpu.setOutputPackedMatrixTexture(outTex.texture, outTexShape[0], outTexShape[1]);
  } else {
    gpgpu.setOutputMatrixTexture(outTex.texture, outTexShape[0], outTexShape[1]);
  }
  gpgpu.setProgram(binary.webGLProgram);
  gpgpu.bindVertexArray(binary.webGLProgram.vao);
  if (env().getNumber("WEBGL_VERSION") === 1) {
    if (binary.infLoc !== null) {
      gpgpu.gl.uniform1f(binary.infLoc, Infinity);
    }
  }
  if (binary.nanLoc !== null) {
    gpgpu.gl.uniform1f(binary.nanLoc, NaN);
  }
  for (let i = 0; i < inputs.length; ++i) {
    const input = inputs[i];
    const {
      uniform: varLoc,
      offset: varOffsetLoc,
      shape: varShapeLoc,
      texShape: varTexShapeLoc
    } = binary.variablesLocations[i];
    if (varShapeLoc) {
      const {
        uniformShape
      } = getUniformInfoFromShape(binary.program.packedInputs, input.shape, input.texData.texShape);
      switch (uniformShape.length) {
        case 1:
          gpgpu.gl.uniform1iv(varShapeLoc, new Int32Array(uniformShape));
          break;
        case 2:
          gpgpu.gl.uniform2iv(varShapeLoc, new Int32Array(uniformShape));
          break;
        case 3:
          gpgpu.gl.uniform3iv(varShapeLoc, new Int32Array(uniformShape));
          break;
        case 4:
          gpgpu.gl.uniform4iv(varShapeLoc, new Int32Array(uniformShape));
          break;
        default:
          break;
      }
    }
    if (varTexShapeLoc) {
      gpgpu.gl.uniform2i(varTexShapeLoc, input.texData.texShape[0], input.texData.texShape[1]);
    }
    if (varLoc == null) {
      continue;
    }
    if (input.isUniform) {
      if (util_exports.sizeFromShape(input.shape) < 2) {
        gpgpu.gl.uniform1f(varLoc, input.uniformValues[0]);
      } else {
        let vals = input.uniformValues;
        if (!(vals instanceof Float32Array)) {
          vals = new Float32Array(vals);
        }
        gpgpu.gl.uniform1fv(varLoc, vals);
      }
      continue;
    }
    if (input.texData.slice != null && varOffsetLoc != null) {
      gpgpu.gl.uniform1i(varOffsetLoc, input.texData.slice.flatOffset);
    }
    gpgpu.setInputMatrixTexture(input.texData.texture.texture, varLoc, i);
  }
  const outShapeLoc = binary.outShapeLocation;
  if (outShapeLoc) {
    switch (output.shape.length) {
      case 1:
        gpgpu.gl.uniform1iv(outShapeLoc, new Int32Array(output.shape));
        break;
      case 2:
        gpgpu.gl.uniform2iv(outShapeLoc, new Int32Array(output.shape));
        break;
      case 3:
        gpgpu.gl.uniform3iv(outShapeLoc, new Int32Array(output.shape));
        break;
      case 4:
        gpgpu.gl.uniform4iv(outShapeLoc, new Int32Array(output.shape));
        break;
      default:
        break;
    }
  }
  if (binary.outShapeStridesLocation) {
    const strides = util_exports.computeStrides(output.shape);
    switch (output.shape.length) {
      case 2:
        gpgpu.gl.uniform1iv(binary.outShapeStridesLocation, new Int32Array(strides));
        break;
      case 3:
        gpgpu.gl.uniform2iv(binary.outShapeStridesLocation, new Int32Array(strides));
        break;
      case 4:
        gpgpu.gl.uniform3iv(binary.outShapeStridesLocation, new Int32Array(strides));
        break;
      default:
        break;
    }
  }
  if (binary.outTexShapeLocation) {
    gpgpu.gl.uniform2i(binary.outTexShapeLocation, output.texData.texShape[0], output.texData.texShape[1]);
  }
  if (binary.program.customUniforms && customUniformValues) {
    for (let i = 0; i < binary.program.customUniforms.length; ++i) {
      const d = binary.program.customUniforms[i];
      const customLoc = binary.customUniformLocations[i];
      const customValue = customUniformValues[i];
      if (d.type === "float") {
        gpgpu.gl.uniform1fv(customLoc, customValue);
      } else if (d.type === "vec2") {
        gpgpu.gl.uniform2fv(customLoc, customValue);
      } else if (d.type === "vec3") {
        gpgpu.gl.uniform3fv(customLoc, customValue);
      } else if (d.type === "vec4") {
        gpgpu.gl.uniform4fv(customLoc, customValue);
      } else if (d.type === "int") {
        gpgpu.gl.uniform1iv(customLoc, customValue);
      } else if (d.type === "ivec2") {
        gpgpu.gl.uniform2iv(customLoc, customValue);
      } else if (d.type === "ivec3") {
        gpgpu.gl.uniform3iv(customLoc, customValue);
      } else if (d.type === "ivec4") {
        gpgpu.gl.uniform4iv(customLoc, customValue);
      } else {
        throw Error(`uniform type ${d.type} is not supported yet.`);
      }
    }
  }
  gpgpu.executeProgram();
}
function makeShaderKey(program, inputs, output) {
  let keyInputs = "";
  inputs.concat(output).forEach((x) => {
    const hasOffset = x.texData != null && x.texData.slice != null && x.texData.slice.flatOffset > 0;
    if (program.enableShapeUniforms && !x.isUniform) {
      const xTexShape = x.texData.texShape;
      const {
        useSqueezeShape,
        uniformShape,
        keptDims
      } = getUniformInfoFromShape(program.packedInputs, x.shape, xTexShape);
      let rank1 = "", rank2 = "", rank34 = "";
      if (uniformShape.length === 1 && program.packedInputs) {
        const packedTexShape = [Math.ceil(xTexShape[0] / 2), Math.ceil(xTexShape[1] / 2)];
        rank1 = `${packedTexShape[0] > 1}_${packedTexShape[1] > 1}`;
      } else if (uniformShape.length === 2 && !program.packedInputs) {
        rank2 = `${uniformShape[0] > 1}_${uniformShape[1] > 1}`;
      } else if (uniformShape.length > 2 && !program.packedInputs) {
        const strides = util_exports.computeStrides(uniformShape);
        rank34 = `${strides[0] === xTexShape[1]}_${strides[strides.length - 1] === xTexShape[1]}`;
      }
      const xRank = x.shape.length;
      const isLogicalShapTexShapeEqual = uniformShape.length === 2 && util_exports.arraysEqual(x.shape, xTexShape);
      const isScalar = util_exports.sizeFromShape(x.shape) === 1;
      const broadcastDims = backend_util_exports.getBroadcastDims(x.shape, output.shape);
      const isInOutTexShapeEqual = !program.packedInputs && xRank === output.shape.length && util_exports.arraysEqual(xTexShape, output.texData.texShape);
      const isTexShapeGreaterThanOne = program.packedInputs || uniformShape.length > 2 ? "" : `${xTexShape[0] > 1}_${xTexShape[1] > 1}`;
      keyInputs += `${xRank}_${isInOutTexShapeEqual}_${useSqueezeShape ? keptDims : ""}_${uniformShape.length}_${isScalar}_${broadcastDims}_${isLogicalShapTexShapeEqual}_${rank1}_${rank2}_${rank34}_${isTexShapeGreaterThanOne}_${hasOffset}`;
    } else {
      const texShape = x.isUniform ? "uniform" : x.texData.texShape;
      keyInputs += `${x.shape}_${texShape}_${hasOffset}`;
    }
  });
  const keyUserCode = program.userCode;
  let key = program.constructor.name;
  key += "_" + keyInputs + "_" + keyUserCode + `${env().getNumber("WEBGL_VERSION")}`;
  return key;
}
function useShapeUniforms(rank) {
  return env().getBool("WEBGL_USE_SHAPES_UNIFORMS") && rank <= 4;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/decode_matrix_gpu.js
var DecodeMatrixProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = false;
    this.packedOutput = true;
    this.outPackingScheme = PackingScheme.DENSE;
    this.customUniforms = [{
      name: "texShape",
      type: "ivec2"
    }];
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms ? getOutputLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d"], outputShape) : getLogicalCoordinatesFromFlatIndex(["r", "c", "d"], outputShape)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${glsl.output} = result;
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/decode_matrix_packed_gpu.js
var DecodeMatrixPackedProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outPackingScheme = PackingScheme.DENSE;
    this.customUniforms = [{
      name: "texShape",
      type: "ivec2"
    }];
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms ? getOutputLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d"], outputShape) : getLogicalCoordinatesFromFlatIndex(["r", "c", "d"], outputShape)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${glsl.output} = result;
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_float_gpu.js
var EncodeFloatProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.outTexUsage = TextureUsage.DOWNLOAD;
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.userCode = `
      ${ENCODE_FLOAT_SNIPPET}

      void main() {
        float x = getAAtOutCoords();
        ${glsl.output} = encode_float(x);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_float_packed_gpu.js
var EncodeFloatPackedProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = false;
    this.outTexUsage = TextureUsage.DOWNLOAD;
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.userCode = `
      ${ENCODE_FLOAT_SNIPPET}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${glsl.output} = encode_float(x);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_matrix_gpu.js
var CHANNEL_CHAR_TO_INDEX_MAP = {
  "R": 0,
  "G": 1,
  "B": 2,
  "A": 3
};
var EncodeMatrixProgram = class {
  constructor(outputShape, inputIsUnsignedByte = false, usedChannels = "RGBA") {
    this.variableNames = ["A"];
    this.customUniforms = [{
      name: "texShape",
      type: "ivec2"
    }];
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    let output = `result`;
    if (inputIsUnsignedByte) {
      output = `floor(result * 255. + 0.5)`;
    }
    let mainLoop = "";
    for (let usedChannelIndex = 0; usedChannelIndex < usedChannels.length; usedChannelIndex++) {
      const curChannel = usedChannels[usedChannelIndex];
      mainLoop += `
          if(offset == ${usedChannelIndex}) {
            result = values[${CHANNEL_CHAR_TO_INDEX_MAP[curChannel]}];
          }`;
    }
    this.userCode = `
      ${this.enableShapeUniforms ? getFlatIndexFrom3DOutput() : getFlatIndexFrom3D(outputShape)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${usedChannels.length});

        flatIndex = idiv(flatIndex, ${usedChannels.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${glsl.texture2D}(A, uv);
          ${mainLoop}
        }
        ${glsl.output} = vec4(${output}, 0., 0., 0.);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/encode_matrix_packed_gpu.js
var EncodeMatrixPackedProgram = class {
  constructor(outputShape, inputIsUnsignedByte = false) {
    this.variableNames = ["A"];
    this.packedInputs = false;
    this.packedOutput = true;
    this.customUniforms = [{
      name: "texShape",
      type: "ivec2"
    }];
    const glsl = getGlslDifferences();
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    let mainLoop = "";
    let output = "result";
    if (inputIsUnsignedByte) {
      output = "floor(result * 255. + 0.5)";
    }
    for (let row = 0; row <= 1; row++) {
      for (let col = 0; col <= 1; col++) {
        const channel = row * 2 + col;
        mainLoop += `
          localCoords = coords;
          if(localCoords[2] + ${col} < ${this.enableShapeUniforms ? "outShape[2]" : `${outputShape[2]}`}) {
          localCoords[2] += ${col};
          if (localCoords[1] + ${row} < ${this.enableShapeUniforms ? "outShape[1]" : `${outputShape[1]}`}) {
            localCoords[1] += ${row};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${glsl.texture2D}(A, uv);

            if (offset == 0) {
              result[${channel}] = values[0];
            } else if (offset == 1) {
              result[${channel}] = values[1];
            } else if (offset == 2) {
              result[${channel}] = values[2];
            } else {
              result[${channel}] = values[3];
            }
          }
        }
        `;
      }
    }
    this.userCode = `
        ${this.enableShapeUniforms ? getFlatIndexFrom3DOutput() : getFlatIndexFrom3D(outputShape)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${mainLoop}

          ${glsl.output} = ${output};
        }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js
var gpgpu_util_exports = {};
__export(gpgpu_util_exports, {
  bindVertexProgramAttributeStreams: () => bindVertexProgramAttributeStreams,
  createBufferFromOutputTexture: () => createBufferFromOutputTexture,
  createFloat16MatrixTexture: () => createFloat16MatrixTexture,
  createFloat16PackedMatrixTexture: () => createFloat16PackedMatrixTexture,
  createFloat32MatrixTexture: () => createFloat32MatrixTexture,
  createIndexBuffer: () => createIndexBuffer,
  createPackedMatrixTexture: () => createPackedMatrixTexture,
  createUnsignedBytesMatrixTexture: () => createUnsignedBytesMatrixTexture,
  createVertexBuffer: () => createVertexBuffer,
  createVertexShader: () => createVertexShader2,
  downloadByteEncodedFloatMatrixFromOutputTexture: () => downloadByteEncodedFloatMatrixFromOutputTexture,
  downloadFloat32MatrixFromBuffer: () => downloadFloat32MatrixFromBuffer,
  downloadMatrixFromPackedOutputTexture: () => downloadMatrixFromPackedOutputTexture,
  downloadPackedMatrixFromBuffer: () => downloadPackedMatrixFromBuffer,
  getInternalFormatForFloat16MatrixTexture: () => getInternalFormatForFloat16MatrixTexture,
  getInternalFormatForFloat16PackedMatrixTexture: () => getInternalFormatForFloat16PackedMatrixTexture,
  getInternalFormatForFloat32MatrixTexture: () => getInternalFormatForFloat32MatrixTexture,
  getInternalFormatForPackedMatrixTexture: () => getInternalFormatForPackedMatrixTexture,
  getInternalFormatForUnsignedBytesMatrixTexture: () => getInternalFormatForUnsignedBytesMatrixTexture,
  uploadDenseMatrixToTexture: () => uploadDenseMatrixToTexture,
  uploadPixelDataToTexture: () => uploadPixelDataToTexture
});
function createVertexShader2(gl) {
  const glsl = getGlslDifferences();
  const vertexShaderSource = `${glsl.version}
    precision highp float;
    ${glsl.attribute} vec3 clipSpacePos;
    ${glsl.attribute} vec2 uv;
    ${glsl.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;
  return createVertexShader(gl, vertexShaderSource);
}
function createVertexBuffer(gl) {
  const vertexArray = new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]);
  return createStaticVertexBuffer(gl, vertexArray);
}
function createIndexBuffer(gl) {
  const triangleVertexIndices = new Uint16Array([0, 1, 2, 2, 1, 3]);
  return createStaticIndexBuffer(gl, triangleVertexIndices);
}
function createAndConfigureTexture(gl, width, height, internalFormat, textureFormat, textureType) {
  validateTextureSize(width, height);
  const texture = createTexture(gl);
  const tex2d = gl.TEXTURE_2D;
  callAndCheck(gl, () => gl.bindTexture(tex2d, texture));
  callAndCheck(gl, () => gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE));
  callAndCheck(gl, () => gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE));
  callAndCheck(gl, () => gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST));
  callAndCheck(gl, () => gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST));
  if (env().getNumber("WEBGL_VERSION") === 1) {
    callAndCheck(gl, () => gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, textureFormat, textureType, null));
  } else {
    callAndCheck(gl, () => gl.texStorage2D(tex2d, 1, internalFormat, width, height));
  }
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
  return {
    texture,
    texShape: [height, width]
  };
}
function getInternalFormatForFloat32MatrixTexture(textureConfig) {
  return textureConfig.internalFormatFloat;
}
function createFloat32MatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getUnpackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat32MatrixTexture(textureConfig), textureConfig.textureFormatFloat, gl.FLOAT);
}
function getInternalFormatForFloat16MatrixTexture(textureConfig) {
  return textureConfig.internalFormatHalfFloat;
}
function createFloat16MatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getUnpackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat16MatrixTexture(textureConfig), textureConfig.textureFormatFloat, textureConfig.textureTypeHalfFloat);
}
function getInternalFormatForUnsignedBytesMatrixTexture(textureConfig) {
  return textureConfig.downloadTextureFormat;
}
function createUnsignedBytesMatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getUnpackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForUnsignedBytesMatrixTexture(textureConfig), gl.RGBA, gl.UNSIGNED_BYTE);
}
function getInternalFormatForPackedMatrixTexture(textureConfig) {
  return textureConfig.internalFormatPackedFloat;
}
function createPackedMatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForPackedMatrixTexture(textureConfig), gl.RGBA, gl.FLOAT);
}
function getInternalFormatForFloat16PackedMatrixTexture(textureConfig) {
  return textureConfig.internalFormatPackedHalfFloat;
}
function createFloat16PackedMatrixTexture(gl, rows, columns, textureConfig) {
  const [width, height] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
  return createAndConfigureTexture(gl, width, height, getInternalFormatForFloat16PackedMatrixTexture(textureConfig), gl.RGBA, textureConfig.textureTypeHalfFloat);
}
function bindVertexProgramAttributeStreams(gl, program, vertexBuffer) {
  const posOffset = 0;
  const uvOffset = 3 * 4;
  const stride = 3 * 4 + 2 * 4;
  callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer));
  const success = bindVertexBufferToProgramAttribute(gl, program, "clipSpacePos", vertexBuffer, 3, stride, posOffset);
  return success && bindVertexBufferToProgramAttribute(gl, program, "uv", vertexBuffer, 2, stride, uvOffset);
}
function uploadDenseMatrixToTexture(gl, texture, width, height, data, textureConfig) {
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
  let dataForUpload, texelDataType, internalFormat;
  if (data instanceof Uint8Array) {
    dataForUpload = new Uint8Array(width * height * 4);
    texelDataType = gl.UNSIGNED_BYTE;
    internalFormat = gl.RGBA;
  } else {
    dataForUpload = new Float32Array(width * height * 4);
    texelDataType = gl.FLOAT;
    internalFormat = textureConfig.internalFormatPackedFloat;
  }
  dataForUpload.set(data);
  if (env().getNumber("WEBGL_VERSION") === 2) {
    callAndCheck(gl, () => gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, gl.RGBA, texelDataType, dataForUpload));
  } else {
    callAndCheck(gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, gl.RGBA, texelDataType, dataForUpload));
  }
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function uploadPixelDataToTexture(gl, texture, pixels) {
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, texture));
  if (pixels.data instanceof Uint8Array) {
    if (env().getNumber("WEBGL_VERSION") === 2) {
      callAndCheck(gl, () => gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, pixels.width, pixels.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels.data));
    } else {
      callAndCheck(gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pixels.width, pixels.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels.data));
    }
  } else {
    if (env().getNumber("WEBGL_VERSION") === 2) {
      callAndCheck(gl, () => gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels));
    } else {
      callAndCheck(gl, () => gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pixels));
    }
  }
  callAndCheck(gl, () => gl.bindTexture(gl.TEXTURE_2D, null));
}
function createBufferFromOutputTexture(gl2, rows, columns, textureConfig) {
  const buffer2 = gl2.createBuffer();
  callAndCheck(gl2, () => gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer2));
  const bytesPerFloat = 4;
  const valuesPerTexel = 4;
  const bufferSizeBytes = bytesPerFloat * valuesPerTexel * rows * columns;
  callAndCheck(gl2, () => gl2.bufferData(gl2.PIXEL_PACK_BUFFER, bufferSizeBytes, gl2.STREAM_READ));
  callAndCheck(gl2, () => gl2.readPixels(0, 0, columns, rows, gl2.RGBA, gl2.FLOAT, 0));
  callAndCheck(gl2, () => gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null));
  return buffer2;
}
function downloadFloat32MatrixFromBuffer(gl, buffer2, size) {
  const gl2 = gl;
  const downloadTarget = new Float32Array(size);
  gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer2);
  gl2.getBufferSubData(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget);
  gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
  return downloadTarget;
}
function downloadByteEncodedFloatMatrixFromOutputTexture(gl, rows, columns, textureConfig) {
  const [w, h] = getUnpackedMatrixTextureShapeWidthHeight(rows, columns);
  const numChannels = 4;
  const downloadTarget = new Uint8Array(getUnpackedArraySizeFromMatrixSize(rows * columns, numChannels));
  callAndCheck(gl, () => gl.readPixels(0, 0, w, h, textureConfig.downloadTextureFormat, gl.UNSIGNED_BYTE, downloadTarget));
  return new Float32Array(downloadTarget.buffer);
}
function downloadPackedMatrixFromBuffer(gl, buffer2, batch, rows, cols, physicalRows, physicalCols, textureConfig) {
  const gl2 = gl;
  const downloadTarget = new Float32Array(getPackedRGBAArraySizeFromMatrixShape(physicalRows, physicalCols));
  gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer2);
  gl2.getBufferSubData(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget);
  gl2.bindBuffer(gl2.PIXEL_PACK_BUFFER, null);
  return downloadTarget;
}
function downloadMatrixFromPackedOutputTexture(gl, physicalRows, physicalCols) {
  const packedRGBA = new Float32Array(physicalRows * physicalCols * 4);
  callAndCheck(gl, () => gl.readPixels(0, 0, physicalCols, physicalRows, gl.RGBA, gl.FLOAT, packedRGBA));
  return packedRGBA;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js
var GPGPUContext = class {
  constructor(gl) {
    this.outputTexture = null;
    this.program = null;
    this.disposed = false;
    this.itemsToPoll = [];
    const glVersion = env().getNumber("WEBGL_VERSION");
    if (gl != null) {
      this.gl = gl;
      setWebGLContext(glVersion, gl);
    } else {
      this.gl = getWebGLContext(glVersion);
    }
    gl = this.gl;
    if (env().getNumber("WEBGL_VERSION") === 2) {
      const gl2 = gl;
      this.createVertexArray = () => {
        return callAndCheck(gl2, () => gl2.createVertexArray());
      };
      this.bindVertexArray = (vao) => {
        return callAndCheck(gl2, () => gl2.bindVertexArray(vao));
      };
      this.deleteVertexArray = (vao) => {
        return callAndCheck(gl2, () => gl2.deleteVertexArray(vao));
      };
      this.getVertexArray = () => {
        return callAndCheck(gl2, () => gl2.getParameter(gl2.VERTEX_ARRAY_BINDING));
      };
    } else if (gl != null) {
      const ext = gl.getExtension("OES_vertex_array_object");
      if (ext == null) {
        throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");
      }
      this.createVertexArray = () => {
        return callAndCheck(gl, () => ext.createVertexArrayOES());
      };
      this.bindVertexArray = (vao) => {
        return callAndCheck(gl, () => ext.bindVertexArrayOES(vao));
      };
      this.deleteVertexArray = (vao) => {
        return callAndCheck(gl, () => ext.deleteVertexArrayOES(vao));
      };
      this.getVertexArray = () => {
        return callAndCheck(gl, () => gl.getParameter(ext.VERTEX_ARRAY_BINDING_OES));
      };
    }
    let COLOR_BUFFER_FLOAT = "WEBGL_color_buffer_float";
    const COLOR_BUFFER_HALF_FLOAT = "EXT_color_buffer_half_float";
    this.parallelCompilationExtension = this.gl.getExtension("KHR_parallel_shader_compile");
    if (env().getNumber("WEBGL_VERSION") === 1) {
      const TEXTURE_FLOAT = "OES_texture_float";
      const TEXTURE_HALF_FLOAT = "OES_texture_half_float";
      this.textureFloatExtension = getExtensionOrThrow(this.gl, TEXTURE_FLOAT);
      if (hasExtension(this.gl, TEXTURE_HALF_FLOAT)) {
        this.textureHalfFloatExtension = getExtensionOrThrow(this.gl, TEXTURE_HALF_FLOAT);
      } else if (env().get("WEBGL_FORCE_F16_TEXTURES")) {
        throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
      }
      this.colorBufferFloatExtension = this.gl.getExtension(COLOR_BUFFER_FLOAT);
      if (hasExtension(this.gl, COLOR_BUFFER_HALF_FLOAT)) {
        this.colorBufferHalfFloatExtension = getExtensionOrThrow(this.gl, COLOR_BUFFER_HALF_FLOAT);
      } else if (env().get("WEBGL_FORCE_F16_TEXTURES")) {
        throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
      }
    } else {
      COLOR_BUFFER_FLOAT = "EXT_color_buffer_float";
      if (hasExtension(this.gl, COLOR_BUFFER_FLOAT)) {
        this.colorBufferFloatExtension = this.gl.getExtension(COLOR_BUFFER_FLOAT);
      } else if (hasExtension(this.gl, COLOR_BUFFER_HALF_FLOAT)) {
        this.colorBufferHalfFloatExtension = this.gl.getExtension(COLOR_BUFFER_HALF_FLOAT);
      } else {
        throw new Error("GL context does not support color renderable floats");
      }
    }
    this.vertexBuffer = createVertexBuffer(this.gl);
    this.indexBuffer = createIndexBuffer(this.gl);
    this.framebuffer = createFramebuffer(this.gl);
    this.textureConfig = getTextureConfig(this.gl, this.textureHalfFloatExtension);
  }
  get debug() {
    return env().getBool("DEBUG");
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    if (this.program != null) {
      console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.");
    }
    if (this.outputTexture != null) {
      console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
    }
    const gl = this.gl;
    callAndCheck(gl, () => gl.finish());
    callAndCheck(gl, () => gl.bindFramebuffer(gl.FRAMEBUFFER, null));
    callAndCheck(gl, () => gl.deleteFramebuffer(this.framebuffer));
    callAndCheck(gl, () => gl.bindBuffer(gl.ARRAY_BUFFER, null));
    callAndCheck(gl, () => gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null));
    callAndCheck(gl, () => gl.deleteBuffer(this.indexBuffer));
    this.disposed = true;
  }
  createFloat32MatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createFloat32MatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  createFloat16MatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createFloat16MatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  createUnsignedBytesMatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createUnsignedBytesMatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  uploadPixelDataToTexture(texture, pixels) {
    this.throwIfDisposed();
    uploadPixelDataToTexture(this.gl, texture, pixels);
  }
  uploadDenseMatrixToTexture(texture, width, height, data) {
    this.throwIfDisposed();
    uploadDenseMatrixToTexture(this.gl, texture, width, height, data, this.textureConfig);
  }
  createFloat16PackedMatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createFloat16PackedMatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  createPackedMatrixTexture(rows, columns) {
    this.throwIfDisposed();
    return createPackedMatrixTexture(this.gl, rows, columns, this.textureConfig);
  }
  deleteMatrixTexture(texture) {
    this.throwIfDisposed();
    if (this.outputTexture === texture) {
      unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
      this.outputTexture = null;
    }
    callAndCheck(this.gl, () => this.gl.deleteTexture(texture));
  }
  downloadByteEncodedFloatMatrixFromOutputTexture(texture, rows, columns) {
    return this.downloadMatrixDriver(texture, () => downloadByteEncodedFloatMatrixFromOutputTexture(this.gl, rows, columns, this.textureConfig));
  }
  downloadPackedMatrixFromBuffer(buffer2, batch, rows, columns, physicalRows, physicalCols) {
    return downloadPackedMatrixFromBuffer(this.gl, buffer2, batch, rows, columns, physicalRows, physicalCols, this.textureConfig);
  }
  downloadFloat32MatrixFromBuffer(buffer2, size) {
    return downloadFloat32MatrixFromBuffer(this.gl, buffer2, size);
  }
  createBufferFromTexture(texture, rows, columns) {
    this.bindTextureToFrameBuffer(texture);
    const result = createBufferFromOutputTexture(this.gl, rows, columns, this.textureConfig);
    this.unbindTextureToFrameBuffer();
    return result;
  }
  createAndWaitForFence() {
    const fenceContext = this.createFence(this.gl);
    return this.pollFence(fenceContext);
  }
  createFence(gl) {
    let query;
    let isFencePassed;
    if (env().getBool("WEBGL_FENCE_API_ENABLED")) {
      const gl2 = gl;
      const sync = gl2.fenceSync(gl2.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      isFencePassed = () => {
        const status = gl2.clientWaitSync(sync, 0, 0);
        return status === gl2.ALREADY_SIGNALED || status === gl2.CONDITION_SATISFIED;
      };
      query = sync;
    } else if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0) {
      query = this.beginQuery();
      this.endQuery();
      isFencePassed = () => this.isQueryAvailable(query, env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
    } else {
      isFencePassed = () => true;
    }
    return {
      query,
      isFencePassed
    };
  }
  downloadMatrixFromPackedTexture(texture, physicalRows, physicalCols) {
    return this.downloadMatrixDriver(texture, () => downloadMatrixFromPackedOutputTexture(this.gl, physicalRows, physicalCols));
  }
  createProgram(fragmentShader) {
    this.throwIfDisposed();
    const gl = this.gl;
    if (this.vertexShader == null) {
      this.vertexShader = createVertexShader2(gl);
    }
    const program = createProgram(gl);
    callAndCheck(gl, () => gl.attachShader(program, this.vertexShader));
    callAndCheck(gl, () => gl.attachShader(program, fragmentShader));
    linkProgram(gl, program);
    const program2 = Object.assign(program, {
      vao: this.createVertexArray()
    });
    if (this.debug) {
      validateProgram(gl, program2);
    }
    return program2;
  }
  buildVao(program) {
    this.setProgram(program);
    this.bindVertexArray(program.vao);
    const gl = this.gl;
    callAndCheck(gl, () => gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer));
    bindVertexProgramAttributeStreams(gl, program, this.vertexBuffer);
  }
  deleteProgram(program) {
    this.throwIfDisposed();
    if (program === this.program) {
      this.program = null;
    }
    if (program != null) {
      callAndCheck(this.gl, () => this.gl.deleteProgram(program));
      this.deleteVertexArray(program.vao);
    }
  }
  setProgram(program) {
    this.throwIfDisposed();
    this.program = program;
    if (this.program != null) {
      if (this.debug) {
        validateProgram(this.gl, this.program);
      }
    }
    callAndCheck(this.gl, () => this.gl.useProgram(program));
  }
  getUniformLocation(program, uniformName, shouldThrow = true) {
    this.throwIfDisposed();
    if (shouldThrow) {
      return getProgramUniformLocationOrThrow(this.gl, program, uniformName);
    } else {
      return getProgramUniformLocation(this.gl, program, uniformName);
    }
  }
  getAttributeLocation(program, attribute) {
    this.throwIfDisposed();
    return callAndCheck(this.gl, () => this.gl.getAttribLocation(program, attribute));
  }
  getUniformLocationNoThrow(program, uniformName) {
    this.throwIfDisposed();
    return this.gl.getUniformLocation(program, uniformName);
  }
  setInputMatrixTexture(inputMatrixTexture, uniformLocation, textureUnit) {
    this.throwIfDisposed();
    this.throwIfNoProgram();
    bindTextureToProgramUniformSampler(this.gl, inputMatrixTexture, uniformLocation, textureUnit);
  }
  setOutputMatrixTexture(outputMatrixTexture, rows, columns) {
    this.setOutputMatrixTextureDriver(outputMatrixTexture, columns, rows);
  }
  setOutputPackedMatrixTexture(outputPackedMatrixTexture, rows, columns) {
    this.throwIfDisposed();
    const [width, height] = getPackedMatrixTextureShapeWidthHeight(rows, columns);
    this.setOutputMatrixTextureDriver(outputPackedMatrixTexture, width, height);
  }
  setOutputMatrixWriteRegion(startRow, numRows, startColumn, numColumns) {
    this.setOutputMatrixWriteRegionDriver(startColumn, startRow, numColumns, numRows);
  }
  setOutputPackedMatrixWriteRegion(startRow, numRows, startColumn, numColumns) {
    throw new Error("setOutputPackedMatrixWriteRegion not implemented.");
  }
  debugValidate() {
    if (this.program != null) {
      validateProgram(this.gl, this.program);
    }
    validateFramebuffer(this.gl);
  }
  executeProgram() {
    this.throwIfDisposed();
    this.throwIfNoProgram();
    const gl = this.gl;
    if (this.debug) {
      const boundVao = this.getVertexArray();
      console.assert(boundVao === this.program.vao, "VAO changed between setProgram and executeProgram!");
      this.debugValidate();
    }
    callAndCheck(gl, () => gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0));
  }
  blockUntilAllProgramsCompleted() {
    this.throwIfDisposed();
    callAndCheck(this.gl, () => this.gl.finish());
  }
  getQueryTimerExtension() {
    if (this.disjointQueryTimerExtension == null) {
      this.disjointQueryTimerExtension = getExtensionOrThrow(this.gl, env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") === 2 ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query");
    }
    return this.disjointQueryTimerExtension;
  }
  getQueryTimerExtensionWebGL2() {
    return this.getQueryTimerExtension();
  }
  getQueryTimerExtensionWebGL1() {
    return this.getQueryTimerExtension();
  }
  beginQuery() {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") === 2) {
      const gl2 = this.gl;
      const ext2 = this.getQueryTimerExtensionWebGL2();
      const query2 = gl2.createQuery();
      gl2.beginQuery(ext2.TIME_ELAPSED_EXT, query2);
      return query2;
    }
    const ext = this.getQueryTimerExtensionWebGL1();
    const query = ext.createQueryEXT();
    ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
    return query;
  }
  endQuery() {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") === 2) {
      const gl2 = this.gl;
      const ext2 = this.getQueryTimerExtensionWebGL2();
      gl2.endQuery(ext2.TIME_ELAPSED_EXT);
      return;
    }
    const ext = this.getQueryTimerExtensionWebGL1();
    ext.endQueryEXT(ext.TIME_ELAPSED_EXT);
  }
  waitForQueryAndGetTime(query) {
    return __async(this, null, function* () {
      yield util_exports.repeatedTry(() => this.disposed || // while testing contexts are created / disposed
      // in rapid succession, so without this check we
      // may poll for the query timer indefinitely
      this.isQueryAvailable(query, env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")));
      return this.getQueryTime(query, env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"));
    });
  }
  getQueryTime(query, queryTimerVersion) {
    if (queryTimerVersion === 0) {
      return null;
    }
    if (queryTimerVersion === 2) {
      const gl2 = this.gl;
      const timeElapsedNanos = gl2.getQueryParameter(query, gl2.QUERY_RESULT);
      return timeElapsedNanos / 1e6;
    } else {
      const ext = this.getQueryTimerExtensionWebGL1();
      const timeElapsedNanos = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
      return timeElapsedNanos / 1e6;
    }
  }
  isQueryAvailable(query, queryTimerVersion) {
    if (queryTimerVersion === 0) {
      return true;
    }
    if (queryTimerVersion === 2) {
      const gl2 = this.gl;
      const ext = this.getQueryTimerExtensionWebGL2();
      const available = gl2.getQueryParameter(query, gl2.QUERY_RESULT_AVAILABLE);
      if (this.disjoint == null) {
        this.disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
      }
      return available && !this.disjoint;
    } else {
      const ext = this.getQueryTimerExtensionWebGL1();
      const available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
      if (this.disjoint == null) {
        this.disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
      }
      return available && !this.disjoint;
    }
  }
  pollFence(fenceContext) {
    return new Promise((resolve) => {
      this.addItemToPoll(() => fenceContext.isFencePassed(), () => resolve());
    });
  }
  pollItems() {
    const index = linearSearchLastTrue(this.itemsToPoll.map((x) => x.isDoneFn));
    for (let i = 0; i <= index; ++i) {
      const {
        resolveFn
      } = this.itemsToPoll[i];
      resolveFn();
    }
    this.itemsToPoll = this.itemsToPoll.slice(index + 1);
  }
  addItemToPoll(isDoneFn, resolveFn) {
    this.itemsToPoll.push({
      isDoneFn,
      resolveFn
    });
    if (this.itemsToPoll.length > 1) {
      return;
    }
    let scheduleFn = void 0;
    if ("setTimeoutCustom" in env().platform) {
      scheduleFn = env().platform.setTimeoutCustom.bind(env().platform);
    }
    util_exports.repeatedTry(() => {
      this.pollItems();
      return this.itemsToPoll.length === 0;
    }, () => 0, null, scheduleFn);
  }
  bindTextureToFrameBuffer(texture) {
    this.throwIfDisposed();
    bindColorTextureToFramebuffer(this.gl, texture, this.framebuffer);
    if (this.debug) {
      validateFramebuffer(this.gl);
    }
  }
  unbindTextureToFrameBuffer() {
    if (this.outputTexture != null) {
      bindColorTextureToFramebuffer(this.gl, this.outputTexture, this.framebuffer);
      if (this.debug) {
        validateFramebuffer(this.gl);
      }
    } else {
      unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
    }
  }
  downloadMatrixDriver(texture, downloadAndDecode) {
    this.bindTextureToFrameBuffer(texture);
    const result = downloadAndDecode();
    this.unbindTextureToFrameBuffer();
    return result;
  }
  setOutputMatrixTextureDriver(outputMatrixTextureMaybePacked, width, height) {
    this.throwIfDisposed();
    const gl = this.gl;
    bindColorTextureToFramebuffer(gl, outputMatrixTextureMaybePacked, this.framebuffer);
    if (this.debug) {
      validateFramebuffer(gl);
    }
    this.outputTexture = outputMatrixTextureMaybePacked;
    callAndCheck(gl, () => gl.viewport(0, 0, width, height));
    callAndCheck(gl, () => gl.scissor(0, 0, width, height));
  }
  setOutputMatrixWriteRegionDriver(x, y, width, height) {
    this.throwIfDisposed();
    callAndCheck(this.gl, () => this.gl.scissor(x, y, width, height));
  }
  throwIfDisposed() {
    if (this.disposed) {
      throw new Error("Attempted to use disposed GPGPUContext.");
    }
  }
  throwIfNoProgram() {
    if (this.program == null) {
      throw new Error("No GPU program is currently set.");
    }
  }
};
function linearSearchLastTrue(arr) {
  let i = 0;
  for (; i < arr.length; ++i) {
    const isDone = arr[i]();
    if (!isDone) {
      break;
    }
  }
  return i - 1;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js
var shared_exports = {};
__export(shared_exports, {
  addImpl: () => addImpl,
  bincountImpl: () => bincountImpl,
  bincountReduceImpl: () => bincountReduceImpl,
  bitwiseAndImpl: () => bitwiseAndImpl,
  castImpl: () => castImpl,
  ceilImpl: () => ceilImpl,
  concatImpl: () => concatImpl,
  equalImpl: () => equalImpl,
  expImpl: () => expImpl,
  expm1Impl: () => expm1Impl,
  floorDivImpl: () => floorDivImpl,
  floorImpl: () => floorImpl,
  gatherNdImpl: () => gatherNdImpl,
  gatherV2Impl: () => gatherV2Impl,
  greaterEqualImpl: () => greaterEqualImpl,
  greaterImpl: () => greaterImpl,
  lessEqualImpl: () => lessEqualImpl,
  lessImpl: () => lessImpl,
  linSpaceImpl: () => linSpaceImpl,
  logImpl: () => logImpl,
  maxImpl: () => maxImpl,
  maximumImpl: () => maximumImpl,
  minimumImpl: () => minimumImpl,
  multiplyImpl: () => multiplyImpl,
  negImpl: () => negImpl,
  notEqualImpl: () => notEqualImpl,
  prodImpl: () => prodImpl,
  raggedGatherImpl: () => raggedGatherImpl,
  raggedRangeImpl: () => raggedRangeImpl,
  raggedTensorToTensorImpl: () => raggedTensorToTensorImpl,
  rangeImpl: () => rangeImpl,
  rsqrtImpl: () => rsqrtImpl,
  scatterImpl: () => scatterImpl,
  sigmoidImpl: () => sigmoidImpl,
  simpleAbsImpl: () => simpleAbsImpl,
  sliceImpl: () => sliceImpl,
  sparseFillEmptyRowsImpl: () => sparseFillEmptyRowsImpl,
  sparseReshapeImpl: () => sparseReshapeImpl,
  sparseSegmentReductionImpl: () => sparseSegmentReductionImpl,
  sqrtImpl: () => sqrtImpl,
  squaredDifferenceImpl: () => squaredDifferenceImpl,
  staticRegexReplaceImpl: () => staticRegexReplaceImpl,
  stridedSliceImpl: () => stridedSliceImpl,
  stringNGramsImpl: () => stringNGramsImpl,
  stringSplitImpl: () => stringSplitImpl,
  stringToHashBucketFastImpl: () => stringToHashBucketFastImpl,
  subImpl: () => subImpl,
  tileImpl: () => tileImpl,
  topKImpl: () => topKImpl,
  transposeImpl: () => transposeImpl,
  uniqueImpl: () => uniqueImpl
});

// node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js
function assertNotComplex2(tensor, opName) {
  if (!Array.isArray(tensor)) {
    tensor = [tensor];
  }
  tensor.forEach((t) => {
    if (t != null) {
      util_exports.assert(t.dtype !== "complex64", () => `${opName} does not support complex64 tensors in the CPU backend.`);
    }
  });
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js
function simpleAbsImpl(vals) {
  const resultValues = new Float32Array(vals.length);
  for (let i = 0; i < vals.length; ++i) {
    resultValues[i] = Math.abs(vals[i]);
  }
  return resultValues;
}
var abs = (args) => {
  const {
    x
  } = args.inputs;
  const cpuBackend = args.backend;
  assertNotComplex2(x, "abs");
  let resultValues = new Float32Array(util_exports.sizeFromShape(x.shape));
  const values = cpuBackend.data.get(x.dataId).values;
  resultValues = simpleAbsImpl(values);
  return cpuBackend.makeOutput(resultValues, x.shape, x.dtype);
};
var absConfig = {
  kernelName: Abs,
  backendName: "cpu",
  kernelFunc: abs
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js
function createSimpleBinaryKernelImpl(op) {
  return (aShape, bShape, aVals, bVals, dtype) => {
    const newShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    const resultRank = newShape.length;
    const resultStrides = util_exports.computeStrides(newShape);
    const resultSize = util_exports.sizeFromShape(newShape);
    const result = util_exports.getTypedArrayFromDType(dtype, resultSize);
    const aRank = aShape.length;
    const bRank = bShape.length;
    const aStrides = util_exports.computeStrides(aShape);
    const bStrides = util_exports.computeStrides(bShape);
    const aBroadcastDims = backend_util_exports.getBroadcastDims(aShape, newShape);
    const bBroadcastDims = backend_util_exports.getBroadcastDims(bShape, newShape);
    if (aBroadcastDims.length + bBroadcastDims.length === 0) {
      for (let i = 0; i < result.length; ++i) {
        result[i] = op(aVals[i % aVals.length], bVals[i % bVals.length]);
      }
    } else {
      for (let i = 0; i < result.length; ++i) {
        const loc = util_exports.indexToLoc(i, resultRank, resultStrides);
        const aLoc = loc.slice(-aRank);
        aBroadcastDims.forEach((d) => aLoc[d] = 0);
        const aIndex = util_exports.locToIndex(aLoc, aRank, aStrides);
        const bLoc = loc.slice(-bRank);
        bBroadcastDims.forEach((d) => bLoc[d] = 0);
        const bIndex = util_exports.locToIndex(bLoc, bRank, bStrides);
        result[i] = op(aVals[aIndex], bVals[bIndex]);
      }
    }
    return [result, newShape];
  };
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js
function complex(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    real: real3,
    imag: imag2
  } = inputs;
  const realVals = backend.data.get(real3.dataId).values;
  const imagVals = backend.data.get(imag2.dataId).values;
  const complexInfo = backend.makeTensorInfo(real3.shape, "complex64");
  const complex3 = backend.data.get(complexInfo.dataId);
  complex3.complexTensorInfos = {
    real: backend.makeTensorInfo(real3.shape, "float32", realVals),
    imag: backend.makeTensorInfo(imag2.shape, "float32", imagVals)
  };
  return complexInfo;
}
var complexConfig = {
  kernelName: Complex,
  backendName: "cpu",
  kernelFunc: complex
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/zeros_impl.js
function zeros2(backend, shape, dtype = "float32") {
  if (dtype === "complex64") {
    const real3 = zeros2(backend, shape, "float32");
    const imag2 = zeros2(backend, shape, "float32");
    return complex({
      inputs: {
        real: real3,
        imag: imag2
      },
      backend
    });
  }
  const values = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(shape), dtype);
  return backend.makeTensorInfo(shape, dtype, values);
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js
function identity(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  backend.incRef(x.dataId);
  return {
    dataId: x.dataId,
    shape: x.shape,
    dtype: x.dtype
  };
}
var identityConfig = {
  kernelName: Identity,
  backendName: "cpu",
  kernelFunc: identity
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js
function real(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    input
  } = inputs;
  const real3 = backend.data.get(input.dataId).complexTensorInfos.real;
  const realVal = backend.data.get(real3.dataId).values;
  return backend.makeTensorInfo(real3.shape, real3.dtype, realVal);
}
var realConfig = {
  kernelName: Real,
  backendName: "cpu",
  kernelFunc: real
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js
function castImpl(values, shape, inputType, dtype) {
  if (dtype === "int32") {
    const resultValues = Int32Array.from(values);
    return [shape, "int32", resultValues];
  }
  if (dtype === "bool") {
    const zero = util_exports.toTypedArray([0], inputType);
    const [resultData, resultShape] = createSimpleBinaryKernelImpl((a, b) => a !== b ? 1 : 0)(shape, [], values, zero, "bool");
    return [resultShape, "bool", resultData];
  }
  throw new Error(`Error in Cast: failed to cast ${inputType} to ${dtype}`);
}
function cast(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    dtype
  } = attrs;
  if (dtype === "complex64") {
    if (x.dtype === "complex64") {
      return identity({
        inputs: {
          x
        },
        backend
      });
    }
    const zerosTensorInfo = zeros2(backend, x.shape, x.dtype);
    const floatX = cast({
      inputs: {
        x
      },
      backend,
      attrs: {
        dtype: "float32"
      }
    });
    const result = complex({
      inputs: {
        real: floatX,
        imag: zerosTensorInfo
      },
      backend
    });
    backend.disposeIntermediateTensorInfo(zerosTensorInfo);
    backend.disposeIntermediateTensorInfo(floatX);
    return result;
  }
  if (x.dtype === "complex64") {
    const realPart = real({
      inputs: {
        input: x
      },
      backend
    });
    const result = cast({
      inputs: {
        x: realPart
      },
      backend,
      attrs: {
        dtype
      }
    });
    backend.disposeIntermediateTensorInfo(realPart);
    return result;
  }
  if (!util_exports.hasEncodingLoss(x.dtype, dtype)) {
    const result = identity({
      inputs: {
        x
      },
      backend
    });
    return {
      dataId: result.dataId,
      shape: result.shape,
      dtype
    };
  }
  const values = backend.data.get(x.dataId).values;
  const [resultShape, resultType, resultData] = castImpl(values, x.shape, x.dtype, dtype);
  return backend.makeTensorInfo(resultShape, resultType, resultData);
}
var castConfig = {
  kernelName: Cast,
  backendName: "cpu",
  kernelFunc: cast
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_utils.js
function binaryKernelFunc(name, simpleImpl, complexImpl, dtype) {
  if (complexImpl == null) {
    return ({
      inputs,
      backend
    }) => {
      const {
        a,
        b
      } = inputs;
      const cpuBackend = backend;
      assertNotComplex2([a, b], name);
      const aVals = cpuBackend.data.get(a.dataId).values;
      const bVals = cpuBackend.data.get(b.dataId).values;
      const decodedAVals = a.dtype === "string" ? (
        // tslint:disable-next-line: no-any
        backend_util_exports.fromUint8ToStringArray(aVals)
      ) : aVals;
      const decodedBVals = a.dtype === "string" ? (
        // tslint:disable-next-line: no-any
        backend_util_exports.fromUint8ToStringArray(bVals)
      ) : bVals;
      const $dtype = dtype || a.dtype;
      const [resultData, resultShape] = simpleImpl(a.shape, b.shape, decodedAVals, decodedBVals, $dtype);
      return cpuBackend.makeTensorInfo(resultShape, $dtype, resultData);
    };
  }
  return ({
    inputs,
    backend
  }) => {
    const {
      a,
      b
    } = inputs;
    const cpuBackend = backend;
    if (a.dtype === "complex64" || b.dtype === "complex64") {
      const $aComplex = cast({
        inputs: {
          x: a
        },
        backend: cpuBackend,
        attrs: {
          dtype: "complex64"
        }
      });
      const $aComplexVals = cpuBackend.data.get($aComplex.dataId);
      const aReal = $aComplexVals.complexTensorInfos.real;
      const aImag = $aComplexVals.complexTensorInfos.imag;
      const aRealVals = cpuBackend.data.get(aReal.dataId).values;
      const aImagVals = cpuBackend.data.get(aImag.dataId).values;
      const $bComplex = cast({
        inputs: {
          x: b
        },
        backend: cpuBackend,
        attrs: {
          dtype: "complex64"
        }
      });
      const $bComplexVals = cpuBackend.data.get($bComplex.dataId);
      const bReal = $bComplexVals.complexTensorInfos.real;
      const bImag = $bComplexVals.complexTensorInfos.imag;
      const bRealVals = cpuBackend.data.get(bReal.dataId).values;
      const bImagVals = cpuBackend.data.get(bImag.dataId).values;
      const [resultRealData, resultImagData, resultShape] = complexImpl(a.shape, b.shape, aRealVals, aImagVals, bRealVals, bImagVals);
      const resultReal = cpuBackend.makeTensorInfo(resultShape, "float32", resultRealData);
      const resultImag = cpuBackend.makeTensorInfo(resultShape, "float32", resultImagData);
      const result = complex({
        inputs: {
          real: resultReal,
          imag: resultImag
        },
        backend: cpuBackend
      });
      cpuBackend.disposeIntermediateTensorInfo($aComplex);
      cpuBackend.disposeIntermediateTensorInfo($bComplex);
      cpuBackend.disposeIntermediateTensorInfo(resultReal);
      cpuBackend.disposeIntermediateTensorInfo(resultImag);
      return result;
    } else {
      const aVals = cpuBackend.data.get(a.dataId).values;
      const bVals = cpuBackend.data.get(b.dataId).values;
      const $dtype = dtype || a.dtype;
      const [resultData, resultShape] = simpleImpl(a.shape, b.shape, aVals, bVals, $dtype);
      return cpuBackend.makeTensorInfo(resultShape, $dtype, resultData);
    }
  };
}
function createComplexBinaryKernelImpl(op) {
  return (aShape, bShape, aRealVals, aImagVals, bRealVals, bImagVals) => {
    const resultShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    const resultSize = util_exports.sizeFromShape(resultShape);
    const resultRank = resultShape.length;
    const resultStrides = util_exports.computeStrides(resultShape);
    const resultRealVals = util_exports.getTypedArrayFromDType("float32", resultSize);
    const resultImagVals = util_exports.getTypedArrayFromDType("float32", resultSize);
    const aBroadcastDims = backend_util_exports.getBroadcastDims(aShape, resultShape);
    const bBroadcastDims = backend_util_exports.getBroadcastDims(bShape, resultShape);
    const aVals = backend_util_exports.mergeRealAndImagArrays(aRealVals, aImagVals);
    const bVals = backend_util_exports.mergeRealAndImagArrays(bRealVals, bImagVals);
    const aRank = aShape.length;
    const aStrides = util_exports.computeStrides(aShape);
    const bRank = bShape.length;
    const bStrides = util_exports.computeStrides(bShape);
    if (aBroadcastDims.length + bBroadcastDims.length === 0) {
      for (let i = 0; i < resultRealVals.length; i++) {
        const aIdx = i % aVals.length;
        const bIdx = i % bVals.length;
        const result = op(aVals[aIdx * 2], aVals[aIdx * 2 + 1], bVals[bIdx * 2], bVals[bIdx * 2 + 1]);
        resultRealVals[i] = result.real;
        resultImagVals[i] = result.imag;
      }
    } else {
      for (let i = 0; i < resultRealVals.length; i++) {
        const loc = util_exports.indexToLoc(i, resultRank, resultStrides);
        const aLoc = loc.slice(-aRank);
        aBroadcastDims.forEach((d) => aLoc[d] = 0);
        const aIndex = util_exports.locToIndex(aLoc, aRank, aStrides);
        const bLoc = loc.slice(-bRank);
        bBroadcastDims.forEach((d) => bLoc[d] = 0);
        const bIndex = util_exports.locToIndex(bLoc, bRank, bStrides);
        const opResult = op(aVals[aIndex * 2], aVals[aIndex * 2 + 1], bVals[bIndex * 2], bVals[bIndex * 2 + 1]);
        resultRealVals[i] = opResult.real;
        resultImagVals[i] = opResult.imag;
      }
    }
    return [resultRealVals, resultImagVals, resultShape];
  };
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js
var addImpl = createSimpleBinaryKernelImpl((a, b) => a + b);
var addComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return {
    real: aReal + bReal,
    imag: aImag + bImag
  };
});
var add = binaryKernelFunc(Add, addImpl, addComplexImpl);
var addConfig = {
  kernelName: Add,
  backendName: "cpu",
  kernelFunc: add
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount_impl.js
function bincountImpl(xVals, weightsVals, weightsDtype, weightsShape, size) {
  const weightsSize = util_exports.sizeFromShape(weightsShape);
  const outVals = util_exports.makeZerosTypedArray(size, weightsDtype);
  for (let i = 0; i < xVals.length; i++) {
    const value = xVals[i];
    if (value < 0) {
      throw new Error("Input x must be non-negative!");
    }
    if (value >= size) {
      continue;
    }
    if (weightsSize > 0) {
      outVals[value] += weightsVals[i];
    } else {
      outVals[value] += 1;
    }
  }
  return outVals;
}
function bincountReduceImpl(xBuf, weightsBuf, size, binaryOutput = false) {
  const numRows = xBuf.shape[0];
  const numCols = xBuf.shape[1];
  const outBuf = buffer([numRows, size], weightsBuf.dtype);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const value = xBuf.get(i, j);
      if (value < 0) {
        throw new Error("Input x must be non-negative!");
      }
      if (value >= size) {
        continue;
      }
      if (binaryOutput) {
        outBuf.set(1, i, value);
      } else {
        if (weightsBuf.size > 0) {
          outBuf.set(outBuf.get(i, value) + weightsBuf.get(i, j), i, value);
        } else {
          outBuf.set(outBuf.get(i, value) + 1, i, value);
        }
      }
    }
  }
  return outBuf;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/BitwiseAnd.js
var bitwiseAndImpl = createSimpleBinaryKernelImpl((a, b) => a & b);
var bitwiseAnd = binaryKernelFunc(BitwiseAnd, bitwiseAndImpl);
var bitwiseAndConfig = {
  kernelName: BitwiseAnd,
  backendName: "cpu",
  kernelFunc: bitwiseAnd
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js
function createSimpleUnaryImpl(op) {
  return (values, dtype, attrs) => {
    const newValues = util_exports.getArrayFromDType(dtype, values.length);
    for (let i = 0; i < values.length; ++i) {
      newValues[i] = op(values[i], attrs);
    }
    return newValues;
  };
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js
function unaryKernelFunc(name, op, dtype) {
  const impl = createSimpleUnaryImpl(op);
  return unaryKernelFuncFromImpl(name, impl, dtype);
}
function unaryKernelFuncFromImpl(name, unaryImpl, dtype) {
  return ({
    inputs,
    attrs,
    backend
  }) => {
    const {
      x
    } = inputs;
    assertNotComplex2(x, name);
    const cpuBackend = backend;
    const values = cpuBackend.data.get(x.dataId).values;
    let decoded;
    if (x.dtype === "string") {
      if (!Array.isArray(values)) {
        throw new Error("String tensor's value was not an instance of Array");
      }
      decoded = backend_util_exports.fromUint8ToStringArray(values);
    } else {
      decoded = values;
    }
    const $dtype = dtype || x.dtype;
    const newValues = unaryImpl(decoded, $dtype, attrs);
    return cpuBackend.makeTensorInfo(x.shape, $dtype, newValues);
  };
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js
var ceilImpl = createSimpleUnaryImpl((xi) => Math.ceil(xi));
var ceil = unaryKernelFuncFromImpl(Ceil, ceilImpl);
var ceilConfig = {
  kernelName: Ceil,
  backendName: "cpu",
  kernelFunc: ceil
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Concat_impl.js
function concatImpl(inputs, outShape, dtype, simplyConcat) {
  const outVals = util_exports.getArrayFromDType(dtype, util_exports.sizeFromShape(outShape));
  if (simplyConcat && dtype !== "string") {
    let offset = 0;
    inputs.forEach((input) => {
      const size = util_exports.sizeFromShape(input.shape);
      outVals.set(input.vals, offset);
      offset += size;
    });
  } else {
    let colOffset = 0;
    inputs.forEach((input) => {
      const decodedData = dtype === "string" ? backend_util_exports.fromUint8ToStringArray(input.vals) : input.vals;
      let tIdx = 0;
      for (let row = 0; row < input.shape[0]; ++row) {
        const resIdx = row * outShape[1] + colOffset;
        for (let col = 0; col < input.shape[1]; ++col) {
          outVals[resIdx + col] = decodedData[tIdx++];
        }
      }
      colOffset += input.shape[1];
    });
  }
  return outVals;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Equal.js
var equalImpl = createSimpleBinaryKernelImpl((a, b) => a === b ? 1 : 0);
var equal = binaryKernelFunc(Equal, equalImpl, null, "bool");
var equalConfig = {
  kernelName: Equal,
  backendName: "cpu",
  kernelFunc: equal
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js
var expImpl = createSimpleUnaryImpl((xi) => Math.exp(xi));
var exp = unaryKernelFuncFromImpl(Exp, expImpl, "float32");
var expConfig = {
  kernelName: Exp,
  backendName: "cpu",
  kernelFunc: exp
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js
var expm1Impl = createSimpleUnaryImpl((xi) => Math.expm1(xi));
var expm1 = unaryKernelFuncFromImpl(Expm1, expm1Impl);
var expm1Config = {
  kernelName: Expm1,
  backendName: "cpu",
  kernelFunc: expm1
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js
var floorImpl = createSimpleUnaryImpl((xi) => Math.floor(xi));
var floor = unaryKernelFuncFromImpl(Floor, floorImpl);
var floorConfig = {
  kernelName: Floor,
  backendName: "cpu",
  kernelFunc: floor
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/FloorDiv.js
var floorDivImpl = createSimpleBinaryKernelImpl((a, b) => Math.floor(a / b));
var floorDiv = binaryKernelFunc(FloorDiv, floorDivImpl, null, "int32");
var floorDivConfig = {
  kernelName: FloorDiv,
  backendName: "cpu",
  kernelFunc: floorDiv
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd_Impl.js
function gatherNdImpl(indicesData, paramsBuf, dtype, numSlices, sliceRank, sliceSize, strides, paramsShape, paramsSize) {
  const outBuf = buffer([numSlices, sliceSize], dtype);
  for (let i = 0; i < numSlices; i++) {
    const index = [];
    let flattenIndex = 0;
    for (let j = 0; j < sliceRank; j++) {
      const dim = indicesData[i * sliceRank + j];
      flattenIndex += dim * strides[j];
      index.push(dim);
    }
    if (flattenIndex < 0 || flattenIndex >= paramsSize / sliceSize) {
      throw new Error(`Invalid indices: ${index} does not index into ${paramsShape}`);
    }
    for (let k = 0; k < sliceSize; k++) {
      outBuf.values[i * sliceSize + k] = paramsBuf.get(...paramsBuf.indexToLoc(flattenIndex * sliceSize + k));
    }
  }
  return outBuf;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2_impl.js
function gatherV2Impl(xBuf, indicesBuf, flattenOutputShape) {
  const outBuf = buffer(flattenOutputShape, xBuf.dtype);
  for (let i = 0; i < outBuf.size; ++i) {
    const newLoc = outBuf.indexToLoc(i);
    const originalLoc = newLoc.slice();
    const batchIdx = originalLoc[0];
    const indicesIdx = originalLoc[2];
    const indicesIndex = indicesBuf.locToIndex([batchIdx, indicesIdx]);
    originalLoc[2] = indicesBuf.values[indicesIndex];
    const originalIndex = xBuf.locToIndex(originalLoc);
    if (0 <= originalIndex && originalIndex < xBuf.values.length) {
      outBuf.values[i] = xBuf.values[originalIndex];
    }
  }
  return outBuf;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Greater.js
var greaterImpl = createSimpleBinaryKernelImpl((a, b) => a > b ? 1 : 0);
var greater = binaryKernelFunc(Greater, greaterImpl, null, "bool");
var greaterConfig = {
  kernelName: Greater,
  backendName: "cpu",
  kernelFunc: greater
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/GreaterEqual.js
var greaterEqualImpl = createSimpleBinaryKernelImpl((a, b) => a >= b ? 1 : 0);
var greaterEqual = binaryKernelFunc(GreaterEqual, greaterEqualImpl, null, "bool");
var greaterEqualConfig = {
  kernelName: GreaterEqual,
  backendName: "cpu",
  kernelFunc: greaterEqual
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Less.js
var lessImpl = createSimpleBinaryKernelImpl((a, b) => a < b ? 1 : 0);
var less = binaryKernelFunc(Less, lessImpl, null, "bool");
var lessConfig = {
  kernelName: Less,
  backendName: "cpu",
  kernelFunc: less
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/LessEqual.js
var lessEqualImpl = createSimpleBinaryKernelImpl((a, b) => a <= b ? 1 : 0);
var lessEqual = binaryKernelFunc(LessEqual, lessEqualImpl, null, "bool");
var lessEqualConfig = {
  kernelName: LessEqual,
  backendName: "cpu",
  kernelFunc: lessEqual
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace_impl.js
function linSpaceImpl(start, stop, num) {
  const step2 = (stop - start) / (num - 1);
  const values = util_exports.makeZerosTypedArray(num, "float32");
  values[0] = start;
  for (let i = 1; i < values.length; i++) {
    values[i] = values[i - 1] + step2;
  }
  return values;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js
var logImpl = createSimpleUnaryImpl((xi) => Math.log(xi));
var log = unaryKernelFuncFromImpl(Log, logImpl);
var logConfig = {
  kernelName: Log,
  backendName: "cpu",
  kernelFunc: log
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js
function maxImpl(aVals, reduceSize, outShape, dtype) {
  const vals = util_exports.getTypedArrayFromDType(dtype, util_exports.sizeFromShape(outShape));
  for (let i = 0; i < vals.length; ++i) {
    const offset = i * reduceSize;
    let max2 = aVals[offset];
    for (let j = 0; j < reduceSize; ++j) {
      const value = aVals[offset + j];
      if (Number.isNaN(value) || value > max2) {
        max2 = value;
      }
    }
    vals[i] = max2;
  }
  return vals;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Maximum.js
var maximumImpl = createSimpleBinaryKernelImpl((aValue, bValue) => Math.max(aValue, bValue));
var maximum = binaryKernelFunc(Maximum, maximumImpl);
var maximumConfig = {
  kernelName: Maximum,
  backendName: "cpu",
  kernelFunc: maximum
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Minimum.js
var minimumImpl = createSimpleBinaryKernelImpl((aValue, bValue) => Math.min(aValue, bValue));
var minimum = binaryKernelFunc(Minimum, minimumImpl);
var minimumConfig = {
  kernelName: Minimum,
  backendName: "cpu",
  kernelFunc: minimum
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js
var multiplyImpl = createSimpleBinaryKernelImpl((aValue, bValue) => aValue * bValue);
var multiplyComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return {
    real: aReal * bReal - aImag * bImag,
    imag: aReal * bImag + aImag * bReal
  };
});
var multiply = binaryKernelFunc(Multiply, multiplyImpl, multiplyComplexImpl);
var multiplyConfig = {
  kernelName: Multiply,
  backendName: "cpu",
  kernelFunc: multiply
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Neg.js
function negImpl(xVals, xShape, xDtype) {
  const minusOne = util_exports.createScalarValue(-1, xDtype);
  return multiplyImpl([], xShape, minusOne, xVals, xDtype);
}
function neg(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  assertNotComplex2(x, "neg");
  const xVals = backend.data.get(x.dataId).values;
  const [res, newShape] = negImpl(xVals, x.shape, x.dtype);
  return backend.makeTensorInfo(newShape, x.dtype, res);
}
var negConfig = {
  kernelName: Neg,
  backendName: "cpu",
  kernelFunc: neg
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js
var notEqualImpl = createSimpleBinaryKernelImpl((a, b) => a !== b ? 1 : 0);
var notEqual = binaryKernelFunc(NotEqual, notEqualImpl, null, "bool");
var notEqualConfig = {
  kernelName: NotEqual,
  backendName: "cpu",
  kernelFunc: notEqual
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js
function transposeImpl(xVals, xShape, dtype, perm, newShape) {
  const xRank = xShape.length;
  const xSize = util_exports.sizeFromShape(xShape);
  const xStrides = util_exports.computeStrides(xShape);
  const newStrides = util_exports.computeStrides(newShape);
  const result = util_exports.getTypedArrayFromDType(dtype, util_exports.sizeFromShape(newShape));
  for (let i = 0; i < xSize; ++i) {
    const loc = util_exports.indexToLoc(i, xRank, xStrides);
    const newLoc = new Array(loc.length);
    for (let i2 = 0; i2 < newLoc.length; i2++) {
      newLoc[i2] = loc[perm[i2]];
    }
    const newIndex = util_exports.locToIndex(newLoc, xRank, newStrides);
    result[newIndex] = xVals[i];
  }
  return result;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose.js
function transpose(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    x
  } = inputs;
  const {
    perm
  } = attrs;
  assertNotComplex2(x, "transpose");
  const xRank = x.shape.length;
  const newShape = new Array(xRank);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = x.shape[perm[i]];
  }
  const values = backend.data.get(x.dataId).values;
  const result = transposeImpl(values, x.shape, x.dtype, perm, newShape);
  const dataId = backend.write(result, newShape, x.dtype);
  return {
    dataId,
    shape: newShape,
    dtype: x.dtype
  };
}
var transposeConfig = {
  kernelName: Transpose,
  backendName: "cpu",
  kernelFunc: transpose
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Prod.js
function prodImpl(xShape, xDtype, xVals, reductionAxes) {
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(xShape, reductionAxes);
  const outDtype = upcastType(xDtype, "int32");
  const outVals = util_exports.makeZerosTypedArray(util_exports.sizeFromShape(outShape), outDtype);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  for (let i = 0; i < outVals.length; ++i) {
    const offset = i * reduceSize;
    let prod3 = 1;
    for (let j = 0; j < reduceSize; ++j) {
      prod3 *= xVals[offset + j];
    }
    outVals[i] = prod3;
  }
  return {
    outVals,
    outShape,
    outDtype
  };
}
function prod(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    keepDims
  } = attrs;
  assertNotComplex2(x, "prod");
  const xRank = x.shape.length;
  const axes = util_exports.parseAxisParam(axis, x.shape);
  const permutation = backend_util_exports.getAxesPermutation(axes, xRank);
  let reductionAxes = axes;
  let permutedX = x;
  const intermediateTensorInfos = [];
  if (permutation != null) {
    permutedX = transpose({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutation
      }
    });
    intermediateTensorInfos.push(permutedX);
    reductionAxes = backend_util_exports.getInnerMostAxes(reductionAxes.length, xRank);
  }
  const xVals = backend.data.get(permutedX.dataId).values;
  const {
    outVals,
    outShape,
    outDtype
  } = prodImpl(permutedX.shape, permutedX.dtype, xVals, reductionAxes);
  let resultShape = outShape;
  if (keepDims) {
    resultShape = backend_util_exports.expandShapeToKeepDim(outShape, axes);
  }
  intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return backend.makeTensorInfo(resultShape, outDtype, outVals);
}
var prodConfig = {
  kernelName: Prod,
  backendName: "cpu",
  kernelFunc: prod
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather_impl.js
function validateIndices(indices, indicesShape, numParams) {
  indices.forEach((index, i) => {
    if (index < 0 || index >= numParams) {
      const locString = util_exports.indexToLoc(i, indicesShape.length, util_exports.computeStrides(indicesShape)).join(",");
      throw new Error(`indices[${locString}] = ${index} is not in [0, ${numParams})`);
    }
  });
}
function validateSplits(paramsNestedSplits, numParamsDenseValues) {
  for (let dim = 0; dim < paramsNestedSplits.length; ++dim) {
    const splits = paramsNestedSplits[dim];
    const lastSplit = dim === paramsNestedSplits.length - 1 ? numParamsDenseValues : paramsNestedSplits[dim + 1].length;
    if (splits.length === 0) {
      throw new Error("Ragged splits may not be empty");
    }
    if (splits[0] < 0) {
      throw new Error("Ragged splits must be non-negative");
    }
    if (splits[splits.length - 1] > lastSplit) {
      throw new Error("Ragged splits must not point past values");
    }
    for (let i = 1; i < splits.length; ++i) {
      if (splits[i - 1] > splits[i]) {
        throw new Error("Ragged splits must be sorted in ascending order");
      }
    }
  }
}
function makeSplits(indices, indicesShape, paramsNestedSplits, numParamsDenseValues) {
  const valueSlices = [];
  let numValues = 0;
  const numSplits = indicesShape.length - 1 + paramsNestedSplits.length;
  const outSplits = new Array(numSplits).fill(null).map(() => [0]);
  validateSplits(paramsNestedSplits, numParamsDenseValues);
  let nrows = 1;
  for (let dim = 0; dim < indicesShape.length - 1; ++dim) {
    nrows *= indicesShape[dim];
    const rowLength = indicesShape[dim + 1];
    for (let i = 1; i < nrows + 1; ++i) {
      outSplits[dim].push(i * rowLength);
    }
  }
  for (let i = 0; i < indices.length; ++i) {
    let start = indices[i];
    let limit = indices[i] + 1;
    for (let dim = 0; dim < paramsNestedSplits.length; ++dim) {
      const splits = paramsNestedSplits[dim];
      const outDim = dim + indicesShape.length - 1;
      if (outDim >= 0) {
        const outSplitsOutDim = outSplits[outDim];
        const delta = outSplitsOutDim[outSplitsOutDim.length - 1] - splits[start];
        for (let j = start; j < limit; ++j) {
          outSplits[outDim].push(splits[j + 1] + delta);
        }
      }
      start = splits[start];
      limit = splits[limit];
    }
    if (limit !== start) {
      valueSlices.push([start, limit]);
      numValues += limit - start;
    }
  }
  return {
    outSplits,
    valueSlices,
    numValues
  };
}
function getSplits(outSplits) {
  const splitsOut = [];
  for (let i = 0; i < outSplits.length; ++i) {
    const numSplits = outSplits[i].length;
    const splits = util_exports.getArrayFromDType("int32", numSplits);
    splitsOut.push(splits);
    outSplits[i].forEach((value, j) => splits[j] = value);
  }
  return splitsOut;
}
function computeFlatOuterDims(orig, numOutDims) {
  const outDims = orig.slice(0, numOutDims);
  while (outDims.length < numOutDims) {
    outDims.push(1);
  }
  for (let inDim = numOutDims; inDim < orig.length; inDim++) {
    outDims[numOutDims - 1] *= orig[inDim];
  }
  return outDims;
}
function writeValueSlices(paramsDenseValues, paramsDenseValuesShape, valueSlices, valueSize, values, valuesShape) {
  const denseM = computeFlatOuterDims(paramsDenseValuesShape, 2)[1];
  const valuesM = computeFlatOuterDims(valuesShape, 2)[1];
  let outPos = 0;
  for (const slice3 of valueSlices) {
    for (let i = slice3[0]; i < slice3[1]; ++i) {
      for (let j = 0; j < valueSize; ++j) {
        values[outPos * valuesM + j] = paramsDenseValues[i * denseM + j];
      }
      ++outPos;
    }
  }
}
function getValues(paramsDenseValues, paramsDenseValuesShape, paramsDenseValuesDType, valueSlices, numValues) {
  const valuesShape = paramsDenseValuesShape.slice();
  valuesShape[0] = numValues;
  const valuesOut = util_exports.getArrayFromDType(paramsDenseValuesDType, util_exports.sizeFromShape(valuesShape));
  const numElements = paramsDenseValues.length;
  const valueSize = numElements === 0 ? 0 : numElements / paramsDenseValuesShape[0];
  writeValueSlices(paramsDenseValues, paramsDenseValuesShape, valueSlices, valueSize, valuesOut, valuesShape);
  return [valuesOut, valuesShape];
}
function raggedGatherImpl(paramsNestedSplits, paramsNestedSplitsShapes, paramsDenseValues, paramsDenseValuesShape, paramsDenseValuesDType, indices, indicesShape, outputRaggedRank) {
  if (paramsNestedSplits.length === 0) {
    throw new Error("paramsNestedSplits must be non empty");
  }
  if (paramsNestedSplitsShapes[0].length === 0) {
    throw new Error("Split tensors must not be scalars");
  }
  const numParams = paramsNestedSplitsShapes[0][0] - 1;
  validateIndices(indices, indicesShape, numParams);
  if (paramsDenseValuesShape.length === 0) {
    throw new Error("params.rank must be nonzero");
  }
  const numParamsDenseValues = paramsDenseValuesShape[0];
  const {
    outSplits,
    valueSlices,
    numValues
  } = makeSplits(indices, indicesShape, paramsNestedSplits, numParamsDenseValues);
  const outputNestedSplits = getSplits(outSplits);
  const outputDenseValues = getValues(paramsDenseValues, paramsDenseValuesShape, paramsDenseValuesDType, valueSlices, numValues);
  return [outputNestedSplits, outputDenseValues[0], outputDenseValues[1]];
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange_impl.js
var INT32_MAX = 2147483647;
function raggedRangeImpl(starts, startsShape, startsDType, limits, limitsShape, deltas, deltasShape) {
  if (startsShape.length > 1) {
    throw new Error("starts must be a scalar or vector");
  }
  if (limitsShape.length > 1) {
    throw new Error("limits must be a scalar or vector");
  }
  if (deltasShape.length > 1) {
    throw new Error("deltas must be a scalar or vector");
  }
  const broadcastStarts = startsShape.length === 0;
  const broadcastLimits = limitsShape.length === 0;
  const broadcastDeltas = deltasShape.length === 0;
  const inSizes = [];
  if (!broadcastStarts) {
    inSizes.push(startsShape[0]);
  }
  if (!broadcastLimits) {
    inSizes.push(limitsShape[0]);
  }
  if (!broadcastDeltas) {
    inSizes.push(deltasShape[0]);
  }
  for (let i = 1; i < inSizes.length; ++i) {
    if (inSizes[i] !== inSizes[i - 1]) {
      throw new Error("starts, limits, and deltas must have the same shape");
    }
  }
  const nRows = inSizes.length === 0 ? 1 : inSizes[0];
  const rtNestedSplits = util_exports.getArrayFromDType("int32", nRows + 1);
  rtNestedSplits[0] = 0;
  for (let row = 0; row < nRows; ++row) {
    const start = broadcastStarts ? starts[0] : starts[row];
    const limit = broadcastLimits ? limits[0] : limits[row];
    const delta = broadcastDeltas ? deltas[0] : deltas[row];
    if (delta === 0) {
      throw new Error("Requires delta != 0");
    }
    let size;
    if (delta > 0 && limit < start || delta < 0 && limit > start) {
      size = 0;
    } else {
      size = Math.ceil(Math.abs((limit - start) / delta));
      if (size > INT32_MAX) {
        throw new Error(`Requires ((limit - start) / delta) <= ${INT32_MAX}`);
      }
    }
    rtNestedSplits[row + 1] = rtNestedSplits[row] + size;
  }
  const nVals = rtNestedSplits[nRows];
  const rtDenseValues = util_exports.getArrayFromDType(startsDType, nVals);
  let valueIndex = 0;
  for (let row = 0; row < nRows; ++row) {
    const rowSize = rtNestedSplits[row + 1] - rtNestedSplits[row];
    let value = broadcastStarts ? starts[0] : starts[row];
    const delta = broadcastDeltas ? deltas[0] : deltas[row];
    for (let i = 0; i < rowSize; ++i) {
      rtDenseValues[valueIndex++] = value;
      value += delta;
    }
  }
  return [rtNestedSplits, rtDenseValues];
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor_impl.js
var RowPartitionType = backend_util_exports.RowPartitionType;
var RaggedTensorToTensorOp = class _RaggedTensorToTensorOp {
  constructor(shape, shapeShape, values, valuesShape, valuesDType, defaultValue, defaultValueShape, rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypeStrings) {
    this.shape = shape;
    this.shapeShape = shapeShape;
    this.values = values;
    this.valuesShape = valuesShape;
    this.valuesDType = valuesDType;
    this.defaultValue = defaultValue;
    this.defaultValueShape = defaultValueShape;
    this.rowPartitionValues = rowPartitionValues;
    this.rowPartitionValuesShapes = rowPartitionValuesShapes;
    this.rowPartitionTypes = backend_util_exports.getRowPartitionTypesHelper(rowPartitionTypeStrings);
    this.raggedRank = backend_util_exports.getRaggedRank(this.rowPartitionTypes);
  }
  getRowPartitionTypeByDimension(dimension) {
    if (this.rowPartitionTypes[0] === RowPartitionType.FIRST_DIM_SIZE) {
      return this.rowPartitionTypes[dimension + 1];
    } else {
      return this.rowPartitionTypes[dimension];
    }
  }
  // Returns the relationship between dimension and dimension + 1.
  getRowPartitionTensor(dimension) {
    if (this.rowPartitionTypes[0] === RowPartitionType.FIRST_DIM_SIZE) {
      return this.rowPartitionValues[dimension + 1];
    } else {
      return this.rowPartitionValues[dimension];
    }
  }
  getMaxWidth(dimension) {
    const rowPartitionTensor = this.getRowPartitionTensor(dimension - 1);
    switch (this.getRowPartitionTypeByDimension(dimension - 1)) {
      case RowPartitionType.VALUE_ROWIDS:
        return _RaggedTensorToTensorOp.getMaxWidthValueRowID(rowPartitionTensor);
      case RowPartitionType.ROW_SPLITS:
        return _RaggedTensorToTensorOp.getMaxWidthRowSplit(rowPartitionTensor);
      default:
        throw new Error(`Cannot handle partition type ${RowPartitionType[this.getRowPartitionTypeByDimension(dimension - 1)]}`);
    }
  }
  static getMaxWidthRowSplit(rowSplit) {
    const tensorLength = rowSplit.length;
    if (tensorLength === 0 || tensorLength === 1) {
      return 0;
    }
    let maxWidth = 0;
    for (let i = 0; i < tensorLength - 1; ++i) {
      const currentWidth = rowSplit[i + 1] - rowSplit[i];
      if (currentWidth > maxWidth) {
        maxWidth = currentWidth;
      }
    }
    return maxWidth;
  }
  static getMaxWidthValueRowID(valueRowIds) {
    const indexLength = valueRowIds.length;
    if (indexLength === 0) {
      return 0;
    }
    let firstEqualIndex = 0;
    let firstEqualIndexValue = valueRowIds[0];
    let maxWidth = 0;
    for (let i = 1; i < indexLength; ++i) {
      const value = valueRowIds[i];
      if (value !== firstEqualIndexValue) {
        firstEqualIndexValue = value;
        maxWidth = Math.max(i - firstEqualIndex, maxWidth);
        firstEqualIndex = i;
      }
    }
    return Math.max(indexLength - firstEqualIndex, maxWidth);
  }
  tensorShapeFromTensor(t, tShape, isPartial = true) {
    if (tShape.length === 0) {
      if (t[0] === -1) {
        return [];
      }
      throw new Error(`The only valid scalar shape tensor is the fully unknown shape specified as -1.`);
    }
    return makeShape(t, isPartial);
  }
  calculateOutputSize(firstDim) {
    const valueShape = this.valuesShape;
    const defaultValueShape = this.defaultValueShape;
    backend_util_exports.validateDefaultValueShape(defaultValueShape, valueShape);
    const shape = this.tensorShapeFromTensor(this.shape, this.shapeShape);
    const outputShape = backend_util_exports.combineRaggedTensorToTensorShapes(this.raggedRank, shape, valueShape);
    const result = outputShape;
    if (result[0] < 0) {
      result[0] = firstDim;
    }
    for (let i = 1; i <= this.raggedRank; ++i) {
      if (result[i] < 0) {
        result[i] = this.getMaxWidth(i);
      }
    }
    return result;
  }
  /**
   * The outputIndex represents the index in the output tensor
   * where the first element of a particular dimension would be written.
   * If it is -1, it indicates that the index is out of scope.
   * Example, given firstDimension = 10, firstDimensionOutput = 6,
   * and outputIndexMultiplier = 100:
   * result = [0 100 200 300 400 500 -1 -1 -1 -1]
   * If firstDimensionOutput = 11 instead, then:
   * result = [0 100 200 300 400 500 600 700 800 900]
   */
  calculateFirstParentOutputIndex(firstDimension, outputIndexMultiplier, firstDimensionOutput) {
    const minDimension = Math.min(firstDimension, firstDimensionOutput);
    const result = [];
    let currentOutputIndex = 0;
    for (let i = 0; i < minDimension; ++i, currentOutputIndex += outputIndexMultiplier) {
      result.push(currentOutputIndex);
    }
    for (let i = minDimension; i < firstDimension; ++i) {
      result.push(-1);
    }
    util_exports.assert(result.length === firstDimension, () => "Final length of result must be equal to firstDimension.");
    return result;
  }
  calculateOutputIndexRowSplit(rowSplit, parentOutputIndex, outputIndexMultiplier, outputSize) {
    const rowSplitSize = rowSplit.length;
    const result = [];
    for (let i = 0; i < rowSplitSize - 1; ++i) {
      const rowLength = rowSplit[i + 1] - rowSplit[i];
      let realLength = Math.min(outputSize, rowLength);
      let parentOutputIndexCurrent = parentOutputIndex[i];
      if (parentOutputIndexCurrent === -1) {
        realLength = 0;
      }
      for (let j = 0; j < realLength; ++j) {
        result.push(parentOutputIndexCurrent);
        parentOutputIndexCurrent += outputIndexMultiplier;
      }
      for (let j = 0; j < rowLength - realLength; ++j) {
        result.push(-1);
      }
    }
    if (rowSplitSize > 0 && result.length !== rowSplit[rowSplitSize - 1]) {
      throw new Error("Invalid row split size.");
    }
    return result;
  }
  // Calculate the output index of the first element of a list.
  // The parentOutputIndex is the same computation for the previous list.
  // -1 indicates an element or list that is out of range.
  // The outputIndexMultiplier is the number of output indices one moves
  // forward for each column.
  // E.g., given:
  // valueRowIds:[0 1 2 2 2 3 5 5 6]
  // parentOutputIndex:[1000 1100 2000 2100 -1 3000 4000]
  // outputIndexMultiplier: 10
  // outputSize: 2
  // You get:
  // result = [1000 1100 2000 2010 -1 2100 -1 -1 3000]
  // result[0] = parentOutputIndex[valueRowIds[0]]
  // result[1] = parentOutputIndex[valueRowIds[1]]
  // result[2] = parentOutputIndex[valueRowIds[2]]
  // result[3] = parentOutputIndex[valueRowIds[2] + 10]
  // result[4] = -1 because it is the third element the size is 2.
  // result[5] = parentOutputIndex[valueRowIds[3]]
  // result[6] = -1 because parentOutputIndex[valueRowIds[6]] == -1
  // result[7] = -1 because parentOutputIndex[valueRowIds[6]] == -1
  // result[8] = parentOutputIndex[valueRowIds[7]]
  calculateOutputIndexValueRowID(valueRowIds, parentOutputIndex, outputIndexMultiplier, outputSize) {
    const indexSize = valueRowIds.length;
    const result = [];
    if (indexSize === 0) {
      return [];
    }
    let currentOutputColumn = 0;
    let currentValueRowId = valueRowIds[0];
    if (currentValueRowId >= parentOutputIndex.length) {
      throw new Error(`Got currentValueRowId=${currentValueRowId}, which is not less than ${parentOutputIndex.length}`);
    }
    let currentOutputIndex = parentOutputIndex[currentValueRowId];
    result.push(currentOutputIndex);
    for (let i = 1; i < indexSize; ++i) {
      const nextValueRowId = valueRowIds[i];
      if (nextValueRowId === currentValueRowId) {
        if (currentOutputIndex >= 0) {
          ++currentOutputColumn;
          if (currentOutputColumn < outputSize) {
            currentOutputIndex += outputIndexMultiplier;
          } else {
            currentOutputIndex = -1;
          }
        }
      } else {
        currentOutputColumn = 0;
        currentValueRowId = nextValueRowId;
        if (nextValueRowId >= parentOutputIndex.length) {
          throw new Error(`Got nextValueRowId=${nextValueRowId} which is not less than ${parentOutputIndex.length}`);
        }
        currentOutputIndex = parentOutputIndex[nextValueRowId];
      }
      result.push(currentOutputIndex);
    }
    if (result.length !== valueRowIds.length) {
      throw new Error("Invalid row ids.");
    }
    return result;
  }
  calculateOutputIndex(dimension, parentOutputIndex, outputIndexMultiplier, outputSize) {
    const rowPartitionTensor = this.getRowPartitionTensor(dimension);
    const partitionType = this.getRowPartitionTypeByDimension(dimension);
    switch (partitionType) {
      case RowPartitionType.VALUE_ROWIDS:
        return this.calculateOutputIndexValueRowID(rowPartitionTensor, parentOutputIndex, outputIndexMultiplier, outputSize);
      case RowPartitionType.ROW_SPLITS:
        if (rowPartitionTensor.length - 1 > parentOutputIndex.length) {
          throw new Error(`Row partition size is greater than output size: ${rowPartitionTensor.length - 1} > ${parentOutputIndex.length}`);
        }
        return this.calculateOutputIndexRowSplit(rowPartitionTensor, parentOutputIndex, outputIndexMultiplier, outputSize);
      default:
        throw new Error(`Unsupported partition type: ${RowPartitionType[partitionType]}`);
    }
  }
  getFirstDimensionSize() {
    const firstPartitionTensor = this.rowPartitionValues[0];
    if (this.rowPartitionTypes.length === 0) {
      throw new Error("No row_partition_types given.");
    }
    const firstPartitionType = this.rowPartitionTypes[0];
    switch (firstPartitionType) {
      case RowPartitionType.FIRST_DIM_SIZE:
        return firstPartitionTensor[0];
      case RowPartitionType.VALUE_ROWIDS:
        throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");
      case RowPartitionType.ROW_SPLITS:
        return this.rowPartitionValuesShapes[0][0] - 1;
      default:
        throw new Error(`Cannot handle type ${RowPartitionType[firstPartitionType]}`);
    }
  }
  compute() {
    const firstPartitionTensor = this.rowPartitionValues[0];
    if (firstPartitionTensor.length <= 0) {
      throw new Error("Invalid first partition input. Tensor requires at least one element.");
    }
    const firstDimension = this.getFirstDimensionSize();
    const outputSize = this.calculateOutputSize(firstDimension);
    const multiplier = new Array(this.raggedRank + 1);
    multiplier[multiplier.length - 1] = 1;
    for (let i = multiplier.length - 2; i >= 0; --i) {
      multiplier[i] = multiplier[i + 1] * outputSize[i + 1];
    }
    const outputShape = makeShape(outputSize, false);
    const outputTensor = util_exports.getArrayFromDType(this.valuesDType, util_exports.sizeFromShape(outputShape));
    const fullSize = multiplier[0] * outputSize[0];
    if (fullSize > 0) {
      let outputIndex = this.calculateFirstParentOutputIndex(firstDimension, multiplier[0], outputSize[0]);
      for (let i = 1; i <= this.raggedRank; ++i) {
        const newOutputIndex = this.calculateOutputIndex(i - 1, outputIndex, multiplier[i], outputSize[i]);
        outputIndex = newOutputIndex;
      }
      this.setOutput(this.raggedRank, outputIndex, outputTensor, outputShape);
    }
    return [outputShape, outputTensor];
  }
  setOutput(raggedRank, outputIndex, outputTensor, outputShape) {
    if (outputTensor.length === 0) {
      return;
    }
    const valuesBase = this.values;
    const outputBase = outputTensor;
    let elementShape = outputShape.slice();
    elementShape = elementShape.slice(raggedRank + 1);
    const valueElementSize = util_exports.sizeFromShape(elementShape);
    const outputIndexSize = outputIndex.length;
    let defaultValue = this.defaultValue;
    if (defaultValue.length !== valueElementSize && defaultValue.length !== 1) {
      const srcShape = this.defaultValueShape;
      tidy(() => {
        const defaultValueTensor = reshape(defaultValue, srcShape);
        const bCastDefault = broadcastTo(defaultValueTensor, elementShape);
        defaultValue = bCastDefault.dataSync();
      });
    }
    let srcStart = 0;
    let dstStart = 0;
    let dstEnd = 0;
    for (let srcI = 0; srcI <= outputIndexSize; ++srcI) {
      let dstI = srcI < outputIndexSize ? outputIndex[srcI] : -1;
      if (dstI === dstEnd) {
        ++dstEnd;
        continue;
      }
      if (dstStart < dstEnd) {
        const src = valuesBase.subarray(srcStart * valueElementSize);
        const dst = outputBase.subarray(dstStart * valueElementSize);
        const nVals = (dstEnd - dstStart) * valueElementSize;
        copyArray(dst, src, nVals);
      }
      if (srcI >= outputIndexSize) {
        const outputSize = outputTensor.length;
        dstI = Math.floor(outputSize / valueElementSize);
      }
      if (dstI > dstEnd) {
        if (this.defaultValue.length === 1) {
          outputBase.subarray(dstEnd * valueElementSize, dstI * valueElementSize).fill(this.defaultValue[0]);
          dstEnd = dstI;
        } else {
          while (dstI > dstEnd) {
            const dst = outputBase.slice(dstEnd * valueElementSize);
            copyArray(dst, defaultValue, valueElementSize);
            ++dstEnd;
          }
        }
      }
      if (dstI < 0) {
        srcStart = srcI + 1;
        dstStart = dstEnd;
      } else {
        srcStart = srcI;
        dstStart = dstEnd;
        dstEnd = dstStart + 1;
      }
    }
  }
};
function copyArray(dst, src, size) {
  for (let i = 0; i < size; i++) {
    dst[i] = src[i];
  }
}
function makeShape(shape, isPartial) {
  const out = [];
  for (let dim of shape) {
    if (dim < 0) {
      if (!isPartial) {
        throw new Error(`Dimension ${dim} must be >= 0`);
      }
      if (dim < -1) {
        throw new Error(`Dimension ${dim} must be >= -1`);
      }
      dim = -1;
    }
    out.push(dim);
  }
  return out;
}
function raggedTensorToTensorImpl(shape, shapesShape, values, valuesShape, valuesDType, defaultValue, defaultValueShape, rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypes) {
  return new RaggedTensorToTensorOp(shape, shapesShape, values, valuesShape, valuesDType, defaultValue, defaultValueShape, rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypes).compute();
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Range_impl.js
function rangeImpl(start, stop, step2, dtype) {
  const sameStartStop = start === stop;
  const increasingRangeNegativeStep = start < stop && step2 < 0;
  const decreasingRangePositiveStep = stop < start && step2 > 1;
  if (sameStartStop || increasingRangeNegativeStep || decreasingRangePositiveStep) {
    return util_exports.makeZerosTypedArray(0, dtype);
  }
  const numElements = Math.abs(Math.ceil((stop - start) / step2));
  const values = util_exports.makeZerosTypedArray(numElements, dtype);
  if (stop < start && step2 === 1) {
    step2 = -1;
  }
  values[0] = start;
  for (let i = 1; i < values.length; i++) {
    values[i] = values[i - 1] + step2;
  }
  return values;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js
var rsqrtImpl = createSimpleUnaryImpl((xi) => 1 / Math.sqrt(xi));
var rsqrt = unaryKernelFuncFromImpl(Rsqrt, rsqrtImpl);
var rsqrtConfig = {
  kernelName: Rsqrt,
  backendName: "cpu",
  kernelFunc: rsqrt
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Scatter_impl.js
function scatterImpl(indices, updates, shape, outputSize, sliceSize, numUpdates, sliceRank, strides, defaultValue, sumDupeIndices) {
  const flattenShape = [outputSize / sliceSize, sliceSize];
  const indicesData = indices.values;
  const updatesData = updates.values;
  if (outputSize === 0) {
    return buffer(shape, updates.dtype);
  }
  const outBuf = defaultValue instanceof TensorBuffer ? defaultValue : buffer(flattenShape, updates.dtype);
  if (typeof defaultValue === "string") {
    outBuf.values.fill(defaultValue);
  } else if (typeof defaultValue === "number") {
    outBuf.values.fill(defaultValue);
  } else if (typeof defaultValue === "boolean") {
    outBuf.values.fill(+defaultValue);
  }
  for (let i = 0; i < numUpdates; i++) {
    const index = [];
    let flattenIndex = 0;
    for (let j = 0; j < sliceRank; j++) {
      const dim = indicesData[i * sliceRank + j];
      index.push(dim);
      flattenIndex += dim * strides[j];
    }
    if (flattenIndex < 0 || flattenIndex >= outputSize / sliceSize) {
      throw new Error(`Invalid indices: ${index} does not index into ${shape}`);
    }
    for (let k = 0; k < sliceSize; k++) {
      if (sumDupeIndices) {
        outBuf.values[flattenIndex * sliceSize + k] += updatesData[i * sliceSize + k];
      } else {
        outBuf.values[flattenIndex * sliceSize + k] = updates.rank === 0 ? updatesData[0] : updatesData[i * sliceSize + k];
      }
    }
  }
  return outBuf;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sigmoid.js
var sigmoidImpl = createSimpleUnaryImpl((xi) => 1 / (1 + Math.exp(-xi)));
var sigmoid = unaryKernelFunc(Sigmoid, (xi) => 1 / (1 + Math.exp(-xi)));
var sigmoidConfig = {
  kernelName: Sigmoid,
  backendName: "cpu",
  kernelFunc: sigmoid
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js
function sliceImpl(vals, begin, size, shape, dtype) {
  const isContinous = slice_util_exports.isSliceContinous(shape, begin, size);
  const length = util_exports.sizeFromShape(size);
  const xStrides = util_exports.computeStrides(shape);
  if (isContinous) {
    const flatOffset = slice_util_exports.computeFlatOffset(begin, xStrides);
    if (dtype === "string") {
      return vals.slice(flatOffset, flatOffset + length);
    }
    return vals.subarray(flatOffset, flatOffset + length);
  }
  const decodedData = dtype === "string" ? backend_util_exports.fromUint8ToStringArray(vals) : vals;
  const inBuf = buffer(shape, dtype, decodedData);
  const outBuf = buffer(size, dtype);
  for (let i = 0; i < outBuf.size; ++i) {
    const outLoc = outBuf.indexToLoc(i);
    const inLoc = outLoc.map((idx, j) => idx + begin[j]);
    outBuf.set(inBuf.get(...inLoc), ...outLoc);
  }
  if (dtype === "string") {
    return backend_util_exports.fromStringArrayToUint8(outBuf.values);
  }
  return outBuf.values;
}
function slice(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    begin,
    size
  } = attrs;
  assertNotComplex2(x, "slice");
  const [$begin, $size] = slice_util_exports.parseSliceParams(x, begin, size);
  slice_util_exports.assertParamsValid(x, $begin, $size);
  const vals = backend.data.get(x.dataId).values;
  const outVals = sliceImpl(vals, $begin, $size, x.shape, x.dtype);
  return backend.makeTensorInfo($size, x.dtype, outVals);
}
var sliceConfig = {
  kernelName: Slice,
  backendName: "cpu",
  kernelFunc: slice
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows_impl.js
function sparseFillEmptyRowsImpl(indices, indicesShape, indicesDType, values, valuesDType, denseShape, defaultValue) {
  const indicesCount = indicesShape[0];
  const denseRows = denseShape[0];
  const emptyRowIndicator = new Array(denseRows);
  const reverseIndexMap = new Array(indicesCount);
  const rank = indicesShape[1];
  if (denseRows === 0) {
    if (indicesCount !== 0) {
      throw new Error(backend_util_exports.getSparseFillEmptyRowsIndicesDenseShapeMismatch(indicesCount));
    }
    const outputIndices = util_exports.getArrayFromDType(indicesDType, 0);
    const outputValues = util_exports.getArrayFromDType(valuesDType, 0);
    return [outputIndices, [0, rank], outputValues, emptyRowIndicator, reverseIndexMap];
  }
  let rowsAreOrdered = true;
  let lastIndicesRow = 0;
  const csrOffset = new Array(denseRows).fill(0);
  for (let i = 0; i < indicesCount; ++i) {
    const row = indices[i * rank];
    if (row < 0) {
      throw new Error(backend_util_exports.getSparseFillEmptyRowsNegativeIndexErrorMessage(i, row));
    }
    if (row >= denseRows) {
      throw new Error(backend_util_exports.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(i, row, denseRows));
    }
    ++csrOffset[row];
    rowsAreOrdered = rowsAreOrdered && row >= lastIndicesRow;
    lastIndicesRow = row;
  }
  let allRowsFull = true;
  for (let row = 0; row < denseRows; ++row) {
    const rowEmpty = csrOffset[row] === 0;
    emptyRowIndicator[row] = rowEmpty;
    allRowsFull = allRowsFull && !rowEmpty;
    csrOffset[row] = Math.max(csrOffset[row], 1);
    if (row > 0) {
      csrOffset[row] += csrOffset[row - 1];
    }
  }
  if (allRowsFull && rowsAreOrdered) {
    const outputIndices = indices;
    const outputValues = values;
    for (let i = 0; i < indicesCount; ++i) {
      reverseIndexMap[i] = i;
    }
    return [outputIndices, [indicesCount, rank], outputValues, emptyRowIndicator, reverseIndexMap];
  } else {
    const fullIndicesCount = csrOffset[denseRows - 1];
    const outputIndices = util_exports.getArrayFromDType(indicesDType, fullIndicesCount * rank);
    const outputValues = util_exports.getArrayFromDType(valuesDType, fullIndicesCount);
    const filledCount = new Array(denseRows).fill(0);
    for (let i = 0; i < indicesCount; ++i) {
      const row = indices[i * rank];
      const offset = filledCount[row];
      const outputI = (row === 0 ? 0 : csrOffset[row - 1]) + offset;
      filledCount[row]++;
      for (let j = 0; j < rank; ++j) {
        outputIndices[outputI * rank + j] = indices[i * rank + j];
      }
      outputValues[outputI] = values[i];
      reverseIndexMap[i] = outputI;
    }
    for (let row = 0; row < denseRows; ++row) {
      const rowCount = filledCount[row];
      if (rowCount === 0) {
        const startingIndex = row === 0 ? 0 : csrOffset[row - 1];
        outputIndices[startingIndex * rank + 0] = row;
        for (let col = 1; col < rank; ++col) {
          outputIndices[startingIndex * rank + col] = 0;
        }
        outputValues[startingIndex] = defaultValue;
      }
    }
    return [outputIndices, [fullIndicesCount, rank], outputValues, emptyRowIndicator, reverseIndexMap];
  }
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape_impl.js
function sparseReshapeImpl(inputIndices, inputIndicesShape, inputDType, inputShape, targetShape) {
  const denseSize = util_exports.sizeFromShape(inputShape);
  const nnz = inputIndicesShape[0];
  const outputRank = targetShape.length;
  const outputShape = [];
  let product = 1;
  let unknownIndex = -1;
  for (let d = 0; d < outputRank; ++d) {
    const size = targetShape[d];
    if (size === -1) {
      if (unknownIndex !== -1) {
        throw new Error(backend_util_exports.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(unknownIndex, d));
      }
      unknownIndex = d;
      outputShape.push(1);
    } else {
      if (size < 0) {
        throw new Error(backend_util_exports.getSparseReshapeNegativeOutputDimErrorMessage(d, size));
      }
      product *= size;
      outputShape.push(size);
    }
  }
  if (unknownIndex !== -1) {
    if (product <= 0) {
      throw new Error(backend_util_exports.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());
    }
    const missing = Math.trunc(denseSize / product);
    if (product * missing !== denseSize) {
      throw new Error(backend_util_exports.getSparseReshapeInputOutputMultipleErrorMessage(inputShape, outputShape));
    }
    outputShape[unknownIndex] = missing;
  }
  const outputSize = util_exports.sizeFromShape(outputShape);
  if (outputSize !== denseSize) {
    throw new Error(backend_util_exports.getSparseReshapeInputOutputMismatchErrorMessage(inputShape, outputShape));
  }
  const inputRank = inputShape.length;
  const inputStrides = [];
  if (inputRank > 0) {
    inputStrides[inputRank - 1] = 1;
    for (let d = inputRank - 2; d >= 0; --d) {
      inputStrides[d] = inputStrides[d + 1] * inputShape[d + 1];
    }
  }
  const outputStrides = [];
  if (outputRank > 0) {
    outputStrides[outputRank - 1] = 1;
    for (let d = outputRank - 2; d >= 0; --d) {
      outputStrides[d] = outputStrides[d + 1] * outputShape[d + 1];
    }
  }
  const newIndices = util_exports.getArrayFromDType(inputDType, nnz * outputRank);
  for (let i = 0; i < nnz; ++i) {
    let id = 0;
    for (let j = 0; j < inputRank; ++j) {
      id += inputIndices[i * inputRank + j] * inputStrides[j];
    }
    for (let j = 0; j < outputRank; ++j) {
      newIndices[i * outputRank + j] = Math.trunc(id / outputStrides[j]);
      id %= outputStrides[j];
    }
  }
  return [newIndices, [nnz, outputRank], outputShape];
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentReduction_impl.js
function sparseSegmentReductionImpl(input, inputShape, inputDType, indices, segmentIds, isMean = false, defaultValue = 0) {
  const numIndices = indices.length;
  const inputFlat = [inputShape[0], input.length / inputShape[0]];
  const numCol = inputFlat[1];
  const lastSegmentIdPlusOne = numIndices > 0 ? segmentIds[numIndices - 1] + 1 : 0;
  const outputRows = lastSegmentIdPlusOne;
  if (outputRows < 0) {
    throw new Error(backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
  }
  const outputShape = inputShape.slice();
  outputShape[0] = outputRows;
  const outputLength = outputShape.reduce((product, value) => product * value, 1);
  const output = util_exports.getArrayFromDType(inputDType, outputLength);
  if (numIndices === 0) {
    if (outputRows > 0) {
      output.fill(defaultValue);
    }
    return [output, outputShape];
  }
  if (outputRows <= 0) {
    throw new Error(backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
  }
  let start = 0, end = 1;
  let uninitializedIndex = 0;
  let outIndex = segmentIds[start];
  while (true) {
    let nextIndex = 0;
    if (end < numIndices) {
      nextIndex = segmentIds[end];
      if (outIndex === nextIndex) {
        ++end;
        continue;
      }
      if (outIndex >= nextIndex) {
        throw new Error(backend_util_exports.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage());
      }
    }
    if (outIndex < 0 || outIndex >= outputRows) {
      throw new Error(backend_util_exports.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(outIndex, outputRows));
    }
    if (outIndex > uninitializedIndex) {
      output.fill(defaultValue, uninitializedIndex * numCol, outIndex * numCol);
    }
    for (let i = start; i < end; ++i) {
      const index = indices[i];
      if (index < 0 || index >= inputFlat[0]) {
        throw new Error(backend_util_exports.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(i, indices[i], inputFlat[0]));
      }
      for (let j = 0; j < numCol; j++) {
        output[outIndex * numCol + j] += input[index * numCol + j];
      }
    }
    if (isMean) {
      for (let j = 0; j < numCol; j++) {
        output[outIndex * numCol + j] /= end - start;
      }
    }
    start = end;
    ++end;
    uninitializedIndex = outIndex + 1;
    outIndex = nextIndex;
    if (end > numIndices) {
      break;
    }
  }
  if (uninitializedIndex < outputRows) {
    output.fill(defaultValue, uninitializedIndex * numCol, outputRows * numCol);
  }
  return [output, outputShape];
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sqrt.js
var sqrtImpl = createSimpleUnaryImpl((xi) => Math.sqrt(xi));
var sqrt = unaryKernelFunc(Sqrt, (xi) => Math.sqrt(xi));
var sqrtConfig = {
  kernelName: Sqrt,
  backendName: "cpu",
  kernelFunc: sqrt
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js
var squaredDifferenceImpl = createSimpleBinaryKernelImpl((a, b) => {
  const diff = a - b;
  return diff * diff;
});
var squaredDifference = binaryKernelFunc(SquaredDifference, squaredDifferenceImpl);
var squaredDifferenceConfig = {
  kernelName: SquaredDifference,
  backendName: "cpu",
  kernelFunc: squaredDifference
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StaticRegexReplace.js
var staticRegexReplaceImpl = createSimpleUnaryImpl((x, attrs) => {
  const {
    pattern,
    replaceGlobal,
    rewrite
  } = attrs;
  return x.replace(new RegExp(pattern, replaceGlobal ? "g" : ""), rewrite);
});
var staticRegexReplace = unaryKernelFuncFromImpl(StaticRegexReplace, staticRegexReplaceImpl);
var staticRegexReplaceConfig = {
  kernelName: StaticRegexReplace,
  backendName: "cpu",
  kernelFunc: staticRegexReplace
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice_impl.js
function stridedSliceImpl(outShape, xBuf, strides, begin) {
  const outBuf = buffer(outShape, xBuf.dtype);
  for (let i = 0; i < outBuf.size; i++) {
    const loc = outBuf.indexToLoc(i);
    const newLoc = new Array(loc.length);
    for (let j = 0; j < newLoc.length; j++) {
      newLoc[j] = loc[j] * strides[j] + begin[j];
    }
    outBuf.set(xBuf.get(...newLoc), ...loc);
  }
  return outBuf;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams_impl.js
var StringNGramsOp = class {
  constructor(separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences) {
    this.separator = util_exports.encodeString(separator);
    this.nGramWidths = nGramWidths;
    this.leftPad = util_exports.encodeString(leftPad);
    this.rightPad = util_exports.encodeString(rightPad);
    this.padWidth = padWidth;
    this.preserveShort = preserveShortSequences;
  }
  getPadWidth(nGramWidth) {
    return Math.min(this.padWidth < 0 ? nGramWidth - 1 : this.padWidth, nGramWidth - 1);
  }
  getNumNGrams(length, nGramWidth) {
    const padWidth = this.getPadWidth(nGramWidth);
    return Math.max(0, length + 2 * padWidth - nGramWidth + 1);
  }
  createNGrams(data, splitIndex, output, outputStartIndex, numNGrams, nGramWidth) {
    for (let nGramIndex = 0; nGramIndex < numNGrams; ++nGramIndex) {
      const padWidth = this.getPadWidth(nGramWidth);
      const leftPadding = Math.max(0, padWidth - nGramIndex);
      const rightPadding = Math.max(0, padWidth - (numNGrams - (nGramIndex + 1)));
      const numTokens = nGramWidth - (leftPadding + rightPadding);
      const dataStartIndex = splitIndex + (leftPadding > 0 ? 0 : nGramIndex - padWidth);
      let nGramSize = 0;
      nGramSize += leftPadding * this.leftPad.length;
      for (let n = 0; n < numTokens; ++n) {
        nGramSize += data[dataStartIndex + n].length;
      }
      nGramSize += rightPadding * this.rightPad.length;
      const numSeparators = leftPadding + rightPadding + numTokens - 1;
      nGramSize += numSeparators * this.separator.length;
      output[outputStartIndex + nGramIndex] = new Uint8Array(nGramSize);
      const nGram = output[outputStartIndex + nGramIndex];
      let nextNGramIndex = 0;
      const appendToNGram = (str) => str.forEach((value) => nGram[nextNGramIndex++] = value);
      for (let n = 0; n < leftPadding; ++n) {
        appendToNGram(this.leftPad);
        appendToNGram(this.separator);
      }
      for (let n = 0; n < numTokens - 1; ++n) {
        appendToNGram(data[dataStartIndex + n]);
        appendToNGram(this.separator);
      }
      if (numTokens > 0) {
        appendToNGram(data[dataStartIndex + numTokens - 1]);
        for (let n = 0; n < rightPadding; ++n) {
          appendToNGram(this.separator);
          appendToNGram(this.rightPad);
        }
      } else {
        for (let n = 0; n < rightPadding - 1; ++n) {
          appendToNGram(this.rightPad);
          appendToNGram(this.separator);
        }
        appendToNGram(this.rightPad);
      }
    }
  }
  // Data and splits together form the definition of the ragged tensor,
  // where data is 1 dimensional and contains the values of the tensor
  // and splits denotes the indices at which each row starts.
  compute(data, splits) {
    const inputDataSize = data.length;
    const splitsSize = splits.length;
    if (splitsSize > 0) {
      let prevSplit = splits[0];
      if (prevSplit !== 0) {
        throw new Error(`First split value must be 0, got ${prevSplit}`);
      }
      for (let i = 1; i < splitsSize; ++i) {
        let validSplits = splits[i] >= prevSplit;
        validSplits = validSplits && splits[i] <= inputDataSize;
        if (!validSplits) {
          throw new Error(`Invalid split value ${splits[i]}, must be in [${prevSplit}, ${inputDataSize}]`);
        }
        prevSplit = splits[i];
      }
      if (prevSplit !== inputDataSize) {
        throw new Error(`Last split value must be data size. Expected ${inputDataSize}, got ${prevSplit}`);
      }
    }
    const numBatchItems = splitsSize - 1;
    const nGramsSplits = util_exports.getArrayFromDType("int32", splitsSize);
    if (inputDataSize === 0 || splitsSize === 0) {
      const empty = new Array(inputDataSize);
      for (let i = 0; i <= numBatchItems; ++i) {
        nGramsSplits[i] = 0;
      }
      return [empty, nGramsSplits];
    }
    nGramsSplits[0] = 0;
    for (let i = 1; i <= numBatchItems; ++i) {
      const length = splits[i] - splits[i - 1];
      let numNGrams = 0;
      this.nGramWidths.forEach((nGramWidth) => {
        numNGrams += this.getNumNGrams(length, nGramWidth);
      });
      if (this.preserveShort && length > 0 && numNGrams === 0) {
        numNGrams = 1;
      }
      nGramsSplits[i] = nGramsSplits[i - 1] + numNGrams;
    }
    const nGrams = new Array(nGramsSplits[numBatchItems]);
    for (let i = 0; i < numBatchItems; ++i) {
      const splitIndex = splits[i];
      let outputStartIdx = nGramsSplits[i];
      this.nGramWidths.forEach((nGramWidth) => {
        const length = splits[i + 1] - splits[i];
        const numNGrams = this.getNumNGrams(length, nGramWidth);
        this.createNGrams(data, splitIndex, nGrams, outputStartIdx, numNGrams, nGramWidth);
        outputStartIdx += numNGrams;
      });
      if (this.preserveShort && outputStartIdx === nGramsSplits[i]) {
        const dataLength = splits[i + 1] - splits[i];
        if (dataLength === 0) {
          continue;
        }
        const nGramWidth = dataLength + 2 * this.padWidth;
        const numNGrams = 1;
        this.createNGrams(data, splitIndex, nGrams, outputStartIdx, numNGrams, nGramWidth);
      }
    }
    return [nGrams, nGramsSplits];
  }
};
function stringNGramsImpl(data, dataSplits, separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences) {
  return new StringNGramsOp(separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences).compute(data, dataSplits);
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit_impl.js
function split(str, delimiters, skipEmpty, result) {
  if (!str.length) {
    return;
  }
  if (delimiters.length === 0) {
    for (let i = 0; i < str.length; ++i) {
      result.push(str.subarray(i, i + 1));
    }
    return;
  }
  if (delimiters.length === 1) {
    const delimiter = delimiters[0];
    let f = str.indexOf(delimiter);
    while (f !== -1) {
      const token = str.subarray(0, f);
      if (!skipEmpty || token.length !== 0) {
        result.push(token);
      }
      str = str.subarray(f + 1);
      f = str.indexOf(delimiter);
    }
    if (!skipEmpty || str.length !== 0) {
      result.push(str);
    }
    return;
  }
  let tokenStart = 0;
  for (let i = 0; i < str.length + 1; i++) {
    if (i === str.length || delimiters.indexOf(str[i]) !== -1) {
      const token = str.subarray(tokenStart, i);
      if (!skipEmpty || token.length !== 0) {
        result.push(token);
      }
      tokenStart = i + 1;
    }
  }
}
function stringSplitImpl(input, delimiter, skipEmpty) {
  const batchSize = input.length;
  const tokens = [];
  let outputSize = 0;
  let maxNumEntries = 0;
  const numIndices = new Array(batchSize);
  for (let i = 0; i < batchSize; ++i) {
    const prevTokensLength = tokens.length;
    split(input[i], delimiter, skipEmpty, tokens);
    const nEntries = tokens.length - prevTokensLength;
    numIndices[i] = nEntries;
    outputSize += nEntries;
    maxNumEntries = Math.max(maxNumEntries, nEntries);
  }
  const indices = util_exports.getArrayFromDType("int32", outputSize * 2);
  const values = new Array(outputSize);
  const shape = [batchSize, maxNumEntries];
  let c = 0;
  for (let i = 0; i < batchSize; ++i) {
    for (let j = 0; j < numIndices[i]; ++j) {
      indices[c * 2] = i;
      indices[c * 2 + 1] = j;
      values[c] = tokens[c];
      ++c;
    }
  }
  return [indices, values, shape];
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast_impl.js
function stringToHashBucketFastImpl(input, numBuckets) {
  const output = util_exports.getArrayFromDType("int32", input.length);
  for (let i = 0; i < input.length; ++i) {
    output[i] = util_exports.fingerPrint64(input[i]).modulo(numBuckets).getLowBitsUnsigned();
  }
  return output;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js
var subImpl = createSimpleBinaryKernelImpl((aValue, bValue) => aValue - bValue);
var subComplexImpl = createComplexBinaryKernelImpl((aReal, aImag, bReal, bImag) => {
  return {
    real: aReal - bReal,
    imag: aImag - bImag
  };
});
var sub = binaryKernelFunc(Sub, subImpl, subComplexImpl);
var subConfig = {
  kernelName: Sub,
  backendName: "cpu",
  kernelFunc: sub
};

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Tile_impl.js
function tileImpl(xBuf, reps) {
  const newShape = new Array(xBuf.rank);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = xBuf.shape[i] * reps[i];
  }
  const result = buffer(newShape, xBuf.dtype);
  for (let i = 0; i < result.values.length; ++i) {
    const newLoc = result.indexToLoc(i);
    const originalLoc = new Array(xBuf.rank);
    for (let j = 0; j < originalLoc.length; j++) {
      originalLoc[j] = newLoc[j] % xBuf.shape[j];
    }
    const originalIndex = xBuf.locToIndex(originalLoc);
    result.values[i] = xBuf.values[originalIndex];
  }
  return result;
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/TopK_impl.js
var comparePair = (a, b) => {
  const valueDiff = b.value - a.value;
  return valueDiff === 0 ? a.index - b.index : valueDiff;
};
function select(array, k, left = 0, right = array.length - 1) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const i2 = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * Math.sign(i2 - n / 2);
      const newLeft = Math.max(left, Math.floor(k - i2 * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - i2) * s / n + sd));
      select(array, k, newLeft, newRight);
    }
    const t = array[k];
    let i = left;
    let j = right;
    util_exports.swap(array, left, k);
    if (comparePair(array[right], t) > 0) {
      util_exports.swap(array, left, right);
    }
    while (i < j) {
      util_exports.swap(array, i, j);
      i++;
      j--;
      while (comparePair(array[i], t) < 0) {
        i = i + 1;
      }
      while (comparePair(array[j], t) > 0) {
        j = j - 1;
      }
    }
    if (comparePair(array[left], t) === 0) {
      util_exports.swap(array, left, j);
    } else {
      j = j + 1;
      util_exports.swap(array, j, right);
    }
    if (j <= k) {
      left = j + 1;
    }
    if (k <= j) {
      right = j - 1;
    }
  }
}
function topKImpl(x, xShape, xDtype, k, sorted) {
  const lastDim = xShape[xShape.length - 1];
  const [batch, size] = [x.length / lastDim, lastDim];
  const allTopKVals = util_exports.getTypedArrayFromDType(xDtype, batch * k);
  const allTopKIndices = util_exports.getTypedArrayFromDType("int32", batch * k);
  for (let b = 0; b < batch; b++) {
    const offset = b * size;
    const vals = x.subarray(offset, offset + size);
    let valAndInd = new Array(vals.length);
    vals.forEach((value, index) => valAndInd[index] = {
      value,
      index
    });
    if (k < valAndInd.length) {
      select(valAndInd, k);
      valAndInd = valAndInd.slice(0, k);
    }
    if (sorted) {
      valAndInd.sort(comparePair);
    }
    const outOffset = b * k;
    const topKVals = allTopKVals.subarray(outOffset, outOffset + k);
    const topKIndices = allTopKIndices.subarray(outOffset, outOffset + k);
    for (let i = 0; i < k; i++) {
      topKVals[i] = valAndInd[i].value;
      topKIndices[i] = valAndInd[i].index;
    }
  }
  const outputShape = xShape.slice();
  outputShape[outputShape.length - 1] = k;
  return [buffer(outputShape, xDtype, allTopKVals), buffer(outputShape, "int32", allTopKIndices)];
}

// node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js
function uniqueImpl(values, axis, shape, dtype) {
  const $axis = util_exports.parseAxisParam(axis, shape)[0];
  const newShape = [1, shape[0], 1];
  for (let i = 0; i < $axis; i++) {
    newShape[0] *= shape[i];
  }
  newShape[1] = shape[$axis];
  for (let i = $axis + 1; i < shape.length; i++) {
    newShape[2] *= shape[i];
  }
  const uniqueElements = /* @__PURE__ */ new Map();
  const indices = new Int32Array(shape[$axis]);
  const inputBuffer = new TensorBuffer(newShape, dtype, values);
  const uniqueIndices = [];
  const is1DTensor = newShape[0] === 1 && newShape[2] === 1;
  for (let i = 0; i < shape[$axis]; i++) {
    let element;
    if (is1DTensor) {
      element = values[i].toString();
    } else {
      const axisValues = [];
      for (let m = 0; m < newShape[0]; m++) {
        for (let n = 0; n < newShape[2]; n++) {
          axisValues.push(inputBuffer.get(m, i, n));
        }
      }
      element = axisValues.join(",");
    }
    const existingIndex = uniqueElements.get(element);
    if (existingIndex != null) {
      indices[i] = existingIndex;
    } else {
      const uniqueIndex = uniqueElements.size;
      uniqueElements.set(element, uniqueIndex);
      indices[i] = uniqueIndex;
      uniqueIndices.push(i);
    }
  }
  const outputTmpShape = newShape.slice();
  outputTmpShape[1] = uniqueElements.size;
  const outputBuffer = new TensorBuffer(outputTmpShape, dtype);
  uniqueIndices.forEach((uniqueElementIndex, i) => {
    for (let m = 0; m < newShape[0]; m++) {
      for (let n = 0; n < newShape[2]; n++) {
        outputBuffer.set(inputBuffer.get(m, uniqueElementIndex, n), m, i, n);
      }
    }
  });
  const outputShape = shape.slice();
  outputShape[$axis] = outputTmpShape[1];
  return {
    outputValues: outputBuffer.values,
    outputShape,
    indices
  };
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js
var {
  addImpl: addImplCPU,
  bincountImpl: bincountImplCPU,
  bincountReduceImpl: bincountReduceImplCPU,
  bitwiseAndImpl: bitwiseAndImplCPU,
  castImpl: castImplCPU,
  ceilImpl: ceilImplCPU,
  concatImpl: concatImplCPU,
  equalImpl: equalImplCPU,
  expImpl: expImplCPU,
  expm1Impl: expm1ImplCPU,
  floorImpl: floorImplCPU,
  gatherNdImpl: gatherNdImplCPU,
  gatherV2Impl: gatherV2ImplCPU,
  greaterImpl: greaterImplCPU,
  greaterEqualImpl: greaterEqualImplCPU,
  lessImpl: lessImplCPU,
  lessEqualImpl: lessEqualImplCPU,
  linSpaceImpl: linSpaceImplCPU,
  logImpl: logImplCPU,
  maxImpl: maxImplCPU,
  maximumImpl: maximumImplCPU,
  minimumImpl: minimumImplCPU,
  multiplyImpl: multiplyImplCPU,
  negImpl: negImplCPU,
  notEqualImpl: notEqualImplCPU,
  prodImpl: prodImplCPU,
  raggedGatherImpl: raggedGatherImplCPU,
  raggedRangeImpl: raggedRangeImplCPU,
  raggedTensorToTensorImpl: raggedTensorToTensorImplCPU,
  rangeImpl: rangeImplCPU,
  rsqrtImpl: rsqrtImplCPU,
  scatterImpl: scatterImplCPU,
  sigmoidImpl: sigmoidImplCPU,
  simpleAbsImpl: simpleAbsImplCPU,
  sliceImpl: sliceImplCPU,
  sparseFillEmptyRowsImpl: sparseFillEmptyRowsImplCPU,
  sparseReshapeImpl: sparseReshapeImplCPU,
  sparseSegmentReductionImpl: sparseSegmentReductionImplCPU,
  sqrtImpl: sqrtImplCPU,
  staticRegexReplaceImpl: staticRegexReplaceImplCPU,
  stridedSliceImpl: stridedSliceImplCPU,
  stringNGramsImpl: stringNGramsImplCPU,
  stringSplitImpl: stringSplitImplCPU,
  stringToHashBucketFastImpl: stringToHashBucketFastImplCPU,
  subImpl: subImplCPU,
  tileImpl: tileImplCPU,
  topKImpl: topKImplCPU,
  transposeImpl: transposeImplCPU,
  uniqueImpl: uniqueImplCPU
} = shared_exports;

// node_modules/@tensorflow/tfjs-backend-webgl/dist/packing_util.js
function getVecChannels(name, rank) {
  return ["x", "y", "z", "w", "u", "v"].slice(0, rank).map((d) => `${name}.${d}`);
}
function getChannels(name, rank) {
  if (rank === 1) {
    return [name];
  }
  return getVecChannels(name, rank);
}
function getSourceCoords(rank, dims) {
  if (rank === 1) {
    return "rc";
  }
  let coords2 = "";
  for (let i = 0; i < rank; i++) {
    coords2 += dims[i];
    if (i < rank - 1) {
      coords2 += ",";
    }
  }
  return coords2;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/pack_gpu.js
var PackProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = false;
    this.packedOutput = true;
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    if (this.rank === 0) {
      this.userCode = `
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;
    } else {
      const channels = getChannels("rc", this.rank);
      const dtype = getCoordsDataType(this.rank);
      const outOfBoundsCondition = this.getOutOfBoundsCondition(channels);
      const setup = this.getSetup(channels);
      const output = this.getOutput(channels);
      this.userCode = `
        void main() {
          ${dtype} rc = getOutputCoords();

          if(${outOfBoundsCondition}) {
            setOutput(vec4(0));
          } else {
            ${setup}

            setOutput(vec4(${output}));
          }
        }
      `;
    }
  }
  getSourceCoordsArr(dims) {
    const coords2 = [];
    for (let row = 0; row <= 1; row++) {
      for (let col = 0; col <= 1; col++) {
        let coord = `${row === 0 ? "r" : "rp1"}, ${col === 0 ? "c" : "cp1"}`;
        for (let d = 2; d < this.rank; d++) {
          coord = `${dims[dims.length - 1 - d]},` + coord;
        }
        coords2.push(coord);
      }
    }
    return coords2;
  }
  getOutOfBoundsCondition(dims) {
    if (this.rank === 1) {
      return `rc > ${this.enableShapeUniforms ? "outShape" : this.outputShape[0]}`;
    }
    let cond = "";
    for (let i = this.rank - 2; i < this.rank; i++) {
      cond += `${dims[i]} >= ${this.enableShapeUniforms ? `outShape[${i}]` : this.outputShape[i]}`;
      if (i < this.rank - 1) {
        cond += "||";
      }
    }
    return cond;
  }
  getSetup(dims) {
    if (this.rank === 1) {
      return "";
    }
    const innerDims = dims.slice(-2);
    const col = this.enableShapeUniforms ? `outShape[${this.rank} - 1]` : this.outputShape[this.rank - 1];
    const row = this.enableShapeUniforms ? `outShape[${this.rank} - 2]` : this.outputShape[this.rank - 2];
    return `
      int r = ${innerDims[0]};
      int c = ${innerDims[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${col};
      bool rEdge = rp1 >= ${row};
    `;
  }
  getOutput(dims) {
    const sourceCoords = this.getSourceCoordsArr(dims);
    if (this.rank === 1) {
      const outShape = this.enableShapeUniforms ? "outShape" : this.outputShape[0];
      return `getA(rc), (rc + 1 >= ${outShape} ? 0. : getA(rc + 1)), 0, 0`;
    }
    return `getA(${sourceCoords[0]}),
            cEdge ? 0. : getA(${sourceCoords[1]}),
            rEdge ? 0. : getA(${sourceCoords[2]}),
            rEdge || cEdge ? 0. : getA(${sourceCoords[3]})`;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js
var ReshapePackedProgram = class {
  constructor(outputShape, inputShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{
      name: "inputShape",
      type: "ivec3"
    }];
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    let mainLoop = ``;
    for (let i = 0; i < 4; i++) {
      let thisRC = `thisRC = rc;`;
      if (i % 2 === 1) {
        thisRC += `thisRC.z += 1;`;
      }
      if (i > 1) {
        thisRC += `thisRC.y += 1;`;
      }
      mainLoop += `
        ${thisRC}
        ${i > 0 ? `if(thisRC.y < rows && thisRC.z < cols){` : ""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${i}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${i > 0 ? "}" : ""}
      `;
    }
    this.userCode = `
      ${getReshapedInputCoords(inputShape, this.enableShapeUniforms)}
      ${this.enableShapeUniforms ? getFlatIndexFrom3DOutput() : getFlatIndexFrom3D(outputShape)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms ? "outShape[1]" : outputShape[1]};
        int cols = ${this.enableShapeUniforms ? "outShape[2]" : outputShape[2]};

        ${mainLoop}

        setOutput(result);
      }
    `;
  }
};
function getReshapedInputCoords(shape, enableShapeUniforms) {
  const coordsFromIndexSnippet = enableShapeUniforms ? getLogicalCoordinatesFromFlatIndexByUniform(["r", "c", "d"], "inputShape") : getLogicalCoordinatesFromFlatIndex(["r", "c", "d"], shape);
  return `
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${coordsFromIndexSnippet}
      return ivec3(r, c, d);
    }
  `;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/texture_manager.js
var TextureManager = class {
  constructor(gpgpu) {
    this.gpgpu = gpgpu;
    this.numUsedTextures = 0;
    this.numFreeTextures = 0;
    this._numBytesAllocated = 0;
    this._numBytesFree = 0;
    this.freeTextures = {};
    this.usedTextures = {};
    this.logEnabled = false;
  }
  acquireTexture(shapeRC, usage, isPacked) {
    const physicalTexType = getPhysicalFromLogicalTextureType(usage, isPacked);
    const shapeKey = getKeyFromTextureShape(shapeRC, physicalTexType, isPacked);
    if (!(shapeKey in this.freeTextures)) {
      this.freeTextures[shapeKey] = [];
    }
    if (!(shapeKey in this.usedTextures)) {
      this.usedTextures[shapeKey] = [];
    }
    const texBytes = computeBytes(shapeRC, physicalTexType, this.gpgpu.gl, this.gpgpu.textureConfig, isPacked);
    if (this.freeTextures[shapeKey].length > 0) {
      this.numFreeTextures--;
      this.numUsedTextures++;
      this._numBytesFree -= texBytes;
      this.log();
      const newTexture2 = this.freeTextures[shapeKey].pop();
      this.usedTextures[shapeKey].push(newTexture2);
      return newTexture2;
    }
    let newTexture;
    if (physicalTexType === PhysicalTextureType.PACKED_2X2_FLOAT32) {
      newTexture = this.gpgpu.createPackedMatrixTexture(shapeRC[0], shapeRC[1]);
    } else if (physicalTexType === PhysicalTextureType.PACKED_2X2_FLOAT16) {
      newTexture = this.gpgpu.createFloat16PackedMatrixTexture(shapeRC[0], shapeRC[1]);
    } else if (physicalTexType === PhysicalTextureType.UNPACKED_FLOAT32) {
      newTexture = this.gpgpu.createFloat32MatrixTexture(shapeRC[0], shapeRC[1]);
    } else if (physicalTexType === PhysicalTextureType.UNPACKED_FLOAT16) {
      newTexture = this.gpgpu.createFloat16MatrixTexture(shapeRC[0], shapeRC[1]);
    } else if (physicalTexType === PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE) {
      newTexture = this.gpgpu.createUnsignedBytesMatrixTexture(shapeRC[0], shapeRC[1]);
    }
    this.usedTextures[shapeKey].push(newTexture);
    this.numUsedTextures++;
    this._numBytesAllocated += texBytes;
    this.log();
    return newTexture;
  }
  releaseTexture(texture, shape, logicalTexType, isPacked) {
    if (this.freeTextures == null) {
      return;
    }
    const physicalTexType = getPhysicalFromLogicalTextureType(logicalTexType, isPacked);
    const shapeKey = getKeyFromTextureShape(shape, physicalTexType, isPacked);
    if (!(shapeKey in this.freeTextures)) {
      this.freeTextures[shapeKey] = [];
    }
    const texBytes = computeBytes(shape, physicalTexType, this.gpgpu.gl, this.gpgpu.textureConfig, isPacked);
    const deleteTexThreshold = env().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");
    if (deleteTexThreshold !== -1 && this._numBytesAllocated > deleteTexThreshold) {
      this.gpgpu.deleteMatrixTexture(texture.texture);
      this._numBytesAllocated -= texBytes;
    } else {
      this.freeTextures[shapeKey].push(texture);
      this.numFreeTextures++;
      this._numBytesFree += texBytes;
    }
    this.numUsedTextures--;
    const texList = this.usedTextures[shapeKey];
    const texIndex = texList && texList.indexOf(texture);
    if (texIndex == null || texIndex < 0) {
      throw new Error("Cannot release a texture that was never provided by this texture manager");
    }
    texList[texIndex] = texList[texList.length - 1];
    texList.pop();
    this.log();
  }
  log() {
    if (!this.logEnabled) {
      return;
    }
    const total = this.numFreeTextures + this.numUsedTextures;
    console.log("Free/Used", `${this.numFreeTextures} / ${this.numUsedTextures}`, `(${total})`);
    const freeRatio = this._numBytesFree / this._numBytesAllocated;
    console.log(`Bytes allocated: ${this._numBytesAllocated}`);
    console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100 * freeRatio)}%)`);
  }
  get numBytesAllocated() {
    return this._numBytesAllocated;
  }
  get numBytesFree() {
    return this._numBytesFree;
  }
  getNumUsedTextures() {
    return this.numUsedTextures;
  }
  getNumFreeTextures() {
    return this.numFreeTextures;
  }
  dispose() {
    if (this.freeTextures == null) {
      return;
    }
    for (const texShape in this.freeTextures) {
      this.freeTextures[texShape].forEach((tex) => {
        this.gpgpu.deleteMatrixTexture(tex.texture);
      });
    }
    for (const texShape in this.usedTextures) {
      this.usedTextures[texShape].forEach((tex) => {
        this.gpgpu.deleteMatrixTexture(tex.texture);
      });
    }
    this.freeTextures = null;
    this.usedTextures = null;
    this.numUsedTextures = 0;
    this.numFreeTextures = 0;
    this._numBytesAllocated = 0;
    this._numBytesFree = 0;
  }
};
function numBytesForInternalFormat(gl, internalFormat) {
  const glany = gl;
  if (internalFormat === glany.R32F) {
    return 4;
  } else if (internalFormat === glany.R16F) {
    return 2;
  } else if (internalFormat === glany.RGBA32F) {
    return 16;
  } else if (internalFormat === gl.RGBA) {
    return 16;
  } else if (internalFormat === glany.RGBA16F) {
    return 8;
  } else if (internalFormat === glany.RGBA8) {
    return 4;
  }
  throw new Error(`Unknown internal format ${internalFormat}`);
}
function computeBytes(shape, physicalTexType, gl, textureConfig, isPacked) {
  const internalFormat = internalFormatForPhysicalTexType(physicalTexType, textureConfig);
  let numElements;
  if (isPacked) {
    const [packedWidth, packedHeight] = getPackedMatrixTextureShapeWidthHeight(shape[0], shape[1]);
    numElements = packedWidth * packedHeight;
  } else {
    const [width, height] = getUnpackedMatrixTextureShapeWidthHeight(shape[0], shape[1]);
    numElements = width * height;
  }
  const bytesPerElement = numBytesForInternalFormat(gl, internalFormat);
  return numElements * bytesPerElement;
}
function internalFormatForPhysicalTexType(physicalTexType, textureConfig) {
  switch (physicalTexType) {
    case PhysicalTextureType.PACKED_2X2_FLOAT32:
      return getInternalFormatForPackedMatrixTexture(textureConfig);
    case PhysicalTextureType.PACKED_2X2_FLOAT16:
      return getInternalFormatForFloat16PackedMatrixTexture(textureConfig);
    case PhysicalTextureType.UNPACKED_FLOAT32:
      return getInternalFormatForFloat32MatrixTexture(textureConfig);
    case PhysicalTextureType.UNPACKED_FLOAT16:
      return getInternalFormatForFloat16MatrixTexture(textureConfig);
    case PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE:
      return getInternalFormatForUnsignedBytesMatrixTexture(textureConfig);
    default:
      throw new Error(`Unknown physical texture type ${physicalTexType}`);
  }
}
function getPhysicalTextureForRendering(isPacked) {
  if (env().getBool("WEBGL_RENDER_FLOAT32_ENABLED")) {
    if (isPacked) {
      return PhysicalTextureType.PACKED_2X2_FLOAT32;
    }
    return PhysicalTextureType.UNPACKED_FLOAT32;
  }
  if (isPacked) {
    return PhysicalTextureType.PACKED_2X2_FLOAT16;
  }
  return PhysicalTextureType.UNPACKED_FLOAT16;
}
function getPhysicalFromLogicalTextureType(logicalTexType, isPacked) {
  if (logicalTexType === TextureUsage.UPLOAD) {
    return PhysicalTextureType.PACKED_2X2_FLOAT32;
  } else if (logicalTexType === TextureUsage.RENDER || logicalTexType == null) {
    return getPhysicalTextureForRendering(isPacked);
  } else if (logicalTexType === TextureUsage.DOWNLOAD || logicalTexType === TextureUsage.PIXELS) {
    return PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE;
  }
  throw new Error(`Unknown logical texture type ${logicalTexType}`);
}
function getKeyFromTextureShape(shapeRowsCol, physicalTexType, isPacked) {
  return `${shapeRowsCol[0]}_${shapeRowsCol[1]}_${physicalTexType}_${isPacked}`;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js
var UnaryOpProgram = class {
  constructor(aShape, opSnippet) {
    this.variableNames = ["A"];
    this.outputShape = aShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      float unaryOperation(float x) {
        ${opSnippet}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `;
  }
};
var CHECK_NAN_SNIPPET = `if (isnan(x)) return x;`;
var LINEAR = `return x;`;
var ABS = `return abs(x);`;
var ELU = `return (x >= 0.0) ? x : (exp(x) - 1.0);`;
var RELU = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : x;
`;
var RELU6 = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : min(6.0, x);
`;
var CLONE = "return x;";
var SIGMOID = `return 1.0 / (1.0 + exp(-1.0 * x));`;

// node_modules/@tensorflow/tfjs-backend-webgl/dist/unaryop_packed_gpu.js
var LINEAR2 = `return x;`;
var ELU2 = `
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`;
var RELU2 = `
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var RELU62 = `
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var SIGMOID2 = `return 1.0 / (1.0 + exp(-1.0 * x));`;
var UnaryOpPackedProgram = class {
  constructor(aShape, opSnippet) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = aShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      vec4 unaryOperation(vec4 x) {
        ${opSnippet}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/unpack_gpu.js
var UnpackProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = false;
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const rank = outputShape.length;
    const channels = getChannels("rc", rank);
    const dtype = getCoordsDataType(rank);
    const sourceCoords = getSourceCoords(rank, channels);
    const innerDims = channels.slice(-2);
    const coords2 = rank <= 1 ? "rc" : `vec2(${innerDims.join(",")})`;
    this.userCode = `
      void main() {
        ${dtype} rc = getOutputCoords();
        vec4 packedInput = getA(${sourceCoords});

        setOutput(getChannel(packedInput, ${coords2}));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js
var whereImpl = kernel_impls_exports.whereImpl;
var EPSILON_FLOAT32 = 1e-7;
var EPSILON_FLOAT16 = 1e-4;
var binaryCaches = {};
function getBinaryCache(webGLVersion) {
  if (webGLVersion in binaryCaches) {
    return binaryCaches[webGLVersion];
  }
  binaryCaches[webGLVersion] = {};
  return binaryCaches[webGLVersion];
}
var CPU_HANDOFF_SIZE_THRESHOLD = env().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");
var BEFORE_PAGING_CONSTANT = 600;
function numMBBeforeWarning() {
  if (env().global.screen == null) {
    return 1024;
  }
  return env().global.screen.height * env().global.screen.width * window.devicePixelRatio * BEFORE_PAGING_CONSTANT / 1024 / 1024;
}
var MathBackendWebGL = class _MathBackendWebGL extends KernelBackend {
  nextDataId() {
    return _MathBackendWebGL.nextDataId++;
  }
  constructor(gpuResource) {
    super();
    this.pendingRead = /* @__PURE__ */ new WeakMap();
    this.pendingDisposal = /* @__PURE__ */ new WeakSet();
    this.dataRefCount = /* @__PURE__ */ new WeakMap();
    this.numBytesInGPU = 0;
    this.uploadWaitMs = 0;
    this.downloadWaitMs = 0;
    this.lastGlFlushTime = 0;
    this.warnedAboutMemory = false;
    this.pendingDeletes = 0;
    this.disposed = false;
    if (!env().getBool("HAS_WEBGL")) {
      throw new Error("WebGL is not supported on this device");
    }
    let newGPGPU;
    if (gpuResource != null) {
      if (gpuResource instanceof GPGPUContext) {
        newGPGPU = gpuResource;
      } else {
        const gl = getWebGLContext(env().getNumber("WEBGL_VERSION"), gpuResource);
        newGPGPU = new GPGPUContext(gl);
      }
      this.binaryCache = {};
      this.gpgpuCreatedLocally = false;
    } else {
      const gl = getWebGLContext(env().getNumber("WEBGL_VERSION"));
      newGPGPU = new GPGPUContext(gl);
      this.binaryCache = getBinaryCache(env().getNumber("WEBGL_VERSION"));
      this.gpgpuCreatedLocally = true;
    }
    this.gpgpu = newGPGPU;
    this.canvas = this.gpgpu.gl.canvas;
    this.textureManager = new TextureManager(this.gpgpu);
    this.numMBBeforeWarning = numMBBeforeWarning();
    this.texData = new DataStorage(this, engine());
  }
  numDataIds() {
    return this.texData.numDataIds() - this.pendingDeletes;
  }
  // Writes a new entry to the data store with a WebGL texture, and registers it
  // to the texture manager.
  writeTexture(texture, shape, dtype, texHeight, texWidth, channels) {
    const input = this.makeTensorInfo(shape, dtype);
    const inData = this.texData.get(input.dataId);
    inData.isPacked = false;
    inData.texture = {
      texture,
      texShape: [texHeight, texWidth]
    };
    inData.texShape = [texHeight, texWidth];
    const shapeAs3D = getShapeAs3D(shape);
    const program = new EncodeMatrixProgram(shapeAs3D, false, channels);
    const output = this.runWebGLProgram(program, [input], dtype, [[texHeight, texWidth]]);
    output.shape = shape;
    inData.texture = null;
    this.disposeIntermediateTensorInfo(input);
    return output.dataId;
  }
  write(values, shape, dtype) {
    if (env().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS") || env().getBool("DEBUG")) {
      this.checkNumericalProblems(values);
    }
    if (dtype === "complex64" && values != null) {
      throw new Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);
    }
    const dataId = {
      id: this.nextDataId()
    };
    this.texData.set(dataId, {
      shape,
      dtype,
      values,
      usage: TextureUsage.UPLOAD,
      refCount: 1
    });
    return dataId;
  }
  /** Return refCount of a `TensorData`. */
  refCount(dataId) {
    if (this.texData.has(dataId)) {
      const tensorData = this.texData.get(dataId);
      return tensorData.refCount;
    }
    return 0;
  }
  /** Increase refCount of a `TextureData`. */
  incRef(dataId) {
    const texData = this.texData.get(dataId);
    texData.refCount++;
  }
  /** Decrease refCount of a `TextureData`. */
  decRef(dataId) {
    if (this.texData.has(dataId)) {
      const texData = this.texData.get(dataId);
      texData.refCount--;
    }
  }
  move(dataId, values, shape, dtype, refCount) {
    if (env().getBool("DEBUG")) {
      this.checkNumericalProblems(values);
    }
    if (dtype === "complex64") {
      throw new Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);
    }
    this.texData.set(dataId, {
      shape,
      dtype,
      values,
      usage: TextureUsage.UPLOAD,
      refCount
    });
  }
  disposeIntermediateTensorInfo(tensorInfo) {
    this.disposeData(tensorInfo.dataId);
  }
  readSync(dataId) {
    const texData = this.texData.get(dataId);
    const {
      values,
      dtype,
      complexTensorInfos,
      slice: slice3,
      shape,
      isPacked
    } = texData;
    if (slice3 != null) {
      let program;
      if (isPacked) {
        program = new UnaryOpPackedProgram(shape, CLONE);
      } else {
        program = new UnaryOpProgram(shape, CLONE);
      }
      const res = this.runWebGLProgram(program, [{
        dataId,
        shape,
        dtype
      }], dtype);
      const data = this.readSync(res.dataId);
      this.disposeIntermediateTensorInfo(res);
      return data;
    }
    if (values != null) {
      return this.convertAndCacheOnCPU(dataId);
    }
    if (dtype === "string") {
      return values;
    }
    const shouldTimeProgram = this.activeTimers != null;
    let start;
    if (shouldTimeProgram) {
      start = util_exports.now();
    }
    let result;
    if (dtype === "complex64") {
      const realValues = this.readSync(complexTensorInfos.real.dataId);
      const imagValues = this.readSync(complexTensorInfos.imag.dataId);
      result = backend_util_exports.mergeRealAndImagArrays(realValues, imagValues);
    } else {
      result = this.getValuesFromTexture(dataId);
    }
    if (shouldTimeProgram) {
      this.downloadWaitMs += util_exports.now() - start;
    }
    return this.convertAndCacheOnCPU(dataId, result);
  }
  read(dataId) {
    return __async(this, null, function* () {
      if (this.pendingRead.has(dataId)) {
        const subscribers2 = this.pendingRead.get(dataId);
        return new Promise((resolve) => subscribers2.push(resolve));
      }
      const texData = this.texData.get(dataId);
      const {
        values,
        shape,
        slice: slice3,
        dtype,
        complexTensorInfos,
        isPacked
      } = texData;
      if (slice3 != null) {
        let program;
        if (isPacked) {
          program = new UnaryOpPackedProgram(shape, CLONE);
        } else {
          program = new UnaryOpProgram(shape, CLONE);
        }
        const res = this.runWebGLProgram(program, [{
          dataId,
          shape,
          dtype
        }], dtype);
        const data = this.read(res.dataId);
        this.disposeIntermediateTensorInfo(res);
        return data;
      }
      if (values != null) {
        return this.convertAndCacheOnCPU(dataId);
      }
      if (env().getBool("DEBUG")) {
        if (!env().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && env().getNumber("WEBGL_VERSION") === 2) {
          throw new Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);
        }
      }
      let buffer2 = null;
      let tmpDownloadTarget;
      if (dtype !== "complex64" && env().get("WEBGL_BUFFER_SUPPORTED")) {
        tmpDownloadTarget = this.decode(dataId);
        const tmpData = this.texData.get(tmpDownloadTarget.dataId);
        buffer2 = this.gpgpu.createBufferFromTexture(tmpData.texture.texture, ...getDenseTexShape(shape));
      }
      this.pendingRead.set(dataId, []);
      if (dtype !== "complex64") {
        yield this.gpgpu.createAndWaitForFence();
      }
      let vals;
      if (dtype === "complex64") {
        const ps = yield Promise.all([this.read(complexTensorInfos.real.dataId), this.read(complexTensorInfos.imag.dataId)]);
        const realValues = ps[0];
        const imagValues = ps[1];
        vals = backend_util_exports.mergeRealAndImagArrays(realValues, imagValues);
      } else if (buffer2 == null) {
        vals = this.getValuesFromTexture(dataId);
      } else {
        const size = util_exports.sizeFromShape(shape);
        vals = this.gpgpu.downloadFloat32MatrixFromBuffer(buffer2, size);
      }
      if (tmpDownloadTarget != null) {
        this.disposeIntermediateTensorInfo(tmpDownloadTarget);
      }
      if (buffer2 != null) {
        const gl = this.gpgpu.gl;
        callAndCheck(gl, () => gl.deleteBuffer(buffer2));
      }
      const dTypeVals = this.convertAndCacheOnCPU(dataId, vals);
      const subscribers = this.pendingRead.get(dataId);
      this.pendingRead.delete(dataId);
      subscribers.forEach((resolve) => resolve(dTypeVals));
      if (this.pendingDisposal.has(dataId)) {
        this.pendingDisposal.delete(dataId);
        if (this.disposeData(dataId)) {
          engine().removeDataId(dataId, this);
        }
        this.pendingDeletes--;
      }
      return dTypeVals;
    });
  }
  /**
   * Read tensor to a new texture that is densely packed for ease of use.
   * @param dataId The source tensor.
   * @param options
   *     customTexShape: Optional. If set, will use the user defined texture
   *     shape to create the texture.
   */
  readToGPU(dataId, options = {}) {
    const texData = this.texData.get(dataId);
    const {
      values,
      shape,
      slice: slice3,
      dtype,
      isPacked,
      texture
    } = texData;
    if (dtype === "complex64") {
      throw new Error("Does not support reading texture for complex64 dtype.");
    }
    if (slice3 != null) {
      let program;
      if (isPacked) {
        program = new UnaryOpPackedProgram(shape, CLONE);
      } else {
        program = new UnaryOpProgram(shape, CLONE);
      }
      const res = this.runWebGLProgram(program, [{
        dataId,
        shape,
        dtype
      }], dtype);
      const gpuResouorce = this.readToGPU(res, options);
      this.disposeIntermediateTensorInfo(res);
      return gpuResouorce;
    }
    if (texture == null) {
      if (values != null) {
        throw new Error("Data is not on GPU but on CPU.");
      } else {
        throw new Error("There is no data on GPU or CPU.");
      }
    }
    const tmpTarget = this.decode(dataId, options.customTexShape);
    const tensorRef = engine().makeTensorFromTensorInfo(tmpTarget);
    const tmpData = this.texData.get(tmpTarget.dataId);
    return Object.assign({
      tensorRef
    }, tmpData.texture);
  }
  bufferSync(t) {
    const data = this.readSync(t.dataId);
    if (t.dtype === "string") {
      try {
        const strings = data.map((d) => util_exports.decodeString(d));
        return buffer(t.shape, t.dtype, strings);
      } catch (_a) {
        throw new Error("Failed to decode encoded string bytes into utf-8");
      }
    }
    return buffer(t.shape, t.dtype, data);
  }
  checkNumericalProblems(values) {
    if (values == null) {
      return;
    }
    for (let i = 0; i < values.length; i++) {
      const num = values[i];
      if (!canBeRepresented(num)) {
        if (env().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")) {
          throw Error(`The value ${num} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);
        }
        throw Error(`The value ${num} cannot be represented on this device.`);
      }
    }
  }
  getValuesFromTexture(dataId) {
    const {
      shape,
      dtype,
      isPacked
    } = this.texData.get(dataId);
    const size = util_exports.sizeFromShape(shape);
    if (env().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
      const tmpTarget = this.decode(dataId);
      const tmpData2 = this.texData.get(tmpTarget.dataId);
      const vals2 = this.gpgpu.downloadMatrixFromPackedTexture(tmpData2.texture.texture, ...getDenseTexShape(shape)).subarray(0, size);
      this.disposeIntermediateTensorInfo(tmpTarget);
      return vals2;
    }
    const shouldUsePackedProgram = env().getBool("WEBGL_PACK") && isPacked === true;
    const outputShape = shouldUsePackedProgram ? getShapeAs3D(shape) : shape;
    const program = shouldUsePackedProgram ? new EncodeFloatPackedProgram(outputShape) : new EncodeFloatProgram(outputShape);
    const output = this.runWebGLProgram(program, [{
      shape: outputShape,
      dtype,
      dataId
    }], "float32");
    const tmpData = this.texData.get(output.dataId);
    const vals = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(tmpData.texture.texture, tmpData.texShape[0], tmpData.texShape[1]).subarray(0, size);
    this.disposeIntermediateTensorInfo(output);
    return vals;
  }
  timerAvailable() {
    return env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0;
  }
  time(f) {
    const oldActiveTimers = this.activeTimers;
    const newActiveTimers = [];
    let outerMostTime = false;
    if (this.programTimersStack == null) {
      this.programTimersStack = newActiveTimers;
      outerMostTime = true;
    } else {
      this.activeTimers.push(newActiveTimers);
    }
    this.activeTimers = newActiveTimers;
    f();
    const flattenedActiveTimerQueries = util_exports.flatten(this.activeTimers.map((d) => d.query)).filter((d) => d != null);
    const flattenedActiveTimerNames = util_exports.flatten(this.activeTimers.map((d) => d.name)).filter((d) => d != null);
    this.activeTimers = oldActiveTimers;
    if (outerMostTime) {
      this.programTimersStack = null;
    }
    const res = {
      uploadWaitMs: this.uploadWaitMs,
      downloadWaitMs: this.downloadWaitMs,
      kernelMs: null,
      wallMs: null
      // will be filled by the engine
    };
    return (() => __async(this, null, function* () {
      if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0) {
        const kernelMs = yield Promise.all(flattenedActiveTimerQueries);
        res["kernelMs"] = util_exports.sum(kernelMs);
        res["getExtraProfileInfo"] = () => kernelMs.map((d, i) => ({
          name: flattenedActiveTimerNames[i],
          ms: d
        })).map((d) => `${d.name}: ${d.ms}`).join(", ");
      } else {
        res["kernelMs"] = {
          error: "WebGL query timers are not supported in this environment."
        };
      }
      this.uploadWaitMs = 0;
      this.downloadWaitMs = 0;
      return res;
    }))();
  }
  memory() {
    return {
      unreliable: false,
      numBytesInGPU: this.numBytesInGPU,
      numBytesInGPUAllocated: this.textureManager.numBytesAllocated,
      numBytesInGPUFree: this.textureManager.numBytesFree
    };
  }
  startTimer() {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0) {
      return this.gpgpu.beginQuery();
    }
    return {
      startMs: util_exports.now(),
      endMs: null
    };
  }
  endTimer(query) {
    if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0) {
      this.gpgpu.endQuery();
      return query;
    }
    query.endMs = util_exports.now();
    return query;
  }
  getQueryTime(query) {
    return __async(this, null, function* () {
      if (env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0) {
        return this.gpgpu.waitForQueryAndGetTime(query);
      }
      const timerQuery = query;
      return timerQuery.endMs - timerQuery.startMs;
    });
  }
  /**
   * Decrease the RefCount on the dataId and dispose the memory if the dataId
   * has 0 refCount. If there are pending read on the data, the disposal would
   * added to the pending delete queue. Return true if the dataId is removed
   * from backend or the backend does not contain the dataId, false if the
   * dataId is not removed. Memory may or may not be released even when dataId
   * is removed, which also depends on dataRefCount, see `releaseGPU`.
   * @param dataId
   * @oaram force Optional, remove the data regardless of refCount
   */
  disposeData(dataId, force = false) {
    if (this.pendingDisposal.has(dataId)) {
      return false;
    }
    if (!this.texData.has(dataId)) {
      return true;
    }
    if (force) {
      this.texData.get(dataId).refCount = 0;
    } else {
      this.texData.get(dataId).refCount--;
    }
    if (!force && this.texData.get(dataId).refCount > 0) {
      return false;
    }
    if (this.pendingRead.has(dataId)) {
      this.pendingDisposal.add(dataId);
      this.pendingDeletes++;
      return false;
    }
    this.releaseGPUData(dataId);
    const {
      complexTensorInfos
    } = this.texData.get(dataId);
    if (complexTensorInfos != null) {
      this.disposeData(complexTensorInfos.real.dataId, force);
      this.disposeData(complexTensorInfos.imag.dataId, force);
    }
    this.texData.delete(dataId);
    return true;
  }
  releaseGPUData(dataId) {
    const {
      texture,
      dtype,
      texShape,
      usage,
      isPacked,
      slice: slice3
    } = this.texData.get(dataId);
    const key = slice3 && slice3.origDataId || dataId;
    const refCount = this.dataRefCount.get(key);
    if (refCount > 1) {
      this.dataRefCount.set(key, refCount - 1);
    } else {
      this.dataRefCount.delete(key);
      if (texture != null) {
        this.numBytesInGPU -= this.computeBytes(texShape, dtype);
        this.textureManager.releaseTexture(texture, texShape, usage, isPacked);
      }
    }
    const texData = this.texData.get(dataId);
    texData.texture = null;
    texData.texShape = null;
    texData.isPacked = false;
    texData.slice = null;
  }
  getTexture(dataId) {
    this.uploadToGPU(dataId);
    return this.texData.get(dataId).texture.texture;
  }
  /**
   * Returns internal information for the specific data bucket. Used in unit
   * tests.
   */
  getDataInfo(dataId) {
    return this.texData.get(dataId);
  }
  /*
  Tests whether all the inputs to an op are small and on the CPU. This heuristic
  determines when it would be faster to execute a kernel on the CPU. WebGL
  kernels opt into running this check and forwarding when appropriate.
  TODO(https://github.com/tensorflow/tfjs/issues/872): Develop a more
  sustainable strategy for optimizing backend execution of ops.
   */
  shouldExecuteOnCPU(inputs, sizeThreshold = CPU_HANDOFF_SIZE_THRESHOLD) {
    return env().getBool("WEBGL_CPU_FORWARD") && inputs.every((input) => this.texData.get(input.dataId).texture == null && util_exports.sizeFromShape(input.shape) < sizeThreshold);
  }
  getGPGPUContext() {
    return this.gpgpu;
  }
  where(condition) {
    backend_util_exports.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
    const condVals = condition.dataSync();
    return whereImpl(condition.shape, condVals);
  }
  packedUnaryOp(x, op, dtype) {
    const program = new UnaryOpPackedProgram(x.shape, op);
    const outInfo = this.compileAndRun(program, [x], dtype);
    return engine().makeTensorFromTensorInfo(outInfo);
  }
  // TODO(msoulanille) remove this once the backend has been modularized
  // a copy is needed here to break a circular dependency.
  // Also remove the op from unary_op.
  abs(x) {
    if (this.shouldExecuteOnCPU([x]) && x.dtype !== "complex64") {
      const outValues = simpleAbsImplCPU(this.texData.get(x.dataId).values);
      return this.makeOutput(x.shape, x.dtype, outValues);
    }
    if (env().getBool("WEBGL_PACK_UNARY_OPERATIONS")) {
      return this.packedUnaryOp(x, ABS, x.dtype);
    }
    const program = new UnaryOpProgram(x.shape, ABS);
    const outInfo = this.compileAndRun(program, [x]);
    return engine().makeTensorFromTensorInfo(outInfo);
  }
  makeTensorInfo(shape, dtype, values) {
    let dataId;
    if (dtype === "string" && values != null && values.length > 0 && util_exports.isString(values[0])) {
      const encodedValues = values.map((d) => util_exports.encodeString(d));
      dataId = this.write(encodedValues, shape, dtype);
    } else {
      dataId = this.write(values, shape, dtype);
    }
    this.texData.get(dataId).usage = null;
    return {
      dataId,
      shape,
      dtype
    };
  }
  makeOutput(shape, dtype, values) {
    return engine().makeTensorFromTensorInfo(this.makeTensorInfo(shape, dtype, values), this);
  }
  unpackTensor(input) {
    const program = new UnpackProgram(input.shape);
    return this.runWebGLProgram(program, [input], input.dtype);
  }
  packTensor(input) {
    const program = new PackProgram(input.shape);
    const preventEagerUnpackingOutput = true;
    return this.runWebGLProgram(program, [input], input.dtype, null, preventEagerUnpackingOutput);
  }
  packedReshape(input, afterShape) {
    const input3DShape = [getBatchDim(input.shape), ...getRowsCols(input.shape)];
    const input3D = {
      dtype: input.dtype,
      shape: input3DShape,
      dataId: input.dataId
    };
    const afterShapeAs3D = [getBatchDim(afterShape), ...getRowsCols(afterShape)];
    const program = new ReshapePackedProgram(afterShapeAs3D, input3DShape);
    const preventEagerUnpackingOfOutput = true;
    const customValues = [input3DShape];
    const output = this.runWebGLProgram(program, [input3D], input.dtype, customValues, preventEagerUnpackingOfOutput);
    return {
      dataId: output.dataId,
      shape: afterShape,
      dtype: output.dtype
    };
  }
  decode(dataId, customTexShape) {
    const texData = this.texData.get(dataId);
    const {
      isPacked,
      shape,
      dtype
    } = texData;
    if (customTexShape != null) {
      const size = util_exports.sizeFromShape(shape);
      const texSize = customTexShape[0] * customTexShape[1] * 4;
      util_exports.assert(size <= texSize, () => "customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.");
    }
    const shapeAs3D = getShapeAs3D(shape);
    let program;
    if (isPacked) {
      program = new DecodeMatrixPackedProgram(shapeAs3D);
    } else {
      program = new DecodeMatrixProgram(shapeAs3D);
    }
    const preventEagerUnpackingOfOutput = true;
    const customValues = [customTexShape != null ? customTexShape : getDenseTexShape(shapeAs3D)];
    const out = this.runWebGLProgram(program, [{
      shape: shapeAs3D,
      dtype,
      dataId
    }], dtype, customValues, preventEagerUnpackingOfOutput, customTexShape);
    return {
      dtype,
      shape,
      dataId: out.dataId
    };
  }
  runWebGLProgram(program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput = false, customTexShape) {
    const output = this.makeTensorInfo(program.outputShape, outputDtype);
    const outData = this.texData.get(output.dataId);
    if (program.packedOutput) {
      outData.isPacked = true;
    }
    if (program.outPackingScheme === PackingScheme.DENSE) {
      const texelShape = customTexShape != null ? customTexShape : getDenseTexShape(program.outputShape);
      outData.texShape = texelShape.map((d) => d * 2);
    }
    if (program.outTexUsage != null) {
      outData.usage = program.outTexUsage;
    }
    if (util_exports.sizeFromShape(output.shape) === 0) {
      outData.values = util_exports.getTypedArrayFromDType(output.dtype, 0);
      return output;
    }
    const dataToDispose = [];
    const inputsData = inputs.map((input) => {
      if (input.dtype === "complex64") {
        throw new Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);
      }
      let texData = this.texData.get(input.dataId);
      if (texData.texture == null) {
        if (!program.packedInputs && util_exports.sizeFromShape(input.shape) <= env().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM")) {
          return {
            shape: input.shape,
            texData: null,
            isUniform: true,
            uniformValues: texData.values
          };
        }
        if (program.packedInputs) {
          texData.isPacked = true;
          texData.shape = input.shape;
        }
      }
      this.uploadToGPU(input.dataId);
      if (!!texData.isPacked !== !!program.packedInputs) {
        input = texData.isPacked ? this.unpackTensor(input) : this.packTensor(input);
        dataToDispose.push(input);
        texData = this.texData.get(input.dataId);
      } else if (texData.isPacked && !isReshapeFree(texData.shape, input.shape)) {
        const savedInput = input;
        const targetShape = input.shape;
        input.shape = texData.shape;
        input = this.packedReshape(input, targetShape);
        dataToDispose.push(input);
        texData = this.texData.get(input.dataId);
        savedInput.shape = targetShape;
      }
      return {
        shape: input.shape,
        texData,
        isUniform: false
      };
    });
    this.uploadToGPU(output.dataId);
    const outputData = {
      shape: output.shape,
      texData: outData,
      isUniform: false
    };
    const key = makeShaderKey(program, inputsData, outputData);
    const binary = this.getAndSaveBinary(key, () => {
      return compileProgram(this.gpgpu, program, inputsData, outputData);
    });
    const shouldTimeProgram = this.activeTimers != null;
    let query;
    if (shouldTimeProgram) {
      query = this.startTimer();
    }
    if (!env().get("ENGINE_COMPILE_ONLY")) {
      runProgram(this.gpgpu, binary, inputsData, outputData, customUniformValues);
    }
    dataToDispose.forEach((info) => this.disposeIntermediateTensorInfo(info));
    if (shouldTimeProgram) {
      query = this.endTimer(query);
      this.activeTimers.push({
        name: program.constructor.name,
        query: this.getQueryTime(query)
      });
    }
    const glFlushThreshold = env().getNumber("WEBGL_FLUSH_THRESHOLD");
    if (glFlushThreshold > 0) {
      const time = util_exports.now();
      if (time - this.lastGlFlushTime > glFlushThreshold) {
        this.gpgpu.gl.flush();
        this.lastGlFlushTime = time;
      }
    }
    if (!env().getBool("WEBGL_LAZILY_UNPACK") && outData.isPacked && preventEagerUnpackingOfOutput === false) {
      const unpacked = this.unpackTensor(output);
      this.disposeIntermediateTensorInfo(output);
      return unpacked;
    }
    return output;
  }
  compileAndRun(program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput = false) {
    outputDtype = outputDtype || inputs[0].dtype;
    const outInfo = this.runWebGLProgram(program, inputs, outputDtype, customUniformValues, preventEagerUnpackingOfOutput);
    return outInfo;
  }
  getAndSaveBinary(key, getBinary) {
    if (!(key in this.binaryCache)) {
      this.binaryCache[key] = getBinary();
    }
    return this.binaryCache[key];
  }
  getTextureManager() {
    return this.textureManager;
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    if (!env().getBool("IS_TEST")) {
      const allKeys = Object.keys(this.binaryCache);
      allKeys.forEach((key) => {
        this.gpgpu.deleteProgram(this.binaryCache[key].webGLProgram);
        delete this.binaryCache[key];
      });
    }
    this.textureManager.dispose();
    if (this.canvas != null && typeof HTMLCanvasElement !== "undefined" && this.canvas instanceof HTMLCanvasElement) {
      this.canvas.remove();
    } else {
      this.canvas = null;
    }
    if (this.gpgpuCreatedLocally) {
      this.gpgpu.program = null;
      this.gpgpu.dispose();
    }
    this.disposed = true;
  }
  floatPrecision() {
    if (this.floatPrecisionValue == null) {
      this.floatPrecisionValue = tidy(() => {
        if (!env().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
          const debugFlag = env().getBool("DEBUG");
          env().set("DEBUG", false);
          const underflowCheckValue = this.abs(scalar(1e-8)).dataSync()[0];
          env().set("DEBUG", debugFlag);
          if (underflowCheckValue > 0) {
            return 32;
          }
        }
        return 16;
      });
    }
    return this.floatPrecisionValue;
  }
  /** Returns the smallest representable number.  */
  epsilon() {
    return this.floatPrecision() === 32 ? EPSILON_FLOAT32 : EPSILON_FLOAT16;
  }
  uploadToGPU(dataId) {
    const texData = this.texData.get(dataId);
    const {
      shape,
      dtype,
      values,
      texture,
      usage,
      isPacked
    } = texData;
    if (texture != null) {
      return;
    }
    const shouldTimeProgram = this.activeTimers != null;
    let start;
    if (shouldTimeProgram) {
      start = util_exports.now();
    }
    let texShape = texData.texShape;
    if (texShape == null) {
      texShape = getTextureShapeFromLogicalShape(shape, isPacked);
      texData.texShape = texShape;
    }
    if (values != null) {
      const shapeAs3D = getShapeAs3D(shape);
      let program;
      let width = texShape[1], height = texShape[0];
      const isByteArray = values instanceof Uint8Array || values instanceof Uint8ClampedArray;
      if (isPacked || !isByteArray) {
        [width, height] = getPackedMatrixTextureShapeWidthHeight(texShape[0], texShape[1]);
      }
      if (isPacked) {
        program = new EncodeMatrixPackedProgram(shapeAs3D, isByteArray);
      } else {
        program = new EncodeMatrixProgram(shapeAs3D, isByteArray);
      }
      const tempDenseInputTexShape = isByteArray ? [height, width] : texShape;
      const tempDenseInputHandle = this.makeTensorInfo(tempDenseInputTexShape, dtype);
      const tempDenseInputTexData = this.texData.get(tempDenseInputHandle.dataId);
      if (isByteArray) {
        tempDenseInputTexData.usage = TextureUsage.PIXELS;
      } else {
        tempDenseInputTexData.usage = TextureUsage.UPLOAD;
      }
      tempDenseInputTexData.texShape = tempDenseInputTexShape;
      this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(tempDenseInputHandle.dataId), width, height, values);
      const customValues = [[height, width]];
      const preventEagerUnpacking = true;
      const encodedOutputTarget = this.runWebGLProgram(program, [tempDenseInputHandle], dtype, customValues, preventEagerUnpacking);
      const outputTexData = this.texData.get(encodedOutputTarget.dataId);
      texData.texShape = outputTexData.texShape;
      texData.isPacked = outputTexData.isPacked;
      texData.usage = outputTexData.usage;
      if (!env().get("ENGINE_COMPILE_ONLY")) {
        texData.texture = outputTexData.texture;
        texData.values = null;
        this.texData.delete(encodedOutputTarget.dataId);
      } else {
        this.disposeData(encodedOutputTarget.dataId);
      }
      this.disposeIntermediateTensorInfo(tempDenseInputHandle);
      if (shouldTimeProgram) {
        this.uploadWaitMs += util_exports.now() - start;
      }
    } else {
      const newTexture = this.acquireTexture(texShape, usage, dtype, isPacked);
      texData.texture = newTexture;
    }
  }
  convertAndCacheOnCPU(dataId, float32Values) {
    const texData = this.texData.get(dataId);
    const {
      dtype
    } = texData;
    if (float32Values != null) {
      texData.values = float32ToTypedArray(float32Values, dtype);
    }
    return texData.values;
  }
  acquireTexture(texShape, texType, dtype, isPacked) {
    this.numBytesInGPU += this.computeBytes(texShape, dtype);
    if (!this.warnedAboutMemory && this.numBytesInGPU > this.numMBBeforeWarning * 1024 * 1024) {
      const mb = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
      this.warnedAboutMemory = true;
      console.warn(`High memory usage in GPU: ${mb} MB, most likely due to a memory leak`);
    }
    return this.textureManager.acquireTexture(texShape, texType, isPacked);
  }
  computeBytes(shape, dtype) {
    return shape[0] * shape[1] * util_exports.bytesPerElement(dtype);
  }
  checkCompileCompletion() {
    for (const [, binary] of Object.entries(this.binaryCache)) {
      this.checkCompletion_(binary);
    }
  }
  checkCompileCompletionAsync() {
    return __async(this, null, function* () {
      const ps = [];
      if (this.gpgpu.parallelCompilationExtension) {
        for (const [, binary] of Object.entries(this.binaryCache)) {
          ps.push(this.checkCompletionAsync_(binary));
        }
        return Promise.all(ps);
      } else {
        for (const [, binary] of Object.entries(this.binaryCache)) {
          const p = new Promise((resolve) => {
            try {
              this.checkCompletion_(binary);
              resolve(true);
            } catch (error) {
              throw error;
            }
          });
          ps.push(p);
        }
        return Promise.all(ps);
      }
    });
  }
  checkCompletionAsync_(binary) {
    return __async(this, null, function* () {
      if (this.gpgpu.gl.getProgramParameter(binary.webGLProgram, this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)) {
        return this.checkCompletion_(binary);
      } else {
        yield nextFrame();
        return this.checkCompletionAsync_(binary);
      }
    });
  }
  checkCompletion_(binary) {
    if (this.gpgpu.gl.getProgramParameter(binary.webGLProgram, this.gpgpu.gl.LINK_STATUS) === false) {
      console.log(this.gpgpu.gl.getProgramInfoLog(binary.webGLProgram));
      if (this.gpgpu.gl.getShaderParameter(binary.fragmentShader, this.gpgpu.gl.COMPILE_STATUS) === false) {
        logShaderSourceAndInfoLog(binary.source, this.gpgpu.gl.getShaderInfoLog(binary.fragmentShader));
        throw new Error("Failed to compile fragment shader.");
      }
      throw new Error("Failed to link vertex and fragment shaders.");
    }
    return true;
  }
  getUniformLocations() {
    for (const binary of Object.values(this.binaryCache)) {
      this.gpgpu.buildVao(binary.webGLProgram);
      const {
        variablesLocations,
        customUniformLocations,
        infLoc,
        nanLoc,
        outShapeLocation,
        outShapeStridesLocation,
        outTexShapeLocation
      } = getUniformLocations(this.gpgpu, binary.program, binary.webGLProgram);
      binary.variablesLocations = variablesLocations;
      binary.customUniformLocations = customUniformLocations;
      binary.infLoc = infLoc;
      binary.nanLoc = nanLoc;
      binary.outShapeLocation = outShapeLocation;
      binary.outShapeStridesLocation = outShapeStridesLocation;
      binary.outTexShapeLocation = outTexShapeLocation;
    }
  }
  /**
   * Create a TF.js tensor out of an existing WebGL texture. A new texture will
   * be created.
   */
  createTensorFromGPUData(values, shape, dtype) {
    values.channels = values.channels || "RGBA";
    const {
      texture,
      height,
      width,
      channels
    } = values;
    const backend = engine().backend;
    if (!backend.gpgpu.gl.isTexture(texture)) {
      throw new Error(`The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.`);
    }
    const dataId = backend.writeTexture(texture, shape, dtype, height, width, channels);
    return engine().makeTensorFromDataId(dataId, shape, dtype, backend);
  }
};
MathBackendWebGL.nextDataId = 0;
function float32ToTypedArray(a, dtype) {
  if (dtype === "float32" || dtype === "complex64") {
    return a;
  } else if (dtype === "int32" || dtype === "bool") {
    const result = dtype === "int32" ? new Int32Array(a.length) : new Uint8Array(a.length);
    for (let i = 0; i < result.length; ++i) {
      result[i] = Math.round(a[i]);
    }
    return result;
  } else {
    throw new Error(`Unknown dtype ${dtype}`);
  }
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/version.js
var version = "4.22.0";

// node_modules/@tensorflow/tfjs-backend-webgl/dist/webgl.js
function forceHalfFloat() {
  env().set("WEBGL_FORCE_F16_TEXTURES", true);
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/base.js
if (device_util_exports.isBrowser()) {
  registerBackend(
    "webgl",
    () => new MathBackendWebGL(),
    2
    /* priority */
  );
}
var webgl = {
  forceHalfFloat
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js
var CHECK_NAN_SNIPPET2 = `
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;
var BinaryOpProgram = class {
  constructor(op, aShape, bShape) {
    this.variableNames = ["A", "B"];
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    this.userCode = `
      float binaryOperation(float a, float b) {
        ${op}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js
var CHECK_NAN_SNIPPET_PACKED = `
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;
var BinaryOpPackedProgram = class {
  constructor(op, aShape, bShape, checkOutOfBounds = false) {
    this.variableNames = ["A", "B"];
    this.supportsBroadcasting = true;
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    const rank = this.outputShape.length;
    this.enableShapeUniforms = useShapeUniforms(rank);
    let checkOutOfBoundsString = "";
    if (checkOutOfBounds) {
      if (rank === 0 || util_exports.sizeFromShape(this.outputShape) === 1) {
        checkOutOfBoundsString = `
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;
      } else {
        const dtype = getCoordsDataType(rank);
        checkOutOfBoundsString = `
          ${dtype} coords = getOutputCoords();
        `;
        if (rank === 1) {
          if (this.enableShapeUniforms) {
            checkOutOfBoundsString += `
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;
          } else {
            checkOutOfBoundsString += `
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;
          }
        } else {
          const channels = getChannels("coords", rank);
          if (this.enableShapeUniforms) {
            checkOutOfBoundsString += `
            bool nextRowOutOfBounds =
              (${channels[rank - 2]} + 1) >= outShape[${rank} - 2];
            bool nextColOutOfBounds =
              (${channels[rank - 1]} + 1) >= outShape[${rank} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `;
          } else {
            checkOutOfBoundsString += `
            bool nextRowOutOfBounds =
              (${channels[rank - 2]} + 1) >= ${this.outputShape[rank - 2]};
            bool nextColOutOfBounds =
              (${channels[rank - 1]} + 1) >= ${this.outputShape[rank - 1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `;
          }
        }
      }
    }
    this.userCode = `
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${op}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${checkOutOfBoundsString}

        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js
function identity2(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  backend.incRef(x.dataId);
  return {
    dataId: x.dataId,
    shape: x.shape,
    dtype: x.dtype
  };
}
var identityConfig2 = {
  kernelName: Identity,
  backendName: "webgl",
  kernelFunc: identity2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js
function complex2(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    real: real3,
    imag: imag2
  } = inputs;
  const complexInfo = backend.makeTensorInfo(real3.shape, "complex64");
  const complex3 = backend.texData.get(complexInfo.dataId);
  const realTensorInfo = identity2({
    inputs: {
      x: real3
    },
    backend
  });
  const imagTensorInfo = identity2({
    inputs: {
      x: imag2
    },
    backend
  });
  complex3.complexTensorInfos = {
    real: realTensorInfo,
    imag: imagTensorInfo
  };
  return complexInfo;
}
var complexConfig2 = {
  kernelName: Complex,
  backendName: "webgl",
  kernelFunc: complex2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/LeakyRelu.js
var LEAKYRELU = `return (a < 0.) ? b * a : a;`;
var LEAKYRELU_PACKED = `
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;
function leakyRelu(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    alpha
  } = attrs;
  const $alpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(alpha, "float32"));
  const program = env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new BinaryOpPackedProgram(LEAKYRELU_PACKED, x.shape, $alpha.shape) : new BinaryOpProgram(LEAKYRELU, x.shape, $alpha.shape);
  const result = backend.runWebGLProgram(program, [x, $alpha], "float32");
  backend.disposeIntermediateTensorInfo($alpha);
  return result;
}
var leakyReluConfig = {
  kernelName: LeakyRelu,
  backendName: "webgl",
  kernelFunc: leakyRelu
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Prelu.js
var PRELU = `return (a < 0.) ? b * a : a;`;
var PRELU_PACKED = `
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;
function prelu(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x,
    alpha
  } = inputs;
  const program = env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new BinaryOpPackedProgram(PRELU_PACKED, x.shape, alpha.shape) : new BinaryOpProgram(PRELU, x.shape, alpha.shape);
  return backend.runWebGLProgram(program, [x, alpha], "float32");
}
var preluConfig = {
  kernelName: Prelu,
  backendName: "webgl",
  kernelFunc: prelu
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js
var CHECK_NAN_SNIPPET_UNARY = `if (isnan(x)) return x;`;
function unaryKernelFunc2({
  opSnippet,
  packedOpSnippet,
  cpuKernelImpl,
  dtype
}) {
  return ({
    inputs,
    backend
  }) => {
    const {
      x
    } = inputs;
    const webglBackend = backend;
    const $dtype = dtype || x.dtype;
    if (webglBackend.shouldExecuteOnCPU([x]) && cpuKernelImpl != null) {
      const xData = webglBackend.texData.get(x.dataId);
      const outValues = cpuKernelImpl(xData.values, $dtype);
      return webglBackend.makeTensorInfo(x.shape, $dtype, outValues);
    }
    const shouldUsePackedProgram = env().getBool("WEBGL_PACK_UNARY_OPERATIONS") && packedOpSnippet != null;
    let program;
    if (shouldUsePackedProgram) {
      program = new UnaryOpPackedProgram(x.shape, packedOpSnippet);
    } else {
      program = new UnaryOpProgram(x.shape, opSnippet);
    }
    return webglBackend.runWebGLProgram(program, [x], $dtype);
  };
}
function binaryKernelFunc2({
  opSnippet,
  packedOpSnippet,
  checkOutOfBounds = false,
  supportsComplex = false,
  cpuKernelImpl,
  dtype
}) {
  return ({
    inputs,
    backend
  }) => {
    const {
      a,
      b
    } = inputs;
    const webglBackend = backend;
    if (supportsComplex && a.dtype === "complex64") {
      const aData = webglBackend.texData.get(a.dataId);
      const bData = webglBackend.texData.get(b.dataId);
      const [real3, imag2] = [[aData.complexTensorInfos.real, bData.complexTensorInfos.real], [aData.complexTensorInfos.imag, bData.complexTensorInfos.imag]].map((complexParts) => {
        const [aPart, bPart] = complexParts;
        const aHandle = {
          dataId: aPart.dataId,
          dtype: aPart.dtype,
          shape: a.shape
        };
        const bHandle = {
          dataId: bPart.dataId,
          dtype: bPart.dtype,
          shape: b.shape
        };
        const program2 = new BinaryOpProgram(opSnippet, a.shape, b.shape);
        return webglBackend.runWebGLProgram(program2, [aHandle, bHandle], upcastType(aPart.dtype, bPart.dtype));
      });
      const complexOutput = complex2({
        inputs: {
          real: real3,
          imag: imag2
        },
        backend: webglBackend
      });
      webglBackend.disposeIntermediateTensorInfo(real3);
      webglBackend.disposeIntermediateTensorInfo(imag2);
      return complexOutput;
    }
    const $dtype = dtype || upcastType(a.dtype, b.dtype);
    if ((a.dtype === "string" || b.dtype === "string" || webglBackend.shouldExecuteOnCPU([a, b])) && cpuKernelImpl != null) {
      const aVals = webglBackend.texData.get(a.dataId).values;
      const bVals = webglBackend.texData.get(b.dataId).values;
      const decodedAVals = a.dtype === "string" ? (
        // tslint:disable-next-line: no-any
        backend_util_exports.fromUint8ToStringArray(aVals)
      ) : aVals;
      const decodedBVals = a.dtype === "string" ? (
        // tslint:disable-next-line: no-any
        backend_util_exports.fromUint8ToStringArray(bVals)
      ) : bVals;
      const [outValues, outShape] = cpuKernelImpl(a.shape, b.shape, decodedAVals, decodedBVals, $dtype);
      const out = webglBackend.makeTensorInfo(outShape, $dtype);
      const outData = webglBackend.texData.get(out.dataId);
      outData.values = outValues;
      return out;
    }
    const shouldUsePackedProgram = env().getBool("WEBGL_PACK_BINARY_OPERATIONS") && packedOpSnippet != null;
    let program;
    if (shouldUsePackedProgram) {
      program = new BinaryOpPackedProgram(packedOpSnippet, a.shape, b.shape, checkOutOfBounds);
    } else {
      program = new BinaryOpProgram(opSnippet, a.shape, b.shape);
    }
    return webglBackend.runWebGLProgram(program, [a, b], $dtype);
  };
}
function mapActivationToShaderProgram(activation, packed = false) {
  if (activation === "linear") {
    if (packed) {
      return LINEAR2;
    }
    return LINEAR;
  } else if (activation === "relu") {
    if (packed) {
      return RELU2;
    }
    return RELU;
  } else if (activation === "elu") {
    if (packed) {
      return ELU2;
    }
    return ELU;
  } else if (activation === "relu6") {
    if (packed) {
      return RELU62;
    }
    return RELU6;
  } else if (activation === "prelu") {
    if (packed) {
      return PRELU_PACKED;
    }
    return PRELU;
  } else if (activation === "leakyrelu") {
    if (packed) {
      return LEAKYRELU_PACKED;
    }
    return LEAKYRELU;
  } else if (activation === "sigmoid") {
    if (packed) {
      return SIGMOID2;
    }
    return SIGMOID;
  }
  throw new Error(`Activation ${activation} has not been implemented for the WebGL backend.`);
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/mulmat_packed_gpu.js
var MatMulPackedProgram = class {
  constructor(aShape, bShape, outputShape, transposeA = false, transposeB = false, addBias = false, activation = null, hasPreluActivation = false, hasLeakyreluActivation = false) {
    this.variableNames = ["matrixA", "matrixB"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const sharedDim = transposeA ? aShape[1] : aShape[2];
    const sharedDimensionPacked = Math.ceil(sharedDim / 2);
    const aSample = transposeA ? "i * 2, rc.y" : "rc.y, i * 2";
    const bSample = transposeB ? "rc.z, i * 2" : "i * 2, rc.z";
    const aSwizzle = transposeA ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"];
    const bSwizzle = transposeB ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"];
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivation) {
        activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
      } else if (hasLeakyreluActivation) {
        activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${activation}
        }`;
      } else {
        activationSnippet = `vec4 activation(vec4 x) {
          ${activation}
        }`;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyreluActivation) {
      this.variableNames.push("leakyreluAlpha");
    }
    let batchASnippet = "rc.x";
    let batchBSnippet = "rc.x";
    if (aShape[0] < bShape[0]) {
      batchASnippet = `imod(rc.x, ${aShape[0]})`;
    } else if (bShape[0] < aShape[0]) {
      batchBSnippet = `imod(rc.x, ${bShape[0]})`;
    }
    this.userCode = `
      ${activationSnippet}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${sharedDimensionPacked}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${batchASnippet};
        int batchB = ${batchBSnippet};
        for (int i = 0; i < ${sharedDimensionPacked}; i++) {
          vec4 a = getMatrixA(batchA, ${aSample});
          vec4 b = getMatrixB(batchB, ${bSample});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${aSwizzle[0]} * ${bSwizzle[0]});
          result += (${aSwizzle[1]} * ${bSwizzle[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${addBiasSnippet}

        ${applyActivationSnippet}

        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/binaryop_complex_gpu.js
var COMPLEX_MULTIPLY = {
  REAL: "return areal * breal - aimag * bimag;",
  IMAG: "return areal * bimag + aimag * breal;"
};
var BinaryOpComplexProgram = class {
  constructor(op, aShape, bShape) {
    this.variableNames = ["AReal", "AImag", "BReal", "BImag"];
    this.outputShape = backend_util_exports.assertAndGetBroadcastShape(aShape, bShape);
    this.userCode = `
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${op}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply.js
var MUL = "return a * b;";
function multiply2(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    a,
    b
  } = inputs;
  const dtype = backend_util_exports.upcastType(a.dtype, b.dtype);
  if (a.dtype === "complex64") {
    const aData = backend.texData.get(a.dataId);
    const bData = backend.texData.get(b.dataId);
    const realProgram = new BinaryOpComplexProgram(COMPLEX_MULTIPLY.REAL, a.shape, b.shape);
    const imagProgram = new BinaryOpComplexProgram(COMPLEX_MULTIPLY.IMAG, a.shape, b.shape);
    const inputs2 = [{
      dataId: aData.complexTensorInfos.real.dataId,
      dtype: aData.complexTensorInfos.real.dtype,
      shape: a.shape
    }, {
      dataId: aData.complexTensorInfos.imag.dataId,
      dtype: aData.complexTensorInfos.imag.dtype,
      shape: a.shape
    }, {
      dataId: bData.complexTensorInfos.real.dataId,
      dtype: bData.complexTensorInfos.real.dtype,
      shape: b.shape
    }, {
      dataId: bData.complexTensorInfos.imag.dataId,
      dtype: bData.complexTensorInfos.imag.dtype,
      shape: b.shape
    }];
    const realPart = backend.runWebGLProgram(realProgram, inputs2, "float32");
    const imagPart = backend.runWebGLProgram(imagProgram, inputs2, "float32");
    const complexOutput = complex2({
      inputs: {
        real: realPart,
        imag: imagPart
      },
      backend
    });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(imagPart);
    return complexOutput;
  }
  if (backend.shouldExecuteOnCPU([a, b])) {
    const aData = backend.texData.get(a.dataId);
    const bData = backend.texData.get(b.dataId);
    const [outValues, outShape] = multiplyImplCPU(a.shape, b.shape, aData.values, bData.values, dtype);
    const out = backend.makeTensorInfo(outShape, dtype);
    const outData = backend.texData.get(out.dataId);
    outData.values = outValues;
    return out;
  }
  let program;
  if (env().getBool("WEBGL_PACK_BINARY_OPERATIONS")) {
    program = new BinaryOpPackedProgram(MUL, a.shape, b.shape);
  } else {
    program = new BinaryOpProgram(MUL, a.shape, b.shape);
  }
  return backend.runWebGLProgram(program, [a, b], dtype);
}
var multiplyConfig2 = {
  kernelName: Multiply,
  backendName: "webgl",
  kernelFunc: multiply2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reshape.js
function packedReshape(input, afterShape, backend) {
  const input3DShape = [getBatchDim(input.shape), ...getRowsCols(input.shape)];
  const input3D = {
    dtype: input.dtype,
    shape: input3DShape,
    dataId: input.dataId
  };
  const afterShapeAs3D = [getBatchDim(afterShape), ...getRowsCols(afterShape)];
  const program = new ReshapePackedProgram(afterShapeAs3D, input3DShape);
  const preventEagerUnpackingOfOutput = true;
  const customValues = [input3DShape];
  const output = backend.runWebGLProgram(program, [input3D], input.dtype, customValues, preventEagerUnpackingOfOutput);
  return {
    dataId: output.dataId,
    shape: afterShape,
    dtype: output.dtype
  };
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js
function reshape2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    shape
  } = attrs;
  const webglBackend = backend;
  const xSize = util_exports.sizeFromShape(x.shape);
  const $shape = util_exports.inferFromImplicitShape(shape, xSize);
  const $xSize = util_exports.sizeFromShape($shape);
  util_exports.assert(xSize === $xSize, () => `The new shape (${$shape}) has ${$xSize} elements and the old shape (${x.shape}) has ${xSize} elements. The new shape and old shape must have the same number of elements.`);
  const xTexData = webglBackend.texData.get(x.dataId);
  if (xTexData.isPacked && !isReshapeFree(x.shape, $shape) && !(xTexData.texture !== null && isReshapeFree(xTexData.shape, $shape))) {
    return packedReshape(x, $shape, webglBackend);
  }
  webglBackend.incRef(x.dataId);
  return {
    dataId: x.dataId,
    shape: $shape,
    dtype: x.dtype
  };
}
var reshapeConfig = {
  kernelName: Reshape,
  backendName: "webgl",
  kernelFunc: reshape2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/mean_gpu.js
var MeanProgram = class {
  constructor(reduceInfo, divisor) {
    this.variableNames = ["x"];
    const {
      windowSize,
      batchSize,
      inSize,
      outSize
    } = reduceInfo;
    this.outputShape = [batchSize, outSize];
    const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
    const windowSizeVec4Remainder = windowSize % 4;
    let updateSnippet = `sumValue += dot(values, ones);`;
    if (divisor != null) {
      const denominator = 1 / divisor;
      updateSnippet = `sumValue += dot(values * ${util_exports.isInt(denominator) ? denominator.toPrecision(2) : denominator}, ones);`;
    }
    let checkOutOfBounds = "";
    if (inSize % windowSize > 0) {
      checkOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return 0.0;
        }
      `;
    }
    this.userCode = `
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${checkOutOfBounds}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        float sumValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${updateSnippet}
        }
        setOutput(sumValue);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js
var ReduceProgram = class {
  constructor(reduceInfo, reduceType) {
    this.variableNames = ["x"];
    const {
      windowSize,
      batchSize,
      inSize,
      outSize
    } = reduceInfo;
    this.outputShape = [batchSize, outSize];
    let initializationValue = "0.0";
    let compareOp = ``;
    if (reduceType === "prod") {
      initializationValue = "1.0";
    } else if (reduceType === "min") {
      initializationValue = "1.0 / 1e-20";
      compareOp = `min`;
    } else if (reduceType === "max") {
      initializationValue = "-1.0 / 1e-20";
      compareOp = `max`;
    }
    let returnValue = `${reduceType}(${reduceType}(${reduceType}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;
    if (reduceType === "sum") {
      returnValue = `sumValue`;
    } else if (reduceType === "prod") {
      returnValue = `prodValue`;
    } else if (reduceType === "all") {
      returnValue = `allValue`;
    } else if (reduceType === "any") {
      returnValue = `anyValue`;
    }
    const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
    const windowSizeVec4Remainder = windowSize % 4;
    let updateSnippet = `
      if (${reduceType === "sum"}) {
        sumValue += dot(values, ones);
      } else if (${reduceType === "prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
        if (${reduceType === "min"} || ${reduceType === "max"}) {
          minMaxValue = ${compareOp}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `;
    let vecType = `vec4`;
    if (reduceType === "all") {
      initializationValue = "1.0";
      updateSnippet = `
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `;
      vecType = `bvec4`;
    } else if (reduceType === "any") {
      initializationValue = "0.0";
      updateSnippet = `
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `;
      vecType = `bvec4`;
    }
    let checkOutOfBounds = "";
    if (inSize % windowSize > 0) {
      checkOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return initializationValue;
        }
      `;
    }
    this.userCode = `
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${checkOutOfBounds}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        vec4 minMaxValue = vec4(${initializationValue});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          ${vecType} values = ${vecType}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${updateSnippet}
        }
        setOutput(${returnValue});
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js
function getReductionStages(inShape) {
  const stages = [];
  while (stages.length === 0 || stages[stages.length - 1].outSize !== 1) {
    const outSize = stages.length ? stages[stages.length - 1].outSize : inShape[1];
    const windowSize = backend_util_exports.computeOptimalWindowSize(outSize);
    stages.push({
      inSize: outSize,
      windowSize,
      outSize: Math.ceil(outSize / windowSize)
    });
  }
  return stages;
}
function reduce(x, dtype, reductionType, backend) {
  const reductionStages = getReductionStages(x.shape);
  let result = x;
  for (let i = 0; i < reductionStages.length; i++) {
    const {
      inSize,
      windowSize,
      outSize
    } = reductionStages[i];
    let program;
    let previousResult;
    if (reductionType === "mean") {
      program = i === 0 ? new MeanProgram({
        windowSize,
        inSize,
        batchSize: x.shape[0],
        outSize
      }, inSize) : new MeanProgram({
        windowSize,
        inSize,
        batchSize: x.shape[0],
        outSize
      });
    } else {
      program = new ReduceProgram({
        windowSize,
        inSize,
        batchSize: x.shape[0],
        outSize
      }, reductionType);
    }
    previousResult = result;
    result = backend.runWebGLProgram(program, [result], dtype);
    if (previousResult.dataId !== x.dataId) {
      backend.disposeIntermediateTensorInfo(previousResult);
    }
  }
  return result;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/transpose_gpu.js
var TransposeProgram = class {
  constructor(aShape, newDim) {
    this.variableNames = ["A"];
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[newDim[i]];
    }
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    const dtype = getCoordsDataType(this.rank);
    const switched = getSwitchedCoords(newDim);
    this.userCode = `
    void main() {
      ${dtype} resRC = getOutputCoords();
      setOutput(getA(${switched}));
    }
    `;
  }
};
function getSwitchedCoords(newDim) {
  const rank = newDim.length;
  if (rank > 6) {
    throw Error(`Transpose for rank ${rank} is not yet supported`);
  }
  const originalOrder = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"];
  const switchedCoords = new Array(rank);
  for (let i = 0; i < newDim.length; i++) {
    switchedCoords[newDim[i]] = originalOrder[i];
  }
  return switchedCoords.join();
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/transpose_packed_gpu.js
var TransposePackedProgram = class {
  constructor(aShape, newDim) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[newDim[i]];
    }
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    if (this.rank > 6) {
      throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);
    }
    const dtype = getCoordsDataType(this.rank);
    const outputOrder = getVecChannels("rc", this.rank);
    const switchedOrder = new Array(this.rank);
    for (let i = 0; i < newDim.length; i++) {
      switchedOrder[newDim[i]] = outputOrder[i];
    }
    const innerDims = `vec2(${switchedOrder.slice(-2).join()})`;
    const nextColumn = `++${outputOrder[this.rank - 1]} < ${outputShape[this.rank - 1]}`;
    const getc = `getChannel(getA(${switchedOrder.join()}), ${innerDims})`;
    this.userCode = `
    void main() {
      ${dtype} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${getc};
      if(${nextColumn}) {
        result[1] = ${getc};
      }
      --${outputOrder[this.rank - 1]};
      if(++${outputOrder[this.rank - 2]} < ${outputShape[this.rank - 2]}) {
        result[2] = ${getc};
        if(${nextColumn}) {
          result[3] = ${getc};
        }
      }
      setOutput(result);
    }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js
function transposeImpl2(x, perm, backend) {
  const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new TransposePackedProgram(x.shape, perm) : new TransposeProgram(x.shape, perm);
  return backend.runWebGLProgram(program, [x], x.dtype);
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sum_impl.js
function sumImpl(x, axis, keepDims, backend) {
  const reductionIndices = axis;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(reductionIndices, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  const sumInputIsTransposed = permutedAxes != null;
  let sumInput = x;
  if (sumInputIsTransposed) {
    sumInput = transposeImpl2(x, permutedAxes, backend);
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims("sum", axes, xRank);
  const [sumOutShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(sumInput.shape, axes);
  let outShape = sumOutShape;
  if (keepDims) {
    outShape = backend_util_exports.expandShapeToKeepDim(sumOutShape, origAxes);
  }
  const inSize = util_exports.sizeFromShape(reduceShape);
  const xSize = util_exports.sizeFromShape(x.shape);
  const batchSize = xSize / inSize;
  const reshapedInput = reshape2({
    inputs: {
      x: sumInput
    },
    attrs: {
      shape: [batchSize, inSize]
    },
    backend
  });
  const outType = sumOutType(x.dtype);
  const reduced = reduce(reshapedInput, outType, "sum", backend);
  const out = reshape2({
    inputs: {
      x: reduced
    },
    attrs: {
      shape: outShape
    },
    backend
  });
  backend.disposeIntermediateTensorInfo(reshapedInput);
  backend.disposeIntermediateTensorInfo(reduced);
  if (sumInputIsTransposed) {
    backend.disposeIntermediateTensorInfo(sumInput);
  }
  return out;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sum.js
function sum(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    keepDims
  } = attrs;
  return sumImpl(x, axis, keepDims, backend);
}
var sumConfig = {
  kernelName: Sum,
  backendName: "webgl",
  kernelFunc: sum
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose.js
function transpose2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    perm
  } = attrs;
  const webglBackend = backend;
  const xRank = x.shape.length;
  const newShape = new Array(xRank);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = x.shape[perm[i]];
  }
  let out;
  if (webglBackend.shouldExecuteOnCPU([x])) {
    const xTexData = webglBackend.texData.get(x.dataId);
    const values = xTexData.values;
    const outValues = transposeImplCPU(values, x.shape, x.dtype, perm, newShape);
    out = webglBackend.makeTensorInfo(newShape, x.dtype);
    const outData = webglBackend.texData.get(out.dataId);
    outData.values = outValues;
  } else {
    out = transposeImpl2(x, perm, webglBackend);
  }
  return out;
}
var transposeConfig2 = {
  kernelName: Transpose,
  backendName: "webgl",
  kernelFunc: transpose2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul_impl.js
var MATMUL_SHARED_DIM_THRESHOLD = 1e3;
function batchMatMulImpl({
  a,
  b,
  transposeA,
  transposeB,
  backend,
  bias = null,
  preluActivationWeights = null,
  leakyreluAlpha = 0,
  activation = null
}) {
  const aRank = a.shape.length;
  const bRank = b.shape.length;
  const innerShapeA = transposeA ? a.shape[aRank - 2] : a.shape[aRank - 1];
  const innerShapeB = transposeB ? b.shape[bRank - 1] : b.shape[bRank - 2];
  const outerShapeA = transposeA ? a.shape[aRank - 1] : a.shape[aRank - 2];
  const outerShapeB = transposeB ? b.shape[bRank - 2] : b.shape[bRank - 1];
  const outerDimsA = a.shape.slice(0, -2);
  const outerDimsB = b.shape.slice(0, -2);
  const batchDimA = util_exports.sizeFromShape(outerDimsA);
  const batchDimB = util_exports.sizeFromShape(outerDimsB);
  const outShapeOuterDims = broadcast_util_exports.assertAndGetBroadcastShape(a.shape.slice(0, -2), b.shape.slice(0, -2));
  const outShape = outShapeOuterDims.concat([outerShapeA, outerShapeB]);
  util_exports.assert(innerShapeA === innerShapeB, () => `Error in matMul: inner shapes (${innerShapeA}) and (${innerShapeB}) of Tensors with shapes ${a.shape} and ${b.shape} and transposeA=${transposeA} and transposeB=${transposeB} must match.`);
  const a3dShape = transposeA ? [batchDimA, innerShapeA, outerShapeA] : [batchDimA, outerShapeA, innerShapeA];
  const b3dShape = transposeB ? [batchDimB, outerShapeB, innerShapeB] : [batchDimB, innerShapeB, outerShapeB];
  const a3d = reshape2({
    inputs: {
      x: a
    },
    backend,
    attrs: {
      shape: a3dShape
    }
  });
  const b3d = reshape2({
    inputs: {
      x: b
    },
    backend,
    attrs: {
      shape: b3dShape
    }
  });
  const intermediates = [a3d, b3d];
  const batchDim = Math.max(batchDimA, batchDimB);
  const sharedDim = transposeA ? a3d.shape[1] : a3d.shape[2];
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  const hasLeakyreluAlpha = activation === "leakyrelu";
  const fusedActivation = activation != null ? mapActivationToShaderProgram(activation, true) : null;
  const containsFusedOps = hasBias || hasPreluActivationWeights || hasLeakyreluAlpha || fusedActivation != null;
  let out;
  if ((outerShapeA === 1 || outerShapeB === 1) && sharedDim > MATMUL_SHARED_DIM_THRESHOLD && containsFusedOps === false) {
    let aVec = a3d;
    let bVec = b3d;
    if (transposeA) {
      aVec = transpose2({
        inputs: {
          x: a3d
        },
        backend,
        attrs: {
          perm: [0, 2, 1]
        }
      });
      intermediates.push(aVec);
    }
    if (transposeB) {
      bVec = transpose2({
        inputs: {
          x: b3d
        },
        backend,
        attrs: {
          perm: [0, 2, 1]
        }
      });
      intermediates.push(bVec);
    }
    const shouldReshapeA = outerShapeB !== 1;
    const shouldReshapeB = outerShapeB === 1;
    let aVec3d = aVec;
    if (shouldReshapeA) {
      aVec3d = reshape2({
        inputs: {
          x: aVec
        },
        backend,
        attrs: {
          shape: [batchDim, sharedDim, 1]
        }
      });
      intermediates.push(aVec3d);
    }
    const axis = outerShapeB === 1 ? 2 : 1;
    let bVec3d = bVec;
    if (shouldReshapeB) {
      bVec3d = reshape2({
        inputs: {
          x: bVec
        },
        backend,
        attrs: {
          shape: [batchDim, 1, sharedDim]
        }
      });
      intermediates.push(bVec3d);
    }
    const product = multiply2({
      inputs: {
        a: aVec3d,
        b: bVec3d
      },
      backend
    });
    out = sum({
      inputs: {
        x: product
      },
      backend,
      attrs: {
        axis,
        keepDims: true
      }
    });
    intermediates.push(product);
  } else {
    const dtype = upcastType(a.dtype, b.dtype);
    const program = new MatMulPackedProgram(a3dShape, b3dShape, [batchDim, outerShapeA, outerShapeB], transposeA, transposeB, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
    const inputs = [a3d, b3d];
    if (bias != null) {
      inputs.push(bias);
    }
    if (hasPreluActivationWeights) {
      inputs.push(preluActivationWeights);
    }
    if (hasLeakyreluAlpha) {
      const $leakyreluAlpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(leakyreluAlpha, "float32"));
      inputs.push($leakyreluAlpha);
      intermediates.push($leakyreluAlpha);
    }
    out = backend.runWebGLProgram(program, inputs, dtype);
  }
  const outReshaped = reshape2({
    inputs: {
      x: out
    },
    backend,
    attrs: {
      shape: outShape
    }
  });
  intermediates.push(out);
  for (const i of intermediates) {
    backend.disposeIntermediateTensorInfo(i);
  }
  return outReshaped;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/_FusedMatMul.js
function _fusedMatMul(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    a,
    b,
    bias,
    preluActivationWeights
  } = inputs;
  const {
    transposeA,
    transposeB,
    activation,
    leakyreluAlpha
  } = attrs;
  return batchMatMulImpl({
    a,
    b,
    transposeA,
    transposeB,
    backend,
    bias,
    preluActivationWeights,
    leakyreluAlpha,
    activation
  });
}
var _fusedMatMulConfig = {
  kernelName: _FusedMatMul,
  backendName: "webgl",
  kernelFunc: _fusedMatMul
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Abs.js
var ABS2 = `return abs(x);`;
function abs2(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  if (backend.shouldExecuteOnCPU([x]) && x.dtype !== "complex64") {
    const xData = backend.texData.get(x.dataId);
    const outValues = simpleAbsImplCPU(xData.values);
    return backend.makeTensorInfo(x.shape, x.dtype, outValues);
  }
  let program;
  if (env().getBool("WEBGL_PACK_UNARY_OPERATIONS")) {
    program = new UnaryOpPackedProgram(x.shape, ABS2);
  } else {
    program = new UnaryOpProgram(x.shape, ABS2);
  }
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var absConfig2 = {
  kernelName: Abs,
  backendName: "webgl",
  kernelFunc: abs2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Acos.js
var ACOS = CHECK_NAN_SNIPPET + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`;
var acos = unaryKernelFunc2({
  opSnippet: ACOS
});
var acosConfig = {
  kernelName: Acos,
  backendName: "webgl",
  kernelFunc: acos
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Acosh.js
var ACOSH = CHECK_NAN_SNIPPET + `
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`;
var acosh = unaryKernelFunc2({
  opSnippet: ACOSH
});
var acoshConfig = {
  kernelName: Acosh,
  backendName: "webgl",
  kernelFunc: acosh
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Add.js
var ADD = "return a + b;";
var addKernelFunc = binaryKernelFunc2({
  opSnippet: ADD,
  packedOpSnippet: ADD,
  supportsComplex: true,
  cpuKernelImpl: addImplCPU
});
var addConfig2 = {
  kernelName: Add,
  backendName: "webgl",
  kernelFunc: addKernelFunc
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/addn_gpu.js
var AddNProgram = class {
  constructor(outputShape, shapes) {
    this.outputShape = [];
    this.outputShape = outputShape;
    this.variableNames = shapes.map((_, i) => `T${i}`);
    const snippets = [];
    this.variableNames.forEach((variable) => {
      snippets.push(`float v${variable} = get${variable}AtOutCoords();`);
    });
    const operation = this.variableNames.map((variable) => {
      return `v${variable}`;
    }).join(" + ");
    this.userCode = `
      void main() {
        ${snippets.join("\n        ")}

        float result = ${operation};
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/addn_packed_gpu.js
var AddNPackedProgram = class {
  constructor(outputShape, shapes) {
    this.outputShape = [];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = outputShape;
    this.variableNames = shapes.map((_, i) => `T${i}`);
    const snippets = [];
    this.variableNames.forEach((variable) => {
      snippets.push(`vec4 v${variable} = get${variable}AtOutCoords();`);
    });
    const operation = this.variableNames.map((variable) => {
      return `v${variable}`;
    }).join(" + ");
    this.userCode = `
      void main() {
        ${snippets.join("\n        ")}

        vec4 result = ${operation};
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AddN.js
function addN(args) {
  const {
    inputs,
    backend
  } = args;
  const tensors = inputs;
  if (tensors.length === 1) {
    return identity2({
      inputs: {
        x: tensors[0]
      },
      backend
    });
  }
  if (tensors.length > env().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
    const midIndex = Math.floor(tensors.length / 2);
    const leftSide = addN({
      inputs: tensors.slice(0, midIndex),
      backend
    });
    const rightSide = addN({
      inputs: tensors.slice(midIndex),
      backend
    });
    return addN({
      inputs: [leftSide, rightSide],
      backend
    });
  }
  const dtype = tensors.map((t) => t.dtype).reduce((d1, d2) => upcastType(d1, d2));
  const shapes = tensors.map((t) => t.shape);
  const usePackedOp = env().getBool("WEBGL_PACK");
  const program = usePackedOp ? new AddNPackedProgram(tensors[0].shape, shapes) : new AddNProgram(tensors[0].shape, shapes);
  return backend.runWebGLProgram(program, tensors, dtype);
}
var addNConfig = {
  kernelName: AddN,
  backendName: "webgl",
  kernelFunc: addN
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/All.js
function all(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    keepDims
  } = attrs;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let permutedX = x;
  if (permutedAxes != null) {
    permutedX = transpose2({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutedAxes
      }
    });
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims("all", axes, xRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, axes);
  const inSize = util_exports.sizeFromShape(reduceShape);
  const a2D = reshape2({
    inputs: {
      x: permutedX
    },
    backend,
    attrs: {
      shape: [-1, inSize]
    }
  });
  const reduced = reduce(a2D, a2D.dtype, "all", backend);
  let res;
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    res = reshape2({
      inputs: {
        x: reduced
      },
      backend,
      attrs: {
        shape: newShape
      }
    });
  } else {
    res = reshape2({
      inputs: {
        x: reduced
      },
      backend,
      attrs: {
        shape: outShape
      }
    });
  }
  backend.disposeIntermediateTensorInfo(a2D);
  backend.disposeIntermediateTensorInfo(reduced);
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo(permutedX);
  }
  return res;
}
var allConfig = {
  kernelName: All,
  backendName: "webgl",
  kernelFunc: all
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Any.js
function any(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    keepDims
  } = attrs;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let permutedX = x;
  if (permutedAxes != null) {
    permutedX = transpose2({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutedAxes
      }
    });
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims("any", axes, xRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, axes);
  const inSize = util_exports.sizeFromShape(reduceShape);
  const a2D = reshape2({
    inputs: {
      x: permutedX
    },
    backend,
    attrs: {
      shape: [-1, inSize]
    }
  });
  const reduced = reduce(a2D, a2D.dtype, "any", backend);
  let res;
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    res = reshape2({
      inputs: {
        x: reduced
      },
      backend,
      attrs: {
        shape: newShape
      }
    });
  } else {
    res = reshape2({
      inputs: {
        x: reduced
      },
      backend,
      attrs: {
        shape: outShape
      }
    });
  }
  backend.disposeIntermediateTensorInfo(a2D);
  backend.disposeIntermediateTensorInfo(reduced);
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo(permutedX);
  }
  return res;
}
var anyConfig = {
  kernelName: Any,
  backendName: "webgl",
  kernelFunc: any
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/argminmax_gpu.js
var ArgMinMaxProgram = class {
  constructor(reduceInfo, op, firstPass) {
    this.variableNames = ["A"];
    const {
      windowSize,
      batchSize,
      outSize
    } = reduceInfo;
    if (!firstPass) {
      this.variableNames.push("bestIndicesA");
    }
    this.outputShape = [batchSize, outSize];
    const compOp = op === "max" ? ">" : "<";
    const indexSnippet = firstPass ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${windowSize};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${windowSize}; i++) {
          int inIdx = ${indexSnippet};
          float candidate = getA(batch, inIdx);
          if (candidate ${compOp} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/argminmax_packed_gpu.js
var ArgMinMaxPackedProgram = class {
  constructor(shape, windowSize, op, firstPass) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    util_exports.assert(shape.length > 2, () => `Packed arg${op.charAt(0).toUpperCase() + op.slice(1)} supports only inputs with rank above 2.`);
    const inSize = shape[shape.length - 1];
    const outSize = Math.ceil(inSize / windowSize);
    this.outputShape = shape.slice(0, -1);
    if (outSize > 1) {
      this.outputShape.push(outSize);
    }
    if (!firstPass) {
      this.variableNames.push("bestIndicesA");
    }
    const outShape = this.outputShape;
    const rank = outShape.length;
    const dtype = getCoordsDataType(rank);
    const coords2 = getChannels("coords", rank);
    let sourceLocSetup;
    let sourceRank;
    if (outSize === 1) {
      sourceRank = rank + 1;
      const sourceLocDType = getCoordsDataType(sourceRank);
      sourceLocSetup = `
        ${sourceLocDType} sourceLocR = ${sourceLocDType}(${coords2.join()}, 0);
        ++${coords2[rank - 1]};
        ${sourceLocDType} sourceLocG = ${sourceLocDType}(${coords2.join()}, 0);
        ++${coords2[rank - 2]};
        ${sourceLocDType} sourceLocA = ${sourceLocDType}(${coords2.join()}, 0);
        --${coords2[rank - 1]};
        ${sourceLocDType} sourceLocB = ${sourceLocDType}(${coords2.join()}, 0);
        --${coords2[rank - 2]};`;
    } else {
      sourceRank = rank;
      sourceLocSetup = `
        ${dtype} sourceLocR = coords;
        ++${coords2[rank - 1]};
        ${dtype} sourceLocG = coords;
        ++${coords2[rank - 2]};
        ${dtype} sourceLocA = coords;
        --${coords2[rank - 1]};
        ${dtype} sourceLocB = coords;
        --${coords2[rank - 2]};`;
    }
    const channels = ["x", "y", "z", "w", "u", "v"].slice(0, sourceRank);
    const inChannel = "." + channels[sourceRank - 1];
    const intChannels = channels.map((x) => "int " + x);
    const srcRCoords = getChannels("sourceLocR", sourceRank - 1).concat("inIdx.r");
    const srcGCoords = getChannels("sourceLocG", sourceRank - 1).concat("inIdx.g");
    const srcBCoords = getChannels("sourceLocB", sourceRank - 1).concat("inIdx.b");
    const srcACoords = getChannels("sourceLocA", sourceRank - 1).concat("inIdx.a");
    const compOp = op === "max" ? "greaterThan" : "lessThan";
    const fetchCandidateIdx = firstPass ? "" : `
          inIdx = round(vec4(getBestIndicesAChannel(${srcRCoords.join()}),
                             getBestIndicesAChannel(${srcGCoords.join()}),
                             getBestIndicesAChannel(${srcBCoords.join()}),
                             getBestIndicesAChannel(${srcACoords.join()})));`;
    const fetchValue = `vec4(
            getAChannel(${srcRCoords.join()}),
            hasNextCol ? getAChannel(${srcGCoords.join()}) : 0.,
            hasNextRow ? getAChannel(${srcBCoords.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${srcACoords.join()}) : 0.)`;
    const getBestIndicesAChannelSnippet = firstPass ? "" : `
      float getBestIndicesAChannel(${intChannels.join()}) {
        return getChannel(getBestIndicesA(${channels.join()}),
                                          vec2(${channels.slice(-2).join()}));
      }`;
    this.userCode = `
      float getAChannel(${intChannels.join()}) {
        return getChannel(getA(${channels.join()}),
                               vec2(${channels.slice(-2).join()}));
      }
      ${getBestIndicesAChannelSnippet}
      void main() {
        ${dtype} coords = getOutputCoords();
        bool hasNextCol = ${coords2[rank - 1]} < ${outShape[rank - 1] - 1};
        bool hasNextRow = ${coords2[rank - 2]} < ${outShape[rank - 2] - 1};
        ${sourceLocSetup}
        ivec4 srcIdx = ivec4(sourceLocR${inChannel}, sourceLocG${inChannel},
          sourceLocB${inChannel}, sourceLocA${inChannel}) * ${windowSize};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${fetchValue};

        for (int i = 0; i < ${windowSize}; i++) {
          inIdx = srcIdx;
          ${fetchCandidateIdx}
          vec4 candidate = ${fetchValue};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${compOp}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/arg_min_max.js
function argReduce(backend, x, reduceType, bestIndicesA = null) {
  let batchSize = x.shape[0];
  let inSize = x.shape[1];
  if (bestIndicesA != null) {
    batchSize = bestIndicesA.shape[0];
    inSize = bestIndicesA.shape[1];
  }
  const windowSize = backend_util_exports.computeOptimalWindowSize(inSize);
  const reduceInfo = {
    windowSize,
    inSize,
    batchSize,
    outSize: Math.ceil(inSize / windowSize)
  };
  const program = new ArgMinMaxProgram(reduceInfo, reduceType, bestIndicesA == null);
  const inputs = [x];
  if (bestIndicesA != null) {
    inputs.push(bestIndicesA);
  }
  const output = backend.runWebGLProgram(program, inputs, "int32");
  if (output.shape[1] === 1) {
    return output;
  }
  const result = argReduce(backend, x, reduceType, output);
  backend.disposeIntermediateTensorInfo(output);
  return result;
}
function argReducePacked(backend, x, reduceType, bestIndicesA = null) {
  const inShape = bestIndicesA != null ? bestIndicesA.shape : x.shape;
  const inSize = inShape[inShape.length - 1];
  const windowSize = backend_util_exports.computeOptimalWindowSize(inSize);
  const program = new ArgMinMaxPackedProgram(inShape, windowSize, reduceType, bestIndicesA == null);
  const inputs = bestIndicesA == null ? [x] : [x, bestIndicesA];
  const output = backend.runWebGLProgram(program, inputs, "int32");
  if (output.shape.length === x.shape.length) {
    const result = argReducePacked(backend, x, reduceType, output);
    backend.disposeIntermediateTensorInfo(output);
    return result;
  }
  return output;
}
function argMinMaxReduce(backend, x, axis, reduceType) {
  const axes = [axis];
  backend_util_exports.assertAxesAreInnerMostDims("arg" + reduceType.charAt(0).toUpperCase() + reduceType.slice(1), axes, x.shape.length);
  if (!env().getBool("WEBGL_PACK_REDUCE") || x.shape.length <= 2) {
    const intermediateTensorInfos = [];
    const xtexData = backend.texData.get(x.dataId);
    const xIsPacked = xtexData !== null && xtexData.isPacked;
    let xUnPacked = x;
    if (xIsPacked) {
      xUnPacked = backend.unpackTensor(x);
      intermediateTensorInfos.push(xUnPacked);
    }
    const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(xUnPacked.shape, axes);
    const inSize = util_exports.sizeFromShape(reduceShape);
    const a2D = reshape2({
      inputs: {
        x: xUnPacked
      },
      backend,
      attrs: {
        shape: [-1, inSize]
      }
    });
    intermediateTensorInfos.push(a2D);
    const reduced = argReduce(backend, a2D, reduceType);
    intermediateTensorInfos.push(reduced);
    const reshaped = reshape2({
      inputs: {
        x: reduced
      },
      backend,
      attrs: {
        shape: outShape
      }
    });
    intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
    return reshaped;
  }
  return argReducePacked(backend, x, reduceType);
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMax.js
function argMax(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis
  } = attrs;
  let axes = util_exports.parseAxisParam(axis, x.shape);
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  const intermediateTensorInfos = [];
  if (permutedAxes != null) {
    $x = transpose2({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutedAxes
      }
    });
    intermediateTensorInfos.push($x);
    axes = backend_util_exports.getInnerMostAxes(axes.length, $x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("argMax", [axes[0]], $x.shape.length);
  const out = argMinMaxReduce(backend, $x, axes[0], "max");
  intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return out;
}
var argMaxConfig = {
  kernelName: ArgMax,
  backendName: "webgl",
  kernelFunc: argMax
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMin.js
function argMin(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis
  } = attrs;
  let axes = util_exports.parseAxisParam(axis, x.shape);
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, x.shape.length);
  let $x = x;
  const intermediateTensorInfos = [];
  if (permutedAxes != null) {
    $x = transpose2({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutedAxes
      }
    });
    intermediateTensorInfos.push($x);
    axes = backend_util_exports.getInnerMostAxes(axes.length, $x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("argMin", [axes[0]], $x.shape.length);
  const out = argMinMaxReduce(backend, $x, axes[0], "min");
  intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return out;
}
var argMinConfig = {
  kernelName: ArgMin,
  backendName: "webgl",
  kernelFunc: argMin
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Asin.js
var ASIN = CHECK_NAN_SNIPPET + `
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`;
var asin = unaryKernelFunc2({
  opSnippet: ASIN
});
var asinConfig = {
  kernelName: Asin,
  backendName: "webgl",
  kernelFunc: asin
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Asinh.js
var ASINH = CHECK_NAN_SNIPPET + `return log(x + sqrt(x * x + 1.0));`;
var asinh = unaryKernelFunc2({
  opSnippet: ASINH
});
var asinhConfig = {
  kernelName: Asinh,
  backendName: "webgl",
  kernelFunc: asinh
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Atan.js
var ATAN = CHECK_NAN_SNIPPET + `
  return atan(x);
`;
var atan = unaryKernelFunc2({
  opSnippet: ATAN
});
var atanConfig = {
  kernelName: Atan,
  backendName: "webgl",
  kernelFunc: atan
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Atan2.js
var ATAN2 = CHECK_NAN_SNIPPET2 + `
  return atan(a, b);
`;
var ATAN2_PACKED = `
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  ` + CHECK_NAN_SNIPPET_PACKED + `
  return result;
`;
var atan2 = binaryKernelFunc2({
  opSnippet: ATAN2,
  packedOpSnippet: ATAN2_PACKED
});
var atan2Config = {
  kernelName: Atan2,
  backendName: "webgl",
  kernelFunc: atan2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Atanh.js
var ATANH = CHECK_NAN_SNIPPET + `
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`;
var atanh = unaryKernelFunc2({
  opSnippet: ATANH
});
var atanhConfig = {
  kernelName: Atanh,
  backendName: "webgl",
  kernelFunc: atanh
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js
var Pool2DProgram = class {
  constructor(convInfo, poolType, computePositions, flattenPositions = false, includeBatchInIndex = false) {
    this.variableNames = ["x"];
    if (poolType === "avg" && computePositions) {
      throw new Error("Cannot compute positions for average pool.");
    }
    const filterWidth = convInfo.filterWidth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    this.outputShape = convInfo.outShape;
    const isAvgPool = poolType === "avg";
    const batchFlattenPositionStr = `((batch  * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + d`;
    const flattenPositionStr = `(xR * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + d`;
    let initializationValue = "0.0";
    if (!isAvgPool) {
      initializationValue = "-1.0 / 1e-20";
    }
    if (computePositions) {
      const compareOp2 = ">=";
      this.userCode = `
        const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
        const ivec2 pads = ivec2(${padTop}, ${padLeft});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${compareOp2} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${flattenPositions ? includeBatchInIndex ? batchFlattenPositionStr : flattenPositionStr : `wR * ${effectiveFilterWidth} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;
      return;
    }
    const compareOp = "max";
    let returnValue = `${poolType}(${poolType}(${poolType}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;
    if (poolType === "avg") {
      returnValue = `avgValue / max(count, 1.0)`;
    }
    const filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
    const filterWidthVec4Remainder = filterWidth % 4;
    const updateSnippet = `
      if (${isAvgPool}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
      }
    `;
    this.userCode = `
      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${convInfo.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${initializationValue});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${convInfo.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidthNearestVec4}; wC += 4) {
            int xC = xCCorner + wC * ${dilationWidth};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              getValue(batch, xR, xC + 2 * ${dilationWidth}, d),
              getValue(batch, xR, xC + 3 * ${dilationWidth}, d)
            );

            ${updateSnippet}
          }

          int xC = xCCorner + ${filterWidthNearestVec4};
          if (${filterWidthVec4Remainder === 1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${updateSnippet}
          } else if (${filterWidthVec4Remainder === 2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              initializationValue,
              initializationValue
            );

            ${updateSnippet}
          } else if (${filterWidthVec4Remainder === 3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${dilationWidth}, d),
              getValue(batch, xR, xC + 2 * ${dilationWidth}, d),
              initializationValue
            );

            ${updateSnippet}
          }
        }
        setOutput(${returnValue});
      }
    `;
  }
};
var Pool3DProgram = class {
  constructor(convInfo, poolType, computePositions, flattenPositions = false, includeBatchInIndex = false) {
    this.variableNames = ["x"];
    if (poolType === "avg" && computePositions) {
      throw new Error("Cannot compute positions for average pool.");
    }
    const filterWidth = convInfo.filterWidth;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterDepth = convInfo.effectiveFilterDepth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padFront = convInfo.padInfo.front;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    this.outputShape = convInfo.outShape;
    const isAvgPool = poolType === "avg";
    let initializationValue = "0.0";
    if (!isAvgPool) {
      initializationValue = "-1.0 / 1e-20";
    }
    if (computePositions) {
      const compareOp2 = ">=";
      this.userCode = `
        const ivec3 strides =
            ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
        const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${effectiveFilterDepth};
              wD += ${dilationDepth}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${convInfo.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${effectiveFilterHeight};
                wR += ${dilationHeight}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${convInfo.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${effectiveFilterWidth};
                  wC += ${dilationWidth}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${convInfo.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${compareOp2} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${flattenPositions ? includeBatchInIndex ? `(((batch * ${convInfo.inDepth} + xD) * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + ch` : `((xD * ${convInfo.inHeight} + xR) * ${convInfo.inWidth} + xC) * ${convInfo.inChannels} + ch` : `wD * ${effectiveFilterHeight} * ${effectiveFilterWidth} +
                      wR * ${effectiveFilterWidth} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;
      return;
    }
    const compareOp = "max";
    let returnValue = `${poolType}(${poolType}(${poolType}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;
    if (poolType === "avg") {
      returnValue = `avgValue / max(count, 1.0)`;
    }
    const filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
    const filterWidthVec4Remainder = filterWidth % 4;
    const updateSnippet = `
      if (${isAvgPool}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${compareOp}(values, minMaxValue);
      }
    `;
    this.userCode = `
      const ivec3 strides =
        ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});
      const float initializationValue = ${initializationValue};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${convInfo.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${initializationValue});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
            wD += ${dilationDepth}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${convInfo.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${filterWidthNearestVec4}; wC += 4) {
              int xC = xCCorner + wC * ${dilationWidth};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 2 * ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 3 * ${dilationWidth}, ch)
              );

              ${updateSnippet}
            }

            int xC = xCCorner + ${filterWidthNearestVec4};
            if (${filterWidthVec4Remainder === 1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${updateSnippet}
            } else if (${filterWidthVec4Remainder === 2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                initializationValue,
                initializationValue
              );

              ${updateSnippet}
            } else if (${filterWidthVec4Remainder === 3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${dilationWidth}, ch),
                getValue(batch, xD, xR, xC + 2 * ${dilationWidth}, ch),
                initializationValue
              );

              ${updateSnippet}
            }
          }
        }
        setOutput(${returnValue});
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool.js
function avgPool(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  assertNotComplex(x, "avgPool");
  const {
    filterSize,
    strides,
    pad,
    dimRoundingMode
  } = attrs;
  const dilations = 1;
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in avgPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
  if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 && util_exports.arraysEqual(convInfo.inShape, convInfo.outShape)) {
    return identity2({
      inputs: {
        x
      },
      backend
    });
  }
  const avgPoolProgram = new Pool2DProgram(convInfo, "avg", false);
  return backend.runWebGLProgram(avgPoolProgram, [x], "float32");
}
var avgPoolConfig = {
  kernelName: AvgPool,
  backendName: "webgl",
  kernelFunc: avgPool
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3D.js
function avgPool3D(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    filterSize,
    strides,
    pad,
    dimRoundingMode,
    dataFormat
  } = attrs;
  const dilations = [1, 1, 1];
  const convInfo = backend_util_exports.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode, dataFormat);
  const avgPoolProgram = new Pool3DProgram(convInfo, "avg", false);
  return backend.runWebGLProgram(avgPoolProgram, [x], "float32");
}
var avgPool3DConfig = {
  kernelName: AvgPool3D,
  backendName: "webgl",
  kernelFunc: avgPool3D
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js
var AvgPool2DBackpropProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy"];
    this.outputShape = convInfo.inShape;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
    const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
    const avgMultiplier = 1 / (filterHeight * filterWidth);
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});
      const float avgMultiplier = float(${avgMultiplier});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${effectiveFilterHeight};
            wR += ${dilationHeight}) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${effectiveFilterWidth};
            wC+= ${dilationWidth}) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var AvgPool3DBackpropProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy"];
    this.outputShape = convInfo.inShape;
    const filterDepth = convInfo.filterDepth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterDepth = convInfo.effectiveFilterDepth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
    const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
    const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
    const avgMultiplier = 1 / (filterDepth * filterHeight * filterWidth);
    this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});
      const float avgMultiplier = float(${avgMultiplier});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
            wD += ${dilationDepth}) {
          float dyD = float(dyDCorner + wD) / ${strideDepth}.0;

          if (dyD < 0.0 || dyD >= ${convInfo.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3DGrad.js
function avgPool3DGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    input
  } = inputs;
  const x = input;
  const {
    filterSize,
    strides,
    pad,
    dimRoundingMode
  } = attrs;
  const dilations = [1, 1, 1];
  const convInfo = backend_util_exports.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
  const avgPoolBackpropProgram = new AvgPool3DBackpropProgram(convInfo);
  return backend.runWebGLProgram(avgPoolBackpropProgram, [dy], x.dtype);
}
var avgPool3DGradConfig = {
  kernelName: AvgPool3DGrad,
  backendName: "webgl",
  kernelFunc: avgPool3DGrad
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPoolGrad.js
function avgPoolGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    input
  } = inputs;
  const x = input;
  assertNotComplex([dy, input], "avgPoolGrad");
  const {
    filterSize,
    strides,
    pad
  } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, 1, pad);
  const avgPoolBackpropProgram = new AvgPool2DBackpropProgram(convInfo);
  return backend.runWebGLProgram(avgPoolBackpropProgram, [dy], x.dtype);
}
var avgPoolGradConfig = {
  kernelName: AvgPoolGrad,
  backendName: "webgl",
  kernelFunc: avgPoolGrad
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul.js
function batchMatMul(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    a,
    b
  } = inputs;
  const {
    transposeA,
    transposeB
  } = attrs;
  return batchMatMulImpl({
    a,
    b,
    transposeA,
    transposeB,
    backend
  });
}
var batchMatMulConfig = {
  kernelName: BatchMatMul,
  backendName: "webgl",
  kernelFunc: batchMatMul
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/batchnorm_gpu.js
var BatchNormProgram = class {
  constructor(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
    this.outputShape = [];
    this.variableNames = ["x", "mean", "variance"];
    backend_util_exports.assertAndGetBroadcastShape(xShape, meanShape);
    backend_util_exports.assertAndGetBroadcastShape(xShape, varianceShape);
    let offsetSnippet = "0.0";
    if (offsetShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, offsetShape);
      this.variableNames.push("offset");
      offsetSnippet = "getOffsetAtOutCoords()";
    }
    let scaleSnippet = "1.0";
    if (scaleShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, scaleShape);
      this.variableNames.push("scale");
      scaleSnippet = "getScaleAtOutCoords()";
    }
    this.outputShape = xShape;
    this.userCode = `
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${offsetSnippet};
        float scale = ${scaleSnippet};
        float inv = scale * inversesqrt(variance + float(${varianceEpsilon}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/batchnorm_packed_gpu.js
var BatchNormPackedProgram = class {
  constructor(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
    this.packedInputs = true;
    this.packedOutput = true;
    this.variableNames = ["x", "mean", "variance"];
    backend_util_exports.assertAndGetBroadcastShape(xShape, meanShape);
    backend_util_exports.assertAndGetBroadcastShape(xShape, varianceShape);
    let offsetSnippet = "vec4(0.0)";
    if (offsetShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, offsetShape);
      this.variableNames.push("offset");
      offsetSnippet = "getOffsetAtOutCoords()";
    }
    let scaleSnippet = "vec4(1.0)";
    if (scaleShape != null) {
      backend_util_exports.assertAndGetBroadcastShape(xShape, scaleShape);
      this.variableNames.push("scale");
      scaleSnippet = "getScaleAtOutCoords()";
    }
    this.outputShape = xShape;
    this.userCode = `
      void main() {
        vec4 offset = ${offsetSnippet};
        vec4 scale = ${scaleSnippet};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${varianceEpsilon}));

        setOutput((x - mean) * inv + offset);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BatchNorm.js
var batchNorm = ({
  inputs,
  backend,
  attrs
}) => {
  const {
    x,
    mean,
    variance,
    offset,
    scale
  } = inputs;
  util_exports.assert(mean.shape.length === variance.shape.length, () => "Batch normalization gradient requires mean and variance to have equal ranks.");
  util_exports.assert(offset == null || mean.shape.length === offset.shape.length, () => "Batch normalization gradient requires mean and offset to have equal ranks.");
  util_exports.assert(scale == null || mean.shape.length === scale.shape.length, () => "Batch normalization gradient requires mean and scale to have equal ranks.");
  let {
    varianceEpsilon
  } = attrs;
  if (varianceEpsilon == null) {
    varianceEpsilon = 1e-3;
  }
  const finalInputs = [x, mean, variance];
  let offsetShape = null;
  if (offset != null) {
    offsetShape = offset.shape;
    finalInputs.push(offset);
  }
  let scaleShape = null;
  if (scale != null) {
    scaleShape = scale.shape;
    finalInputs.push(scale);
  }
  const program = env().getBool("WEBGL_PACK_NORMALIZATION") ? new BatchNormPackedProgram(x.shape, mean.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon) : new BatchNormProgram(x.shape, mean.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon);
  const output = backend.runWebGLProgram(program, finalInputs, finalInputs[0].dtype);
  return output;
};
var batchNormConfig = {
  kernelName: FusedBatchNorm,
  backendName: "webgl",
  kernelFunc: batchNorm
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/slice_gpu.js
var SliceProgram = class {
  constructor(destSize) {
    this.variableNames = ["source"];
    this.outputShape = destSize;
    this.rank = destSize.length;
    const dtype = getCoordsDataType(this.rank);
    this.customUniforms = [{
      name: "start",
      arrayIndex: this.rank,
      type: "int"
    }];
    const sourceCoords = getCoords(this.rank);
    let body;
    const coordSum = destSize.map((_, i) => {
      return `sourceLoc.${coords[i]} = start[${i}] + coords.${coords[i]};`;
    });
    body = `
        ${dtype} sourceLoc;
        ${dtype} coords = getOutputCoords();
        ${coordSum.join("\n")}
      `;
    this.userCode = `
      void main() {
        ${body}
        setOutput(getSource(${sourceCoords}));
      }
    `;
  }
};
var coords = ["x", "y", "z", "w", "u", "v"];
function getCoords(rank) {
  if (rank === 1) {
    return "sourceLoc";
  } else if (rank <= 6) {
    return coords.slice(0, rank).map((x) => "sourceLoc." + x).join(",");
  } else {
    throw Error(`Slicing for rank ${rank} is not yet supported`);
  }
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/slice_packed_gpu.js
var SlicePackedProgram = class {
  constructor(destSize) {
    this.variableNames = ["source"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = destSize;
    this.rank = destSize.length;
    this.customUniforms = [{
      name: "start",
      arrayIndex: this.rank,
      type: "int"
    }];
    const dtype = getCoordsDataType(this.rank);
    const coords2 = getChannels("coords", this.rank);
    const sourceLoc = getChannels("sourceLoc", this.rank);
    const innerDims = this.rank === 1 ? "sourceLoc" : `vec2(${sourceLoc.slice(-2).join()})`;
    const getChannel = `getChannel(getSource(${sourceLoc.join()}), ${innerDims})`;
    const upperRow = `
      result.x = ${getChannel};
      if (++${coords2[this.rank - 1]} < ${destSize[this.rank - 1]}) {
        ++${sourceLoc[this.rank - 1]};
        result.y = ${getChannel};
        --${sourceLoc[this.rank - 1]};
      }
    `;
    const lowerRow = this.rank === 1 ? "" : `
      --${coords2[this.rank - 1]};
      if (++${coords2[this.rank - 2]} < ${destSize[this.rank - 2]}) {
        ++${sourceLoc[this.rank - 2]};
        result.z = ${getChannel};
        if (++${coords2[this.rank - 1]} < ${destSize[this.rank - 1]}) {
          ++${sourceLoc[this.rank - 1]};
          result.w = ${getChannel};
        }
      }
    `;
    const sourceLocSetup = this.rank <= 4 ? `sourceLoc = coords +
            ${dtype}(${destSize.map((_, i) => `start[${i}]`).join()});` : destSize.map((_, i) => `${sourceLoc[i]} = ${coords2[i]} + start[${i}];`).join("\n");
    this.userCode = `
      void main() {
        ${dtype} coords = getOutputCoords();
        ${dtype} sourceLoc;
        ${sourceLocSetup}
        vec4 result = vec4(0.);
        ${upperRow}
        ${lowerRow}
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Slice.js
function shallowSlice(x, begin, size, backend) {
  const xTexData = backend.texData.get(x.dataId);
  const t = backend.makeTensorInfo(size, x.dtype);
  const newTexData = backend.texData.get(t.dataId);
  Object.assign(newTexData, xTexData);
  newTexData.refCount = 1;
  newTexData.shape = size;
  newTexData.dtype = x.dtype;
  let flatOffset = slice_util_exports.computeFlatOffset(begin, util_exports.computeStrides(x.shape));
  if (xTexData.slice) {
    flatOffset += xTexData.slice.flatOffset;
  }
  newTexData.slice = {
    flatOffset,
    // Point to the original dataId, which is used to do ref counting.
    origDataId: xTexData.slice && xTexData.slice.origDataId || x.dataId
  };
  const refCount = backend.dataRefCount.get(newTexData.slice.origDataId) || 1;
  backend.dataRefCount.set(newTexData.slice.origDataId, refCount + 1);
  return t;
}
function slice2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    begin,
    size
  } = attrs;
  const [$begin, $size] = slice_util_exports.parseSliceParams(x, begin, size);
  slice_util_exports.assertParamsValid(x, $begin, $size);
  if (util_exports.sizeFromShape($size) === 0) {
    return backend.makeTensorInfo($size, x.dtype, []);
  }
  if (backend.shouldExecuteOnCPU([x]) || x.dtype === "string") {
    const xTexData = backend.texData.get(x.dataId);
    const outValues = sliceImplCPU(xTexData.values, $begin, $size, x.shape, x.dtype);
    return backend.makeTensorInfo($size, x.dtype, outValues);
  }
  const {
    isPacked
  } = backend.texData.get(x.dataId);
  const isContinous = slice_util_exports.isSliceContinous(x.shape, $begin, $size);
  if (isPacked || !isContinous) {
    const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new SlicePackedProgram($size) : new SliceProgram($size);
    const customValues = [$begin];
    return backend.runWebGLProgram(program, [x], x.dtype, customValues);
  }
  backend.uploadToGPU(x.dataId);
  return shallowSlice(x, $begin, $size, backend);
}
var sliceConfig2 = {
  kernelName: Slice,
  backendName: "webgl",
  kernelFunc: slice2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BatchToSpaceND.js
var batchToSpaceND = (args) => {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    blockShape,
    crops
  } = attrs;
  util_exports.assert(x.shape.length <= 4, () => "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");
  const prod3 = blockShape.reduce((a, b) => a * b);
  const reshaped = backend_util_exports.getReshaped(x.shape, blockShape, prod3);
  const permuted = backend_util_exports.getPermuted(reshaped.length, blockShape.length);
  const reshapedPermuted = backend_util_exports.getReshapedPermuted(x.shape, blockShape, prod3);
  const sliceBeginCoords = backend_util_exports.getSliceBeginCoords(crops, blockShape.length);
  const sliceSize = backend_util_exports.getSliceSize(reshapedPermuted, crops, blockShape.length);
  const toDispose = [];
  const reshapedIntermediate = reshape2({
    inputs: {
      x
    },
    backend,
    attrs: {
      shape: reshaped
    }
  });
  const transposedIntermediate = transpose2({
    inputs: {
      x: reshapedIntermediate
    },
    backend,
    attrs: {
      perm: permuted
    }
  });
  const reshapedIntermediate2 = reshape2({
    inputs: {
      x: transposedIntermediate
    },
    backend,
    attrs: {
      shape: reshapedPermuted
    }
  });
  const sliced = slice2({
    inputs: {
      x: reshapedIntermediate2
    },
    backend,
    attrs: {
      begin: sliceBeginCoords,
      size: sliceSize
    }
  });
  toDispose.push(reshapedIntermediate);
  toDispose.push(transposedIntermediate);
  toDispose.push(reshapedIntermediate2);
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return sliced;
};
var batchToSpaceNDConfig = {
  kernelName: BatchToSpaceND,
  backendName: "webgl",
  kernelFunc: batchToSpaceND
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Bincount.js
function bincount(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    weights
  } = inputs;
  const {
    size
  } = attrs;
  const xVals = backend.readSync(x.dataId);
  const weightsVals = backend.readSync(weights.dataId);
  const outVals = bincountImplCPU(xVals, weightsVals, weights.dtype, weights.shape, size);
  return backend.makeTensorInfo([size], weights.dtype, outVals);
}
var bincountConfig = {
  kernelName: Bincount,
  backendName: "webgl",
  kernelFunc: bincount
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BitwiseAnd.js
var BITWISEAND = `
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`;
var BITWISEAND_UNPACKED = `
  return float(int(a.r) & int(b.r));
`;
function bitwiseAnd2(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    a,
    b
  } = inputs;
  const shouldUsePackedProgram = env().getBool("WEBGL_PACK_BINARY_OPERATIONS");
  const versionNumber = env().getNumber("WEBGL_VERSION");
  if (backend.shouldExecuteOnCPU([a, b]) || versionNumber === 1) {
    const aVals = backend.texData.get(a.dataId).values;
    const bVals = backend.texData.get(b.dataId).values;
    const [outValues, outShape] = bitwiseAndImplCPU(a.shape, b.shape, aVals, bVals, a.dtype);
    const out = backend.makeTensorInfo(outShape, a.dtype);
    const outData = backend.texData.get(out.dataId);
    outData.values = outValues;
    return out;
  }
  let program;
  if (shouldUsePackedProgram) {
    program = new BinaryOpPackedProgram(BITWISEAND, a.shape, b.shape, false);
  } else {
    program = new BinaryOpProgram(BITWISEAND_UNPACKED, a.shape, b.shape);
  }
  return backend.runWebGLProgram(program, [a, b], a.dtype);
}
var bitwiseAndConfig2 = {
  kernelName: BitwiseAnd,
  backendName: "webgl",
  kernelFunc: bitwiseAnd2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/BroadcastArgs.js
function broadcastArgs(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    s0,
    s1
  } = inputs;
  const s0Vals = backend.readSync(s0.dataId);
  const s1Vals = backend.readSync(s1.dataId);
  const broadcastShape = backend_util_exports.assertAndGetBroadcastShape(Array.from(s0Vals), Array.from(s1Vals));
  return backend.makeTensorInfo([broadcastShape.length], "int32", Int32Array.from(broadcastShape));
}
var broadcastArgsConfig = {
  kernelName: BroadcastArgs,
  backendName: "webgl",
  kernelFunc: broadcastArgs
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js
var NOT_EQUAL = `return float(a != b);`;
var notEqual2 = binaryKernelFunc2({
  opSnippet: NOT_EQUAL,
  cpuKernelImpl: notEqualImplCPU,
  dtype: "bool"
});
var notEqualConfig2 = {
  kernelName: NotEqual,
  backendName: "webgl",
  kernelFunc: notEqual2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js
function real2(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    input
  } = inputs;
  const inputData = backend.texData.get(input.dataId);
  return identity2({
    inputs: {
      x: inputData.complexTensorInfos.real
    },
    backend
  });
}
var realConfig2 = {
  kernelName: Real,
  backendName: "webgl",
  kernelFunc: real2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernel_utils/int.js
var TO_INT = `return float(int(x));`;
function int(input, backend) {
  const program = new UnaryOpProgram(input.shape, TO_INT);
  const output = backend.runWebGLProgram(program, [input], "int32");
  return {
    dataId: output.dataId,
    shape: output.shape,
    dtype: output.dtype
  };
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cast.js
function cast2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    dtype
  } = attrs;
  if (dtype === "complex64") {
    if (x.dtype === "complex64") {
      return identity2({
        inputs: {
          x
        },
        backend
      });
    }
    const zerosTensor = zeros(x.shape);
    const floatX = cast2({
      inputs: {
        x
      },
      backend,
      attrs: {
        dtype: "float32"
      }
    });
    const result = complex2({
      inputs: {
        real: floatX,
        imag: zerosTensor
      },
      backend
    });
    zerosTensor.dispose();
    backend.disposeIntermediateTensorInfo(floatX);
    return result;
  }
  if (x.dtype === "complex64") {
    const realPart = real2({
      inputs: {
        input: x
      },
      backend
    });
    const result = cast2({
      inputs: {
        x: realPart
      },
      backend,
      attrs: {
        dtype
      }
    });
    backend.disposeIntermediateTensorInfo(realPart);
    return result;
  }
  if (!util_exports.hasEncodingLoss(x.dtype, dtype)) {
    const result = identity2({
      inputs: {
        x
      },
      backend
    });
    return {
      dataId: result.dataId,
      shape: result.shape,
      dtype
    };
  }
  if (backend.shouldExecuteOnCPU([x])) {
    const values = backend.texData.get(x.dataId).values;
    const [resultShape, resultType, resultData] = castImplCPU(values, x.shape, x.dtype, dtype);
    return backend.makeTensorInfo(resultShape, resultType, resultData);
  }
  if (dtype === "int32") {
    return int(x, backend);
  }
  if (dtype === "bool") {
    const zerosTensorInfo = backend.makeTensorInfo([], "bool", util_exports.getTypedArrayFromDType("bool", 1));
    const binaryInputs = {
      a: x,
      b: zerosTensorInfo
    };
    const result = notEqual2({
      inputs: binaryInputs,
      backend
    });
    backend.disposeIntermediateTensorInfo(zerosTensorInfo);
    return result;
  }
  throw new Error(`Error in Cast: failed to cast ${x.dtype} to ${dtype}`);
}
var castConfig2 = {
  kernelName: Cast,
  backendName: "webgl",
  kernelFunc: cast2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Ceil.js
var CEIL = `return ceil(x);`;
var ceil2 = unaryKernelFunc2({
  opSnippet: CEIL,
  packedOpSnippet: CEIL,
  cpuKernelImpl: ceilImplCPU
});
var ceilConfig2 = {
  kernelName: Ceil,
  backendName: "webgl",
  kernelFunc: ceil2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/clip_gpu.js
var ClipProgram = class {
  constructor(aShape) {
    this.variableNames = ["A"];
    this.customUniforms = [{
      name: "minVal",
      type: "float"
    }, {
      name: "maxVal",
      type: "float"
    }];
    this.outputShape = aShape;
    this.userCode = `

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/clip_packed_gpu.js
var ClipPackedProgram = class {
  constructor(aShape) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{
      name: "minVal",
      type: "float"
    }, {
      name: "maxVal",
      type: "float"
    }];
    this.outputShape = aShape;
    this.userCode = `
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ClipByValue.js
function clipByValue(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    clipValueMin,
    clipValueMax
  } = attrs;
  let program;
  if (env().getBool("WEBGL_PACK_CLIP")) {
    program = new ClipPackedProgram(x.shape);
  } else {
    program = new ClipProgram(x.shape);
  }
  const customValues = [[clipValueMin], [clipValueMax]];
  return backend.runWebGLProgram(program, [x], x.dtype, customValues);
}
var clipByValueConfig = {
  kernelName: ClipByValue,
  backendName: "webgl",
  kernelFunc: clipByValue
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/complex_abs_gpu.js
var ComplexAbsProgram = class {
  constructor(shape) {
    this.variableNames = ["real", "imag"];
    this.outputShape = shape;
    this.userCode = `
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ComplexAbs.js
function makeComplexComponentTensorInfo(complexTensor, complexPart) {
  return {
    dataId: complexPart.dataId,
    dtype: complexPart.dtype,
    shape: complexTensor.shape
  };
}
function complexAbs(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  const xData = backend.texData.get(x.dataId);
  const program = new ComplexAbsProgram(x.shape);
  const programInputs = [makeComplexComponentTensorInfo(x, xData.complexTensorInfos.real), makeComplexComponentTensorInfo(x, xData.complexTensorInfos.imag)];
  return backend.runWebGLProgram(program, programInputs, programInputs[0].dtype);
}
var complexAbsConfig = {
  kernelName: ComplexAbs,
  backendName: "webgl",
  kernelFunc: complexAbs
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/concat_gpu.js
var ConcatProgram = class {
  // Concats 2d tensors along axis=1. See comments in MathBackendWebGL.concat().
  constructor(shapes) {
    this.outputShape = [];
    this.outputShape = backend_util_exports.computeOutShape(
      shapes,
      1
      /* axis */
    );
    this.variableNames = shapes.map((_, i) => `T${i}`);
    const offsets = new Array(shapes.length - 1);
    offsets[0] = shapes[0][1];
    for (let i = 1; i < offsets.length; i++) {
      offsets[i] = offsets[i - 1] + shapes[i][1];
    }
    const snippets = [`if (yC < ${offsets[0]}) setOutput(getT0(yR, yC));`];
    for (let i = 1; i < offsets.length; i++) {
      const shift = offsets[i - 1];
      snippets.push(`else if (yC < ${offsets[i]}) setOutput(getT${i}(yR, yC-${shift}));`);
    }
    const lastIndex = offsets.length;
    const lastShift = offsets[offsets.length - 1];
    snippets.push(`else setOutput(getT${lastIndex}(yR, yC-${lastShift}));`);
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${snippets.join("\n        ")}
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/concat_packed_gpu.js
var ConcatPackedProgram = class {
  constructor(shapes, axis) {
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = [];
    this.outputShape = backend_util_exports.computeOutShape(shapes, axis);
    const shape = this.outputShape;
    const rank = shape.length;
    const dtype = getCoordsDataType(rank);
    const coords2 = getChannels("coords", rank);
    const channels = ["x", "y", "z", "w", "u", "v"].slice(0, rank);
    this.variableNames = shapes.map((_, i) => `T${i}`);
    const offsets = new Array(shapes.length - 1);
    offsets[0] = shapes[0][axis];
    for (let i = 1; i < offsets.length; i++) {
      offsets[i] = offsets[i - 1] + shapes[i][axis];
    }
    const channel = channels[axis];
    const lastChannels = channels.slice(-2);
    const allChannels = channels.join();
    let getValueSnippet = `if (${channel} < ${offsets[0]}) {
        return getChannel(
            getT0(${allChannels}), vec2(${lastChannels.join()}));
        }`;
    for (let i = 1; i < offsets.length; i++) {
      const shift2 = offsets[i - 1];
      getValueSnippet += `
        if (${channel} < ${offsets[i]}  && ${channel} >= ${offsets[i - 1]}) {
          return getChannel(
            getT${i}(${shiftedChannels(channels, channel, shift2)}),
            vec2(${shiftedChannels(lastChannels, channel, shift2)}));
        }`;
    }
    const lastIndex = offsets.length;
    const shift = offsets[offsets.length - 1];
    getValueSnippet += `
        return getChannel(
          getT${lastIndex}(${shiftedChannels(channels, channel, shift)}),
          vec2(${shiftedChannels(lastChannels, channel, shift)}));`;
    this.userCode = `
      float getValue(${channels.map((x) => "int " + x)}) {
        ${getValueSnippet}
      }

      void main() {
        ${dtype} coords = getOutputCoords();
        vec4 result = vec4(getValue(${coords2}), 0., 0., 0.);

        ${coords2[rank - 1]} = ${coords2[rank - 1]} + 1;
        if (${coords2[rank - 1]} < ${shape[rank - 1]}) {
          result.g = getValue(${coords2});
        }

        ${coords2[rank - 2]} = ${coords2[rank - 2]} + 1;
        if (${coords2[rank - 2]} < ${shape[rank - 2]}) {
          result.a = getValue(${coords2});
        }

        ${coords2[rank - 1]} = ${coords2[rank - 1]} - 1;
        if (${coords2[rank - 2]} < ${shape[rank - 2]} &&
            ${coords2[rank - 1]} < ${shape[rank - 1]}) {
          result.b = getValue(${coords2});
        }
        setOutput(result);
      }
    `;
  }
};
function shiftedChannels(channels, channel, shift) {
  const channelIdx = channels.indexOf(channel);
  const res = channels.map((c, idx) => {
    if (idx === channelIdx) {
      return `${c} - ${shift}`;
    } else {
      return c;
    }
  });
  return res.join();
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js
function imag(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    input
  } = inputs;
  const inputData = backend.texData.get(input.dataId);
  return identity2({
    inputs: {
      x: inputData.complexTensorInfos.imag
    },
    backend
  });
}
var imagConfig = {
  kernelName: Imag,
  backendName: "webgl",
  kernelFunc: imag
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Concat_impl.js
function concatImpl2(inputs, axis, backend) {
  const dtype = inputs[0].dtype;
  if (dtype === "complex64") {
    const reals = inputs.map((t) => real2({
      inputs: {
        input: t
      },
      backend
    }));
    const imags = inputs.map((t) => imag({
      inputs: {
        input: t
      },
      backend
    }));
    const realConcated = concatImpl2(reals, axis, backend);
    const imagConcated = concatImpl2(imags, axis, backend);
    const result2 = complex2({
      inputs: {
        real: realConcated,
        imag: imagConcated
      },
      backend
    });
    reals.forEach((r) => backend.disposeIntermediateTensorInfo(r));
    imags.forEach((i) => backend.disposeIntermediateTensorInfo(i));
    backend.disposeIntermediateTensorInfo(realConcated);
    backend.disposeIntermediateTensorInfo(imagConcated);
    return result2;
  }
  let runOnCpu = backend.shouldExecuteOnCPU(inputs);
  if (dtype === "string") {
    runOnCpu = true;
  }
  if (runOnCpu) {
    const tensors2D2 = inputs.map((t) => {
      const innerSize = util_exports.sizeFromShape(t.shape.slice(axis));
      const shape = [-1, innerSize];
      return reshape2({
        inputs: {
          x: t
        },
        backend,
        attrs: {
          shape
        }
      });
    });
    const inputsValShapes = tensors2D2.map((t) => {
      return {
        vals: backend.readSync(t.dataId),
        shape: t.shape
      };
    });
    const outShape2 = backend_util_exports.computeOutShape(
      tensors2D2.map((t) => t.shape),
      1
      /* axis */
    );
    const simplyConcat = tensors2D2[0].shape[0] === 1;
    const outVals = concatImplCPU(inputsValShapes, outShape2, dtype, simplyConcat);
    const finalOutShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), axis);
    const outInfo = backend.makeTensorInfo(finalOutShape, dtype, outVals);
    tensors2D2.forEach((t) => backend.disposeIntermediateTensorInfo(t));
    return outInfo;
  }
  const $inputs = inputs.filter((t) => util_exports.sizeFromShape(t.shape) > 0);
  const shouldPack = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && $inputs[0].shape.length > 1;
  if ($inputs.length === 1) {
    const program2 = shouldPack ? new UnaryOpProgram(inputs[0].shape, CLONE) : new UnaryOpPackedProgram(inputs[0].shape, CLONE);
    return backend.runWebGLProgram(program2, inputs, dtype);
  }
  const maxTexturesInShader = env().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");
  if ($inputs.length > maxTexturesInShader) {
    const reducedInputs = [];
    for (let i = 0; i < $inputs.length; i += maxTexturesInShader) {
      const subArray = $inputs.slice(i, i + maxTexturesInShader);
      reducedInputs.push(concatImpl2(subArray, axis, backend));
    }
    const result2 = concatImpl2(reducedInputs, axis, backend);
    for (const i of reducedInputs) {
      backend.disposeIntermediateTensorInfo(i);
    }
    return result2;
  }
  if (shouldPack) {
    const program2 = new ConcatPackedProgram($inputs.map((t) => t.shape), axis);
    return backend.runWebGLProgram(program2, $inputs, dtype);
  }
  const {
    tensors2D,
    outShape
  } = computeTensors2D($inputs, axis, backend);
  const program = new ConcatProgram(tensors2D.map((t) => t.shape));
  const result = backend.runWebGLProgram(program, tensors2D, dtype);
  tensors2D.forEach((r) => backend.disposeIntermediateTensorInfo(r));
  const reshapedResult = reshape2({
    inputs: {
      x: result
    },
    attrs: {
      shape: outShape
    },
    backend
  });
  backend.disposeIntermediateTensorInfo(result);
  return reshapedResult;
}
function computeTensors2D(inputs, axis, backend) {
  const outShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), axis);
  const tensors2D = inputs.map((x) => reshape2({
    inputs: {
      x
    },
    attrs: {
      shape: [-1, util_exports.sizeFromShape(x.shape.slice(axis))]
    },
    backend
  }));
  return {
    tensors2D,
    outShape
  };
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Concat.js
function concat(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    axis
  } = attrs;
  const $axis = util_exports.parseAxisParam(axis, inputs[0].shape)[0];
  const shapes = inputs.map((t) => t.shape);
  backend_util_exports.assertParamsConsistent(shapes, $axis);
  const outShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), $axis);
  if (util_exports.sizeFromShape(outShape) === 0) {
    return backend.makeTensorInfo(outShape, inputs[0].dtype, []);
  }
  const $inputs = inputs.filter((t) => util_exports.sizeFromShape(t.shape) > 0);
  if ($inputs.length === 1) {
    return identity2({
      inputs: {
        x: $inputs[0]
      },
      backend
    });
  }
  return concatImpl2($inputs, $axis, backend);
}
var concatConfig = {
  kernelName: Concat,
  backendName: "webgl",
  kernelFunc: concat
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_gpu.js
var Conv2DProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivationWeights = false, hasLeakyreluAlpha = false) {
    this.variableNames = ["x", "W"];
    this.outputShape = convInfo.outShape;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
    const inputDepthVec4Remainder = convInfo.inChannels % 4;
    const isChannelsLast = convInfo.dataFormat === "channelsLast";
    const rowDim = isChannelsLast ? 1 : 2;
    const colDim = isChannelsLast ? 2 : 3;
    const channelDim = isChannelsLast ? 3 : 1;
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivationWeights) {
        activationSnippet = `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
      } else if (hasLeakyreluAlpha) {
        activationSnippet = `float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${activation}
        }`;
      } else {
        activationSnippet = `
          float activation(float x) {
            ${activation}
          }
        `;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivationWeights) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyreluAlpha) {
      this.variableNames.push("leakyreluAlpha");
    }
    this.userCode = `
      ${activationSnippet}

      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${channelDim}];

        ivec2 xRCCorner =
            ivec2(coords[${rowDim}], coords[${colDim}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          int xR = xRCorner + wR * ${dilationHeight};

          if (xR < 0 || xR >= ${convInfo.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            int xC = xCCorner + wC * ${dilationWidth};

            if (xC < 0 || xC >= ${convInfo.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${inputDepthNearestVec4}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${isChannelsLast}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${inputDepthVec4Remainder === 1}) {

              if (${isChannelsLast}) {
                dotProd +=
                    getX(batch, xR, xC, ${inputDepthNearestVec4}) *
                    getW(wR, wC, ${inputDepthNearestVec4}, d2);
              } else {
                dotProd +=
                    getX(batch, ${inputDepthNearestVec4}, xR, xC) *
                    getW(wR, wC, ${inputDepthNearestVec4}, d2);
              }

            } else if (${inputDepthVec4Remainder === 2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${inputDepthNearestVec4}, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 1, d2)
              );

              if (${isChannelsLast}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${inputDepthNearestVec4}, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${inputDepthVec4Remainder === 3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${inputDepthNearestVec4}, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 1, d2),
                getW(wR, wC, ${inputDepthNearestVec4} + 2, d2)
              );

              if (${isChannelsLast}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 1),
                  getX(batch, xR, xC, ${inputDepthNearestVec4} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${inputDepthNearestVec4}, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 1, xR, xC),
                  getX(batch, ${inputDepthNearestVec4} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
  }
};
var Conv3DProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "W"];
    this.outputShape = convInfo.outShape;
    const padFront = convInfo.padInfo.front;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const filterDepth = convInfo.filterDepth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
    const inputDepthVec4Remainder = convInfo.inChannels % 4;
    this.userCode = `
      const ivec3 strides = ivec3(${strideDepth}, ${strideHeight}, ${strideWidth});
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${filterDepth}; wF++) {
          int xF = xFCorner + wF * ${dilationDepth};

          if (xF < 0 || xF >= ${convInfo.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${filterHeight}; wR++) {
            int xR = xRCorner + wR * ${dilationHeight};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${filterWidth}; wC++) {
              int xC = xCCorner + wC * ${dilationWidth};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${inputDepthNearestVec4}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${inputDepthVec4Remainder === 1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}) *
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2);
              } else if (${inputDepthVec4Remainder === 2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${inputDepthVec4Remainder === 3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4}),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 1),
                  getX(batch, xF, xR, xC, ${inputDepthNearestVec4} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${inputDepthNearestVec4}, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 1, d2),
                  getW(wF, wR, wC, ${inputDepthNearestVec4} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu.js
var Conv2DPackedProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false, hasLeakyReluAlpha = false) {
    this.variableNames = ["x", "W"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{
      name: "pads",
      type: "ivec2"
    }, {
      name: "strides",
      type: "ivec2"
    }, {
      name: "dilations",
      type: "ivec2"
    }, {
      name: "inDims",
      type: "ivec2"
    }];
    this.outputShape = convInfo.outShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const padLeft = convInfo.padInfo.left;
    const strideWidth = convInfo.strideWidth;
    const dilationWidth = convInfo.dilationWidth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const texelsAcross = filterWidth;
    let mainLoop = `
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;
    for (let c = 0; c < filterWidth; c++) {
      mainLoop += `
           vec4 xTexelC${c * 2};
           int xTexelC${c * 2}Ready;
           vec4 xTexelC${c * 2 + 1};
           int xTexelC${c * 2 + 1}Ready;
           vec4 xC${c};`;
    }
    mainLoop += `
     for (int r = 0; r < ${filterHeight}; r++) {
      for (int d1 = 0; d1 < ${convInfo.inChannels}; d1 += 2) {
       `;
    for (let c = 0; c < filterWidth; c++) {
      mainLoop += `
           xTexelC${c * 2} = vec4(0.0);
           xTexelC${c * 2}Ready = 0;
           xTexelC${c * 2 + 1} = vec4(0.0);
           xTexelC${c * 2 + 1}Ready = 0;
           xC${c} = vec4(0.0);`;
    }
    mainLoop += `
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;
    for (let texelC = 0; texelC < (texelsAcross + 1) / 2; texelC++) {
      const colIndex = texelC * 2;
      mainLoop += `
           xC = xCCorner + ${colIndex * dilationWidth};
           `;
      if (strideWidth === 1) {
        if (colIndex < filterWidth) {
          if (padLeft % 2 === 1) {
            mainLoop += `
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex}Ready == 0) {
                   xTexelC${colIndex} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${colIndex}.zw = vec2(0.0);
                   }
                   xTexelC${colIndex}Ready = 1;
                 }
               `;
            if (dilationWidth === 1 && colIndex > 0) {
              mainLoop += `
                 xC${colIndex} = vec4(xTexelC${colIndex - 2}.zw, xTexelC${colIndex}.xy);
                 `;
            } else {
              mainLoop += `
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${colIndex} = vec4(previous.zw, xTexelC${colIndex}.xy);
                   } else {
                     xC${colIndex} = vec4(0.0, 0.0, xTexelC${colIndex}.xy);
                   }
                   `;
            }
          } else {
            mainLoop += `
                 if (xC >= 0 && xC < inDims[1] && xTexelC${colIndex}Ready == 0) {
                   xTexelC${colIndex} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${colIndex}.zw = vec2(0.0);
                   }
                   xTexelC${colIndex}Ready = 1;
                 }

                 xC${colIndex} = xTexelC${colIndex};
                 `;
          }
          if (colIndex + 1 < filterWidth) {
            const nextTexelOffset = padLeft % 2 === 0 ? util_exports.nearestLargerEven(dilationWidth) : dilationWidth;
            if (dilationWidth % 2 === 0 && padLeft % 2 === 1 || dilationWidth % 2 !== 0 && padLeft % 2 !== 1) {
              mainLoop += `
                   xCOffset = xC + imod(pads[1], 2) + ${nextTexelOffset};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                     xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${colIndex + 1}.zw = vec2(0.0);
                     }
                     xTexelC${colIndex + 1}Ready = 1;
                   }
                   `;
              if (dilationWidth > 1) {
                mainLoop += `
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${colIndex + 1} = vec4(previous.zw, xTexelC${colIndex + 1}.xy);
                     } else {
                      xC${colIndex + 1} = vec4(0.0, 0.0, xTexelC${colIndex + 1}.xy);
                     }
                     `;
              } else {
                mainLoop += `
                     xC${colIndex + 1} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.xy);
                     `;
              }
            } else {
              if (nextTexelOffset === 1) {
                mainLoop += `
                     xC${colIndex + 1} = xTexelC${colIndex};
                     `;
              } else {
                mainLoop += `
                     xCOffset = xC + ${nextTexelOffset};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                       xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${colIndex + 1}.zw = vec2(0.0);
                       }
                       xTexelC${colIndex + 1}Ready = 1;
                     }

                     xC${colIndex + 1} = xTexelC${colIndex + 1};
                     `;
              }
            }
          }
        }
      } else {
        if (colIndex < filterWidth) {
          if (padLeft % 2 === 1) {
            mainLoop += `
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex}Ready == 0) {
                   xTexelC${colIndex} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${colIndex}.zw = vec2(0.0);
                   }
                   xTexelC${colIndex}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                   xTexelC${colIndex + 1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${colIndex + 1}.zw = vec2(0.0);
                   }
                   xTexelC${colIndex + 1}Ready = 1;
                 }

                 xC${colIndex} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.zw);
               `;
            if (colIndex + 1 < filterWidth) {
              mainLoop += `
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${colIndex + 1} = vec4(xTexelC${colIndex + 1}.xy, final.xy);
                 `;
            }
          } else {
            mainLoop += `
                 if(xC >= 0 && xC < inDims[1] && xTexelC${colIndex}Ready == 0) {
                   xTexelC${colIndex} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${colIndex}.zw = vec2(0.0);
                   }
                   xTexelC${colIndex}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                   xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${colIndex + 1}.zw = vec2(0.);
                   }
                   xTexelC${colIndex + 1}Ready = 1;
                 }

                 xC${colIndex} = vec4(
                   xTexelC${colIndex}.xy, xTexelC${colIndex + 1}.xy);
               `;
            if (colIndex + 1 < filterWidth) {
              mainLoop += `
                   xC${colIndex + 1} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.zw);
                 `;
            }
          }
        }
      }
      if (colIndex < filterWidth) {
        mainLoop += `
             wTexel = getW(r, ${colIndex}, d1, d2);
             dotProd += xC${colIndex}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${convInfo.inChannels}) {
               dotProd += xC${colIndex}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `;
        if (colIndex + 1 < filterWidth) {
          mainLoop += `
               wTexel = getW(r, ${colIndex + 1}, d1, d2);
               dotProd += xC${colIndex + 1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${convInfo.inChannels}) {
                 dotProd += xC${colIndex + 1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `;
        }
      }
    }
    mainLoop += `
     }
   `;
    mainLoop += `
     }
   `;
    mainLoop += `
     }
   `;
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivation) {
        activationSnippet = `vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${activation}
         }`;
      } else if (hasLeakyReluAlpha) {
        activationSnippet = `vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${activation}
         }`;
      } else {
        activationSnippet = `vec4 activation(vec4 x) {
           ${activation}
         }`;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyReluAlpha) {
      this.variableNames.push("leakyreluAlpha");
    }
    this.userCode = `
       ${activationSnippet}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${mainLoop}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${addBiasSnippet}
         ${applyActivationSnippet}
         setOutput(result);
       }
     `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/im2col_packed_gpu.js
var Im2ColPackedProgram = class {
  constructor(outputShape, convInfo) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{
      name: "inputShape",
      type: "ivec4"
    }, {
      name: "pad",
      type: "ivec2"
    }, {
      name: "stride",
      type: "ivec2"
    }, {
      name: "dilation",
      type: "ivec2"
    }, {
      name: "inChannels",
      type: "int"
    }, {
      name: "itemsPerBlockRow",
      type: "int"
    }, {
      name: "outWidth",
      type: "int"
    }];
    this.outputShape = outputShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const {
      dataFormat
    } = convInfo;
    const glsl = getGlslDifferences();
    const isChannelsLast = dataFormat === "channelsLast";
    const rowDim = isChannelsLast ? 1 : 2;
    const colDim = isChannelsLast ? 2 : 3;
    const boundsCheckingSnippet = this.enableShapeUniforms ? "if(blockIndex < outShape[2] && pos < outShape[1]) {" : `if(blockIndex < ${outputShape[2]} && pos < ${outputShape[1]}) {`;
    let unrolled = ``;
    for (let row = 0; row <= 1; row++) {
      for (let col = 0; col <= 1; col++) {
        unrolled += `
          blockIndex = rc.z + ${col};
          pos = rc.y + ${row};

          ${boundsCheckingSnippet}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${rowDim}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${colDim}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${isChannelsLast}) {
                  innerDims = vec2(d1, ch);
                  result[${row * 2 + col}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${row * 2 + col}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;
      }
    }
    this.userCode = `
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${unrolled}

        ${glsl.output} = result;
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D_impl.js
function getShapeForBatchMatMul(shape, isChannelsLast) {
  const length = shape.length;
  if (length >= 3) {
    return isChannelsLast ? [
      ...shape.slice(0, -3),
      shape[length - 3] * shape[length - 2],
      shape[length - 1]
      /* channel */
    ] : [
      ...shape.slice(0, -3),
      shape[length - 3],
      shape[length - 2] * shape[length - 1]
      /* height * width */
    ];
  } else if (!isChannelsLast && length === 1 && shape[0] > 1) {
    return [shape[0], 1];
  } else {
    return null;
  }
}
function conv2dByMatMul({
  x,
  filter,
  convInfo,
  backend,
  bias = null,
  preluActivationWeights = null,
  leakyreluAlpha = 0,
  activation = null
}) {
  const xShape = x.shape;
  const xTexData = backend.texData.get(x.dataId);
  const sharedMatMulDim = convInfo.inChannels;
  const outerShapeX = xShape[0] * xShape[1] * xShape[2];
  const outerShapeFilter = convInfo.outChannels;
  const isChannelsLast = convInfo.dataFormat === "channelsLast";
  const transposeA = false;
  const transposeB = false;
  let out;
  const intermediates = [];
  if (preluActivationWeights != null) {
    const targetShape = getShapeForBatchMatMul(preluActivationWeights.shape, isChannelsLast);
    if (targetShape != null) {
      preluActivationWeights = reshape2({
        inputs: {
          x: preluActivationWeights
        },
        backend,
        attrs: {
          shape: targetShape
        }
      });
      intermediates.push(preluActivationWeights);
    }
  }
  if (bias != null) {
    const targetShape = getShapeForBatchMatMul(bias.shape, isChannelsLast);
    if (targetShape != null) {
      bias = reshape2({
        inputs: {
          x: bias
        },
        backend,
        attrs: {
          shape: targetShape
        }
      });
      intermediates.push(bias);
    }
  }
  const batchMatMulWillBeUnpacked = (outerShapeX === 1 || outerShapeFilter === 1) && sharedMatMulDim > MATMUL_SHARED_DIM_THRESHOLD;
  const canOptimize = !batchMatMulWillBeUnpacked && xTexData.isPacked && isChannelsLast && xTexData.texture != null && xShape[2] % 2 !== 0 && util_exports.arraysEqual(xTexData.shape.slice(-3), xShape.slice(-3));
  if (canOptimize) {
    const targetShape = xShape[0] * xShape[1] * (xShape[2] + 1);
    const xReshaped = {
      dataId: x.dataId,
      shape: [1, targetShape, convInfo.inChannels],
      dtype: x.dtype
    };
    const originalXTexDataShape = xTexData.shape;
    xTexData.shape = xTexData.shape.slice();
    xTexData.shape[xTexData.shape.length - 2]++;
    util_exports.assert(isReshapeFree(xTexData.shape, xReshaped.shape), () => `packed reshape ${xTexData.shape} to ${xReshaped.shape} isn't free`);
    const filterReshaped = reshape2({
      inputs: {
        x: filter
      },
      backend,
      attrs: {
        shape: [1, convInfo.inChannels, convInfo.outChannels]
      }
    });
    intermediates.push(filterReshaped);
    const pointwiseConv = batchMatMulImpl({
      a: xReshaped,
      b: filterReshaped,
      backend,
      transposeA,
      transposeB,
      bias,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    });
    const pointwiseConvTexData = backend.texData.get(pointwiseConv.dataId);
    util_exports.assert(pointwiseConvTexData.isPacked, () => "batchMatMul result is expected to be packed");
    xTexData.shape = originalXTexDataShape;
    pointwiseConvTexData.shape = convInfo.outShape;
    out = identity2({
      inputs: {
        x: pointwiseConv
      },
      backend
    });
    out.shape = convInfo.outShape;
    intermediates.push(pointwiseConv);
  } else {
    const numCols = convInfo.outHeight * convInfo.outWidth;
    const xReshaped = reshape2({
      inputs: {
        x
      },
      backend,
      attrs: {
        shape: isChannelsLast ? [convInfo.batchSize, numCols, convInfo.inChannels] : [convInfo.batchSize, convInfo.inChannels, numCols]
      }
    });
    const filterReshaped = reshape2({
      inputs: {
        x: filter
      },
      backend,
      attrs: {
        shape: [1, convInfo.inChannels, convInfo.outChannels]
      }
    });
    const result = batchMatMulImpl({
      a: isChannelsLast ? xReshaped : filterReshaped,
      b: isChannelsLast ? filterReshaped : xReshaped,
      transposeA: !isChannelsLast,
      transposeB,
      backend,
      bias,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    });
    out = reshape2({
      inputs: {
        x: result
      },
      backend,
      attrs: {
        shape: convInfo.outShape
      }
    });
    intermediates.push(xReshaped);
    intermediates.push(filterReshaped);
    intermediates.push(result);
  }
  for (const i of intermediates) {
    backend.disposeIntermediateTensorInfo(i);
  }
  return out;
}
function conv2dWithIm2Row({
  x,
  filter,
  convInfo,
  backend,
  bias = null,
  preluActivationWeights = null,
  leakyreluAlpha = 0,
  activation = null
}) {
  const {
    filterWidth,
    filterHeight,
    inChannels,
    outWidth,
    outHeight,
    dataFormat
  } = convInfo;
  const isChannelsLast = dataFormat === "channelsLast";
  const sharedDim = filterWidth * filterHeight * inChannels;
  const numCols = outHeight * outWidth;
  const x2ColShape = [convInfo.batchSize, sharedDim, numCols];
  const transposeA = true;
  const transposeB = false;
  const intermediates = [];
  if (preluActivationWeights != null) {
    const targetShape = getShapeForBatchMatMul(preluActivationWeights.shape, isChannelsLast);
    if (targetShape != null) {
      preluActivationWeights = reshape2({
        inputs: {
          x: preluActivationWeights
        },
        backend,
        attrs: {
          shape: targetShape
        }
      });
      intermediates.push(preluActivationWeights);
    }
  }
  if (bias != null) {
    const targetShape = getShapeForBatchMatMul(bias.shape, isChannelsLast);
    if (targetShape != null) {
      bias = reshape2({
        inputs: {
          x: bias
        },
        backend,
        attrs: {
          shape: targetShape
        }
      });
      intermediates.push(bias);
    }
  }
  const w2Row = reshape2({
    inputs: {
      x: filter
    },
    backend,
    attrs: {
      shape: [1, sharedDim, util_exports.sizeFromShape(filter.shape) / sharedDim]
    }
  });
  intermediates.push(w2Row);
  const im2ColProgram = new Im2ColPackedProgram(x2ColShape, convInfo);
  const customValues = [x.shape, [convInfo.padInfo.top, convInfo.padInfo.left], [convInfo.strideHeight, convInfo.strideWidth], [convInfo.dilationHeight, convInfo.dilationWidth], [convInfo.inChannels], [convInfo.filterWidth * convInfo.inChannels], [convInfo.outWidth]];
  const im2Col = backend.runWebGLProgram(im2ColProgram, [x], "float32", customValues);
  const im2ColReshaped = reshape2({
    inputs: {
      x: im2Col
    },
    backend,
    attrs: {
      shape: x2ColShape
    }
  });
  intermediates.push(im2Col);
  intermediates.push(im2ColReshaped);
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  const hasLeakyreluAlpha = activation === "leakyrelu";
  const fusedActivation = activation ? mapActivationToShaderProgram(activation, true) : null;
  const matmulProgram = new MatMulPackedProgram(isChannelsLast ? im2ColReshaped.shape : w2Row.shape, isChannelsLast ? w2Row.shape : im2ColReshaped.shape, isChannelsLast ? [convInfo.batchSize, numCols, convInfo.outChannels] : [convInfo.batchSize, convInfo.outChannels, numCols], transposeA, transposeB, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
  const inputs = isChannelsLast ? [im2ColReshaped, w2Row] : [w2Row, im2ColReshaped];
  if (bias) {
    inputs.push(bias);
  }
  if (hasPreluActivationWeights) {
    inputs.push(preluActivationWeights);
  }
  if (hasLeakyreluAlpha) {
    const $leakyreluAlpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(leakyreluAlpha, "float32"));
    inputs.push($leakyreluAlpha);
    intermediates.push($leakyreluAlpha);
  }
  const product = backend.runWebGLProgram(matmulProgram, inputs, "float32");
  const out = reshape2({
    inputs: {
      x: product
    },
    backend,
    attrs: {
      shape: convInfo.outShape
    }
  });
  intermediates.push(product);
  for (const i of intermediates) {
    backend.disposeIntermediateTensorInfo(i);
  }
  return out;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D.js
function conv2d(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter
  } = inputs;
  const {
    strides,
    pad,
    dataFormat,
    dilations,
    dimRoundingMode
  } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad, dimRoundingMode, false, $dataFormat);
  let out;
  if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 && convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 && convInfo.strideHeight === 1 && convInfo.strideWidth === 1 && (convInfo.padInfo.type === "SAME" || convInfo.padInfo.type === "VALID")) {
    out = conv2dByMatMul({
      x,
      filter,
      convInfo,
      backend
    });
  } else if (convInfo.strideWidth <= 2 && $dataFormat === "channelsLast" && env().getBool("WEBGL_EXP_CONV")) {
    const program = new Conv2DPackedProgram(convInfo);
    const customValues = [[convInfo.padInfo.top, convInfo.padInfo.left], [convInfo.strideHeight, convInfo.strideWidth], [convInfo.dilationHeight, convInfo.dilationWidth], [convInfo.inHeight, convInfo.inWidth]];
    out = backend.runWebGLProgram(program, [x, filter], "float32", customValues);
  } else if (env().getBool("WEBGL_CONV_IM2COL")) {
    out = conv2dWithIm2Row({
      x,
      filter,
      convInfo,
      backend
    });
  } else {
    const program = new Conv2DProgram(convInfo);
    out = backend.runWebGLProgram(program, [x, filter], "float32");
  }
  const outReshaped = reshape2({
    inputs: {
      x: out
    },
    backend,
    attrs: {
      shape: convInfo.outShape
    }
  });
  backend.disposeIntermediateTensorInfo(out);
  return outReshaped;
}
var conv2DConfig = {
  kernelName: Conv2D,
  backendName: "webgl",
  kernelFunc: conv2d
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu.js
var Conv2DDerFilterProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "dy"];
    this.outputShape = convInfo.filterShape;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const isChannelsLast = convInfo.dataFormat === "channelsLast";
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
            int xR = wR + yR * ${strideHeight} - ${padTop};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
              int xC = wC + yC * ${strideWidth} - ${padLeft};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              ${isChannelsLast ? `float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);` : `float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var Conv2DDerInputProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "W"];
    this.outputShape = convInfo.inShape;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const isChannelsLast = convInfo.dataFormat === "channelsLast";
    const padTop = filterHeight - 1 - convInfo.padInfo.top;
    const padLeft = filterWidth - 1 - convInfo.padInfo.left;
    const rowDim = isChannelsLast ? 1 : 2;
    const colDim = isChannelsLast ? 2 : 3;
    const channelDim = isChannelsLast ? 3 : 1;
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${channelDim}];

        ivec2 dyCorner = ivec2(coords[${rowDim}], coords[${colDim}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${filterHeight} - 1 - wR;

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${filterWidth} - 1 - wC;

            for (int d2 = 0; d2 < ${convInfo.outChannels}; d2++) {

              if (${isChannelsLast}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var Conv3DDerFilterProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "dy"];
    this.outputShape = convInfo.filterShape;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padFront = convInfo.padInfo.front;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    this.userCode = `
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yF = 0; yF < ${convInfo.outDepth}; yF++) {
            int xF = wF + yF * ${strideDepth} - ${padFront};

            if (xF < 0 || xF >= ${convInfo.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
              int xR = wR + yR * ${strideHeight} - ${padTop};

              if (xR < 0 || xR >= ${convInfo.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
                int xC = wC + yC * ${strideWidth} - ${padLeft};

                if (xC < 0 || xC >= ${convInfo.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var Conv3DDerInputProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "W"];
    this.outputShape = convInfo.inShape;
    const filterDepth = convInfo.filterDepth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padFront = filterDepth - 1 - convInfo.padInfo.front;
    const padTop = filterHeight - 1 - convInfo.padInfo.top;
    const padLeft = filterWidth - 1 - convInfo.padInfo.left;
    this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${filterDepth}; wF++) {
          float dyF = float(dyFCorner + wF) / ${strideDepth}.0;

          if (dyF < 0.0 || dyF >= ${convInfo.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${filterDepth} - 1 - wF;

          for (int wR = 0; wR < ${filterHeight}; wR++) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${filterHeight} - 1 - wR;

            for (int wC = 0; wC < ${filterWidth}; wC++) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${filterWidth} - 1 - wC;

              for (int d2 = 0; d2 < ${convInfo.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropFilter.js
function conv2DBackpropFilter(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    dy
  } = inputs;
  const {
    strides,
    pad,
    dataFormat,
    dimRoundingMode,
    filterShape
  } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filterShape, strides, 1, pad, dimRoundingMode, false, $dataFormat);
  const program = new Conv2DDerFilterProgram(convInfo);
  return backend.runWebGLProgram(program, [x, dy], "float32");
}
var conv2DBackpropFilterConfig = {
  kernelName: Conv2DBackpropFilter,
  backendName: "webgl",
  kernelFunc: conv2DBackpropFilter
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_packed_gpu.js
var Conv2DDerInputPackedProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "W"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{
      name: "strides",
      type: "vec2"
    }];
    this.outputShape = convInfo.inShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const padTop = filterHeight - 1 - convInfo.padInfo.top;
    const padLeft = filterWidth - 1 - convInfo.padInfo.left;
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${filterHeight} - 1 - wR;

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            int wCPerm = ${filterWidth} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${convInfo.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${convInfo.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${convInfo.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${convInfo.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${convInfo.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropInput.js
function conv2DBackpropInput(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    filter
  } = inputs;
  const {
    inputShape,
    strides,
    pad,
    dataFormat,
    dimRoundingMode
  } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(inputShape, filter.shape, strides, 1, pad, dimRoundingMode, false, $dataFormat);
  if (env().getBool("WEBGL_PACK_CONV2DTRANSPOSE") && $dataFormat === "channelsLast") {
    const customValues = [[convInfo.strideHeight, convInfo.strideWidth]];
    const program = new Conv2DDerInputPackedProgram(convInfo);
    return backend.runWebGLProgram(program, [dy, filter], "float32", customValues);
  } else {
    const program = new Conv2DDerInputProgram(convInfo);
    return backend.runWebGLProgram(program, [dy, filter], "float32");
  }
}
var conv2DBackpropInputConfig = {
  kernelName: Conv2DBackpropInput,
  backendName: "webgl",
  kernelFunc: conv2DBackpropInput
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3D.js
function conv3D(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter
  } = inputs;
  const {
    strides,
    pad,
    dilations
  } = attrs;
  const convInfo = backend_util_exports.computeConv3DInfo(x.shape, filter.shape, strides, dilations, pad);
  const program = new Conv3DProgram(convInfo);
  return backend.runWebGLProgram(program, [x, filter], "float32");
}
var conv3DConfig = {
  kernelName: Conv3D,
  backendName: "webgl",
  kernelFunc: conv3D
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropFilterV2.js
function conv3DBackpropFilterV2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    dy
  } = inputs;
  const {
    strides,
    pad,
    filterShape
  } = attrs;
  const convInfo = backend_util_exports.computeConv3DInfo(x.shape, filterShape, strides, 1, pad);
  const program = new Conv3DDerFilterProgram(convInfo);
  return backend.runWebGLProgram(program, [x, dy], "float32");
}
var conv3DBackpropFilterV2Config = {
  kernelName: Conv3DBackpropFilterV2,
  backendName: "webgl",
  kernelFunc: conv3DBackpropFilterV2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropInputV2.js
function conv3DBackpropInput(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    filter
  } = inputs;
  const {
    pad,
    strides,
    inputShape
  } = attrs;
  const convInfo = backend_util_exports.computeConv3DInfo(inputShape, filter.shape, strides, 1, pad);
  const program = new Conv3DDerInputProgram(convInfo);
  return backend.runWebGLProgram(program, [dy, filter], "float32");
}
var conv3DBackpropInputConfig = {
  kernelName: Conv3DBackpropInputV2,
  backendName: "webgl",
  kernelFunc: conv3DBackpropInput
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cos.js
var COS = CHECK_NAN_SNIPPET_UNARY + `
  return cos(x);
`;
var COS_PACKED = `
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${CHECK_NAN_SNIPPET_PACKED}
  return result;
`;
var cos = unaryKernelFunc2({
  opSnippet: COS,
  packedOpSnippet: COS_PACKED
});
var cosConfig = {
  kernelName: Cos,
  backendName: "webgl",
  kernelFunc: cos
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cosh.js
var COSH = `
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`;
var cosh = unaryKernelFunc2({
  opSnippet: COSH
});
var coshConfig = {
  kernelName: Cosh,
  backendName: "webgl",
  kernelFunc: cosh
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/crop_and_resize_gpu.js
var CropAndResizeProgram = class {
  constructor(imageShape, boxShape, cropSize, method, extrapolationValue) {
    this.variableNames = ["Image", "Boxes", "BoxInd"];
    this.outputShape = [];
    const [batch, imageHeight, imageWidth, depth] = imageShape;
    const [numBoxes] = boxShape;
    const [cropHeight, cropWidth] = cropSize;
    this.outputShape = [numBoxes, cropHeight, cropWidth, depth];
    const methodId = method === "bilinear" ? 1 : 0;
    const [inputHeightFloat, inputWidthFloat] = [`${imageHeight - 1}.0`, `${imageWidth - 1}.0`];
    const [heightRatio, heightScale, inY] = cropHeight > 1 ? [`${(imageHeight - 1) / (cropHeight - 1)}`, "(y2-y1) * height_ratio", `y1*${inputHeightFloat} + float(y)*(height_scale)`] : ["0.0", "0.0", `0.5 * (y1+y2) * ${inputHeightFloat}`];
    const [widthRatio, widthScale, inX] = cropWidth > 1 ? [`${(imageWidth - 1) / (cropWidth - 1)}`, "(x2-x1) * width_ratio", `x1*${inputWidthFloat} + float(x)*(width_scale)`] : ["0.0", "0.0", `0.5 * (x1+x2) * ${inputWidthFloat}`];
    this.userCode = `
      const float height_ratio = float(${heightRatio});
      const float width_ratio = float(${widthRatio});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${batch}) {
          return;
        }

        float height_scale = ${heightScale};
        float width_scale = ${widthScale};

        float in_y = ${inY};
        if( in_y < 0.0 || in_y > ${inputHeightFloat} ) {
          setOutput(float(${extrapolationValue}));
          return;
        }
        float in_x = ${inX};
        if( in_x < 0.0 || in_x > ${inputWidthFloat} ) {
          setOutput(float(${extrapolationValue}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${methodId} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/CropAndResize.js
var cropAndResize = (args) => {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    image,
    boxes,
    boxInd
  } = inputs;
  const {
    cropSize,
    method,
    extrapolationValue
  } = attrs;
  const program = new CropAndResizeProgram(image.shape, boxes.shape, cropSize, method, extrapolationValue);
  return backend.runWebGLProgram(program, [image, boxes, boxInd], "float32");
};
var cropAndResizeConfig = {
  kernelName: CropAndResize,
  backendName: "webgl",
  kernelFunc: cropAndResize
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/cum_gpu.js
var CumOpType;
(function(CumOpType2) {
  CumOpType2["Prod"] = "*";
  CumOpType2["Sum"] = "+";
})(CumOpType || (CumOpType = {}));
var CumProgram = class {
  constructor(op, outputShape, exclusive, reverse2) {
    this.op = op;
    this.outputShape = outputShape;
    this.variableNames = ["x"];
    this.customUniforms = [{
      name: "index",
      type: "float"
    }];
    const rank = this.outputShape.length;
    const initVal = this.op === CumOpType.Prod ? "1.0" : "0.0";
    const val = exclusive ? initVal : `getX(${getCoords2(rank, "coords", this.op)})`;
    const length = this.outputShape[this.outputShape.length - 1];
    let condition = "";
    let idxString = "";
    if (exclusive) {
      condition = reverse2 ? `end != ${length - 1}` : "end != 0";
      idxString = reverse2 ? "end + 1" : "end - 1";
    } else {
      condition = reverse2 ? `end + pow2 < ${length}` : "end >= pow2";
      idxString = reverse2 ? "end + pow2" : "end - pow2";
    }
    this.userCode = `
      void main() {
        ${getCoordsDataType(rank)} coords = getOutputCoords();
        int end = ${getFinalCoord(rank, "coords", this.op)};
        float val = ${val};
        int pow2 = int(pow(2.0, index));
        if (${condition}) {
          int idx = ${idxString};
          ${getFinalCoord(rank, "coords", this.op)} = idx;
          val ${this.op}= getX(${getCoords2(rank, "coords", this.op)});
        }
        setOutput(val);
      }
    `;
  }
};
function getCoords2(rank, name, op) {
  if (rank === 1) {
    return `${name}`;
  } else if (rank === 2) {
    return `${name}.x, ${name}.y`;
  } else if (rank === 3) {
    return `${name}.x, ${name}.y, ${name}.z`;
  } else if (rank === 4) {
    return `${name}.x, ${name}.y, ${name}.z, ${name}.w`;
  } else {
    throw new Error(`Cumulative ${op} for rank ${rank} is not yet supported`);
  }
}
function getFinalCoord(rank, name, op) {
  if (rank === 1) {
    return `${name}`;
  } else if (rank === 2) {
    return `${name}.y`;
  } else if (rank === 3) {
    return `${name}.z`;
  } else if (rank === 4) {
    return `${name}.w`;
  } else {
    throw new Error(`Cumulative ${op} for rank ${rank} is not yet supported`);
  }
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cum_impl.js
function cumImpl(op, x, backend, axis, exclusive, reverse2) {
  const xRank = x.shape.length;
  const permutation = backend_util_exports.getAxesPermutation([axis], xRank);
  let permutedX = x;
  if (permutation != null) {
    permutedX = transpose2({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutation
      }
    });
  }
  const permutedAxis = backend_util_exports.getInnerMostAxes(1, xRank)[0];
  if (permutedAxis !== xRank - 1) {
    throw new Error(`WebGL cumprod shader expects an inner-most axis=${x.shape.length - 1} but got axis=${axis}`);
  }
  const size = permutedX.shape[permutedAxis];
  let result = identity2({
    inputs: {
      x: permutedX
    },
    backend
  });
  for (let i = 0; i <= Math.ceil(Math.log2(size)) - 1; i++) {
    const program = new CumProgram(op, permutedX.shape, false, reverse2);
    const customValues = [[i]];
    const prevResult = result;
    result = backend.runWebGLProgram(program, [result], result.dtype, customValues);
    backend.disposeIntermediateTensorInfo(prevResult);
  }
  if (exclusive) {
    const program = new CumProgram(op, permutedX.shape, exclusive, reverse2);
    const prevResult = result;
    result = backend.runWebGLProgram(program, [result], result.dtype);
    backend.disposeIntermediateTensorInfo(prevResult);
  }
  if (permutation != null) {
    const reversePermutation = backend_util_exports.getUndoAxesPermutation(permutation);
    const reverseTransposedResult = transpose2({
      inputs: {
        x: result
      },
      backend,
      attrs: {
        perm: reversePermutation
      }
    });
    backend.disposeIntermediateTensorInfo(result);
    backend.disposeIntermediateTensorInfo(permutedX);
    return reverseTransposedResult;
  }
  return result;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cumprod.js
function cumprod(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    exclusive,
    reverse: reverse2
  } = attrs;
  return cumImpl(CumOpType.Prod, x, backend, axis, exclusive, reverse2);
}
var cumprodConfig = {
  kernelName: Cumprod,
  backendName: "webgl",
  kernelFunc: cumprod
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Cumsum.js
function cumsum(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    exclusive,
    reverse: reverse2
  } = attrs;
  return cumImpl(CumOpType.Sum, x, backend, axis, exclusive, reverse2);
}
var cumsumConfig = {
  kernelName: Cumsum,
  backendName: "webgl",
  kernelFunc: cumsum
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/DenseBincount.js
function denseBincount(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    weights
  } = inputs;
  const {
    size,
    binaryOutput
  } = attrs;
  if (x.shape.length === 1) {
    const xVals = backend.readSync(x.dataId);
    const weightsVals = backend.readSync(weights.dataId);
    const outVals = bincountImplCPU(xVals, weightsVals, weights.dtype, weights.shape, size);
    return backend.makeTensorInfo([size], weights.dtype, outVals);
  } else if (x.shape.length === 2) {
    const xBuf = backend.bufferSync(x);
    const weightsBuf = backend.bufferSync(weights);
    const outBuf = bincountReduceImplCPU(xBuf, weightsBuf, size, binaryOutput);
    return backend.makeTensorInfo(outBuf.shape, weights.dtype, outBuf.values);
  }
  throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${x.shape.length}.`);
}
var denseBincountConfig = {
  kernelName: DenseBincount,
  backendName: "webgl",
  kernelFunc: denseBincount
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/depth_to_space_gpu.js
var DepthToSpaceProgram = class {
  constructor(outputShape, blockSize, dataFormat) {
    this.variableNames = ["x"];
    this.outputShape = [];
    this.outputShape = outputShape;
    this.blockSize = blockSize;
    this.dataFormat = dataFormat;
    this.userCode = `
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${blockSize};
      int offset_h = imod(h, ${blockSize});
      int in_w = w / ${blockSize};
      int offset_w = imod(w, ${blockSize});
      int offset_d = (offset_h * ${blockSize} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `;
  }
  getHeightCoordString() {
    if (this.dataFormat === "NHWC") {
      return `coords[1]`;
    } else {
      return `coords[2]`;
    }
  }
  getWidthCoordString() {
    if (this.dataFormat === "NHWC") {
      return `coords[2]`;
    } else {
      return `coords[3]`;
    }
  }
  getDepthCoordString() {
    if (this.dataFormat === "NHWC") {
      return `coords[3]`;
    } else {
      return `coords[1]`;
    }
  }
  getOutputDepthSize() {
    if (this.dataFormat === "NHWC") {
      return this.outputShape[3];
    } else {
      return this.outputShape[1];
    }
  }
  getInputSamplingString() {
    if (this.dataFormat === "NHWC") {
      return `getX(b, in_h, in_w, in_d)`;
    } else {
      return `getX(b, in_d, in_h, in_w)`;
    }
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/DepthToSpace.js
function depthToSpace(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    blockSize,
    dataFormat
  } = attrs;
  const batchSize = x.shape[0];
  const inputHeight = dataFormat === "NHWC" ? x.shape[1] : x.shape[2];
  const inputWidth = dataFormat === "NHWC" ? x.shape[2] : x.shape[3];
  const inputDepth = dataFormat === "NHWC" ? x.shape[3] : x.shape[1];
  const outputHeight = inputHeight * blockSize;
  const outputWidth = inputWidth * blockSize;
  const outputDepth = inputDepth / (blockSize * blockSize);
  const outputShape = dataFormat === "NHWC" ? [batchSize, outputHeight, outputWidth, outputDepth] : [batchSize, outputDepth, outputHeight, outputWidth];
  const program = new DepthToSpaceProgram(outputShape, blockSize, dataFormat);
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var depthToSpaceConfig = {
  kernelName: DepthToSpace,
  backendName: "webgl",
  kernelFunc: depthToSpace
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_gpu_depthwise.js
var DepthwiseConv2DProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false, hasLeakyReluAlpha = false) {
    this.variableNames = ["x", "W"];
    this.customUniforms = [{
      name: "pads",
      type: "ivec2"
    }, {
      name: "strides",
      type: "ivec2"
    }, {
      name: "dilations",
      type: "ivec2"
    }, {
      name: "inDims",
      type: "ivec2"
    }];
    this.outputShape = convInfo.outShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const channelMul = convInfo.outChannels / convInfo.inChannels;
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivation) {
        activationSnippet = `float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
      } else if (hasLeakyReluAlpha) {
        activationSnippet = `float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${activation}
        }`;
      } else {
        activationSnippet = `
          float activation(float x) {
            ${activation}
          }
        `;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyReluAlpha) {
      this.variableNames.push("leakyreluAlpha");
    }
    this.userCode = `
      ${activationSnippet}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${channelMul};
        int q = d2 - d1 * ${channelMul};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${filterHeight}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu_depthwise.js
var DepthwiseConvPacked2DProgram = class {
  constructor(convInfo, addBias = false, activation = null, hasPreluActivation = false, hasLeakyReluAlpha = false) {
    this.variableNames = ["x", "W"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{
      name: "pads",
      type: "ivec2"
    }, {
      name: "strides",
      type: "ivec2"
    }, {
      name: "dilations",
      type: "ivec2"
    }, {
      name: "inDims",
      type: "ivec2"
    }];
    this.outputShape = convInfo.outShape;
    this.enableShapeUniforms = useShapeUniforms(this.outputShape.length);
    const channelMul = convInfo.outChannels / convInfo.inChannels;
    const padLeft = convInfo.padInfo.left;
    const strideWidth = convInfo.strideWidth;
    const dilationWidth = convInfo.dilationWidth;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const texelsAcross = filterWidth;
    let mainLoop = `
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;
    for (let c = 0; c < filterWidth; c++) {
      mainLoop += `
          vec4 xTexelC${c * 2};
          int xTexelC${c * 2}Ready;
          vec4 xTexelC${c * 2 + 1};
          int xTexelC${c * 2 + 1}Ready;
          vec4 xC${c};`;
    }
    mainLoop += `
    for (int r = 0; r < ${filterHeight}; r++) {
      `;
    for (let c = 0; c < filterWidth; c++) {
      mainLoop += `
          xTexelC${c * 2} = vec4(0.0);
          xTexelC${c * 2}Ready = 0;
          xTexelC${c * 2 + 1} = vec4(0.0);
          xTexelC${c * 2 + 1}Ready = 0;
          xC${c} = vec4(0.0);`;
    }
    mainLoop += `
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;
    for (let texelC = 0; texelC < (texelsAcross + 1) / 2; texelC++) {
      const colIndex = texelC * 2;
      mainLoop += `
          xC = xCCorner + ${colIndex * dilationWidth};
          `;
      if (strideWidth === 1) {
        if (colIndex < filterWidth) {
          if (padLeft % 2 === 1) {
            mainLoop += `
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex}Ready == 0) {
                  xTexelC${colIndex} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${colIndex}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex}Ready = 1;
                }
              `;
            if (dilationWidth === 1 && colIndex > 0) {
              mainLoop += `
                xC${colIndex} = vec4(xTexelC${colIndex - 2}.zw, xTexelC${colIndex}.xy);
                `;
            } else {
              mainLoop += `
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${colIndex} = vec4(previous.zw, xTexelC${colIndex}.xy);
                  } else {
                    xC${colIndex} = vec4(0.0, 0.0, xTexelC${colIndex}.xy);
                  }
                  `;
            }
          } else {
            mainLoop += `
                if (xC >= 0 && xC < inDims[1] && xTexelC${colIndex}Ready == 0) {
                  xTexelC${colIndex} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${colIndex}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex}Ready = 1;
                }

                xC${colIndex} = xTexelC${colIndex};
                `;
          }
          if (colIndex + 1 < filterWidth) {
            const nextTexelOffset = padLeft % 2 === 0 ? util_exports.nearestLargerEven(dilationWidth) : dilationWidth;
            if (dilationWidth % 2 === 0 && padLeft % 2 === 1 || dilationWidth % 2 !== 0 && padLeft % 2 !== 1) {
              mainLoop += `
                  xCOffset = xC + imod(pads[1], 2) + ${nextTexelOffset};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                    xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${colIndex + 1}.zw = vec2(0.0);
                    }
                    xTexelC${colIndex + 1}Ready = 1;
                  }
                  `;
              if (dilationWidth > 1) {
                mainLoop += `
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${colIndex + 1} = vec4(previous.zw, xTexelC${colIndex + 1}.xy);
                    } else {
                     xC${colIndex + 1} = vec4(0.0, 0.0, xTexelC${colIndex + 1}.xy);
                    }
                    `;
              } else {
                mainLoop += `
                    xC${colIndex + 1} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.xy);
                    `;
              }
            } else {
              if (nextTexelOffset === 1) {
                mainLoop += `
                    xC${colIndex + 1} = xTexelC${colIndex};
                    `;
              } else {
                mainLoop += `
                    xCOffset = xC + ${nextTexelOffset};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                      xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${colIndex + 1}.zw = vec2(0.0);
                      }
                      xTexelC${colIndex + 1}Ready = 1;
                    }

                    xC${colIndex + 1} = xTexelC${colIndex + 1};
                    `;
              }
            }
          }
        }
      } else {
        if (colIndex < filterWidth) {
          if (padLeft % 2 === 1) {
            mainLoop += `
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex}Ready == 0) {
                  xTexelC${colIndex} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${colIndex}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                  xTexelC${colIndex + 1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${colIndex + 1}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex + 1}Ready = 1;
                }

                xC${colIndex} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.zw);
              `;
            if (colIndex + 1 < filterWidth) {
              mainLoop += `
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${colIndex + 1} = vec4(xTexelC${colIndex + 1}.xy, final.xy);
                `;
            }
          } else {
            mainLoop += `
                if(xC >= 0 && xC < inDims[1] && xTexelC${colIndex}Ready == 0) {
                  xTexelC${colIndex} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${colIndex}.zw = vec2(0.0);
                  }
                  xTexelC${colIndex}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${colIndex + 1}Ready == 0) {
                  xTexelC${colIndex + 1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${colIndex + 1}.zw = vec2(0.);
                  }
                  xTexelC${colIndex + 1}Ready = 1;
                }

                xC${colIndex} = vec4(
                  xTexelC${colIndex}.xy, xTexelC${colIndex + 1}.xy);
              `;
            if (colIndex + 1 < filterWidth) {
              mainLoop += `
                  xC${colIndex + 1} = vec4(xTexelC${colIndex}.zw, xTexelC${colIndex + 1}.zw);
                `;
            }
          }
        }
      }
      if (colIndex < filterWidth) {
        mainLoop += `
            wTexel = getW(r, ${colIndex}, d1, q);
            dotProd += xC${colIndex} * vec4(wTexel.xz, wTexel.xz);
          `;
        if (colIndex + 1 < filterWidth) {
          mainLoop += `
              wTexel = getW(r, ${colIndex + 1}, d1, q);
              dotProd += xC${colIndex + 1} * vec4(wTexel.xz, wTexel.xz);
            `;
        }
      }
    }
    mainLoop += `
    }
  `;
    mainLoop += `
      }
    `;
    let activationSnippet = "", applyActivationSnippet = "";
    if (activation) {
      if (hasPreluActivation) {
        activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${activation}
        }`;
      } else if (hasLeakyReluAlpha) {
        activationSnippet = `vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${activation}
        }`;
      } else {
        activationSnippet = `vec4 activation(vec4 x) {
          ${activation}
        }`;
      }
      applyActivationSnippet = `result = activation(result);`;
    }
    const addBiasSnippet = addBias ? "result += getBiasAtOutCoords();" : "";
    if (addBias) {
      this.variableNames.push("bias");
    }
    if (hasPreluActivation) {
      this.variableNames.push("preluActivationWeights");
    }
    if (hasLeakyReluAlpha) {
      this.variableNames.push("leakyreluAlpha");
    }
    this.userCode = `
      ${activationSnippet}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${channelMul};
        int q = d2 - d1 * ${channelMul};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${mainLoop}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${addBiasSnippet}
        ${applyActivationSnippet}
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNative.js
function depthwiseConv2dNative(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter
  } = inputs;
  const {
    strides,
    pad,
    dilations,
    dimRoundingMode
  } = attrs;
  let $dilations = dilations;
  if ($dilations == null) {
    $dilations = [1, 1];
  }
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, $dilations), () => `Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${$dilations}'`);
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    $dilations,
    pad,
    dimRoundingMode,
    true
    /* depthwise */
  );
  let program;
  if (env().getBool("WEBGL_PACK_DEPTHWISECONV") && convInfo.strideWidth <= 2 && convInfo.outChannels / convInfo.inChannels === 1) {
    program = new DepthwiseConvPacked2DProgram(convInfo);
  } else {
    program = new DepthwiseConv2DProgram(convInfo);
  }
  const customValues = [[convInfo.padInfo.top, convInfo.padInfo.left], [convInfo.strideHeight, convInfo.strideWidth], [convInfo.dilationHeight, convInfo.dilationWidth], [convInfo.inHeight, convInfo.inWidth]];
  return backend.runWebGLProgram(program, [x, filter], "float32", customValues);
}
var depthwiseConv2dNativeConfig = {
  kernelName: DepthwiseConv2dNative,
  backendName: "webgl",
  kernelFunc: depthwiseConv2dNative
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu_depthwise.js
var DepthwiseConv2DDerFilterProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "dy"];
    this.outputShape = convInfo.filterShape;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const channelMul = convInfo.outChannels / convInfo.inChannels;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${channelMul} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${convInfo.batchSize}; b++) {
          for (int yR = 0; yR < ${convInfo.outHeight}; yR++) {
            int xR = wR + yR * ${strideHeight} - ${padTop};

            if (xR < 0 || xR >= ${convInfo.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${convInfo.outWidth}; yC++) {
              int xC = wC + yC * ${strideWidth} - ${padLeft};

              if (xC < 0 || xC >= ${convInfo.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var DepthwiseConv2DDerInputProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "W"];
    this.outputShape = convInfo.inShape;
    const filterHeight = convInfo.filterHeight;
    const filterWidth = convInfo.filterWidth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const padTop = filterHeight - 1 - convInfo.padInfo.top;
    const padLeft = filterWidth - 1 - convInfo.padInfo.left;
    const channelMul = convInfo.outChannels / convInfo.inChannels;
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${filterHeight}; wR++) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${filterHeight} - 1 - wR;

          for (int wC = 0; wC < ${filterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${filterWidth} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${channelMul}; dm++) {
              int d2 = d1 * ${channelMul} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropFilter.js
function depthwiseConv2dNativeBackpropFilter(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    dy
  } = inputs;
  const {
    strides,
    dilations,
    pad,
    dimRoundingMode,
    filterShape
  } = attrs;
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filterShape,
    strides,
    dilations,
    pad,
    dimRoundingMode,
    true
    /* depthwise */
  );
  const program = new DepthwiseConv2DDerFilterProgram(convInfo);
  return backend.runWebGLProgram(program, [x, dy], "float32");
}
var depthwiseConv2dNativeBackpropFilterConfig = {
  kernelName: DepthwiseConv2dNativeBackpropFilter,
  backendName: "webgl",
  kernelFunc: depthwiseConv2dNativeBackpropFilter
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropInput.js
function depthwiseConv2dNativeBackpropInput(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    filter
  } = inputs;
  const {
    strides,
    dilations,
    pad,
    dimRoundingMode,
    inputShape
  } = attrs;
  const convInfo = backend_util_exports.computeConv2DInfo(
    inputShape,
    filter.shape,
    strides,
    dilations,
    pad,
    dimRoundingMode,
    true
    /* depthwise */
  );
  const program = new DepthwiseConv2DDerInputProgram(convInfo);
  return backend.runWebGLProgram(program, [dy, filter], "float32");
}
var depthwiseConv2dNativeBackpropInputConfig = {
  kernelName: DepthwiseConv2dNativeBackpropInput,
  backendName: "webgl",
  kernelFunc: depthwiseConv2dNativeBackpropInput
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/diag_gpu.js
var DiagProgram = class {
  constructor(size) {
    this.variableNames = ["X"];
    this.outputShape = [size, size];
    this.userCode = `
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Diag.js
function diag(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  const outShape = [...x.shape, ...x.shape];
  const xSize = util_exports.sizeFromShape(x.shape);
  const flat = reshape2({
    inputs: {
      x
    },
    backend,
    attrs: {
      shape: [xSize]
    }
  });
  const program = new DiagProgram(xSize);
  const res = backend.runWebGLProgram(program, [flat], flat.dtype);
  const out = reshape2({
    inputs: {
      x: res
    },
    backend,
    attrs: {
      shape: outShape
    }
  });
  backend.disposeIntermediateTensorInfo(flat);
  backend.disposeIntermediateTensorInfo(res);
  return out;
}
var diagConfig = {
  kernelName: Diag,
  backendName: "webgl",
  kernelFunc: diag
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/dilation_gpu.js
var Dilation2DProgram = class {
  constructor(convInfo) {
    this.variableNames = ["x", "W"];
    this.outputShape = convInfo.outShape;
    const {
      inHeight,
      inWidth,
      padInfo,
      strideHeight,
      strideWidth,
      filterHeight,
      filterWidth,
      dilationHeight,
      dilationWidth
    } = convInfo;
    const {
      top: padTop,
      left: padLeft
    } = padInfo;
    this.userCode = `
      const ivec2 strides = ivec2(${strideHeight}, ${strideWidth});
      const ivec2 pads = ivec2(${padTop}, ${padLeft});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${filterHeight}; h++) {
          int hIn = hBeg + h * ${dilationHeight};

          if (hIn >= 0 && hIn < ${inHeight}) {
            for (int w = 0; w < ${filterWidth}; w++) {
              int wIn = wBeg + w * ${dilationWidth};

              if (wIn >= 0 && wIn < ${inWidth}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Dilation2D.js
function dilation2D(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter
  } = inputs;
  const {
    strides,
    pad,
    dilations
  } = attrs;
  const convInfo = backend_util_exports.computeDilation2DInfo(x.shape, filter.shape, strides, pad, "NHWC", dilations);
  let out;
  const program = new Dilation2DProgram(convInfo);
  out = backend.runWebGLProgram(program, [x, filter], "float32");
  const outReshaped = reshape2({
    inputs: {
      x: out
    },
    backend,
    attrs: {
      shape: convInfo.outShape
    }
  });
  backend.disposeIntermediateTensorInfo(out);
  return outReshaped;
}
var dilation2DConfig = {
  kernelName: Dilation2D,
  backendName: "webgl",
  kernelFunc: dilation2D
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Einsum.js
function einsum(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    equation
  } = attrs;
  const tensors = inputs;
  const {
    allDims,
    summedDims,
    idDims
  } = backend_util_exports.decodeEinsumEquation(equation, tensors.length);
  backend_util_exports.checkEinsumDimSizes(allDims.length, idDims, tensors);
  const {
    path,
    steps
  } = backend_util_exports.getEinsumComputePath(summedDims, idDims);
  const nSteps = steps.length;
  let out = null;
  let numDimsRemaining = allDims.length;
  const tensorsToDispose = [];
  for (let i = 0; i < nSteps; ++i) {
    for (const idTerm of steps[i]) {
      const {
        permutationIndices: perm,
        expandDims: dimsToExpand
      } = backend_util_exports.getEinsumPermutation(numDimsRemaining, idDims[idTerm]);
      let x;
      if (backend_util_exports.isIdentityPermutation(perm)) {
        x = tensors[idTerm];
      } else {
        x = transpose2({
          inputs: {
            x: tensors[idTerm]
          },
          backend,
          attrs: {
            perm
          }
        });
        tensorsToDispose.push(x);
      }
      const targetShape = x.shape.slice();
      for (let k = 0; k < dimsToExpand.length; ++k) {
        targetShape.splice(dimsToExpand[k], 0, 1);
      }
      if (!util_exports.arraysEqual(x.shape, targetShape)) {
        x = reshape2({
          inputs: {
            x
          },
          backend,
          attrs: {
            shape: targetShape
          }
        });
        tensorsToDispose.push(x);
      }
      if (out === null) {
        out = x;
      } else {
        out = multiply2({
          inputs: {
            a: x,
            b: out
          },
          backend
        });
        tensorsToDispose.push(out);
      }
    }
    if (i < nSteps - 1) {
      if (path[i] >= 0) {
        out = sum({
          inputs: {
            x: out
          },
          backend,
          attrs: {
            axis: path[i] - (allDims.length - numDimsRemaining),
            keepDims: false
          }
        });
        tensorsToDispose.push(out);
      }
      numDimsRemaining--;
    }
  }
  for (const tensorInfo of tensorsToDispose) {
    if (tensorInfo === out) {
      continue;
    }
    backend.disposeIntermediateTensorInfo(tensorInfo);
  }
  return out;
}
var einsumConfig = {
  kernelName: Einsum,
  backendName: "webgl",
  kernelFunc: einsum
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Elu.js
var ELU3 = `return (x >= 0.0) ? x : (exp(x) - 1.0);`;
var ELU_PACKED = `
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`;
var elu = unaryKernelFunc2({
  opSnippet: ELU3,
  packedOpSnippet: ELU_PACKED
});
var eluConfig = {
  kernelName: Elu,
  backendName: "webgl",
  kernelFunc: elu
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/EluGrad.js
var ELU_DER = `return (b >= 0.0) ? a : a * (b + 1.0);`;
var ELU_DER_PACKED = `
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`;
var eluGrad = (args) => {
  const {
    inputs,
    backend
  } = args;
  const {
    dy,
    y
  } = inputs;
  const program = env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new BinaryOpPackedProgram(ELU_DER_PACKED, dy.shape, y.shape) : new BinaryOpProgram(ELU_DER, dy.shape, y.shape);
  return backend.runWebGLProgram(program, [dy, y], dy.dtype);
};
var eluGradConfig = {
  kernelName: EluGrad,
  backendName: "webgl",
  kernelFunc: eluGrad
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Equal.js
var PACKED_EQUAL = `
  return vec4(equal(a, b));
`;
var EQUAL = `return float(a == b);`;
var equal2 = binaryKernelFunc2({
  opSnippet: EQUAL,
  packedOpSnippet: PACKED_EQUAL,
  dtype: "bool",
  cpuKernelImpl: equalImplCPU
});
var equalConfig2 = {
  kernelName: Equal,
  backendName: "webgl",
  kernelFunc: equal2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Erf.js
var ERF = `
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${backend_util_exports.ERF_P};
  float a1 = ${backend_util_exports.ERF_A1};
  float a2 = ${backend_util_exports.ERF_A2};
  float a3 = ${backend_util_exports.ERF_A3};
  float a4 = ${backend_util_exports.ERF_A4};
  float a5 = ${backend_util_exports.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`;
var erf = unaryKernelFunc2({
  opSnippet: ERF
});
var erfConfig = {
  kernelName: Erf,
  backendName: "webgl",
  kernelFunc: erf
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Exp.js
var EXP = CHECK_NAN_SNIPPET_UNARY + `
  return exp(x);
`;
var EXP_PACKED = `
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var exp2 = unaryKernelFunc2({
  opSnippet: EXP,
  packedOpSnippet: EXP_PACKED,
  cpuKernelImpl: expImplCPU,
  dtype: "float32"
});
var expConfig2 = {
  kernelName: Exp,
  backendName: "webgl",
  kernelFunc: exp2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ExpandDims.js
function expandDims(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    dim
  } = attrs;
  const {
    input
  } = inputs;
  const inputRank = input.shape.length;
  const newShape = input.shape.slice();
  let $dim = dim;
  if (dim < 0) {
    util_exports.assert(-(inputRank + 1) <= dim, () => `Axis must be in the interval [${-(inputRank + 1)}, ${inputRank}]`);
    $dim = inputRank + dim + 1;
  }
  newShape.splice($dim, 0, 1);
  return reshape2({
    inputs: {
      x: input
    },
    backend,
    attrs: {
      shape: newShape
    }
  });
}
var expandDimsConfig = {
  kernelName: ExpandDims,
  backendName: "webgl",
  kernelFunc: expandDims
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Expm1.js
var EXPM1 = `return exp(x) - 1.0;`;
var expm12 = unaryKernelFunc2({
  opSnippet: EXPM1,
  packedOpSnippet: EXPM1,
  cpuKernelImpl: expm1ImplCPU
});
var expm1Config2 = {
  kernelName: Expm1,
  backendName: "webgl",
  kernelFunc: expm12
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/fft_gpu.js
var FFTProgram = class {
  constructor(component, inputShape, inverse) {
    this.variableNames = ["real", "imag"];
    const innerDim = inputShape[1];
    this.outputShape = inputShape;
    const exponentMultiplierSnippet = inverse ? `2.0 * ${Math.PI}` : `-2.0 * ${Math.PI}`;
    const resultDenominator = inverse ? `${innerDim}.0` : "1.0";
    let opString;
    if (component === "real") {
      opString = "return real * expR - imag * expI;";
    } else if (component === "imag") {
      opString = "return real * expI + imag * expR;";
    } else {
      throw new Error(`FFT component must be either "real" or "imag", got ${component}.`);
    }
    this.userCode = `
      const float exponentMultiplier = ${exponentMultiplierSnippet};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${opString}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${innerDim});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${innerDim}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${resultDenominator};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js
function fftImpl(x, inverse, backend) {
  const xData = backend.texData.get(x.dataId);
  const inputSize = util_exports.sizeFromShape(x.shape);
  const innerDimensionSize = x.shape[x.shape.length - 1];
  const batch = inputSize / innerDimensionSize;
  const input2D = reshape2({
    inputs: {
      x
    },
    backend,
    attrs: {
      shape: [batch, innerDimensionSize]
    }
  });
  const xShape = input2D.shape;
  const realProgram = new FFTProgram("real", xShape, inverse);
  const imagProgram = new FFTProgram("imag", xShape, inverse);
  const inputs = [{
    dataId: xData.complexTensorInfos.real.dataId,
    dtype: xData.complexTensorInfos.real.dtype,
    shape: xShape
  }, {
    dataId: xData.complexTensorInfos.imag.dataId,
    dtype: xData.complexTensorInfos.imag.dtype,
    shape: xShape
  }];
  const realPart = backend.runWebGLProgram(realProgram, inputs, "float32");
  const imagPart = backend.runWebGLProgram(imagProgram, inputs, "float32");
  const complexOutput = complex2({
    inputs: {
      real: realPart,
      imag: imagPart
    },
    backend
  });
  backend.disposeIntermediateTensorInfo(realPart);
  backend.disposeIntermediateTensorInfo(imagPart);
  const complexOutputReshaped = reshape2({
    inputs: {
      x: complexOutput
    },
    backend,
    attrs: {
      shape: x.shape
    }
  });
  backend.disposeIntermediateTensorInfo(input2D);
  backend.disposeIntermediateTensorInfo(complexOutput);
  return complexOutputReshaped;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FFT.js
function fft(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    input
  } = inputs;
  return fftImpl(input, false, backend);
}
var fftConfig = {
  kernelName: FFT,
  backendName: "webgl",
  kernelFunc: fft
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/fill_gpu.js
var FillProgram = class {
  constructor(shape, value) {
    this.outputShape = [];
    this.customUniforms = [{
      name: "value",
      type: "float"
    }];
    this.variableNames = ["x"];
    this.outputShape = shape;
    this.userCode = `
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Fill.js
function fill(args) {
  const {
    backend,
    attrs
  } = args;
  const {
    shape,
    value
  } = attrs;
  let {
    dtype
  } = attrs;
  dtype = dtype || util_exports.inferDtype(value);
  if (dtype === "string") {
    const values = util_exports.getArrayFromDType(dtype, util_exports.sizeFromShape(shape));
    values.fill(value);
    return backend.makeTensorInfo(shape, dtype, values);
  } else {
    const program = new FillProgram(shape, value);
    const customValues = [[value]];
    return backend.runWebGLProgram(program, [], dtype, customValues);
  }
}
var fillConfig = {
  kernelName: Fill,
  backendName: "webgl",
  kernelFunc: fill
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/flip_left_right_gpu.js
var FlipLeftRightProgram = class {
  constructor(imageShape) {
    this.variableNames = ["Image"];
    this.outputShape = [];
    const imageWidth = imageShape[2];
    this.outputShape = imageShape;
    this.userCode = `
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${imageWidth} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${imageWidth}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FlipLeftRight.js
var flipLeftRightConfig = {
  kernelName: FlipLeftRight,
  backendName: "webgl",
  kernelFunc: ({
    inputs,
    backend
  }) => {
    const {
      image
    } = inputs;
    const webglBackend = backend;
    const program = new FlipLeftRightProgram(image.shape);
    const output = webglBackend.runWebGLProgram(program, [image], image.dtype);
    return output;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Floor.js
var FLOOR = `return floor(x);`;
var floor2 = unaryKernelFunc2({
  opSnippet: FLOOR,
  packedOpSnippet: FLOOR,
  cpuKernelImpl: floorImplCPU
});
var floorConfig2 = {
  kernelName: Floor,
  backendName: "webgl",
  kernelFunc: floor2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FloorDiv.js
var INT_DIV = `
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`;
var INT_DIV_PACKED = `
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`;
var floorDiv2 = binaryKernelFunc2({
  opSnippet: INT_DIV,
  packedOpSnippet: INT_DIV_PACKED,
  dtype: "int32"
});
var floorDivConfig2 = {
  kernelName: FloorDiv,
  backendName: "webgl",
  kernelFunc: floorDiv2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_gpu.js
var FromPixelsProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    const glsl = getGlslDifferences();
    const [height, width] = outputShape;
    this.outputShape = outputShape;
    this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${width}.0, ${height}.0);

        vec4 values = ${glsl.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_packed_gpu.js
var FromPixelsPackedProgram = class {
  constructor(outputShape) {
    this.variableNames = ["A"];
    this.packedInputs = false;
    this.packedOutput = true;
    const glsl = getGlslDifferences();
    const [height, width] = outputShape;
    this.outputShape = outputShape;
    this.userCode = `
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${width}.0, ${height}.0);
            vec4 values = ${glsl.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${glsl.output} = result;
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels.js
var fromPixelsConfig = {
  kernelName: FromPixels,
  backendName: "webgl",
  kernelFunc: fromPixels
};
var fromPixels2DContext;
var willReadFrequently = env().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");
function fromPixels(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  let {
    pixels
  } = inputs;
  const {
    numChannels
  } = attrs;
  const isVideo = typeof HTMLVideoElement !== "undefined" && pixels instanceof HTMLVideoElement;
  const isImage = typeof HTMLImageElement !== "undefined" && pixels instanceof HTMLImageElement;
  const [width, height] = isVideo ? [pixels.videoWidth, pixels.videoHeight] : [pixels.width, pixels.height];
  const texShape = [height, width];
  const outShape = [height, width, numChannels];
  if (isImage || isVideo) {
    const newWillReadFrequently = env().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");
    if (fromPixels2DContext == null || newWillReadFrequently !== willReadFrequently) {
      willReadFrequently = newWillReadFrequently;
      fromPixels2DContext = document.createElement("canvas").getContext("2d", {
        willReadFrequently
      });
    }
    fromPixels2DContext.canvas.width = width;
    fromPixels2DContext.canvas.height = height;
    fromPixels2DContext.drawImage(pixels, 0, 0, width, height);
    pixels = fromPixels2DContext.canvas;
  }
  const tempPixelHandle = backend.makeTensorInfo(texShape, "int32");
  backend.texData.get(tempPixelHandle.dataId).usage = TextureUsage.PIXELS;
  backend.gpgpu.uploadPixelDataToTexture(backend.getTexture(tempPixelHandle.dataId), pixels);
  const program = env().getBool("WEBGL_PACK") ? new FromPixelsPackedProgram(outShape) : new FromPixelsProgram(outShape);
  const res = backend.runWebGLProgram(program, [tempPixelHandle], "int32");
  backend.disposeData(tempPixelHandle.dataId);
  return res;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FusedConv2D.js
function fusedConv2d(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter,
    bias,
    preluActivationWeights
  } = inputs;
  const {
    strides,
    pad,
    dataFormat,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad, dimRoundingMode, false, $dataFormat);
  let out;
  const intermediates = [];
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  const hasLeakyreluAlpha = activation === "leakyrelu";
  const prepareInputs = () => {
    const inputs2 = [x, filter];
    const alignInputWithDataFormat = (input, dataFormat2) => {
      if (dataFormat2 === "NCHW" && input.shape.length === 1 && input.shape[0] !== 1) {
        const alignedInput = reshape2({
          inputs: {
            x: input
          },
          backend,
          attrs: {
            shape: [input.shape[0], 1, 1]
          }
        });
        intermediates.push(alignedInput);
        return alignedInput;
      }
      return input;
    };
    if (hasBias) {
      inputs2.push(alignInputWithDataFormat(bias, dataFormat));
    }
    if (hasPreluActivationWeights) {
      inputs2.push(alignInputWithDataFormat(preluActivationWeights, dataFormat));
    }
    if (hasLeakyreluAlpha) {
      const $leakyreluAlpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(leakyreluAlpha, "float32"));
      inputs2.push($leakyreluAlpha);
      intermediates.push($leakyreluAlpha);
    }
    return inputs2;
  };
  if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 && convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 && convInfo.strideHeight === 1 && convInfo.strideWidth === 1 && (convInfo.padInfo.type === "SAME" || convInfo.padInfo.type === "VALID")) {
    out = conv2dByMatMul({
      x,
      filter,
      convInfo,
      backend,
      bias,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    });
  } else if (convInfo.strideWidth <= 2 && $dataFormat === "channelsLast" && env().getBool("WEBGL_EXP_CONV")) {
    const fusedActivation = activation ? mapActivationToShaderProgram(activation, true) : null;
    const program = new Conv2DPackedProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
    const customValues = [[convInfo.padInfo.top, convInfo.padInfo.left], [convInfo.strideHeight, convInfo.strideWidth], [convInfo.dilationHeight, convInfo.dilationWidth], [convInfo.inHeight, convInfo.inWidth]];
    const inputs2 = prepareInputs();
    out = backend.runWebGLProgram(program, inputs2, "float32", customValues);
  } else if (env().getBool("WEBGL_CONV_IM2COL")) {
    out = conv2dWithIm2Row({
      x,
      filter,
      convInfo,
      backend,
      bias,
      activation,
      preluActivationWeights,
      leakyreluAlpha
    });
  } else {
    const fusedActivation = activation ? mapActivationToShaderProgram(activation, false) : null;
    const program = new Conv2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
    const inputs2 = prepareInputs();
    out = backend.runWebGLProgram(program, inputs2, "float32");
  }
  const outReshaped = reshape2({
    inputs: {
      x: out
    },
    backend,
    attrs: {
      shape: convInfo.outShape
    }
  });
  intermediates.push(out);
  intermediates.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return outReshaped;
}
var fusedConv2DConfig = {
  kernelName: FusedConv2D,
  backendName: "webgl",
  kernelFunc: fusedConv2d
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/FusedDepthwiseConv2D.js
function fusedDepthwiseConv2D(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter,
    bias,
    preluActivationWeights
  } = inputs;
  const {
    strides,
    pad,
    dilations,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  } = attrs;
  const intermediates = [];
  let $dilations = dilations;
  if ($dilations == null) {
    $dilations = [1, 1];
  }
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, $dilations), () => `Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${strides} and dilations '${$dilations}'`);
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    $dilations,
    pad,
    dimRoundingMode,
    true
    /* depthwise */
  );
  const shouldPackDepthwiseConv = env().getBool("WEBGL_PACK_DEPTHWISECONV") && convInfo.strideWidth <= 2 && convInfo.outChannels / convInfo.inChannels === 1;
  const fusedActivation = activation ? mapActivationToShaderProgram(activation, shouldPackDepthwiseConv) : null;
  const programInputs = [x, filter];
  const hasBias = bias != null;
  const hasPreluActivationWeights = preluActivationWeights != null;
  const hasLeakyreluAlpha = activation === "leakyrelu";
  if (hasBias) {
    programInputs.push(bias);
  }
  if (hasPreluActivationWeights) {
    programInputs.push(preluActivationWeights);
  }
  if (hasLeakyreluAlpha) {
    const $leakyreluAlpha = backend.makeTensorInfo([], "float32", util_exports.createScalarValue(leakyreluAlpha, "float32"));
    programInputs.push($leakyreluAlpha);
    intermediates.push($leakyreluAlpha);
  }
  let program;
  if (shouldPackDepthwiseConv) {
    program = new DepthwiseConvPacked2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
  } else {
    program = new DepthwiseConv2DProgram(convInfo, hasBias, fusedActivation, hasPreluActivationWeights, hasLeakyreluAlpha);
  }
  const customValues = [[convInfo.padInfo.top, convInfo.padInfo.left], [convInfo.strideHeight, convInfo.strideWidth], [convInfo.dilationHeight, convInfo.dilationWidth], [convInfo.inHeight, convInfo.inWidth]];
  const result = backend.runWebGLProgram(program, programInputs, "float32", customValues);
  intermediates.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
}
var fusedDepthwiseConv2DConfig = {
  kernelName: FusedDepthwiseConv2D,
  backendName: "webgl",
  kernelFunc: fusedDepthwiseConv2D
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/gather_nd_gpu.js
var GatherNDProgram = class {
  constructor(sliceDim, strides, shape, paramsShape) {
    this.sliceDim = sliceDim;
    this.strides = strides;
    this.paramsShape = paramsShape;
    this.variableNames = ["x", "indices"];
    this.outputShape = shape;
    const dtype = getCoordsDataType(shape.length);
    let mainLoop = `
    int index;`;
    for (let j = 0; j < this.sliceDim; j++) {
      mainLoop += `
          index = round(getIndices(coords[0], ${j}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[j]};
          flattenIndex += index * ${this.strides[j]};`;
    }
    this.userCode = `
         void main() {
          ${dtype} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${mainLoop}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/GatherNd.js
function gatherNd(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    params,
    indices
  } = inputs;
  const indicesShape = indices.shape;
  const sliceRank = indicesShape[indicesShape.length - 1];
  const paramsSize = util_exports.sizeFromShape(params.shape);
  const [resultShape, numSlices, sliceSize, strides] = backend_util_exports.prepareAndValidate(params, indices);
  const flattenIndices = reshape2({
    inputs: {
      x: indices
    },
    backend,
    attrs: {
      shape: [numSlices, sliceRank]
    }
  });
  const flattenX = reshape2({
    inputs: {
      x: params
    },
    backend,
    attrs: {
      shape: [util_exports.sizeFromShape(params.shape) / sliceSize, sliceSize]
    }
  });
  if (backend.shouldExecuteOnCPU([params, indices]) || params.dtype === "string") {
    const indicesData = backend.readSync(indices.dataId);
    const paramsBuf = backend.bufferSync(params);
    const outValue = gatherNdImplCPU(indicesData, paramsBuf, params.dtype, numSlices, sliceRank, sliceSize, strides, params.shape, paramsSize);
    return backend.makeTensorInfo(resultShape, params.dtype, outValue.values);
  }
  const program = new GatherNDProgram(sliceRank, strides, [numSlices, sliceSize], params.shape);
  const res = backend.runWebGLProgram(program, [flattenX, flattenIndices], flattenX.dtype);
  const reshaped = reshape2({
    inputs: {
      x: res
    },
    backend,
    attrs: {
      shape: resultShape
    }
  });
  backend.disposeIntermediateTensorInfo(flattenIndices);
  backend.disposeIntermediateTensorInfo(flattenX);
  backend.disposeIntermediateTensorInfo(res);
  return reshaped;
}
var gatherNdConfig = {
  kernelName: GatherNd,
  backendName: "webgl",
  kernelFunc: gatherNd
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/gather_gpu.js
var GatherProgram = class {
  constructor(aShape, outputShape) {
    this.variableNames = ["A", "indices"];
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    const dtype = getCoordsDataType(this.rank);
    const sourceCoords = getSourceCoords2(aShape, 2);
    this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${aShape[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${sourceCoords}));
      }
    `;
  }
};
function getSourceCoords2(aShape, axis) {
  const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"];
  const sourceCoords = [];
  for (let i = 0; i < aShape.length; i++) {
    if (i === 2) {
      sourceCoords.push("index");
    } else {
      sourceCoords.push(`${currentCoords[i]}`);
    }
  }
  return sourceCoords.join();
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/GatherV2.js
function gatherV2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    indices
  } = inputs;
  const {
    axis,
    batchDims
  } = attrs;
  const parsedAxis = util_exports.parseAxisParam(axis, x.shape)[0];
  if (env().get("DEBUG")) {
    const indicesVals = backend.readSync(indices.dataId);
    const axisDim = x.shape[parsedAxis];
    for (let i = 0; i < indicesVals.length; ++i) {
      const index = indicesVals[i];
      util_exports.assert(index <= axisDim - 1 && index >= 0, () => `GatherV2: the index value ${index} is not in [0, ${axisDim - 1}]`);
    }
  }
  const shapeInfo = backend_util_exports.segment_util.collectGatherOpShapeInfo(x, indices, parsedAxis, batchDims);
  const indicesSize = util_exports.sizeFromShape(indices.shape);
  const toDispose = [];
  const flattenX = reshape2({
    inputs: {
      x
    },
    backend,
    attrs: {
      shape: [shapeInfo.batchSize, shapeInfo.outerSize, shapeInfo.dimSize, shapeInfo.sliceSize]
    }
  });
  const flattenIndex = reshape2({
    inputs: {
      x: indices
    },
    backend,
    attrs: {
      shape: [shapeInfo.batchSize, indicesSize / shapeInfo.batchSize]
    }
  });
  toDispose.push(flattenX);
  toDispose.push(flattenIndex);
  const flattenOutputShape = [shapeInfo.batchSize, shapeInfo.outerSize, indicesSize / shapeInfo.batchSize, shapeInfo.sliceSize];
  if (backend.shouldExecuteOnCPU([x, indices]) || x.dtype === "string") {
    const indicesBuf = backend.bufferSync(flattenIndex);
    const xBuf = backend.bufferSync(flattenX);
    const outBuf = gatherV2ImplCPU(xBuf, indicesBuf, flattenOutputShape);
    toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
    return backend.makeTensorInfo(shapeInfo.outputShape, outBuf.dtype, outBuf.values);
  }
  const program = new GatherProgram(flattenX.shape, flattenOutputShape);
  const res = backend.runWebGLProgram(program, [flattenX, flattenIndex], flattenX.dtype);
  toDispose.push(res);
  const reshaped = reshape2({
    inputs: {
      x: res
    },
    backend,
    attrs: {
      shape: shapeInfo.outputShape
    }
  });
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return reshaped;
}
var gatherV2Config = {
  kernelName: GatherV2,
  backendName: "webgl",
  kernelFunc: gatherV2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Greater.js
var GREATER = `return float(a > b);`;
var GREATER_PACKED = `
  return vec4(greaterThan(a, b));
`;
var greater2 = binaryKernelFunc2({
  opSnippet: GREATER,
  packedOpSnippet: GREATER_PACKED,
  cpuKernelImpl: greaterImplCPU,
  dtype: "bool"
});
var greaterConfig2 = {
  kernelName: Greater,
  backendName: "webgl",
  kernelFunc: greater2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/GreaterEqual.js
var GREATER_EQUAL = `return float(a >= b);`;
var GREATER_EQUAL_PACKED = `
  return vec4(greaterThanEqual(a, b));
`;
var greaterEqual2 = binaryKernelFunc2({
  opSnippet: GREATER_EQUAL,
  packedOpSnippet: GREATER_EQUAL_PACKED,
  dtype: "bool",
  cpuKernelImpl: greaterEqualImplCPU
});
var greaterEqualConfig2 = {
  kernelName: GreaterEqual,
  backendName: "webgl",
  kernelFunc: greaterEqual2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/IFFT.js
function ifft(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    input
  } = inputs;
  return fftImpl(input, true, backend);
}
var ifftConfig = {
  kernelName: IFFT,
  backendName: "webgl",
  kernelFunc: ifft
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/IsFinite.js
var IS_FINITE = `return float(!isnan(x) && !isinf(x));`;
var isFinite = unaryKernelFunc2({
  opSnippet: IS_FINITE,
  dtype: "bool"
});
var isFiniteConfig = {
  kernelName: IsFinite,
  backendName: "webgl",
  kernelFunc: isFinite
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/IsInf.js
var IS_INF = `return float(isinf(x));`;
var isInf = unaryKernelFunc2({
  opSnippet: IS_INF,
  dtype: "bool"
});
var isInfConfig = {
  kernelName: IsInf,
  backendName: "webgl",
  kernelFunc: isInf
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/IsNaN.js
var IS_NAN = `return float(isnan(x));`;
var isNaN = unaryKernelFunc2({
  opSnippet: IS_NAN,
  dtype: "bool"
});
var isNaNConfig = {
  kernelName: IsNan,
  backendName: "webgl",
  kernelFunc: isNaN
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Less.js
var LESS = `return float(a < b);`;
var LESS_PACKED = `
  return vec4(lessThan(a, b));
`;
var less2 = binaryKernelFunc2({
  opSnippet: LESS,
  packedOpSnippet: LESS_PACKED,
  cpuKernelImpl: lessImplCPU,
  dtype: "bool"
});
var lessConfig2 = {
  kernelName: Less,
  backendName: "webgl",
  kernelFunc: less2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/LessEqual.js
var LESS_EQUAL = `return float(a <= b);`;
var LESS_EQUAL_PACKED = `
  return vec4(lessThanEqual(a, b));
`;
var lessEqual2 = binaryKernelFunc2({
  opSnippet: LESS_EQUAL,
  packedOpSnippet: LESS_EQUAL_PACKED,
  cpuKernelImpl: lessEqualImplCPU,
  dtype: "bool"
});
var lessEqualConfig2 = {
  kernelName: LessEqual,
  backendName: "webgl",
  kernelFunc: lessEqual2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/LinSpace.js
function linSpace(args) {
  const {
    backend,
    attrs
  } = args;
  const {
    start,
    stop,
    num
  } = attrs;
  const outVals = linSpaceImplCPU(start, stop, num);
  return backend.makeTensorInfo([outVals.length], "float32", outVals);
}
var linSpaceConfig = {
  kernelName: LinSpace,
  backendName: "webgl",
  kernelFunc: linSpace
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Log.js
var LOG = CHECK_NAN_SNIPPET_UNARY + `
  return x < 0.0 ? 0./0. : log(x);
`;
var LOG_PACKED = `
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`;
var log2 = unaryKernelFunc2({
  opSnippet: LOG,
  packedOpSnippet: LOG_PACKED,
  cpuKernelImpl: logImplCPU
});
var logConfig2 = {
  kernelName: Log,
  backendName: "webgl",
  kernelFunc: log2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Log1p.js
var LOG1P = CHECK_NAN_SNIPPET_UNARY + `
  return log(1.0 + x);
`;
var log1p = unaryKernelFunc2({
  opSnippet: LOG1P
});
var log1pConfig = {
  kernelName: Log1p,
  backendName: "webgl",
  kernelFunc: log1p
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalAnd.js
var LOGICAL_AND = `return float(a >= 1.0 && b >= 1.0);`;
var LOGICAL_AND_PACKED = `
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`;
var logicalAnd = binaryKernelFunc2({
  opSnippet: LOGICAL_AND,
  packedOpSnippet: LOGICAL_AND_PACKED,
  dtype: "bool"
});
var logicalAndConfig = {
  kernelName: LogicalAnd,
  backendName: "webgl",
  kernelFunc: logicalAnd
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalNot.js
var LOGICAL_NOT = `return float(!(x >= 1.0));`;
var logicalNot = unaryKernelFunc2({
  opSnippet: LOGICAL_NOT
});
var logicalNotConfig = {
  kernelName: LogicalNot,
  backendName: "webgl",
  kernelFunc: logicalNot
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalOr.js
var LOGICAL_OR = `return float(a >= 1.0 || b >= 1.0);`;
var LOGICAL_OR_PACKED = `
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`;
var logicalOr = binaryKernelFunc2({
  opSnippet: LOGICAL_OR,
  packedOpSnippet: LOGICAL_OR_PACKED,
  dtype: "bool"
});
var logicalOrConfig = {
  kernelName: LogicalOr,
  backendName: "webgl",
  kernelFunc: logicalOr
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_gpu.js
var LRNProgram = class {
  constructor(xShape, radius, bias, alpha, beta) {
    this.variableNames = ["x"];
    this.outputShape = [];
    const rad = radius;
    const maxD = xShape[3] - 1;
    this.outputShape = xShape;
    let powOperator;
    const basis = `float(${bias}) + float(${alpha}) * sum`;
    if (beta === 0.5) {
      powOperator = `inversesqrt(${basis})`;
    } else if (beta === 1) {
      powOperator = `1.0/(${basis})`;
    } else {
      powOperator = `exp(log(${basis}) * float(-${beta}));`;
    }
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${rad}; j <= ${rad}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${maxD}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${powOperator};
        setOutput(val);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_packed_gpu.js
var LRNPackedProgram = class {
  constructor(xShape, radius, bias, alpha, beta) {
    this.variableNames = ["x"];
    this.outputShape = [];
    this.packedInputs = true;
    this.packedOutput = true;
    const rad = radius;
    const maxD = xShape[3] - 1;
    this.outputShape = xShape;
    let powOperator;
    const basis = `float(${bias}) + float(${alpha}) * sum`;
    if (beta === 0.5) {
      powOperator = `inversesqrt(${basis})`;
    } else if (beta === 1) {
      powOperator = `1.0/(${basis})`;
    } else {
      powOperator = `exp(log(${basis}) * float(-${beta}));`;
    }
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${rad};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${rad}; j <= ${rad}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${maxD}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${powOperator};
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/LRN.js
var lrn = (args) => {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    depthRadius,
    bias,
    alpha,
    beta
  } = attrs;
  const program = env().getBool("WEBGL_PACK_NORMALIZATION") ? new LRNPackedProgram(x.shape, depthRadius, bias, alpha, beta) : new LRNProgram(x.shape, depthRadius, bias, alpha, beta);
  return backend.runWebGLProgram(program, [x], x.dtype);
};
var LRNConfig = {
  kernelName: LRN,
  backendName: "webgl",
  kernelFunc: lrn
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/lrn_grad_gpu.js
var LRNGradProgram = class {
  constructor(inputShape, depthRadius, bias, alpha, beta) {
    this.variableNames = ["inputImage", "outputImage", "dy"];
    this.outputShape = [];
    this.outputShape = inputShape;
    this.depth = inputShape[3];
    this.depthRadius = depthRadius;
    this.bias = bias;
    this.alpha = alpha;
    this.beta = beta;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${depthRadius})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${depthRadius} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${alpha}) * norm + float(${bias});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${alpha})
                * float(${beta})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${beta});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/LRNGrad.js
var lrnGrad = (args) => {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    y,
    dy
  } = inputs;
  const {
    depthRadius,
    bias,
    alpha,
    beta
  } = attrs;
  const program = new LRNGradProgram(x.shape, depthRadius, bias, alpha, beta);
  return backend.runWebGLProgram(program, [x, y, dy], x.dtype);
};
var LRNGradConfig = {
  kernelName: LRNGrad,
  backendName: "webgl",
  kernelFunc: lrnGrad
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Max_impl.js
function maxImpl2(x, reduceShape, outShape, backend) {
  const inSize = util_exports.sizeFromShape(reduceShape);
  const xSize = util_exports.sizeFromShape(x.shape);
  const batchSize = xSize / inSize;
  const reshapedInput = reshape2({
    inputs: {
      x
    },
    attrs: {
      shape: [batchSize, inSize]
    },
    backend
  });
  const reduced = reduce(reshapedInput, x.dtype, "max", backend);
  const reshapedOutput = reshape2({
    inputs: {
      x: reduced
    },
    attrs: {
      shape: outShape
    },
    backend
  });
  backend.disposeIntermediateTensorInfo(reshapedInput);
  backend.disposeIntermediateTensorInfo(reduced);
  return reshapedOutput;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Max.js
function max(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    reductionIndices,
    keepDims
  } = attrs;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(reductionIndices, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  const maxInputIsTransposed = permutedAxes != null;
  const shouldExecuteOnCPU = backend.shouldExecuteOnCPU([x]);
  let maxInput = x;
  if (maxInputIsTransposed) {
    if (shouldExecuteOnCPU) {
      const xTexData = backend.texData.get(maxInput.dataId);
      const values = xTexData.values;
      const newShape = new Array(xRank);
      for (let i = 0; i < newShape.length; i++) {
        newShape[i] = x.shape[permutedAxes[i]];
      }
      const maxInputValues = transposeImplCPU(values, x.shape, x.dtype, permutedAxes, newShape);
      maxInput = backend.makeTensorInfo(newShape, x.dtype);
      const maxInputData = backend.texData.get(maxInput.dataId);
      maxInputData.values = maxInputValues;
    } else {
      maxInput = transposeImpl2(x, permutedAxes, backend);
    }
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
  }
  backend_util_exports.assertAxesAreInnerMostDims("max", axes, xRank);
  const [maxOutShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(maxInput.shape, axes);
  let outShape = maxOutShape;
  if (keepDims) {
    outShape = backend_util_exports.expandShapeToKeepDim(maxOutShape, origAxes);
  }
  let out;
  if (shouldExecuteOnCPU) {
    const xTexData = backend.texData.get(maxInput.dataId);
    const values = xTexData.values;
    const outValues = maxImplCPU(values, util_exports.sizeFromShape(reduceShape), outShape, x.dtype);
    out = backend.makeTensorInfo(outShape, x.dtype);
    const outData = backend.texData.get(out.dataId);
    outData.values = outValues;
  } else {
    out = maxImpl2(maxInput, reduceShape, outShape, backend);
  }
  if (maxInputIsTransposed) {
    backend.disposeIntermediateTensorInfo(maxInput);
  }
  return out;
}
var maxConfig = {
  kernelName: Max,
  backendName: "webgl",
  kernelFunc: max
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Maximum.js
var MAXIMUM = CHECK_NAN_SNIPPET2 + `
  return max(a, b);
`;
var MAXIMUM_PACKED = `
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  ` + CHECK_NAN_SNIPPET_PACKED + `
  return result;
`;
var maximum2 = binaryKernelFunc2({
  opSnippet: MAXIMUM,
  packedOpSnippet: MAXIMUM_PACKED,
  cpuKernelImpl: maximumImplCPU
});
var maximumConfig2 = {
  kernelName: Maximum,
  backendName: "webgl",
  kernelFunc: maximum2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool.js
function maxPool(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  assertNotComplex(x, "maxPool");
  const {
    filterSize,
    strides,
    pad,
    dimRoundingMode
  } = attrs;
  const dilations = 1;
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
  if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 && util_exports.arraysEqual(convInfo.inShape, convInfo.outShape)) {
    return identity2({
      inputs: {
        x
      },
      backend
    });
  }
  const maxPoolProgram = new Pool2DProgram(convInfo, "max", false);
  return backend.runWebGLProgram(maxPoolProgram, [x], x.dtype);
}
var maxPoolConfig = {
  kernelName: MaxPool,
  backendName: "webgl",
  kernelFunc: maxPool
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3D.js
function maxPool3d(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    filterSize,
    strides,
    pad,
    dataFormat,
    dimRoundingMode
  } = attrs;
  const dilations = [1, 1, 1];
  const convInfo = backend_util_exports.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode, dataFormat);
  const maxPoolProgram = new Pool3DProgram(convInfo, "max", false);
  return backend.runWebGLProgram(maxPoolProgram, [x], x.dtype);
}
var maxPool3DConfig = {
  kernelName: MaxPool3D,
  backendName: "webgl",
  kernelFunc: maxPool3d
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js
var MaxPool2DBackpropProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "maxPos"];
    this.outputShape = convInfo.inShape;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
    const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
    const lastIndex = effectiveFilterHeight * effectiveFilterWidth - 1;
    this.userCode = `
      const ivec2 pads = ivec2(${padTop}, ${padLeft});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${effectiveFilterHeight};
          wR += ${dilationHeight}) {
          float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

          if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${effectiveFilterWidth}; wC++) {
            float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

            if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${lastIndex} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${effectiveFilterWidth} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};
var MaxPool3DBackpropProgram = class {
  constructor(convInfo) {
    this.variableNames = ["dy", "maxPos"];
    this.outputShape = convInfo.inShape;
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterDepth = convInfo.effectiveFilterDepth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padFront = effectiveFilterDepth - 1 - convInfo.padInfo.front;
    const padTop = effectiveFilterHeight - 1 - convInfo.padInfo.top;
    const padLeft = effectiveFilterWidth - 1 - convInfo.padInfo.left;
    const lastIndex = effectiveFilterDepth * effectiveFilterHeight * effectiveFilterWidth - 1;
    this.userCode = `
      const ivec3 pads = ivec3(${padFront}, ${padTop}, ${padLeft});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${effectiveFilterDepth};
           wD += ${dilationDepth}) {
          float dyD = float(dyDCorner + wD) / ${strideDepth}.0;

          if (dyD < 0.0 || dyD >= ${convInfo.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${effectiveFilterHeight};
              wR += ${dilationHeight}) {
            float dyR = float(dyRCorner + wR) / ${strideHeight}.0;

            if (dyR < 0.0 || dyR >= ${convInfo.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${effectiveFilterWidth};
                wC += ${dilationWidth}) {
              float dyC = float(dyCCorner + wC) / ${strideWidth}.0;

              if (dyC < 0.0 || dyC >= ${convInfo.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${lastIndex} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${effectiveFilterHeight} * ${effectiveFilterWidth} +
                  wR * ${effectiveFilterWidth} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3DGrad.js
function maxPool3DGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    input
  } = inputs;
  const x = input;
  const {
    filterSize,
    strides,
    pad,
    dimRoundingMode
  } = attrs;
  const dilations = [1, 1, 1];
  const convInfo = backend_util_exports.computePool3DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
  const maxPool3dPositionsProgram = new Pool3DProgram(
    convInfo,
    "max",
    true
    /* get positions */
  );
  const maxPool3dPositions = backend.runWebGLProgram(maxPool3dPositionsProgram, [x], x.dtype);
  const maxPoolBackpropProgram = new MaxPool3DBackpropProgram(convInfo);
  const result = backend.runWebGLProgram(maxPoolBackpropProgram, [dy, maxPool3dPositions], x.dtype);
  backend.disposeIntermediateTensorInfo(maxPool3dPositions);
  return result;
}
var maxPool3DGradConfig = {
  kernelName: MaxPool3DGrad,
  backendName: "webgl",
  kernelFunc: maxPool3DGrad
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolGrad.js
function maxPoolGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    input,
    output
  } = inputs;
  const x = input;
  assertNotComplex([input, output], "maxPoolGrad");
  const {
    filterSize,
    strides,
    pad,
    dimRoundingMode
  } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, 1, pad, dimRoundingMode);
  const getPositions = true;
  const maxPoolPositionsProgram = new Pool2DProgram(convInfo, "max", getPositions);
  const maxPoolPositions = backend.runWebGLProgram(maxPoolPositionsProgram, [x], x.dtype);
  const maxPoolBackPropProgram = new MaxPool2DBackpropProgram(convInfo);
  const result = backend.runWebGLProgram(maxPoolBackPropProgram, [dy, maxPoolPositions], x.dtype);
  backend.disposeIntermediateTensorInfo(maxPoolPositions);
  return result;
}
var maxPoolGradConfig = {
  kernelName: MaxPoolGrad,
  backendName: "webgl",
  kernelFunc: maxPoolGrad
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax_impl.js
function maxPoolWithArgmaxImpl(x, includeBatchInIndex, convInfo, backend) {
  let program = new Pool2DProgram(convInfo, "max", false);
  const poolOutput = backend.runWebGLProgram(program, [x], "float32");
  program = new Pool2DProgram(convInfo, "max", true, true, includeBatchInIndex);
  const indexOutput = backend.runWebGLProgram(program, [x], "float32");
  return [poolOutput, indexOutput];
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax.js
var maxPoolWithArgmaxConfig = {
  kernelName: MaxPoolWithArgmax,
  backendName: "webgl",
  kernelFunc: ({
    inputs,
    attrs,
    backend
  }) => {
    const {
      x
    } = inputs;
    const {
      filterSize,
      strides,
      pad,
      includeBatchInIndex
    } = attrs;
    const webglBackend = backend;
    util_exports.assert(x.shape.length === 4, () => `Error in maxPool: input must be rank 4 but got rank ${x.shape.length}.`);
    const dilations = [1, 1];
    util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
    const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, dilations, pad);
    const [result, indexes] = maxPoolWithArgmaxImpl(x, includeBatchInIndex, convInfo, webglBackend);
    return [result, indexes];
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mean_impl.js
function meanImpl(x, reduceShape, outShape, backend) {
  const inSize = util_exports.sizeFromShape(reduceShape);
  const xSize = util_exports.sizeFromShape(x.shape);
  const batchSize = xSize / inSize;
  const reshapedInput = reshape2({
    inputs: {
      x
    },
    attrs: {
      shape: [batchSize, inSize]
    },
    backend
  });
  const reduced = reduce(reshapedInput, "float32", "mean", backend);
  const reshapedOutput = reshape2({
    inputs: {
      x: reduced
    },
    attrs: {
      shape: outShape
    },
    backend
  });
  backend.disposeIntermediateTensorInfo(reshapedInput);
  backend.disposeIntermediateTensorInfo(reduced);
  return reshapedOutput;
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mean.js
var meanConfig = {
  kernelName: Mean,
  backendName: "webgl",
  kernelFunc: ({
    inputs,
    attrs,
    backend
  }) => {
    const {
      x
    } = inputs;
    const {
      keepDims,
      axis
    } = attrs;
    const webglBackend = backend;
    const xRank = x.shape.length;
    const origAxes = util_exports.parseAxisParam(axis, x.shape);
    let axes = origAxes;
    const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
    const meanInputIsTransposed = permutedAxes != null;
    const shouldExecuteOnCPU = webglBackend.shouldExecuteOnCPU([x]);
    const intermediates = [];
    let meanInput = x;
    if (meanInputIsTransposed) {
      if (shouldExecuteOnCPU) {
        const xTexData = webglBackend.texData.get(meanInput.dataId);
        const values = xTexData.values;
        const newShape = new Array(xRank);
        for (let i = 0; i < newShape.length; i++) {
          newShape[i] = x.shape[permutedAxes[i]];
        }
        const meanInputValues = transposeImplCPU(values, x.shape, x.dtype, permutedAxes, newShape);
        meanInput = webglBackend.makeTensorInfo(newShape, x.dtype);
        const meanInputData = webglBackend.texData.get(meanInput.dataId);
        meanInputData.values = meanInputValues;
      } else {
        meanInput = transposeImpl2(x, permutedAxes, webglBackend);
      }
      intermediates.push(meanInput);
      axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
    }
    backend_util_exports.assertAxesAreInnerMostDims("sum", axes, xRank);
    const [meanOutShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(meanInput.shape, axes);
    let outShape = meanOutShape;
    if (keepDims) {
      outShape = backend_util_exports.expandShapeToKeepDim(meanOutShape, origAxes);
    }
    const out = meanImpl(meanInput, reduceShape, outShape, webglBackend);
    for (const i of intermediates) {
      webglBackend.disposeIntermediateTensorInfo(i);
    }
    return out;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Min.js
function min(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    keepDims
  } = attrs;
  const xRank = x.shape.length;
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let permutedX = x;
  if (permutedAxes != null) {
    permutedX = transpose2({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutedAxes
      }
    });
    axes = backend_util_exports.getInnerMostAxes(axes.length, x.shape.length);
  }
  backend_util_exports.assertAxesAreInnerMostDims("min", axes, xRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, axes);
  const inSize = util_exports.sizeFromShape(reduceShape);
  const a2D = reshape2({
    inputs: {
      x: permutedX
    },
    backend,
    attrs: {
      shape: [-1, inSize]
    }
  });
  const reduced = reduce(a2D, a2D.dtype, "min", backend);
  let res;
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(outShape, origAxes);
    res = reshape2({
      inputs: {
        x: reduced
      },
      backend,
      attrs: {
        shape: newShape
      }
    });
  } else {
    res = reshape2({
      inputs: {
        x: reduced
      },
      backend,
      attrs: {
        shape: outShape
      }
    });
  }
  backend.disposeIntermediateTensorInfo(a2D);
  backend.disposeIntermediateTensorInfo(reduced);
  if (permutedAxes != null) {
    backend.disposeIntermediateTensorInfo(permutedX);
  }
  return res;
}
var minConfig = {
  kernelName: Min,
  backendName: "webgl",
  kernelFunc: min
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Minimum.js
var MINIMUM = CHECK_NAN_SNIPPET2 + `
  return min(a, b);
`;
var MINIMUM_PACKED = `
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  ` + CHECK_NAN_SNIPPET_PACKED + `
  return result;
`;
var minimum2 = binaryKernelFunc2({
  opSnippet: MINIMUM,
  packedOpSnippet: MINIMUM_PACKED,
  cpuKernelImpl: minimumImplCPU
});
var minimumConfig2 = {
  kernelName: Minimum,
  backendName: "webgl",
  kernelFunc: minimum2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/mirror_pad_gpu.js
var MirrorPadProgram = class {
  constructor(xShape, paddings, mode) {
    this.variableNames = ["x"];
    this.outputShape = paddings.map(
      (p, i) => p[0] + xShape[i] + p[1]
      /* afterPad */
    );
    const rank = xShape.length;
    const dtype = getCoordsDataType(rank);
    const start = paddings.map((p) => p[0]).join(",");
    const end = paddings.map((p, i) => p[0] + xShape[i]).join(",");
    const unpackedCoords = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, rank);
    const offset = mode === "reflect" ? 0 : 1;
    if (rank === 1) {
      this.userCode = `
        int start = ${start};
        int end = ${end};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${offset};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${offset};
          }
          setOutput(getX(outC - start));
        }
      `;
      return;
    }
    this.userCode = `
      ${dtype} start = ${dtype}(${start});
      ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outC = getOutputCoords();
        for (int i = 0; i < ${rank}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${offset};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${offset};
          }
        }
        ${dtype} coords = outC - start;
        setOutput(getX(${unpackedCoords}));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/mirror_pad_packed_gpu.js
var MirrorPadPackedProgram = class {
  constructor(xShape, paddings, mode) {
    this.variableNames = ["x"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = paddings.map(
      (p, i) => p[0] + xShape[i] + p[1]
      /* afterPad */
    );
    const rank = xShape.length;
    const dtype = getCoordsDataType(rank);
    const start = paddings.map((p) => p[0]).join(",");
    const end = paddings.map((p, i) => p[0] + xShape[i]).join(",");
    const coords2 = getChannels("rc", rank);
    const source = getChannels("source", rank);
    const cLimit = `${coords2[rank - 1]} < ${this.outputShape[rank - 1]}`;
    const innerDims = rank === 1 ? "source" : `vec2(${source.slice(-2).join()})`;
    const offset = mode === "reflect" ? 0 : 1;
    let mainLoop = "";
    if (rank === 1) {
      const padSetup = `
        ${dtype} source = rc;
        if (source < start) {
          source = start * 2 - source - ${offset};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${offset};
        }
        source -= start;
      `;
      mainLoop = `
        ${dtype} rc = outputLoc;
        ${padSetup}
        result[0] = getChannel(getX(${source.join()}), ${innerDims});
        ${coords2[rank - 1]} += 1;
        if(${cLimit}) {
          ${padSetup}
          result[1] = getChannel(getX(${source.join()}), ${innerDims});
        }
      `;
    } else {
      const padSetup = `
        ${dtype} source = rc;
        ${dtype} lt = ${dtype}(lessThan(source, start));
        ${dtype} gte = ${dtype}(greaterThanEqual(source, end));
        ${dtype} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${offset}) +
                gte * ((end - 1) * 2 - source + ${offset});
        source -= start;
      `;
      mainLoop = `
        ${dtype} rc = outputLoc;
        ${padSetup}
        result[0] = getChannel(getX(${source.join()}), ${innerDims});
        ${coords2[rank - 1]} += 1;
        if(${cLimit}) {
          ${padSetup}
          result[1] = getChannel(getX(${source.join()}), ${innerDims});
        }
        rc = outputLoc;
        ${coords2[rank - 2]} += 1;
        if(${coords2[rank - 2]} < ${this.outputShape[rank - 2]}) {
          ${padSetup}
          result[2] = getChannel(getX(${source.join()}), ${innerDims});
          ${coords2[rank - 1]} += 1;
          if(${cLimit}) {
            ${padSetup}
            result[3] = getChannel(getX(${source.join()}), ${innerDims});
          }
        }
      `;
    }
    this.userCode = `
      const ${dtype} start = ${dtype}(${start});
      const ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${mainLoop}
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/MirrorPad.js
var mirrorPadKernelFunc = ({
  inputs,
  backend,
  attrs
}) => {
  const {
    x
  } = inputs;
  const {
    paddings,
    mode
  } = attrs;
  const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new MirrorPadPackedProgram(x.shape, paddings, mode) : new MirrorPadProgram(x.shape, paddings, mode);
  const output = backend.runWebGLProgram(program, [x], x.dtype);
  return output;
};
var mirrorPadConfig = {
  kernelName: MirrorPad,
  backendName: "webgl",
  kernelFunc: mirrorPadKernelFunc
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Mod.js
var MOD = `if (b == 0.0) return NAN;
  return mod(a, b);`;
var MOD_PACKED = `
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  ` + CHECK_NAN_SNIPPET_PACKED + `
  return result;
`;
var mod = binaryKernelFunc2({
  opSnippet: MOD,
  packedOpSnippet: MOD_PACKED
});
var modConfig = {
  kernelName: Mod,
  backendName: "webgl",
  kernelFunc: mod
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/multinomial_gpu.js
var MultinomialProgram = class {
  constructor(batchSize, numOutcomes, numSamples) {
    this.variableNames = ["probs"];
    this.customUniforms = [{
      name: "seed",
      type: "float"
    }];
    this.outputShape = [batchSize, numSamples];
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${numOutcomes - 1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${numOutcomes - 1}));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/RealDiv.js
var DIV = `
if (a == b) {
  return 1.0;
};
return a / b;`;
var DIV_PACKED = `
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`;
var realDiv = binaryKernelFunc2({
  opSnippet: DIV,
  packedOpSnippet: DIV_PACKED,
  checkOutOfBounds: true
});
var realDivConfig = {
  kernelName: RealDiv,
  backendName: "webgl",
  kernelFunc: realDiv
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sub.js
var SUB = "return a - b;";
var sub2 = binaryKernelFunc2({
  opSnippet: SUB,
  packedOpSnippet: SUB,
  supportsComplex: true,
  cpuKernelImpl: subImplCPU
});
var subConfig2 = {
  kernelName: Sub,
  backendName: "webgl",
  kernelFunc: sub2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Softmax.js
function softmax(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    logits
  } = inputs;
  const {
    dim
  } = attrs;
  const axes = util_exports.parseAxisParam([dim], logits.shape);
  const maxLogit = max({
    inputs: {
      x: logits
    },
    backend,
    attrs: {
      reductionIndices: axes,
      keepDims: false
    }
  });
  const expandedShape = backend_util_exports.expandShapeToKeepDim(maxLogit.shape, axes);
  const maxLogitsReshaped = reshape2({
    inputs: {
      x: maxLogit
    },
    backend,
    attrs: {
      shape: expandedShape
    }
  });
  const a = sub2({
    inputs: {
      a: logits,
      b: maxLogitsReshaped
    },
    backend
  });
  const b = exp2({
    inputs: {
      x: a
    },
    backend
  });
  const sumExp = sum({
    inputs: {
      x: b
    },
    backend,
    attrs: {
      axis: axes,
      keepDims: false
    }
  });
  const sumExpReshaped = reshape2({
    inputs: {
      x: sumExp
    },
    backend,
    attrs: {
      shape: expandedShape
    }
  });
  const res = realDiv({
    inputs: {
      a: b,
      b: sumExpReshaped
    },
    backend
  });
  backend.disposeIntermediateTensorInfo(maxLogit);
  backend.disposeIntermediateTensorInfo(maxLogitsReshaped);
  backend.disposeIntermediateTensorInfo(a);
  backend.disposeIntermediateTensorInfo(b);
  backend.disposeIntermediateTensorInfo(sumExp);
  backend.disposeIntermediateTensorInfo(sumExpReshaped);
  return res;
}
var softmaxConfig = {
  kernelName: Softmax,
  backendName: "webgl",
  kernelFunc: softmax
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Multinomial.js
function multinomial(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    logits
  } = inputs;
  const {
    numSamples,
    seed,
    normalized
  } = attrs;
  const probs = normalized ? logits : softmax({
    inputs: {
      logits
    },
    backend,
    attrs: {
      dim: logits.shape.length - 1
    }
  });
  const batchSize = probs.shape[0];
  const numOutcomes = probs.shape[1];
  const program = new MultinomialProgram(batchSize, numOutcomes, numSamples);
  const customValues = [[seed]];
  const res = backend.runWebGLProgram(program, [probs], "int32", customValues);
  if (!normalized) {
    backend.disposeIntermediateTensorInfo(probs);
  }
  return res;
}
var multinomialConfig = {
  kernelName: Multinomial,
  backendName: "webgl",
  kernelFunc: multinomial
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Neg.js
var NEG = CHECK_NAN_SNIPPET + `
  return -x;
`;
var NEG_PACKED = `
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
function neg2(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  if (backend.shouldExecuteOnCPU([x])) {
    const xData = backend.texData.get(x.dataId);
    const [outValues, newShape] = negImplCPU(xData.values, x.shape, x.dtype);
    return backend.makeTensorInfo(newShape, x.dtype, outValues);
  }
  let program;
  if (env().getBool("WEBGL_PACK_UNARY_OPERATIONS")) {
    program = new UnaryOpPackedProgram(x.shape, NEG_PACKED);
  } else {
    program = new UnaryOpProgram(x.shape, NEG);
  }
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var negConfig2 = {
  kernelName: Neg,
  backendName: "webgl",
  kernelFunc: neg2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV3.js
var nonMaxSuppressionV3Impl = kernel_impls_exports.nonMaxSuppressionV3Impl;
function nonMaxSuppressionV3(args) {
  backend_util_exports.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    boxes,
    scores
  } = inputs;
  const {
    maxOutputSize,
    iouThreshold,
    scoreThreshold
  } = attrs;
  const boxesVals = backend.readSync(boxes.dataId);
  const scoresVals = backend.readSync(scores.dataId);
  const {
    selectedIndices
  } = nonMaxSuppressionV3Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold);
  return backend.makeTensorInfo([selectedIndices.length], "int32", new Int32Array(selectedIndices));
}
var nonMaxSuppressionV3Config = {
  kernelName: NonMaxSuppressionV3,
  backendName: "webgl",
  kernelFunc: nonMaxSuppressionV3
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV4.js
var nonMaxSuppressionV4Impl = kernel_impls_exports.nonMaxSuppressionV4Impl;
function nonMaxSuppressionV4(args) {
  backend_util_exports.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    boxes,
    scores
  } = inputs;
  const {
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    padToMaxOutputSize
  } = attrs;
  const boxesVals = backend.readSync(boxes.dataId);
  const scoresVals = backend.readSync(scores.dataId);
  const {
    selectedIndices,
    validOutputs
  } = nonMaxSuppressionV4Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
  return [backend.makeTensorInfo([selectedIndices.length], "int32", new Int32Array(selectedIndices)), backend.makeTensorInfo([], "int32", new Int32Array([validOutputs]))];
}
var nonMaxSuppressionV4Config = {
  kernelName: NonMaxSuppressionV4,
  backendName: "webgl",
  kernelFunc: nonMaxSuppressionV4
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV5.js
var nonMaxSuppressionV5Impl = kernel_impls_exports.nonMaxSuppressionV5Impl;
function nonMaxSuppressionV5(args) {
  backend_util_exports.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    boxes,
    scores
  } = inputs;
  const {
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma
  } = attrs;
  const boxesVals = backend.readSync(boxes.dataId);
  const scoresVals = backend.readSync(scores.dataId);
  const maxOutputSizeVal = maxOutputSize;
  const iouThresholdVal = iouThreshold;
  const scoreThresholdVal = scoreThreshold;
  const softNmsSigmaVal = softNmsSigma;
  const {
    selectedIndices,
    selectedScores
  } = nonMaxSuppressionV5Impl(boxesVals, scoresVals, maxOutputSizeVal, iouThresholdVal, scoreThresholdVal, softNmsSigmaVal);
  return [backend.makeTensorInfo([selectedIndices.length], "int32", new Int32Array(selectedIndices)), backend.makeTensorInfo([selectedScores.length], "float32", new Float32Array(selectedScores))];
}
var nonMaxSuppressionV5Config = {
  kernelName: NonMaxSuppressionV5,
  backendName: "webgl",
  kernelFunc: nonMaxSuppressionV5
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/onehot_gpu.js
var OneHotProgram = class {
  constructor(numIndices, depth, onValue, offValue) {
    this.variableNames = ["indices"];
    this.outputShape = [numIndices, depth];
    this.userCode = `
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${offValue}), float(${onValue}),
                      float(index == coords.y)));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/OneHot.js
var oneHot = (args) => {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    indices
  } = inputs;
  const {
    dtype,
    depth,
    onValue,
    offValue
  } = attrs;
  const indicesSize = util_exports.sizeFromShape(indices.shape);
  const program = new OneHotProgram(indicesSize, depth, onValue, offValue);
  const reshaped = reshape2({
    inputs: {
      x: indices
    },
    backend,
    attrs: {
      shape: [indicesSize]
    }
  });
  const result = backend.runWebGLProgram(program, [reshaped], dtype);
  backend.disposeIntermediateTensorInfo(reshaped);
  const outShape = [...indices.shape, depth];
  const out = reshape2({
    inputs: {
      x: result
    },
    backend,
    attrs: {
      shape: outShape
    }
  });
  backend.disposeIntermediateTensorInfo(result);
  return out;
};
var oneHotConfig = {
  kernelName: OneHot,
  backendName: "webgl",
  kernelFunc: oneHot
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ZerosLike.js
function zerosLike(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  if (x.dtype === "complex64") {
    const realPart = real2({
      inputs: {
        input: x
      },
      backend
    });
    const r = zerosLike({
      inputs: {
        x: realPart
      },
      backend
    });
    const imagPart = imag({
      inputs: {
        input: x
      },
      backend
    });
    const i = zerosLike({
      inputs: {
        x: imagPart
      },
      backend
    });
    const result = complex2({
      inputs: {
        real: r,
        imag: i
      },
      backend
    });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(r);
    backend.disposeIntermediateTensorInfo(imagPart);
    backend.disposeIntermediateTensorInfo(i);
    return result;
  } else {
    return fill({
      attrs: {
        shape: x.shape,
        dtype: x.dtype,
        value: x.dtype === "string" ? "" : 0
      },
      backend
    });
  }
}
var zerosLikeConfig = {
  kernelName: ZerosLike,
  backendName: "webgl",
  kernelFunc: zerosLike
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/OnesLike.js
function onesLike(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  if (x.dtype === "string") {
    throw new Error("onesLike is not supported under string dtype");
  } else if (x.dtype === "complex64") {
    const realPart = real2({
      inputs: {
        input: x
      },
      backend
    });
    const r = onesLike({
      inputs: {
        x: realPart
      },
      backend
    });
    const imagPart = imag({
      inputs: {
        input: x
      },
      backend
    });
    const i = zerosLike({
      inputs: {
        x: imagPart
      },
      backend
    });
    const result = complex2({
      inputs: {
        real: r,
        imag: i
      },
      backend
    });
    backend.disposeIntermediateTensorInfo(realPart);
    backend.disposeIntermediateTensorInfo(r);
    backend.disposeIntermediateTensorInfo(imagPart);
    backend.disposeIntermediateTensorInfo(i);
    return result;
  } else {
    return fill({
      attrs: {
        shape: x.shape,
        dtype: x.dtype,
        value: 1
      },
      backend
    });
  }
}
var onesLikeConfig = {
  kernelName: OnesLike,
  backendName: "webgl",
  kernelFunc: onesLike
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Pack.js
function pack(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    axis
  } = attrs;
  if (inputs.length === 1) {
    return expandDims({
      inputs: {
        input: inputs[0]
      },
      backend,
      attrs: {
        dim: axis
      }
    });
  }
  const shape = inputs[0].shape;
  const dtype = inputs[0].dtype;
  inputs.forEach((t) => {
    util_exports.assertShapesMatch(shape, t.shape, "All tensors passed to stack must have matching shapes");
    util_exports.assert(dtype === t.dtype, () => "All tensors passed to stack must have matching dtypes");
  });
  const intermediateTensorInfos = [];
  const expandedTensors = inputs.map((t) => {
    const expandedT = expandDims({
      inputs: {
        input: t
      },
      backend,
      attrs: {
        dim: axis
      }
    });
    intermediateTensorInfos.push(expandedT);
    return expandedT;
  });
  const result = concat({
    inputs: expandedTensors,
    backend,
    attrs: {
      axis
    }
  });
  intermediateTensorInfos.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
}
var packConfig = {
  kernelName: Pack,
  backendName: "webgl",
  kernelFunc: pack
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/pad_gpu.js
var PadProgram = class {
  constructor(xShape, paddings, constantValue) {
    this.variableNames = ["x"];
    this.customUniforms = [{
      name: "value",
      type: "float"
    }];
    this.outputShape = paddings.map(
      (p, i) => p[0] + xShape[i] + p[1]
      /* afterPad */
    );
    const rank = xShape.length;
    const type = getCoordsDataType(rank);
    const start = paddings.map((p) => p[0]).join(",");
    const end = paddings.map((p, i) => p[0] + xShape[i]).join(",");
    const unpackedCoords = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, rank);
    if (rank === 1) {
      this.userCode = `
        int start = ${start};
        int end = ${end};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;
      return;
    }
    this.userCode = `
      ${type} start = ${type}(${start});
      ${type} end = ${type}(${end});

      void main() {
        ${type} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${type} coords = outC - start;
          setOutput(getX(${unpackedCoords}));
        }
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/pad_packed_gpu.js
var PadPackedProgram = class {
  constructor(xShape, paddings, constantValue) {
    this.variableNames = ["x"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.customUniforms = [{
      name: "value",
      type: "float"
    }];
    this.outputShape = paddings.map(
      (p, i) => p[0] + xShape[i] + p[1]
      /* afterPad */
    );
    const rank = xShape.length;
    const dtype = getCoordsDataType(rank);
    const start = paddings.map((p) => p[0]).join(",");
    const end = paddings.map((p, i) => p[0] + xShape[i]).join(",");
    const coords2 = getChannels("rc", rank);
    const source = getChannels("source", rank);
    const cLimit = `${coords2[rank - 1]} < ${this.outputShape[rank - 1]}`;
    const innerDims = rank === 1 ? "source" : `vec2(${source.slice(-2).join()})`;
    const componentSetup = [`${dtype} rc = outputLoc;`, `${coords2[rank - 1]} += 1;
       if(${cLimit}) {
      `, rank === 1 ? "" : `}
       rc = outputLoc;
       ${coords2[rank - 2]} += 1;
       if(${coords2[rank - 2]} < ${this.outputShape[rank - 2]}) {`, rank === 1 ? "" : `  ${coords2[rank - 1]} += 1;
         if(${cLimit}) {`];
    const paddingArea = rank === 1 ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";
    let mainLoop = "";
    for (let i = 0, j = rank === 1 ? 2 : 4; i < j; i++) {
      mainLoop += `
        ${componentSetup[i]}
        if (${paddingArea}) {
          result[${i}] = float(value);
        } else {
          ${dtype} source = rc - start;
          result[${i}] = getChannel(getX(${source.join()}), ${innerDims});
        }
      `;
    }
    mainLoop += rank === 1 ? `} ` : `}}`;
    this.userCode = `
      const ${dtype} start = ${dtype}(${start});
      const ${dtype} end = ${dtype}(${end});

      void main() {
        ${dtype} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${mainLoop}
        setOutput(result);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/PadV2.js
var padV2 = (args) => {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    paddings,
    constantValue
  } = attrs;
  if (util_exports.sizeFromShape(x.shape) === 0) {
    const outputShape = paddings.map(
      (p, i) => p[0] + x.shape[i] + p[1]
      /* afterPad */
    );
    return fill({
      backend,
      attrs: {
        shape: outputShape,
        value: constantValue,
        dtype: x.dtype
      }
    });
  }
  const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new PadPackedProgram(x.shape, paddings, constantValue) : new PadProgram(x.shape, paddings, constantValue);
  const customValues = [[constantValue]];
  return backend.runWebGLProgram(program, [x], x.dtype, customValues);
};
var padV2Config = {
  kernelName: PadV2,
  backendName: "webgl",
  kernelFunc: padV2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Pow.js
var POW = `
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`;
var POW_PACKED = `
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  ` + CHECK_NAN_SNIPPET_PACKED + `
  return result;
`;
var pow = binaryKernelFunc2({
  opSnippet: POW,
  packedOpSnippet: POW_PACKED
});
var powConfig = {
  kernelName: Pow,
  backendName: "webgl",
  kernelFunc: pow
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Prod.js
function prod2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    keepDims
  } = attrs;
  const xRank = x.shape.length;
  const toDispose = [];
  const origAxes = util_exports.parseAxisParam(axis, x.shape);
  let axes = origAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let permutedX = x;
  if (permutedAxes != null) {
    permutedX = transpose2({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutedAxes
      }
    });
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
    toDispose.push(permutedX);
  }
  backend_util_exports.assertAxesAreInnerMostDims("prod", axes, xRank);
  let res;
  if (backend.shouldExecuteOnCPU([permutedX])) {
    const xVals = backend.texData.get(permutedX.dataId).values;
    const {
      outVals,
      outShape,
      outDtype
    } = prodImplCPU(permutedX.shape, permutedX.dtype, xVals, axes);
    res = backend.makeTensorInfo(outShape, outDtype, outVals);
  } else {
    const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(permutedX.shape, axes);
    const inSize = util_exports.sizeFromShape(reduceShape);
    const a2D = reshape2({
      inputs: {
        x: permutedX
      },
      backend,
      attrs: {
        shape: [-1, inSize]
      }
    });
    const outputDType = sumOutType(x.dtype);
    const reduced = reduce(a2D, outputDType, "prod", backend);
    res = reshape2({
      inputs: {
        x: reduced
      },
      backend,
      attrs: {
        shape: outShape
      }
    });
    toDispose.push(a2D);
    toDispose.push(reduced);
  }
  if (keepDims) {
    toDispose.push(res);
    const newShape = backend_util_exports.expandShapeToKeepDim(res.shape, origAxes);
    res = reshape2({
      inputs: {
        x: res
      },
      backend,
      attrs: {
        shape: newShape
      }
    });
  }
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return res;
}
var prodConfig2 = {
  kernelName: Prod,
  backendName: "webgl",
  kernelFunc: prod2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedGather.js
function raggedGather(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    paramsNestedSplits,
    paramsDenseValues,
    indices
  } = inputs;
  const {
    outputRaggedRank
  } = attrs;
  const $paramsNestedSplits = paramsNestedSplits.map((t) => backend.readSync(t.dataId));
  const $paramsNestedSplitsShapes = paramsNestedSplits.map((t) => t.shape);
  const $paramsDenseValues = backend.readSync(paramsDenseValues.dataId);
  const $indices = backend.readSync(indices.dataId);
  const [outputNestedSplits, outputDenseValues, outputDenseValuesShape] = raggedGatherImplCPU($paramsNestedSplits, $paramsNestedSplitsShapes, $paramsDenseValues, paramsDenseValues.shape, paramsDenseValues.dtype, $indices, indices.shape, outputRaggedRank);
  const outputNestedSplitsTensors = outputNestedSplits.map((splits) => backend.makeTensorInfo([splits.length], "int32", splits));
  const outputDenseValuesTensor = backend.makeTensorInfo(outputDenseValuesShape, paramsDenseValues.dtype, outputDenseValues);
  return outputNestedSplitsTensors.concat([outputDenseValuesTensor]);
}
var raggedGatherConfig = {
  kernelName: RaggedGather,
  backendName: "webgl",
  kernelFunc: raggedGather
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedRange.js
function raggedRange(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    starts,
    limits,
    deltas
  } = inputs;
  const $starts = backend.readSync(starts.dataId);
  const $limits = backend.readSync(limits.dataId);
  const $deltas = backend.readSync(deltas.dataId);
  const [rtNestedSplitsData, rtDenseValuesData] = raggedRangeImplCPU($starts, starts.shape, starts.dtype, $limits, limits.shape, $deltas, deltas.shape);
  const rtNestedSplits = backend.makeTensorInfo([rtNestedSplitsData.length], "int32", rtNestedSplitsData);
  const rtDenseValues = backend.makeTensorInfo([rtDenseValuesData.length], starts.dtype, rtDenseValuesData);
  return [rtNestedSplits, rtDenseValues];
}
var raggedRangeConfig = {
  kernelName: RaggedRange,
  backendName: "webgl",
  kernelFunc: raggedRange
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedTensorToTensor.js
function raggedTensorToTensor(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    shape,
    values,
    defaultValue,
    rowPartitionTensors
  } = inputs;
  const {
    rowPartitionTypes
  } = attrs;
  const $shape = backend.readSync(shape.dataId);
  const $values = backend.readSync(values.dataId);
  const $defaultValue = backend.readSync(defaultValue.dataId);
  const $rowPartitionValues = rowPartitionTensors.map((t) => backend.readSync(t.dataId));
  const rowPartitionValuesShapes = rowPartitionTensors.map((t) => t.shape);
  const [outputShape, output] = raggedTensorToTensorImplCPU($shape, shape.shape, $values, values.shape, values.dtype, $defaultValue, defaultValue.shape, $rowPartitionValues, rowPartitionValuesShapes, rowPartitionTypes);
  return backend.makeTensorInfo(outputShape, values.dtype, output);
}
var raggedTensorToTensorConfig = {
  kernelName: RaggedTensorToTensor,
  backendName: "webgl",
  kernelFunc: raggedTensorToTensor
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Range.js
var range = (args) => {
  const {
    backend,
    attrs
  } = args;
  const {
    start,
    stop,
    step: step2,
    dtype
  } = attrs;
  const values = rangeImplCPU(start, stop, step2, dtype);
  return backend.makeTensorInfo([values.length], dtype, values);
};
var rangeConfig = {
  kernelName: Range,
  backendName: "webgl",
  kernelFunc: range
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reciprocal.js
var RECIPROCAL = `return 1.0 / x;`;
var reciprocal = unaryKernelFunc2({
  opSnippet: RECIPROCAL
});
var reciprocalConfig = {
  kernelName: Reciprocal,
  backendName: "webgl",
  kernelFunc: reciprocal
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Relu.js
var RELU3 = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : x;
`;
var RELU_PACKED = `
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var relu = unaryKernelFunc2({
  opSnippet: RELU3,
  packedOpSnippet: RELU_PACKED
});
var reluConfig = {
  kernelName: Relu,
  backendName: "webgl",
  kernelFunc: relu
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Relu6.js
var RELU63 = CHECK_NAN_SNIPPET + `
  return (x < 0.0) ? 0.0 : min(6.0, x);
`;
var RELU6_PACKED = `
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var relu6 = unaryKernelFunc2({
  opSnippet: RELU63,
  packedOpSnippet: RELU6_PACKED
});
var relu6Config = {
  kernelName: Relu6,
  backendName: "webgl",
  kernelFunc: relu6
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_gpu.js
var ResizeBilinearProgram = class {
  constructor(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
    this.variableNames = ["A"];
    this.outputShape = [];
    const [batch, oldHeight, oldWidth, depth] = inputShape;
    this.outputShape = [batch, newHeight, newWidth, depth];
    const effectiveInSize = [alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight, alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth];
    const effectiveOutSize = [alignCorners && newHeight > 1 ? newHeight - 1 : newHeight, alignCorners && newWidth > 1 ? newWidth - 1 : newWidth];
    let sourceFracIndexRC;
    if (halfPixelCenters) {
      sourceFracIndexRC = `(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`;
    } else {
      sourceFracIndexRC = `vec2(yRC) * effectiveInputOverOutputRatioRC`;
    }
    this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec2 inputShapeRC = vec2(${oldHeight}.0, ${oldWidth}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${sourceFracIndexRC};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_packed_gpu.js
var ResizeBilinearPackedProgram = class {
  constructor(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = [];
    const [batch, oldHeight, oldWidth, depth] = inputShape;
    this.outputShape = [batch, newHeight, newWidth, depth];
    const effectiveInSize = [alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight, alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth];
    const effectiveOutSize = [alignCorners && newHeight > 1 ? newHeight - 1 : newHeight, alignCorners && newWidth > 1 ? newWidth - 1 : newWidth];
    let sourceFracIndexRC;
    if (halfPixelCenters) {
      sourceFracIndexRC = `(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`;
    } else {
      sourceFracIndexRC = `vec3(yRC) * effectiveInputOverOutputRatioRC`;
    }
    this.userCode = `
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec3 inputShapeRC = vec3(${oldHeight}.0, ${oldWidth}.0,
                                     ${oldWidth}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${sourceFracIndexRC};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${depth - 1};
        bool hasNextRow = coords.z < ${newWidth - 1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinear.js
function resizeBilinear(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    images
  } = inputs;
  const {
    alignCorners,
    halfPixelCenters,
    size
  } = attrs;
  const [newHeight, newWidth] = size;
  const program = env().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new ResizeBilinearPackedProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters) : new ResizeBilinearProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters);
  return backend.runWebGLProgram(program, [images], "float32");
}
var resizeBilinearConfig = {
  kernelName: ResizeBilinear,
  backendName: "webgl",
  kernelFunc: resizeBilinear
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_backprop_gpu.js
var ResizeBilinearBackpropProgram = class {
  constructor(dyShape, inputShape, alignCorners) {
    this.variableNames = ["dy"];
    this.outputShape = [];
    this.outputShape = inputShape;
    const [, xHeight, xWidth] = inputShape;
    const [, yHeight, yWidth] = dyShape;
    const effectiveXSize = [alignCorners && yHeight > 1 ? xHeight - 1 : xHeight, alignCorners && yWidth > 1 ? xWidth - 1 : xWidth];
    const effectiveYSize = [alignCorners && yHeight > 1 ? yHeight - 1 : yHeight, alignCorners && yWidth > 1 ? yWidth - 1 : yWidth];
    const heightScale = effectiveXSize[0] / effectiveYSize[0];
    const widthScale = effectiveXSize[1] / effectiveYSize[1];
    const invHeightScale = 1 / heightScale;
    const invWidthScale = 1 / widthScale;
    const winHeight = Math.ceil(invHeightScale) * 2 + 2;
    const winWidth = Math.ceil(invWidthScale) * 2 + 2;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${heightScale});
        const float widthScale = float(${widthScale});

        const float invHeightScale = float(${invHeightScale});
        const float invWidthScale = float(${invWidthScale});

        const int winHeight = int(${winHeight});
        const int winWidth = int(${winWidth});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${yHeight}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${yWidth}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${xHeight - 1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${xWidth - 1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinearGrad.js
function resizeBilinearGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    images,
    dy
  } = inputs;
  const {
    alignCorners
  } = attrs;
  const program = new ResizeBilinearBackpropProgram(dy.shape, images.shape, alignCorners);
  return backend.runWebGLProgram(program, [dy], dy.dtype);
}
var resizeBilinearGradConfig = {
  kernelName: ResizeBilinearGrad,
  backendName: "webgl",
  kernelFunc: resizeBilinearGrad
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_gpu.js
var ResizeNearestNeighborProgram = class {
  constructor(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
    this.variableNames = ["A"];
    this.outputShape = [];
    const [batch, oldHeight, oldWidth, depth] = inputShape;
    this.outputShape = [batch, newHeight, newWidth, depth];
    const effectiveInSize = [alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight, alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth];
    const effectiveOutSize = [alignCorners && newHeight > 1 ? newHeight - 1 : newHeight, alignCorners && newWidth > 1 ? newWidth - 1 : newWidth];
    const roundBase = alignCorners ? "0.5" : "0.0";
    let sourceFracIndexRC;
    if (halfPixelCenters) {
      sourceFracIndexRC = `max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`;
    } else {
      sourceFracIndexRC = `vec2(yRC) * effectiveInputOverOutputRatioRC`;
    }
    this.userCode = `
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec2 inputShapeRC = vec2(${oldHeight}.0, ${oldWidth}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${sourceFracIndexRC};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${roundBase})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_packed_gpu.js
var ResizeNearestNeighborPackedProgram = class {
  constructor(inputShape, newHeight, newWidth, alignCorners, halfPixelCenters) {
    this.variableNames = ["A"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = [];
    const [batch, oldHeight, oldWidth, depth] = inputShape;
    this.outputShape = [batch, newHeight, newWidth, depth];
    const effectiveInSize = [alignCorners && newHeight > 1 ? oldHeight - 1 : oldHeight, alignCorners && newWidth > 1 ? oldWidth - 1 : oldWidth];
    const effectiveOutSize = [alignCorners && newHeight > 1 ? newHeight - 1 : newHeight, alignCorners && newWidth > 1 ? newWidth - 1 : newWidth];
    const roundBase = alignCorners ? "0.5" : "0.0";
    let sourceFracIndexRC;
    if (halfPixelCenters) {
      sourceFracIndexRC = `max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`;
    } else {
      sourceFracIndexRC = `vec3(yRC) * effectiveInputOverOutputRatioRC`;
    }
    this.userCode = `
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${effectiveInSize[0] / effectiveOutSize[0]},
          ${effectiveInSize[1] / effectiveOutSize[1]},
          ${effectiveInSize[1] / effectiveOutSize[1]});
      const vec3 inputShapeRC = vec3(${oldHeight}.0, ${oldWidth}.0,
                                     ${oldWidth}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${sourceFracIndexRC};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${roundBase})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${depth - 1};
        bool hasNextRow = coords.z < ${newWidth - 1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighbor.js
function resizeNearestNeighbor(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    images
  } = inputs;
  const {
    alignCorners,
    halfPixelCenters,
    size
  } = attrs;
  const [newHeight, newWidth] = size;
  const program = env().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new ResizeNearestNeighborPackedProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters) : new ResizeNearestNeighborProgram(images.shape, newHeight, newWidth, alignCorners, halfPixelCenters);
  return backend.runWebGLProgram(program, [images], images.dtype);
}
var resizeNearestNeighborConfig = {
  kernelName: ResizeNearestNeighbor,
  backendName: "webgl",
  kernelFunc: resizeNearestNeighbor
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_backprop_gpu.js
var ResizeNearestNeigborBackpropProgram = class {
  constructor(dyShape, inputShape, alignCorners) {
    this.variableNames = ["dy"];
    this.outputShape = [];
    this.outputShape = inputShape;
    const [, xHeight, xWidth] = inputShape;
    const [, yHeight, yWidth] = dyShape;
    const effectiveXSize = [alignCorners && yHeight > 1 ? xHeight - 1 : xHeight, alignCorners && yWidth > 1 ? xWidth - 1 : xWidth];
    const effectiveYSize = [alignCorners && yHeight > 1 ? yHeight - 1 : yHeight, alignCorners && yWidth > 1 ? yWidth - 1 : yWidth];
    const heightScale = effectiveXSize[0] / effectiveYSize[0];
    const widthScale = effectiveXSize[1] / effectiveYSize[1];
    const invHeightScale = 1 / heightScale;
    const invWidthScale = 1 / widthScale;
    const winHeight = Math.ceil(invHeightScale) * 2 + 2;
    const winWidth = Math.ceil(invWidthScale) * 2 + 2;
    this.userCode = `
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${heightScale});
        const float widthScale = float(${widthScale});

        const float invHeightScale = float(${invHeightScale});
        const float invWidthScale = float(${invWidthScale});

        const int winHeight = int(${winHeight});
        const int winWidth = int(${winWidth});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${yHeight}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${yWidth}) {
              continue;
            }

            float sourceFracRow =
              float(${effectiveXSize[0]}) *
                (float(dyR) / float(${effectiveYSize[0]}));

            float sourceFracCol =
                float(${effectiveXSize[1]}) *
                  (float(dyC) / float(${effectiveYSize[1]}));

            int sourceNearestRow = int(min(
                float(int(${xHeight}) - 1),
                ${alignCorners} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${xWidth}) - 1),
                ${alignCorners} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighborGrad.js
function resizeNearestNeighborGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    images,
    dy
  } = inputs;
  const {
    alignCorners
  } = attrs;
  const program = new ResizeNearestNeigborBackpropProgram(dy.shape, images.shape, alignCorners);
  return backend.runWebGLProgram(program, [dy], dy.dtype);
}
var resizeNearestNeighborGradConfig = {
  kernelName: ResizeNearestNeighborGrad,
  backendName: "webgl",
  kernelFunc: resizeNearestNeighborGrad
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/reverse_gpu.js
var ReverseProgram = class {
  constructor(xShape, axis) {
    this.variableNames = ["x"];
    const rank = xShape.length;
    if (rank > 4) {
      throw new Error(`WebGL backend: Reverse of rank-${rank} tensor is not yet supported`);
    }
    this.outputShape = xShape;
    if (rank === 1) {
      this.userCode = `
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${xShape[0]} - coord - 1));
        }
      `;
      return;
    }
    const getInCoord = (i) => {
      if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
        return `${xShape[i]} - coords[${i}] - 1`;
      }
      return `coords[${i}]`;
    };
    const inCoords = xShape.map((_, i) => getInCoord(i)).join(",");
    const type = getCoordsDataType(rank);
    this.userCode = `
      void main() {
        ${type} coords = getOutputCoords();
        setOutput(getX(${inCoords}));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/reverse_packed_gpu.js
var ReversePackedProgram = class {
  constructor(xShape, axis) {
    this.variableNames = ["x"];
    this.packedInputs = true;
    this.packedOutput = true;
    const rank = xShape.length;
    if (rank > 4) {
      throw new Error(`WebGL backend: Reverse of rank-${rank} tensor is not yet supported`);
    }
    this.outputShape = xShape;
    const channels = getChannels("rc", rank);
    const nextColumn = `${channels[rank - 1]} + 1 < ${this.outputShape[rank - 1]}`;
    const nextRow = `${channels[rank - 2]} + 1 < ${this.outputShape[rank - 2]}`;
    const type = getCoordsDataType(rank);
    if (rank === 1) {
      this.userCode = `
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${xShape[0]} - rc - 1),
            ${xShape[0]} - rc - 1);
          if(${nextColumn}){
              result.g = getChannel(getX(${xShape[0]} - (rc  + 1) - 1),
                ${xShape[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `;
    } else {
      this.userCode = `
        void main() {
          ${type} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${getR(channels.slice())};
          if(${nextColumn}){
            result.g = ${getG(channels.slice())};
          }
          if(${nextRow}) {
            result.b = ${getB(channels.slice())};
            if(${nextColumn}) {
              result.a = ${getA(channels.slice())};
            }
          }
          setOutput(result);
        }
    `;
    }
    function getR(channels2) {
      return getChannel(channels2);
    }
    function getG(channels2) {
      channels2[rank - 1] = "(" + channels2[rank - 1] + ` + 1)`;
      return getChannel(channels2);
    }
    function getB(channels2) {
      channels2[rank - 2] = "(" + channels2[rank - 2] + ` + 1)`;
      return getChannel(channels2);
    }
    function getA(channels2) {
      channels2[rank - 1] = "(" + channels2[rank - 1] + ` + 1)`;
      channels2[rank - 2] = "(" + channels2[rank - 2] + ` + 1)`;
      return getChannel(channels2);
    }
    function getChannel(channels2) {
      const inCoordsArray = xShape.map((_, i) => getInCoord(i, channels2));
      const inCoords = inCoordsArray.join(",");
      const innerDims = inCoordsArray.slice(-2).join(",");
      return `getChannel(getX(${inCoords}), vec2(${innerDims}))`;
    }
    function getInCoord(i, channels1) {
      if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
        return `${xShape[i]} - ${channels1[i]} - 1`;
      } else {
        return `${channels1[i]}`;
      }
    }
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Reverse.js
function reverse(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    dims
  } = attrs;
  const xRank = x.shape.length;
  const $dims = util_exports.parseAxisParam(dims, x.shape);
  if (xRank === 0) {
    return identity2({
      inputs: {
        x
      },
      backend
    });
  }
  const program = env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new ReversePackedProgram(x.shape, $dims) : new ReverseProgram(x.shape, $dims);
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var reverseConfig = {
  kernelName: Reverse,
  backendName: "webgl",
  kernelFunc: reverse
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/rotate_gpu.js
var RotateProgram = class {
  constructor(imageShape, fillValue) {
    this.variableNames = ["Image"];
    this.outputShape = [];
    this.customUniforms = [{
      name: "params",
      type: "vec4"
    }];
    const imageHeight = imageShape[1];
    const imageWidth = imageShape[2];
    this.outputShape = imageShape;
    let fillSnippet = "";
    if (typeof fillValue === "number") {
      fillSnippet = `float outputValue = ${fillValue.toFixed(2)};`;
    } else {
      fillSnippet = `
        vec3 fill = vec3(${fillValue.join(",")});
        float outputValue = fill[coords[3]];`;
    }
    this.userCode = `
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${fillSnippet}
          if(coordX >= 0 && coordX < ${imageWidth} && coordY >= 0 && coordY < ${imageHeight}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/RotateWithOffset.js
var rotateWithOffsetConfig = {
  kernelName: RotateWithOffset,
  backendName: "webgl",
  kernelFunc: ({
    inputs,
    attrs,
    backend
  }) => {
    const {
      image
    } = inputs;
    const {
      radians,
      fillValue,
      center
    } = attrs;
    const webglBackend = backend;
    const program = new RotateProgram(image.shape, fillValue);
    const [centerX, centerY] = backend_util_exports.getImageCenter(center, image.shape[1], image.shape[2]);
    const customValues = [[centerX, centerY, Math.sin(radians), Math.cos(radians)]];
    const output = webglBackend.runWebGLProgram(program, [image], image.dtype, customValues);
    return output;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Round.js
var ROUND = `
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`;
var round = unaryKernelFunc2({
  opSnippet: ROUND
});
var roundConfig = {
  kernelName: Round,
  backendName: "webgl",
  kernelFunc: round
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Rsqrt.js
var RSQRT = `return inversesqrt(x);`;
var rsqrt2 = unaryKernelFunc2({
  opSnippet: RSQRT,
  cpuKernelImpl: rsqrtImplCPU
});
var rsqrtConfig2 = {
  kernelName: Rsqrt,
  backendName: "webgl",
  kernelFunc: rsqrt2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/scatter_gpu.js
var ScatterProgram = class {
  constructor(updateSize, sliceDim, indicesRank, updatesRank, strides, shape, summingDupeIndex = true, defaultIsTensor = false) {
    this.variableNames = ["updates", "indices", "defaultValue"];
    this.outputShape = shape;
    const stridesType = getCoordsDataType(strides.length);
    const dtype = getCoordsDataType(shape.length);
    let indicesString = "";
    if (indicesRank === 1) {
      indicesString = "i";
    } else if (indicesRank === 2) {
      indicesString = "i, j";
    }
    const indicesSnippet = `getIndices(${indicesString})`;
    let updatesString = "";
    if (updatesRank === 1) {
      updatesString = "i";
    } else if (updatesRank === 2) {
      updatesString = "i, coords[1]";
    }
    const updatesSnippet = `getUpdates(${updatesString})`;
    let defaultValuesString = "";
    if (defaultIsTensor) {
      defaultValuesString = "coords[0], coords[1]";
    }
    const defaultValueSnippet = `getDefaultValue(${defaultValuesString})`;
    const strideString = sliceDim > 1 ? "strides[j]" : "strides";
    this.userCode = `
        ${stridesType} strides = ${stridesType}(${strides});

        void main() {
          ${dtype} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${updateSize}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${sliceDim}; j++) {
              int index = round(${indicesSnippet});
              flattenedIndex += index * ${strideString};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${updatesSnippet};
              found = true;
            }
          }
          setOutput(mix(${defaultValueSnippet}, sum, float(found)));
        }
      `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/scatter_packed_gpu.js
var ScatterPackedProgram = class {
  constructor(updateSize, sliceDim, indicesRank, updatesRank, strides, shape, summingDupeIndex = true, defaultIsTensor = false) {
    this.variableNames = ["updates", "indices", "defaultValue"];
    this.packedInputs = true;
    this.packedOutput = true;
    this.outputShape = shape;
    const stridesType = getCoordsDataType(strides.length);
    const dtype = getCoordsDataType(shape.length);
    let indicesString = "";
    if (indicesRank === 1) {
      indicesString = "i";
    } else if (indicesRank === 2) {
      indicesString = "i, j";
    }
    const indicesSnippet = `getIndices(${indicesString})`;
    let updatesString = "";
    if (updatesRank === 1) {
      updatesString = "i";
    } else if (updatesRank === 2) {
      updatesString = "i, coords[1]";
    }
    const updatesSnippet = `getUpdates(${updatesString})`;
    let defaultValuesString = "";
    if (defaultIsTensor) {
      defaultValuesString = "coords[0], coords[1]";
    }
    const defaultValueSnippet = `getDefaultValue(${defaultValuesString})`;
    const strideString = sliceDim > 1 ? "strides[j]" : "strides";
    const strideString2 = sliceDim > 1 ? "strides[j + 1]" : "strides";
    this.userCode = `
        ${stridesType} strides = ${stridesType}(${strides});

        void main() {
          ${dtype} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${updateSize}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${sliceDim}; j+=2) {
              ivec4 index = round(${indicesSnippet});
              flattenedIndex += index.xz * ${strideString};
              if (j + 1 < ${sliceDim}) {
                flattenedIndex += index.yw * ${strideString2};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${updatesSnippet};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${defaultValueSnippet}, sum, found));
        }
      `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/ScatterNd.js
function scatterNd(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    indices,
    updates
  } = inputs;
  const {
    shape
  } = attrs;
  const {
    sliceRank,
    numUpdates,
    sliceSize,
    strides,
    outputSize
  } = backend_util_exports.calculateShapes(updates, indices, shape);
  const flattenShape = [outputSize / sliceSize, sliceSize];
  if (outputSize === 0) {
    return backend.makeTensorInfo(shape, indices.dtype);
  }
  const flattenIndices = reshape2({
    inputs: {
      x: indices
    },
    backend,
    attrs: {
      shape: [numUpdates, sliceRank]
    }
  });
  const flattenX = reshape2({
    inputs: {
      x: updates
    },
    backend,
    attrs: {
      shape: [numUpdates, sliceSize]
    }
  });
  const defaultValue = backend.makeTensorInfo([], "float32", new Float32Array([0]));
  let program;
  if (env().getBool("WEBGL_PACK")) {
    program = new ScatterPackedProgram(numUpdates, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape);
  } else {
    program = new ScatterProgram(numUpdates, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape);
  }
  const res = backend.runWebGLProgram(program, [flattenX, flattenIndices, defaultValue], flattenX.dtype);
  const reshaped = reshape2({
    inputs: {
      x: res
    },
    backend,
    attrs: {
      shape
    }
  });
  backend.disposeIntermediateTensorInfo(flattenIndices);
  backend.disposeIntermediateTensorInfo(flattenX);
  backend.disposeIntermediateTensorInfo(res);
  backend.disposeIntermediateTensorInfo(defaultValue);
  return reshaped;
}
var scatterNdConfig = {
  kernelName: ScatterNd,
  backendName: "webgl",
  kernelFunc: scatterNd
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/search_sorted_gpu.js
var SearchSortedProgram = class {
  constructor(batchSize, numInputs, numValues, side) {
    this.variableNames = ["sortedSequence", "values"];
    this.customUniforms = [{
      name: "numInputs",
      type: "int"
    }];
    this.outputShape = [batchSize, numValues];
    const webGL2LoopHead = "while (left < right) {";
    const webGL1LoopHead = `for (int i = 0; i < ${Math.ceil(Math.log2(numInputs + 1))}; ++i) { if (left >= right) break;`;
    const loopHead = env().getNumber("WEBGL_VERSION") === 2 ? webGL2LoopHead : webGL1LoopHead;
    const boundComparator = side === "left" ? "<" : "<=";
    this.userCode = `
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${loopHead}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${boundComparator} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SearchSorted.js
function searchSorted(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    sortedSequence,
    values
  } = inputs;
  const {
    side
  } = attrs;
  const program = new SearchSortedProgram(sortedSequence.shape[0], sortedSequence.shape[1], values.shape[1], side);
  const customValues = [[sortedSequence.shape[1]]];
  return backend.runWebGLProgram(program, [sortedSequence, values], "int32", customValues);
}
var searchSortedConfig = {
  kernelName: SearchSorted,
  backendName: "webgl",
  kernelFunc: searchSorted
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/select_gpu.js
var SelectProgram = class {
  constructor(cRank, shape, rank) {
    this.variableNames = ["c", "a", "b"];
    this.outputShape = shape;
    let cCoords;
    let abCoords;
    if (rank > 4) {
      throw Error(`Where for rank ${rank} is not yet supported`);
    }
    if (rank === 1) {
      abCoords = `resRC`;
      cCoords = `resRC`;
    } else {
      const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"];
      const cCoordVars = [];
      const abCoordVars = [];
      for (let i = 0; i < shape.length; i++) {
        abCoordVars.push(`${currentCoords[i]}`);
        if (i < cRank) {
          cCoordVars.push(`${currentCoords[i]}`);
        }
      }
      cCoords = cCoordVars.join();
      abCoords = abCoordVars.join();
    }
    const dtype = getCoordsDataType(rank);
    this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        float cVal = getC(${cCoords});
        if (cVal >= 1.0) {
          setOutput(getA(${abCoords}));
        } else {
          setOutput(getB(${abCoords}));
        }
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Select.js
function select2(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    condition,
    t,
    e
  } = inputs;
  const program = new SelectProgram(condition.shape.length, t.shape, t.shape.length);
  return backend.runWebGLProgram(program, [condition, t, e], upcastType(t.dtype, e.dtype));
}
var selectConfig = {
  kernelName: Select,
  backendName: "webgl",
  kernelFunc: select2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Selu.js
var SELU = `
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${backend_util_exports.SELU_SCALEALPHA};
  float scale = ${backend_util_exports.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`;
var selu = unaryKernelFunc2({
  opSnippet: SELU
});
var seluConfig = {
  kernelName: Selu,
  backendName: "webgl",
  kernelFunc: selu
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sigmoid.js
var SIGMOID3 = CHECK_NAN_SNIPPET_UNARY + `
  return 1.0 / (1.0 + exp(-1.0 * x));
`;
var SIGMOID_PACKED = `
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;
var sigmoid2 = unaryKernelFunc2({
  opSnippet: SIGMOID3,
  packedOpSnippet: SIGMOID_PACKED,
  cpuKernelImpl: sigmoidImplCPU
});
var sigmoidConfig2 = {
  kernelName: Sigmoid,
  backendName: "webgl",
  kernelFunc: sigmoid2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sign.js
var SIGN = `
  if (isnan(x)) { return 0.0; }
  return sign(x);
`;
var sign = unaryKernelFunc2({
  opSnippet: SIGN
});
var signConfig = {
  kernelName: Sign,
  backendName: "webgl",
  kernelFunc: sign
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js
var SIN = CHECK_NAN_SNIPPET_UNARY + `
  return sin(x);
`;
var SIN_PACKED = `
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${CHECK_NAN_SNIPPET_PACKED}
  return result;
`;
var sin = unaryKernelFunc2({
  opSnippet: SIN,
  packedOpSnippet: SIN_PACKED
});
var sinConfig = {
  kernelName: Sin,
  backendName: "webgl",
  kernelFunc: sin
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sinh.js
var SINH = `
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`;
var sinh = unaryKernelFunc2({
  opSnippet: SINH
});
var sinhConfig = {
  kernelName: Sinh,
  backendName: "webgl",
  kernelFunc: sinh
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Softplus.js
var SOFTPLUS = `
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`;
var softplus = unaryKernelFunc2({
  opSnippet: SOFTPLUS
});
var softplusConfig = {
  kernelName: Softplus,
  backendName: "webgl",
  kernelFunc: softplus
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SpaceToBatchND.js
var spaceToBatchND = (args) => {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    blockShape,
    paddings
  } = attrs;
  util_exports.assert(x.shape.length <= 4, () => "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");
  const prod3 = blockShape.reduce((a, b) => a * b);
  const completePaddings = [[0, 0]];
  completePaddings.push(...paddings);
  for (let i = 1 + blockShape.length; i < x.shape.length; ++i) {
    completePaddings.push([0, 0]);
  }
  const toDispose = [];
  const paddedX = padV2({
    inputs: {
      x
    },
    backend,
    attrs: {
      paddings: completePaddings,
      constantValue: 0
    }
  });
  const reshapedPaddedShape = backend_util_exports.getReshaped(paddedX.shape, blockShape, prod3, false);
  const permutedReshapedPaddedPermutation = backend_util_exports.getPermuted(reshapedPaddedShape.length, blockShape.length, false);
  const flattenShape = backend_util_exports.getReshapedPermuted(paddedX.shape, blockShape, prod3, false);
  const reshapedPaddedX = reshape2({
    inputs: {
      x: paddedX
    },
    backend,
    attrs: {
      shape: reshapedPaddedShape
    }
  });
  const paddedXT = transpose2({
    inputs: {
      x: reshapedPaddedX
    },
    backend,
    attrs: {
      perm: permutedReshapedPaddedPermutation
    }
  });
  const result = reshape2({
    inputs: {
      x: paddedXT
    },
    backend,
    attrs: {
      shape: flattenShape
    }
  });
  toDispose.push(paddedX);
  toDispose.push(reshapedPaddedX);
  toDispose.push(paddedXT);
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
};
var spaceToBatchNDConfig = {
  kernelName: SpaceToBatchND,
  backendName: "webgl",
  kernelFunc: spaceToBatchND
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SparseFillEmptyRows.js
function sparseFillEmptyRows(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    indices,
    values,
    denseShape,
    defaultValue
  } = inputs;
  if (denseShape.shape.length !== 1) {
    throw new Error(`Dense shape must be a vector, saw:
         ${denseShape.shape}`);
  }
  if (indices.shape.length !== 2) {
    throw new Error(`Indices must be a matrix, saw:
         ${indices.shape}`);
  }
  if (values.shape.length !== 1) {
    throw new Error(`Values must be a vector, saw:
         ${values.shape}`);
  }
  if (defaultValue.shape.length !== 0) {
    throw new Error(`Default value must be a scalar, saw:
        ${defaultValue.shape}`);
  }
  const $indices = backend.readSync(indices.dataId);
  const $values = backend.readSync(values.dataId);
  const $denseShape = backend.readSync(denseShape.dataId);
  const $defaultValue = backend.readSync(defaultValue.dataId)[0];
  const [outputIndices, outputIndicesShape, outputValues, emptyRowIndicator, reverseIndexMap] = sparseFillEmptyRowsImplCPU($indices, indices.shape, indices.dtype, $values, values.dtype, $denseShape, $defaultValue);
  return [backend.makeTensorInfo(outputIndicesShape, indices.dtype, outputIndices), backend.makeTensorInfo([outputIndicesShape[0]], values.dtype, outputValues), backend.makeTensorInfo([emptyRowIndicator.length], "bool", new Uint8Array(emptyRowIndicator.map((value) => Number(value)))), backend.makeTensorInfo([reverseIndexMap.length], indices.dtype, new Int32Array(reverseIndexMap))];
}
var sparseFillEmptyRowsConfig = {
  kernelName: SparseFillEmptyRows,
  backendName: "webgl",
  kernelFunc: sparseFillEmptyRows
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SparseReshape.js
function sparseReshape(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    inputIndices,
    inputShape,
    newShape
  } = inputs;
  if (inputIndices.shape.length !== 2) {
    throw new Error(`Input indices should be a matrix but received shape ${inputIndices.shape}`);
  }
  if (inputShape.shape.length !== 1) {
    throw new Error(`Input shape should be a vector but received shape ${inputShape.shape}`);
  }
  if (newShape.shape.length !== 1) {
    throw new Error(`Target shape should be a vector but received shape ${newShape.shape}`);
  }
  const $inputShape = Array.from(backend.readSync(inputShape.dataId));
  const $inputIndices = backend.readSync(inputIndices.dataId);
  const targetShape = Array.from(backend.readSync(newShape.dataId));
  const [newIndices, indicesShape, outputShape] = sparseReshapeImplCPU($inputIndices, inputIndices.shape, inputIndices.dtype, $inputShape, targetShape);
  return [backend.makeTensorInfo(indicesShape, inputIndices.dtype, newIndices), backend.makeTensorInfo([outputShape.length], newShape.dtype, new Int32Array(outputShape))];
}
var sparseReshapeConfig = {
  kernelName: SparseReshape,
  backendName: "webgl",
  kernelFunc: sparseReshape
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentMean.js
function sparseSegmentMean(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    data,
    indices,
    segmentIds
  } = inputs;
  if (data.shape.length < 1) {
    throw new Error(`Data should be at least 1 dimensional but received scalar`);
  }
  if (indices.shape.length !== 1) {
    throw new Error(`Indices should be a vector but received shape
              ${indices.shape}`);
  }
  if (segmentIds.shape.length !== 1) {
    throw new Error(`Segment ids should be a vector but received shape
              ${segmentIds.shape}`);
  }
  const $data = backend.readSync(data.dataId);
  const $indices = backend.readSync(indices.dataId);
  const $segmentIds = backend.readSync(segmentIds.dataId);
  const [outputData, outputDataShape] = sparseSegmentReductionImplCPU($data, data.shape, data.dtype, $indices, $segmentIds, true);
  return backend.makeTensorInfo(outputDataShape, data.dtype, outputData);
}
var sparseSegmentMeanConfig = {
  kernelName: SparseSegmentMean,
  backendName: "webgl",
  kernelFunc: sparseSegmentMean
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentSum.js
function sparseSegmentSum(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    data,
    indices,
    segmentIds
  } = inputs;
  if (data.shape.length < 1) {
    throw new Error(`Data should be at least 1 dimensional but received scalar`);
  }
  if (indices.shape.length !== 1) {
    throw new Error(`Indices should be a vector but received shape
             ${indices.shape}`);
  }
  if (segmentIds.shape.length !== 1) {
    throw new Error(`Segment ids should be a vector but received shape
             ${segmentIds.shape}`);
  }
  const $data = backend.readSync(data.dataId);
  const $indices = backend.readSync(indices.dataId);
  const $segmentIds = backend.readSync(segmentIds.dataId);
  const [outputData, outputDataShape] = sparseSegmentReductionImplCPU($data, data.shape, data.dtype, $indices, $segmentIds);
  return backend.makeTensorInfo(outputDataShape, data.dtype, outputData);
}
var sparseSegmentSumConfig = {
  kernelName: SparseSegmentSum,
  backendName: "webgl",
  kernelFunc: sparseSegmentSum
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SparseToDense.js
function sparseToDense(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    sparseIndices,
    sparseValues,
    defaultValue
  } = inputs;
  const {
    outputShape
  } = attrs;
  const {
    sliceRank,
    numUpdates,
    sliceSize,
    strides,
    outputSize
  } = backend_util_exports.calculateShapes(sparseValues, sparseIndices, outputShape);
  const sumDupeIndices = false;
  if (sparseValues.dtype === "string") {
    const indicesBuf = backend.bufferSync(sparseIndices);
    const updatesBuf = backend.bufferSync(sparseValues);
    const $defaultValue = util_exports.decodeString(backend.readSync(defaultValue.dataId)[0]);
    const outBuf = scatterImplCPU(indicesBuf, updatesBuf, outputShape, outputSize, sliceSize, numUpdates, sliceRank, strides, $defaultValue, sumDupeIndices);
    return backend.makeTensorInfo(outputShape, outBuf.dtype, outBuf.values);
  }
  const program = new ScatterProgram(numUpdates, sliceRank, sparseIndices.shape.length, sparseValues.shape.length, strides, [outputSize, 1], sumDupeIndices);
  const res = backend.runWebGLProgram(program, [sparseValues, sparseIndices, defaultValue], sparseValues.dtype);
  const reshaped = reshape2({
    inputs: {
      x: res
    },
    backend,
    attrs: {
      shape: outputShape
    }
  });
  backend.disposeIntermediateTensorInfo(res);
  return reshaped;
}
var sparseToDenseConfig = {
  kernelName: SparseToDense,
  backendName: "webgl",
  kernelFunc: sparseToDense
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SplitV.js
function splitV(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    numOrSizeSplits,
    axis
  } = attrs;
  const $axis = util_exports.parseAxisParam(axis, x.shape)[0];
  const splitSizes = backend_util_exports.prepareSplitSize(x, numOrSizeSplits, $axis);
  const xRank = x.shape.length;
  const begin = new Array(xRank).fill(0);
  const size = x.shape.slice();
  return splitSizes.map((s) => {
    const sliceSize = [...size];
    sliceSize[$axis] = s;
    const sliceT = slice2({
      inputs: {
        x
      },
      backend,
      attrs: {
        begin,
        size: sliceSize
      }
    });
    begin[$axis] += s;
    return sliceT;
  });
}
var splitVConfig = {
  kernelName: SplitV,
  backendName: "webgl",
  kernelFunc: splitV
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Sqrt.js
var SQRT = `return sqrt(x);`;
var sqrt2 = unaryKernelFunc2({
  opSnippet: SQRT,
  packedOpSnippet: SQRT,
  cpuKernelImpl: sqrtImplCPU
});
var sqrtConfig2 = {
  kernelName: Sqrt,
  backendName: "webgl",
  kernelFunc: sqrt2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Square.js
var SQUARE = `return x * x;`;
var square = unaryKernelFunc2({
  opSnippet: SQUARE
});
var squareConfig = {
  kernelName: Square,
  backendName: "webgl",
  kernelFunc: square
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/SquaredDifference.js
var SQUARED_DIFFERENCE = "return (a - b) * (a - b);";
var squaredDifference2 = binaryKernelFunc2({
  opSnippet: SQUARED_DIFFERENCE,
  packedOpSnippet: SQUARED_DIFFERENCE
});
var squaredDifferenceConfig2 = {
  kernelName: SquaredDifference,
  backendName: "webgl",
  kernelFunc: squaredDifference2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/StaticRegexReplace.js
function staticRegexReplace2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  if (x.dtype !== "string") {
    throw new Error("Input must be of datatype string");
  }
  const $x = backend.readSync(x.dataId);
  const stringInput = backend_util_exports.fromUint8ToStringArray($x);
  const output = staticRegexReplaceImplCPU(stringInput, "string", attrs);
  return backend.makeTensorInfo(x.shape, "string", output);
}
var staticRegexReplaceConfig2 = {
  kernelName: StaticRegexReplace,
  backendName: "webgl",
  kernelFunc: staticRegexReplace2
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Step.js
function step({
  inputs,
  attrs,
  backend
}) {
  const {
    x
  } = inputs;
  const opSnippet = CHECK_NAN_SNIPPET + `
    return x > 0.0 ? 1.0 : float(${attrs.alpha});
  `;
  const program = new UnaryOpProgram(x.shape, opSnippet);
  return backend.runWebGLProgram(program, [x], x.dtype);
}
var stepConfig = {
  kernelName: Step,
  backendName: "webgl",
  kernelFunc: step
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/strided_slice_gpu.js
var StridedSliceProgram = class {
  constructor(begin, strides, size) {
    this.variableNames = ["x"];
    this.outputShape = size;
    const rank = size.length;
    const inputDtype = getCoordsDataType(size.length);
    const dtype = getCoordsDataType(size.length);
    let newCoords = "";
    if (rank === 1) {
      newCoords = "coords * strides + begin";
    } else {
      let outputAxis = 0;
      newCoords = size.map((_, i) => {
        outputAxis++;
        return size.length === 1 ? `coords * strides[${i}] + begin[${i}]` : `coords[${outputAxis - 1}] * strides[${i}] + begin[${i}]`;
      }).join(",");
    }
    this.userCode = `
      ${inputDtype} begin = ${inputDtype}(${begin});
      ${inputDtype} strides = ${inputDtype}(${strides});

      void main() {
        ${dtype} coords = getOutputCoords();
        setOutput(getX(${newCoords}));
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/StridedSlice.js
function stridedSlice(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    begin,
    end,
    strides,
    beginMask,
    endMask,
    ellipsisMask,
    newAxisMask,
    shrinkAxisMask
  } = attrs;
  const {
    finalShapeSparse,
    finalShape,
    isIdentity,
    sliceDim0,
    isSimpleSlice,
    begin: $begin,
    end: $end,
    strides: $strides
  } = slice_util_exports.sliceInfo(x.shape, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask);
  let result;
  if (isIdentity) {
    result = reshape2({
      inputs: {
        x
      },
      backend,
      attrs: {
        shape: finalShape
      }
    });
  } else if (sliceDim0 || isSimpleSlice) {
    util_exports.assert(x.shape.length >= 1, () => `Input must have rank at least 1, got: ${x.shape.length}`);
    const size = slice_util_exports.computeOutShape($begin, $end, $strides);
    const sliced = slice2({
      inputs: {
        x
      },
      backend,
      attrs: {
        begin: $begin,
        size
      }
    });
    result = reshape2({
      inputs: {
        x: sliced
      },
      backend,
      attrs: {
        shape: finalShape
      }
    });
    backend.disposeIntermediateTensorInfo(sliced);
  } else {
    const shouldExecuteOnCPU = backend.shouldExecuteOnCPU([x]);
    if (shouldExecuteOnCPU) {
      const values = backend.readSync(x.dataId);
      const xBuf = buffer(x.shape, x.dtype, values);
      const resultValues = stridedSliceImplCPU(finalShapeSparse, xBuf, $strides, $begin);
      result = backend.makeTensorInfo(finalShape, x.dtype, resultValues.values);
    } else {
      const program = new StridedSliceProgram($begin, $strides, finalShapeSparse);
      result = backend.runWebGLProgram(program, [x], x.dtype);
    }
  }
  const resultReshaped = reshape2({
    inputs: {
      x: result
    },
    backend,
    attrs: {
      shape: finalShape
    }
  });
  backend.disposeIntermediateTensorInfo(result);
  return resultReshaped;
}
var stridedSliceConfig = {
  kernelName: StridedSlice,
  backendName: "webgl",
  kernelFunc: stridedSlice
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/StringNGrams.js
function stringNGrams(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    separator,
    nGramWidths,
    leftPad,
    rightPad,
    padWidth,
    preserveShortSequences
  } = attrs;
  const {
    data,
    dataSplits
  } = inputs;
  const $data = backend.readSync(data.dataId);
  const $dataSplits = backend.readSync(dataSplits.dataId);
  const [nGrams, nGramsSplits] = stringNGramsImplCPU($data, $dataSplits, separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences);
  return [backend.makeTensorInfo([nGrams.length], "string", nGrams), backend.makeTensorInfo(dataSplits.shape, "int32", nGramsSplits)];
}
var stringNGramsConfig = {
  kernelName: StringNGrams,
  backendName: "webgl",
  kernelFunc: stringNGrams
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/StringSplit.js
function stringSplit(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    skipEmpty
  } = attrs;
  const {
    input,
    delimiter
  } = inputs;
  if (input.dtype !== "string") {
    throw new Error("Input must be of datatype string");
  }
  if (input.shape.length !== 1) {
    throw new Error(`Input must be a vector, got shape: ${input.shape}`);
  }
  if (delimiter.shape.length !== 0) {
    throw new Error(`Delimiter must be a scalar, got shape: ${delimiter.shape}`);
  }
  const $input = backend.readSync(input.dataId);
  const $delimiter = backend.readSync(delimiter.dataId)[0];
  const [indices, values, shape] = stringSplitImplCPU($input, $delimiter, skipEmpty);
  const outputSize = values.length;
  return [backend.makeTensorInfo([outputSize, 2], "int32", indices), backend.makeTensorInfo([outputSize], "string", values), backend.makeTensorInfo([2], "int32", new Int32Array(shape))];
}
var stringSplitConfig = {
  kernelName: StringSplit,
  backendName: "webgl",
  kernelFunc: stringSplit
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/StringToHashBucketFast.js
function stringToHashBucketFast(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    numBuckets
  } = attrs;
  const {
    input
  } = inputs;
  if (input.dtype !== "string") {
    throw new Error("Input must be of datatype string");
  }
  if (numBuckets <= 0) {
    throw new Error(`Number of buckets must be at least 1`);
  }
  const $input = backend.readSync(input.dataId);
  const output = stringToHashBucketFastImplCPU($input, numBuckets);
  return backend.makeTensorInfo(input.shape, "int32", output);
}
var stringToHashBucketFastConfig = {
  kernelName: StringToHashBucketFast,
  backendName: "webgl",
  kernelFunc: stringToHashBucketFast
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Tan.js
var TAN = `return tan(x);`;
var tan = unaryKernelFunc2({
  opSnippet: TAN
});
var tanConfig = {
  kernelName: Tan,
  backendName: "webgl",
  kernelFunc: tan
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Tanh.js
var TANH = `
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`;
var tanh = unaryKernelFunc2({
  opSnippet: TANH
});
var tanhConfig = {
  kernelName: Tanh,
  backendName: "webgl",
  kernelFunc: tanh
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/TensorScatterUpdate.js
function tensorScatterUpdate(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    tensor,
    indices,
    updates
  } = inputs;
  const {} = attrs;
  const {
    sliceRank,
    numUpdates,
    sliceSize,
    strides,
    outputSize
  } = backend_util_exports.calculateShapes(updates, indices, tensor.shape);
  const flattenShape = [outputSize / sliceSize, sliceSize];
  if (outputSize === 0) {
    return backend.makeTensorInfo(tensor.shape, indices.dtype);
  }
  const flattenIndices = reshape2({
    inputs: {
      x: indices
    },
    backend,
    attrs: {
      shape: [numUpdates, sliceRank]
    }
  });
  const flattenX = reshape2({
    inputs: {
      x: updates
    },
    backend,
    attrs: {
      shape: [numUpdates, sliceSize]
    }
  });
  const flattenTensor = reshape2({
    inputs: {
      x: tensor
    },
    backend,
    attrs: {
      shape: flattenShape
    }
  });
  const program = new ScatterProgram(numUpdates, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape, false, true);
  const res = backend.runWebGLProgram(program, [flattenX, flattenIndices, flattenTensor], flattenTensor.dtype);
  const reshaped = reshape2({
    inputs: {
      x: res
    },
    backend,
    attrs: {
      shape: tensor.shape
    }
  });
  backend.disposeIntermediateTensorInfo(flattenIndices);
  backend.disposeIntermediateTensorInfo(flattenX);
  backend.disposeIntermediateTensorInfo(flattenTensor);
  backend.disposeIntermediateTensorInfo(res);
  return reshaped;
}
var tensorScatterUpdateConfig = {
  kernelName: TensorScatterUpdate,
  backendName: "webgl",
  kernelFunc: tensorScatterUpdate
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/tile_gpu.js
var TileProgram = class {
  constructor(aShape, reps) {
    this.variableNames = ["A"];
    const outputShape = new Array(aShape.length);
    for (let i = 0; i < outputShape.length; i++) {
      outputShape[i] = aShape[i] * reps[i];
    }
    this.outputShape = outputShape;
    this.rank = outputShape.length;
    const dtype = getCoordsDataType(this.rank);
    const sourceCoords = getSourceCoords3(aShape);
    this.userCode = `
      void main() {
        ${dtype} resRC = getOutputCoords();
        setOutput(getA(${sourceCoords}));
      }
    `;
  }
};
function getSourceCoords3(aShape) {
  const rank = aShape.length;
  if (rank > 5) {
    throw Error(`Tile for rank ${rank} is not yet supported`);
  }
  if (rank === 1) {
    return `imod(resRC, ${aShape[0]})`;
  }
  const currentCoords = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"];
  const sourceCoords = [];
  for (let i = 0; i < aShape.length; i++) {
    sourceCoords.push(`imod(${currentCoords[i]}, ${aShape[i]})`);
  }
  return sourceCoords.join();
}

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Tile.js
function tile(params) {
  const {
    inputs,
    backend,
    attrs
  } = params;
  const {
    x
  } = inputs;
  const {
    reps
  } = attrs;
  if (x.dtype === "string" || x.shape.length > 5) {
    const data = backend.readSync(x.dataId);
    const value = x.dtype === "string" ? data.map((d) => util_exports.decodeString(d)) : data;
    const buf = buffer(x.shape, x.dtype, value);
    const outBuf = tileImplCPU(buf, reps);
    return backend.makeTensorInfo(outBuf.shape, outBuf.dtype, outBuf.values);
  }
  const program = new TileProgram(x.shape, reps);
  const output = backend.runWebGLProgram(program, [x], x.dtype);
  return output;
}
var tileConfig = {
  kernelName: Tile,
  backendName: "webgl",
  kernelFunc: tile
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/top_k_gpu.js
var SwapProgram = class {
  /**
   * @param shape desired output shape (can be larger than input shape, output
   *                                    will be padded with -Infinity)
   */
  constructor(shape) {
    this.variableNames = ["x", "indices"];
    this.customUniforms = [{
      name: "n",
      type: "int"
    }, {
      name: "firstPass",
      type: "int"
    }, {
      name: "negativeInf",
      type: "float"
    }, {
      name: "dir",
      type: "int"
    }, {
      name: "inc",
      type: "int"
    }];
    this.outputShape = shape;
    this.userCode = `
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `;
  }
};
var MergeProgram = class {
  /**
   * @param shape desired output shape (must be half of the input size)
   */
  constructor(shape) {
    this.variableNames = ["x", "indices"];
    this.customUniforms = [{
      name: "n",
      type: "int"
    }, {
      name: "firstPass",
      type: "int"
    }, {
      name: "k",
      type: "int"
    }];
    this.outputShape = shape;
    this.userCode = `
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/TopK.js
function disposeIntermediateTensorInfoOrNull(backend, tensorInfo) {
  if (tensorInfo !== null) {
    backend.disposeIntermediateTensorInfo(tensorInfo);
  }
}
function roundUpToPow2(num) {
  let pow2 = 1;
  while (pow2 < num) {
    pow2 *= 2;
  }
  return pow2;
}
function topK(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    k,
    sorted
  } = attrs;
  const TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD = env().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD");
  const TOPK_K_CPU_HANDOFF_THRESHOLD = env().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD");
  const xShape = x.shape;
  const lastDim = xShape[xShape.length - 1];
  if (backend.shouldExecuteOnCPU([x]) || lastDim < TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD || k > TOPK_K_CPU_HANDOFF_THRESHOLD) {
    const xVals = backend.readSync(x.dataId);
    const [allTopKVals, allTopKIndices] = topKImplCPU(xVals, xShape, x.dtype, k, sorted);
    return [backend.makeTensorInfo(allTopKVals.shape, allTopKVals.dtype, allTopKVals.values), backend.makeTensorInfo(allTopKIndices.shape, allTopKIndices.dtype, allTopKIndices.values)];
  }
  if (k === 0) {
    xShape[xShape.length - 1] = 0;
    return [backend.makeTensorInfo(xShape, x.dtype, []), backend.makeTensorInfo(xShape, "int32", [])];
  }
  if (lastDim === 1) {
    return [x, fill({
      attrs: {
        shape: xShape,
        dtype: "int32",
        value: 0
      },
      backend
    })];
  }
  const xtexData = backend.texData.get(x.dataId);
  const xIsPacked = xtexData !== null && xtexData.isPacked;
  const xUnPacked = xIsPacked ? backend.unpackTensor(x) : x;
  const xSize = util_exports.sizeFromShape(xShape);
  const batch = xSize / lastDim;
  const x2D = reshape2({
    inputs: {
      x: xUnPacked
    },
    attrs: {
      shape: [batch, lastDim]
    },
    backend
  });
  if (xIsPacked) {
    disposeIntermediateTensorInfoOrNull(backend, xUnPacked);
  }
  const kPow2 = roundUpToPow2(k);
  const lastDimPow2 = roundUpToPow2(lastDim);
  let indices = null;
  const getInputs = () => indices === null ? [x2D, x2D] : [x2D, indices];
  const runSwap = (dir, inc, shape) => {
    const inputs2 = getInputs();
    const program = new SwapProgram(shape);
    const fistPass = indices === null ? 1 : 0;
    const customValues = [[lastDim], [fistPass], [Number.NEGATIVE_INFINITY], [dir], [inc]];
    const prevIndices2 = indices;
    indices = backend.runWebGLProgram(program, inputs2, "int32", customValues);
    disposeIntermediateTensorInfoOrNull(backend, prevIndices2);
  };
  for (let len = 1; len < kPow2; len *= 2) {
    const dir = len * 2;
    for (let inc = len; inc >= 1; inc /= 2) {
      runSwap(dir, inc, [batch, lastDimPow2]);
    }
  }
  for (let indicesSize = lastDimPow2; indicesSize > kPow2; indicesSize /= 2) {
    const inputs2 = getInputs();
    const mergeProgram = new MergeProgram([batch, indicesSize / 2]);
    const firstPass = indices === null ? 1 : 0;
    const customValues = [[lastDim], [firstPass], [kPow2]];
    const prevIndices2 = indices;
    indices = backend.runWebGLProgram(mergeProgram, inputs2, "int32", customValues);
    disposeIntermediateTensorInfoOrNull(backend, prevIndices2);
    const len = kPow2 / 2;
    const dir = len * 2;
    for (let inc = len; inc >= 1; inc /= 2) {
      runSwap(dir, inc, indices.shape);
    }
  }
  let prevIndices = indices;
  indices = slice2({
    inputs: {
      x: indices
    },
    backend,
    attrs: {
      begin: 0,
      size: [batch, k]
    }
  });
  disposeIntermediateTensorInfoOrNull(backend, prevIndices);
  let values = gatherV2({
    inputs: {
      x: x2D,
      indices
    },
    backend,
    attrs: {
      axis: 1,
      batchDims: 1
    }
  });
  disposeIntermediateTensorInfoOrNull(backend, x2D);
  const newShape = xShape.slice(0, -1);
  newShape.push(k);
  prevIndices = indices;
  indices = reshape2({
    inputs: {
      x: indices
    },
    attrs: {
      shape: newShape
    },
    backend
  });
  disposeIntermediateTensorInfoOrNull(backend, prevIndices);
  const prevValues = values;
  values = reshape2({
    inputs: {
      x: values
    },
    attrs: {
      shape: newShape
    },
    backend
  });
  disposeIntermediateTensorInfoOrNull(backend, prevValues);
  return [values, indices];
}
var topKConfig = {
  kernelName: TopK,
  backendName: "webgl",
  kernelFunc: topK
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/transform_gpu.js
var TransformProgram = class {
  constructor(imageHeight, imageWidth, interpolation, fillMode, fillValue, outShape) {
    this.variableNames = ["Image", "Transforms"];
    this.outputShape = outShape;
    const interpolationModeId = interpolation === "nearest" ? 1 : 2;
    let fillModeId;
    switch (fillMode) {
      case "constant":
        fillModeId = 1;
        break;
      case "reflect":
        fillModeId = 2;
        break;
      case "wrap":
        fillModeId = 3;
        break;
      case "nearest":
        fillModeId = 4;
        break;
      default:
        fillModeId = 1;
        break;
    }
    this.userCode = `
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${fillModeId} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${fillModeId} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${fillModeId} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${imageHeight} && 0 <= coordX && coordX < ${imageWidth}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${fillValue});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${fillValue});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${imageWidth}));
                float mapY = mapCoord(inY, float(${imageHeight}));

                if (${interpolationModeId} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Transform.js
function transform(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    image,
    transforms
  } = inputs;
  const {
    interpolation,
    fillMode,
    fillValue,
    outputShape
  } = attrs;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  const [outHeight, outWidth] = outputShape != null ? outputShape : [imageHeight, imageWidth];
  const outShape = [batch, outHeight, outWidth, numChannels];
  const program = new TransformProgram(imageHeight, imageWidth, interpolation, fillMode, fillValue, outShape);
  return backend.runWebGLProgram(program, [image, transforms], "float32");
}
var transformConfig = {
  kernelName: Transform,
  backendName: "webgl",
  kernelFunc: transform
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Unique.js
function unique(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    axis
  } = attrs;
  const {
    x
  } = inputs;
  assertNotComplex(x, "unique");
  console.warn("WARNING: ", "UI might be locked temporarily as data is being downloaded");
  const values = backend.readSync(x.dataId);
  const {
    outputValues,
    outputShape,
    indices
  } = uniqueImplCPU(values, axis, x.shape, x.dtype);
  return [backend.makeTensorInfo(outputShape, x.dtype, outputValues), backend.makeTensorInfo([indices.length], "int32", indices)];
}
var uniqueConfig = {
  kernelName: Unique,
  backendName: "webgl",
  kernelFunc: unique
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/Unpack.js
function unpack(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    value
  } = inputs;
  let {
    axis
  } = attrs;
  if (axis < 0) {
    axis += value.shape.length;
  }
  const x = value;
  const xRank = x.shape.length;
  const num = value.shape[axis];
  const outShape = new Array(xRank - 1);
  let outIndex = 0;
  for (let i = 0; i < xRank; i++) {
    if (i !== axis) {
      outShape[outIndex++] = x.shape[i];
    }
  }
  const toDispose = [];
  const begin = new Array(xRank).fill(0);
  const size = x.shape.slice();
  size[axis] = 1;
  const res = new Array(num);
  for (let i = 0; i < res.length; i++) {
    begin[axis] = i;
    const sliced = slice2({
      inputs: {
        x
      },
      backend,
      attrs: {
        begin,
        size
      }
    });
    const reshaped = reshape2({
      inputs: {
        x: sliced
      },
      backend,
      attrs: {
        shape: outShape
      }
    });
    res[i] = reshaped;
    toDispose.push(sliced);
  }
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return res;
}
var unpackConfig = {
  kernelName: Unpack,
  backendName: "webgl",
  kernelFunc: unpack
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/segment_gpu.js
var SegmentOpProgram = class {
  constructor(segOpInfo, segOpType) {
    this.variableNames = ["x", "segmentIds"];
    const windowSize = segOpInfo.windowSize;
    const batchSize = segOpInfo.batchSize;
    const inSize = segOpInfo.inSize;
    const numSegments = segOpInfo.numSegments;
    const outSize = numSegments * Math.ceil(inSize / windowSize);
    this.outputShape = [batchSize, outSize];
    const initializationValue = "0.0";
    const returnValue = `sumValue`;
    const windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
    const windowSizeVec4Remainder = windowSize % 4;
    const updateSnippet = `
        sumValue += dot(values, segFilter);
    `;
    let checkValueOutOfBounds = "";
    if (inSize % windowSize > 0) {
      checkValueOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return initializationValue;
        }
      `;
    }
    let checkSegmentIdOutOfBounds = "";
    if (inSize % windowSize > 0) {
      checkSegmentIdOutOfBounds = `
        if (inIdx < 0 || inIdx >= ${inSize}) {
          return -1.0;
        }
      `;
    }
    this.userCode = `
      const float initializationValue = ${initializationValue};

      float getValue(int batch, int inIdx) {
        ${checkValueOutOfBounds}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${checkSegmentIdOutOfBounds}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${numSegments})) * float(${windowSize}));
        int currentSeg = int(mod(float(outIdx), float(${numSegments})));

        float sumValue = 0.0;

        for (int i = 0; i < ${windowSizeNearestVec4}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${updateSnippet}
        }

        int inIdx = inOffset + ${windowSizeNearestVec4};
        if (${windowSizeVec4Remainder === 1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${updateSnippet}
        } else if (${windowSizeVec4Remainder === 3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${updateSnippet}
        }
        setOutput(${returnValue});
      }
    `;
  }
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/kernels/UnsortedSegmentSum.js
function unsortedSegmentSum(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    segmentIds
  } = inputs;
  const {
    numSegments
  } = attrs;
  const xRank = x.shape.length;
  const toDispose = [];
  let axis = 0;
  const permutation = backend_util_exports.getAxesPermutation([axis], xRank);
  let permutedX = x;
  if (permutation != null) {
    permutedX = transpose2({
      inputs: {
        x
      },
      backend,
      attrs: {
        perm: permutation
      }
    });
    toDispose.push(permutedX);
    axis = backend_util_exports.getInnerMostAxes(1, xRank)[0];
  }
  const outShape = backend_util_exports.segment_util.computeOutShape(permutedX.shape, axis, numSegments);
  const inSize = util_exports.sizeFromShape([permutedX.shape[axis]]);
  const a2D = reshape2({
    inputs: {
      x: permutedX
    },
    backend,
    attrs: {
      shape: [-1, inSize]
    }
  });
  toDispose.push(a2D);
  const outputDType = sumOutType(x.dtype);
  const segOpCompute = (x2, segOpType, segmentIds2, dtype, numSegments2) => {
    const batchSize = x2.shape[0];
    const inSize2 = x2.shape[1];
    const windowSize = backend_util_exports.segment_util.segOpComputeOptimalWindowSize(inSize2, numSegments2);
    const segOpInfo = {
      windowSize,
      inSize: inSize2,
      batchSize,
      numSegments: numSegments2
    };
    const program = new SegmentOpProgram(segOpInfo, segOpType);
    const output = backend.compileAndRun(program, [x2, segmentIds2], dtype);
    toDispose.push(output);
    if (output.shape[1] === numSegments2) {
      return output;
    }
    const rangeInfo = range({
      backend,
      attrs: {
        start: 0,
        stop: numSegments2,
        step: 1,
        dtype: "float32"
      }
    });
    const tileInfo = tile({
      inputs: {
        x: rangeInfo
      },
      backend,
      attrs: {
        reps: [inSize2 / windowSize]
      }
    });
    toDispose.push(rangeInfo);
    toDispose.push(tileInfo);
    const result2 = segOpCompute(output, segOpType, tileInfo, dtype, numSegments2);
    return result2;
  };
  const segOpResult = segOpCompute(a2D, "unsortedSegmentSum", segmentIds, outputDType, numSegments);
  const reshaped = reshape2({
    inputs: {
      x: segOpResult
    },
    backend,
    attrs: {
      shape: outShape
    }
  });
  let result = reshaped;
  if (permutation != null) {
    toDispose.push(reshaped);
    const perm = backend_util_exports.getUndoAxesPermutation(permutation);
    result = transpose2({
      inputs: {
        x: result
      },
      backend,
      attrs: {
        perm
      }
    });
  }
  toDispose.forEach((t) => backend.disposeIntermediateTensorInfo(t));
  return result;
}
var unsortedSegmentSumConfig = {
  kernelName: UnsortedSegmentSum,
  backendName: "webgl",
  kernelFunc: unsortedSegmentSum
};

// node_modules/@tensorflow/tfjs-backend-webgl/dist/register_all_kernels.js
var kernelConfigs = [_fusedMatMulConfig, absConfig2, acosConfig, acoshConfig, addConfig2, addNConfig, allConfig, anyConfig, argMaxConfig, argMinConfig, asinConfig, asinhConfig, atanConfig, atan2Config, atanhConfig, avgPoolConfig, avgPool3DConfig, avgPool3DGradConfig, avgPoolGradConfig, batchMatMulConfig, batchNormConfig, batchToSpaceNDConfig, bincountConfig, bitwiseAndConfig2, broadcastArgsConfig, castConfig2, ceilConfig2, clipByValueConfig, complexConfig2, complexAbsConfig, concatConfig, conv2DConfig, conv2DBackpropFilterConfig, conv2DBackpropInputConfig, conv3DConfig, conv3DBackpropFilterV2Config, conv3DBackpropInputConfig, cosConfig, coshConfig, cropAndResizeConfig, cumprodConfig, cumsumConfig, denseBincountConfig, depthToSpaceConfig, depthwiseConv2dNativeConfig, depthwiseConv2dNativeBackpropFilterConfig, depthwiseConv2dNativeBackpropInputConfig, diagConfig, dilation2DConfig, einsumConfig, eluConfig, eluGradConfig, equalConfig2, erfConfig, expConfig2, expandDimsConfig, expm1Config2, fftConfig, fillConfig, flipLeftRightConfig, floorConfig2, floorDivConfig2, fromPixelsConfig, fusedConv2DConfig, fusedDepthwiseConv2DConfig, gatherNdConfig, gatherV2Config, greaterConfig2, greaterEqualConfig2, identityConfig2, ifftConfig, imagConfig, isFiniteConfig, isInfConfig, isNaNConfig, leakyReluConfig, lessConfig2, lessEqualConfig2, linSpaceConfig, logConfig2, log1pConfig, logicalAndConfig, logicalNotConfig, logicalOrConfig, LRNConfig, LRNGradConfig, maxConfig, maximumConfig2, maxPoolConfig, maxPool3DConfig, maxPool3DGradConfig, maxPoolGradConfig, maxPoolWithArgmaxConfig, meanConfig, minConfig, minimumConfig2, mirrorPadConfig, modConfig, multinomialConfig, multiplyConfig2, negConfig2, nonMaxSuppressionV3Config, nonMaxSuppressionV4Config, nonMaxSuppressionV5Config, notEqualConfig2, oneHotConfig, onesLikeConfig, packConfig, padV2Config, powConfig, preluConfig, prodConfig2, raggedGatherConfig, raggedRangeConfig, raggedTensorToTensorConfig, rangeConfig, realConfig2, realDivConfig, reciprocalConfig, reluConfig, relu6Config, reshapeConfig, resizeBilinearConfig, resizeBilinearGradConfig, resizeNearestNeighborConfig, resizeNearestNeighborGradConfig, reverseConfig, rotateWithOffsetConfig, roundConfig, rsqrtConfig2, scatterNdConfig, searchSortedConfig, selectConfig, seluConfig, sigmoidConfig2, signConfig, sinConfig, sinhConfig, sliceConfig2, softmaxConfig, softplusConfig, spaceToBatchNDConfig, sparseFillEmptyRowsConfig, sparseReshapeConfig, sparseSegmentMeanConfig, sparseSegmentSumConfig, sparseToDenseConfig, splitVConfig, sqrtConfig2, squareConfig, squaredDifferenceConfig2, staticRegexReplaceConfig2, stepConfig, stridedSliceConfig, stringNGramsConfig, stringSplitConfig, stringToHashBucketFastConfig, subConfig2, sumConfig, tanConfig, tanhConfig, tensorScatterUpdateConfig, tileConfig, topKConfig, transformConfig, transposeConfig2, uniqueConfig, unpackConfig, unsortedSegmentSumConfig, zerosLikeConfig];
for (const kernelConfig of kernelConfigs) {
  registerKernel(kernelConfig);
}

export {
  assertNotComplex2 as assertNotComplex,
  absConfig,
  createSimpleBinaryKernelImpl,
  complex,
  complexConfig,
  zeros2 as zeros,
  identity,
  identityConfig,
  real,
  realConfig,
  cast,
  castConfig,
  binaryKernelFunc,
  add,
  addConfig,
  bincountImpl,
  bincountReduceImpl,
  bitwiseAndConfig,
  unaryKernelFunc,
  ceilConfig,
  concatImpl,
  equal,
  equalConfig,
  exp,
  expConfig,
  expm1Config,
  floorConfig,
  floorDivConfig,
  gatherNdImpl,
  gatherV2Impl,
  greaterConfig,
  greaterEqualConfig,
  lessConfig,
  lessEqualConfig,
  linSpaceImpl,
  logConfig,
  maxImpl,
  maximumConfig,
  minimumConfig,
  multiply,
  multiplyConfig,
  negConfig,
  notEqualConfig,
  transposeImpl,
  transpose,
  transposeConfig,
  prodConfig,
  raggedGatherImpl,
  raggedRangeImpl,
  raggedTensorToTensorImpl,
  rangeImpl,
  rsqrtConfig,
  scatterImpl,
  sigmoid,
  sigmoidConfig,
  slice,
  sliceConfig,
  sparseFillEmptyRowsImpl,
  sparseReshapeImpl,
  sparseSegmentReductionImpl,
  sqrtConfig,
  squaredDifferenceConfig,
  staticRegexReplaceConfig,
  stridedSliceImpl,
  stringNGramsImpl,
  stringSplitImpl,
  stringToHashBucketFastImpl,
  sub,
  subConfig,
  tileImpl,
  topKImpl,
  uniqueImpl,
  shared_exports,
  setWebGLContext,
  webgl_util_exports,
  gpgpu_util_exports,
  GPGPUContext,
  MathBackendWebGL,
  version,
  forceHalfFloat,
  webgl
};
/*! Bundled license information:

@tensorflow/tfjs-backend-webgl/dist/canvas_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/tex_util.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/webgl_util.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/flags_webgl.js:
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

@tensorflow/tfjs-backend-webgl/dist/glsl_version.js:
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

@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/gpgpu_math.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/decode_matrix_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/decode_matrix_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/encode_float_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/encode_float_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/encode_matrix_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/encode_matrix_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-cpu/dist/cpu_util.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/zeros_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/binary_utils.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/BitwiseAnd.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Concat_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Equal.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/FloorDiv.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd_Impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Greater.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/GreaterEqual.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Less.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/LessEqual.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Maximum.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Minimum.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Neg.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Prod.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange_impl.js:
  (**
   * @license
   * Copyright 2022 Google LLC.
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

@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Range_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Scatter_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Sigmoid.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentReduction_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Sqrt.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StaticRegexReplace.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Tile_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/TopK_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js:
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

@tensorflow/tfjs-backend-cpu/dist/shared.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js:
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

@tensorflow/tfjs-backend-webgl/dist/packing_util.js:
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

@tensorflow/tfjs-backend-webgl/dist/pack_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/texture_manager.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/unaryop_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/unpack_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/version.js:
  (** @license See the LICENSE file. *)

@tensorflow/tfjs-backend-webgl/dist/webgl.js:
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

@tensorflow/tfjs-backend-webgl/dist/base.js:
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
   * =============================================================================
   *)

@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LeakyRelu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Prelu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js:
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

@tensorflow/tfjs-backend-webgl/dist/mulmat_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/binaryop_complex_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reshape.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js:
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

@tensorflow/tfjs-backend-webgl/dist/mean_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js:
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

@tensorflow/tfjs-backend-webgl/dist/transpose_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/transpose_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sum_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/_FusedMatMul.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-webgl/dist/kernels/Abs.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Acos.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Acosh.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Add.js:
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

@tensorflow/tfjs-backend-webgl/dist/addn_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/addn_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AddN.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/All.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Any.js:
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

@tensorflow/tfjs-backend-webgl/dist/argminmax_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/argminmax_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/arg_min_max.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMax.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMin.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Asin.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Asinh.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Atan.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Atan2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Atanh.js:
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

@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3D.js:
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

@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3DGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPoolGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul.js:
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

@tensorflow/tfjs-backend-webgl/dist/batchnorm_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/batchnorm_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BatchNorm.js:
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

@tensorflow/tfjs-backend-webgl/dist/slice_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/slice_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Slice.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BatchToSpaceND.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Bincount.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BitwiseAnd.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/BroadcastArgs.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernel_utils/int.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cast.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Ceil.js:
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

@tensorflow/tfjs-backend-webgl/dist/clip_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/clip_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ClipByValue.js:
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

@tensorflow/tfjs-backend-webgl/dist/complex_abs_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ComplexAbs.js:
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

@tensorflow/tfjs-backend-webgl/dist/concat_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/concat_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Concat_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Concat.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/im2col_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropFilter.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_backprop_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropInput.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3D.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropFilterV2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropInputV2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cos.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cosh.js:
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

@tensorflow/tfjs-backend-webgl/dist/crop_and_resize_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/CropAndResize.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cum_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cumprod.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Cumsum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DenseBincount.js:
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

@tensorflow/tfjs-backend-webgl/dist/depth_to_space_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DepthToSpace.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_gpu_depthwise.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu_depthwise.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNative.js:
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

@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu_depthwise.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropFilter.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropInput.js:
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

@tensorflow/tfjs-backend-webgl/dist/diag_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Diag.js:
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

@tensorflow/tfjs-backend-webgl/dist/dilation_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Dilation2D.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Einsum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Elu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/EluGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Equal.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Erf.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Exp.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ExpandDims.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-webgl/dist/kernels/Expm1.js:
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

@tensorflow/tfjs-backend-webgl/dist/fft_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FFT.js:
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

@tensorflow/tfjs-backend-webgl/dist/fill_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Fill.js:
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

@tensorflow/tfjs-backend-webgl/dist/flip_left_right_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FlipLeftRight.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Floor.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FloorDiv.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FusedConv2D.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/FusedDepthwiseConv2D.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/GatherNd.js:
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

@tensorflow/tfjs-backend-webgl/dist/gather_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/GatherV2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Greater.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/GreaterEqual.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/IFFT.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/IsFinite.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/IsInf.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/IsNaN.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Less.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LessEqual.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LinSpace.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Log.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Log1p.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalAnd.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalNot.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalOr.js:
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

@tensorflow/tfjs-backend-webgl/dist/lrn_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/lrn_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LRN.js:
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

@tensorflow/tfjs-backend-webgl/dist/lrn_grad_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/LRNGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Max_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Max.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Maximum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3D.js:
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

@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3DGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Mean_impl.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Mean.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Min.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Minimum.js:
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

@tensorflow/tfjs-backend-webgl/dist/mirror_pad_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/mirror_pad_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/MirrorPad.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Mod.js:
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

@tensorflow/tfjs-backend-webgl/dist/multinomial_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RealDiv.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sub.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Softmax.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Multinomial.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Neg.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV3.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV4.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV5.js:
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

@tensorflow/tfjs-backend-webgl/dist/onehot_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/OneHot.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ZerosLike.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/OnesLike.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Pack.js:
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

@tensorflow/tfjs-backend-webgl/dist/pad_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/pad_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/PadV2.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Pow.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Prod.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedGather.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedRange.js:
  (**
   * @license
   * Copyright 2022 Google LLC.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedTensorToTensor.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Range.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Reciprocal.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Relu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Relu6.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinear.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_backprop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinearGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighbor.js:
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

@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_backprop_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighborGrad.js:
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

@tensorflow/tfjs-backend-webgl/dist/reverse_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/reverse_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Reverse.js:
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

@tensorflow/tfjs-backend-webgl/dist/rotate_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/RotateWithOffset.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Round.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Rsqrt.js:
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

@tensorflow/tfjs-backend-webgl/dist/scatter_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/scatter_packed_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/ScatterNd.js:
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

@tensorflow/tfjs-backend-webgl/dist/search_sorted_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SearchSorted.js:
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

@tensorflow/tfjs-backend-webgl/dist/select_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Select.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Selu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sigmoid.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sign.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sinh.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Softplus.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SpaceToBatchND.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseFillEmptyRows.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseReshape.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentMean.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentSum.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SparseToDense.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SplitV.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Sqrt.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Square.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/SquaredDifference.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StaticRegexReplace.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Step.js:
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

@tensorflow/tfjs-backend-webgl/dist/strided_slice_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StridedSlice.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StringNGrams.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StringSplit.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/StringToHashBucketFast.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Tan.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Tanh.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/TensorScatterUpdate.js:
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

@tensorflow/tfjs-backend-webgl/dist/tile_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Tile.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/TopK.js:
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

@tensorflow/tfjs-backend-webgl/dist/transform_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Transform.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/Unique.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-webgl/dist/kernels/Unpack.js:
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

@tensorflow/tfjs-backend-webgl/dist/segment_gpu.js:
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

@tensorflow/tfjs-backend-webgl/dist/kernels/UnsortedSegmentSum.js:
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

@tensorflow/tfjs-backend-webgl/dist/register_all_kernels.js:
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

@tensorflow/tfjs-backend-webgl/dist/index.js:
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
*/
//# sourceMappingURL=chunk-HOZCUYRT.js.map
