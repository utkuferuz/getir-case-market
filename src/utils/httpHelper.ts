export const httpHelper = {
  async get(url: string, options = {}) {
    return this.request(url, "GET", null, options);
  },
  async post(url: string, body: any = null, options = {}) {
    return this.request(url, "POST", body, options);
  },
  async put(url: string, body: any = null, options = {}) {
    return this.request(url, "PUT", body, options);
  },
  async request(
    url: string,
    method = "GET",
    body: any = null,
    options: any = {}
  ) {
    options.headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
    const res = await fetch(url, {
      method: method,
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    });
    return res.json();
  },
};

// dataType: 'json',
// contentType: 'application/json',
// data : JSON.stringify({json:JSON.parse(data)}),
