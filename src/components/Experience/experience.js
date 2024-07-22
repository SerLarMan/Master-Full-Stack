import { setUpCompanycard } from "../CompanyCard/companyCard";

import "./experience.scss";
import "../../styles/global.scss";

export function setUpExperience() {
  const experience = document.createElement("section");
  experience.classList.add("experience");

  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("sectionTitle");

  const h2 = document.createElement("h2");
  h2.textContent = "EXPERIENCE";
  h2.id = "experience";

  const line = document.createElement("div");
  line.classList.add("line");

  sectionTitle.append(h2);
  sectionTitle.append(line);
  experience.append(sectionTitle);

  experience.append(
    setUpCompanycard(
      "https://media.licdn.com/dms/image/D4E0BAQEv9v_gcp3m3g/company-logo_200_200/0/1683718642523/unimat_prevencion_sl_logo?e=2147483647&v=beta&t=fkLtZg_lGpyv45VekL7BPWeDlI2rFaFt2meSpDaSqeU",
      "Unimat Prevención",
      "Junior Developer",
      [
        "Hacer cosas",
        "Dejar que una empresa me compre",
        "Dejar que esa empresa me explote",
      ],
      "https://www.unimatprevencion.es/"
    )
  );
  experience.append(
    setUpCompanycard(
      "https://media.licdn.com/dms/image/D4E0BAQGGjSOnMxbn9Q/company-logo_200_200/0/1689245558940/indaws_logo?e=2147483647&v=beta&t=DqkLd184xy-1stxth6sx2BlUn349JegUGo4YNQ-2qRA",
      "InDaws",
      "Junior Developer",
      ["Programar cosas movil", "Dejar que me roben tiempo y dinero"],
      "https://www.indaws.es/"
    )
  );

  return experience;
}
