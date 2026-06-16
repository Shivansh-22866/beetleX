export class ApiError extends Error {
  status: number;

  constructor(
    message: string,
    status: number
  ) {
    super(message);
    this.status = status;
  }
}

export async function get<T>(
  url: string
): Promise<T> {
  const response =
    await fetch(url);

  if (!response.ok) {
    throw new ApiError(
      response.statusText,
      response.status
    );
  }

  return response.json();
}

export async function post<
  TResponse,
  TBody
>(
  url: string,
  body: TBody
): Promise<TResponse> {
  const response =
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(body),
    });

  if (!response.ok) {
    const error =
      await response.json();

    throw error;
  }

  return response.json();
}

export async function patch<
  TResponse,
  TBody
>(
  url: string,
  body: TBody
): Promise<TResponse> {
  const response =
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(body),
    });

  if (!response.ok) {
    throw await response.json();
  }

  return response.json();
}