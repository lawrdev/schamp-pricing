import { atom } from 'recoil';

// demo data
import { ReactComponent as SmsSvg } from "../assets/sms.svg";

import { ReactComponent as VoiceSvg } from "../assets/voice.svg";
import { ReactComponent as EmailSvg } from "../assets/email.svg";
import { ReactComponent as WhatsappSvg } from "../assets/whatsapp.svg";
import { ReactComponent as VerificationSvg } from "../assets/verification.svg";
const data = [
    {
        title: "SMS",
        icon: <SmsSvg height="32px" width="32px" />,
        mssg1: "To Send SMS",
        mssg2: "To Receieve SMS",
        price1: "3.0870",
        per: "/sms",
        currency: "NGN",
        comingSoon: true,
        details: {
            title: "More details",
            link: "/",
        },
    },
    {
        title: "Voice",
        icon: <VoiceSvg height="32px" width="32px" />,
        mssg1: "To make Calls",
        mssg2: "To Receive Calls",
        price1: "84.0000",
        per: "/sec",
        currency: "NGN",
        comingSoon: true,
    },
    {
        title: "Email",
        icon: <EmailSvg height="32px" width="32px" />,
        mssg1: "Price Per Mail",
        price1: "0.7000",
        per: "/email",
        currency: "NGN",
    },
    {
        title: "Whatsapp",
        icon: <WhatsappSvg height="32px" width="32px" />,
        mssg1: "To Send Message",
        mssg2: "To Receive Message",
        price1: "3.5000",
        per: "/msg",
        currency: "NGN",
        price2: "0.0000",
        details: {
            title: "More details",
            link: "/",
        },
    },
    {
        title: "Verification",
        icon: <VerificationSvg height="32px" width="32px" />,
        mssg1: "To Send OTP",
        mssg2: "To Confirm OTP",
        price1: "0.0000",
        per: "/OTP",
        price2: "0.7000",
        currency: "NGN",
    },
]

export const pricingCardsState = atom({
    key: 'pricingCardsState',
    default: data,
});