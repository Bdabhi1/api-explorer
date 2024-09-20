export type Nullable<T> = T | null;

export interface IProviderDetailsResponse {
  apis: Record<string, IProviderDetails>;
}

export interface IProviderDetails {
  added: string;
  info: {
    contact: {
      email: string;
      name: string;
      url: string;
    };
    description: string;
    title: string;
    version: string;
    "x-logo": {
      url: string;
    };
  };
  swaggerUrl: string;
}
