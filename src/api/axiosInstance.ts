import axios from 'axios';

// Interfaces
interface I_Params {
  url: string;
  method: 'POST' | 'DELETE' | 'PUT' | 'GET';
  body?: any;
  headers?: any;
}

interface I_OutPut {
  error: string | null;
  data: any;
}

const getContentType = (headers: any) => {
  if (headers) {
    if (headers['Content-Type']) {
      return headers['Content-Type'];
    }
  }
  return 'application/json';
};

const axiosInstance = () => {
  const BaseApiUrl = process.env.API_END_POINT;

  return async ({ url, method, body = null, headers = null }: I_Params) => {
    let output: I_OutPut = { error: null, data: null };
    // const token = Tools.getUserAuthToken();

    try {
      const response = await axios({
        url: `${BaseApiUrl}${url}`,
        method: method,
        data: body,
        headers: {
          ...headers,
          'Content-Type': getContentType(headers),
          // ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      if (response) {
        if (response.data.error)
          return (output = {
            error: response.data.error,
            data: null,
          });
        return (output = {
          error: null,
          data: response.data,
        });
      }
    } catch (error: any) {
      if (!error.response) {
        return (output = {
          error: 'مشکل در ارتباط با سرور! لطفا با پشتیبانی تماس بگیرید',
          data: null,
        });
      }

      /* The code block is handling the case where the response status is 401 (Unauthorized). */
      // if (error.response.status === 401) {
      //   Tools.clearUserAuthToken();
      //   Router.push(AppRoutes.home);
      //   return (output = {
      //     error: error.response.data.error_description,
      //     data: null,
      //   });
      // }

      if (error.response) {
        return (output = {
          error: error.response.data.message,
          data: null,
        });
      }
      return (output = {
        error: error.message,
        data: null,
      });
    }
  };
};

export default axiosInstance;
