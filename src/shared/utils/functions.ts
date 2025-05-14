export const checkNameValidity = (name: string) => {
  const nameRegex = /^([A-Za-zÁÉÍÓÚáéíóúÑñ]+)(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
  return nameRegex.test(name);
};
