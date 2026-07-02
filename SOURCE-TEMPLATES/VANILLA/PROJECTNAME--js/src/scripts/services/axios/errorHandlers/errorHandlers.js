const errorHandlers = (error) => {
  if (!error.response) {
    // TODO Connection-Error
    const connectionError = new Error("خطا در برقراری ارتباط با سرور");
    // const connectionError = new Error("Unable to connect to the server");

    return Promise.reject(connectionError);
  }

  const { status, data } = error.response;

  switch (status) {
    //! Name-Error Status && Message
    case 401: {
      if (error.config._isRetried) {
        // LogOut && Remove Token

        error.isShowToast = false;

        return Promise.reject(error);
      }

      error.config._isRetried = true;

      // refreshToken();
    }

    //! eslint-disable-next-line no-fallthrough --- Should Fix This!
    default: {
      // TODO Default-Error Message
      const defaultMessage = data?.message ?? "عملیات ناموفق! دوباره تلاش کنید";
      // const defaultMessage = data?.message ?? "Something went wrong! Please try again";
      const defaultError = new Error(defaultMessage);
      defaultError.status = status;

      return Promise.reject(defaultError);
    }
  }
};

export default errorHandlers;
