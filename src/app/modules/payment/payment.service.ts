import { join } from "path";
import { verifyPayment } from "./payment.utils";
import { readFileSync } from "fs";
import Booking from "../booking/booking.model";

const createPaymentIntoDB = async (transactionId: string, status: string) => {
  const verifyResponse = await verifyPayment(transactionId);

  let result;
  let message;
  let statusClass;
  
  if (verifyResponse && verifyResponse.pay_status === "Successful") {
      result = await Booking.findOneAndUpdate(
          { transactionId },
          {
              paymentStatus: "Paid",
          }
      );
      message = "Successfully Paid!";
      statusClass = "message-success"; // Success class
  } else {
      message = "Payment Failed!";
      statusClass = "message-failure"; // Failure class
  }
  
  // Load the HTML template
  const filePath = join(__dirname, '../../../views/confirmation.html');
  let template = readFileSync(filePath, 'utf-8');
  
  // Replace placeholders
  template = template.replace('{{message}}', message);
  template = template.replace('{{status}}', statusClass); // Add status class
  
  return template;
};

export const paymentServices = {
  createPaymentIntoDB,
};
