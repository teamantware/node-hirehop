import { HireHopApi } from '~/HireHopApi';

export class EndpointsBase {
  constructor(protected api: HireHopApi) {}

  protected async getRequest<TReturnType>(
    url: string
  ): Promise<TReturnType | null> {
    return await this.api.request<TReturnType>('GET', url);
  }

  protected async postRequest<TReturnType, TBody = unknown>(
    url: string,
    body?: TBody,
    contentType: string | undefined = undefined
  ): Promise<TReturnType | null> {
    return await this.api.request<TReturnType>('POST', url, body, contentType);
  }

  protected paramsFor(args: any) {
    const params = new URLSearchParams();

    for (let key of Object.getOwnPropertyNames(args)) {
      if (
        args[key] ||
        args[key] === 0 ||
        (!args[key] && typeof args[key] === 'boolean')
      ) {
        params.append(key, args[key].toString());
      }
    }

    return [...params].length > 0 ? `?${params.toString()}` : '';
  }
}
