import type { Feature } from "../models/feature.model"

export const features: Feature[] = [
  {
    title: "Access your files, anywhere",
    description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    iconUrl: '/images/icon-access-anywhere.svg'
  },
  {
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    iconUrl: "/images/icon-security.svg",
  },
  {
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    iconUrl: "/images/icon-collaboration.svg",
  },
  {
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    iconUrl: "/images/icon-any-file.svg",
  },
]