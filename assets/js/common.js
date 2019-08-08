var common = {
    getCommon: (str) => {
        let index = str.indexOf('?');
        console.log(index)
        let navName = '';
        // 判断是否带参数的情况
        if (index == -1) {
            navName = str.substring(str.lastIndexOf('/') + 1)
        } else {
            navName = str.substring(str.lastIndexOf('/') + 1, str.indexOf('?'))
        }
        return navName;
    }
}