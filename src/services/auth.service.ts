import CommonService from './common.service'

class AuthService extends CommonService {

  async accountVarification(params: { [key: string]: string }) {
    return await this.post('/account-verification', params)
  }

  async RequestOtpForLogin(params: { [key: string]: string }) {
    return await this.post('/login-or-create', params)
  }

   async Register(params: { [key: string]: string }) {
    return await this.post('/register', params)
  }

  async VerifyOtpForLogin(params: { [key: string]: string }) {
    return await this.post('/verify', params)
  }
  async ResendOtp(params: { [key: string]: string }) {
    return await this.post('/resend-otp', params)
  }

  async forgotPassword(params: { [key: string]: string }) {
    return await this.post('/reset-password-email', params)
  }

  async updatePassword(params: { [key: string]: string | null }) {
    return await this.post('/update-password', params)
  }

  async changePassword(params: any) {
    return await this.post('/change-password', params)
  }

  async resendVerificationEmail(params: { [key: string]: string }) {
    return await this.post('/resend-verification', params)
  }

  async getMe() {
    return await this.get('/me')
  }
  async updateProfile(params: { [key: string]: string | File | null }) {
    return await this.put('/profile', params)
  }

  async deleteAccount() {
    return await this.delete('/profile')
  }



}

export const authService = new AuthService()