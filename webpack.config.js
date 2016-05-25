/**
 * Created by linten01 on 2016/5/24 0024.
 */
var path = require('path');
module.exports = {

    entry:{
        'index':'./index.es6'
    },
    output:{
        path:"./statices/js/",
        filename:'[name].js'
    },
    devServer: {
        inline: true,
        port: 5000,
        hot: true
    },
    module:{
        loaders:[
            {
                test:path.join(__dirname,''),
                loaders:['babel-loader'],
                exclude:/node_modules/,

            }
        ]
    }


};