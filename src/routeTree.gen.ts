/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as EmployeeImport } from './routes/employee'
import { Route as CafeImport } from './routes/cafe'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const EmployeeRoute = EmployeeImport.update({
  path: '/employee',
  getParentRoute: () => rootRoute,
} as any)

const CafeRoute = CafeImport.update({
  path: '/cafe',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cafe': {
      id: '/cafe'
      path: '/cafe'
      fullPath: '/cafe'
      preLoaderRoute: typeof CafeImport
      parentRoute: typeof rootRoute
    }
    '/employee': {
      id: '/employee'
      path: '/employee'
      fullPath: '/employee'
      preLoaderRoute: typeof EmployeeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cafe': typeof CafeRoute
  '/employee': typeof EmployeeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cafe': typeof CafeRoute
  '/employee': typeof EmployeeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cafe': typeof CafeRoute
  '/employee': typeof EmployeeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/cafe' | '/employee'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/cafe' | '/employee'
  id: '__root__' | '/' | '/cafe' | '/employee'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CafeRoute: typeof CafeRoute
  EmployeeRoute: typeof EmployeeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CafeRoute: CafeRoute,
  EmployeeRoute: EmployeeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/cafe",
        "/employee"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/cafe": {
      "filePath": "cafe.tsx"
    },
    "/employee": {
      "filePath": "employee.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
