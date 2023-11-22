export interface SearchParam<KeyType> {
  key: KeyType;
  value?: string | string[];
}

/*
  Read search params from url, and return them
  Manages return items as arrays if they include the 
  keyword "List" in the keyname
 */

export const getStateFromUrlSearchParams = <T>(): T => {
  const urlParams = new URLSearchParams(window.location.search);

  const nextParams = Array.from(urlParams.entries()).reduce((acc, entry) => {
    const key: string = entry[0];
    const isArray = key.includes("List");
    const value: string | string[] = isArray ? entry[1].split("-and-") : entry[1];

    return { ...acc, [key]: value };
  }, {} as T);

  return nextParams;
};

/*
  Add searchParams to the URL
  If params are the same as before, it does not push
  a new item to history to prevent unnecessary history log items

  Merges queryParams with previous history item if no queryParams
  are existent before. This is because we don't want a page that needs
  queryParams to only consist of pathName. 
*/

export const setUrlSearchParam = <UrlKeys>(searchParams: SearchParam<UrlKeys>[]): void => {
  const urlParams = new URLSearchParams(window.location.search);

  const prevParams = urlParams.toString();

  searchParams.forEach((sp: SearchParam<UrlKeys>) => {
    let nextValue: string | undefined = "";

    if (Array.isArray(sp.value)) {
      nextValue = sp.value.join("-and-");
    } else {
      nextValue = sp.value;
    }

    if (nextValue) {
      urlParams.set(sp.key as string, nextValue);
    } else if (urlParams.get(sp.key as string) !== null) {
      urlParams.delete(sp.key as string);
    }
  });

  if (prevParams === urlParams.toString()) {
    // Don't add a new item to the history if the params are equal
    return;
  }

  let newUrl = window.location.pathname;
  if (urlParams.toString()) {
    newUrl += `?${urlParams.toString()}`;
  }

  if (urlParams.toString() && prevParams === "") {
    // If no prev queryParams, merge them into the previous state
    window.history.replaceState({}, "", newUrl);
  } else {
    window.history.pushState({}, "", newUrl);
  }
};
