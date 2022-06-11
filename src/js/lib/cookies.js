const cookie = {
  get(arg) {
    if (document.cookie) {
      let cookies = document.cookie.split("; ");
      cookies = cookies.reduce((obj, curr) => {
        let [key, value] = curr.split("=");
        obj[key] = value;
        return obj;
      }, {});
      return arg in cookies ? cookies[arg] : null;
    }
    return null;
  },
  set(key, value, expires, path = "/") {
    //判断expires是否为整数,cookie持续日期一般按整数天来算
    if (Number.isInteger(expires)) {
      let d = new Date();
      //设置cookie过期时间,当前时间加上expires
      d.setDate(d.getDate() + expires);

      document.cookie = `${key}=${value};expires=${d};path=${path}`;
    } else {
      //不设置expires,就让他默认一次会话销毁
      document.cookie = `${key}=${value};path=${path}`;
    }
  },
  remove(key, path = "/") {
    this.set(key, "", -1, path);
  },
};

export default cookie;
