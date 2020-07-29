import { useEffect, useState } from "react";

const usePersistedState = (defaultValue, key) => {
  const storedValue = window.localStorage.getItem(key);
  const [value, setValue] = useState(storedValue ? storedValue : defaultValue);
  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
/*
as it is now, usePersisteState is useState, but with a dfault value and an option to 
take a key
logic:
we have a value inside local state that we want to retrieve, that value is key
the first time you run useP with a specific key, it'll be empty, so check if its null, 
then put a default value (empty) 
with storedValue we want to 
in the use effect, when the stored value is changed, we want to set the window.localstore 
(in storeValue) to the new value
*/
export default usePersistedState;
