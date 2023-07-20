import useGenericHook from "./GenericHook";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
// interface FetchGenresResponse {
//   count: number;
//   results: Genres[];
// }
// const useGenres = () => {
//   const [genres, setGenres] = useState<Genres[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };
const useGenres = () => useGenericHook<Genres>("/genres");
export default useGenres;
