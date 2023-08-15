import { BagIcon, FilterIcon, GraphIcon, SearchIcon } from "../../assets/icons";
import { useGlobalContext } from "../../context/globalContext";
import { color } from "../../styles/theme";
import AssessmentCard from "./components/AssessmentCard";
import NewAssessmentCard from "./components/NewAssesmentCard";
import { Container } from "./style";

const MyAssessment = () => {
  const { toggleAssessmentOverview, showAssessmentOverview } =
    useGlobalContext();

  return (
    <Container>
      <div className="heading-box">
        <h3 className="section-heading">My Assessments</h3>
        <div>
          <SearchIcon />
          <FilterIcon />
          <GraphIcon
            role="button"
            className={`cursor-pointer ${
              showAssessmentOverview ? "active" : ""
            }`}
            onClick={toggleAssessmentOverview}
          />
        </div>
      </div>
      <div className="all-assessments">
        <NewAssessmentCard />
        <AssessmentCard
          icon={<BagIcon />}
          heading="Math Assessment"
          date="20 Apr 2023"
          duration="00"
          questions="00"
          joinedCandidated={[
            {
              color: color.purple,
              name: "LP",
            },
          ]}
        />
        <AssessmentCard
          icon={<BagIcon />}
          heading="Math Assessment"
          date="20 Apr 2023"
          duration="00"
          questions="00"
          joinedCandidated={[
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
          ]}
        />
        <AssessmentCard
          icon={<BagIcon />}
          heading="Math Assessment"
          date="20 Apr 2023"
          duration="00"
          questions="00"
          joinedCandidated={[
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
          ]}
        />
        <AssessmentCard
          icon={<BagIcon />}
          heading="Math Assessment"
          date="20 Apr 2023"
          duration="00"
          questions="00"
          joinedCandidated={[
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
          ]}
        />
        <AssessmentCard
          icon={<BagIcon />}
          heading="Math Assessment"
          date="20 Apr 2023"
          duration="00"
          questions="00"
          joinedCandidated={[
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
            {
              color: color.purple,
              name: "LP",
            },
            {
              color: color.primary,
              name: "LP",
            },
            {
              color: color.red,
              name: "LP",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default MyAssessment;
