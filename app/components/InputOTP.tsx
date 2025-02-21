'use client'

import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOtp() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
            <InputOTPSlot index={0} />
            </InputOTPGroup>
            <InputOTPGroup>
            <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPGroup>
            <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
            <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPGroup>
            <InputOTPSlot index={4} />
            </InputOTPGroup>
            <InputOTPGroup>
            <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
