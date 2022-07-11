import { createRouter, createWebHistory } from "vue-router";
import Recordings from '@/components/Recordings.vue'
import Index from '@/components/Index.vue'
import Live from '@/components/Liverecorder.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/snapbyte', name: 'My Recordings', component: Recordings, alias: ['/'] },
        { path: '/index', name: 'My-Recordings', component: Index, alias: ['/index'] },
        { path: '/live', name: 'My-Recordings', component: Live, alias: ['/live'] },


    ]
})

export default router