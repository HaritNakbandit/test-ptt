import React, { cloneElement } from 'react';
import { AuthContextProvider } from './auth/auth_context';

function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}
export default function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[
        <AuthContextProvider />, 
      ]}
    >
      {children}
    </ProviderComposer>
  );
}