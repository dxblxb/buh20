import { useMutation, useQueryClient } from "react-query";
import { setData } from "../../../API/getData";

const Navbar = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation((newFrame) => setData(newFrame), {
    onSuccess: () => queryClient.invalidateQueries(["openframe"]),
  });
  const openFrame = (type) => {
    const newFrame = {
      key: "NEWFRAME",
      frame: type,
      session: 1,
    };
    mutation.mutate(newFrame);
  };
  return (
    <div className="navbar">
      <div onClick={() => openFrame("SALES")}>Продажи</div>
      <div>Закупки</div>
      <div>Склад</div>
      <div onClick={() => openFrame("NOMENCLATURE")}>Номенклатура</div>
    </div>
  );
};
export default Navbar;
