"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fast_xml_parser_1 = require("fast-xml-parser");
const utils_1 = require("@reaktor-birdnest/utils");
const client_1 = require("@prisma/client");
const parserOptions = {
    ignorePiTags: true,
};
const parser = new fast_xml_parser_1.XMLParser(parserOptions);
const prisma = new client_1.PrismaClient();
const droneEndpoint = "https://assignments.reaktor.com/birdnest/drones";
const pilotEndpoint = "https://assignments.reaktor.com/birdnest/pilots/";
const getIntruderPilots = () => __awaiter(void 0, void 0, void 0, function* () {
    // Get Drone data and convert in from XML to JavaScript Object
    const droneData = yield axios_1.default
        .get(droneEndpoint)
        .then((response) => response.data)
        .then((data) => parser.parse(data)["report"]["capture"]["drone"])
        .catch((error) => {
        console.error(`Erorr occur while trying to get drone data: ${error}`);
    });
    // Array contains information about drones who passed the perimiter
    const droneIntruders = droneData.filter((drone) => 
    // TODO: Current implementation is not precise, consider comparing float coordinates
    (0, utils_1.isDroneViolatingPerimiter)(Math.floor(drone.positionX), Math.floor(drone.positionY)));
    return yield Promise.all(droneIntruders.map((drone) => __awaiter(void 0, void 0, void 0, function* () {
        const pilot = yield axios_1.default
            .get(pilotEndpoint + drone.serialNumber)
            .then((response) => response.data)
            .catch((error) => {
            console.error(`Erorr occur while trying to get pilot data: ${error}`);
        });
        return Object.assign(Object.assign({}, pilot), { drone: Object.assign({}, drone) });
    })));
});
const getStalePilotData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get all pilot data
        const data = yield prisma.pilot.findMany({});
        return data.filter((pilot) => {
            return (Date.now() - pilot.updatedAt.valueOf()) / 1000 >= 600;
        });
    }
    catch (error) {
        console.error("error occure while trying to get pilot data", error);
        return [];
    }
});
const writeIntruderPilots = () => __awaiter(void 0, void 0, void 0, function* () {
    const intrudersData = yield getIntruderPilots();
    Promise.all(intrudersData.map((pilot) => {
        const { pilotId, phoneNumber, firstName, lastName, email, createdDt, drone, } = pilot;
        console.info(`Write ${firstName} ${lastName} to intruders database`);
        return prisma.pilot
            .upsert({
            where: { pilotId },
            update: {},
            create: {
                pilotId,
                phoneNumber,
                firstName,
                lastName,
                email,
                createdDt,
                drone: {
                    create: {
                        serialNumber: drone.serialNumber,
                        manufacturer: drone.manufacturer,
                        model: drone.model,
                        mac: drone.mac,
                        ipv4: drone.ipv4,
                        ipv6: drone.ipv6,
                        firmware: drone.firmware,
                        positionX: drone.positionX,
                        positionY: drone.positionY,
                        altitude: drone.altitude,
                    },
                },
            },
        })
            .catch((error) => {
            console.error(error);
        })
            .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));
    }));
});
const deleteStalePilotData = () => __awaiter(void 0, void 0, void 0, function* () {
    const staleData = yield getStalePilotData();
    yield Promise.all(staleData.map((pilot) => {
        console.info(`delete ${pilot.firstName} ${pilot.lastName} from database`);
        return prisma.pilot
            .delete({ where: { id: pilot.id } })
            .catch((error) => console.error(error))
            .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));
    }));
});
setInterval(writeIntruderPilots, 2000);
setInterval(deleteStalePilotData, 1000);
//# sourceMappingURL=index.js.map