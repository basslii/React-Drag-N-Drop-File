import React, { lazy, Suspense } from 'react';

const LazyReactDragDropFilesNpm = lazy(() => import('./react-drag-drop-files-npm'));

const ReactDragDropFilesNpm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyReactDragDropFilesNpm {...props} />
  </Suspense>
);

export default ReactDragDropFilesNpm;
