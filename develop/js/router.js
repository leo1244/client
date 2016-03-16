/**
 * router名称空间
 */
var router = [

/**
 * 首页
 */
    {
        path: 'home/index',
        data: {
            url: '/tmp/master/home/index',
            templateUrl: 'tmp/master/home/index.html'
        }
    },

/**
 * 商品
 */
    {
        path: 'product/category',
        data: {
            url: '/tmp/master/product/category',
            templateUrl: 'tmp/master/product/detail.html'
        }
    },
    {
        path: 'tmp/master/product/list',
        data: {
            url: '/tmp/master/product/list',
            templateUrl: 'tmp/master/product/list.html',
            controller: function(){

            }
        }
    },
    {
        path: 'tmp/master/product/detail',
        data: {
            url: '/tmp/master/product/detail',
            templateUrl: 'tmp/master/product/detail.html'
        }
    },

/**
 * 用户部分
 */
    {
        path: 'user/home',
        data: {
            url: '/tmp/master/user/home',
            templateUrl: 'tmp/master/user/home.html'
        }
    },

    /* 余额部分 */
    {
        path: 'user/cash',
        data: {
            url: '/tmp/master/user/cash',
            templateUrl: 'tmp/master/user/cash.html'
        }
    },

    /* 积分 */
    {
        path: 'user/point',
        data: {
            url: '/tmp/master/user/point',
            templateUrl: 'tmp/master/user/point.html'
        }
    },

    /* 代金券 */
    {
        path: 'user/coupon',
        data: {
            url: '/tmp/master/user/coupon',
            templateUrl: 'tmp/master/user/coupon.html'
        }
    },

    /* 订单 */
    {
        path: 'user/order',
        data: {
            url: '/user/order',
            templateUrl: 'tmp/user/order.html'
        }
    },

    /* 意见反馈 */
    {
        path: 'user/feedback',
        data: {
            url: '/tmp/master/user/feedback',
            templateUrl: 'tmp/master/user/feedback.html'
        }
    },
    /* 关于我们 */
    {
        path: 'user/about',
        data: {
            url: '/tmp/master/user/about',
            templateUrl: 'tmp/master/user/about.html'
        }
    },

    /* 消息 */
    {
        path: 'user/message',
        data: {
            url: '/tmp/master/user/message',
            templateUrl: 'tmp/master/user/message.html'
        }
    },

    // 订单部分
    /*{
     path: 'user/order/index',
     data: {
     url: '/user/order/index',
     templateUrl: 'tmp/user/order/detail.html'
     }
     },*/
    {
        path: 'user/order/detail',
        data: {
            url: '/user/order/detail',
            templateUrl: 'tmp/user/order/detail.html'
        }
    },

    // 礼包卡券部分
    {
        path: 'user/tick/home',
        data: {
            url: '/tmp/master/user/tick/home',
            templateUrl: 'tmp/master/user/tick/home.html'
        }
    },
    {
        path: 'user/tick/detail',
        data: {
            url: '/tmp/master/user/tick/detail',
            templateUrl: 'tmp/master/user/tick/detail.html'
        }
    },
    {
        path: 'user/tick/valid',
        data: {
            url: '/tmp/master/user/tick/valid',
            templateUrl: 'tmp/master/user/tick/valid.html'
        }
    },
    {
        path: 'user/tick/exchange',
        data: {
            url: '/tmp/master/user/tick/exchange',
            templateUrl: 'tmp/master/user/tick/exchange.html'
        }
    },

    // 收货部分
    {
        path: 'user/receive/home',
        data: {
            url: '/tmp/master/user/receive/home',
            templateUrl: 'tmp/master/user/receive/home.html'
        }
    },
    {
        path: 'user/receive/add',
        data: {
            url: '/tmp/master/user/receive/add',
            templateUrl: 'tmp/master/user/receive/add.html'
        }
    },
    {
        path: 'user/receive/update',
        data: {
            url: '/tmp/master/user/receive/update',
            templateUrl: 'tmp/master/user/receive/update.html'
        }
    },

    /* 帮助中心 */
    {
        path: 'user/help/list',
        data: {
            url: '/tmp/master/user/help/list',
            templateUrl: 'tmp/master/user/help/list.html'
        }
    },
    {
        path: 'user/help/detail',
        data: {
            url: '/tmp/master/user/help/detail',
            templateUrl: 'tmp/master/user/help/detail.html'
        }
    },

/**
 * 订单部分
 */
    {
        path: 'order/cart',
        data: {
            url: '/order/cart',
            templateUrl: 'tmp/order/cart.html'
        }
    },
    {
        path: 'order/submit',
        data: {
            url: '/order/submit',
            templateUrl: 'tmp/order/submit.html'
        }
    },
    {
        path: 'order/result',
        data: {
            url: '/order/result',
            templateUrl: 'tmp/order/result.html'
        }
    },

/**
 * 分销部分
 */
    {
        path: 'distr/home',
        data: {
            url: '/tmp/master/distr/home',
            templateUrl: 'tmp/master/distr/home.html'
        }
    },
    {
        path: 'distr/level',
        data: {
            url: '/tmp/master/distr/level',
            templateUrl: 'tmp/master/distr/level.html'
        }
    },
    {
        path: 'distr/code',
        data: {
            url: '/tmp/master/distr/code',
            templateUrl: 'tmp/master/distr/code.html'
        }
    },
    {
        path: 'distr/chart',
        data: {
            url: '/tmp/master/distr/chart',
            templateUrl: 'tmp/master/distr/chart.html'
        }
    },
    {
        path: 'distr/info',
        data: {
            url: '/tmp/master/distr/info',
            templateUrl: 'tmp/master/distr/info.html'
        }
    },
    {
        path: 'distr/content',
        data: {
            url: '/tmp/master/distr/content',
            templateUrl: 'tmp/master/distr/content.html'
        }
    },
];
