import { MockMethod } from 'vite-plugin-mock'
import { userList, permissionList, roleList } from './data'
export const listToTree = (array: any[]) => {
  const arr = JSON.parse(JSON.stringify(array))
  const result = []
  const map = new Map()
  arr.forEach(item => {
    map.set(item.id, item)
  })
  for (const item of arr) {
    // 判断pid是否在map中，如果在说明这是一个子节点
    if (map.has(item.pid)) {
      if (!map.get(item.pid).children) {
        // 判断是否存在children属性，如果不存在则添加
        map.get(item.pid).children = []
      }
      map.get(item.pid).children.push(item)
    } else {
      // 直接放到数组中，作为父节点
      result.push(item)
    }
  }
  return result
}
const mockList: MockMethod[] = [
  {
    url: '/mock/login',
    method: 'post', // 请求方式
    statusCode: 200, // 返回的http状态码
    response: () => {
      return {
        // 返回的结果集
        errorCode: 200,
        errorMsg: '登录成功',
        data: {
          name: '一碗周',
        },
      }
    },
  },
  {
    url: '/mock/getUserList',
    method: 'get',
    statusCode: 200,
    response: () => {
      return {
        errorCode: 200,
        errorMsg: '获取成功',
        data: userList,
      }
    },
  },
  {
    url: '/mock/getRoleList',
    method: 'get',
    statusCode: 200,
    response: () => {
      roleList.forEach(role => {
        role.permissionNames = []
        for (const i in role.permission) {
          role.permissionNames.push(
            permissionList.find(power => power.id === role.permission[i]).name,
          )
        }
      })
      return {
        errorCode: 200,
        errorMsg: '获取成功',
        data: roleList,
      }
    },
  },
  {
    url: '/mock/getPermissionList',
    method: 'get',
    statusCode: 200,
    response: () => {
      return {
        errorCode: 200,
        errorMsg: '获取成功',
        data: permissionList,
      }
    },
  },
  {
    url: '/mock/getUserDetail',
    method: 'get',
    statusCode: 200,
    response: ({ query }) => {
      const id = query.id
      if (id === undefined) {
        return {
          errorCode: 400,
          errorMsg: 'id必传',
          // 返回最终数据
          data: null,
        }
      }
      const _userList = JSON.parse(JSON.stringify(userList))
      // 获取用户
      const user = _userList.find(u => u.id === parseInt(id))
      // 获取用户权限
      const permissionIdS = roleList.find(
        r => r.id === user.role.roleId,
      ).permission
      // 获取权限列表
      const pList = permissionIdS.map(i => {
        return permissionList.find(p => p.id === i)
      })

      return {
        errorCode: 200,
        errorMsg: '获取成功',
        // 返回最终数据
        data: Object.assign(user, { permissionList: listToTree(pList) }),
      }
    },
  },
]
export default mockList
