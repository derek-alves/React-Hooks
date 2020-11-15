interface Response{
  token:string;
  user:{
    name:string;
    email:string;
  }
}

export function signIn():Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "asdfasd2fasd2fs1ad5f4sa5df4adfasdfas5df",
        user: {
          name: "Derek",
          email: "derek@derek.com",
        },
      });
    }, 2000);
  });
}
