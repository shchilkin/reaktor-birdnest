import writeIntruderPilots from './writeIntruderPilots/writeIntruderPilots';
import deleteStalePilotData from './deleteStalePilotData/deleteStalePilotData';

setInterval(writeIntruderPilots as () => void, 2000);
setInterval(deleteStalePilotData as () => void, 1000);
