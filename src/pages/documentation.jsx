import "../styles/Documentation.module.css";
import { Content } from "./../components/content";
import { Sidenav } from "./../components/sidenav";
import { HeaderDocs } from "./../components/header-docs";

export const Documentation = () => {
  return (
    <>
      <HeaderDocs />
      <div className="body">
        <Sidenav />
        <Content />
      </div>
    </>
  );
};
