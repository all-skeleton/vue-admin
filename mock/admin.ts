import {Random} from 'mockjs'
export default [
    {
        url: '/admin/login',
        method: 'get',
        response: () =>{
            return {
                code: 1,
                message: 'ok',
                data: {
                    id:1,
                    token:Random.integer(50, 70)
                },
            }
        }
    },
    {
        url: '/admin/admin-user-info',
        method: 'get',
        response: () =>{
            return {
                code: 1,
                message: 'ok',
                data: {
                    id:1,
                    username:"admin",
                    name:"admin",
                    avatar:"",
                    created_at:"0001-01-01 00:00:00",
                    updated_at:"0001-01-01 00:00:00"
                },
            }
        }
    },
]