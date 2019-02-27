
var exports =module.exports = {}
exports.sortMap=function(map){
    return [...map.entries()].sort(function(a,b){
        if (a[1]<b[1]) {
            return 1
        }else if(a[1]>b[1]) {
            return -1
        }else {
            return 0;
       }
    })
}
