import {lazy, Suspense} from "react";
import type {ComponentType} from 'react'

export const lazyLoad = (factory: () => Promise<{ readonly default: ComponentType<unknown> }>) => {
  const Page = lazy(factory)
  return (
    <Suspense fallback={
      <h1>...loading</h1>
    }>
      <Page/>
    </Suspense>
  )
}