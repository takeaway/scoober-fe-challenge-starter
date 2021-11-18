export function getQueryParams<Type>(hRef: string): Partial<Type> | {} {
  const query = hRef.split('?').length > 1 && hRef.split('?')[1];
  const queryList = query && query.split('&');

  if (!query || !queryList || !queryList.length) return {};

  return queryList.reduce((params: { [x: string]: string; }, keyValueSet: string) => {
    const keyValue = keyValueSet.split('=');
    return {
      ...params,
      [keyValue[0]]: keyValue[1],
    };
  }, {});
}
