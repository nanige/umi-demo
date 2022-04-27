import http from '../utils/request';

export function login(data: any) {
  return http({
    url: data.url,
    data: data.data,
    method: 'post',
  });
}
