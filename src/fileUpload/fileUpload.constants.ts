export const ALLOWED_FILE_FORMAT = [""];

export const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/pdf",
];

export const FILE_UPLOAD_RESPONSE = {
  FILE_UPLOAD_SUCCESS: "File uploaded successfully",
};

export const FILE_UPLOAD_ERRORS = {
  INVALID_FILE_FORMAT: "File format is not supported",
  MAX_FILE_LIMIT_REACHED: "You can upload upto max 10 files",
  FILE_SIZE_EXCEEDED: "File size is more than maximum allowed file size",
  AWS_ERROR: "Not able to upload file, please try again after some time",
};

export const FILE_LIMIT = {
  IMAGE_FILE_LIMIT: 10,
  MAXIMUM_FILE_LIMIT: 10,
};

export const ALLOWED_MAX_FILE_SIZE = {
  IMAGE_MAX_SIZE: 2000000,
};
