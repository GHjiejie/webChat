import httpRequest from "../request/index";

// 登录
export const login = (params: any) => {
  console.log("params", params);

  return httpRequest({
    url: "user/login",
    method: "post",
    data: {
      ...params,
    },
  });
};
