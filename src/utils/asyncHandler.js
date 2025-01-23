const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => {
//    return async (req, res, next) => {
//       try {
//         await fn(req, res, next);
//       } catch (error) {
//         res
//           .status(error.code || 500)
//           .json({ success: false, message: error.message });
//       }
//     };
//   };

// My understanding for the above code is asyncHandler is taking one parameter only
// Which is a function. That is clear.
// After taking fn as a parameter, we are executing that function with in the
// asyncHandler function body & both req, res, next parameters are brought into this
// code by the fn itself. Is it right understanding.
// The Gemini Answer is Yes.

// const asyncHandler = (fn) => {
//   () => {};
// };

// const asyncHandler = (fn) => () => {};

// const asyncHandler2 = (fn) => {
//   async () => {};
// };
