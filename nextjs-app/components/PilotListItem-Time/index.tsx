interface PilotListItemTimeProps {
  time: Date | string;
}

const PilotListItemTime: React.FunctionComponent<PilotListItemTimeProps> = ({
  time,
}) => {
  const updatedAt = new Date(time);
  const seconds = (Date.now() - updatedAt.valueOf()) / 1000;
  const minutes = Math.floor(seconds / 60);

  const color = (minutes: number): string => {
    switch (minutes) {
      case 10:
      case 9:
      case 8:
        return "text-red-600";
      case 7:
      case 6:
        return "text-orange-400";
      default:
        return "text-emerald-500";
    }
  };

  return (
    <div className={color(minutes)}>{`last seen ${minutes} minutes ago`}</div>
  );
};

export default PilotListItemTime;
