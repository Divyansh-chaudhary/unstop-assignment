import React, { ReactElement, useCallback, useState } from "react";
import {
  RoundStatusIcon,
  DashboardIcon,
  AssessmentIcon,
  MyLibraryIcon,
  CutIcon,
  MenuIcon,
} from "../../assets/icons";
import { StyledLayout } from "./style";
import Badge from "../../components/Badge";

export const Layout = ({
  children,
}: {
  children: ReactElement;
}): React.ReactElement => {
  const [selectedNav, setSelectedNav] = useState<string>("assesment");
  const [open, setOpen] = useState<boolean>(false);

  // return props of navigation to change current navigation
  const getProps = useCallback(
    (name: string) => ({
      className: selectedNav === name ? "active" : "",
      onClick: setSelectedNav.bind(null, name),
    }),
    [selectedNav]
  );

  return (
    <StyledLayout>
      <nav className={`${open ? "open" : ""}`}>
        <header>
          <p>Menu</p>
          <CutIcon
            role="button"
            className="cursor-pointer"
            onClick={setOpen.bind(null, false)}
          />
        </header>
        <ul className="border">
          <li {...getProps("dashboard")}>
            <DashboardIcon />
            <p>Dashboard</p>
          </li>
          <li {...getProps("assesment")}>
            <AssessmentIcon />
            <p>Assesment</p>
          </li>
          <li {...getProps("library")}>
            <MyLibraryIcon />
            <p>My Library</p>
          </li>
        </ul>
        <ul className="bottom-list">
          <li>
            <Badge text="Admin" />
            <div>
              <RoundStatusIcon />
              <p>Round Status</p>
            </div>
          </li>
        </ul>
      </nav>
      <article>
        <header>
          <div className="menu-opener">
            <MenuIcon
              className="menu-icon cursor-pointer"
              role="button"
              onClick={setOpen.bind(null, true)}
            />
            <h3>Assessment</h3>
          </div>
          <ul>
            <li className="active">My Assessments</li>
            <li className="unstop-item">Unstop Assessments</li>
          </ul>
        </header>
        <main>{children}</main>
      </article>
    </StyledLayout>
  );
};
