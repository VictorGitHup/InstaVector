# **App Name**: VectorImageConverter

## Core Features:

- Image Upload: Allow users to upload image files (PNG, JPG, JPEG) with a maximum size of 5MB via a POST request to /convert.
- API Request: Send the uploaded image data to the https://convertsvg-fclo.onrender.com/convert endpoint.
- SVG Download: Automatically initiate the download of the vectorized SVG file upon receiving a successful response from the API.
- Loading Indicator: Display a visual loading indicator during the image upload and conversion process.
- Error Handling: Show appropriate error messages to the user in case of upload failures or API errors.

## Style Guidelines:

- Primary color: Sky blue (#87CEEB) to reflect a clean, modern, and efficient conversion process.
- Background color: Light gray (#F0F0F0) to provide a neutral backdrop that emphasizes the image conversion interface.
- Accent color: Soft lavender (#E6E6FA) for secondary elements such as buttons or highlighted messages.
- Font: 'Inter', sans-serif, for a clean and modern user interface. It will be used for both headings and body text.
- Use simple, outline-style icons to represent different file types (PNG, JPG, SVG) and actions (upload, download).
- A clean and intuitive layout with a prominent drag-and-drop area for image uploads. Clear separation of upload and conversion status areas.
- Use a subtle, circular progress animation to indicate the uploading/converting state.