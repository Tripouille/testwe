import { FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';

// eslint-disable-next-line import/prefer-default-export
export const extractTotalPagesFromMeta = (meta?: FetchBaseQueryMeta): number => {
  const links = meta?.response?.headers.get('link')?.split(',');
  if (!links) return 0;
  const lastLink = links.find((link: string) => link.includes('last'));
  const lastLinkPageRegexResult = lastLink?.match(/page=([0-9]+)/);
  return Number(lastLinkPageRegexResult?.at(1) ?? 0);
};
