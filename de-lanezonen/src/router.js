
// de Lanezonen

// router.js

import pathToRegexp from 'path-to-regexp'

import FrontView from './Pages/Front'
import DeLegende from './Pages/DeLegende'
import Evenementen from './Pages/Evenementen'

import NotFound from './Pages/NotFound'

const routes = [
  { path: '/', name: 'front', page: FrontView },
  { path: '/legende', name: 'DeLegende', page: DeLegende },
  { path: '/evenementen', name: 'Evenementen', page: Evenementen },
]

const notFoundRoute = { name: 'notFound', page: NotFound }

routes.forEach(route => route.re = pathToRegexp(route.path))

export const match = (path) => {
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    const params = route.re.exec(path)
    if (params) {
      return { route, params }
    }
  }

  return {
    route: notFoundRoute,
    params: {},
  }
}