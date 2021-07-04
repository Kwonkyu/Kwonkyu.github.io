export const requestOption = {
  get: (token = "") => {
    return {
      mode: "cors",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },

  post: (data = {}, token = "") => {
    return {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
  },

  delete: (token = "") => {
    return {
      mode: "cors",
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },

  put: (data = {}, token = "") => {
    return {
      mode: "cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
  },
};
