// 自定义组件逻辑 (custom.js)
Component({
    properties: {
        // 定义了name属性，可以在使用组件时，由外部传入。此变量可以直接在组件模板中使用
        name: {
            type: String,
            value: 'swan'
        }
    },
    data: {
        age: 1,
        statusBarHeight: 0,
    },
    methods: {
        created() {
            try {
                const result = swan.getSystemInfoSync();
                this.setData({
                    'statusBarHeight': result.statusBarHeight
                });
                console.log('getSystemInfoSync success', result);
            } catch (e) {
                console.log('getSystemInfoSync fail', e);
            }
            // swan.getSystemInfo({
            //     success: res => {
            //         console.log('getSystemInfo success', res);
            //         this.setData({
            //             'statusBarHeight': res.statusBarHeight
            //         });
            //     },
            //     fail: err => {
            //         console.log('getSystemInfo fail', err);
            //     }
            // });
        },
        back() {
            swan.navigateBack({
                success: res => {
                    console.log('navigateBack success', res);
                },
                fail: err => {
                    console.log('navigateBack fail', err);
                }
            });
        }
    }
});