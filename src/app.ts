import express, { Application, } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import config from "./app/config";
// import catchAsync from "./app/utils/catchAsync";
// import sendResponse from "./app/utils/sendResponse";
// import httpStatus from "http-status";


const app: Application = express();

app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: [config.server_url as string] }));
app.use(cors({ origin: [config.client_url as string], credentials: true }));

app.use("/api", router);


// const test = catchAsync (async(req, res) => {

//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: `App(Car Wash Booking System) is  running......`,
//         // message: "User registered successfully",
//         data: null,
//       })
//     }
// )

// app.use('/', test)

app.use(globalErrorHandler);

app.use(notFound);

export default app;
