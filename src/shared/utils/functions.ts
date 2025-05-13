export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const checkNameValidity = (name: string) => {
  const nameRegex = /^([A-Za-zÁÉÍÓÚáéíóúÑñ]+)(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
  return nameRegex.test(name);
};
