// Routes
import config from 'config'
import { AcronymRoutes } from '../components/acronym/acronym.module'

const API_PREFIX = config.get('API_PREFIX')
const routes = [
  {
    path: '/acronym',
    route: AcronymRoutes,
  },
]

export default (app) => {
  routes.forEach((route) => {
    app.use(API_PREFIX + route.path, route.route)
  })
}
