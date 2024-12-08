import { isRouteErrorResponse, useRouteError } from "react-router"

export function useGetErrorMessage() {
	const error = useRouteError()

	let result = ''

	if (isRouteErrorResponse(error)) {
    result = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    result = error.message;
  } else if (typeof error === 'string') {
    result = error;
  } else {
    console.error(error);
    result = 'Unknown error';
  }

	return result
}