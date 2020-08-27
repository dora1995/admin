import { post, get } from '@/api/http'

export function getMenu() {
  return get('/pc/getMenu')
}
