# OCR Module ❤️

The OCR module is designed to facilitate Optical Character Recognition (OCR) on image files, extracting text content for further processing. This README provides an overview of the key components and usage of the module.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Author](#author)

## Installation 🥰

To incorporate the OCR module into your project, follow these steps:

1. Ensure you have Node.js installed on your system.
2. Copy the contents of the OCR module into your project directory.
3. Install the required dependencies by running:

    ```bash
   npm i asprise_ocr_request
   npm i request
    ```

4. Configure the OCR module by setting the necessary environment variables (see [config.js](#configjs)).

## Usage 🥳

To utilize the OCR module for text extraction, follow these steps:

1. Import the OCR module in your code:

    ```javascript
    import { compare } from './ocr';
    ```

2. Call the `compare` function, passing the image file as an argument. The `file` variable is expected to be an object with the following properties:

    - `buffer`: A Buffer containing the raw binary data of the file.
    - `originalname`: The original name of the file as provided by the client when uploading.

    ```javascript
    const file = /* Your image file object */;
    
    try {
      const ocrResults = await compare(file);
      console.log('OCR Results:', ocrResults);
    } catch (error) {
      console.error('OCR Error:', error);
    }
    ```
---

## Environment Variables

For proper configuration of the OCR module, ensure the following environment variables are set:

- **RECEIPT_OCR_END_POINT:** The OCR service endpoint URL.
- **RECEIPT_OCR_LIVE_API_KEY:** The API key for OCR authentication in a live environment.
- **RECEIPT_OCR_TEST_API_KEY:** The API key for OCR authentication in a testing environment. // can be use TEST
- **RECEIPT_OCR_RECOGNIZER:** The OCR recognizer type. Defaults to 'auto' if not specified.
- **HOST:** The host key indicating the environment ('DEVELOPMENT', 'PRODUCTION', etc.).


## Author 😎

- **Author Name:** [Satyam Raghu]
- **Author Email:** [Satyamraghu90@gmail.com]


This OCR module aims to simplify the integration of OCR functionality into your project. If you encounter any issues or have suggestions for improvements, please feel free to open an issue or contribute to the repository. Happy coding!
