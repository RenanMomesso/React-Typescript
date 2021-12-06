import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import EpisodeListContent from "../../components/EpisodeListContent";

import { getEpisodesList, getHomeShow } from "../../redux/actions";
import { RootStore } from "../../redux/store";

import * as S from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const SdataShow = useSelector((state: RootStore) => state.serie);
  const episodes = useSelector((state: RootStore) => state.episodes);

  useEffect(() => {
    dispatch(getHomeShow());
    dispatch(getEpisodesList());
  }, []);

  if (SdataShow.loading) return <h1>Loading...</h1>;
  return (
    <S.MainWrapper>
      <S.BannerShow>
        <S.Image src={SdataShow.image.original} />
      </S.BannerShow>

      <S.ShowContent>
        <S.Title>{SdataShow.name}</S.Title>
        <S.Description
          dangerouslySetInnerHTML={{ __html: SdataShow.summary }}
        />
        <EpisodeListContent episodes={episodes} />
      </S.ShowContent>
    </S.MainWrapper>
  );
};

export default Home;
