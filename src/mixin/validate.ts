import Swal from 'sweetalert2'

export function checkMail (mail: string) {
  const emailRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (!emailRegex.test(mail)) {
    Swal.fire({
      icon: 'error',
      title: '電子信箱格式錯誤'
    })
    return false
  }
  return true
}

/**
 * 
 * @param password 密碼
 * @param checkPwd 確認密碼
 * @returns Boolean
 */
export function checkPassword(password: string, checkPwd: string = '') {
  if(password.length < 8) {
    Swal.fire({
      icon: 'error',
      title: '密碼需至少 8 碼以上'
    })
    return false
  }
  if(!(/[A-Za-z]+/g.test(password) && /[0-9]+/g.test(password))) {
    Swal.fire({
      icon: 'error',
      title: '密碼需為英文與數字混合'
    })
    return false
  }
  if(checkPwd !== password) {
    Swal.fire({
      icon: 'error',
      title: '兩次密碼不一致'
    })
    return false
  }
  return true
}
