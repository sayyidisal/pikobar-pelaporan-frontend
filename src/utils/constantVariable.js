import i18n from '@/lang'

import { format } from 'date-fns'
import moment from 'moment'
export const ISO_FORMAT = 'yyyy-MM-dd'
export const DEFAULT_DATE = format(new Date(), ISO_FORMAT)
export const DEFAULT_ACTION_LABELS = {
  apply: 'Apply',
  cancel: 'Cancel',
  reset: 'Reset'
}

export const ResponseRequest = {
  TIMEOUT: 'ECONNABORTED',
  NETWORKERROR: 'Network Error',
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  UNPROCESSABLE: 422,
  SERVERERROR: 500
}

export function baseUrl() {
  let url = `${window.location.hostname}`
  if (window.location.port.length > 0) {
    url += `:${window.location.port}`
  }
  return url
}

export function getAge(DOB) {
  const today = new Date()
  const birthDate = new Date(DOB)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1
  }
  return age
}

export function getAgeWithMonth(dob) {
  const today = moment()
  const birthDate = moment(dob, 'YYYY/MM/DD')
  let age = moment.duration(today.diff(birthDate))
  const year = age.years()
  const month = age.months()
  age = {
    'year': year,
    'month': month
  }
  return age
}

export function listYear() {
  var currentYear = new Date().getFullYear()
  const list = []
  for (var y = 0; y < 100; y++) {
    list.push(currentYear)
    currentYear--
  }
  return list
}

export function listDays() {
  const listDay = []
  for (let d = 1; d <= 31; d++) {
    listDay.push(d)
  }
  return listDay
}

export const symptomOptions = [
  i18n.t('label.body_temperature_greater_than_38C'),
  i18n.t('label.body_temperature_less_than_38C'),
  i18n.t('label.cough'),
  i18n.t('label.cold'),
  i18n.t('label.sore_throat'),
  i18n.t('label.headache'),
  i18n.t('label.hard_to_breathe'),
  i18n.t('label.shivering'),
  i18n.t('label.malaise'),
  i18n.t('label.muscle_ache'),
  i18n.t('label.nausea_or_vomiting'),
  i18n.t('label.abdomen_pain'),
  i18n.t('label.diarrhea')
]

export const transportOptions = [
  i18n.t('label.train'),
  i18n.t('label.bus'),
  i18n.t('label.private_car'),
  i18n.t('label.etc'),
  i18n.t('label.public_transportation'),
  i18n.t('label.transport_online'),
  i18n.t('label.taxi')
]

export const activityContactOptions = [
  'Berpelukan',
  'Berjabat Tangan',
  'Minum Memakai Tempat Yang Sama',
  'Menggunakan Peralatan Yang Sama',
  'Merawat Kasus Primer Pada Saat Kasus Primer Sakit / Mengantar Ke Rumah Sakit',
  'Mencium',
  'Tidur Di Ruangan Yang Sama',
  'Makan Memakai Tempat Yang Sama',
  'Menggunakan Toilet Yang Sama'
]

export const protectionToolOptions = [
  'Gown',
  'Sarung Tangan',
  'Kacamata pelindung (goggle)',
  'Masker Medis',
  'FFP3',
  'Masker NIOSH-N95, AN EU STANDARD FFP2'
]

export const listMonthName = [
  {
    value: 1,
    text: 'Januari'
  },
  {
    value: 2,
    text: 'Februari'
  },
  {
    value: 3,
    text: 'Maret'
  },
  {
    value: 4,
    text: 'April'
  },
  {
    value: 5,
    text: 'Mei'
  },
  {
    value: 6,
    text: 'Juni'
  },
  {
    value: 7,
    text: 'Juli'
  },
  {
    value: 8,
    text: 'Augustus'
  },
  {
    value: 9,
    text: 'September'
  },
  {
    value: 10,
    text: 'Oktober'
  },
  {
    value: 11,
    text: 'November'
  },
  {
    value: 12,
    text: 'Desember'
  }
]

export const additionalConditionOptions = [
  i18n.t('label.pregnant'),
  i18n.t('label.diabetes'),
  i18n.t('label.heart_disease'),
  i18n.t('label.hypertension'),
  i18n.t('label.malignant'),
  i18n.t('label.immunological_disorders'),
  i18n.t('label.chronic_kidney_failure'),
  i18n.t('label.chronic_liver_failure'),
  i18n.t('label.ppok')
]

export const rolesPerm = {
  'ADMIN': 'superadmin',
  'DINKESPROV': 'dinkesprov',
  'DINKESKOTA': 'dinkeskota',
  'FASKES': 'faskes'
}

export const rolesWidget = {
  'dinkeskota': [rolesPerm.DINKESKOTA],
  'dinkesKotaAndFaskes': [rolesPerm.DINKESKOTA, rolesPerm.FASKES]
}

export const rolesCriteria = {
  'stillQuarantine': ['CLOSECONTACT'],
  'stillSick': ['PROBABLE', 'SUSPECT', 'CONFIRMATION'],
  'recovery': ['PROBABLE', 'CONFIRMATION'],
  'discarded': ['CLOSECONTACT', 'SUSPECT']
}

export const apd = [
  i18n.t('label.apd_gown'),
  i18n.t('label.apd_surgical_mask'),
  i18n.t('label.apd_gloves'),
  i18n.t('label.apd_n95_mask'),
  i18n.t('label.apd_ffp3'),
  i18n.t('label.apd_goggle_glasses'),
  i18n.t('label.apd_not_at_all')
]

export const answerList = [
  {
    value: 1,
    text: i18n.t('label.yes')
  },
  {
    value: 2,
    text: i18n.t('label.not')
  },
  {
    value: 3,
    text: i18n.t('label.dont_know')
  }
]

export const yesOrNoAnswer = [
  {
    value: true,
    text: i18n.t('label.yes')
  },
  {
    value: false,
    text: i18n.t('label.not')
  }
]

export const listPhysicalActivity = [
  {
    value: 0,
    text: i18n.t('label.sedenter')
  },
  {
    value: 1,
    text: i18n.t('label.physical_exercise_less_than_150_minutes')
  },
  {
    value: 2,
    text: i18n.t('label.physical_exercise_more_than_150_minutes')
  }
]

export const incomeList = [
  {
    value: 0,
    text: i18n.t('label.not_earning')
  },
  {
    value: 1,
    text: i18n.t('label.less_than_one_million')
  },
  {
    value: 2,
    text: i18n.t('label.one_to_three_million')
  },
  {
    value: 3,
    text: i18n.t('label.three_to_five_million')
  },
  {
    value: 4,
    text: i18n.t('label.more_than_five_million')
  }
]

export const healthWorkerList = [
  {
    value: 'Dokter',
    text: i18n.t('label.doctor')
  },
  {
    value: 'Perawat',
    text: i18n.t('label.nurse')
  },
  {
    value: 'Farmasi',
    text: i18n.t('label.pharmacy')
  },
  {
    value: 'Dokter Spesialis Paru',
    text: i18n.t('label.lung_specialist')
  },
  {
    value: 'Dokter Spesialis Lain',
    text: i18n.t('label.another_specialist_doctor')
  },
  {
    value: 'Bidan',
    text: i18n.t('label.midwife')
  },
  {
    value: 'Ahli Gizi',
    text: i18n.t('label.nutritionists')
  },
  {
    value: 'Tenaga Kesehatan Masyarakat',
    text: i18n.t('label.community_health_workers')
  },
  {
    value: 'Lainnya',
    text: i18n.t('label.other')
  }
]
