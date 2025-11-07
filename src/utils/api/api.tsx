import { BACKEND_API_ROUTES } from "./api_routes";

async function apipost<T>(url: string, data: T): Promise<T> {
  url = `${BACKEND_API_ROUTES.BASE_URL}${url}`;
  console.log(url)
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}


export function apiGet<T>(url: string): Promise<T> {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

export default apipost;