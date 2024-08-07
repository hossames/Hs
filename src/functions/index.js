export const toBase64 = async (image) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  const dataUrl = await new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject("errot");
  });
  return dataUrl;
};

export const URLs = () => {
  const baseUrl = "http://localhost:3000/api";
  return {
    signUp: `${baseUrl}/signup`,
    singIn: `${baseUrl}/signin`,
    userDetails: `${baseUrl}/userDetails`,
    logout: `${baseUrl}/logout`,
    getCookies: `${baseUrl}/getcookies`,
    Users: `${baseUrl}/users`,
  };
};
