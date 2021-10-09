/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved_ = await promiseCreator();
        setResolved(resolved_);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    /* eslint-disable-next-line */
  }, deps);
  return [loading, resolved, error];
}
