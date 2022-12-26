import { Pilot as PrismaPilot } from '@prisma/client';
import prismaClient from '../prismaClient';
import getStalePilotData from '../getStalePilotData/getStalePilotData';

const deleteStalePilotData = async () => {
  const staleData = await getStalePilotData();

  await Promise.all(
    staleData.map((pilot: PrismaPilot) => {
      console.info(`delete ${pilot.firstName} ${pilot.lastName} from database`);
      return prismaClient.pilot
        .delete({ where: { id: pilot.id } })
        .catch(error => console.error('error occur while trying to delete pilot data', error.message))
        .finally(void (async () => await prismaClient.$disconnect())());
    })
  );
};

export default deleteStalePilotData;
