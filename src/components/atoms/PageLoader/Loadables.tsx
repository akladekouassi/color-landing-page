import * as React from 'react';

export const LoadablePage =
  (
    Component: React.LazyExoticComponent<React.ComponentType<any>>,
    Loader: NonNullable<React.ReactNode> | null = <div />
  ) =>
  (props: unknown) =>
    (
      <React.Suspense fallback={Loader}>
        <Component {...props} />
      </React.Suspense>
    );
