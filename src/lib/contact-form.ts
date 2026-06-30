export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Validate
  if (!data.name || !data.email || !data.message) {
    return { success: false, message: 'Будь ласка, заповніть обов\'язкові поля' }
  }
  
  if (!data.phone || !data.phone.match(/^[0-9+\-\s]+$/)) {
    return { success: false, message: 'Введіть коректний номер телефону' }
  }
  
  // Success
  return { success: true, message: 'Дякуємо! Вашу заявку успішно відправлено. Ми зв\'яжемося з вами протягом 15 хвилин.' }
}