import * as React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message
}) => (
  <div>
    <h1>A message from {email}</h1>
    <p>{message}</p>
  </div>
);
