import { StyledCard } from "./style";

type Props = {
  heading: string;
  icon: React.ReactElement;
  data: {
    count: string;
    addOn?: string;
    text?: string;
  }[];
  className: string;
};

export const Card = ({ heading, icon, data, className }: Props) => {
  return (
    <StyledCard className={`card ${className}`}>
      <p className="sub-heading">{heading}</p>
      <div className="flex">
        {icon}
        <div className="info-list">
          {data?.map((item, index) => (
            <div key={index} className="info-box">
              <p className="numbers">
                <span className="count">{item.count}</span>
                {item.addOn ? (
                  <span className="addOn">{item.addOn}</span>
                ) : null}
              </p>
              {item.text ? <p className="text">{item.text}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </StyledCard>
  );
};
