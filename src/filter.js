import Vue from 'vue'

import momnent from 'moment'

Vue.filter('dateFormate', function(dateStr, formate="YYYY-MM-DD HH:mm:ss"){
    return momnent(dateStr).format(formate);
} )
