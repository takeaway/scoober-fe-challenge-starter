function loadLanguage(context: __WebpackModuleApi.RequireContext): Record<string, any> {
  return Object.fromEntries(context.keys()
    .map(id => [id.substring(2, id.length - 5), context(id)]));
}

export default {
  en: loadLanguage(require.context('./en', false, /\.json$/)),
  de: loadLanguage(require.context('./de', false, /\.json$/)),
};
