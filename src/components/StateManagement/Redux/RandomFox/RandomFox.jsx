import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomFoxImg } from "../../../../slices/FoxSlice";

export default function RandomFox() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.fox);

  useEffect(() => {
    dispatch(fetchRandomFoxImg());
  }, [dispatch]);

  if (status === "loading") return <p>Loading..</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return <>{data && <img src={data.image} alt="A photo of a random fox" />}</>;
}
