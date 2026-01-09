import { ContactItem } from "./components/ContactItem"
import  { type ContactInformation } from "../models/contactinformation.model"
import { ListItem } from "./components/ListItem"
import { contactInformation, pages, conditions, socials } from "./CONST"
import { SocialMediaLink } from "./components/SocialMediaLink"
import type { SocialMediaProps } from "../models/socialmediaprops.model"



export const Footer = () => {
  return (
    <footer className="pt-65 pb-40 px-6">
        <img className="mb-10" src="/images/logo.svg" alt="logo" />

        {/* ContactInfo */}
        <div className="flex flex-col gap-4 md:flex-row">
          <ContactItem styles="flex-2" {...contactInformation[0]} />
          <div className="flex flex-col gap-4 flex-1">
            {
              contactInformation.slice(1,4).map((item: ContactInformation) => (
                  <ContactItem key={item.alt} {...item}/>
              ))
            }
          </div>
        </div>
        
        {/*ABOUT*/}
        <div className="flex flex-col gap-8 mt-16 md:flex-row md:justify-between ">
          <ul className="list-none">
            {
              pages.map((page: string) => (
                <ListItem key={page} text={page} />
              ))
            }
          </ul>

          <ul className="list-none">
            {
              conditions.map((condition: string) => (
                <ListItem key={condition} text={condition} />
              ))
            }
          </ul>

          <div className="flex mt-6 pb-6 items-center justify-center gap-4">
          {
            socials.map((social: SocialMediaProps) => (
              <SocialMediaLink key={social.alt} {...social} />
            ))
          }
          </div>
        </div>

        

    </footer>
  )
}


