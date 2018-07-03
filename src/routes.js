import settings from '../config/settings'
import GamesLayout from './components/layouts/GamesLayout'
import RunsLayout from './components/layouts/RunsLayout'
const routes = [
  {
    path: settings.routes.home,
    exact: true,
    component: GamesLayout
  },
  {
    path: settings.routes.runs,
    component: RunsLayout
  }
]

export default routes
