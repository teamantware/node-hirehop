import { JobsEndpoints } from "./endpoints/jobs";
import { Config } from "./types";

export class HireHopApi {
  private config: Config;

  public jobs: JobsEndpoints;

  constructor(config: Config) {
    this.config = config;

    this.jobs = new JobsEndpoints(this);
  }

  public async request<TReturnType>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    body: unknown = undefined,
    contentType: string | undefined = undefined,
  ): Promise<TReturnType | null> {
    try {
      const { domain, token } = this.config;

      const absoluteUrl = `${domain}/${url}`;

      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": contentType ?? "application/json",
          Accept: contentType ?? "application/json",
          "X-TOKEN": token.trim(),
        },
        body: body
          ? typeof body === "string"
            ? body
            : JSON.stringify(body)
          : undefined,
      };

      const result = await fetch(absoluteUrl, options);

      // We've got a successful response with no body. There's no need
      // to proceed further on.
      if (result.ok && result.status === 204) {
        return null;
      }

      if (!result.ok) {
        switch (result.status) {
          case 401:
            throw new Error(
              "Bad or expired token. This can happen if your token has expired.",
            );

          case 403:
            throw new Error(
              "You're not allowed to access this resource. Re-authenticating will not help.",
            );

          case 429:
            throw new Error(
              "The app has exceeded its rate limits. Please try again later.",
            );
        }
      }

      return {} as TReturnType;
    } catch (error: unknown) {
      throw error;
    }
  }
}
