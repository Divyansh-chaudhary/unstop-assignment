import {
  CandidateIcon,
  PurposeIcon,
  SourceIcon,
  TotalAssessmentIcon,
} from "../../assets/icons";
import { useGlobalContext } from "../../context/globalContext";
import { Card } from "./components/Card";
import { Container } from "./style";

const AssessmentOverview = () => {
  const { showAssessmentOverview } = useGlobalContext();

  return (
    <Container className={showAssessmentOverview ? "show" : ""}>
      <h3 className="section-heading">Assessments Overview</h3>
      <div className="grid">
        <Card
          className="total"
          heading="Total Assessments"
          icon={<TotalAssessmentIcon />}
          data={[{ count: "34" }]}
        />
        <Card
          className="candidates"
          heading="Candidates"
          icon={<CandidateIcon />}
          data={[
            {
              count: "11,145",
              addOn: "+89",
              text: "Total Candidate",
            },
            {
              count: "114",
              addOn: "+89",
              text: "Who Attempted",
            },
          ]}
        />
        <Card
          className="source"
          heading="Candidates Source"
          icon={<SourceIcon />}
          data={[
            {
              count: "11,000",
              addOn: "+89",
              text: "E-mail",
            },
            {
              count: "145",
              addOn: "+89",
              text: "Social Share",
            },
            {
              count: "145",
              addOn: "+89",
              text: "Unique Link",
            },
          ]}
        />
        <Card
          className="purpose"
          heading="Total Purpose"
          icon={<PurposeIcon />}
          data={[{ count: "11,145" }]}
        />
      </div>
    </Container>
  );
};

export default AssessmentOverview;
