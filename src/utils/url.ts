// eslint-disable-next-line import/prefer-default-export
export const getLastUrlPart = (url: string) => {
  return url.split('/').at(-1) ?? '';
};
