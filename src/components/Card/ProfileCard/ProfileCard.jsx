import React from "react";
import Selfie from "../../../Assets/Images/selfie.webp";
import Resume from "../../../Assets/resume.pdf";
import Blueprint from "../../UI/Blueprint/Blueprint";

/** The profile plate: a duotoned figure over a spec table. */
const ProfileCard = () => (
  <div>
    <figure className="m-0">
      <Blueprint className="duotone h-[380px]">
        <img
          src={Selfie}
          alt="Muhammad Mamooji"
          className="h-full w-full object-cover object-center"
        />
      </Blueprint>
      <figcaption className="mt-3 text-[10px] uppercase tracking-[0.16em] text-ink/50">
        Fig. 02 — Muhammad Mamooji
      </figcaption>
    </figure>

    <table className="table mt-8">
      <tbody>
        <tr>
          <th className="w-24 border-b border-ink/10">Program</th>
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.conestogac.on.ca/fulltime/software-engineering-technology"
            >
              Conestoga College
            </a>
          </td>
        </tr>
        <tr>
          <th className="w-24 border-b border-ink/10">Location</th>
          <td>Ontario, Canada</td>
        </tr>
        <tr>
          <th className="w-24 border-b border-ink/10">Email</th>
          <td>
            <a href="mailto:mamoojim@hotmail.com">mamoojim@hotmail.com</a>
          </td>
        </tr>
        <tr>
          <th className="w-24 border-b border-ink/10">Resume</th>
          <td>
            <a href={Resume} download>
              Download PDF
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProfileCard;
