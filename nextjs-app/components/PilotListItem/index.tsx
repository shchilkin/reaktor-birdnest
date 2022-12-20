import { PilotWithDrone } from "../list";
import PilotListItemTime from "../PilotListItem-Time";

interface PilotListItemProps {
  pilot: PilotWithDrone;
}

const PilotListItem: React.FunctionComponent<PilotListItemProps> = ({
  pilot,
}) => {
  return (
    <div
      className={
        "flex-column inline-block py-2 border-solid border-2 border-gray-800 rounded-md"
      }>
      <div className='py-2 px-4 w-fit'>
        <div>
          <h5 className='font-bold'>
            {pilot.firstName} {pilot.lastName}
          </h5>
        </div>
        <div>
          <h6 className='font-normal'>{pilot.email}</h6>
        </div>
        <div>
          <h6 className='font-normal'>{pilot.phoneNumber}</h6>
        </div>
        <PilotListItemTime time={pilot.updatedAt} />
      </div>
    </div>
  );
};

export default PilotListItem;
