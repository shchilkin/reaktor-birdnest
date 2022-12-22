import useSWR from "swr";
import IntrudersTableCell from "../IntrudersTableCell";
import { fetcher } from "../../utils/fetcher";
const IntrudersTable = () => {
    const { data, error } = useSWR("/api/pilots", fetcher, {
        refreshInterval: 2000,
    });
    if (error)
        return <code>{error}</code>;
    return (<table className='table-auto w-full text-left'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Last seen</th>
        </tr>
      </thead>
      <tbody>
        {/* @ts-expect-error */}
        {data === null || data === void 0 ? void 0 : data.sort(compareTime).map((pilot) => (<IntrudersTableCell key={pilot.id} pilot={pilot}/>))}
      </tbody>
    </table>);
};
export default IntrudersTable;
const getMinutes = (date) => {
    const updatedAt = new Date(date);
    const seconds = (Date.now() - updatedAt.valueOf()) / 1000;
    return seconds / 60;
};
const compareTime = (a, b) => {
    if (getMinutes(a.updatedAt) > getMinutes(b.updatedAt))
        return -1;
    if (getMinutes(a.updatedAt) < getMinutes(b.updatedAt))
        return 1;
    return 0;
};
//# sourceMappingURL=index.jsx.map