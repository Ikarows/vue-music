import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main'
import playList2 from '@/views/playList2'

Vue.use(Router)

export default new Router({
  routes: [
    {
          path: '/',
          name: 'main',
          component: main
    },
    {
        path: '/playlist2',
        name: 'playList2',
        component: playList2
    }
  ]
})
