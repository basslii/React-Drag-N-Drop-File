import React, { lazy, Suspense } from 'react';

const LazyCustomDragDropFiles = lazy(() => import('./custom-drag-drop-files'));

const CustomDragDropFiles = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCustomDragDropFiles {...props} />
  </Suspense>
);

export default CustomDragDropFiles;
