// config.js

/**
 * Configuration module providing settings for the Optical Character Recognition (OCR) functionality.
 * Retrieves values from environment variables to ensure adaptability and security.
 *
 * @constant {Object} config
 * @property {string} config.endpoint - The OCR service endpoint URL obtained from the environment variable 'RECEIPT_OCR_END_POINT'.
 * @property {string} config.apiKey - The API key for OCR authentication, dynamically selected based on the environment (development or live).
 * @property {string} config.recognizer - The OCR recognizer type, defaulting to 'auto' if not specified in the environment variable 'RECEIPT_OCR_RECOGNIZER'.
 *                                        If running in development, it uses 'auto' by default, and in live, it uses the live API key; in testing, it defaults to 'TEST'.
 */
export default config = {
    endpoint: process.env.RECEIPT_OCR_END_POINT,
    apiKey: process.env.HOST !== 'DEVELOPMENT'
      ? process.env.RECEIPT_OCR_LIVE_API_KEY
      : (process.env.RECEIPT_OCR_TEST_API_KEY || 'TEST'),
    recognizer: process.env.RECEIPT_OCR_RECOGNIZER || 'auto',
  };
  