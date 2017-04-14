﻿
var china = [];

function paintMap(R) {
    var attr = {
        "fill": 'rgba(0,0,0,.5)',
        "stroke": "#eee",
        "stroke-width": 1,
        "stroke-linejoin": "round"
    };

    china.aomen = {
        name: "锦江区",
        path: R.path("M234,59c0.3,2.3,0.7,4.7,1,7c6.4,0.2,7.5,3,11,4c3,0.9,4.9-1.6,8-2c1.1,2.1,1.4,1.8,2,5c-1.7,1.8-1.7,2.5-2,6c8-0.2,10.8-1.2,16,2c4.5-3.2,9-4.4,16-3c0.5,1.5,0.7,1.7,1,4c-0.7,0-1.3,0-2,0c0,0.3,0,0.7,0,1c-0.7-0.3-1.3-0.7-2-1c0,0.3,0,0.7,0,1c-0.8,1.1-0.6,0.9-1,3c2.4,0.6,3.1,1.1,5,2c-0.3,1.7-0.7,3.3-1,5c3.2,1.7,6,1.5,7,7c-0.3,0.3-0.7,0.7-1,1c-5.9-1.4-6.8,5-14,4c-10.9-1.5-21.4,4.6-30,8c-2.2,0.9-2.8-1.2-4-1c-8.5,1.4-14,2.2-20,7c1.7,2.4-0.1,4.2,2,9c1,0.3,2,0.7,3,1c1.9,2.9-3.6,1.9-1,4c3.5,2.9,6,3.3,7,9c-2.8,1.2-4.2,0.6-5,6c1.8,1.6,1.4,0.9,2,4c-0.9,0.9-1.3,1.8-2,3c-4-0.2-3.3-2-4,3c5.5,2.5,15.7,6.1,16,14c-1,1.7,0.3,5.3,0,6c-1.5,3.2-6.7,5.2-8,9c-1.6,4.5,1.6,6.6-2,9c-2,1.6-11.2,3.3-15,4c-1.1-2.1-1.4-1.8-2-5c-6.1-0.1-11.9,1.8-14,4c-1.1,1.5-2.1,3.1-1,4c0.9,0.9,1.8,1.3,3,2c-0.6,1.8-0.2,1-1,2c-3.4,3.3-9,3.2-16,3c-1.5-2.5-2.3-2.3-3-6c2.1-1.6,4.9-4.5,6-7c-0.8-1.1-0.6-0.9-1-3c-11.3-3.5-17.9-1.2-32-1c-4.8,7.3-10.9,11.1-17,17c-8.8-1.9-11.8-6.9-17-12c1-3,2-6,3-9c-9.1-0.2-10.1-4.9-16-7c-5.8-2.1-6.1,2.9-13,1c-3.5-1-4.4-2.7-10-3c-3,3.2-8.1,8-13,9c-1-1-2-2-3-3c-2.9-4.5-1.2-13.5-1-23c-3.1-0.3-5.6-1.1-8-2c-0.5-4.2-1.3-7.7,0-10c3.4-10.2-3.9-6.2-3-19c-1.3,0-2.7,0-4,0c-0.6-1.8-0.2-1-1-2c2.8-4.1,3.5-3.1,3-9c-5.3-0.3-10.7-0.7-16-1c-1.1-2.2-2.5-6.4-3-7c-4.5,2.3-24.9-5.3-26-11c5.3-1.5,10.4-0.8,15-5c3-2.7,3.6-8.8,7-11c1.1-0.8,0.9-0.6,3-1c0-1,0-2,0-3c10.6-6.5,5.5-12.2,26-12c2.2-1.7,1.6-1.4,4-1c0-0.3,0-0.7,0-1c-0.3,0-0.7,0-1,0c0.3-0.3,0.7-0.7,1-1c1.1-0.8,0.9-0.6,3-1c2.5,3,3.7,5.5,9,6c0.3-1,0.7-2,1-3c-2.2-1.6-3-1.7-2-4c1.4-3.6,3.1-3.2,8-3c2.2,2.3,3.4,2.8,8,3c1.8-3.2,4.5-4.5,6-8c-3.7-2.4-4.2-4.5-4-11c1.8-1.3,1.7-2,4-3c2.7-2.1,7-2.1,12-2c0.3,0.3,0.7,0.7,1,1c-0.1,3.2-0.4,6.3,0,7c1.8,1.1,1.9,0.2,4,1c0.5,1.5,0.7,1.7,1,4c6.3-1.1,15.5-12.9,25-7c6.5,2.3,7.3,7.8,15,9c3.4-14.1,15.9-6.4,20-16c0.8-1.1,0.6-0.9,1-3c-2.1-1.1-1.8-1.4-5-2c-1.2,0.9-3.2,0.1-5,1c-5.5,2.9,0.9,5.1-12,5c-1.1-2.1-1.4-1.8-2-5c2.2-2.3,3.4-5.1,4-9c-2.2-1.9-1.2-2.2-5-3c-1.5,2.5-1.3,1.8-5,2c-1.8-2.6-3-2.3-4-6c4.4-3.6,3.9-7,6-11c2.5,1.9,2.4,2.6,7,3c0.3-0.3,0.7-0.7,1-1c-0.3-1-0.7-2-1-3c7.1-0.7,8.5-4,15-3c0,1,0,2,0,3c-0.8,1-0.4,0.3-1,2c3.1-0.4,2.4-0.7,5,0c-0.3,1.3-0.7,2.7-1,4c8.8-0.2,8,3.8,13,6c8.1,3.5,13.6-2.3,14,9c-3.2,1.8-4.5,2.1-5,7c0.3,0.3,0.7,0.7,1,1c6.3-0.1,9.8,0.9,14,2c0.8,2.2,1,5.4,1,9c1.9,2.8,0.5,6.7,0,10c0.3,0,0.7,0,1,0C217,56.5,229,58.5,234,59z").attr(attr)
    }
    china.hk = {
        name: "成华区",
        path: R.path("M92,66.8 M212,56.8c-0.3,0,0.3,1,0,1c-1.2-0.8-2.7-1.8-5-2c0.3-0.7,0.7-1.3,1-2c-0.3,0-0.7,0-1,0c-1.6,0.2-2.8-0.4-6-1c-1.5,2.9-2,1.6-3,3c0.7,1.5,0.1,0.1,0,3c-5.8-0.4-4.8,5.1-13,7c-1.6-1.8-0.9-1.4-4-2c0.9,4,1.4,7.3-4,6c0.3,0.3,0.7,0.7,1,1c1.9,0.8-2,1-2,1c-1.1-0.8-1.7-0.7-5-1c-1.9,3.9,0,5.3-5,6c-2.9-1.5-4.9-0.7-8,1c-0.3-2.3-0.5-2.5-1-4c-0.7,0-1.3,0-2,0c0,2,0,4,0,6c1.4,2.2,0.5,8.1,0,11c3.7,0,7.3,0,11,0c1.5,0.9,4.7,1.3,8,2c0,0.3,0,0.7,0,1c-2.5,3-1.7,7.5-4,12c2.5,0.2,3.3-1.1,4,3c-2.4,1.1-2.7,2-4,4c-3.5-2.9-12.7-7.4-16-8c-1.7-1.3-3.1-1.6-6-2c0,1,0,2,0,3c-2.3,0.3-4.7,0.7-7,1c-1.9,4.2-1.2,8.8-8,10c-2.5-2.3-7.2-3-9-6c1.2-2.6-0.5-2.7,1-6c-7-1.7-11.7-2.6-19-4c0.7-6,0.8-7.4-2-13c-2.6,0.8-2.4,1.2-5,2c0-0.7,0-1.3,0-2c-0.8-1.1-0.6-0.9-1-3c-4.8,0.2-5.8,0-10-2c-0.7,3.3-1,2.3-2,5c3.4,1.8,2.1,1.2,3,5c-3.1-0.2-7.6,1.6-10-1c-1.5-2.1-2.9-6.8-4-12c-3.6-0.4-15-8-15-8c-0.8-1-0.4-0.3-1-2").attr(attr)
    };
    china.taiwan = {
        name: "武侯区",
        path: R.path("M142,129c4.1-1.7,8.2-3.3,9-7c3.8-0.5,5.7-1.1,9,0c0.4-3.6-0.5-2.5,2-4c1-0.8,7.3-4.7,9-5c2.3,3.1,4.4,0.4,5,6c-3.3,0.1-4.8,3.3-7,7c6,0,17.6,10.1,20,8c1,0.3,2,0.7,3,1c0.3,1,0.7,2,1,3c1.1,0.6,5.5-0.5,6,0c2,2.1,1.8,5,2,9c-1,0-2,0-3,0c0.7,4.2,1.2,7.5,7,8c1.6-2.3,1.6-2.1,3-2c2.3,1.3,7.8,6.4,9,5c1-1,2-2,3-3c3.9,2.5,4,0.7,6,3").attr(attr)
    };
    china.guangdong = {
        name: "青羊区",
        path: R.path("M56.3,121.7c0.3-0.3,0.7-0.7,1-1c3.4,0,8.2-2,14-3c0,0.7,0,1.3,0,2c-1.3,1.4-1.4,1.8-2,4c1.8,0.6,1,0.2,2,1c1.8-0.6,1-0.2,2-1c1.2-1.2,1.8-2.8,3-4c1.9,0.9,1.2,0.4,4,0c-0.1,3.9-2.2,2.6,2,4c2.8-3.8,4.1-2.1,9-2c0,0.7,0,1.3,0,2c-0.3,0-0.7,0-1,0c0.3,0.3,0.7,0.7,1,1c1.6,1.2,0.5,0.6,2,0c3.5-1.6-0.6-3.8,3-5c2,1.8,3,1.1,4,2c1,1.7,0.1,2.3,1,4c1.4,1,3.3,1,6,1c0.9-1.5,1.8-2.9,3-4c1.9,0.9,0.7,0.5,3,0c0,0.7,0,1.3,0,2c1.7,1.8-0.5,2.9,6,3c5.2,3.4,17.7,0.2,23,0c0,2.7-0.8,2.6,3,4c1,0.7,12,0,12,0c0,0.7,0,1.3,0,2c1.8,0.8,4.7-1.2,5-1c0.6,0.4,1,2.6,2,3c0.7-0.3,1.3-0.7,2-1c2.4,2.1,2.4,3.8,6,5c-0.7,3.1,0.1,3.4,1,7c-2.4,0.4-5.9,1.2-8,2c-0.3,1-0.7,2-1,3c0.6,1,3.4,10,4,13c-2.2,1.4-5,3.2-7,5c1.8,1.5,2.1,3.6,3,6c-3.5,1.3-4.7,0.5-5,6c3.5,2.5-0.1,3.4-1,8c-3.2,0.8-1.5-0.5-3,2c0.8,1,0.4,0.3,1,2").attr(attr)
    };
}