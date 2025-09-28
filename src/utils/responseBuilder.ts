// utils/responseBuilder.ts

export type SuccessResponse<Data = any> = {
  error: false;
  status: number;
  message: string;
  data: Data;
};

export type ErrorResponse = {
  error: true;
  status: number;
  message: string;
};

export type ApiResponse<Data = any> = SuccessResponse<Data> | ErrorResponse;

export const successResponse = <Data = any>(
  data: Data,
  message = 'Success',
  status = 200
): SuccessResponse<Data> => ({
  error: false,
  status,
  message,
  data,
});

export const errorResponse = (
  message = 'Something went wrong',
  status = 500,
): ErrorResponse => ({
  error: true,
  status,
  message,
});
