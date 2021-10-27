import React, { FC, Suspense } from 'react';

type IDynamicLoaderProps = { component: any };

const DynamicLoader: FC<IDynamicLoaderProps> = ({ component }) => {
  const LazyComponent = React.lazy(() => component);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default DynamicLoader;
