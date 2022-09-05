export default [
    {
        url: '/admin/__lock',
        method: 'post',
        response: () =>{
            return {
                code: 1,
                message: 'ok',
                data: {}
            }
        }
    },
    {
        url: '/admin/__delete',
        method: 'post',
        response: () =>{
            return {
                code: 1,
                message: 'ok',
                data: {}
            }
        }
    },
    {
        url: '/admin/public/scene',
        method: 'get',
        response: () =>{
            return {
                code: 1,
                message: 'ok',
                data: {
                    text:{
                        about:"1000",
                        pay_agreement:"1001"
                    },
                    upload:{
                        customer_service_wx:"1005",
                        head_img:"1004",
                        ppt_cover:"1000",
                        ppt_detail:"1001",
                        ppt_file:"1003"
                    }
                }
            }
        }
    },{
        url: '/admin/public/vip-config',
        method: 'get',
        response: () =>{
            return {
                code: 1,
                message: 'ok',
                data: [
                    {
                        Level:0,
                        Name:"免费",
                        Profit:0,
                        Price:0,
                        Icon:"",
                        Length:0,
                        VideoParse:3
                    },
                    {
                        Level:1,
                        Name:"VIP",
                        Profit:0,
                        Price:99,
                        Icon:"",
                        Length:12,
                        VideoParse:6
                    },
                    {
                        Level:2,
                        Name:"SVIP",
                        Profit:25,
                        Price:1999,
                        Icon:"",
                        Length:-1,
                        VideoParse:-1
                    },
                    {
                        Level:3,
                        Name:"SVIP+",
                        Profit:35,
                        Price:2999,
                        Icon:"",
                        Length:-1,
                        VideoParse:-1
                    }
                ]
            }
        }
    },
]