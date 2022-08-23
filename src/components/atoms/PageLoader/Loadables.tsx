import * as React from 'react';

export const LoadablePage =
  (
    Component: React.LazyExoticComponent<React.ComponentType<any>>,
    Loader: NonNullable<React.ReactNode> | null = <div />
  ) =>
  (props: any) =>
    (
      <React.Suspense fallback={Loader}>
        <Component {...props} />
      </React.Suspense>
    );
