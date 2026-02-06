declare module "@vimeo/vimeo" {
  export class Vimeo {
    constructor(clientId: string | null, clientSecret: string | null, accessToken?: string);
    request(
      options: {
        method: string;
        path: string;
        query?: any;
        [key: string]: any;
      },
      callback: (error: any, body: any, statusCode: number, headers: any) => void
    ): void;
    upload(
      file: string,
      params: Record<string, any>,
      completeCallback: (uri: string) => void,
      progressCallback: (bytesUploaded: number, bytesTotal: number) => void,
      errorCallback: (error: string) => void
    ): void;
  }
  
  const vimeoModule: {
    Vimeo: typeof Vimeo;
  };
  
  export default vimeoModule;
}