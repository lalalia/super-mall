import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url : '/home/multidata' //封装的意义是：进行统一的管理，进行了解耦，方便管理
  })

}
