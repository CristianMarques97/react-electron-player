import getVar from '.'

class AppLocalization {
  URL: string = getVar('REACT_APP_LOCALE_URL', '')
}

export default new AppLocalization()
