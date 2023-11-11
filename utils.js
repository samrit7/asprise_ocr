// utils.js

/**
 * Utility function for crafting sophisticated file options to enhance HTTP requests.
 * This function abstracts the details of file handling, providing a streamlined interface.
 *
 * @function createFileOptions
 * @param {Object} file - The file object with properties like buffer and originalname.
 * @returns {Object} An object encapsulating file details for optimized HTTP requests.
 * @property {Buffer} value - The file content in buffer form.
 * @property {Object} options - Additional options for file handling in HTTP requests.
 * @property {string} options.filename - The original filename for proper identification.
 * @property {string|null} options.contentType - The content type, set to null for automatic detection.
 */
export default function createFileOptions(file) {
    return {
      value: file?.buffer,  // Extracting the file buffer as the primary content
      options: {
        filename: file?.originalname,  // Retaining the original filename for proper identification
        contentType: null,  // Explicitly setting content type to null for automated detection
      },
    };
  }
  