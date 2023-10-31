import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import ContactCard from "../terms-and-conditions/ContactCard";

export default function page() {
  return (
    <CustomPageWrapper heading="Privacy Policy">
      <ContactCard
        heading="Privacy Policy of www.bignlean.com/"
        paragraph={`This Application collects some Personal Data from its Users.
This document can be printed for reference by using the print command in the settings of any browser.`}
      />
      <Heading content="Owner and Data Controller" />
      <ContactCard
        heading="Types of Data collected"
        paragraph={`Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Usage Data; first name; last name; phone number; address; state; email address; ZIP/Postal code; city; Cookies.
Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party’s consent to provide the Data to the Owner.`}
      />
      <Heading content="Mode and place of processing the Data" />
      <ContactCard
        heading="Methods of processing"
        paragraph={`The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.`}
      />
      <ContactCard
        heading="Legal basis of processing"
        paragraph={`The Owner may process Personal Data relating to Users if one of the following applies:`}
        unorderList={[
          {
            heading:
              "Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;",
          },
          {
            heading: `provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;
processing is necessary for compliance with a legal obligation to which the Owner is subject;
processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;
processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.`,
          },
          {
            heading: `In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.`,
          },
        ]}
      />
      <ContactCard
        heading="Place"
        paragraph={`The Data is processed at the Owner’s operating offices and in any other places where the parties involved in the processing are located.

Depending on the User’s location, data transfers may involve transferring the User’s Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.

Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.

If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.`}
      />
      <ContactCard
        heading="Retention time"
        paragraph={`Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.
Therefore:
Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.
Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.
The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.
Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.`}
      />
      <Heading content="The purposes of processing" />
      <ContactCard
        heading=""
        paragraph="The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Displaying content from external platforms, Contacting the User and Interaction with external social networks and platforms.
For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”."
      />
      <Heading content="Contacting the User" />
      <ContactCard
        heading="Contact form (this Application)"
        paragraph={`By filling in the contact form with their Data, the User authorizes this Application to use these details to reply to requests for information, quotes or any other kind of request as indicated by the form’s header.
Personal Data processed: address; city; email address; first name; last name; phone number; state; ZIP/Postal code.
This type of service allows you to view content hosted on external platforms directly from the pages of this Application and interact with them.This type of service might still collect web traffic data for the pages where the service is installed, even when Users do not use it.`}
      />
      <ContactCard
        heading="Google Fonts (Google LLC)"
        paragraph={`Google Fonts is a typeface visualization service provided by Google LLC that allows this Application to incorporate content of this kind on its pages.
Personal Data processed: Usage Data; various types of Data as specified in the privacy policy of the service.
Place of processing: United States – Privacy Policy. Privacy Shield participant.
This type of service allows interaction with social networks or other external platforms directly from the pages of this Application.The interaction and information obtained through this Application are always subject to the User’s privacy settings for each social network.This type of service might still collect traffic data for the pages where the service is installed, even when Users do not use it.It is recommended to log out from the respective services in order to make sure that the processed data on this Application isn’t being connected back to the User’s profile.`}
      />
      <ContactCard
        heading="Facebook Like button and social widgets (Facebook, Inc.)"
        paragraph={`The Facebook Like button and social widgets are services allowing interaction with the Facebook social network provided by Facebook, Inc.
Personal Data processed: Cookies; Usage Data.
Place of processing: United States – Privacy Policy. Privacy Shield participant.`}
      />
      <ContactCard
        heading="Twitter Tweet button and social widgets (Twitter, Inc.)"
        paragraph={`The Twitter Tweet button and social widgets are services allowing interaction with the Twitter social network provided by Twitter, Inc.
Personal Data processed: Cookies; Usage Data.
Place of processing: United States – Privacy Policy. Privacy Shield participant.`}
      />
      <Heading content="The rights of Users" />
      <ContactCard
        heading=""
        paragraph={`Users may exercise certain rights regarding their Data processed by the Owner.
In particular, Users have the right to do the following:`}
        unorderList={[
          {
            heading:
              "Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.",
          },
          {
            heading: `Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.`,
          },
          {
            heading: `Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.`,
          },
          {
            heading: `Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.`,
          },
          {
            heading: `Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.`,
          },
          {
            heading: `Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.`,
          },
          {
            heading: `Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User’s consent, on a contract which the User is part of or on pre-contractual obligations thereof.`,
          },
          {
            heading: `Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.`,
          },
        ]}
      />
      <ContactCard
        heading="Details about the right to object to processing"
        paragraph={`Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.
Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.`}
      />
      <ContactCard
        heading="How to exercise these rights"
        paragraph={`Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.`}
      />
      <Heading content="Additional information about Data collection and processing" />
      <ContactCard
        heading="Legal action"
        paragraph={`The User’s Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services.The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.`}
      />
      <ContactCard
        heading="Additional information about User’s Personal Data"
        paragraph={`In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request`}
      />
      <ContactCard
        heading="System logs and maintenance"
        paragraph={`For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.`}
      />
      <ContactCard
        heading="Information not contained in this policy"
        paragraph={`More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.`}
      />
      <ContactCard
        heading="How “Do Not Track” requests are handled"
        paragraph={`This Application does not support “Do Not Track” requests.To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.`}
      />
      <ContactCard
        heading="Changes to this privacy policy"
        paragraph={`The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application and/or – as far as technically and legally feasible – sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.

Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.`}
      />
      <ContactCard
        heading="Personal Data (or Data)"
        paragraph={`Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.`}
      />
      <ContactCard
        heading="Usage Data"
        paragraph={`Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server’s answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User’s IT environment`}
      />
      <ContactCard
        heading="User"
        paragraph={`The individual using this Application who, unless otherwise specified, coincides with the Data Subject.`}
      />
      <ContactCard
        heading="Data Subject"
        paragraph={`The natural person to whom the Personal Data refers.`}
      />
      <ContactCard
        heading="Data Processor (or Data Supervisor)"
        paragraph={`The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.`}
      />
      <ContactCard
        heading="Data Controller (or Owner)"
        paragraph={`The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.`}
      />
      <ContactCard
        heading="This Application"
        paragraph={`The means by which the Personal Data of the User is collected and processed.`}
      />
      <ContactCard
        heading="Service"
        paragraph={`The service provided by this Application as described in the relative terms (if available) and on this site/application.`}
      />
      <ContactCard
        heading="European Union (or EU)"
        paragraph={`Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.`}
      />
      <ContactCard
        heading="Cookies"
        paragraph={`Small sets of data stored in the User’s device.`}
      />
    </CustomPageWrapper>
  );
}

const Heading = ({ content }: { content: string }) => {
  return (
    <h2 className="text-black text-xl not-italic font-bold mb-3">{content}</h2>
  );
};
