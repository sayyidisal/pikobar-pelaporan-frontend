import actions from './actions'
import mutations from './mutations'
import getters from './getters'

function initialState() {
  return {
    detailPasien: null,
    listKasus: [],
    totalList: 0,
    totalData: 0,
    totalPending: 0,
    formPasien: {
      id_case: '',
      id_case_national: '',
      id_case_related: '',
      name_case_related: '',
      name: '',
      nik: '',
      is_west_java: true,
      is_nik_exists: false,
      is_phone_number_exists: false,
      birth_date: '',
      age: '',
      month: '',
      yearsOld: '',
      monthsOld: '',
      gender: null,
      phone_number: null,
      address_street: '',
      address_province_code: '32',
      address_province_name: 'Jawa Barat',
      address_district_code: '',
      address_district_name: '',
      address_subdistrict_code: '',
      address_subdistrict_name: '',
      address_village_code: '',
      address_village_name: '',
      nationality: '',
      nationality_name: '',
      occupation: '',
      office_address: '',
      status: '',
      stage: '',
      final_result: '',
      report_source: '',
      there_are_symptoms: false,
      last_date_status_patient: '',
      diagnosis: [],
      diagnosis_other: '',
      diseases: [],
      diseases_other: '',
      first_symptom_date: '',
      history_tracing: [],
      is_went_abroad: false,
      visited_country: '',
      return_date: '',
      is_went_other_city: false,
      visited_city: '',
      is_contact_with_positive: false,
      history_notes: '',
      current_location_type: '',
      current_hospital_id: '',
      is_patient_address_same: false,
      current_location_address: '',
      current_location_district_code: '',
      current_location_subdistrict_code: '',
      current_location_village_code: '',
      current_location_village_name: '',
      other_notes: '',
      interviewers_name: '',
      interviewers_phone_number: '',
      interview_date: '',
      rt: '',
      rw: '',
      name_parents: '',
      note_nik: '',
      note_phone_number: '',
      place_of_birth: '',
      diagnosis_ards: '',
      diagnosis_covid: '',
      diagnosis_pneumonia: '',
      other_diagnosis: '',
      serum_check: '',
      sputum_check: '',
      swab_check: '',
      physical_check: '',
      pysichal_activity: '',
      smoking: '',
      consume_alcohol: '',
      income: '',
      travel: '',
      visited: '',
      start_travel: '',
      end_travel: '',
      close_contact: '',
      close_contact_confirm: '',
      close_contact_animal_market: '',
      close_contact_public_place: '',
      close_contact_medical_facility: '',
      close_contact_heavy_ispa_group: false,
      close_contact_health_worker: false,
      apd_use: [],
      name_close_contact: '',
      id_close_contact: '',
      name_close_contact_confirm: '',
      id_close_contact_confirm: '',
      close_contact_patient: [],
      inspection_support: [],
      close_contacted_before_sick_14_days: false,
      travelling_history_before_sick_14_days: false,
      travelling_history: [],
      visited_local_area_before_sick_14_days: false,
      visited_local_area: [],
      has_visited_public_place: false,
      visited_public_place: [],
      area_transmision: [],
      close_contact_premier: [],
      is_other_diagnosisr_respiratory_disease: false,
      close_contact_have_pets: false,
      close_contact_performing_aerosol_procedures: false,
      other_diagnosisr_respiratory_disease: '',
      physical_check_temperature: '',
      physical_check_blood_pressure: '',
      physical_check_pulse: '',
      physical_check_respiration: '',
      physical_check_height: '',
      physical_check_weight: '',
      contact_date: '',
      transmission_types: 0,
      cluster_type: 0,
      cluster_other: '',
      animal_market_date: '',
      animal_market_other: '',
      public_place_date: '',
      public_place_other: '',
      medical_facility_date: '',
      medical_facility_other: '',
      health_workers: ''
    },
    formPasienV2: {
      interviewers_name: '',
      interviewers_phone_number: '',
      interview_date: '',
      status: '',
      final_result: '',
      nik: '',
      is_nik_exists: false,
      note_nik: '',
      is_phone_number_exists: false,
      phone_number: '',
      note_phone_number: '',
      name: '',
      gender: '',
      place_of_birth: '',
      birth_date: '',
      age: '',
      month: '',
      yearsOld: '',
      monthsOld: '',
      address_province_code: '32',
      address_province_name: 'Jawa Barat',
      last_date_status_patient: '',
      address_district_code: '',
      address_district_name: '',
      address_subdistrict_code: '',
      address_subdistrict_name: '',
      address_village_code: '',
      address_village_name: '',
      address_street: '',
      rt: '',
      rw: '',
      nationality: '',
      nationality_name: '',
      occupation: '',
      office_address: '',
      report_source: '',
      name_parents: ''
    },
    formRiwayatPasien: {
      case: '',
      status: '',
      stage: '',
      final_result: '',
      there_are_symptoms: false,
      last_date_status_patient: '',
      diagnosis: [],
      diagnosis_other: '',
      history_tracing: [],
      first_symptom_date: '',
      is_went_abroad: false,
      visited_country: '',
      return_date: '',
      is_went_other_city: false,
      visited_city: '',
      is_patient_address_same: false,
      is_contact_with_positive: false,
      diseases: [],
      diseases_other: '',
      history_notes: '',
      report_source: '',
      current_location_type: '',
      current_hospital_id: '',
      current_location_address: '',
      current_location_district_code: '',
      current_location_subdistrict_code: '',
      current_location_village_code: '',
      other_notes: ''
    }
  }
}

const state = {
  detailPasien: initialState().detailPasien,
  listKasus: initialState().listKasus,
  totalList: initialState().totalList,
  totalData: initialState().totalData,
  totalPending: initialState().totalPending,
  formPasien: initialState().formPasien,
  formPasienV2: initialState().formPasienV2,
  formRiwayatPasien: initialState().formRiwayatPasien
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
