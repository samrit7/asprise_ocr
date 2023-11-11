// OCR.js

/**
 * Optical Character Recognition (OCR) Module
 * @module OCR
 */

// External Dependencies
import request from 'request';  // HTTP request library for making OCR API requests

// Internal Dependencies
import { config } from './config';  // Configuration module for API key, recognizer type, and endpoint
import { createFileOptions } from './utils';  // Utility module for creating file options

/**
 * Asynchronous function for comparing text extracted from an image using OCR.
 *
 * @async
 * @function compare
 * @param {string} file - The image file for OCR processing.
 * @returns {Promise<Object>} A Promise that resolves with the OCR results in JSON format.
 * @rejects {Error} If an error occurs during HTTP request or JSON parsing.
 */
export async function compare(file) {
  return new Promise((resolve, reject) => {
    // Constructing and sending a POST request to the OCR service endpoint
    request.post({
      url: config.endpoint,  // OCR service endpoint URL
      formData: {
        api_key: config.apiKey,  // Authentication API key
        recognizer: config.recognizer,  // Type of OCR recognizer
        file: createFileOptions(file),  // Generating file options using the utility function
      },
    }, async function (error, response, body) {
      // Handling errors that may occur during the HTTP request
      if (error) {
        reject(error);  // Rejecting the Promise with the encountered error
      } else {
        try {
          // Parsing the response body as JSON
          const data = JSON.parse(body);

          // Resolving the Promise with the parsed JSON data
          resolve(data);
        } catch (error) {
          // Handling JSON parsing errors and rejecting the Promise
          reject(error);
        }
      }
    });
  });
}
