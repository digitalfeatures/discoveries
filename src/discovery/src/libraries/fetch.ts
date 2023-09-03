export enum EMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export function fetch(
  url: string,
  method: EMethod,
  data?: Record<string, any>
): Promise<{ status: boolean; message?: string; data?: any }> {
  return new Promise((resolve) => {
    // @ts-ignore
    if (!chrome || !chrome.runtime || !chrome.runtime.sendMessage) {
      return resolve({
        status: false,
        message: "unsupport the environment!",
      });
    }
    // @ts-ignore
    chrome.runtime.sendMessage(
      { action: "request", url, method, data },
      // @ts-ignore
      (response) => {
        // @ts-ignore
        if (chrome.runtime.lastError) {
          return resolve({
            status: false,
            // @ts-ignore
            message: chrome.runtime.lastError,
          });
        }

        if (response.error) {
          return resolve({
            status: false,
            message: response.error,
          });
        }

        resolve({
          status: true,
          data: response.data,
        });
      }
    );
  });
}
