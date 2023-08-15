import { ChangeEvent, useState } from "react";
import { CutIcon, PlusIcon } from "../../../../assets/icons";
import { Modal, NewAssessmentCardStyled } from "./style";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";
import { sizes } from "../../../../constants/mediaQueries";

const NewAssessmentCard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const screenWidth = useScreenWidth();
  console.log("screenWidth", screenWidth);
  const [skills] = useState([
    "UI/UX and Design",
    "No of Question",
    "Web Development",
    "UI/UX and Design",
  ]);

  return (
    <>
      <NewAssessmentCardStyled onClick={setShowModal.bind(null, true)}>
        <PlusIcon />
        <h3 className="section-heading">New Assessment</h3>
        <p className="description">
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
      </NewAssessmentCardStyled>
      <Modal show={showModal}>
        <div
          onClick={setShowModal.bind(null, false)}
          className={`overlay ${showModal ? "show" : ""}`}
        />
        <section className={` ${showModal ? "show" : ""}`}>
          <header>
            <p>
              {screenWidth < sizes.tablet
                ? "Sub-Section Details"
                : "Create new assessment"}
            </p>
            <CutIcon role="button" onClick={setShowModal.bind(null, false)} />
          </header>
          <form>
            <div>
              <label>Name of assessment</label>
              <input placeholder="Type here" type="text" />
            </div>
            <div>
              <label>Purpose of the test is</label>
              <select>
                <option disabled>Select</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div>
              <label>Description</label>
              <select>
                <option disabled>Select</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div>
              <label>Skills</label>
              <div className="preview">
                {skills.map((item, index) => (
                  <div key={index}>
                    {item} <CutIcon />
                  </div>
                ))}
              </div>
              <input className="skill" type="text" placeholder="Type here" />
            </div>
            <div>
              <label>Duration of assessment</label>
              <input type="text" placeholder="HH:MM:SS" />
            </div>
            <footer>
              <button type="button">Save</button>
            </footer>
          </form>
        </section>
      </Modal>
    </>
  );
};

export default NewAssessmentCard;
