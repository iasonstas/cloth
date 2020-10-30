import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataArray = await res.json();
      setUser(dataArray[0]);
    };
    fetchData();
  });
  //  always fire the useEffect hook whenever either the hook containing it,
  //   so I use fetch hook gets called or inside of a component where
  //   it use effect is being used directly whenever that component renders I also want to just make sure I
  //   fire my hook so that's what's really good about use effects we can have all these different ways that
  //   we can use it you just have to think about your use case.

  // [] fires the useEffect hook the first time it ever gets initiated
};

export default useFetch;
