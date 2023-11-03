import React, {ComponentType, LazyExoticComponent} from 'react';
import {CircularProgress} from "@mui/material";

export const withSuspense = <P extends object>(
    Component: LazyExoticComponent<ComponentType<P>>
) => {
    return (props: P) => (
        <React.Suspense fallback={<CircularProgress/>}>
            <Component {...props} />
        </React.Suspense>
    );
};
