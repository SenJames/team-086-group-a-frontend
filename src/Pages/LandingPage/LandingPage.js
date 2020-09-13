import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
const LandingPage = () => {
  const [datas, setData] = useContext(NonRegisterContextMembers);
  const { data } = datas;
  return <div>{data[0]}</div>;
};

export default LandingPage;