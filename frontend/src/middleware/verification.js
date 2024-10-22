import SibApiV3Sdk from "sib-api-v3-sdk";

let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = import.meta.env.VITE_EMAIL_KEY; // Replace with your Brevo API key

const otpVerify = (name, email, OTP) => {
  console.log(name, email, OTP);
  // Define the transactional email API instance
  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  // Define your email data
  let sendSmtpEmail = {
    to: [
      {
        email: email, // Replace with recipient's email address
        name: name, // Optional recipient's name
      },
    ],
    sender: {
      email: "adityachaurasia14322@gmail.com", // Replace with your verified email address
      name: "Introduce", // Optional sender's name
    },
    subject: "Test email from Brevo",
    textContent: "OTP Verification Code !",
    htmlContent: `<strong>Hello , ${name} your OTP is <i>${OTP}</i></strong>`,
  };

  // Send the email
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log("Email sent successfully:", data);
      return true;
    },
    function (error) {
      console.log(error);
      return false;
    }
  );
};
export default otpVerify;
