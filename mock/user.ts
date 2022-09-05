import Mock, {Random} from 'mockjs'

export default [
    {
        url: '/admin/user/list',
        method: 'get',
        response: () => {
            return {
                code: 1,
                message: 'ok',
                data: Mock.mock({
                    'list|10': [
                        {
                            id: '@id',
                            user_name: "@cname",
                            openid: Random.integer(1, 32),
                            unionid: Random.integer(1, 32),
                            nick_name: "@cname",
                            head_img: "@url",
                            vip: Random.integer(1, 4),
                            is_lock: Random.integer(1, 2),
                            vip_end_at: Random.date('yyyy-MM-dd'),
                            created_at: Random.date('yyyy-MM-dd'),
                            updated_at: Random.date('yyyy-MM-dd'),
                            deleted_at: null,
                            user_contact: {
                                uid: 31,
                                superior: 19,
                                superior_two: 1,
                                updated_at: Random.date('yyyy-MM-dd')
                            },
                            wallet: {
                                uid: 31,
                                balance: Random.integer(10, 5000),
                                total_balance: Random.integer(10, 5000)
                            },
                            ai_dou: {
                                uid: 31,
                                ai_dou: Random.integer(10, 5000),
                                total_ai_dou: Random.integer(10, 5000)
                            }
                        }
                    ],
                    "page": "1",
                    "page_size": "10",
                    "total": 15,

                })
            };
        }
    },
    {
        url: '/admin/user/lock',
        method: 'post',
        response: () => {
            return {
                code: 1,
                message: 'ok',
                data: {}
            }
        }
    },
    {
        url: '/admin/user/deleted',
        method: 'post',
        response: () => {
            return {
                code: 1,
                message: 'ok',
                data: {}
            }
        }
    },
    {
        url: '/admin/user/open-vip',
        method: 'post',
        response: () => {
            return {
                code: 1,
                message: 'ok',
                data: {
                    vip: Random.integer(1, 4),
                    vip_end_at: Random.date('yyyy-MM-dd'),
                }
            }
        }
    },
]