import {
  // @ts-ignore
  STAGING_API_URL,
  // @ts-ignore
  PRODUCTION_API_URL,
  //@ts-ignore
  IS_STORYBOOK,
  // @ts-ignore
} from '@env';

export const isProduction = false;

interface Config {
  isDev: boolean;
  API_URL: string;
}

const Config = {
  isDev: __DEV__,
  API_URL: isProduction ? PRODUCTION_API_URL : STAGING_API_URL,
  isStorybook: IS_STORYBOOK.toLowerCase() === 'true',
};

export default Config;
