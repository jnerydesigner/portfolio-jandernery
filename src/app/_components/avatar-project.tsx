import Avatar from "react-avatar";

interface AvatarProjectProps {
  project: string;
  size: string;
  name: string;
}

const AvatarProject = ({ project, size, name }: AvatarProjectProps) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
  return <Avatar round={true} size={size} color={"green"} name={initials} />;
};

export default AvatarProject;
