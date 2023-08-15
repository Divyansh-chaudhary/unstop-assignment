import { CalendarIcon, LinkIcon, MoreIcon } from "../../../../assets/icons";
import { CandidateAvatar, StyledAssessmentCard } from "./style";

type Props = {
  icon: React.ReactElement;
  heading: string;
  date: string;
  duration: string;
  questions: string;
  joinedCandidated: { color: string; name: string }[];
};

const AssessmentCard = ({
  icon,
  heading,
  date,
  duration,
  questions,
  joinedCandidated,
}: Props) => {
  return (
    <StyledAssessmentCard>
      <header>
        {icon} <MoreIcon />
      </header>
      <section>
        <p className="heading">{heading}</p>
        <div className="job-section">
          <span className="job">Job</span>
          <span className="date">
            <CalendarIcon /> {date}
          </span>
        </div>
      </section>
      <footer>
        <div>
          <div>
            <p className="count">{duration}</p>
            <p className="title">Duration</p>
          </div>
          <div>
            <p className="count">{questions}</p>
            <p className="title">Questions</p>
          </div>
        </div>
        <div>
          <button>
            <LinkIcon /> Share
          </button>
          <div className="all-candidates">
            {joinedCandidated.slice(0, 3).map((item, index) => (
              <CandidateAvatar key={index} color={item.color}>
                {item.name}
              </CandidateAvatar>
            ))}
            <p className="extra-person">
              {joinedCandidated.length - 3 > 3
                ? `+${joinedCandidated.length - 3}`
                : ""}
            </p>
          </div>
        </div>
      </footer>
    </StyledAssessmentCard>
  );
};

export default AssessmentCard;
