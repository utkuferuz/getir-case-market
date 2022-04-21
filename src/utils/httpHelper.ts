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
      body: body ? {} : undefined,
      ...options,
    });
    if (options?.fullResponse) {
      return res;
    }
    return res.json();
  },
};
