const mongoose = require('mongoose');

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String, // This could store the path or URL to the stored PDF file
    title: String,
    rollNo: String, // Add roll number field

  },
  { collection: 'PdfDetails' }
);

const PdfDetails = mongoose.model('PdfDetails', PdfDetailsSchema);

module.exports = PdfDetails; // Export the model for use in other parts of your application
