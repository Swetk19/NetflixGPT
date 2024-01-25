

import { useSelector } from "react-redux";
import VideoBackground from './VideoBackground';
import Title from "./Title";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(movies === null)return;

    const mainMovie = movies[0];
    console.log(mainMovie);
    const {original_title, overview, id} = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <Title title={original_title} oveview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer