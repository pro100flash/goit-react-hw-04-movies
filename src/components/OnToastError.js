import { toast } from 'react-toastify'

export function onErrorToast() {
  toast.error('Please enter a valid request')
}

export function notFoundToast() {
  toast.warning('Sorry, no results were found')
}