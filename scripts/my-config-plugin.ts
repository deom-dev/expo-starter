import { ConfigPlugin, withInfoPlist } from 'expo/config-plugins';

// Pass `<string>` to specify that this plugin requires a string property.
export const withCustomConfig: ConfigPlugin<string> = (config, id) => {
  return withInfoPlist(config, config => {
    config.modResults.GADApplicationIdentifier = id;
    return config;
  });
};
