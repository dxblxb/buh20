import { useMutation, useQuery, useQueryClient } from "react-query";
import { getData, setData } from "../../../API/getData";
import TopNavbarItem from "./TopNavbarItem/TopNavbarItem";

const TopNavbar = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation((newFrame) => setData(newFrame), {
    onSuccess: () => queryClient.invalidateQueries(["openframe"]),
  });
  const openFrame = useQuery({
    queryFn: () =>
      getData({
        openframe: "all",
      }),
    queryKey: ["openframe"],
  });
  const closeFrame = (id) => {
    const closedFrame = {
      key: "CLOSEFRAME",
      frame: id,
      session: 1,
    };
    mutation.mutate(closedFrame);
  };
  return (
    <div className="navbar-top">
      {openFrame.isLoading && <div>Загрука ...</div>}
      {openFrame.isSuccess &&
        openFrame.data.data.map((frame, index) => (
          <TopNavbarItem
            key={index}
            id={index}
            name={frame}
            closeFrame={closeFrame}
          />
        ))}
      {/* {openFrame.map((frame, index) => (
        <TopNavbarItem key={index} id={frame.id} name={frame.name} />
      ))} */}
    </div>
  );
};

export default TopNavbar;
