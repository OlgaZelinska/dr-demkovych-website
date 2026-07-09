export interface DoctorInfo {
  name: string
  position: string
  experience: number
  education: string[]
}

export const doctorInfo: DoctorInfo = {
  name: 'Олександр Демкович',
  position: 'Пластичний хірург, кандидат медичних наук',
  experience: 15,
  education: [
    'Київська медична академія імені О.О. Бойка, специалість "Хірургія", 2009',
    'Аспірантура Прикарпатського національного університету імені В. Стефаника, 2012',
    'Міжнародний сертифікат з мінімально інвазивної хірургії, 2015'
  ]
}

export const getDoctorInfo = async (): Promise<DoctorInfo> => {
  return doctorInfo
}