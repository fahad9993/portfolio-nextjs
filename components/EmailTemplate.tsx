import * as React from "react";

interface EmailTemplateProps {
  fullname: string;
}

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   fullname,
// }) => (
//   <div>
//     <h1>Welcome, {fullname}!</h1>
//   </div>
// );

export default function EmailTemplate({ fullname }: EmailTemplateProps) {
  return (
    <div>
      <p>Hello {fullname},</p>
      <p>Thank you for contacting me. I will get back to you soon.</p>
      <p>Best Regards,</p>
      <p style={{ color: "blue" }}>Md. Fahad Rahman</p>
    </div>
  );
}
