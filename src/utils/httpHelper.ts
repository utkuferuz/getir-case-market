export const httpHelper = {
  async get(url: string, options = {}) {
    return this.request(url, null, options);
  },
  async request(url: string, body = null, options: any = {}) {
    options.headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
    const res = await fetch(url, {
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    });
    return res.json();
  },
};
