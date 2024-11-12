// script.js

// Start the webcam
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const captureButton = document.getElementById("capture");
const barcodeInput = document.getElementById("barcodeData");
const generateButton = document.getElementById("generateBarcode");
const barcodeOutput = document.getElementById("barcode");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing the webcam:", error);
  });

// Capture an image from the webcam
captureButton.addEventListener("click", () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  alert("Image captured! Now you can generate a barcode.");
});

// Generate a barcode based on user input
generateButton.addEventListener("click", () => {
  const barcodeText = barcodeInput.value;
  
  if (barcodeText) {
    JsBarcode("#barcode", barcodeText, {
      format: "CODE128", // Barcode format
      lineColor: "#000",
      width: 2,
      height: 100,
      displayValue: true,
    });
  } else {
    alert("Please enter some text to generate a barcode.");
  }
});
